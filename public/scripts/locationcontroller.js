'use strict';

angular.module('costeplaneApp')

.controller('LocationController', function($scope) {

      $scope.imagesLocation = [
    {
        id : 1,
        thumbUrl : 'images/img00.jpg',
        url : 'images/img00.jpg'
    },
    {
        id : 2,
        thumbUrl : 'images/img01.jpg',
        url : 'images/img01.jpg'
    },
    {
        id : 3,
        thumbUrl : 'images/img02.jpg',
        url : 'images/img02.jpg'
    },
    {
        id : 4,
        thumbUrl : 'images/img03.jpg',
        url : 'images/img03.jpg'
    },
    {
        id : 5,
        thumbUrl : 'images/img04.jpg',
        url : 'images/img04.jpg'
    },
    {
        id : 6,
        thumbUrl : 'images/location/room6.jpeg',
        url : 'images/location/room6.jpeg'
    },
    {
        id : 7,
        thumbUrl : 'images/location/room7.jpeg',
        url : 'images/location/room7.jpeg'
    },
    {
        id : 8,
        thumbUrl : 'images/location/bathroom1.jpeg',
        url : 'images/location/bathroom1.jpeg'
    },
    {
        id : 9,
        thumbUrl : 'images/location/bathroom2.jpeg',
        url : 'images/location/bathroom2.jpeg'
    },
    {
        id : 10, 
        thumbUrl : 'images/location/bathroom3.jpeg',
        url : 'images/location/bathroom3.jpeg'
    },
    {
        id : 11, 
        thumbUrl : 'images/location/bathroom4.jpeg',
        url : 'images/location/bathroom4.jpeg'
    },
    {
        id : 12,
        thumbUrl : 'images/location/bathroom5.jpeg',
        url : 'images/location/bathroom5.jpeg'
    }
   
          
];
    
    // gallery methods
$scope.methodsLocation = {};

// so you will bind openGallery method to a button on page
// to open this gallery like ng-click="openGallery();"
$scope.openGallery = function(){
    $scope.methodsLocation.open();

    // You can also open gallery model with visible image index
    // Image at that index will be shown when gallery modal opens
    //scope.methods.open(index); 
};

// Similar to above function
$scope.closeGallery = function(){
    $scope.methodsLocation.close();
};

$scope.nextImg = function(){
    $scope.methodsLocation.next();
};

$scope.prevImg = function(){
    $scope.methodsLocation.prev();
};

});