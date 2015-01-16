(function(){
var aData = [
	{vesselName: "FO", type: "180", ballast: "20.00", laden: "10.00", idle: "1.0", work: "1.0"},
	{vesselName: "LSFO", type: "", ballast: "0.00", laden: "0.00", idle: "0.0", work: "0.0"}
];

//Create an instance of the table control
var oTable = window.helper.createTable({visibleRowCount: 2,firstVisibleRow: 2});
//Define the columns and the control templates to be used
oTable.addColumn(window.helper.createColumn("vesselName", "VesselName", "50px", "TV"));
oTable.addColumn(window.helper.createColumn("type", "Type", "50px", "TF"));
oTable.addColumn(window.helper.createColumn("ballast", "Ballast", "50px", "TF"));
oTable.addColumn(window.helper.createColumn("laden", "laden", "50px", "TF"));
oTable.addColumn(window.helper.createColumn("idle", "Idle", "50px", "TF"));
oTable.addColumn(window.helper.createColumn("work", "Work", "50px", "TF"));

//Create a model and bind the table rows to this model
var oModel = new sap.ui.model.json.JSONModel();
oModel.setData({modelData: aData});
oTable.setModel(oModel);
oTable.bindRows("/modelData");

//Initially sort the table
//oTable.sort(oTable.getColumns()[0]);

//Bring the table onto the UI 
 
 oTable.placeAt("fo");
})();