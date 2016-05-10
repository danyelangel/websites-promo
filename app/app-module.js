(function () {
  'use strict';

  /* @ngdoc object
   * @name candyflipPortfolio
   * @description
   *
   */
  angular
    .module('comiccon', [
      // External dependencies
      'ngMaterial',
      'sn.skrollr',
      'duScroll',
      // Private dependencies
      'LoadDep',
      'Slides',
      'Tao',
      // Components
      'app.slideEl',
      'app.navEl'
    ])
    .config(function ($mdThemingProvider) {
      $mdThemingProvider.theme('default')
      .primaryPalette('grey', {
        default: '900'
      }).dark();
      $mdThemingProvider.theme('bright')
      .primaryPalette('grey', {
        default: '50'
      });
    })
    .run(['$window', 'snSkrollr', '$mdMedia',
    function ($window, snSkrollr, $mdMedia) {
      // Check touch and nav is Chrome (Safari is not supported and Firefox, IE, haven't been tested)
      if (!$window.Modernizr.touchevents && $window.navigator.userAgent.toLowerCase().indexOf('chrome') > -1 && !$mdMedia('xs')) {
        console.log('Non touch');
        snSkrollr.init({
          smoothScrolling: false,
          forceHeight: false
        });
      }
    }]);
}());
