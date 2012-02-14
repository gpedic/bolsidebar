(function() {
	var topicViewPanel = document.createElement("div");
	topicViewPanel.setAttribute("id", "topicView");
	// topicViewPanel.style.display = "none";

	var topicViewContent = '\
			<div id="topics"> \
				<ul id="sidebarTopics">\
        </ul> \
			</div> \
			<div id="topicButtons" class="contentButtons"> \
				<a href="#/options/show/both">\
          <span title="Sve teme" class="sidebarContentButton">SP</span>\
        </a> \
				<a href="#/options/show/contrib">\
          <span title="Teme u kojima sudjelujem" class="sidebarContentButton">S</span>\
        </a> \
				<a href="#/options/show/fav">\
          <span title="Teme koje pratim" class="sidebarContentButton">P</span>\
        </a> \
        <div id="loading_anim" style="display:none;"></div>\
			</div>';
				
	topicViewPanel.innerHTML = topicViewContent;
	$("sidebarBody").appendChild(topicViewPanel);
})();

var TopicView = (function(){
  var viewName = "topic";
  var topicSet = {"both":{},"fav":{},"contrib":{}, "info":{}};
  var active = [];
  var composer = function(id,name){
    return ["<li id=topic_", id,">",
      "<a href='http://www.bug.hr/forum/topicunread/", id, ".aspx'>", 
        name, "</a></li>"].join("");
  };
  
  return {
    render: function(topics){
      active.length = 0;
      topics = TopicHelper.transform(topics);
      
      var mode = Options.getShowMode();
      var blocklist = Blocklist.get();
      console.log("blocklist ", blocklist)      
      for(var idx=0; idx < topics.length; idx++){
        if(!blocklist.hasOwnProperty(topics[idx].getId())){
          topicSet.both[topics[idx].getId()] = topics[idx].getName();      
          var type = topicSet[topics[idx].getType()];
          type[topics[idx].getId()] = topics[idx].getName();
        }
      }
      //if(!Sidebar.util.objectEmpty(topicSet.info)){
        for(var topicId in topicSet[mode]){    
          active.push(composer(topicId,topicSet[mode][topicId]));
        }
        console.log("Active ", active)
      //} else {
      //  for(var topicId in topicSet.info){
      //    active.push(composer(topicSet.info[hash]));
      //  }        
      //}

      $("sidebarTopics").innerHTML = active.join("");
    },
    toggle: function(view){
      view === viewName ? $("topicView").style.display = "block" :
        $("topicView").style.display = "none";
    },
    indicate: function(){
      var loading_anim = $("loading_anim");
      //loading_anim.style.display = "block";
      //setTimeout(function(){loading_anim.style.display = "none"},1000)
      /*loading_anim.style.display === "none" ? loading_anim.style.display = "block" :
      loading_anim.style.display = "none";*/
    }
  }
})();

Status.subscribe(TopicView.toggle,"change");

