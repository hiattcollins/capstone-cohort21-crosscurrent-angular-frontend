"use strict";



// instatiate the module as 'app'

const app = angular.module("crosscurrent", ["ngRoute"]);
// is user logged in?
// this is checked as the 'resolve' in most views
// the resolve is an optional map of dependencies if they are resolved successfully,
// they will be injected when the controller is instantiated, and are available to $scope in that controller under $resolve.
// else a $routeChangeError will be fired
// in this case, we need to know if the user is logged in to determine whether to allow access to certain paths

// const isAuth = (userFactory) => userFactory.isAuthenticated();

// using $routeProvider to configure the routes
// the .when specifies the the template, controller, and the resolve (see above)
// to be instantiated when the path is requested


// let isAuth = (userFactory) => new Promise ( (resolve, reject) => {
//   console.log("userFactory is", userFactory);
//   userFactory.isAuthenticated()
//   .then( (userExists) => {
//     if(userExists){
//       console.log("Authenticated, go ahead");
//       resolve();
//     }else {
//       console.log("Authentication reject, GO AWAY");
//       reject();
//     }
//   });
// });

// let isAuth = (loginCtrl) => new Promise ( (resolve, reject) => {
//   console.log("loginCtrl is:", loginCtrl);
//   loginCtrl.checkToken()
//   .then( (token) => {
//     if(token){
//       console.log("Authenticated");
//       resolve();
//     }else {
//       console.log("Not authenticated");
//       reject();
//     }
//   });
// });



app.config(($routeProvider, $httpProvider)=> {
    $routeProvider
    .when('/', {
      templateUrl: 'partials/query.html',
      controller: 'queryCtrl',
      resolve:{
        'check':function($rootScope, $location){   //function to be resolved, accessFac and $location Injected
            if($rootScope.auth_token){    //check if the user has permission -- This happens before the page loads

            }else{
                $location.path('/login');                //redirect user to home if it does not have permission.
                console.log("You don't have access here");
            }
        }
      }
    })
    .when('/login', {
      templateUrl: 'partials/login.html',
      controller: 'loginCtrl'
    })
    .when('/user', {
      templateUrl: 'partials/user.html',
      controller: 'userCtrl'
      // resolve: {isAuth}
    })
    .when('/history', {
      templateUrl: 'partials/history.html',
      controller: 'historyCtrl',
      resolve:{
        'check':function($rootScope, $location){   //function to be resolved, accessFac and $location Injected
            if($rootScope.auth_token){    //check if the user has permission -- This happens before the page loads

            }else{
                $location.path('/login');                //redirect user to home if it does not have permission.
                console.log("You don't have access here");
            }
        }
      }
    })
    .otherwise('/');
});



// app.config(($routeProvider) => {
//     $routeProvider
//     .when('/', {
//         templateUrl: 'partials/list.html',
//         controller: 'listCtrl',
//         resolve: {isAuth}
//     })
//     .when('/login', {
//         templateUrl: 'partials/user.html',
//         controller: 'userCtrl'

//     })
//     .when('/task-list', {
//         templateUrl: 'partials/list.html',
//         controller: 'listCtrl',
//         resolve: {isAuth}
//     })
//     .when('/item/newItem', {
//         templateUrl: 'partials/form.html',
//         controller: 'addTaskCtrl',
//         resolve: {isAuth}
//     })
//     .when('/task/:itemId', {
//         templateUrl: 'partials/details.html',
//         controller: 'detailTaskCtrl',
//         resolve: {isAuth}
//     })
//     .when('/task/:itemId/edit', {
//         templateUrl: 'partials/form.html',
//         controller: 'editTaskCtrl',
//         resolve: {isAuth}
//     })
//     .otherwise('/');
// });



// app.config((ezfbProvider, FacebookCreds) => {
//   let fbCreds = FacebookCreds;
//   let fbAppId = fbCreds.app_id;
//   ezfbProvider.setInitParams({
//     appId: fbAppId,

//     // Module default is `v2.6`.
//     // If you want to use Facebook platform `v2.3`, you'll have to add the following parameter.
//     // https://developers.facebook.com/docs/javascript/reference/FB.init
//     version: 'v2.10'
//   });
// });

// .run blocks - A run block is the code which needs to run to kickstart the application.
// It is executed after all of the service have been configured and the injector has been created
// here we are just initializing our app with firebase, passing 'FRCreds', a constant registered in app/fb-creds.js
// which contains the databaseURL, apiKey, and authDomain need to interact with the app
// app.run(($rootScope, $window) => {







// app.run(($location, FirebaseCreds)=> firebase.initializeApp(FirebaseCreds));






// app.run(function($rootScope) {
//  $rootScope.showSearch = false;
// });
