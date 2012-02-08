Sidebar.scheduler = function(interval, target, init){  
    //private
    var checkInterval = function(val){
      if(typeof interval !== "number"){
        throw new TypeError("Scheduler interval must be a number");
      }
      else if(interval < 1){
        throw new Error("Scheduler interval must be greater then 0");
      }
      return val;
    };
    var checkTarget = function(target){
      if(typeof target !== "function"){
        throw new Error("Scheduler target must be a function");
      }
      return target;
    }
    
  	var intval = checkInterval(interval);
		var target = checkTarget(target);
    var active = false;
    var instance = null;
    
    // init target now?
    if(init === true){
      target();
    }
    
    //public
    return {
      start: function(){
        try {
          instance = window.setInterval(target,intval * 1000);
          active = true;
        } catch (e) {
					console.error("Cannot start interval: ",e);
				}
      },
      stop: function(){
        try {
					window.clearInterval(instance);
          active = false;
				} catch (e) {
					console.error("Cannot stop interval: ", e);
				}
      },
      setInterval: function(val){
        intval = checkInterval(val);
        this.stop();
			  this.start();
      },
      isActive: function(){
        return active;
      }
    };
}
  
