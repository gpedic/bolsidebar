
var OptionsController = (function(){	
	return {
    toggle_minimize : function (){
		  Options.toggleMinimize();	
	  },
    update: function(params){
      if(params){
        if(params.hasOwnProperty("mode")){
          Options.setShowMode(params.mode);
        }
        if(params.hasOwnProperty("interval")){
          Options.setRefreshRate(params.interval);
        }            
      }      
    }
  };
})();
