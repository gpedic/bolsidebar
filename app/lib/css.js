Sidebar.css = (function(){
  return {
    inject: function(css,id){
      	var sheet = document.createElement('style');
	      sheet.id = id || "bugSidebarStyles";
	      sheet.innerHTML = css;
	      document.getElementsByTagName("head")[0].appendChild(sheet);
    }
  };
})();