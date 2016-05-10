(function () {
  'use strict';

  angular
    .module('Tao', ['firebase'])
    .constant('FirebaseUrl', 'http://ananda.firebaseapp.com/')
    .service('Tao', Service);

  function Service($q, FirebaseUrl, $firebaseRefProvider, $firebaseRef, $firebaseObject) {
    var self = this;

    // Constructor
    $firebaseRefProvider.registerUrl({
      default: FirebaseUrl,
      channels: FirebaseUrl + 'channels'
    });

    // API
    self.getChannel = getChannel;
    self.getRoot = getRoot;

    function getChannel(channelId) {
      var obj = $firebaseObject($firebaseRef.channels.child(channelId));
      return obj.$loaded();
    }
    function getRoot() {
      return $q(function (resolve, reject) {
        var root = $firebaseObject($firebaseRef.default.child('root')),
            obj;
        root.$loaded()
          .then(function () {
            obj = getChannel(root.$value);
            resolve(obj);
          })
          .catch(function (error) {
            reject(error);
          });
      });
    }
  }
}());
