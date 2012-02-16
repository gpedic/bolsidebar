Sidebar.util = {};
Sidebar.util.decode = function( str ) { 
  return decodeURIComponent((str || '').replace(/\+/g, ' ')); 
};
Sidebar.util.encode = encodeURIComponent;
Sidebar.util.objectEmpty = function(obj){
  for(var prop in obj) {
      if(obj.hasOwnProperty(prop))
          return false;
  }
  return true;
};
Sidebar.util.distinct = function(arr){
  if(arr instanceof Array){
    var distinct = {};
    for(idx = 0, arr_length = arr.length; idx < arr_length; idx++ ){
      distinct[arr[idx]] = null;
    }
    arr.length = 0;
    for(var val in distinct){
      arr.push(val);
    }
    return arr;
  }
  return [];
};
Sidebar.util.$ = function (elementId) { 
  return document.getElementById(elementId); 
};

Sidebar.util.hasClass = function (ele,cls) {
	return ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
};
Sidebar.util.addClass = function (ele,cls) {
	if (!Sidebar.util.hasClass(ele,cls)) ele.className += " "+cls;
};
Sidebar.util.removeClass = function (ele,cls) {
	if (Sidebar.util.hasClass(ele,cls)) {
		var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
		ele.className=ele.className.replace(reg,' ');
	}
};