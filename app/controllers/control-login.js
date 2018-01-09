"use strict";

app.controller("loginCtrl", function($rootScope, $scope, $window, $location, $q, $http, userFactory){

    console.log("loginCtrl activated");

    $scope.credentials = {
      email: null,
      password: null
    };

    $scope.loginClicked = function () {
      console.log("loginClicked() activated");
      userFactory.doLogIn({
        email: $scope.credentials.email,
        password: $scope.credentials.password
      })
      .then((userAuth) => {
        console.log("information from auth:", userAuth);
        $rootScope.auth_token = userAuth.auth_token;
        $rootScope.user_id = userAuth.user_id;
        // $window.alert("Login successful!");
        $rootScope.isLoggedIn = true;
        $location.path("/query");
      }, (error) => {
        console.log("error logging in", error);
        $window.alert("Invalid login info!");
        $scope.credentials.email = null;
        $scope.credentials.password = null;
      });
    };

    $scope.goToRegister = function () {
      $location.path("/user");
    };

    let checkToken = () => {
      return $rootScope.auth_token;
    };

});
