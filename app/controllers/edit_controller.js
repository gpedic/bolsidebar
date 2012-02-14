/** 
 * @projectDescription  EditController.
 *
 * @version  1.0 
 */

/**
 * Controller used by EditView.
 * 
 * @classDescription Controller used by EditView.
 * @type {Object}
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
