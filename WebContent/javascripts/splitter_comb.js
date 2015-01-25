(function(){

//////////////////////////////////////////////vertical Splitter starts///////////////////////////////////////////////////////////////
	//create a vertical Splitter
/*	var oSplitterV1 = new sap.ui.commons.Splitter("splitterV1"); 
	oSplitterV1.setSplitterOrientation(sap.ui.commons.Orientation.vertical);
	oSplitterV1.setSplitterPosition("90%");
	oSplitterV1.setMinSizeFirstPane("20%");
	oSplitterV1.setMinSizeSecondPane("10%");
	oSplitterV1.setWidth("100%");
	oSplitterV1.setHeight("470px");*/


//////////////////////////////////////////////Horizontal Splitter 1.1 starts////////////////////////////////////////////////////////////
	//create a horizontal Splitter
	var oSplitterH1 = new sap.ui.commons.Splitter("splitterH1");
	oSplitterH1.setSplitterOrientation(sap.ui.commons.Orientation.horizontal);
	oSplitterH1.setSplitterPosition("28%");
	oSplitterH1.setMinSizeFirstPane("25%");
	oSplitterH1.setMinSizeSecondPane("30%");
	oSplitterH1.setWidth("100%");
	oSplitterH1.setHeight("470px");


//////////////////////////////////////////////Horizontal Splitter 1.2 starts////////////////////////////////////////////////////////////
	//create a horizontal Splitter
	var oSplitterH2 = new sap.ui.commons.Splitter("splitterH2");
	oSplitterH2.setSplitterOrientation(sap.ui.commons.Orientation.horizontal);
	oSplitterH2.setSplitterPosition("45%");
	oSplitterH2.setMinSizeFirstPane("20%");
	oSplitterH2.setMinSizeSecondPane("30%");
	oSplitterH2.setWidth("100%");
	oSplitterH2.setHeight("100%");

//////////////////////////////////////////////Horizontal Splitter 2.1 starts////////////////////////////////////////////////////////////
/*	//create a horizontal Splitter
	var oSplitterH21 = new sap.ui.commons.Splitter("splitterH21");
	oSplitterH21.setSplitterOrientation(sap.ui.commons.Orientation.horizontal);
	oSplitterH21.setSplitterPosition("25%");
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
	oSplitterH22.setHeight("100%");*/
///////////////////////////////////////add table 1 ( vessel)//////////////////////////////////////////////////////////////////////////   
	var aDataVess = [
	                 {mv: "Netpas", type: "Owned", dwt: 35000, draft: "13.00"}
	                 ];

//	creating table using helper
	var oTableVess = window.helper.createTable({
		//title: "Selected Vessel Particular",
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

	var aDataMode = [
	             {ballast: "20.0", laden: "10.0"}
	             ];

	//Create a RadioButtonGroup with two options: full & Eco
	var oRBG1 = window.helper.createRadioButton("Select Full or Eco")
	oRBG1.addItem(window.helper.createItem("Full","Key1"));
	oRBG1.addItem(window.helper.createItem("Eco","Key2"));
	//oRBG1.placeAt("vesselmode_1");

	//Create an instance of the table control
	var oTableMode = window.helper.createTable();
	oTableMode.addColumn(window.helper.createColumn("ballast", "Ballast", "60px", "TV"));
	oTableMode.addColumn(window.helper.createColumn("laden", "Laden", "60px", "TF"));
	//oTableMode.addExtension(oRBG1);
	//Create a model and bind the table rows to this model
	var oModel = new sap.ui.model.json.JSONModel();
	oModel.setData({modelData: aDataMode});
	oTableMode.setModel(oModel);
	oTableMode.bindRows("/modelData");

	//Initially sort the table
	oTableMode.sort(oTableMode.getColumns()[0]);
/////////////////////////////////////////DO  ///////////////////////////////////////////////////////////////////
	var aDataDo = [
	             {vesselName: "DO", type: "", sea: "0.00", idle: "0.0", work: "0.0"},
	             {vesselName: "LSDO", type: "", sea: "0.00", idle: "0.0", work: "0.0"}
	             ];

	//Create an instance of the table control
	var oTableDo = window.helper.createTable({visibleRowCount: 2,firstVisibleRow: 2});
	//Define the columns and the control templates to be used
	oTableDo.addColumn(window.helper.createColumn("vesselName", "VesselName", "50px", "TV"));
	oTableDo.addColumn(window.helper.createColumn("type", "Type", "50px", "TF"));
	oTableDo.addColumn(window.helper.createColumn("sea", "Sea", "50px", "TF"));
	oTableDo.addColumn(window.helper.createColumn("idle", "Idle", "50px", "TF"));
	oTableDo.addColumn(window.helper.createColumn("work", "Work", "50px", "TF"));


	//Create a model and bind the table rows to this model
	var oModel = new sap.ui.model.json.JSONModel();
	oModel.setData({modelData: aDataDo});
	oTableDo.setModel(oModel);
	oTableDo.bindRows("/modelData");

	//Initially sort the table
	oTableDo.sort(oTableDo.getColumns()[0]);

/////////////////////////////////////////FO  ///////////////////////////////////////////////////////////////////	
	var aDataFo = [
	             {vesselName: "FO", type: "180", ballast: "20.00", laden: "10.00", idle: "1.0", work: "1.0"},
	             {vesselName: "LSFO", type: "", ballast: "0.00", laden: "0.00", idle: "0.0", work: "0.0"}
	             ];

	//Create an instance of the table control
	var oTableFo = window.helper.createTable({visibleRowCount: 2,firstVisibleRow: 2});
	//Define the columns and the control templates to be used
	oTableFo.addColumn(window.helper.createColumn("vesselName", "VesselName", "50px", "TV"));
	oTableFo.addColumn(window.helper.createColumn("type", "Type", "50px", "TF"));
	oTableFo.addColumn(window.helper.createColumn("ballast", "Ballast", "50px", "TF"));
	oTableFo.addColumn(window.helper.createColumn("laden", "laden", "50px", "TF"));
	oTableFo.addColumn(window.helper.createColumn("idle", "Idle", "50px", "TF"));
	oTableFo.addColumn(window.helper.createColumn("work", "Work", "50px", "TF"));

	//Create a model and bind the table rows to this model
	var oModel = new sap.ui.model.json.JSONModel();
	oModel.setData({modelData: aDataFo});
	oTableFo.setModel(oModel);
	oTableFo.bindRows("/modelData");
	
/////////////////////////////////////////Panel & Matrix Vessel  ///////////////////////////////////////////////////////////////////
	//Create a panel instance
	var oPanel = new sap.ui.commons.Panel({
		width : "100%"
	});
	
	oPanel.setText("Selected Vessel Particular");
	
	//var oIcon = new sap.ui.core.Icon({src:"sap-icon://action",press:function(){alert("Click Action");}});
	
	//oPanel.addContent(oIcon);

	
			var oButton3 = 		new sap.ui.commons.Button({
		text : "Vessel Capacity Graph",
		icon : "images/graph.jpg",
		lite : true
		});

	oPanel.addButton( oButton3);
	//Create a matrix layout with 5 columns
	var oMatrix = new sap.ui.commons.layout.MatrixLayout({
		layoutFixed : true,
		width : '100%',
		columns : 5
	});
	
	oMatrix.setWidths('25%','5%', '15%','25%', '30%');
	oMatrix.createRow(oTableVess,oRBG1, oTableMode, oTableDo, oTableFo);
	oPanel.addContent(oMatrix);
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
			        new sap.ui.commons.Button({text: "Delete",style: sap.ui.commons.ButtonStyle.Reject,  press: function() {
			        	var idx = oTableCargo.getSelectedIndex();
			        	if (idx != -1) {
			        		var m = oTableCargo.getModel();
			        		var data = m.getData()['modelData'];
			        		var removed = data.splice(idx, 1);
			        		m.setData({modelData: data});
//			        		m.setData(data);
//			        		sap.m.MessageToast.show(JSON.stringify(removed[0]) +  'is removed');
			        		console.log(removed[0]);
			        	} else {
//			        		sap.m.MessageToast.show('Please select a row');
			        	}
			        }}) ,  
			        new sap.ui.commons.Button({text: "Move up", press: function() { alert("Move up Button pressed!"); }}),
			        new sap.ui.commons.Button({text: "Move down", press: function() { alert("Move down Button pressed!"); }}),
			        new sap.ui.commons.Button({text: "Frt. Sim.",style: sap.ui.commons.ButtonStyle.Emph, press: function() { oDialogFragment.open(); }}) //calling fragment
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
	var oTablePort = window.helper.createTable({title: "Port Rotation", visibleRowCount: 5});
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

/////////////////////////////////////////place content  ///////////////////////////////////////////////////////////////////	         
	oSplitterH1.addFirstPaneContent(oPanel);

	//oSplitterV1.addFirstPaneContent(oSplitterH1);
	oSplitterH2.addFirstPaneContent(oTableCargo);
	oSplitterH2.addSecondPaneContent(oTablePort);
	oSplitterH1.addSecondPaneContent(oSplitterH2);

	//oSplitterH21.addFirstPaneContent(new sap.ui.core.HTML({content:"<div id='hchart' style='height:100%;width:100%;'></div>"}));
	//oSplitterV1.addSecondPaneContent(oSplitterH21);
	//oSplitterH21.addSecondPaneContent(oSplitterH22);
	//oSplitterV1.addSecondPaneContent(oLayout);
	//oSplitterH22.addFirstPaneContent(new sap.ui.core.HTML({content:"<div id='chartContainer' style='height:100%;width:100%;'></div>"}));
	//oSplitterH22.addSecondPaneContent(new sap.ui.core.HTML({content:"<div id='ganttContainer' style='height:100%;width:100%;'></div>"}));

//	Bring the table onto the UI 

	oSplitterH1.placeAt("splitter_comb");
})();