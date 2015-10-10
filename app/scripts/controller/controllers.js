"use strict";

var app = angular.module('competitionApp.retrieveCompetitions', []);

app.controller("retrieveCompetitionsControllers", function ($scope, $http) {
    $scope.name = "world";


    var promises = getDataByUrl(["http://footballbet.com.ua/api/teams/",
        "http://footballbet.com.ua/api/championships/"]);

    //var promises = getResources(["http://footballbet.com.ua/api/teams/", "http://footballbet.com.ua/api/championships/"]);
    promises.then(function (data) {
            // data here is 2 arrays that you will need
            console.log(data);
        }
    )



});
