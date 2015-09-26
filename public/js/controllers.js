/* global angular */
'use strict';
var app = angular.module('app.Controllers', [
    'app.Models', //here to visually represent dependency
]);


app.controller('SuggestionCtrl', ['$scope', 'Google','SmartyStreet', function($scope, Google, SmartyStreet){
        $scope.user_address = '';
        $scope.google_results = [];
        $scope.smartystreets_results = [];
        $scope.updateAddresses = function(){
            Google.gecode($scope.user_address).then(function(addresses){
                $scope.google_results = addresses;
            });
            SmartyStreet.suggest($scope.user_address).then(function(addresses){
                $scope.smartystreets_results = addresses;
            });
        };
}]);