"use strict";
var app = angular.module('competitionApp.resource', []);


app.factory('resourceFactory', ['$http', function($http) {

        var resourceFactory = {};

        resourceFactory.getDataByUrl = function (urls) {
            var resources = urls.map(function (url) {

                return $http({
                    method: "get",
                    url: url
                })

            });

            return $q.all(resources);
        };

        var promises = getResources(["http://footballbet.com.ua/api/teams/", "http://footballbet.com.ua/api/championships/"]);
        promises.then(function (data) {
                // data here is 2 arrays that you will need
                console.log(data);
            }
        )
    }]);