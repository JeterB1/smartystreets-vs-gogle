/* global angular */
'use strict';
var app = angular.module('app.Routes', [
    'ui.router'
]);

app.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('Home', {
            url: '/',
            templateUrl: '/templates/suggestion.html',
            controller: 'SuggestionCtrl'
        });
    }
]);