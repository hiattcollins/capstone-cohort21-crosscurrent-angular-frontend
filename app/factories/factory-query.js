"use strict";


app.factory("queryFactory", function ($q, $http, $window) {



    // const getAllQueries = function(){
    //     let queries = [];
    //     console.log("url is", `http://localhost:3000/text_inputs`);
    //     return $q((resolve, reject) => {
    //         $http.get(`http://localhost:3000/text_inputs`)
    //         .then((queryObject) => {
    //             // let queryCollection = queryObject.data;
    //             // console.log("itemCollection", itemCollection);
    //             // Object.keys(itemCollection).forEach((key) => {
    //             //     itemCollection[key].id = key;
    //             //     tasks.push(itemCollection[key]);
    //             // });
    //             resolve(queryObject);
    //         })
    //         .catch((error) => {
    //             reject(error);
    //         });
    //     });
    // };


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

// headers: { 'Content-Type': 'application/json', 'Authorization': `${token}`}



    // const submitQuery = function(obj){
    //     let newObj = JSON.stringify(obj);
    //     return $q((resolve, reject) => {`${FBCreds.databaseURL}/items.json`, newObj)
    //     .then((data) => {
    //         console.log("data", data);
    //         return data;
    //     }, (error) => {
    //         let errorCode = error.code;
    //         let errorMessage = error.message;
    //         console.log("error", errorCode, errorMessage);
    //     });
    // };


    return { submitQuery, getQueryHistory, deleteOneQueryFromDB }; //getAllQueries,

});
