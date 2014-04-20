/**
 * Created by Dimitri on 19/04/2014.
 */

var myModule = angular.module('myModule', []);

myModule.factory('myService', function ($http) {
    return {

        GetDataFromService: function (mockEnabled) {
            if (mockEnabled) {
                return $http.get('foo.json');
            }
            else {
                var url = 'http://localhost:49797/api/person?callback=JSON_CALLBACK';
                $http.jsonp(url)
                    .success(function (response) {
                        console.log('success');
                    }
                ).error(function (data) {
                    console.log(data);
                });

                //AJX CALL WORKS:
//                $.ajax({
//                    url: 'http://localhost:49797/api/account',
//                    type: 'GET',
//                    dataType: 'jsonp',
//                    success: function (data) {
//                        console.log(data);
//                    }
//                })

// Change this value to a valid Google OAuth2 token
//                return $http.jsonp('http://localhost:7234/api/person?callback=JSON_CALLBACK').then(
//                    function(response) {
//                        console.log('AngularJS success:', response);
//                    },
//                    function(response) {
//                        console.log('AngularJS error:', response);
//
//                    }
//                );
//                var url = 'http://localhost:7234/api/person?callback=JSON_CALLBACK';
//                $http.jsonp(url)
//                    .success(function (response) {
//                        console.log('success');
//                    }
//                ).error(function (data) {
//                    var test=data[0].id;
//                });

//                return $http.get('http://localhost:7234/api/person/').then(function (response) {
//                    var people = response.data;
//                    return {
//                        results: people
//                    };
//                });


            }
        }
    }
});

