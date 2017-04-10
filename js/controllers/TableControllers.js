(function() {
    'use strict';

    angular
        .module('taco')
        .controller('TableController', function(API) {

          const vm = this;

        let data = API.getData();
        
        data.then(function successCallback(response){
            console.log(response)
            vm.quote = response.data.value

        })


        });
})();
