(function(){
    angular
    .module("carmodule",["ngRoute"])
    
    .config(function($routeProvider, $locationProvider){
        $routeProvider
        .when("/",{
            templateUrl:"sample.html",
          
        })
        .when("/cars",{
            templateUrl:"carlist.html",
            controller:"listCtrl"
        })
        .when("/cars/:id",{
            templateUrl:"details.html",
            controller:"detailController"
        })
        .when("/about",{
            template:"<h1 class='sample'>This is About Page</h1>"
        })
        .otherwise({
            redirectTo:"/"
        })

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

    })
    

})();