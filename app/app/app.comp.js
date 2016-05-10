(function () {
  'use strict';

  angular
    .module('comiccon')
    .component('appEl', {
      templateUrl: 'app/app.tpl.html',
      controller: ['LoadDep', 'Slides', '$sce', AppEl]
    });

  function AppEl(LoadDep, Slides, $sce) {
    var $ctrl = this;
    $ctrl.loadDep = LoadDep.load;
    $ctrl.slides = Slides.slides;
    $ctrl.intro = Slides.intro;
    $ctrl.title = Slides.title;
    $ctrl.header = Slides.header;
    $ctrl.menu = Slides.menu;
    $ctrl.html = html;
    $ctrl.lang = 'es';
    function html(input) {
      return $sce.trustAsHtml(input);
    }
  }
}());
