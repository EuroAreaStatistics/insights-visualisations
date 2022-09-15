#!/bin/sh
set -e

cat  series.csv | sed '1s/^\xEF\xBB\xBF//' | dos2unix | sed 's/;/","/g;s/^/["/;1s/^/[/;s/$/"],/;$s/,$/]/' |
  jq '( .[0] | .[0] = "Country" | .[1] = "Time" ) as $h | .[1:] | map(
    .[0] as $t | with_entries({ key: $h[.key], value })
    ) | flatten' | jq --slurpfile c countries.json 'map(.Country |= ($c[0][. | gsub(" balance| services"; "")] // .))' |
  jq 'reduce .[] as $item ({r: []}; (if ($item | .Country != "") then $item | .Country else .t end) as $t | .r += [ $item | .Country |= $t ] | .t = $t) | .r' |
  jq '[ .[] | .Time as $t | del(.Time) | .Country as $c | del(.Country) | to_entries | map(.geo = $c | .time = $t |  .value |= (if test("^ *-?[0-9.]+ *$") then tonumber else select(. != "") end)) ] | flatten' > series.json

printf "dataset = "
jq -s 'flatten |
  ([ .[] | to_entries[] | select(.key != "value") ] | flatten | group_by(.key) | [ .[] | { key: .[0].key, value: [.[].value] | unique } ] | from_entries) as $keys |
  ( $keys | with_entries(.value |= {category: {index: (. | with_entries({key: .value, value: .key}) ) }}) ) as $dim |
  ( $keys | keys ) as $id |
  [ $id[] | $keys[.] | length ] as $s |
  {
    class: "dataset",
    value: [ .[] | { value, key: (
          (. as $i | $keys | with_entries( $i[.key] as $k | .value |= index($k) ) ) as $idxs |
          reduce ($id | to_entries[]) as $item (0; (. * $s[$item.key]) + $idxs[$item.value]) | tostring
    )}] | sort_by(.key | tonumber) | from_entries,
    dimension: $dim,
    id: $id,
    size: $s,
  }
' series.json
