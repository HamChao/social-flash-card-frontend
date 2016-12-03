(function() {
  angular
    .module('app')
    .component('create', {
      templateUrl: 'app/components/create/create.html',
      controllerAs: 'create',
      controller: [
        '$scope',
        '$location',
        '$cookies',
        '$state',
        function($scope, $location, $cookies, $state) {
        }
      ]
    });
})();
