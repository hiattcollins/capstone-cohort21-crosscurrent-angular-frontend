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

  return { doLogIn, newUser };

});
