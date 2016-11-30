(function(){
angular
    .module("carmodule")
    .controller("listCtrl",ListController);

    ListController.$inject = ['DataService'];

    function ListController(DataService){
        var vm = this;
        DataService.fetchlist().then(function(list){
        console.log(list);
        vm.data = list;
        });
    }
})();