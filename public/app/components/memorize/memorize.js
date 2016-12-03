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
        '$http',
        '$rootScope',
        function($scope, $location, $cookies, $state, $http, $rootScope) {
          const { id } = $location.search();

          this.deck = {}
          this.isFound = false
          this.selectCard = {}
          this.incorrectCards = []
          this.correctCards = []
          this.remainCount = 0

          /**
           * Fetch data
           */
          $http({
              method: 'GET',
              url: `https://social-flash-card.herokuapp.com/api/deck/${id}`,
              headers: {
                'X-Access-Token': $rootScope.currentUser,
              },
            })
            .then((response) => {
              console.log(response)
              this.isFound = true
              this.deck = response.data;
              this.remainCount = this.deck.cards.length
              this.selectCard = this.deck.cards.pop()
            })

          this.correct = (card) => {
            this.remainCount--
            this.selectCard = this.deck.cards.pop()
            this.correctCards.push(card)
          }

          this.incorrect = (card) => {
            this.remainCount--
            this.selectCard = this.deck.cards.pop()
            this.incorrectCards.push(card)
          }
        }
      ]
    });
})();
