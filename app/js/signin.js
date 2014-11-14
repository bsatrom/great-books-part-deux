(function () {
    var title = 'signin';
    
    var $loginUsername;
    var $loginPassword;

    var init = function () {
      $loginUsername = $('#loginUsername');
      $loginPassword = $('#loginPassword');
    };

    var show = function () {
        $loginUsername.val('');
        $loginPassword.val('');
    };

    // Authenticate to use Backend Services as a particular user
    var login = function () {
      var username = $loginUsername.val();
      var password = $loginPassword.val();
      
      // Authenticate using the username and password
      app.everlive.Users.login(username, password)
        .then(function () {
          app.mobileApp.navigate('views/favorites.html');
        })
        .then(null,
          function (err) {
              window.alert(err.message);
        });
    };

    window.app = window.app || {};
    window.app.models = window.app.models || {};
    window.app.models.signin = {
      init: init,
      show: show,
      login: login,
      title: title
    };
})();