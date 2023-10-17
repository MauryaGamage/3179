var vg_1 = "global_cost.vg.json";
vegaEmbed("#world_map", vg_1, { actions: false }).then(function(result) {
  // Access the Vega view instance as result.view
}).catch(console.error);

var vg_3 = "housing_city.vg.json";
vegaEmbed("#housing_chart", vg_3, { actions: false }).then(function(result) {
  // Access the Vega view instance as result.view
}).catch(console.error);

var vg_5 = "line_chart.vg.json";
vegaEmbed("#line_chart", vg_5, { actions: false }).then(function(result) {
  // Access the Vega view instance as result.view
}).catch(console.error);

var vg_2 = "bar_chart_asc.vg.json";
vegaEmbed("#bar_chart1", vg_2,{ "actions": false }).then((result) => {
    const view = result.view;
    // Add event listener for the slider
    const country = document.getElementById("costCategory");
    country.addEventListener("input", function () {
      const selectedColumn = this.value;
      view.signal("selectedColumn", selectedColumn).runAsync();

    })
  }).catch(console.error);

  var vg_4 = "bar_chart_dsc.vg.json";
vegaEmbed("#bar_chart2", vg_4,{ "actions": false }).then((result) => {
    const view = result.view;
    // Add event listener for the slider
    const country = document.getElementById("costCategory");
    country.addEventListener("input", function () {
      const selectedColumn = this.value;
      view.signal("selectedColumn", selectedColumn).runAsync();

    })
  }).catch(console.error);