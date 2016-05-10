(function () {
  'use strict';

  angular
    .module('LoadDep', ['oc.lazyLoad'])
    .service('LoadDep', LoadDep);

  function LoadDep() {
    var self = this;
    self.load = load;
    function load(deps) {
      var values = [];
      angular.forEach(deps, function (dep) {
        var html, css, js;
        html = dep + '.tpl.html';
        css = 'css/' + dep + '.css';
        js = 'js/' + dep + '.comp.js';
        values.push(html, css, js);
      });
      return values;
    }
  }
}());
