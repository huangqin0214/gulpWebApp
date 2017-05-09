/**
 * Created by hq on 2017/5/9.
 */
(function (angular) {
    'use strict';
    var app = angular.module('app',[]);
    app.controller('appController',['$scope',function ($scope) {
        $scope.name = '今日一刻';
    }])
})(angular);