var app = angular.module('app',['myModule'] );

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', { templateUrl: 'tplIndex.html' })
        .when('/other', { templateUrl: 'tplOther.html' })
        .otherwise({ redirectTo: '/' });
});

app.controller('MainCtrl', function ($scope,myService) {
    $scope.name = 'World';

    var mockEnabled=false;
    $scope.test = myService.GetDataFromService(mockEnabled);
});


