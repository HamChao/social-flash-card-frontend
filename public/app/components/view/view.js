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
          const { id } = $location.search();

          this.deck = {
            objectId: '01',
            name: 'Something',
            cards: [
            {
              front: 'foo',
              back: 'bar',
            }, {
              front: 'foo',
              back: 'bar',
            }, {
              front: 'foo',
              back: 'bar',
            }, {
              front: 'foo',
              back: 'bar',
            }],
            author: 'Trus',
          }

          this.like = () => {

          }

          this.save = () => {

          }

          this.learn = () => {

          }

          this.share = () => {

          }
        }
      ]
    });
})();
