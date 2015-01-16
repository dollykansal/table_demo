(function(){
	//TODO: This data is wrong - Rahul
var aData = [
	{vesselName: "Dente", laycan: "Al", checked: true, linkText: "www.sap.com", href: "http://www.sap.com", src: "images/person1.gif", gender: "male", rating: 4},
	{vesselName: "Friese", laycan: "Andy", checked: true, linkText: "www.sap.com", href: "http://www.sap.com", src: "images/person2.gif", gender: "male", rating: 2},
	{vesselName: "Mann", laycan: "Anita", checked: false, linkText: "www.sap.com", href: "http://www.sap.com", src: "images/person1.gif", gender: "female", rating: 3},
	{vesselName: "Schutt", laycan: "Doris", checked: true, linkText: "www.sap.com", href: "http://www.sap.com", src: "images/person1.gif", gender: "female", rating: 4},
	{vesselName: "Open", laycan: "Doris", checked: true, linkText: "www.sap.com", href: "http://www.sap.com", src: "images/person1.gif", gender: "female", rating: 2},
	{vesselName: "Dewit", laycan: "Kenya", checked: false, linkText: "www.sap.com", href: "http://www.sap.com", src: "images/person1.gif", gender: "female", rating: 3},
	{vesselName: "Turner", laycan: "Paige", checked: true, linkText: "www.sap.com", href: "http://www.sap.com", src: "images/person1.gif", gender: "female", rating: 3}
];

//Create an instance of the table control
var oTable = window.helper.createTable({title: "Demand"});
//Define the columns and the control templates to be used
var oColumn = window.helper.createColumn("layCan", "LayCan", "70px", "TV");

//Define the columns and the control templates to be used
var oCustomMenu = new sap.ui.commons.Menu();
oCustomMenu.addItem(new sap.ui.commons.MenuItem({
	text:"Custom Menu",
	select:function() {
		alert("Custom Menu");
	}
}));
oColumn.setMenu(oCustomMenu);
oTable.addColumn(oColumn);

oTable.addColumn(window.helper.createColumn("voyage", "Voyage", "50px", "TF"));
oTable.addColumn(window.helper.createColumn("loadPort", "Load Port", "50px", "TF"));
oTable.addColumn(window.helper.createColumn("disPort", "Discharge Port", "50px", "TF"));
oTable.addColumn(window.helper.createColumn("cargo", "Cargo", "50px", "TF"));
oTable.addColumn(window.helper.createColumn("offer", "Offer", "50px", "TF"));
oTable.addColumn(window.helper.createColumn("breakeven", "Breakeven", "50px", "TF"));
oTable.addColumn(window.helper.createColumn("commission", "Commission", "50px", "TF"));
oTable.addColumn(window.helper.createColumn("broker", "Broker", "50px", "TF"));
oTable.addColumn(window.helper.createColumn("charterer", "Charterer", "50px", "TF"));

//Create a model and bind the table rows to this model
var oModel = new sap.ui.model.json.JSONModel();
oModel.setData({modelData: aData});
oTable.setModel(oModel);
oTable.bindRows("/modelData");

//Initially sort the table
oTable.sort(oTable.getColumns()[0]);

//Bring the table onto the UI 
 
 oTable.placeAt("demand");
})();