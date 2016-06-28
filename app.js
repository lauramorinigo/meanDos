/*Mean Clase 2 JS*/
var app = angular.module('StarterApp', ['ngMaterial', 'ngMdIcons']);

app.controller('AppCtrl', ['$scope', '$mdBottomSheet','$mdSidenav', '$mdDialog', function($scope, $mdBottomSheet, $mdSidenav, $mdDialog){
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };

  $scope.menu = [
    {
      link : '',
      title: 'Inicio',
      icon: 'dashboard'
    },
    {
      link : '',
      title: 'Rockers',
      icon: 'group'
    },
    {
      link : '',
      title: 'Mensajes',
      icon: 'message'
    }
  ];
  $scope.admin = [
    {
      link : '',
      title: 'Borrar',
      icon: 'delete'
    },
    {
      link : 'showListBottomSheet($event)',
      title: 'Configuracion',
      icon: 'settings'
    }
  ];
}]);