(function(){
var aData = [
	{vesselName: "VesselName", laycan: "4"}
];

//Create an instance of the table control
var oTableVess = window.helper.createTable({title:"Vessel Availability"});

//Define the columns and the control templates to be used
var oColumn = window.helper.createColumn("vesselName", "Vessel Name", "120px", "TV");
var oCustomMenu = new sap.ui.commons.Menu();
oCustomMenu.addItem(new sap.ui.commons.MenuItem({
	text:"Custom Menu",
	select:function() {
		alert("Custom Menu");
	}
}));
oColumn.setMenu(oCustomMenu);
oTableVess.addColumn(oColumn);

oTableVess.addColumn(window.helper.createColumn("laycan", "Laycan", "80px", "TF"));
oTableVess.addColumn(window.helper.createColumn("dwt", "DWT", "60px", "TF"));
oTableVess.addColumn(window.helper.createColumn("draft", "Draft", "60px", "TF"));
oTableVess.addColumn(window.helper.createColumn("port", "Port", "60px", "TF"));

//Create a model and bind the table rows to this model
var oModel = new sap.ui.model.json.JSONModel();
oModel.setData({modelData: aData});
oTableVess.setModel(oModel);
oTableVess.bindRows("/modelData");


//Initially sort the table
//oTableVess.sort(oTableVess.getColumns()[0]);

//Bring the table onto the UI 
 
 oTableVess.placeAt("vesselavail");
})();