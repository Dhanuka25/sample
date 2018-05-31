angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl2', function($scope) {
  $scope.playlists = [
    { title: 'Birth', id: 1 },
    { title: '2 months', id: 2 },
    { title: '4 months', id: 3 },
    { title: '6 months', id: 4 },
    { title: '12 months', id: 5 },
    { title: '18 months', id: 6 },
	{ title: '18 months', id: 7 }
  ];
})



.controller('PlaylistCtrl2', function($scope, $stateParams) {
});


