
Sidebar.event = function () {
    var listeners = [];
    return {
      attach: function (listener) {
        listeners.push(listener);
      },
      notify: function (args) {
        for (var i = 0; i < listeners.length; i++) {
          listeners[i](args);
        }
      }
    };
};
