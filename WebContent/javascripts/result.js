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
	oPanel.setText("Result");

	//Create a matrix layout with 2 columns
	var oMatrix = new sap.ui.commons.layout.MatrixLayout({
		layoutFixed : true,
		width : '400px',
		columns : 4
	});
	
	oMatrix.setWidths('100px', '100px','100px', '100px');

	//Create a simple form within the layout
	var oLabel = new sap.ui.commons.Label({
		text : 'Hire/Day'
	});
	
	var oInput = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	//Create 3rd and 4th columns
	var oLabel1 = new sap.ui.commons.Label({
		text : 'Total Revenue'
	});
	
	var oInput1 = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	oLabel.setLabelFor(oInput);
	oMatrix.createRow(oLabel, oInput, oLabel1, oInput1);
	
	//Create a simple form within the layout
	var oLabel = new sap.ui.commons.Label({
		text : 'H/Add Comm.'
	});
	
	var oInput = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	//Create 3rd and 4th columns
	var oLabel1 = new sap.ui.commons.Label({
		text : 'Op. Expense'
	});
	
	var oInput1 = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	oLabel.setLabelFor(oInput);
	oMatrix.createRow(oLabel, oInput, oLabel1, oInput1);
	
	//Create a simple form within the layout
	var oLabel = new sap.ui.commons.Label({
		text : 'Net Hire'
	});
	var oInput = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	//Create 3rd and 4th columns
	var oLabel1 = new sap.ui.commons.Label({
		text : 'Op. Profit'
	});
	
	var oInput1 = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	oLabel.setLabelFor(oInput);
	oMatrix.createRow(oLabel, oInput, oLabel1, oInput1);
	
	//Create a simple form within the layout
	var oLabel = new sap.ui.commons.Label({
		text : 'C/Base'
	});
	var oInput = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	//Create 3rd and 4th columns
	var oLabel1 = new sap.ui.commons.Label({
		text : 'Total Hire'
	});
	
	var oInput1 = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	oLabel.setLabelFor(oInput);
	oMatrix.createRow(oLabel, oInput, oLabel1, oInput1);
	
	//Create a simple form within the layout
	var oLabel = new sap.ui.commons.Label({
		text : ''
	});
	var oInput = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	//Create 3rd and 4th columns
	var oLabel1 = new sap.ui.commons.Label({
		text : 'Total Expense'
	});
	
	var oInput1 = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	oLabel.setLabelFor(oInput);
	oMatrix.createRow(oLabel, oInput, oLabel1, oInput1);
	
	//Create a simple form within the layout
	var oLabel = new sap.ui.commons.Label({
		text : ''
	});
	var oInput = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	//Create 3rd and 4th columns
	var oLabel1 = new sap.ui.commons.Label({
		text : 'PROFIT'
	});
	
	var oInput1 = new sap.ui.commons.TextField({
		value : '0.00',
		width : '100%'
	});
	oLabel.setLabelFor(oInput);
	oMatrix.createRow(oLabel, oInput, oLabel1, oInput1);
	
	//Add the form to the panels content area
	oPanel.addContent(oMatrix);
	oPanel.placeAt("result");
})();