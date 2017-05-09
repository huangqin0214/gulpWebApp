/**
 * Created by hq on 2017/5/9.
 */
(function (angular) {
    angular.module('app').directive('tabbar',function () {
        return {
            restrict:'EA',
            templateUrl:'../view/tpl/tabbar-tpl.html'
        }
    })
})(angular);