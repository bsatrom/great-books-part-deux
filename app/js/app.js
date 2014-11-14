(function () {
    var app = {
      // Initialize Everlive SDK
      everlive: new Everlive({
          apiKey: window.app.settings.everlive.apiKey,
          scheme: window.app.settings.everlive.scheme
      })
    };
  
    var showAlert = function(message, title, callback) {
      if (navigator.notification) { 
        navigator.notification.alert(message, callback || function() {}, title, 'OK');
      } else {
        console.log(message);
      }
    }

    var showError = function(message) {
        showAlert(message, 'Error occured');
    }

    window.addEventListener('error', function(e) {
        e.preventDefault();

        analytics.Monitor().TrackExceptionMessage(e, e.message);
        
        var msg = e.message + ' from ' + e.filename + ':' + e.lineno;
        showAlert(msg, 'Error occured'); 

        return true;
    });

    window.Books = {
        data: new kendo.data.DataSource({
            transport: {
                read: {
                    url: "data/books.js",
                    type: "get",
                    dataType: "json"
                }
            },
        schema: {
            data: "books"
        }
    }),
        back: function() {
          window.app.mobileApp.navigate("#:back");
        },
        settings: function() {
        }
    };

    document.addEventListener("deviceready", function () {  
        navigator.splashscreen.hide();

        window.app.mobileApp = new kendo.mobile.Application(document.body, { layout: "main-layout" });
        analytics.Start();
        feedback.initialize(window.app.settings.feedback.apiKey);

    }, false);

    window.app.everlive = app.everlive;
}());