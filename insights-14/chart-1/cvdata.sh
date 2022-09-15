#!/bin/sh
set -e

# test for jq bug #2230 (?)
jq '.[] | (tonumber?) // .' <<<'["X","9"]' | grep -q '"9"' || ( echo jq bug; exit 1 )

cat  series.csv | sed '1s/^\xEF\xBB\xBF//' | dos2unix | sed 's/;/","/g;s/^/["/;1s/^/[/;s/$/"],/;$s/,$/]/' | jq '.[0][1:] as $h | .[1:] | map(
  .[0] as $t | .[1:] | to_entries | map(
    {
      series: "balance",
      geo: $h[.key] | select(. != ""),
      time: $t,
      value: (.value | if test("^ *-?[0-9.]+ *$") then tonumber else select(. != "") end)
    })) | flatten' | jq --slurpfile c countries.json 'map(.geo |= ($c[0][.] // .))' |
jq '["Min","Max","Min country","Max country"] as $t | ([{key: .[].geo | select(. | IN($t[]) | not  )}] | from_entries | keys) as $c | [[ .[] | select(.geo | IN($t[]))  | . as $d | $c | map( { geo: ., series: $d.geo, time: $d.time, value: $d.value } ) ], ( .[] | select(.geo | IN($t[]) | not) ) ] | flatten' > series.json

printf "dataset = "
jq -s 'flatten |
([.[].geo] | unique) as $g | ([.[].time] | unique) as $t | ([.[].series] | unique) as $s | {
  class: "dataset",
  value: (. | map({key: (
      . as $v |
      ($g | index($v.geo)) +
      (($g | length)) * (($s | index($v.series)) +
      (($s | length) * ($t | index($v.time))))
    ) | tostring, value: .value})) | from_entries,
  dimension: {
    geo: {category: {index: $g | with_entries({key: .value, value: .key})}},
    series: {category: {index: $s | with_entries({key: .value, value: .key})}},
    time: {category: {index: $t | with_entries({key: .value, value: .key})}},
  },
  id: ["time", "series", "geo"],
  size: [($t | length), ($s | length), ($g | length)]
}
' series.json
