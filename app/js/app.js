(function () {
    var app;

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
          app.navigate("#:back");
        },
        settings: function() {
        }
    };

    document.addEventListener("deviceready", function () {  
        navigator.splashscreen.hide();

        app = new kendo.mobile.Application(document.body, { layout: "main-layout" });
    }, false);

    window.app = app;
}());