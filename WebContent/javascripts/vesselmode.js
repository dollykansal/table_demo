(function(){
var aData = [
	{ballast: "20.0", laden: "10.0"}
];

//Create a RadioButtonGroup with two options: full & Eco
var oRBG1 = window.helper.createRadioButton("Select Full or Eco")
oRBG1.addItem(window.helper.createItem("Full","Key1"));
oRBG1.addItem(window.helper.createItem("Eco","Key2"));
oRBG1.placeAt("vesselmode_1");

//Create an instance of the table control
var oTable = window.helper.createTable();
oTable.addColumn(window.helper.createColumn("ballast", "Ballast", "60px", "TV"));
oTable.addColumn(window.helper.createColumn("laden", "Laden", "60px", "TF"));
//oTable.addExtension(oRBG1);
//Create a model and bind the table rows to this model
var oModel = new sap.ui.model.json.JSONModel();
oModel.setData({modelData: aData});
oTable.setModel(oModel);
oTable.bindRows("/modelData");

//Initially sort the table
oTable.sort(oTable.getColumns()[0]);

//Bring the table onto the UI 
 
 oTable.placeAt("vesselmode");
})();