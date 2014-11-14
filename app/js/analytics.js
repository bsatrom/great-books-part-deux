(function (win) {

    var analytics = win.analytics = win.analytics || {};
    var dummyMonitor = {
      TrackExceptionMessage: function(e) {
        console.log(e); 
      },
      TrackFeature: function(e) {
        console.log(e);        
      }
    };
    
    analytics.Start = function() {
        
        // Handy shortcuts to the analytics api
        var factory = win.plugins ? win.plugins.EqatecAnalytics.Factory : {};
        var monitor = win.plugins ? win.plugins.EqatecAnalytics.Monitor : dummyMonitor;

        // Create the monitor instance using the unique product key
        var productId = win.app.settings.eqatec.productKey;
        var version = win.app.settings.eqatec.version || '1.0.0.0';
        
        var settings = factory.CreateSettings(productId, version);
        settings.LoggingInterface = factory.CreateTraceLogger();
        
        factory.CreateMonitorWithSettings(settings,
            function() {
                console.log('Monitor created');
                // Start the monitor inside the success-callback
                monitor.Start(function() {
                  console.log('Monitor started');
                });
            },
            function(msg) {
                console.log('Error creating monitor: ' + msg);
            });
    };
    
    analytics.Stop = function() {
        var monitor = win.plugins ? win.plugins.EqatecAnalytics.Monitor : dummyMonitor;
        monitor.Stop();
    };
    
    analytics.TrackFeature = function (feature) {
        var monitor = win.plugins ? win.plugins.EqatecAnalytics.Monitor : dummyMonitor;
        monitor.TrackFeature(feature);
    };

    analytics.Monitor = function() {
        return win.plugins ? win.plugins.EqatecAnalytics.Monitor : dummyMonitor;
    };
    
}(window));
