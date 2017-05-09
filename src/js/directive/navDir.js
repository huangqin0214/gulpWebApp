/**
 * Created by hq on 2017/5/9.
 */
(function (angular) {
    'use strict';
    angular.module('app').directive('nav',function () {
        return {
            restrict:'EA',
            templateUrl:'../view/tpl/nav-tpl.html',
            link:function ($scope,ele,attr) {
                // 监听父控制器的titleChange广播
                $scope.$on('titleChange',function (e,args) {
                    ele.find('span').html(args.title);
                })
            }
        }
    })
})(angular);