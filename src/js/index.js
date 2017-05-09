/**
 * Created by hq on 2017/5/9.
 */
(function (angular) {
    'use strict';
    var app = angular.module('app',['ui.router']);
    app.controller('appController',['$scope',function ($scope) {
        $scope.name = '今日一刻';
        // tabbar默认点击类型
        $scope.type = 'home';
        // 默认导航标题
        var title = '今日一刻';
        // 实现tabbarClick
        $scope.tabbarClick = function (type) {
            $scope.type = type;
            switch (type){
                case 'home':
                    title = "今日一刻";
                    break;
                case 'author':
                    title = "作者";
                    break;
                case 'content':
                    title = "栏目";
                    break;
                case 'my':
                    title = "我的";
                    break;
                default:
                    break;
            }

            // 给nav发送广播，切换标题
            $scope.$broadcast('titleChange',{title:title});
        }
    }])
})(angular);