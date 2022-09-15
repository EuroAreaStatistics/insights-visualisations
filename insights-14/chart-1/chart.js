// based on https://www.highcharts.com/demo/combo-dual-axes

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

$(function () {
  var lang = (window.location.search.match(/[?&]lg=([^&]*)/) || ["", ""])[1];
  if (!/^[a-z]{2}$/.test(lang)) {
    lang = "en";
  }

  var countryNames = window.countryNames;
  var countryNamesEN = window.countryNames;

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
      nameEN: countryNamesEN.short[code],
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

  function sortMY(a, b) {
    a = a.split(" ").reverse().join();
    b = b.split(" ").reverse().join();
    return a < b ? -1 : a > b ? 1 : 0;
  }

  Highcharts.setOptions({
    lang: {
      decimalPoint: ".",
      thousandsSep: " ",
    },
  });

  var categories = Object.keys(dataset.dimension.time.category.index).sort(
    sortMY
  );

  drawChart("EA");
  $(".country-selection select").change(function () {
    drawChart($(this).val());
  });

  function drawChart(geo) {
    var key = {
      geo: geo,
    };
    var key2 = {
      geo: geo,
    };

    key.series = "balance";
    var colorLeft = "#003299";
    var dataLeft = categories.map(function (t) {
      key.time = t;
      return getValue(dataset, key);
    });

    var cnames = {};
    countries.forEach(function (c) {
      cnames[c.id] = c.nameEN;
    });
    cnames["GR"] = cnames["EL"];

    key.series = "Min";
    key2.series = "Min country";
    var colorMiddle = "#FF4B00";
    var dataMiddle = categories.map(function (t) {
      key.time = t;
      key2.time = t;
      return {
        name: cnames[getValue(dataset, key2)],
        y: getValue(dataset, key),
      };
    });

    key.series = "Max";
    key2.series = "Max country";
    var colorRight = "#65B800";
    var dataRight = categories.map(function (t) {
      key.time = t;
      key2.time = t;
      return {
        name: cnames[getValue(dataset, key2)],
        y: getValue(dataset, key),
      };
    });

    var chart = new Highcharts.Chart({
      chart: {
        renderTo: "linechart",
        style: {
          fontFamily: "Roboto, sans-serif",
        },
      },
      credits: { enabled: false },
      title: {
        text: null,
      },
      xAxis: [
        {
          labels: {
            style: { fontSize: "15px", color: "#222" },
            formatter: function () {
              return this.value.replace(/^Q[1-4] /, "");
            },
          },
          categories: categories,
          crosshair: true,
          tickPositions: categories
            .map(function (c, i) {
              return /^Q1/.test(c) ? i : null;
            })
            .filter(function (i) {
              return i != null;
            }),
          tickmarkPlacement: "on",
        },
      ],
      yAxis: [
        {
          labels: { style: { fontSize: "15px", color: "#222" } },
          title: {
            text: null,
          },
          max: 30,
          plotLines: [
            {
              color: "#000",
              width: 2,
              value: 0,
              zIndex: 5,
            },
          ],
        },
      ],
      tooltip: {
        shared: true,
        headerFormat:
          '<span style="font-size: 10px">{point.point.category}</span><br/>',
        valueDecimals: 1,
        valueSuffix: "%",
      },
      legend: {
        enabled: false,
      },
      series: [
        {
          name: "Largest surplus",
          zIndex: 2,
          type: "line",
          marker: { enabled: false },
          data: dataRight,
          color: colorRight,
          lineWidth: 5,
          dashStyle: "Dot",
          tooltip: {
            pointFormat:
              '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y}</b> ({point.name})<br/>',
          },
        },
        {
          name: cnames[geo] + " balance",
          zIndex: 1,
          type: "column",
          marker: { enabled: false },
          data: dataLeft,
          color: colorLeft,
        },
        {
          name: "Largest deficit",
          zIndex: 2,
          type: "line",
          marker: { enabled: false },
          data: dataMiddle,
          color: colorMiddle,
          lineWidth: 5,
          dashStyle: "Dot",
          tooltip: {
            pointFormat:
              '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y}</b> ({point.name})<br/>',
          },
        },
      ],
    });
  }
});
