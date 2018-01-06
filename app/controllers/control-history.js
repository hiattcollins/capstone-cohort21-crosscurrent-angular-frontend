"use strict";

app.controller("historyCtrl", function($rootScope, $scope, $window, $location, $q, $http, queryFactory){

  console.log("control-history.js");

  $scope.historyToShow = [];

  $scope.showHistory = function () {
    console.log("showHistory() activated");
    queryFactory.getQueryHistory(
        {user_id: $rootScope.user_id},
        $rootScope.auth_token)
    .then((resultingHistory) => {
        console.log("resultingHistory:", resultingHistory);
        $scope.historyToShow = resultingHistory;
      }, (error) => {
        console.log("error with getting history", error);
        $window.alert("There was an error with retrieving your history.");
    });
  };

  $scope.deleteOneQuery = function (queryId) {
    console.log("deleteOneQuery() activated");
    queryFactory.deleteOneQueryFromDB(queryId, $rootScope.auth_token)
    .then((irrelevant) => {
        $scope.showHistory();
    }, (error) => {
        console.log("error deleting one past query", error);
        $window.alert("There was an error with deleting that past query.");
    });
  };

  if ($rootScope.auth_token) {
    $scope.showHistory();
  }

});
