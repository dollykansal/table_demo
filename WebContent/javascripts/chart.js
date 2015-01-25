// final chart for cargo - status
(function(){
        	FusionCharts.ready(function(){
        		$.getJSON('data.json',function(data){
        			 var weeklyStatusChart = new FusionCharts(data)
              	 	 weeklyStatusChart.render();
        		});
        	});
})();