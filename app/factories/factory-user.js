"use strict";


app.factory("userFactory", function ($q, $http, $window) {

  const doLogIn = function(loginObj){
    let credsToSubmit = JSON.stringify(loginObj);
    console.log("loginObj:", loginObj, "credsToSubmit:", credsToSubmit);
    return $q((resolve, reject) => {
      $http.post(`http://localhost:3000/authenticate`, credsToSubmit, {
        headers: { 'Content-Type': 'application/json'}
      }).then((authReturned) => {
        console.log("authReturned:", authReturned);
        let userAuthenticated = authReturned.data;
        resolve(userAuthenticated);
      })
      .catch((error) => {
        console.log("doLogin error:", error);
        reject(error);
      });
    });
  };

  const newUser = function(newUserObj){
    let newUserToSubmit = JSON.stringify(newUserObj);
    console.log("newUserObj:", newUserObj, "newUserToSubmit:", newUserToSubmit);
    return $q((resolve, reject) => {
      $http.post(`http://localhost:3000/register`, newUserToSubmit, {
        headers: { 'Content-Type': 'application/json'}
      }).then((authReturned) => {
        console.log("authReturned:", authReturned);
        let userAuthenticated = authReturned.data;
        resolve(userAuthenticated);
      })
      .catch((error) => {
        console.log("newUser error:", error);
        reject(error);
      });
    });
  };

// const getSavedEvents = function(firebase_userId){
//         let events = [];
//         console.log("url is", `${FirebaseCreds.databaseURL}/events.json?orderBy="user_id"&equalTo="${firebase_userId}"`); //   &equalTo="${firebase_userId}"
//         return $q((resolve, reject) => {
//             $http.get(`${FirebaseCreds.databaseURL}/events.json?orderBy="user_id"&equalTo="${firebase_userId}"`)
//             .then((eventObject) => {
//                 console.log("eventObject:", eventObject);
//                 let eventCollection = eventObject.data;
//                 console.log("eventCollection", eventCollection);
//                 Object.keys(eventCollection).forEach((key) => {
//                     eventCollection[key].data_id = key;
//                     events.push(eventCollection[key]);
//                 });

//                 // arrayOfIndividualEvents = events;

//                 // console.log("arrayOfIndividualEvents in getSavedEvents:", arrayOfIndividualEvents);

//                 resolve(events);
//             })
//             .catch((error) => {
//                 reject(error);
//             });
//         });
//     };


  return { doLogIn, newUser };

});
