Sidebar.request = (function(){
  var createXhrObject = function() {
			if (xhrObject = new XMLHttpRequest())
				return xhrObject;
			else
				throw new Error('AjaxHandler: Could not create an XHR object.');
		};
    
  return {
    async: function(method, url, callback, postVars){
      var xhr = createXhrObject();
      xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4)
				  return;
          
			  (xhr.status === 200) ? callback(xhr.responseText,
						xhr.responseXML, "success") : callback(xhr.status,
						"failure");
			};
			xhr.open(method, url, true);
			if (method !== 'POST')
				postVars = null;
			xhr.send(postVars);
    }
  }
})();