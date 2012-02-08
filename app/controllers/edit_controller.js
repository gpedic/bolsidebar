/** 
 * @projectDescription  EditController.
 *
 * @author   gpedic@gmail.com
 * @version  1.0 
 */

/**
 * Controller used by EditView.
 * 
 * @classDescription Controller used by EditView.
 * @type {Object}
 * @constructor
 */

var EditController = (function(){
  var _cache = null;
  return {  
    show: function(topics){
      if(topics){
        _cache = topics;
        EditView.render(topics);
      }
      else {
        this.reload();
      }
    },
    reload: function(){
      EditView.render(_cache); 
    },
    toggle_block: function(params){
      if(params && params.hasOwnProperty("id")){
        if(params.id !== "000" && params.id !== "111")
          Blocklist.toggle(params.id,"");
      }
    },
    save_edits: function(){
      Blocklist.save();
      Router.to_path("topics");
    },
    discard_edits: function(){
      Blocklist.reload();
      Router.to_path("topics");
    }
  };
})();

Topic.subscribe(EditController.show,"loaded");
Blocklist.subscribe(EditController.reload,"change");

/*
    execute : function(event) {
      var target = event.target;
  		var idAttr = target.getAttribute("id"); 
      if(!isNaN(idAttr) && idAttr != "000" && idAttr != "111"){
        
      }
      else if (target.nodeName == "li"){
        Blocklist.toggle(idAttr);
      }
      else if (idAttr == "confirm_edits_button"){
        Blocklist.save();
        Route.to("topics");
      }
      else if (idAttr == "cancel_edits_button"){
        Blocklist.reload();
        Route.to("topics");
      }
    } 
*/