(function() {
  angular
    .module('app')
    .component('view', {
      templateUrl: 'app/components/view/view.html',
      controllerAs: 'view',
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
