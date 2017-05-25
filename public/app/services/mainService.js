angular.module('ftb')
    .service('mainService', function($http){
        var baseUrl = 'http://localhost:9999'
        this.getAllProducts = function(){
            return $http.get(baseUrl + '/products');
        }

        this.getProduct = function(id){
            return $http.get(baseUrl + '/products' + id)
        }
    })
