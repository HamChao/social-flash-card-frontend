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
          this.feedDecks = [
            {
              objectId: '01',
              name: 'Something',
              cards: [
                {
                  front: 'foo',
                  back: 'bar',
                },
              ],
              author: 'Trus',
            },
            {
              objectId: '02',
              name: 'Something2',
              cards: [
                {
                  front: 'foo',
                  back: 'bar',
                },
              ],
              author: 'Ham',
            }
          ];
          this.myDecks = [
            {
              objectId: '01',
              name: 'Something',
              cards: [
                {
                  front: 'foo',
                  back: 'bar',
                },
              ],
              author: 'Trus',
            },
            {
              objectId: '02',
              name: 'Something',
              cards: [
                {
                  front: 'foo',
                  back: 'bar',
                },
              ],
              author: 'Trus',
            },
            {
              objectId: '03',
              name: 'Something',
              cards: [
                {
                  front: 'foo',
                  back: 'bar',
                },
              ],
              author: 'Trus',
            },
            {
              objectId: '04',
              name: 'Something2',
              cards: [
                {
                  front: 'foo',
                  back: 'bar',
                },
              ],
              author: 'Ham',
            }
          ];

          this.currDecks = this.feedDecks;
          this.setPage = (page) => {
            this.pageSelect = page;
            this.currDecks = page === 1 ? this.feedDecks : this.myDecks;
          }
        }
      ]
    });
})();
