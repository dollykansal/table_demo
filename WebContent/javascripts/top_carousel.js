(function(){
/*	var oCarousel = new sap.ui.commons.Carousel();
	oCarousel.setOrientation("horizontal");
	oCarousel.setVisibleItems(1);
	oCarousel.setWidth("100%");
	oCarousel.setHeight("100px");*/

	//Create a matrix layout with 2 columns
	var oMatrix = new sap.ui.commons.layout.MatrixLayout({
		layoutFixed : true,
		width : '100%',
		columns : 2
	});
	oMatrix.setWidths('40%', '60%');
	
	//Create a panel instance
/*	var oPanel = new sap.ui.commons.Panel({
		width : "100%"
	});
*/

	//Set the title of the panel
/*	oPanel.setTitle(new sap.ui.core.Title({
		text : "Vessel Availability",
		icon : "images/carousel/SAPLogo.gif"
	}));*/

	//As alternative if no icon is desired also the following shortcut might be possible:
	//oPanel.setText("Vessel Availability");

	var aData = [
	             {vesselName: "VesselName", laycan: "4"}
	             ];

	//Create an instance of the table control
	var oTableVess = window.helper.createTable({title: "Vessel Availability"} );

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

	//oMatrix.createRow(oTableVess);
	//oPanel.addContent(oTableVess);
	//oCarousel.addContent(oPanel);
	
	
	//Create a panel instance
//	var oPanel2 = new sap.ui.commons.Panel();
//	oPanel2.setText("Demand");
	//Create an instance of the table control
	var oTable = window.helper.createTable({title: "Demand"} );
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
	
	oMatrix.createRow(oTableVess, oTable);
	
	//oPanel.addContent(oMatrix);

	//oCarousel.addContent(oPanel);
	oMatrix.placeAt("top_carousel");
})();
