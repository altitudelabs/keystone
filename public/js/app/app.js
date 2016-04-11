'use strict';

var App = {
  events: {},
  init: function() {
    App.Util.init();
    $('.alert-message').on('click', function() {
      $(this).hide();
    });
    if (location.pathname !== '/') {
      $('nav a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
    }
    $('.copyright').prepend('© ' + new Date().getFullYear() + ' Keystone Prep');
  },
  isTablet: function() {
    return window.innerWidth < 900;
  },
  isMobile: function() {
    return window.innerWidth < 600;
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

  }
};

App.Helpers = {
  showAlert: function(type, message) {
    var selector = '.alert-message .alert-' + type;
    if (message) {
      $(selector).innerHTML(message);
    }
    $('.alert-message').css('display', 'block');
    $(selector).css('display', 'block');
    setTimeout(function () {
      $('.alert-message').css('display', 'none');

      $(selector).css('display', 'none');
    }, 10000);
  }
};
