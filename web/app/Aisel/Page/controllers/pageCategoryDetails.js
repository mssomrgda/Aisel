'use strict';

/**
 * @ngdoc overview
 * @name Aisel
 *
 * @description
 * ...
 */

define(['app'], function (app) {
    app.controller('PageCategoryDetailCtrl', ['$location', '$scope', '$routeParams', 'pageService', 'pageCategoryService',
        function ($location, $scope, $routeParams, pageService, pageCategoryService) {

            $scope.pageLimit = 5;
            $scope.paginationPage = 1;
            $scope.categoryId = $routeParams.categoryId;

            // Category Information
            pageCategoryService.getCategory($scope.categoryId).success(
                function (data, status) {
                    $scope.categoryDetails = data;
                }
            );

            // Pages
            pageService.getPages($scope).success(
                function (data, status) {
                    $scope.pageList = data;
                }
            );

            $scope.pageChanged = function (page) {
                $scope.paginationPage = page;
                pageService.getPages($scope).success(
                    function (data, status) {
                        $scope.pageList = data;
                    }
                );
            };
        }]);
});