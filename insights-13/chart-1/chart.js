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
  var countries = [
    { id: "EA", name: "Euro area" },
    { id: "AT", name: "Austria" },
    { id: "BE", name: "Belgium" },
    { id: "CY", name: "Cyprus" },
    { id: "EE", name: "Estonia" },
    { id: "FI", name: "Finland" },
    { id: "FR", name: "France" },
    { id: "DE", name: "Germany" },
    { id: "EL", name: "Greece" },
    { id: "IE", name: "Ireland" },
    { id: "IT", name: "Italy" },
    { id: "LV", name: "Latvia" },
    { id: "LT", name: "Lithuania" },
    { id: "LU", name: "Luxembourg" },
    { id: "MT", name: "Malta" },
    { id: "NL", name: "Netherlands" },
    { id: "PT", name: "Portugal" },
    { id: "SK", name: "Slovakia" },
    { id: "SI", name: "Slovenia" },
    { id: "ES", name: "Spain" },
  ];
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

  function sortMY(a, b) {
    a = a.split("-").reverse().join("-");
    b = b.split("-").reverse().join("-");
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

    var colorLeft = "#004996";
    key.series = "growth";
    var dataLeft = categories.map(function (t) {
      key.time = t;
      return getValue(dataset, key);
    });

    key.series = "interest";
    var colorRight = "#FFB400";
    var dataRight = categories.map(function (t) {
      key.time = t;
      return getValue(dataset, key);
    });

    var chart = new Highcharts.Chart({
      chart: {
        renderTo: "linechart",
        fontFamily: "Roboto, sans-serif",
      },
      credits: { enabled: false },
      title: {
        text: null,
      },
      xAxis: [
        {
          labels: { style: { fontSize: "14px", color: "#222" } },
          max: categories.length + 3, // prevent last label being cut off
          categories: categories,
          crosshair: true,
          tickPositions: categories
            .map(function (c, i) {
              return i;
            })
            .filter(function (i) {
              return /^08-/.test(categories[i]);
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
        },
      ],
      tooltip: {
        shared: true,
        valueDecimals: 1,
        valueSuffix: "%",
      },
      legend: {
        enabled: false,
      },
      series: [
        {
          name: "Growth rate of loans to households",
          type: "line",
          marker: { enabled: false },
          data: dataLeft,
          color: colorLeft,
          lineWidth: 2,
        },
        {
          name: "Bank interest rate",
          type: "line",
          marker: { enabled: false },
          data: dataRight,
          color: colorRight,
          lineWidth: 2,
        },
      ],
    });
  }
});
