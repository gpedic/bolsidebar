var routes = {
  "default": { route:"#/", run: TopicController.show },
  "topics": { route:"#/topics", run: function(){Status.setView("topic");} },
  "edits": { route: "#/edits", run: function(){Status.setView("edit");} },
  "options": { route: "#/options", run: OptionsController.show },
  "save_options": { route: "#/options/save", run: OptionsController.save },
  "discard_options": { route: "#/options/discard", run: TopicController.show },
  "save_edits": { route: "#/edits/save", run: EditController.save_edits },
  "discard_edits": { route: "#/edits/discard", run: EditController.discard_edits },
  "new_refresh_interval": { route: "#/options/refresh/:interval", run: OptionsController.update },
  "new_show_mode": { route: "#/options/show/:mode", run: OptionsController.update },
  "block_toggle": { route: "#/toggle/:id/:name", run: EditController.toggle_block },
  "minimize_toggle": { route: "#/minimize", run: OptionsController.toggle_minimize }
};

var Router = (function(routes){
  
  var PATH_REPLACER = "([^\/]+)";
  var PATH_NAME_MATCHER = /:([\w\d]+)/g;  
  var QUERY_STRING_MATCHER = /\?([^#]*)?$/;
  PATH_NAME_MATCHER.lastIndex = 0;
  //process routes
  for(var path in routes){
    //create new Regex that mathes the route
    routes[path].regex = new RegExp(routes[path].route.replace(PATH_NAME_MATCHER, PATH_REPLACER) + "$");

    //add parameter names to params array
    routes[path].params = [];
    while ((path_match = PATH_NAME_MATCHER.exec(routes[path].route)) !== null) {
      routes[path].params.push(path_match[1]);
    }
    
  }  
  
  //store routes as private
  var routes = routes;
  
  var clearRoute = function(){
    window.location.hash = "/sidebar";
  };
  
  //event callback
  var route = function(){
    var hash = window.location.hash;
    console.log("Routing to: ",hash);
    //check hash value to avoid infinite loop
    if(hash !== "#/sidebar"){
      var match = null;
      //routes are indexed by path
      for(path in routes){
        if(match = hash.match(routes[path].regex)){
          console.log("Found match: ",match,"\nobject: ",routes[path]);
          var params = {};
          for(var idx=1; idx < match.length; idx++){
            params[routes[path].params[idx-1]] = Sidebar.util.decode(match[idx]);
          }
          console.log("Sending params: ",params, "\n to: ",path);
          routes[path].run(params);
          break;
        }       
      }
      clearRoute();
    }
  };
  
  window.addEventListener("hashchange", route, false);
 
  return {
    clear: clearRoute,
    to_path: function(route,params){
      routes[route].run(params);
      clearRoute();
    }    
  };
  
})(routes);
