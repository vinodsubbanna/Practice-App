(function(){
    angular
        .module("carmodule")
        .controller("MainController", MainController);

        function MainController(){
            this.message = "This is Home page";
        };
})();