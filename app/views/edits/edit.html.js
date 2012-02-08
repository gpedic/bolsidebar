/** 
 * @projectDescription  EditView.
 *
 * @author   gpedic@gmail.com
 * @version  1.0 
 */

/**
 * Self executing function that creates the EditView GUI.
 * 
 * @alias initEditViewTemplate
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
					<div class="editDescriptionBar">Aktivne teme</div>\
					<ul id="editActiveList"></ul> \
					<div class="editDescriptionBar">Blokirane teme</div>\
					<ul id="editBlockedList"></ul> \
				</div>\
				<div class="optionsButtonContainer">\
					<div id="confirm_edits_button" class="optionsButton"><a href="#/edits/save"> Natrag </a></div> \
					<div style="width:5px; height:5px; float:right;"></div> \
					<!-- <div id="cancel_edits_button" class="optionsButton"><a href="#/edits/discard"> Odustani </a></div> --> \
					<div style="clear:both;"></div> \
				</div>';

	// Insert editViewContent into the editViewPanel element and append it to
	// sidebarBody
	editViewPanel.innerHTML = editViewContent;
	$("sidebarBody").appendChild(editViewPanel);

	// Add Button for EditView in sidebarFrame
	// <div id="editButton"></div>
	var editViewButton = document.createElement("span");
	editViewButton.setAttribute("id", "editButton");
  editViewButton.setAttribute("class", "headerButton");
  
	$("sidebarHeader").appendChild(editViewButton);
  
  $("editButton").addEventListener("click",function(){Router.to_path("edits");}, false);
  //$("confirm_edits_button").addEventListener("click",function(){Router.to_path("save_edits");}, false);
})();


var EditView = (function(){
  var viewName = "edit";
  var composer = function(id,name){
      return ["<li id=edit_", id,">",
      "<a href='#/toggle/", id, "'>", 
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
        topicSet[topics[idx].getId()] = topics[idx].getName();
      }
           
      for(var topicId in topicSet){    
        if(blocklist.hasOwnProperty(topicId)){
          blocked.push(composer(topicId,topicSet[topicId]));
        }
        else {
          active.push(composer(topicId,topicSet[topicId]));
        }
      }
    $("editActiveList").innerHTML = active.join("");
    $("editBlockedList").innerHTML = blocked.join("");
    },
    toggle: function(view){
      view === viewName ? $("editView").style.display = "block" :
        $("editView").style.display = "none";
    }
  };
  
})();

Status.subscribe(EditView.toggle,"change")