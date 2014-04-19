/**
 * Created by Dimitri on 19/04/2014.
 */

var myModule = angular.module('myModule', []);



myModule.factory('myService', function ($http) {
    return {

        testHttpGetResult: function (mockEnabled) {
            if (mockEnabled) {
                return $http.get('foo.json');
            }
            else
            {
                $http.get();
            }
        }
    }
});

