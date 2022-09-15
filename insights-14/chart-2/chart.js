function formatState(state) {
  if (!state.id) {
    return state.text;
  }
  var baseUrl = "img/flags/";
  var $state = $(
    '<span class="flag"><img src="' +
      baseUrl +
      "/" +
      state.element.value +
      '.png"/> ' +
      state.text +
      "</span>"
  );
  return $state;
}

// flatten single level array of arrays
function flat(arr) {
  return arr.reduce(function (acc, val) {
    return acc.concat(val);
  }, []);
}

$(function () {
  var lang = (window.location.search.match(/[?&]lg=([^&]*)/) || ["", ""])[1];
  if (!/^[a-z]{2}$/.test(lang)) {
    lang = "en";
  }
  var countryNames = window.countryNames;
  var countryISO = {
    EA: "EUR",
    AT: "AUT",
    BE: "BEL",
    CY: "CYP",
    DE: "DEU",
    EE: "EST",
    EL: "GRC",
    ES: "ESP",
    FI: "FIN",
    FR: "FRA",
    IE: "IRL",
    IT: "ITA",
    LT: "LTU",
    LU: "LUX",
    LV: "LVA",
    MT: "MLT",
    NL: "NLD",
    PT: "PRT",
    SI: "SVN",
    SK: "SVK",
  };
  var countries = Object.keys(countryISO).map(function (c) {
    var code = countryISO[c].toLowerCase();
    return {
      id: c,
      name: countryNames.short[code],
      order: c === "EA" ? -1 : countryNames.order.indexOf(code),
    };
  });
  countries = countries.sort(function (a, b) {
    return a.order < b.order ? -1 : a.order > b.order ? 1 : 0;
  });
  $(".country-selection select")
    .empty()
    .append(
      countries.map(function (x) {
        return $("<option>").attr("value", x.id).text(x.name);
      })
    );
  $("select").select2({
    theme: "bootstrap4",
    templateResult: formatState,
    templateSelection: formatState,
  });

  $("#loader").addClass("invisible");
  $("#global").removeClass("invisible container-fluid").addClass("visible");

  Highcharts.setOptions({
    lang: {
      decimalPoint: ".",
      thousandsSep: " ",
    },
  });

  var cats = [
    "Other services",
    "Intellectual property charges",
    "Telecommunications",
    "Travel",
    "Transport",
  ];
  var catColors = [
    ["#003299", "#98A1D0"],
    ["#00B1EA", "#D7EEF8"],
    ["#65B800", "#CEE1AF"],
    ["#FFB400", "#FDDDA7"],
    ["#FF4B00", "#F6B183"],
  ];
  var colorLeft = "#000000";

  function sortMY(a, b) {
    a = a.split(" ").reverse().join();
    b = b.split(" ").reverse().join();
    return a < b ? -1 : a > b ? 1 : 0;
  }

  var times = Object.keys(dataset.dimension.time.category.index).sort(sortMY);
  // product of times and cats indices
  var categories = times;

  var cnames = {};
  countries.forEach(function (c) {
    cnames[c.id] = c.name;
  });
  cnames["GR"] = cnames["EL"];

  drawChart("EA");
  $(".country-selection select").change(function () {
    drawChart($(this).val());
  });

  function drawChart(geo) {
    var key = {
      geo: geo,
    };

    var series = [];

    key.key = "services balance";
    series.push({
      name: "Services balance",
      zIndex: 2,
      type: "line",
      color: colorLeft,
      lineWidth: 5,
      data: times.map(function (time) {
        key.time = time;
        return {
          y: getValue(dataset, key),
        };
      }),
    });

    cats.forEach(function (cat, i) {
      [
        ["imports", "imports", -1],
        ["exports", "exports", 1],
      ].forEach(function (k, j) {
        key.key = cat + (cat !== "Other services" ? ", " : " ") + k[1];
        series.push({
          name: cat + (cat !== "Other services" ? ", " : " ") + k[0],
          color: catColors[i][1 - j],
          data: times.map(function (time) {
            key.time = time;
            return {
              y: getValue(dataset, key),
            };
          }),
        });
      });
    });

    var chart = new Highcharts.Chart({
      chart: {
        renderTo: "linechart",
        style: {
          fontFamily: "Roboto, sans-serif",
        },
        type: "column",
      },
      plotOptions: {
        series: {
          marker: { enabled: false },
          events: {
            legendItemClick: function () {
              return false;
            },
          },
        },
        column: {
          stacking: "normal",
          borderWidth: 0,
        },
      },
      credits: { enabled: false },
      title: {
        text: null,
      },
      xAxis: [
        {
          categories: times,
          labels: { style: { fontSize: "15px" } },
        },
      ],
      yAxis: [
        {
          stackLabels: {
            enabled: true,
            format: "{total:.1f}",
            style: { fontSize: "15px" },
          },
          labels: { style: { fontSize: "15px", color: "#222" } },
          title: {
            text: null,
          },
        },
      ],
      tooltip: {
        shared: false,
        valueDecimals: 1,
      },
      legend: {
        enabled: false,
        reversed: true,
      },
      series: series,
    });
  }
});
