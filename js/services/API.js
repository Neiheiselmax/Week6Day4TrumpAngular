(function() {
    'use strict';

    angular
        .module('taco')
        .factory('API', function($http){

    	return {
          getData:() => {
            return $http({
  			method: 'GET',
  			url: 'https://trumpdonald.herokuapp.com/random'})
          },

        };
      });

})();