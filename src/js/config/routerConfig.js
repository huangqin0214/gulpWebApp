/**
 * Created by hq on 2017/5/9.
 */
(function (angular) {
    'use strict';
    // 配置路由
    angular.module('app').config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
        $stateProvider.state('app',{
            url:'/app',
            views:{
                home:{
                    templateUrl:'../view/home-tpl.html',
                    controller:'homeController'
                },
                author:{
                    template:"作者"
                },
                content:{
                    template:'栏目'
                },
                my:{
                    template:'我的'
                }
            }
        });
        $urlRouterProvider.otherwise('/app');
    }])
})(angular);