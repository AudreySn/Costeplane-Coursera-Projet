'use strict';

angular.module('costeplaneApp')

.controller('QuevoirController', function($scope, $timeout, $interval) {

  $scope.model = {
    name: 'Tabs'
  };
    
    
    $scope.images = [
    {
        thumbUrl : 'images/ete/ChaosMontpellierLeVieux.jpg',
        url : 'images/ete/ChaosMontpellierLeVieux.jpg'
    },
    {
        thumbUrl : 'images/ete/canoe.jpeg',
        url : 'images/ete/canoe.jpeg'
    },
    {
        thumbUrl : 'images/ete/ladourbie.jpg',
        url : 'images/ete/ladourbie.jpg'
    },
    {
        thumbUrl : 'images/ete/piscine.jpg',
        url : 'images/ete/piscine.jpg'
    }
];
    
    // gallery methods
$scope.methods = {};

// so you will bind openGallery method to a button on page
// to open this gallery like ng-click="openGallery();"
$scope.openGallery = function(){
    $scope.methods.open();

    // You can also open gallery model with visible image index
    // Image at that index will be shown when gallery modal opens
    //scope.methods.open(index); 
};

// Similar to above function
$scope.closeGallery = function(){
    $scope.methods.close();
};

$scope.nextImg = function(){
    $scope.methods.next();
};

$scope.prevImg = function(){
    $scope.methods.prev();
};
    
     
    $scope.images2 = [
    {
        thumbUrl : 'images/ete/ChaosMontpellierLeVieux.jpg',
        url : 'images/ete/ChaosMontpellierLeVieux.jpg'
    },
    {
        thumbUrl : 'images/ete/canoe.jpeg',
        url : 'images/ete/canoe.jpeg'
    },
    {
        thumbUrl : 'images/ete/ladourbie.jpg',
        url : 'images/ete/ladourbie.jpg'
    },
    {
        thumbUrl : 'images/ete/piscine.jpg',
        url : 'images/ete/piscine.jpg'
    }
];
    
    // gallery methods
$scope.methods2 = {};

// so you will bind openGallery method to a button on page
// to open this gallery like ng-click="openGallery();"
$scope.openGallery = function(){
    $scope.methods2.open();

    // You can also open gallery model with visible image index
    // Image at that index will be shown when gallery modal opens
    //scope.methods.open(index); 
};

// Similar to above function
$scope.closeGallery = function(){
    $scope.methods2.close();
};

$scope.nextImg = function(){
    $scope.methods2.next();
};

$scope.prevImg = function(){
    $scope.methods2.prev();
};

});