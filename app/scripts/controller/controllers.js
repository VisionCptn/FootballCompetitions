"use strict";

var myApp = angular.module("competition", ["ui.router", "ngDialog","ngSanitize"]);

myApp.controller("retrieveCompetitions", function ($scope, $http) {

    // get available championships
    $http({
            method: "get",
            url: "http://footballbet.com.ua/api/championships/"
        }).then(function successCallback(response) {

           $scope.competitions = response.data.result;
        }, function errorCallback(response){

    });

    $http({
            method: "get",
            url: "http://footballbet.com.ua/api/teams/"
        }).then(function successCallback(response) {

            $scope.teams = response.data.result;


        }, function errorCallback(response){

    });

});


myApp.directive('teamDialog', ['ngDialog', function(ngDialog) {
    return {
        restrict: 'A',
        scope: { team: '=' },
        templateUrl: "app/scripts/controller/team.html",
        link: function(scope, element){

            element.on('click',function(){

                ngDialog.open({
                    templateUrl: "app/scripts/controller/team-dialog.html",
                    scope: scope
                })

            });
        }
    };
}]);
