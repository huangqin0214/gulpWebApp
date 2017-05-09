/**
 * Created by hq on 2017/5/9.
 */
(function (angular) {
    'use strict';
    angular.module('app').controller('homeController',['$scope','appHttp',function ($scope,appHttp) {
        appHttp.getData(function (data) {

        },function (error) {

        })
    }])
})(angular);