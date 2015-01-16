(function(){

	//Create a panel instance
	var oPanel = new sap.ui.commons.Panel({
		width : "100%"
	});
	oPanel.setText("Selected Vessel Particular");

	//Create a matrix layout with 2 columns
	var oMatrix = new sap.ui.commons.layout.MatrixLayout({
		layoutFixed : true,
		width : '100%',
		columns : 5
	});
	oMatrix.setWidths('28%','5%','12%','30%','25%');

////////////////////////////////////////////selected vessel starts/////////////////////////////////////////////
	var aData = [
	             {mv: "Netpas", type: "Owned", dwt: 35000, draft: "13.00"}
	             ];

	//creating table using helper
	var oTable = window.helper.createTable({
		toolbar: new sap.ui.commons.Toolbar({items: [ 
		                                             new sap.ui.commons.Button({text: "Edit", press: function() { alert("Edit Button pressed!"); }}),
		                                             new sap.ui.commons.Button({text: "List", press: function() { alert("List Button pressed!"); }}),
		                                             new sap.ui.commons.Button({text: "Clear", press: function() { alert("Clear Button pressed!"); }}),
		                                             new sap.ui.commons.Button({text: "History", press: function() { alert("History Button pressed!"); }})
		                                             ]})});
	//Define the columns and the control templates to be used
	var oColumn = window.helper.createColumn("mv", "MV", "100px", "TV");

	var oCustomMenu = new sap.ui.commons.Menu();
	oCustomMenu.addItem(new sap.ui.commons.MenuItem({
		text:"Custom Menu",
		select:function() {
			alert("Custom Menu");
		}
	}));
	oColumn.setMenu(oCustomMenu);
	oTable.addColumn(oColumn);

	oTable.addColumn(window.helper.createColumn("type", "Type", "50px", "TF"));
	oTable.addColumn(window.helper.createColumn("dwt", "DWT", "50px", "TF"));
	oTable.addColumn(window.helper.createColumn("draft", "Draft", "50px", "TF"));

	//Create a model and bind the table rows to this model
	var oModel = new sap.ui.model.json.JSONModel();
	oModel.setData({modelData: aData});
	oTable.setModel(oModel);
	oTable.bindRows("/modelData");

	//Initially sort the table
	oTable.sort(oTable.getColumns()[0]);

//////////////////////////////////////////////Mode starts////////////////////////////////////////////////////////////////////////
	var aData = [
	             {ballast: "20.0", laden: "10.0"}
	             ];

	//Create a RadioButtonGroup with two options: full & Eco
	var oRBG1 = window.helper.createRadioButton("Select Full or Eco")
	oRBG1.addItem(window.helper.createItem("Full","Key1"));
	oRBG1.addItem(window.helper.createItem("Eco","Key2"));
	//oRBG1.placeAt("vesselmode_1");

	//Create an instance of the table control
	var oTable1 = window.helper.createTable();
	oTable1.addColumn(window.helper.createColumn("ballast", "Ballast", "60px", "TV"));
	oTable1.addColumn(window.helper.createColumn("laden", "Laden", "60px", "TF"));
	//oTable1.addExtension(oRBG1);
	//Create a model and bind the table rows to this model
	var oModel = new sap.ui.model.json.JSONModel();
	oModel.setData({modelData: aData});
	oTable1.setModel(oModel);
	oTable1.bindRows("/modelData");

	//Initially sort the table
	oTable1.sort(oTable1.getColumns()[0]);

//////////////////////////////////////////////FO starts////////////////////////////////////////////////////////////////////////

	var aData = [
	             {vesselName: "FO", type: "180", ballast: "20.00", laden: "10.00", idle: "1.0", work: "1.0"},
	             {vesselName: "LSFO", type: "", ballast: "0.00", laden: "0.00", idle: "0.0", work: "0.0"}
	             ];

	//Create an instance of the table control
	var oTablefo = window.helper.createTable({visibleRowCount: 2,firstVisibleRow: 2});
	//Define the columns and the control templates to be used
	oTablefo.addColumn(window.helper.createColumn("vesselName", "VesselName", "50px", "TV"));
	oTablefo.addColumn(window.helper.createColumn("type", "Type", "50px", "TF"));
	oTablefo.addColumn(window.helper.createColumn("ballast", "Ballast", "50px", "TF"));
	oTablefo.addColumn(window.helper.createColumn("laden", "laden", "50px", "TF"));
	oTablefo.addColumn(window.helper.createColumn("idle", "Idle", "50px", "TF"));
	oTablefo.addColumn(window.helper.createColumn("work", "Work", "50px", "TF"));

	//Create a model and bind the table rows to this model
	var oModel = new sap.ui.model.json.JSONModel();
	oModel.setData({modelData: aData});
	oTablefo.setModel(oModel);
	oTablefo.bindRows("/modelData");

//////////////////////////////////////////////DO starts////////////////////////////////////////////////////////////////////////    
	var aData = [
	             {vesselName: "DO", type: "", sea: "0.00", idle: "0.0", work: "0.0"},
	             {vesselName: "LSDO", type: "", sea: "0.00", idle: "0.0", work: "0.0"}
	             ];

	//Create an instance of the table control
	var oTabledo = window.helper.createTable({visibleRowCount: 2,firstVisibleRow: 2});
	//Define the columns and the control templates to be used
	oTabledo.addColumn(window.helper.createColumn("vesselName", "VesselName", "50px", "TV"));
	oTabledo.addColumn(window.helper.createColumn("type", "Type", "50px", "TF"));
	oTabledo.addColumn(window.helper.createColumn("sea", "Sea", "50px", "TF"));
	oTabledo.addColumn(window.helper.createColumn("idle", "Idle", "50px", "TF"));
	oTabledo.addColumn(window.helper.createColumn("work", "Work", "50px", "TF"));


	//Create a model and bind the table rows to this model
	var oModel = new sap.ui.model.json.JSONModel();
	oModel.setData({modelData: aData});
	oTabledo.setModel(oModel);
	oTabledo.bindRows("/modelData");

	//Initially sort the table
	oTabledo.sort(oTabledo.getColumns()[0]);
	oMatrix.createRow(oTable,oRBG1,oTable1,oTablefo,oTabledo);         
	oPanel.addContent(oMatrix);
	oPanel.placeAt("carousel_vess");
	
})();
