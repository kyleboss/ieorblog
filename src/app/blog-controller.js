angular.module('ieorblog.blog', []);

angular
    .module('ieorblog.blog')
    .controller('ModalInstanceCtrl', function ($scope, $modalInstance) {

  $scope.ok = function () {
    $(".blog-video").each(function () { this.pause() });
    $modalInstance.close();
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});

angular
  .module('ieorblog.blog')
  .controller('IeorBlogController', function ($scope, $window, $modal) {
    'use strict';

      $scope.open = function (size) {

        //$scope.animationsEnabled = true;
        //
        //$scope.toggleAnimation = function () {
        //  $scope.animationsEnabled = !$scope.animationsEnabled;
        //};

        var modalInstance = $modal.open({
          animation: $scope.animationsEnabled,
          templateUrl: 'video-template.html',
          controller: 'ModalInstanceCtrl',
          size: size
        });
      };

  });
