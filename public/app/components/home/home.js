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
        '$http',
        '$rootScope',
        function($scope, $location, $cookies, $state, $http, $rootScope) {
          const accessToken = $rootScope.currentUser

          this.isLogin = !!$rootScope.currentUser
          console.log(this.isLogin)
          this.pageSelect = 1

          this.feedDecks = [{
            objectId: '01',
            name: 'Something',
            cards: [{
              front: 'foo',
              back: 'bar',
            }, ],
            author: 'Trus',
          }, {
            objectId: '02',
            name: 'Something2',
            cards: [{
              front: 'foo',
              back: 'bar',
            }, ],
            author: 'Ham',
          }];
          this.myDecks = [{
            objectId: '01',
            name: 'Something',
            cards: [{
              front: 'foo',
              back: 'bar',
            }, ],
            author: 'Trus',
          }, {
            objectId: '02',
            name: 'Something',
            cards: [{
              front: 'foo',
              back: 'bar',
            }, ],
            author: 'Trus',
          }, {
            objectId: '03',
            name: 'Something',
            cards: [{
              front: 'foo',
              back: 'bar',
            }, ],
            author: 'Trus',
          }, {
            objectId: '04',
            name: 'Something2',
            cards: [{
              front: 'foo',
              back: 'bar',
            }, ],
            author: 'Ham',
          }];

          const getFeed = () => {
            $http({
              method: 'GET',
              url: 'https://social-flash-card.herokuapp.com/api/home',
              headers: {
                'X-Access-Token': accessToken,
              },
            })
            .then((response) => {
              console.log(response);
              this.feedDecks = response.data;
              this.currDecks = this.feedDecks;
            })
          };
          getFeed();

          const getMyDeck = () => {
            $http({
              method: 'GET',
              url: 'https://social-flash-card.herokuapp.com/api/decks',
              headers: {
                'X-Access-Token': accessToken,
              },
            })
            .then((response) => {
              console.log(response);
              this.myDecks = response.data;
            })
          }
          getMyDeck();


          this.setPage = (page) => {
            this.pageSelect = page;
            this.currDecks = page === 1 ? this.feedDecks : this.myDecks;
          }
        }
      ]
    });
})();
