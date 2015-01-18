(function(){
        	FusionCharts.ready(function(){
        		$.getJSON('data_gantt.json',function(data_gantt){
        			 var weeklyStatusChart1 = new FusionCharts(data_gantt)
              	 	 weeklyStatusChart1.render();
        		});
        	});
})();