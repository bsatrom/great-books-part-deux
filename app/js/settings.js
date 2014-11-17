window.app = window.app || {};

(function() {
  var appSettings = {

      everlive: {
          apiKey: '', //KEY HERE
          scheme: 'http'
      },

      eqatec: {
          productKey: '', //KEY HERE
          version: '1.0.0.0' 
      },
      
      feedback: {
          apiKey: '' //KEY HERE
      },
  };

  window.app.settings = appSettings;
}());