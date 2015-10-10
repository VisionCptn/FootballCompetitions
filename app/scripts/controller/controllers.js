"use strict"

var myApp = angular.module("competition", []);

myApp.controller("retrieveCompetitions", function ($scope, $http) {
    $scope.name = "world";

    // get available championships
    $http({
        method: "get",
        url: "http://footballbet.com.ua/api/championships/"
    }).then(function successCallback(response) {
        console.log(response.data.result);
        $scope.competitions = response.data.result;

    }, function errorCallback(response){

    });

    $http({
        method: "get",
        url: "http://footballbet.com.ua/api/teams/"
    }).then(function successCallback(response) {
        console.log(response.data.result);
        $scope.teams = response.data.result;

    }, function errorCallback(response){

    });
});
