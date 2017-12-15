"use strict";

app.controller("userCtrl", function($rootScope, $scope, $window, $location, $q, $http, userFactory){

  $scope.userInfo = {
    email: null,
    password: null,
    first_name: null,
    last_name: null
  };


    $scope.newUserClicked = function () {
      console.log("newUserClicked() activated");
      userFactory.newUser({
        email: $scope.userInfo.email,
        password: $scope.userInfo.password,
        first_name: $scope.userInfo.first_name,
        last_name: $scope.userInfo.last_name
      })
      .then((userAuth) => {
        console.log("information from new user auth:", userAuth);
        $rootScope.auth_token = userAuth.auth_token;
        $rootScope.user_id = userAuth.user_id;
        $window.alert("New user created!");
        $rootScope.isLoggedIn = true;
        $location.path("/query");
      }, (error) => {
        console.log("error logging in", error);
        $window.alert("Error creating user. Please try again.");
        $scope.userInfo.email = null;
        $scope.userInfo.password = null;
        $scope.userInfo.first_name = null;
        $scope.userInfo.last_name = null;
      });
    };

});
