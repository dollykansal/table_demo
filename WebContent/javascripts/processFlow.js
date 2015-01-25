(function(){
	var oDataLanesOnly = {
		    lanes: [{
		      id: "id1", 
		     // iconSrc: "image/image_green", 
		      text: "Vessel Selection", state: [{
		        state: sap.suite.ui.commons.ProcessFlowNodeState.Positive, value: 70
		      }, {
		        state: sap.suite.ui.commons.ProcessFlowNodeState.Negative, value: 30
		      }, {
		        state: sap.suite.ui.commons.ProcessFlowNodeState.Neutral, value: 0
		      }, {
		        state: sap.suite.ui.commons.ProcessFlowNodeState.Planned, value: 0
		      }], position: 0
		    }, // first lane element
		    {
		      id: "id0", 
		     // iconSrc: "sap-icon://order-status", 
		      text: "Demand", state: [{
		        state: sap.suite.ui.commons.ProcessFlowNodeState.Positive, value: 20
		      }, {
		        state: sap.suite.ui.commons.ProcessFlowNodeState.Negative, value: 30
		      }, {
		        state: sap.suite.ui.commons.ProcessFlowNodeState.Neutral, value: 30
		      }, {
		        state: sap.suite.ui.commons.ProcessFlowNodeState.Planned, value: 20
		      }], position: 1
		    }, // first lane element
		    {
		      id: "id3",
		      //iconSrc: "sap-icon://order-status", 
		      text: "Cargo & Port Rotation", state: [{
		        state: sap.suite.ui.commons.ProcessFlowNodeState.Positive, value: 20
		      }, {
		        state: sap.suite.ui.commons.ProcessFlowNodeState.Negative, value: 30
		      }, {
		        state: sap.suite.ui.commons.ProcessFlowNodeState.Neutral, value: 30
		      }, {
		        state: sap.suite.ui.commons.ProcessFlowNodeState.Planned, value: 20
		      }], position: 2
		    }, // fourth lane element
		    {
		      id: "id2", iconSrc: "sap-icon://order-status", text: "Estimate", state: [{
		        state: sap.suite.ui.commons.ProcessFlowNodeState.Positive, value: 40
		      }, {
		        state: sap.suite.ui.commons.ProcessFlowNodeState.Negative, value: 30
		      }, {
		        state: sap.suite.ui.commons.ProcessFlowNodeState.Neutral, value: 30
		      }, {
		        state: sap.suite.ui.commons.ProcessFlowNodeState.Planned, value: 10
		      }], position: 3
		    } // third lane element
		    ]
		  // end of lane array
		  }; // end of data for control

		  var oJModelLanesOnly = new sap.ui.model.json.JSONModel(oDataLanesOnly);
		  var oProcessFlowLanesOnly = new sap.suite.ui.commons.ProcessFlow("pLanesOnly", {
		    zoomLevel: sap.suite.ui.commons.ProcessFlowZoomLevel.One,
		    nodes: {
		      path: "/nodes",
		      template: new sap.suite.ui.commons.ProcessFlowNode({
		        nodeId: "{id}", laneId: "{laneId}", title: "{title}", isTitleClickable: true, children: "{children}",
		        iconSrc: "sap-icon://warning2", state: "{state}", titleAbbreviation: "{titleabbr}", stateText: "{state}", tag: {
		          tagCheck: "tagCheck"
		        }, texts: "{texts}"
		      })
		    }, // end of node
		    lanes: {
		      path: "/lanes", template: new sap.suite.ui.commons.ProcessFlowLaneHeader({
		        laneId: "{id}", iconSrc: "{iconSrc}", text: "{text}", state: "{state}", position: "{position}"
		      })
		    }, // end of lane
		    scrollable: false,
		    wheelZoomable: false
		  });

		  oProcessFlowLanesOnly.setModel(oJModelLanesOnly);
	/*	  oProcessFlowLanesOnly.attachHeaderPress(function(oEvent) {
		    nodeClickHeaderPress(oEvent);
		  });*/
		  oProcessFlowLanesOnly.placeAt("processFlow");
		  sap.ui.getCore().applyChanges();
})();