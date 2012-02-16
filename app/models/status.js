
var Status = (function(){
  var viewChanged = Sidebar.event();
  var view = "topic";
  var minimized = Sidebar.event();
  return {
    setView: function(newView){
      view = newView;
      viewChanged.notify(view);
    },
    minimize: function(){
    },
    subscribe: function(subscriber,event){
      if(event === "change")
        viewChanged.attach(subscriber);
    }
  };
})();