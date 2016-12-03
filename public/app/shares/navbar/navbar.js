(function() {
  angular
    .module('app')
    .component('navbar', {
      templateUrl: 'app/shares/navbar/navbar.html',
      controllerAs: 'navbar',
      controller: [
        '$scope',
        '$location',
        '$cookies',
        '$state',
        ($scope, $location, $cookies, $state) => {
        //   const path = $location.url();
        //   $scope.navbar.isHideMenu = () => {
        //     if (path === '/login') {
        //       return true;
        //     }
        //     return false;
        //   }

        //   // Active stuffs
        //   const homeStates = [
        //     'home',
        //     'home-header',
        //     'home-header-edit',
        //     'home-middle',
        //     'home-middle-edit',
        //     'home-footer',
        //     'home-footer-edit',
        //   ];
        //   const promotionStates = [
        //     'promotion',
        //     'promotion-edit',
        //     'promotion-category',
        //     'promotion-category-edit',
        //   ];
        //   const partnerStates = [
        //     'partner',
        //     'partner-edit',
        //     'partner-coupon',
        //     'partner-coupon-edit',
        //   ];

        //   // Flag to check does it need to be active
        //   $scope.navbar.isActiveHome = homeStates.includes($state.current.name);
        //   $scope.navbar.isActivePromotion = promotionStates.includes($state.current.name);
        //   $scope.navbar.isActivePartner = partnerStates.includes($state.current.name);

        //   $scope.navbar.logout = () => {
        //     Parse.User.logOut();
        //     $location.url('/login');
        //   }
        }
      ]
    });
})();
