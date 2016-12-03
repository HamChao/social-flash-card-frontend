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
        '$http',
        '$rootScope',
        function($scope, $location, $cookies, $state, $http, $rootScope) {
          const emptyCard = {
            front: '',
            back: '',
          }

          this.deck = {
            name: '',
            cards: [emptyCard]
          }

          this.add = (newItem = { front: '', back: '' }) => {
            this.deck.cards.push(newItem)
          }

          this.save = (deck) => {
            console.log(deck);
            $http({
                method: 'POST',
                url: 'https://social-flash-card.herokuapp.com/api/deck/',
                headers: {
                  'X-Access-Token': $rootScope.currentUser,
                },
                data: JSON.stringify(deck),
              })
              .then((response) => {
                console.log(response)
                this.deck = response.data;
              })

          }
        }
      ]
    });
})();
