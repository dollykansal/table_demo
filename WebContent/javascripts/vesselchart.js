(function(){
    // some business data 
//	var oModel = new sap.ui.model.json.JSONModel({
//		businessData : [
//		                {
//						    vesselName : 'Vessel1',
//						    status : 'Half',
//						    time : "2"
//		                },
//		                {
//		                	vesselName : 'Vessel1',
//		                	status : 'Completed',
//						    time : "1"
//		                },
//		                {
//		                	vesselName : 'Vessel2',
//		                	status : 'Completed',
//		                	time : "1"
//		                }
//		]
//	});	
		var values = [
		                {
						    vesselName : 'Vessel1',
						    status : 'Half'
		                },
		                {
		                	vesselName : 'Vessel1',
		                	status : 'Completed'
		                },
		                {
		                	vesselName : 'Vessel2',
		                	status : 'Completed'
		                }
		];
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
        for (var i = 0; i < values.length; i++) {
          var t = parseInt(range * i * 0.1) + start.getTime();
          values[i]['time'] = t;
        }
        console.log(values);

        var oModel = new sap.ui.model.json.JSONModel({
          data : values
        }); 
	
	// A Dataset defines how the model data is mapped to the chart 
	var oDataset = new sap.viz.ui5.data.FlattenedDataset({

		// a Bar Chart requires exactly one dimension (x-axis) 
		dimensions : [ 
			{
				axis : 1, // must be one for the x-axis, 2 for y-axis
				name : 'vesselName', 
				value :"{vesselName}"
			},{
                  axis : 2,
                  name : 'Status',
                  value : "{status}"
              }
		],
		
		// it can show multiple measures, each results in a new set of bars in a new color 
		measures : [ 
		    // measure 1
			{
				name : 'Time', // 'name' is used as label in the Legend 
				value : {path:'time', // 'value' defines the binding for the displayed value
					
					formatter : function(fval) {
						  jQuery.sap.require("sap.ui.core.format.DateFormat");
						  var oDateFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({pattern:"yyyy/MM/dd"});
						  return oDateFormat.format(new Date(Number(fval)));
				}}
			} 
		],
		// 'data' is used to bind the whole data collection that is to be displayed in the chart 
		data : {
			path : "/data"
		}
	});
	
	  // create a Bar chart
	
	var oBarChart = new sap.viz.ui5.StackedColumn({
		width : "80%",
		height : "400px",
		plotArea : {
		//'colorPalette' : d3.scale.category20().range()
		},
		title : {
			visible : true,
			text : 'Vessel Availability'
		}, yAxis:{
            title:{visible:true},
            label:{visible:false},
          },
		dataset : oDataset
	});
	oBarChart.attachBeforeCreateViz(function(e) {

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
    // attach the model to the chart and display it
	oBarChart.setModel(oModel);
	oBarChart.placeAt("vesselchart");
})();