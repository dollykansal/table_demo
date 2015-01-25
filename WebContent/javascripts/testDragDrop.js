jQuery(function() { 
  $.sap.require('sap.ui.thirdparty.jqueryui.jquery-ui-core');
  $.sap.require('sap.ui.thirdparty.jqueryui.jquery-ui-widget');
  $.sap.require('sap.ui.thirdparty.jqueryui.jquery-ui-mouse');
  $.sap.require('sap.ui.thirdparty.jqueryui.jquery-ui-draggable');
  $.sap.require('sap.ui.thirdparty.jqueryui.jquery-ui-sortable');
 
  var oTable = new sap.ui.table.Table({
    selectionMode : sap.ui.table.SelectionMode.None,
    editable: false
  });
  
  oTable.onAfterRendering = function() {
    sap.ui.table.Table.prototype.onAfterRendering.apply(this, arguments);

    this.$().find('tr').draggable({
      connectToSortable: ".ui-sortable",
      revert:true,
      helper:"clone",
      start: function(event,ui){
        //var selectedNode = event.srcElement.innerText;
       // console.log(selectedNode + " dragged");
      },
      stop: function(event, ui){
        console.log("drag stops");
      }
    });
  }

  oTable.addColumn(new sap.ui.table.Column({
    label: new sap.ui.commons.Label({text: "Actual"}), 
    width: '100px',
    template: new sap.ui.commons.TextView({
      text:"{actual}",
      textAlign: sap.ui.core.TextAlign.Right,
    })
  }));


  oTable.addColumn(new sap.ui.table.Column({
    label: new sap.ui.commons.Label({text: "Lower"}),
    width: '100px',
    template: new sap.ui.commons.TextView({
      text:"{ll}", 
      textAlign: sap.ui.core.TextAlign.Right})
  }));


  // create some local data
  var aData = [
    {actual: 2, ll: 1, ul: 10, test: true},
    {actual: 2, ll: -1, ul: 100, test: true},
  ];


    
    var oModel = new sap.ui.model.json.JSONModel();
    oModel.setData({modelData: aData});
    oTable.setModel(oModel);
    oTable.bindRows("/modelData");
    oTable.placeAt("testDragDrop");		

    
 });