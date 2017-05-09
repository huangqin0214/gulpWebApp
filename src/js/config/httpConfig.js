/**
 * Created by hq on 2017/5/9.
 */
(function (angular) {
    'use strict';
    angular.module('app').config(['$sceDelegateProvider',function ($sceDelegateProvider) {
        $sceDelegateProvider.resourceUrlWhitelist([
            'self',
            'http://localhost/api/*'
        ])
    }])
})(angular);