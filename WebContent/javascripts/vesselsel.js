(function(){
var aData = [
	{mv: "Netpas", type: "Owned", dwt: 35000, draft: "13.00"}
];

//creating table using helper
var oTable = window.helper.createTable({title: "Selected Vessel Particular",
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

//Bring the table onto the UI 
 
 oTable.placeAt("vesselsel");
})();