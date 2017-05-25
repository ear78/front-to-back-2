angular.module('ftb')
    .controller('mainCtrl', function($scope, mainService){
        $scope.getProducts = function(){
            console.log('clicked!');
            mainService.getAllProducts().then(function(response){
                $scope.products = response.data;
                console.log(response.data);
            });
        }

        $scope.test = "App is working!";
    })
