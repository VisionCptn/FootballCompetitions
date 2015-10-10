"use strict";

var myApp = angular.module("competition", []);

myApp.controller("retrieveCompetitions", function ($scope, $http, $q) {
    $scope.name = "world";


    var getResources = function(urls){
         var resources = urls.map(function(url) {

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



});
