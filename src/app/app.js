"use strict";

var app = angular.module('BlurAdmin', [
  'ui.sortable',
  'ngRoute',
  'BlurAdmin.dashboard',
  'BlurAdmin.buttonsPage',
  'BlurAdmin.chartsPage',
  'BlurAdmin.formInputsPage',
  'BlurAdmin.formLayoutsPage',
  'BlurAdmin.iconsPage',
  'BlurAdmin.mapsPage',
  'BlurAdmin.modalsPage',
  'BlurAdmin.profilePage',
  'BlurAdmin.tablesPage',
  'BlurAdmin.typographyPage',
  'toastr'
]).config(['$routeProvider', 'toastrConfig', function ($routeProvider, toastrConfig) {
  $routeProvider.otherwise({redirectTo: '/dashboard'});

  angular.extend(toastrConfig, {
    closeButton: true,
    closeHtml: '<button>&times;</button>',
    timeOut: 5000,
    autoDismiss: false,
    containerId: 'toast-container',
    maxOpened: 0,
    newestOnTop: true,
    positionClass: 'toast-top-right',
    preventDuplicates: false,
    preventOpenDuplicates: false,
    target: 'body'
  });
}]);