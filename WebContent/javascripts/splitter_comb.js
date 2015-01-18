(function(){

//////////////////////////////////////////////vertical Splitter starts///////////////////////////////////////////////////////////////
	//create a vertical Splitter
	var oSplitterV1 = new sap.ui.commons.Splitter("splitterV1"); 
	oSplitterV1.setSplitterOrientation(sap.ui.commons.Orientation.vertical);
	oSplitterV1.setSplitterPosition("80%");
	oSplitterV1.setMinSizeFirstPane("20%");
	oSplitterV1.setMinSizeSecondPane("10%");
	oSplitterV1.setWidth("100%");
	oSplitterV1.setHeight("400px");


//////////////////////////////////////////////Horizontal Splitter 1.1 starts////////////////////////////////////////////////////////////
	//create a horizontal Splitter
	var oSplitterH1 = new sap.ui.commons.Splitter("splitterH1");
	oSplitterH1.setSplitterOrientation(sap.ui.commons.Orientation.horizontal);
	oSplitterH1.setSplitterPosition("30%");
	oSplitterH1.setMinSizeFirstPane("20%");
	oSplitterH1.setMinSizeSecondPane("30%");
	oSplitterH1.setWidth("100%");
	oSplitterH1.setHeight("400px");


//////////////////////////////////////////////Horizontal Splitter 1.2 starts////////////////////////////////////////////////////////////
	//create a horizontal Splitter
	var oSplitterH2 = new sap.ui.commons.Splitter("splitterH2");
	oSplitterH2.setSplitterOrientation(sap.ui.commons.Orientation.horizontal);
	oSplitterH2.setSplitterPosition("70%");
	oSplitterH2.setMinSizeFirstPane("20%");
	oSplitterH2.setMinSizeSecondPane("30%");
	oSplitterH2.setWidth("100%");
	oSplitterH2.setHeight("100%");

//////////////////////////////////////////////Horizontal Splitter 2.1 starts////////////////////////////////////////////////////////////
	//create a horizontal Splitter
	var oSplitterH21 = new sap.ui.commons.Splitter("splitterH21");
	oSplitterH21.setSplitterOrientation(sap.ui.commons.Orientation.horizontal);
	oSplitterH21.setSplitterPosition("30%");
	oSplitterH21.setMinSizeFirstPane("20%");
	oSplitterH21.setMinSizeSecondPane("30%");
	oSplitterH21.setWidth("100%");
	oSplitterH21.setHeight("400px");


//////////////////////////////////////////////Horizontal Splitter 2.2 starts////////////////////////////////////////////////////////////
	//create a horizontal Splitter
	var oSplitterH22 = new sap.ui.commons.Splitter("splitterH22");
	oSplitterH22.setSplitterOrientation(sap.ui.commons.Orientation.horizontal);
	oSplitterH22.setSplitterPosition("70%");
	oSplitterH22.setMinSizeFirstPane("20%");
	oSplitterH22.setMinSizeSecondPane("30%");
	oSplitterH22.setWidth("100%");
	oSplitterH22.setHeight("100%");
///////////////////////////////////////add table 1 ( vessel)//////////////////////////////////////////////////////////////////////////   
	var aDataVess = [
	             {mv: "Netpas", type: "Owned", dwt: 35000, draft: "13.00"}
	             ];

//	creating table using helper
	var oTableVess = window.helper.createTable({title: "Selected Vessel Particular",
		toolbar: new sap.ui.commons.Toolbar({items: [ 
		                                             new sap.ui.commons.Button({text: "Edit", press: function() { alert("Edit Button pressed!"); }}),
		                                             new sap.ui.commons.Button({text: "List", press: function() { alert("List Button pressed!"); }}),
		                                             new sap.ui.commons.Button({text: "Clear", press: function() { alert("Clear Button pressed!"); }}),
		                                             new sap.ui.commons.Button({text: "History", press: function() { alert("History Button pressed!"); }})
		                                             ]})});
//	Define the columns and the control templates to be used
	var oColumn = window.helper.createColumn("mv", "MV", "100px", "TV");

	var oCustomMenu = new sap.ui.commons.Menu();
	oCustomMenu.addItem(new sap.ui.commons.MenuItem({
		text:"Custom Menu",
		select:function() {
			alert("Custom Menu");
		}
	}));
	oColumn.setMenu(oCustomMenu);
	oTableVess.addColumn(oColumn);

	oTableVess.addColumn(window.helper.createColumn("type", "Type", "50px", "TF"));
	oTableVess.addColumn(window.helper.createColumn("dwt", "DWT", "50px", "TF"));
	oTableVess.addColumn(window.helper.createColumn("draft", "Draft", "50px", "TF"));

//	Create a model and bind the table rows to this model
	var oModel = new sap.ui.model.json.JSONModel();
	oModel.setData({modelData: aDataVess});
	oTableVess.setModel(oModel);
	oTableVess.bindRows("/modelData");

//	Initially sort the table
	oTableVess.sort(oTableVess.getColumns()[0]);


/////////////////////////////////////////second table - cargo  ///////////////////////////////////////////////////////////////////
	var aDataCargo = [
	             {sNo: "1", account: "Seafuture", cargoNam: "Hot Coil", qty:"32,000.00", term: "FIO"}
	             ];
	//Function to create the dialog with fragments
	var oDialogFragment = sap.ui.jsfragment("frtsim.fragments.JSFragmentDialog");

	//Create an instance of the table control
	var oTableCargo = window.helper.createTable({
		title: "Cargo",
		visibleRowCount: 3,
		firstVisibleRow: 2,
		toolbar: new sap.ui.commons.Toolbar({
			items: [ 
		                                             new sap.ui.commons.Button({text: "Clear", press: function() { alert("Clear Button pressed!"); }}),
		                                             new sap.ui.commons.Button({text: "Append", press: function() { alert("Append Button pressed!"); }}),
		                                             new sap.ui.commons.Button({text: "Insert",style: sap.ui.commons.ButtonStyle.Accept,  press: function() { 
		                                            	 var modelData = oModel.getData();  
		                                            	 var rowCount   = modelData.modelData.length;    
		                                            	 rowCount = rowCount + 1;  
		                                            	 aDataCargo.push({sNo: rowCount, cargoNam: " "}); // Push data to Model  
		                                            	 oModel.setData({modelData: aDataCargo}); // Set Model  
		                                            	 oTableCargo.visibleRowCount=oTableCargo.visibleRowCount+1;
		                                            	 oModel.refresh();
		                                             }}) , 
		                                             new sap.ui.commons.Button({text: "Delete",  press: function() {
		                                            	 var idx = oTableCargo.getSelectedIndex();
		                                            	 if (idx != -1) {
		                                            		 var m = oTableCargo.getModel();
		                                            		 var data = m.getData()['modelData'];
		                                            		 var removed = data.splice(idx, 1);
		                                            		 m.setData({modelData: data});
//		                                            		 m.setData(data);
//		                                            		 sap.m.MessageToast.show(JSON.stringify(removed[0]) +  'is removed');
		                                            		 console.log(removed[0]);
		                                            	 } else {
//		                                            		 sap.m.MessageToast.show('Please select a row');
		                                            	 }
		                                             }}) ,  
		                                             new sap.ui.commons.Button({text: "Move up", press: function() { alert("Move up Button pressed!"); }}),
		                                             new sap.ui.commons.Button({text: "Move down", press: function() { alert("Move down Button pressed!"); }}),
		                                             new sap.ui.commons.Button({text: "Frt. Sim.", press: function() { oDialogFragment.open(); }}) //calling fragment
		                                             //new sap.ui.commons.Button({text: "Frt. Sim.", press: function() { openFrtSim(); }})
		                                             ]}),
	});

	//Define the columns and the control templates to be used
	oTableCargo.addColumn(window.helper.createColumn("sNo", "SNo", "20px", "TV"));
	oTableCargo.addColumn(window.helper.createColumn("account", "Account", "40px", "TF"));
	oTableCargo.addColumn(window.helper.createColumn("cargoNam", "Cargo Name", "40px", "TF"));
	oTableCargo.addColumn(window.helper.createColumn("loadPort", "Loading Port", "40px", "TF"));
	oTableCargo.addColumn(window.helper.createColumn("disPort", "Discharging Port", "40px", "TF"));
	oTableCargo.addColumn(window.helper.createColumn("qty", "Quantity", "40px", "TF"));
	oTableCargo.addColumn(window.helper.createColumn("frt", "Frt", "40px", "TF"));
	oTableCargo.addColumn(window.helper.createColumn("term", "Term", "40px", "TF"));
	oTableCargo.addColumn(window.helper.createColumn("rev", "Revenue", "40px", "TF"));
	oTableCargo.addColumn(window.helper.createColumn("aComm", "A.Comm", "40px", "TF"));
	oTableCargo.addColumn(window.helper.createColumn("brkg", "Brkg", "40px", "TF"));
	oTableCargo.addColumn(window.helper.createColumn("frtTax", "Frt Tax", "40px", "TF"));
	oTableCargo.addColumn(window.helper.createColumn("linTerm", "Liner Term", "40px", "TF"));


	//Create a model and bind the table rows to this model
	var oModel = new sap.ui.model.json.JSONModel();
	oModel.setData({modelData: aDataCargo});
	oTableCargo.setModel(oModel);
	oTableCargo.bindRows("/modelData");

	//Initially sort the table
	oTableCargo.sort(oTableCargo.getColumns()[0]);

/////////////////////////////////////////third table -portrot  ///////////////////////////////////////////////////////////////////
	var aDataPort = [
	         	{sNo: "1", type: "Seafuture", cargoNam: "Hot Coil", qty:"32,000.00", term: "FIO"}
	         ];

	         //Create an instance of the table control
	         var oTablePort = window.helper.createTable({title: "Port Rotation"});
	         //Define the columns and the control templates to be used
	         oTablePort.addColumn(window.helper.createColumn("sNo", "SNo", "40px", "TV"));
	         oTablePort.addColumn(window.helper.createColumn("type", "Type", "40px", "TF"));
	         oTablePort.addColumn(window.helper.createColumn("coord", "Port Name or Coordinates", "40px", "TF"));
	         oTablePort.addColumn(window.helper.createColumn("distEca", "Distance/(S)ECA", "40px", "TF"));
	         oTablePort.addColumn(window.helper.createColumn("wf", "W.F", "40px", "TF"));
	         oTablePort.addColumn(window.helper.createColumn("spd", "Spd", "40px", "TF"));
	         oTablePort.addColumn(window.helper.createColumn("sea", "Sea", "40px", "TF"));
	         oTablePort.addColumn(window.helper.createColumn("ldrate", "L/D Rate", "40px", "TF"));
	         oTablePort.addColumn(window.helper.createColumn("portiw", "Port(I/W)", "40px", "TF"));
	         oTablePort.addColumn(window.helper.createColumn("dem", "Dem", "40px", "TF"));
	         oTablePort.addColumn(window.helper.createColumn("des", "Des", "40px", "TF"));
	         oTablePort.addColumn(window.helper.createColumn("portChg", "Port charge", "40px", "TF"));
	         oTablePort.addColumn(window.helper.createColumn("arrival", "Arrival", "40px", "TF"));
	         oTablePort.addColumn(window.helper.createColumn("departure", "Departure", "40px", "TF"));


	         //Create a model and bind the table rows to this model
	         var oModel = new sap.ui.model.json.JSONModel();
	         oModel.setData({modelData: aDataPort});
	         oTablePort.setModel(oModel);
	         oTablePort.bindRows("/modelData");

	         //Initially sort the table
	         oTablePort.sort(oTablePort.getColumns()[0]);
	         
/////////////////////////////////////////Chart for vessel  ///////////////////////////////////////////////////////////////////	 
     // some business data 
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
	     						  var oDateFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({pattern: "MM"});
	     						  
	     						  console.log(oDateFormat.format(new Date(fval)));
	     						  return oDateFormat.format(new Date(fval));
	     				}}
	     			
	     			},
	     			
	     			
	     		],
	     		// 'data' is used to bind the whole data collection that is to be displayed in the chart 
	     		data : {
	     			path : "/businessData"
	     		}
	     	});
	     	
	     	  // create a Bar chart
	     	
	     	var oBarChart = new sap.viz.ui5.StackedColumn({
	     		width : "100%",
	     		height : "100%",
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
/////////////////////////////////////////place content  ///////////////////////////////////////////////////////////////////	         
	oSplitterH1.addFirstPaneContent(oTableVess);
	
	oSplitterV1.addFirstPaneContent(oSplitterH1);
	oSplitterH2.addFirstPaneContent(oTableCargo);
	oSplitterH2.addSecondPaneContent(oTablePort);
	oSplitterH1.addSecondPaneContent(oSplitterH2);
	
	oSplitterH21.addFirstPaneContent(oBarChart);
	oSplitterV1.addSecondPaneContent(oSplitterH21);
	oSplitterH21.addSecondPaneContent(oSplitterH22);
	//oSplitterH22.addSecondPaneContent(new sap.ui.core.HTML({content:"<div id='chartContainer' style='height:100%;width:100%;'></div>"}))
	
//	Bring the table onto the UI 

	oSplitterV1.placeAt("splitter_comb");
})();