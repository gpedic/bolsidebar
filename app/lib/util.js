Sidebar.util = {};
Sidebar.util.decode = function( str ) { return decodeURIComponent((str || '').replace(/\+/g, ' ')); };
Sidebar.util.encode = encodeURIComponent;
Sidebar.util.objectEmpty = function(obj){
  for(var prop in obj) {
      if(obj.hasOwnProperty(prop))
          return false;
  }
  return true;
};
Sidebar.util.$ = function (elementId) { return document.getElementById(elementId); };