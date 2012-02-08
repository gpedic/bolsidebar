
var ApplicationController = (function(){
  return{
	  minimize : function (minimized){
		  AppView.toggle(minimized);	
	  }
  }
})();

Options.subscribe(ApplicationController.minimize,"minimize");

