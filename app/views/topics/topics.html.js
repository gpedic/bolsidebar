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
          <span title="Sve teme" id="topic_both" class="sidebarContentButton">SP</span>\
        </a> \
				<a href="#/options/show/contrib">\
          <span title="Teme u kojima sudjelujem" id="topic_contrib" class="sidebarContentButton">S</span>\
        </a> \
				<a href="#/options/show/fav">\
          <span title="Teme koje pratim" id="topic_fav" class="sidebarContentButton">P</span>\
        </a> \
        <div id="loading_anim" style="display:none;"></div>\
			</div>';
				
	topicViewPanel.innerHTML = topicViewContent;
	$("sidebarBody").appendChild(topicViewPanel);
})();

var TopicView = (function(){
  var viewName = "topic";
  var mode = null;
  var topicSet = null;//{"both":[],"fav":[],"contrib":[], "info":[]};
  var active = [];
  var topics = null;
  var cache = null;
  var composer = function(topic){
    return ["<li><a href='/forum/topicunread/", topic.id(), ".aspx'>", topic.name(), "</a></li>"].join("");
        
  };
  //http://www.bug.hr
  return {
    render: function(topicsJson){
      active.length = 0;
      if(topicsJson !== cache){
        
        cache = topicsJson;
        topics = TopicHelper.transform(topicsJson);
        topicSet = {
          "both":[],
          "fav":[],
          "contrib":[] 
        };
        
        for(var idx=0; idx < topics.length; idx++){
            topicSet[topics[idx].type()].push(topics[idx].id());
        }
        topicSet["both"] = Sidebar.util.distinct(topicSet["fav"].concat(topicSet["contrib"])).reverse();
      }

      if(mode !== Options.getShowMode()){
        mode = Options.getShowMode();
        this.toggleButtons();
      } 
      var blocklist = Blocklist.get();
        
      for(var idx = 0, ts_length = topicSet[mode].length; idx < ts_length; idx++)
        for(var idy = 0, t_length = topics.length; idy < t_length; idy++)
          if( topics[idy].id() === topicSet[mode][idx] && !blocklist.hasOwnProperty(topics[idy].id()) )
            active.push(composer(topics[idy]));
      
      if(active.length === 0)
        active = ["<li style='text-align:center;'><a href='#/sidebar'>Trenutno nema aktivnih tema</a></li>"];
      
        
      $("sidebarTopics").innerHTML = active.join("");
      
      if(Sidebar.ENV === "test" || Sidebar.ENV === "development")
          return {"input": topics, "processed": topicSet, "rendered": active};
    },
    toggle: function(view){
      view === viewName ? $("topicView").style.display = "block" :
        $("topicView").style.display = "none";
    },
    toggleButtons: function(){
      var buttons = document.getElementsByClassName("sidebarContentButton");
      for(var idx = 0; idx < buttons.length; idx++ ){
        if(buttons[idx].id.indexOf(mode) !== -1){
          Sidebar.util.addClass(buttons[idx],"active");
        }
        else {
          Sidebar.util.removeClass(buttons[idx],"active");   
        }             
      }
    },
    indicate: function(){
      var loading_anim = $("loading_anim");
      loading_anim.style.display = "block";
      setTimeout(function(){loading_anim.style.display = "none"},1200);
    }
  }
})();

Status.subscribe(TopicView.toggle,"change");

