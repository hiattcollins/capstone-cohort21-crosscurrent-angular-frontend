"use strict";

app.controller("historyCtrl", function($rootScope, $scope, $window, $location, $q, $http, queryFactory){

  console.log("control-history.js");

    // $scope.newQuery = function () {
    //   console.log("newQuery() activated");
    //   queryFactory.submitQuery({query: {
    //     user_id: $rootScope.user_id,
    //     input_text: $scope.new_query.input_text
    //     }
    //   }, $rootScope.auth_token)
    //   .then((resultingSongs) => {
    //     console.log("resultingSongs:", resultingSongs);
    //     $scope.songsToShow = resultingSongs
    //   }, (error) => {
    //     console.log("error logging in", error);
    //     $window.alert("There was an error with the query.");
    //   });
    // };

});
