"use strict";

const app = angular.module("crosscurrent", ["ngRoute"]);

app.config(($routeProvider, $httpProvider)=> {
    $routeProvider
    .when('/', {
      templateUrl: 'partials/landing.html',
    })
    .when('/login', {
      templateUrl: 'partials/login.html',
      controller: 'loginCtrl'
    })
    .when('/user', {
      templateUrl: 'partials/user.html',
      controller: 'userCtrl'
    })
    .when('/query', {
      templateUrl: 'partials/query.html',
      controller: 'queryCtrl',
      resolve:{
        'check':function($rootScope, $location){   //function to be resolved, accessFac and $location Injected
            if($rootScope.auth_token){    //check if the user has permission -- This happens before the page loads

            }else{
                $location.path('/login');                //redirect user to home if it does not have permission.
                console.log("No access");
            }
        }
      }
    })
    .when('/history', {
      templateUrl: 'partials/history.html',
      controller: 'historyCtrl',
      resolve:{
        'check':function($rootScope, $location){   //function to be resolved, accessFac and $location Injected
            if($rootScope.auth_token){    //check if the user has permission -- This happens before the page loads

            }else{
                $location.path('/login');                //redirect user to home if it does not have permission.
                console.log("No access");
            }
        }
      }
    })
    .otherwise('/');
});
