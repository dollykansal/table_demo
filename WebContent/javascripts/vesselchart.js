//Status Schedules:0, Reschedules: 1, Completed: 2
(function(){
	var values = [
	                {
					    vesselName : 'Vessel1',
					    status : 1000,
					    capcity:1000
	                },
	                {
					    vesselName : 'Vessel1',
					    status : 7000,
					    capcity:2000
	                }
//	                ,
//	                {
//	                	vesselName : 'Vessel3',
//	                	status : 5000,
//	                	capcity:3000
//	                },
//	                {
//	                	vesselName : 'Vessel2',
//	                	status : 10000,
//	                	capcity:3000
//	                }
	];
//	var values = [ 
//	              { Country : "USA", Revenue : 100, Measure : 80 },
//	              { Country : "Canada", Revenue : 110, Measure : 50 },
//	              { Country : "South Africa", Revenue : 180, Measure : 20 },
//	              { Country : "France", Revenue : 210, Measure : 110 },
//	              { Country : "China", Revenue : 190, Measure : 150 },
//	              { Country : "India", Revenue : 90, Measure : 50 },
//	              { Country : "Japan", Revenue : 120, Measure : 120 },
//	              { Country : "Spain", Revenue : 150, Measure : 200 }
//	            ];
	            var start = new Date();
	            start.setFullYear(2013);
	            start.setMonth(0);
	            start.setDate(1);
	            start.setHours(22);
	            start.setMinutes(51);
	            start.setSeconds(10);

	            var end = new Date();
	            end.setFullYear(2013);
	            end.setMonth(10);
	            end.setDate(20);
	            end.setHours(16);
	            end.setMinutes(39);
	            end.setSeconds(31);

	            var range = end.getTime() - start.getTime();
	            var timeArr = [];
	            for (var i = 0; i < values.length; i++) {
	              var t = parseInt(range * i * 0.1) + start.getTime();
	              values[i]['Time'] = t;
	            }

	            var oModel = new sap.ui.model.json.JSONModel({
	              data : values
	            });   


	            var oDataset = new sap.viz.ui5.data.FlattenedDataset({
	            	dimensions : [ 
	            	  			{
	            	  				axis : 1, // must be one for the x-axis, 2 for y-axis
	            	  				name : 'vesselName', 
	            	  				value :"{vesselName}"
	            	  			},{
		            	  				axis : 2, // must be one for the x-axis, 2 for y-axis
		            	  				name : 'Days', 
		            	  				value : {path:'Time', // 'value' defines the binding for the displayed value
		            						
		            						formatter : function(fval) {
		            							console.log(fval);
		            							  jQuery.sap.require("sap.ui.core.format.DateFormat");
		            							  var oDateFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({pattern:"dd/MMM/yyyy"});
		            							  return oDateFormat.format(new Date(Number(fval)));
		            					},
		            	  			}}
	            	  		],
	            	  		measures : [ 
//	            	  		    { group : 1, name : "Capacity", value : "{capcity}" },
	            	  			{
	            	  				group: 1,
	            	  				name : 'Time', // 'name' is used as label in the Legend 
	            	  				value : {path:'Time', // 'value' defines the binding for the displayed value
	            						
	            						formatter : function(fval) {
	            							console.log(fval);
	            							  jQuery.sap.require("sap.ui.core.format.DateFormat");
	            							  var oDateFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({pattern:"MM"});
	            							  return oDateFormat.format(new Date(Number(fval)));
	            					},
	            					interval:1
	            	  			} }
	            	  		],
//	              dimensions : [ 
//	                 { axis : 1, name : "Vessel Name", value : "{vesselName}" }
//	              ],
//	              measures : [ 
//	                 { group : 2, name : "Capacity", value : "{capacity}" }, 
//	                 { group : 3, name : "Revenue", value : "{revenue}" }, 
//	                 { group : 1, name : "Time", value : "{Time}"}
//	               ],
	              data : {
	                path : "/data"
	              }
	            });
	            oDataset.setModel(oModel);
	            var timeBubbleChart = new sap.viz.ui5.StackedColumn({
	              id : "timeBubble",
	              width : "80%",
	              height : "200px",
	              dataset: oDataset
	            });
	            timeBubbleChart.attachBeforeCreateViz(function(e) {

	                var usrOptions = e.getParameter("usrOptions");
	                // make the vertical stacked bar a horizontal stacked bar
	                usrOptions.type = "viz/stacked_bar";
	                // add a feeding definition to show MND
	                usrOptions.feeding = [ {
	                  "feedId" : "axisLabels",
	                  "binding" : [ {
	                    "type" : "measureNamesDimension"
	                  }, {
	                    "type" : "analysisAxis",
	                    "index" : 1
	                  } ]
	                }, {
	                  "feedId" : "regionColor",
	                  "binding" : [ {
	                    "type" : "analysisAxis",
	                    "index" : 2
	                  } ]
	                }, {
	                  "feedId" : "primaryValues",
	                  "binding" : [ {
	                    "type" : "measureValuesGroup",
	                    "index" : 1
	                  } ]
	                } ];
	            });

	            timeBubbleChart.setModel(oModel);
	            timeBubbleChart.placeAt("vesselchart");
})();