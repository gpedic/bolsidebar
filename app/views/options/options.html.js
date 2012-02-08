(function() {

	var optionViewPanel = document.createElement("div");
	optionViewPanel.setAttribute("id", "optionsView");
	optionViewPanel.style.display = "none";

	var optionsViewContent = '\
		<ul id="optionsList"> \
			<li>\
				<span class="darkBold">Prika&#382;i nove poruke unutar:</span>\
			</li>\
			<li>\
				<input type="radio" id="radio_contrib" name="show" value="contrib" /> \
				<label id="radio_contrib">Teme u kojima sudjelujem</label> \
			</li>\
			<li>\
				<input type="radio" id="radio_fav" name="show" value="fav" /> \
				<label id="radio_fav">Teme koje pratim</label> \
			</li>\
			<li>\
				<input type="radio" id="radio_both" name="show" value="both" /> \
				<label id="radio_both">Oboje</label>\
			</li>\
			<li>\
				<label id="text_refresh" class="darkBold">Osvje&#382;i svakih:</label>\
				<input type="text" class="blueBold" id="text_refresh" name="refreshTime"/> \
				<span style="margin-left:1px;">s</span>\
			</li>\
		</ul> \
		<div class="optionsButtonContainer">\
			<div id="confirm_options_button" class="optionsButton"><a href="#/options/save"> Ok </a></div> \
      <div style="width:5px; height:5px; float:right;"></div> \
  		<div id="discard_options_button" class="optionsButton"><a href="#/topics"> Odustani </a></div> \
			<div style="clear:both;"></div> \
		</div> ';

	optionViewPanel.innerHTML = optionsViewContent;
	$("sidebarBody").appendChild(optionViewPanel);
	
	var optionsViewButton = document.createElement("div");
	optionsViewButton.setAttribute("id", "toggle_optionsView");
	$("sidebarHeader").appendChild(optionsViewButton);
  //$("optionsList").addEventListener("click",OptionsController.execute, false);
	
})();

var OptionsView = (function(){  
  return {
    render: function(options){
      switch(options.showMode){
        case 'both':
  			  $("radio_both").checked = true;
  			  break;
  		  case 'contrib':
  			  $("radio_contrib").checked = true;
  			  break;
  		  case 'fav':
  			  $("radio_fav").checked = true;
  			  break;
  		};
		  $("text_refresh").value = options.refreshRate;
    }
  };
})();


//			<div style="width:5px; height:5px; float:right;"></div> \
//			<div id="discard_options_button" class="optionsButton"> Odustani </div> \
