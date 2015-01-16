(function(){
	//Create a panel instance
	var oPanel = new sap.ui.commons.Panel({
		width : "420px"
	});
	//Set the title of the panel
//	oPanel.setTitle(new sap.ui.core.Title({
//		text : "Operation Expense",
//		icon : "images/carousel/SAPLogo.gif"
//	}));

	//As alternative if no icon is desired also the following shortcut might be possible:
	oPanel.setText("Bunker Expense");

	//Create a matrix layout with 2 columns
	var oMatrix = new sap.ui.commons.layout.MatrixLayout({
		layoutFixed : true,
		width : '400px',
		columns : 4
	});
	
	oMatrix.setWidths('100px', '100px','100px', '100px');

	//Create a simple form within the layout
	var oLabel = new sap.ui.commons.Label({
		text : 'FO Price'
	});
	
	var oInput = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	//Create 3rd and 4th columns
	var oLabel1 = new sap.ui.commons.Label({
		text : 'DO Price'
	});
	
	var oInput1 = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	oLabel.setLabelFor(oInput);
	oMatrix.createRow(oLabel, oInput, oLabel1, oInput1);
	
	//Create a simple form within the layout
	var oLabel = new sap.ui.commons.Label({
		text : 'FO Consumption'
	});
	
	var oInput = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	//Create 3rd and 4th columns
	var oLabel1 = new sap.ui.commons.Label({
		text : 'DO Consumption'
	});
	
	var oInput1 = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	oLabel.setLabelFor(oInput);
	oMatrix.createRow(oLabel, oInput, oLabel1, oInput1);
	
	//Create a simple form within the layout
	var oLabel = new sap.ui.commons.Label({
		text : 'FO Expense'
	});
	var oInput = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	//Create 3rd and 4th columns
	var oLabel1 = new sap.ui.commons.Label({
		text : 'DO Expense'
	});
	
	var oInput1 = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	oLabel.setLabelFor(oInput);
	oMatrix.createRow(oLabel, oInput, oLabel1, oInput1);
	
	//Create a simple form within the layout
	var oLabel = new sap.ui.commons.Label({
		text : 'LSFO Price'
	});
	var oInput = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	//Create 3rd and 4th columns
	var oLabel1 = new sap.ui.commons.Label({
		text : 'LSDO Price'
	});
	
	var oInput1 = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	oLabel.setLabelFor(oInput);
	oMatrix.createRow(oLabel, oInput, oLabel1, oInput1);
	
	//Create a simple form within the layout
	var oLabel = new sap.ui.commons.Label({
		text : 'LSFO Consumption'
	});
	var oInput = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	//Create 3rd and 4th columns
	var oLabel1 = new sap.ui.commons.Label({
		text : 'LSDO Consumption'
	});
	
	var oInput1 = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	oLabel.setLabelFor(oInput);
	oMatrix.createRow(oLabel, oInput, oLabel1, oInput1);
	
	//Create a simple form within the layout
	var oLabel = new sap.ui.commons.Label({
		text : 'LSFO Expense'
	});
	var oInput = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	//Create 3rd and 4th columns
	var oLabel1 = new sap.ui.commons.Label({
		text : 'LSDO Expense'
	});
	
	var oInput1 = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	oLabel.setLabelFor(oInput);
	oMatrix.createRow(oLabel, oInput, oLabel1, oInput1);
	
	//Add the form to the panels content area
	oPanel.addContent(oMatrix);
	oPanel.placeAt("bunkexpense");
})();