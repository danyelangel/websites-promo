(function () {
  'use strict';

  angular
    .module('app.navEl', [])
    .component('navEl', {
      bindings: {
        title: '<',
        lang: '=',
        menu: '<'
      },
      templateUrl: 'app/nav-el/nav.tpl.html',
      controller: ['$sce', Controller]
    });

  function Controller($sce) {
    var vm = this;
    vm.html = html;
    function html(input) {
      return $sce.trustAsHtml(input);
    }
  }
}());
