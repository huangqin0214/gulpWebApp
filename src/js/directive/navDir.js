/**
 * Created by hq on 2017/5/9.
 */
(function (angular) {
    'use strict';
    angular.module('app').directive('nav',function () {
        return {
            restrict:'EA',
            templateUrl:'../view/tpl/nav-tpl.html'
        }
    })
})(angular);