$(function () {
  var data = [
    {
      name: "One-year change",
      data: [
        { x: 11.8, y: 11.8, name: "AT" },
        { x: 8.6, y: 8.6, name: "BE" },
        { x: -4.9, y: -4.9, name: "CY" },
        { x: 10.9, y: 10.9, name: "DE" },
        { x: 16.1, y: 16.1, name: "EE" },
        { x: 3.1, y: 3.1, name: "ES" },
        { x: 5.4, y: 5.4, name: "FI" },
        { x: 5.8, y: 5.8, name: "FR" },
        { x: 4.7, y: 4.7, name: "GR" },
        { x: 5.6, y: 5.6, name: "IE" },
        { x: 0.4, y: 0.4, name: "IT" },
        { x: 13.3, y: 13.3, name: "LT" },
        { x: 13.6, y: 13.6, name: "LU" },
        { x: 12.4, y: 12.4, name: "LV" },
        { x: 5.3, y: 5.3, name: "MT" },
        { x: 12.8, y: 12.8, name: "NL" },
        { x: 6.6, y: 6.6, name: "PT" },
        { x: 9.9, y: 9.9, name: "SI" },
        { x: 18.6, y: 18.6, name: "SK" },
        { x: 7.3, y: 7.3, name: "Euro area" },
      ],
      custom: { label: ["One-year change", "One-year change"] },
    },
    {
      name: "Two-year change",
      data: [
        { x: 17.6, y: 11.8, name: "AT" },
        { x: 14.3, y: 8.6, name: "BE" },
        { x: -7.7, y: -4.9, name: "CY" },
        { x: 18.5, y: 10.9, name: "DE" },
        { x: 20.8, y: 16.1, name: "EE" },
        { x: 5.4, y: 3.1, name: "ES" },
        { x: 6.2, y: 5.4, name: "FI" },
        { x: 11.9, y: 5.8, name: "FR" },
        { x: 9.1, y: 4.7, name: "GR" },
        { x: 6, y: 5.6, name: "IE" },
        { x: 3.7, y: 0.4, name: "IT" },
        { x: 21.2, y: 13.3, name: "LT" },
        { x: 28.6, y: 13.6, name: "LU" },
        { x: 14.1, y: 12.4, name: "LV" },
        { x: 9.4, y: 5.3, name: "MT" },
        { x: 20.7, y: 12.8, name: "NL" },
        { x: 14.9, y: 6.6, name: "PT" },
        { x: 15.7, y: 9.9, name: "SI" },
        { x: 31.9, y: 18.6, name: "SK" },
        { x: 12.7, y: 7.3, name: "Euro area" },
      ],
      custom: { label: ["Two-year change", "One-year change"] },
    },
    {
      name: "Three-year change",
      data: [
        { x: 24.1, y: 11.8, name: "AT" },
        { x: 18.7, y: 8.6, name: "BE" },
        { x: 0.1, y: -4.9, name: "CY" },
        { x: 27.1, y: 10.9, name: "DE" },
        { x: 27.7, y: 16.1, name: "EE" },
        { x: 11.1, y: 3.1, name: "ES" },
        { x: 7.4, y: 5.4, name: "FI" },
        { x: 15.4, y: 5.8, name: "FR" },
        { x: 17.4, y: 4.7, name: "GR" },
        { x: 8.6, y: 5.6, name: "IE" },
        { x: 3.6, y: 0.4, name: "IT" },
        { x: 29.2, y: 13.3, name: "LT" },
        { x: 43.3, y: 13.6, name: "LU" },
        { x: 23.1, y: 12.4, name: "LV" },
        { x: 16.3, y: 5.3, name: "MT" },
        { x: 30.8, y: 12.8, name: "NL" },
        { x: 26.5, y: 6.6, name: "PT" },
        { x: 24.3, y: 9.9, name: "SI" },
        { x: 40.3, y: 18.6, name: "SK" },
        { x: 17.6, y: 7.3, name: "Euro area" },
      ],
      custom: { label: ["Three-year change", "One-year change"] },
    },
    {
      name: "Four-year change",
      data: [
        { x: 30.3, y: 11.8, name: "AT" },
        { x: 23.5, y: 8.6, name: "BE" },
        { x: 1.3, y: -4.9, name: "CY" },
        { x: 36.7, y: 10.9, name: "DE" },
        { x: 37.1, y: 16.1, name: "EE" },
        { x: 18.6, y: 3.1, name: "ES" },
        { x: 8.6, y: 5.4, name: "FI" },
        { x: 18.6, y: 5.8, name: "FR" },
        { x: 18.9, y: 4.7, name: "GR" },
        { x: 22.3, y: 5.6, name: "IE" },
        { x: 3.2, y: 0.4, name: "IT" },
        { x: 38.7, y: 13.3, name: "LT" },
        { x: 50.6, y: 13.6, name: "LU" },
        { x: 33.8, y: 12.4, name: "LV" },
        { x: 23.4, y: 5.3, name: "MT" },
        { x: 42.8, y: 12.8, name: "NL" },
        { x: 40.7, y: 6.6, name: "PT" },
        { x: 33.9, y: 9.9, name: "SI" },
        { x: 47.5, y: 18.6, name: "SK" },
        { x: 23.4, y: 7.3, name: "Euro area" },
      ],
      custom: { label: ["Four-year change", "One-year change"] },
    },
    {
      name: "Five-year change",
      data: [
        { x: 35, y: 11.8, name: "AT" },
        { x: 27.6, y: 8.6, name: "BE" },
        { x: 4.9, y: -4.9, name: "CY" },
        { x: 43.7, y: 10.9, name: "DE" },
        { x: 43.7, y: 16.1, name: "EE" },
        { x: 25.2, y: 3.1, name: "ES" },
        { x: 10.4, y: 5.4, name: "FI" },
        { x: 22.3, y: 5.8, name: "FR" },
        { x: 17.7, y: 4.7, name: "GR" },
        { x: 35.2, y: 5.6, name: "IE" },
        { x: 2.3, y: 0.4, name: "IT" },
        { x: 52.9, y: 13.3, name: "LT" },
        { x: 60.2, y: 13.6, name: "LU" },
        { x: 46.1, y: 12.4, name: "LV" },
        { x: 30.7, y: 5.3, name: "MT" },
        { x: 53.6, y: 12.8, name: "NL" },
        { x: 52, y: 6.6, name: "PT" },
        { x: 44.9, y: 9.9, name: "SI" },
        { x: 58.3, y: 18.6, name: "SK" },
        { x: 28.7, y: 7.3, name: "Euro area" },
      ],
      custom: { label: ["Five-year change", "One-year change"] },
    },
    {
      name: "Six-year change",
      data: [
        { x: 47.9, y: 11.8, name: "AT" },
        { x: 29.4, y: 8.6, name: "BE" },
        { x: 3.5, y: -4.9, name: "CY" },
        { x: 52.6, y: 10.9, name: "DE" },
        { x: 46.3, y: 16.1, name: "EE" },
        { x: 30.1, y: 3.1, name: "ES" },
        { x: 11.4, y: 5.4, name: "FI" },
        { x: 23, y: 5.8, name: "FR" },
        { x: 14.7, y: 4.7, name: "GR" },
        { x: 43.7, y: 5.6, name: "IE" },
        { x: 3, y: 0.4, name: "IT" },
        { x: 58.1, y: 13.3, name: "LT" },
        { x: 69.2, y: 13.6, name: "LU" },
        { x: 59.9, y: 12.4, name: "LV" },
        { x: 39.8, y: 5.3, name: "MT" },
        { x: 60.5, y: 12.8, name: "NL" },
        { x: 61.6, y: 6.6, name: "PT" },
        { x: 45.6, y: 9.9, name: "SI" },
        { x: 66.6, y: 18.6, name: "SK" },
        { x: 33.6, y: 7.3, name: "Euro area" },
      ],
      custom: { label: ["Six-year change", "One-year change"] },
    },
    {
      name: "Seven-year change",
      data: [
        { x: 50, y: 11.8, name: "AT" },
        { x: 32.3, y: 8.6, name: "BE" },
        { x: 0.5, y: -4.9, name: "CY" },
        { x: 59.4, y: 10.9, name: "DE" },
        { x: 61.7, y: 16.1, name: "EE" },
        { x: 35.3, y: 3.1, name: "ES" },
        { x: 11.3, y: 5.4, name: "FI" },
        { x: 19.8, y: 5.8, name: "FR" },
        { x: 9, y: 4.7, name: "GR" },
        { x: 63.5, y: 5.6, name: "IE" },
        { x: -1.8, y: 0.4, name: "IT" },
        { x: 63.6, y: 13.3, name: "LT" },
        { x: 78.4, y: 13.6, name: "LU" },
        { x: 52.5, y: 12.4, name: "LV" },
        { x: 44.9, y: 5.3, name: "MT" },
        { x: 65.4, y: 12.8, name: "NL" },
        { x: 66.4, y: 6.6, name: "PT" },
        { x: 50.8, y: 9.9, name: "SI" },
        { x: 69, y: 18.6, name: "SK" },
        { x: 35.4, y: 7.3, name: "Euro area" },
      ],
      custom: { label: ["Seven-year change", "One-year change"] },
    },
    {
      name: "Eight-year change",
      data: [
        { x: 57.2, y: 11.8, name: "AT" },
        { x: 30.9, y: 8.6, name: "BE" },
        { x: -0.7, y: -4.9, name: "CY" },
        { x: 63.5, y: 10.9, name: "DE" },
        { x: 85.1, y: 16.1, name: "EE" },
        { x: 36.4, y: 3.1, name: "ES" },
        { x: 11, y: 5.4, name: "FI" },
        { x: 18.1, y: 5.8, name: "FR" },
        { x: 0, y: 4.7, name: "GR" },
        { x: 90.6, y: 5.6, name: "IE" },
        { x: -6.7, y: 0.4, name: "IT" },
        { x: 74.2, y: 13.3, name: "LT" },
        { x: 87.2, y: 13.6, name: "LU" },
        { x: 64.3, y: 12.4, name: "LV" },
        { x: 49.1, y: 5.3, name: "MT" },
        { x: 67.5, y: 12.8, name: "NL" },
        { x: 76.2, y: 6.6, name: "PT" },
        { x: 36, y: 9.9, name: "SI" },
        { x: 66.7, y: 18.6, name: "SK" },
        { x: 36.5, y: 7.3, name: "Euro area" },
      ],
      custom: { label: ["Eight-year change", "One-year change"] },
    },
    {
      name: "Nine-year change",
      data: [
        { x: 65.1, y: 11.8, name: "AT" },
        { x: 33.2, y: 8.6, name: "BE" },
        { x: -1.8, y: -4.9, name: "CY" },
        { x: 68.5, y: 10.9, name: "DE" },
        { x: 100.3, y: 16.1, name: "EE" },
        { x: 22, y: 3.1, name: "ES" },
        { x: 12.4, y: 5.4, name: "FI" },
        { x: 15.5, y: 5.8, name: "FR" },
        { x: -11.9, y: 4.7, name: "GR" },
        { x: 88.9, y: 5.6, name: "IE" },
        { x: -13, y: 0.4, name: "IT" },
        { x: 78.4, y: 13.3, name: "LT" },
        { x: 95.9, y: 13.6, name: "LU" },
        { x: 77.2, y: 12.4, name: "LV" },
        { x: 50.1, y: 5.3, name: "MT" },
        { x: 54, y: 12.8, name: "NL" },
        { x: 71.7, y: 6.6, name: "PT" },
        { x: 29.7, y: 9.9, name: "SI" },
        { x: 67.7, y: 18.6, name: "SK" },
        { x: 33.3, y: 7.3, name: "Euro area" },
      ],
      custom: { label: ["Nine-year change", "One-year change"] },
    },
    {
      name: "Ten-year change",
      data: [
        { x: 90.8, y: 11.8, name: "AT" },
        { x: 36.4, y: 8.6, name: "BE" },
        { x: -8.7, y: -4.9, name: "CY" },
        { x: 74.3, y: 10.9, name: "DE" },
        { x: 115.5, y: 16.1, name: "EE" },
        { x: 2.5, y: 3.1, name: "ES" },
        { x: 14.6, y: 5.4, name: "FI" },
        { x: 15.3, y: 5.8, name: "FR" },
        { x: -21.5, y: 4.7, name: "GR" },
        { x: 56.5, y: 5.6, name: "IE" },
        { x: -14.8, y: 0.4, name: "IT" },
        { x: 76.8, y: 13.3, name: "LT" },
        { x: 103.9, y: 13.6, name: "LU" },
        { x: 80.8, y: 12.4, name: "LV" },
        { x: 48, y: 5.3, name: "MT" },
        { x: 45.2, y: 12.8, name: "NL" },
        { x: 57.5, y: 6.6, name: "PT" },
        { x: 22.3, y: 9.9, name: "SI" },
        { x: 64, y: 18.6, name: "SK" },
        { x: 31.3, y: 7.3, name: "Euro area" },
      ],
      custom: { label: ["Ten-year change", "One-year change"] },
    },
  ];

  $("#container").highcharts(
    {
      chart: {
        type: "scatter",
        show_labels: true,
        height: 400,
        width: 700,
        style: { margin: "auto" },
      },
      xAxis: {
        labels: { style: { fontSize: "15px", color: "#222" } },
        title: { text: "" },
        min: -30,
        max: 120,
      },
      yAxis: {
        labels: { style: { fontSize: "15px", color: "#222" } },
        title: {
          style: { fontSize: "15px", color: "#222" },
          text: "One-year change",
        },
        min: -10,
        max: 20,
      },
      title: { text: "" },
      subtitle: { text: "" },
      legend: { enabled: false },
      credits: { href: "", text: "" },
      exporting: { enabled: false },
      plotOptions: {
        series: {
          dataLabels: {
            enabled: true,
            format: "{point.name}",
            allowOverlap: true,
          },
          connectNulls: true,
          marker: { fillColor: "#003597", symbol: "square" },
        },
        scatter: { dataLabels: { enabled: true } },
      },
      series: data,
      tooltip: {
        headerFormat:
          "<span style='font-size: 10px;'>{series.name}: {point.key}<br/>",
        pointFormat:
          "<b>{series.options.custom.label.0}: {point.x:.1f} <br /><b>{series.options.custom.label.1}: {point.y:.1f}",
      },
    },
    function (chart) {
      var title = $('<div style="text-align: center; padding-bottom: 1em;">');
      // start at 3rd data set
      var selected = 2;
      function showSelectedSeries() {
        title.text(chart.series[selected].name);
        chart.series.forEach(function (s, i) {
          if (i === selected) s.show();
          else s.hide();
        });
      }
      showSelectedSeries();
      var PLAY = "\u25b6";
      var STOP = "\u25fe";
      var slider = $(
        '<div style="width: calc(100% - 2em - 12px); margin-right: 10px; display: inline-block; vertical-align: middle;">'
      );
      var button = $(
        '<input type="button" style="font-size: 1em; height: 2em; width: 2em; padding: 0;"/>'
      );
      button.val(PLAY);
      var timer;
      var div = $('<div style="margin: auto;">').width(
        $(chart.container).width()
      );
      div.append(slider, button);
      $(chart.container).parent().append(title, div);
      slider.slider({
        min: 0,
        max: chart.series.length - 1,
        value: selected,
        change: function (ev, ui) {
          if (ui.value !== selected) {
            selected = ui.value;
            showSelectedSeries();
          }
        },
        slide: function (ev, ui) {
          title.text(chart.series[ui.value].name);
          if (timer) {
            timer = window.clearInterval(timer);
            button.val(PLAY);
          }
        },
      });
      button.click(function () {
        if (timer) {
          timer = window.clearInterval(timer);
          button.val(PLAY);
        } else {
          button.val(STOP);
          var start = slider.slider("value");
          var min = slider.slider("option", "min");
          var max = slider.slider("option", "max");
          var pos = min;
          if (pos === start && pos < max) {
            pos++;
          }
          slider.slider("value", pos);
          if (pos < max) {
            pos++;
            timer = window.setInterval(function () {
              if (pos <= max) {
                slider.slider("value", pos);
                pos++;
              }
              if (pos > max) {
                timer = window.clearInterval(timer);
                button.val(PLAY);
              }
            }, 1000);
          }
        }
      });
    }
  );
});
