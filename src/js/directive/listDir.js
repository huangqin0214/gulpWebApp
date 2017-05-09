/**
 * Created by hq on 2017/5/9.
 */
(function (angular) {
    'use strict';
    angular.module('app').directive('list',function () {
        return {
            restrict:'EA',
            templateUrl:'../view/tpl/list-tpl.html'
        }
    })
})(angular);