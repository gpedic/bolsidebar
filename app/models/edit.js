
var TopicsSettingsList = function(label){
  var load = function(label){ 
    return JSON.parse(Sidebar.storage.read(label)) || {}; 
  }
  var settingsLabel = label;  
  var settings = load(label);
  var unsavedChanges = false;
  var changed = Sidebar.event();
  var saved = Sidebar.event();
  return {       
    add: function(key,value){
      //settings[topic.getId()] = topic.getName();
      settings[key] = value;
      unsavedChanges = true;
      changed.notify(settings);
    },
    remove: function(key){
      if(this.exists(key)){
         delete settings[key];
         unsavedChanges = true;
         changed.notify(settings);
      }              
    },
    exists: function(key){
      return settings.hasOwnProperty(key);
    },
    toggle: function(key,value){
      if(this.exists(key)){
        this.remove(key);
      }
      else if(typeof key === "string"){
        this.add(key,value);
      }
    },
    get: function(){
      return settings;
    },
    subscribe: function(subscriber,event){
      if(event === "change")
        changed.attach(subscriber);
      else
        saved.attach(subscriber);
    },
    save: function(){
      var status = Sidebar.storage.write(settingsLabel,JSON.stringify(settings));
      if(status){
        unsavedChanges = false;
        saved.notify(settings);
      }
      else{
        console.error("Cannot save " + label + ", resetting object");        
      }
      return status;
    },
    reload: function(){
      settings = load(settingsLabel);
      changed.notify(settings);
    }
  };
}

var Blocklist = new TopicsSettingsList("blocklist");
var Colorlist = new TopicsSettingsList("colorlist");
