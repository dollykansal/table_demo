(function(){
var aData = [
	{sNo: "1", type: "Seafuture", cargoNam: "Hot Coil", qty:"32,000.00", term: "FIO"}
];
//Create a panel instance
var oPanel = new sap.ui.commons.Panel({
	width : "100%"
});
oPanel.setText("Port Rotation");

//Create an instance of the table control
var oTable = window.helper.createTable();
//Define the columns and the control templates to be used
oTable.addColumn(window.helper.createColumn("sNo", "SNo", "40px", "TV"));
oTable.addColumn(window.helper.createColumn("type", "Type", "40px", "TF"));
oTable.addColumn(window.helper.createColumn("coord", "Port Name or Coordinates", "40px", "TF"));
oTable.addColumn(window.helper.createColumn("distEca", "Distance/(S)ECA", "40px", "TF"));
oTable.addColumn(window.helper.createColumn("wf", "W.F", "40px", "TF"));
oTable.addColumn(window.helper.createColumn("spd", "Spd", "40px", "TF"));
oTable.addColumn(window.helper.createColumn("sea", "Sea", "40px", "TF"));
oTable.addColumn(window.helper.createColumn("ldrate", "L/D Rate", "40px", "TF"));
oTable.addColumn(window.helper.createColumn("portiw", "Port(I/W)", "40px", "TF"));
oTable.addColumn(window.helper.createColumn("dem", "Dem", "40px", "TF"));
oTable.addColumn(window.helper.createColumn("des", "Des", "40px", "TF"));
oTable.addColumn(window.helper.createColumn("portChg", "Port charge", "40px", "TF"));
oTable.addColumn(window.helper.createColumn("arrival", "Arrival", "40px", "TF"));
oTable.addColumn(window.helper.createColumn("departure", "Departure", "40px", "TF"));


//Create a model and bind the table rows to this model
var oModel = new sap.ui.model.json.JSONModel();
oModel.setData({modelData: aData});
oTable.setModel(oModel);
oTable.bindRows("/modelData");

//Initially sort the table
oTable.sort(oTable.getColumns()[0]);
oPanel.addContent(oTable);
oPanel.placeAt("portrot");

})();