"use strict"

var myApp = angular.module("competition", ["ui.router", "ngDialog"]);

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


app.controller('MainCtrl', function ($scope, $rootScope, ngDialog, $timeout) {
    $rootScope.jsonData = '{"foo": "bar"}';
    $rootScope.theme = 'ngdialog-theme-default';
    $scope.directivePreCloseCallback = function (value) {
        if (confirm('Close it? MainCtrl.Directive. (Value = ' + value + ')')) {
            return true;
        }
        return false;
    };
    $scope.preCloseCallbackOnScope = function (value) {
        if (confirm('Close it? MainCtrl.OnScope (Value = ' + value + ')')) {
            return true;
        }
        return false;
    };
    $scope.open = function () {
        var new_dialog = ngDialog.open({
            id: 'fromAService',
            template: '../../app/partial/clubView.html',
            controller: 'InsideCtrl',
            data: {foo: 'from a service'}
        });
        // example on checking whether created `new_dialog` is open
        $timeout(function () {
            console.log(ngDialog.isOpen(new_dialog.id));
        }, 2000)
    };
});

myApp.config( function ($stateProvider, $urlRouterProvider){



    $stateProvider
        .state("clubView", {
            url: "/clubview",
            templateUrl: "../../app/partial/clubView.html"
        });

});
