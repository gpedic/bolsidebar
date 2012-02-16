
//Create CSS used by the BugSidebar
var generateCss = (function(){
	Sidebar.css.inject('\
  /* Sidebar Header */\
  \
	#sidebarHeader { \
    padding: 7px 10px 5px;\
    height:18px; \
		background: #ffdb1a; /* Old browsers */ \
		background: -moz-linear-gradient(top, #ffdb1a 0%, #e3a64a 100%); /* FF3.6+ */ \
		background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#ffdb1a), color-stop(100%,#e3a64a)); /* Chrome,Safari4+ */ \
		background: -webkit-linear-gradient(top, #ffdb1a 0%,#e3a64a 100%); /* Chrome10+,Safari5.1+ */ \
		background: -o-linear-gradient(top, #ffdb1a 0%,#e3a64a 100%); /* Opera 11.10+ */ \
		background: linear-gradient(top, #ffdb1a 0%,#e3a64a 100%); /* W3C */ \
		} \
  #sidebarTitle { \
    font-size: 14px; \
    font-weight: bold; \
    color:white; \
    cursor: pointer; \
  }\
  .headerButton { \
    height:15px; \
    width:15px; \
    float: right; \
    cursor: pointer; \
    }\
	#editButton { \
    margin-right:3px; \
    background-image:url(data:image/png;base64,'+opt_ico+'); \
  }\
	#editButton:hover { \
    background-image:url(data:image/png;base64,'+opt_ico_hover+'); \
  }\
	#minimizeButton { \
    background-image:url(data:image/png;base64,'+min_ico+'); \
  }\
	#minimizeButton:hover { \
    background-image:url(data:image/png;base64,'+min_ico_hover+'); \
  }\
  #loading_anim { \
    margin-right:4px; \
    height:15px; \
    width:15px; \
    float: right; \
    background-image:url(data:image/gif;base64,'+loading_ico+'); \
  }\
  \
  /* Sidebar Body */\
  \
	#sidebarBody { \
    padding:0px; \
    clear:both; \
  } \
	#sidebarBody .optionsButtonContainer { \
    padding:4px; \
  } \
	#sidebarBody .optionsButton a { \
    font-weight:bold; \
    text-decoration: none; \
    color:#408DCF; \
    cursor:pointer; \
    padding: 0 6px; \
    margin-right: 5px; \
    float:right; \
    border:#C0C0C0 1px solid; \
    width:54px; \
    text-align:center; \
  } \
  #sidebarBody .optionsButton a:hover {\
    border-color: #888; \
    color: #58595A; \
  }\
	#sidebarBody ul li a:hover {color: #669FCC} \
	#sidebarRefresh {height: 17px; width: 24px; float: right;} \
	\
	.sidebarContentButton { \
	width: 20px; float:left; margin-left: 3px; margin-top: 2px; border: 2px solid #DEDDD6; text-align:center; \
	border-width: 2px 2px 0px 2px; font-weight: bold; font-size: 11px; color:#A09F9D; cursor:pointer; \
	-moz-border-radius: 4px 4px 0px 0px; border-radius: 4px 4px 0px 0px; \
	} \
	.sidebarContentButton:hover { border-color:#669FCC; color:#669FCC; } \
  .sidebarContentButton.active { border-color:#E3A64A; color:#E3A64A; } \
  .sidebarContentButton.active:hover { border-color:#669FCC; color:#669FCC; } \
	#topicView #topics {padding:5px;} \
  #topicButtons { height:17px; margin-top:2px; }\
	#topicButtons .selected{ border-color:#fcd61a; color:#FCD61A; } \
	#topicButtons .selected:hover { border-color:#669FCC; color:#669FCC; } \
  #topicButtons a { text-decoration:none; }\
	#editView #editTopics { clear:both; cursor:default; padding:5px;} \
	#editView #editTopics > ul{ }\
	#editView #editMenu { background-color:#919791; color:white; } \
	#editView .editNavButton { \
    float:left; \
    text-align:center; \
    background-color:#919791; \
    height:20px;width:92px; \
    font-weight:bold; \
    text-shadow: 0px -1px 0px #e5e5ee; \
  } \
	#editMenu .editNavButton.buttonSelectedBlue { background-color:#EEEEE7; color:#919791; }\
	#editMenu .editNavButton a { margin-top:10px; } \
	#editMenu #editMenuBlock { border-right: 2px; } \
	#editMenu #editMenuPaint {} \
	#editView .editSeperator { \
    color: #EEEEE7; \
    margin-top:2px; \
    font-weight:bold; \
    text-align:center; \
    background-color:#669FCC; \
  } \
	');
})();

//	#optionsView {} \
//	#optionsView ul {padding:5px;} \
//	#optionsView li {color:#919791; font-size:12px; font-weight:normal;} \
//	#optionsView #text_refresh {margin-left:4px;width:30px; text-align:right;}\
//	#optionsView .darkBold {color:#58595A; font-weight:bold;} \
//	#optionsView .lightBold {color:#919791; font-weight:bold;} \
//	#optionsView .blueBold {color:#669FCC; font-weight:bold;} \
//	\
//	#optionsButton {margin-right:3px; height:15px; width:15px; background-image:url(data:image/png;base64,'+opt_ico+');}\
//	#optionsButton:hover {background-image:url(data:image/png;base64,'+opt_ico_hover+');}\
