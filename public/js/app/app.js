'use strict';

var App = {
  events: {},
  init: function() {
    App.Util.init();
  },
  isMobile: function() {
    return window.innerWidth < 900;
  },

  /**
   * registerDocumentEventHandler adds a function to the queue of functions that get invoked on the document event
   *
   * @oaram <String> type
   * @oaram <Function> handler
   *
   */
  registerDocumentEventHandler: function(type, handler) {
    if (typeof handler === 'function' && typeof type === 'string') {
      //if this is the first time this event type is registered, add a new one
      if (this.events[type] === undefined) {
          this.registerNewDocumentEvent(type);
      }
      this.events[type].queue.push(handler);
    }
  },
  registerNewDocumentEvent: function(type) {
    var self = this;

    self.events[type] = {};
    self.events[type].queue = [];
    $(document).on(type, function(e) {
      var queue = self.events[type].queue;
      for (var i = 0; i < queue.length; i++) {
        if (typeof queue[i] === 'function') {
          queue[i](e);
        }
      }
    });
  }

};

// Util decides which of the controllers are ran on each view
App.Util = {
  init: function() {
    var elements = $('[data-controller]');
    var controllerName;
    var action;
    var element;
    for (var i = 0; i < elements.length; i++) {
      element = elements[i];
      controllerName = element.getAttribute('data-controller');
      action = element.getAttribute('data-action');
  
      this.exec(controllerName, action);
    }
  },
  exec: function(controllerName, action) {
    action = action ? action : 'init';
    if (controllerName !== '' && !!App[controllerName].controller && typeof App[controllerName].controller[action] === 'function') {
      App[controllerName].controller[action]();
    }
    
    console.log(controllerName, action);
  }
};

App.Helpers = {
  showAlert: function(type, message) {
    var selector = '.alert-message .alert-' + type;
    if (message) {
      $(selector).innerHTML(message);
    }
    $(selector).css('display', 'block');
    setTimeout(function () {
      $(selector).css('display', 'none');
    }, 10000);
  }
};
