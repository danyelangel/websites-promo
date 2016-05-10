(function () {
  'use strict';

  angular
    .module('app.slideEl', [])
    .component('slideEl', {
      bindings: {
        wcData: '<',
        wcLang: '<',
        slideId: '<'
      },
      templateUrl: 'app/slide-el/slide-el.tpl.html',
      controller: ['$sce', '$mdMedia', SlideElController]
    });

  function SlideElController($sce, $mdMedia) {
    var vm = this;
    vm.layoutAlign = 'center ' + vm.wcData.layoutAlign || 'flex-start';
    vm.scroll = vm.wcData.scroll || {};
    vm.html = html;
    vm.isMd = $mdMedia('md');
    function html(input) {
      return $sce.trustAsHtml(input);
    }
  }
}());
