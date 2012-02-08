
var TopicController = (function(){
  var _cache = null;
  return {
    show: function(json){
      if(json){
        _cache = json;
        TopicView.render(json);      
      }
      else {
        this.reload();
      }
    },
    reload: function(){
      TopicView.render(_cache);
    },
    change_mode: function(mode){
      
    },
    toggle_indicator: function(){
      TopicView.indicate();
    }
  };
})();

Topic.subscribe(TopicController.toggle_indicator,"started");
Topic.subscribe(function(json){
  TopicController.show(json); 
  //TopicController.toggle_indicator();
},"loaded");
Options.subscribe(TopicController.reload,"mode");
Blocklist.subscribe(TopicController.reload,"saved");


