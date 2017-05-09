/**
 * Created by hq on 2017/5/9.
 */
(function (angular) {
    'use strict';
    angular.module('app').service('appHttp',['$http',function ($http) {
        this.getData = function (success,error) {
            $http({
                url:'http:localhost/api/home.php',
                method:'jsonp'
            }).then(function (res) {
                success(res.data);
            }).catch(function (err) {
                error(err);
            })
        }
    }])
})(angular);