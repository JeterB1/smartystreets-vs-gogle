/* global angular */
'use strict';
var app = angular.module('app.Models', [
]);

app.factory('Google', ['$http', function ($http) {
        var service = this;
        service.gecode = function (query) {
            return $http.get('/google/geocode/'+query).then(function(resp){
                var addresses = [];
                if(resp.data.results){
                    addresses = resp.data.results.map(function(row){
                        return {
                            id: row.place_id,
                            address: row.formatted_address
                        };
                    });
                }
                return addresses;
            });
        };
        return service;
    }]);

app.factory('SmartyStreet', ['$http', function ($http) {
        var service = this;
        service.suggest = function (query) {
            return $http.get('/smarty-streets/suggest/'+query).then(function(resp){
                var addresses = [];
                if(resp.data.suggestions){
                    addresses = resp.data.suggestions.map(function(row){
                        return {
                            id: row.text+row.city+row.state,
                            address: row.text
                        };
                    });
                }
                return addresses;
            });
        };
        return service;
    }]);