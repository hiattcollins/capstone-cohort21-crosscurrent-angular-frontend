"use strict";


app.factory("queryFactory", function ($q, $http, $window) {



    const getAllQueries = function(){
        let queries = [];
        console.log("url is", `http://localhost:3000/text_inputs`);
        return $q((resolve, reject) => {
            $http.get(`http://localhost:3000/text_inputs`)
            .then((queryObject) => {
                // let queryCollection = queryObject.data;
                // console.log("itemCollection", itemCollection);
                // Object.keys(itemCollection).forEach((key) => {
                //     itemCollection[key].id = key;
                //     tasks.push(itemCollection[key]);
                // });
                resolve(queryObject);
            })
            .catch((error) => {
                reject(error);
            });
        });
    };

// headers: { 'Content-Type': 'application/json', 'Authorization': `${token}`}

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


    return { getAllQueries, submitQuery };

});
