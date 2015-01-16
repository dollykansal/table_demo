(function(){
var aData = [
	{sNo: "1", account: "Seafuture", cargoNam: "Hot Coil", qty:"32,000.00", term: "FIO"}
];
//Create a panel instance
var oPanel = new sap.ui.commons.Panel({
	width : "100%"
});
oPanel.setText("Cargo");
//Function to create the dialog with fragments
var oDialogFragment = sap.ui.jsfragment("frtsim.fragments.JSFragmentDialog");

//Create an instance of the table control
var oTable = window.helper.createTable({
	//title: "Cargo",
	visibleRowCount: 3,
	firstVisibleRow: 2,
	toolbar: new sap.ui.commons.Toolbar({items: [ 
		                                     		new sap.ui.commons.Button({text: "Clear", press: function() { alert("Clear Button pressed!"); }}),
		                                     		new sap.ui.commons.Button({text: "Append", press: function() { alert("Append Button pressed!"); }}),
		                                     		new sap.ui.commons.Button({text: "Insert",style: sap.ui.commons.ButtonStyle.Accept,  press: function() { 
		                                     			 var modelData = oModel.getData();  
		                                                 var rowCount   = modelData.modelData.length;    
		                                                 rowCount = rowCount + 1;  
		                                                  aData.push({sNo: rowCount, cargoNam: " "}); // Push data to Model  
		                                                    oModel.setData({modelData: aData}); // Set Model  
		                                                  oTable.visibleRowCount=oTable.visibleRowCount+1;
		                                                  oModel.refresh();
		                                                 }}) , 
	                                                 new sap.ui.commons.Button({text: "Delete",  press: function() {
	                                                     var idx = oTable.getSelectedIndex();
	                                                     if (idx != -1) {
	                                                       var m = oTable.getModel();
	                                                       var data = m.getData()['modelData'];
	                                                       var removed = data.splice(idx, 1);
	                                                       m.setData({modelData: data});
//	                                                       m.setData(data);
//	                                                       sap.m.MessageToast.show(JSON.stringify(removed[0]) +  'is removed');
	                                                       console.log(removed[0]);
	                                                     } else {
//	                                                       sap.m.MessageToast.show('Please select a row');
	                                                     }
	                                                   }}) ,  
		                                     		new sap.ui.commons.Button({text: "Move up", press: function() { alert("Move up Button pressed!"); }}),
		                                     		new sap.ui.commons.Button({text: "Move down", press: function() { alert("Move down Button pressed!"); }}),
		                                     		new sap.ui.commons.Button({text: "Frt. Sim.", press: function() { oDialogFragment.open(); }}) //calling fragment
		                                     		//new sap.ui.commons.Button({text: "Frt. Sim.", press: function() { openFrtSim(); }})
		                                     	]}),
		                                     	});



//////////////////////Function to create the dialog without fragments////////////////////////////////////
/*function openFrtSim() {
	//console.log(new pop().oMatrix);
	var frtsim = sap.ui.view({
		type:sap.ui.core.mvc.ViewType.JS, 
		viewName:"/Table/WebContent/javascripts/frtsim"
	});
	var oDialog1 = new sap.ui.commons.Dialog({content : [ frtsim ]});
	oDialog1.setTitle("Freight Simulator");
	//var oText = new sap.ui.commons.TextView({text: "Hello World!"});
	//oDialog1.addContent(new pop().getMatrix());
	oDialog1.addButton(new sap.ui.commons.Button({text: "Apply", press:function(){oDialog1.destroyContent();oDialog1.close();}}));
	oDialog1.addButton(new sap.ui.commons.Button({text: "Close", press:function(){oDialog1.destroyContent();oDialog1.close();}}));
	oDialog1.open();
};*/

///////////////////////////////////////////// create a standalone toolbar starts/////////////////////////////////////////////////////////////
//var oToolbar1 = new sap.ui.commons.Toolbar("tb1");
//oToolbar1.setDesign(sap.ui.commons.ToolbarDesign.Standard);
//
////create button and add it as a toolbar item. The Button control has the ToolbarItem interface included
//var oButton1 = new sap.ui.commons.Button("b11",{
//	text : "Frt. Sim.",
//	tooltip : "Freight Simulator",
//	press : onPress
//});
//oButton1.setIcon("images/new.gif");
//oToolbar1.addItem(oButton1);
//oTable.setToolbar(oToolbar1);
///////////////////////////////////////////// create a standalone toolbar ends/////////////////////////////////////////////////////////////

//Define the columns and the control templates to be used
oTable.addColumn(window.helper.createColumn("sNo", "SNo", "20px", "TV"));
oTable.addColumn(window.helper.createColumn("account", "Account", "40px", "TF"));
oTable.addColumn(window.helper.createColumn("cargoNam", "Cargo Name", "40px", "TF"));
oTable.addColumn(window.helper.createColumn("loadPort", "Loading Port", "40px", "TF"));
oTable.addColumn(window.helper.createColumn("disPort", "Discharging Port", "40px", "TF"));
oTable.addColumn(window.helper.createColumn("qty", "Quantity", "40px", "TF"));
oTable.addColumn(window.helper.createColumn("frt", "Frt", "40px", "TF"));
oTable.addColumn(window.helper.createColumn("term", "Term", "40px", "TF"));
oTable.addColumn(window.helper.createColumn("rev", "Revenue", "40px", "TF"));
oTable.addColumn(window.helper.createColumn("aComm", "A.Comm", "40px", "TF"));
oTable.addColumn(window.helper.createColumn("brkg", "Brkg", "40px", "TF"));
oTable.addColumn(window.helper.createColumn("frtTax", "Frt Tax", "40px", "TF"));
oTable.addColumn(window.helper.createColumn("linTerm", "Liner Term", "40px", "TF"));


//Create a model and bind the table rows to this model
var oModel = new sap.ui.model.json.JSONModel();
oModel.setData({modelData: aData});
oTable.setModel(oModel);
oTable.bindRows("/modelData");

//Initially sort the table
oTable.sort(oTable.getColumns()[0]);

//Bring the table onto the UI 
 
// oTable.placeAt("cargo");

//////////////////////////////////////////////Splitter////////////////////////////////////////////
//create a vertical Splitter
var oSplitterV = new sap.ui.commons.Splitter("splitterV"); 
oSplitterV.setSplitterOrientation(sap.ui.commons.Orientation.vertical);
oSplitterV.setSplitterPosition("50%");
oSplitterV.setMinSizeFirstPane("20%");
oSplitterV.setMinSizeSecondPane("30%");
oSplitterV.setWidth("100%");
oSplitterV.setHeight("150px");

//adding Labels to both panes
var oLabel1 = new sap.ui.commons.Label({text: "First Pane"});
oSplitterV.addFirstPaneContent(oLabel1);	
var oLabel2 = new sap.ui.commons.Label({text: "Second Pane"});
oSplitterV.addSecondPaneContent(oLabel2);		

//oSplitterV.placeAt("cargo");

oSplitterV.addFirstPaneContent(oTable);
//////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////chart////////////////////////////////////////////////
//some business data 
var oModel = new sap.ui.model.json.JSONModel({
	businessData : [
	                {
					    vesselName : 'Vessel1',
					    status : 'Half',
					    time : "2"
	                },
	                {
	                	vesselName : 'Vessel1',
	                	status : 'Completed',
					    time : "1"
	                },
	                {
	                	vesselName : 'Vessel2',
	                	status : 'Completed',
	                	time : "1"
	                }
	]
});	

// A Dataset defines how the model data is mapped to the chart 
//var oDataset = new sap.viz.ui5.data.FlattenedDataset({
//
//	// a Bar Chart requires exactly one dimension (x-axis) 
//	dimensions : [ 
//		{
//			axis : 1, // must be one for the x-axis, 2 for y-axis
//			name : 'vesselName', 
//			value :"{vesselName}"
//		},{
//              axis : 2,
//              name : 'Status',
//              value : "{status}"
//          }
//	],
//	
//	// it can show multiple measures, each results in a new set of bars in a new color 
//	measures : [ 
//	    // measure 1
//		{
//			name : 'Time', // 'name' is used as label in the Legend 
//			value : {path:'time', // 'value' defines the binding for the displayed value
//				
//				formatter : function(fval) {
//					
//					  jQuery.sap.require("sap.ui.core.format.DateFormat");
//					  var oDateFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({pattern: "MM"});
//					  
//					  console.log(oDateFormat.format(new Date(fval)));
//					  return oDateFormat.format(new Date(fval));
//			}}
//		
//		},
//		
//		
//	],
//	// 'data' is used to bind the whole data collection that is to be displayed in the chart 
//	data : {
//		path : "/businessData"
//	}
//});
//
//  // create a Bar chart
//
//var oBarChart = new sap.viz.ui5.StackedColumn({
//	width : "80%",
//	height : "100px",
//	plotArea : {
//	//'colorPalette' : d3.scale.category20().range()
//	},
//	title : {
//		visible : true,
//		text : 'Vessel Availability'
//	}, yAxis:{
//        title:{visible:true},
//        label:{visible:false},
//      },
//	dataset : oDataset
//});
//oBarChart.attachBeforeCreateViz(function(e) {
//
//    var usrOptions = e.getParameter("usrOptions");
//    // make the vertical stacked bar a horizontal stacked bar
//    usrOptions.type = "viz/stacked_bar";
//    // add a feeding definition to show MND
//    usrOptions.feeding = [ {
//      "feedId" : "axisLabels",
//      "binding" : [ {
//        "type" : "measureNamesDimension"
//      }, {
//        "type" : "analysisAxis",
//        "index" : 1
//      } ]
//    }, {
//      "feedId" : "regionColor",
//      "binding" : [ {
//        "type" : "analysisAxis",
//        "index" : 2
//      } ]
//    }, {
//      "feedId" : "primaryValues",
//      "binding" : [ {
//        "type" : "measureValuesGroup",
//        "index" : 1
//      } ]
//    } ];
//
//  });
//// attach the model to the chart and display it
//oBarChart.setModel(oModel);
//oBarChart.placeAt("vesselchart");
//////////////////////////////////////////////////////////////////////////////////////////////////////
 
	//Add the form to the panels content area
	//oPanel.addContent(oTable);
oSplitterV.addSecondPaneContent(oBarChart);
	oPanel.addContent(oSplitterV);
	oPanel.placeAt("cargo");
})();
