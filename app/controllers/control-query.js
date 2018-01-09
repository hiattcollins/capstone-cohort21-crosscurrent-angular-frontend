"use strict";

app.controller("queryCtrl", function($rootScope, $scope, $window, $location, $q, $http, queryFactory){

  console.log("control-query.js");

  $scope.songsToShow = [];

    $scope.new_query = {
      input_text: null
    };

    $scope.newQuery = function () {
      if ($rootScope.auth_token) {
        console.log("newQuery() activated");
        queryFactory.submitQuery({query: {
          user_id: $rootScope.user_id,
          input_text: $scope.new_query.input_text
          }
        }, $rootScope.auth_token)
        .then((resultingSongs) => {
          console.log("resultingSongs:", resultingSongs);
          $scope.songsToShow = resultingSongs;
        }, (error) => {
          console.log("error with submitting new query", error);
          $window.alert("There was an error with the query.");
        });
      } else {
        $window.alert("You must log in to search.");
      }
    };

    $scope.clearQuery = function () {
      if ($rootScope.auth_token) {
        $scope.new_query.input_text = null;
        $scope.songsToShow = [];
      }
    };

});
