(function() {
  angular
    .module('app')
    .component('memorize', {
      templateUrl: 'app/components/memorize/memorize.html',
      controllerAs: 'memorize',
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
