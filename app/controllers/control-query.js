"use strict";

app.controller("queryCtrl", function($rootScope, $scope, $window, $location, $q, $http, queryFactory){

  console.log("control-query.js");

  $scope.queries = [];

    const showAllQueries = function(){
      queryFactory.getAllQueries()
      .then((queries) => {
        console.log("showAllQueries from promise", queries);
        // $scope.queries = queries;
      });
    };


    // let query_to_submit = {
    //   "text input": {
    //     "query_id": 1,
    //     "input_text": "Methinks that what they call my shadow here on earth is my true substance. Methinks that in looking at things spiritual, we are too much like oysters observing the sun through the water, and thinking that thick water the thinnest of air. Methinks my body is but the lees of my better being. In fact take my body who will, take it I say, it is not me. And therefore three cheers for Nantucket; and come a stove boat and stove body when they will, for stave my soul, Jove himself cannot."
    //   }
    // };

    let query_to_submit = {
        "query_id": 1,
        "input_text": "Methinks that what they call my shadow here on earth is my true substance. Methinks that in looking at things spiritual, we are too much like oysters observing the sun through the water, and thinking that thick water the thinnest of air. Methinks my body is but the lees of my better being. In fact take my body who will, take it I say, it is not me. And therefore three cheers for Nantucket; and come a stove boat and stove body when they will, for stave my soul, Jove himself cannot."
    };

    const newQuery = function(query){
      queryFactory.submitQuery(query)
      .then((result) => {
        console.log("newQuery result from promise", result);
        // $scope.queries = queries;
      });
    };

    // showAllQueries();
    // newQuery(query_to_submit);

});
