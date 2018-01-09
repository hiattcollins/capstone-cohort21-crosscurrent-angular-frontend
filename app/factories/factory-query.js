"use strict";


app.factory("queryFactory", function ($q, $http, $window) {

    const submitQuery = function(queryObj, token) {
        let queryToSubmit = JSON.stringify(queryObj);
        console.log("queryObj:", queryObj, "queryToSubmit:", queryToSubmit, "token:", token);
        return $q((resolve, reject) => {
            $http.post(`http://localhost:3000/text_query`, queryToSubmit, {
                headers: { 'Authorization': token}
            })
            .then((queryResults) => {
                console.log("queryResults", queryResults);
                let songArray = queryResults.data;
                resolve(songArray);
            })
            .catch((error) => {
                console.log("submitQuery error", error);
                reject(error);
            });
        });
    };

    const getQueryHistory = function(userObj, token){
        let userToSubmit = JSON.stringify(userObj);
        console.log("userObj:", userObj, "token:", token);
        return $q((resolve, reject) => {
            $http.post(`http://localhost:3000/get_by_user`, userToSubmit, {
              headers: {'Authorization': token}
            })
            .then((historyResults) => {
                console.log("historyResults:", historyResults);
                let historyArray = historyResults.data;
                resolve(historyArray);
            })
            .catch((error) => {
                console.log("getQueryHistory error");
                reject(error);
            });
        });
    };

    const deleteOneQueryFromDB = function(queryId, token) {
      console.log("queryId:", queryId, "token:", token);
      return $q((resolve, reject) => {
        $http.delete(`http://localhost:3000/queries/${queryId}`, {
          headers: {'Authorization': token}
        })
        .then((deleteOneResults) => {
          resolve(deleteOneResults);
        })
        .catch((error) => {
          console.log("deleteOneQueryFromDB error");
          reject(error);
        });
      });
    };

    return { submitQuery, getQueryHistory, deleteOneQueryFromDB }; //getAllQueries,

});
