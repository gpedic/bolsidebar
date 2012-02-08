Sidebar.storage = (function(){
  
  var checkType = function(mode){
    var storage_type = "";
    if ( !mode || mode === 'local' )
      storage_type = "localStorage";
    else if (mode === 'session')
      storage_type = "sessionStorage";
    else
      throw "storage mode " + mode + "  invalid";
      
    return storage_type;
  };
  
  return{    
    write: function(key, value, mode){
      	try {
  				var storage_type = checkType(mode);
          window[storage_type].removeItem(key);
  				window[storage_type].setItem(key, value);
          return true;
  			} catch (e) {
  				console.error("Error inside Util.Data.setItem: ", e);
          return false;
  			}
    },    
    read: function(key, mode){
			try {
        var storage_type = checkType(mode);
			  var value = window[storage_type].getItem(key);
			} catch (e) {
				console.error("Error inside Util.Data.getItem for key:" + key, e);
			}
			return value;
    },    
    erase: function(key, mode){
      try {
				var storage_type = checkType(mode);
				window[storage_type].removeItem(key);			
        return true;
			} catch (e) {
				console.error("Error inside Util.Data.removeItem: ",e);
        return false;
			}
    }    
  };
})();