(function () {
    var app = {
      // Initialize Everlive SDK
      everlive: new Everlive({
          apiKey: window.app.settings.everlive.apiKey,
          scheme: window.app.settings.everlive.scheme
      })
    };
  
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

    }, false);

    window.app.everlive = app.everlive;
}());