/**
 * Topic class
 */
var Topic = function(newId,newName,newType){
  //set topic properties
  var name = newName || "";
  var type = newType || "";
  var id = newId  || "";

  return {
    getId: function(){ return id; },
    getName: function(){ return name; },
    getType: function(){ return type; },
    toObj: function(){
      return {
          "id": id,
          "name": name,
          "type": type
      };
    },
    set: function(newId,newName,newType){
        id = newId || id;
        name = newName || name;
        type = newType || type;
    },
    save: function(){
      var topics = JSON.parse(Sidebar.storage.read("topics")) || {};
      topics[id] = this.toObj();      
      return Sidebar.storage.write("topics",JSON.stringify(topics));
    },    
    match: function(topic){      
      if(topic){
        var that = this.toObj;
        var match = true;
        for(var prop in topic){
          match = that.hasOwnProperty(prop) ? that[prop] === topic[prop] : false;
          if(!match) return match;           
        }
        return true;
      }
      return false;
    },
    equals: function(topic){      
      return ( topic && ( name === topic.name && type === topic.type ) ) ? true : false;
    }
  }
};

/**
 * Topic class methods and properties
 */
Topic.events = {
  loaded: Sidebar.event(),
  started: Sidebar.event()
};
Topic.subscribe = function(subscriber,event){
  if(Topic.events.hasOwnProperty(event))
    Topic.events[event].attach(subscriber);
};
Topic.pull = function(url){
	try {
		  Sidebar.request.async('GET', Sidebar.config.BUG_SERVER_SCRIPT_URL, Topic.events.loaded.notify);
		} catch (e) {
			console.error("Request failed: ", e);
		} 
    Topic.events.started.notify();    
};
