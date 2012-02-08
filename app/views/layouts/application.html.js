(function(){
	var rightMenu = $("ctl00_oRightMenu");
	var sidebarFrame = document.createElement("div");
	sidebarFrame.setAttribute("class","listbox");
	sidebarFrame.setAttribute("id","sidebarFrame");
	//rightMenu.children[1].appendChild(sidebarFrame,rightMenu.children[1].firstChild);
	rightMenu.insertBefore(sidebarFrame,rightMenu.childNodes[4]);
	$("sidebarFrame").innerHTML = '\
	  <div id="sidebarHeader" class="sidebar"> \
		  <span><a id="sidebarTitle">Nove poruke </a></span> \
			<a href="#/minimize"><span id="minimizeButton" class="headerButton"></span></a> \
		</div> \
		<div id="sidebarBody" class="content alt sidebarcontent"> \
		</div>';
})();

//			<div id="toggle_optionsView"></div> \

AppView = (function(){
  var minimize = {
    toggle: function(state){
      $("sidebarBody").style.display = state ? "none" : "block";
    },
    set: function(state){
      $("sidebarBody").style.display = state ? "block" : "none";
    }
  };
  minimize.toggle(Options.getMinimized());
  return {
    toggle: function(state){
      minimize.toggle(state);
    }
  };
})();

//			<img src="data:image/png;base64,'+arrow_ico+'" id="rf_indicator" style="display:none;"/> \