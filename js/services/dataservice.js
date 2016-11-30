(function(){
angular
    .module("carmodule")
    .factory("DataService", CarList);
     
    CarList.$inject = ['$http'];
    
    function CarList($http){
        var datafactory = {};
            
        datafactory.fetchlist = function() {
            return $http.get("https://jsonplaceholder.typicode.com/photos/1");
        }
        return datafactory;
    }

})();