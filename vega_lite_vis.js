var vg_1 = "global_cost.vg.json";
vegaEmbed("#world_map", vg_1, { actions: false }).then(function(result) {
  // Access the Vega view instance as result.view
}).catch(console.error);

var vg_2 = "bar_chart.vg.json";
vegaEmbed("#bar_chart", vg_2, { actions: false }).then(function(result) {
  // Access the Vega view instance as result.view
}).catch(console.error);

var vg_3 = "housing_city.vg.json";
vegaEmbed("#housing_chart", vg_3, { actions: false }).then(function(result) {
  // Access the Vega view instance as result.view
}).catch(console.error);
