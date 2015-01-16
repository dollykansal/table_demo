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
	oPanel.setText("Operation Expense");

	//Create a matrix layout with 2 columns
	var oMatrix = new sap.ui.commons.layout.MatrixLayout({
		layoutFixed : true,
		width : '400px',
		columns : 4
	});
	
	oMatrix.setWidths('100px', '100px','100px', '100px');

	//Create a simple form within the layout
	var oLabel = new sap.ui.commons.Label({
		text : 'Dem/Des'
	});
	
	var oInput = new sap.ui.commons.TextField({
		value : '-1840.00',
		width : '100%'
	});
	//Create 3rd and 4th columns
	var oLabel1 = new sap.ui.commons.Label({
		text : 'Bunker Expense'
	});
	
	var oInput1 = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	oLabel.setLabelFor(oInput);
	oMatrix.createRow(oLabel, oInput, oLabel1, oInput1);
	
	//Create a simple form within the layout
	var oLabel = new sap.ui.commons.Label({
		text : 'Add Comm.'
	});
	
	var oInput = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	//Create 3rd and 4th columns
	var oLabel1 = new sap.ui.commons.Label({
		text : 'C.E.V'
	});
	
	var oInput1 = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	oLabel.setLabelFor(oInput);
	oMatrix.createRow(oLabel, oInput, oLabel1, oInput1);
	
	//Create a simple form within the layout
	var oLabel = new sap.ui.commons.Label({
		text : 'Brokerage'
	});
	var oInput = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	//Create 3rd and 4th columns
	var oLabel1 = new sap.ui.commons.Label({
		text : 'ILOHC'
	});
	
	var oInput1 = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	oLabel.setLabelFor(oInput);
	oMatrix.createRow(oLabel, oInput, oLabel1, oInput1);
	
	//Create a simple form within the layout
	var oLabel = new sap.ui.commons.Label({
		text : 'Freight tax'
	});
	var oInput = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	//Create 3rd and 4th columns
	var oLabel1 = new sap.ui.commons.Label({
		text : 'Ballast Bonus'
	});
	
	var oInput1 = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	oLabel.setLabelFor(oInput);
	oMatrix.createRow(oLabel, oInput, oLabel1, oInput1);
	
	//Create a simple form within the layout
	var oLabel = new sap.ui.commons.Label({
		text : 'Liner Terms'
	});
	var oInput = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	//Create 3rd and 4th columns
	var oLabel1 = new sap.ui.commons.Label({
		text : 'Routing Service'
	});
	
	var oInput1 = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	oLabel.setLabelFor(oInput);
	oMatrix.createRow(oLabel, oInput, oLabel1, oInput1);
	
	//Create a simple form within the layout
	var oLabel = new sap.ui.commons.Label({
		text : 'Port Charge'
	});
	var oInput = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	//Create 3rd and 4th columns
	var oLabel1 = new sap.ui.commons.Label({
		text : 'Others'
	});
	
	var oInput1 = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	oLabel.setLabelFor(oInput);
	oMatrix.createRow(oLabel, oInput, oLabel1, oInput1);
	
	//Add the form to the panels content area
	oPanel.addContent(oMatrix);
	oPanel.placeAt("operexpense");
})();