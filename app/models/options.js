
var Options = (function(){
  var loadOptions = function(){
    return {
      showMode: JSON.parse(Sidebar.storage.read("showMode")) || Sidebar.config.VIEW_MODE,
      refreshRate: JSON.parse(Sidebar.storage.read("refreshRate")) || Sidebar.config.REFRESH_INTERVAL,
      minimized: JSON.parse(Sidebar.storage.read("minimized")) || false
    }
  };
  var opt = loadOptions();
  var events = {
    minimize: Sidebar.event(),
    refresh: Sidebar.event(),
    mode: Sidebar.event()
  };
  return {
    setShowMode: function(mode){
      if(typeof mode === "string" && mode === "both" || mode === "contrib" || mode === "fav"){
        if(Sidebar.storage.write("showMode",JSON.stringify(mode))){
          opt.showMode = mode;
          events.mode.notify(opt.showMode);
          return true;
        }          
      }
      return false;
    },
    setRefreshRate: function(rate){
      if(!isNaN(rate)){
        if(Sidebar.storage.write("refreshRate",JSON.stringify(parseInt(rate)))){
          opt.refreshRate = rate;
          events.refresh.notify(opt.refreshRate);
          return true;
        }          
      }
      return false;      
    },
    toggleMinimize: function(){
      opt.minimized = !opt.minimized;
      
      if(Sidebar.storage.write("minimized",JSON.stringify(opt.minimized))){
        console.log("notify of :",opt.minimized)
        events.minimize.notify(opt.minimized);
      }
    },
    getShowMode: function(){
      return opt.showMode;
    },
    getRefreshRate: function(){
      return opt.refreshRate;
    },
    getMinimized: function(){
      return opt.minimized;
    },
    get: function(){
      return opt;
    },
    reload: function(){
      opt = loadOptions();
    },
    subscribe: function(subscriber,event){
      if(events.hasOwnProperty(event))
        events[event].attach(subscriber);
    }
  };
})();