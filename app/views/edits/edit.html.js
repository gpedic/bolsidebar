/** 
 * @projectDescription  EditView.
 *
 * @version  1.0 
 */

(function() {

	var editViewPanel = document.createElement("div");
	editViewPanel.setAttribute("id", "editView");
	editViewPanel.style.display = "none";

	var editViewContent = '\
				<div id="editMenu" style="display:none;">\
					<div id="editMenuBlock" class="editNavButton buttonSelectedBlue"><a>Block</a></div>\
					<div id="editMenuPaint" class="editNavButton"><a>Paint</a></div>\
					<div style="clear:both;"> </div> \
				</div> \
				<div id="editTopics"> \
					<div class="editSeperator">Aktivne teme</div>\
					<ul id="editActiveList"></ul> \
					<div class="editSeperator">Blokirane teme</div>\
					<ul id="editBlockedList"></ul> \
				</div>\
				<div class="optionsButtonContainer">\
					<!--<div id="cancel_edits_button" class="optionsButton"><a href="#/edits/discard"> Odustani </a></div>--> \
					<!--<div style="width:5px; height:5px; float:right;"></div>--> \
					<div id="confirm_edits_button" class="optionsButton"><a href="#/edits/save"> Prihvati </a></div> \
					<div style="clear:both;"></div> \
				</div>';

	editViewPanel.innerHTML = editViewContent;
	$("sidebarBody").appendChild(editViewPanel);

})();


var EditView = (function(){
  var viewName = "edit";
  var composer = function(id,name){
      return ["<li id=edit_", id,">",
      "<a href='#/toggle/", id, "/",Sidebar.util.encode(name),"'>", 
        name, "</a></li>"].join("");
  };
  
  return {
    render: function(topics){
      topics = TopicHelper.transform(topics);
      var blocklist = Blocklist.get();
      var blocked = [];
      var active = [];
      var topicSet = {};
      
      for(var idx=0; idx < topics.length; idx++){
        topicSet[topics[idx].id()] = topics[idx].name();
      }
      
      for(var id in blocklist){
         blocked.push(composer(id,Sidebar.util.decode(blocklist[id])));
      }
             
      for(var topicId in topicSet){    
        if(!blocklist.hasOwnProperty(topicId)){
          active.push(composer(topicId,topicSet[topicId]));
        }
      }
    $("editActiveList").innerHTML = active.join("");
    $("editBlockedList").innerHTML = blocked.join("");
    
    if(Sidebar.ENV === "test" || Sidebar.ENV === "development")
        return {"input": topics, "processed": topicSet, "rendered": {"active":active , "blocked": blocked}};
    },
    toggle: function(view){
      view === viewName ? $("editView").style.display = "block" :
        $("editView").style.display = "none";
    }
  };
  
})();

Status.subscribe(EditView.toggle,"change")