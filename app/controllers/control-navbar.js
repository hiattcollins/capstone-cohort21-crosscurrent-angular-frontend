"use strict";

app.controller("navbarCtrl", function($rootScope, $scope, $window, $location, $q, $http){

    console.log("navbarCtrl activated");

    $rootScope.isLoggedIn = false;
    $rootScope.auth_token = null;


    // $scope.loginClicked = function () {
    //     console.log("loginClicked() activated");
    //     userFactory.doLogIn();
    // };

    $scope.logoutClicked = function () {
      $rootScope.isLoggedIn = false;
      $rootScope.auth_token = null;
      $rootScope.user_id = null;
      $location.path("/login");
    };


    // $scope.statCheck = function () {
    //     console.log("statCheck activated");
    //     userFactory.factoryCheckStatus();
    // };



});
