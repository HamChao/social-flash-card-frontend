(function() {
  angular
    .module('app')
    .component('home', {
      templateUrl: 'app/components/home/home.html',
      controllerAs: 'home',
      controller: [
        '$scope',
        '$location',
        '$cookies',
        '$state',
        function($scope, $location, $cookies, $state) {
          this.pageSelect = 1;
          this.decks = [
            {
              name: 'Something',
              cards: [
                {
                  front: 'foo',
                  back: 'bar',
                },
              ]
            },
            {
              name: 'Something2',
              cards: [
                {
                  front: 'foo',
                  back: 'bar',
                },
              ]
            }
          ];

          this.setPage = (page) => this.pageSelect = page;
        }
      ]
    });
})();
