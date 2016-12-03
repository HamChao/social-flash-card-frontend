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
          const emptyCard = {
            front: '',
            back: '',
          }

          this.deck = {
            cards: [emptyCard]
          }

          this.add = (newItem = { front: '', back: '' }) => {
            this.deck.cards.push(newItem)
          }

          this.save = (deck) => {
            console.log(deck);
          }
        }
      ]
    });
})();
