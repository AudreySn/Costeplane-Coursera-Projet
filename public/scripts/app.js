'use strict';

angular.module('costeplaneApp', ['ui.router', 'ui.bootstrap','ui.navbar', 'ngAnimate', 'ngTouch', 'thatisuday.ng-image-gallery', 'ngDialog'] )
.config(function($stateProvider, $urlRouterProvider, ngImageGalleryOptsProvider) {
        $stateProvider
        
            // route for the home page
            .state('app', {
                url:'/',
                views: {
                    'header': {
                        templateUrl : 'views/header.html',
                        controller: 'NavigationController'
                    },
                    'content': {
                        templateUrl : 'views/home.html',
                        controller: 'MainCtrl'
                    },
                    'footer': {
                        templateUrl : 'views/footer.html',
                    }
                }

            })
            
               .state('app.contact', {
                url:'CO',
                views: {
                    'content@': {
                        templateUrl : 'views/contact.html',
                        controller  : 'ContactController'                  
                    }
                }
            })
        
            .state('app.location', {
                url:'LO',
                views: {
                    'content@': {
                        templateUrl : 'views/location.html',
                        controller  : 'LocationController'                  
                    }
                }
            })
        
              .state('app.reservation', {
                url:'RE',
                views: {
                    'content@': {
                        templateUrl : 'views/reservation.html',
                        controller  : 'ReservationController'                  
                    }
                }
            })
            .state('app.english', {
                url:'EN',
                views: {
                     'header@': {
                        templateUrl : 'views/English/ENheader.html',
                        controller: 'NavigationController'
                    },
                    'content@': {
                        templateUrl : 'views/home.html',
                        controller  : 'MainCtrl'                  
                    }
                }
            })
        
              .state('app.encontact', {
                url:'EN/CO',
                views: {
                     'header@': {
                        templateUrl : 'views/English/ENheader.html',
                        controller: 'NavigationController'
                    },
                    'content@': {
                        templateUrl : 'views/English/ENcontact.html',
                        controller  : 'ContactController'                  
                    }
                }
            })
        
               .state('app.enreservation', {
                url:'EN/RE',
                views: {
                     'header@': {
                        templateUrl : 'views/English/ENheader.html',
                        controller: 'NavigationController'
                    },
                    'content@': {
                        templateUrl : 'views/English/ENreservation.html',
                        controller  : 'ReservationController'                  
                    }
                }
            })
            
               .state('app.enlocation', {
                url:'EN/LO',
                views: {
                    'content@': {
                        templateUrl : 'views/English/ENlocation.html',
                        controller  : 'LocationController'                  
                    }
                }
            })
        
            
            
            
            
            ;
    
        $urlRouterProvider.otherwise('/');
    
        ngImageGalleryOptsProvider.setOpts({
        thumbnails  :   true,   
        inline      :   false,
        imgBubbles  :   false, 
        bgClose     :   true,
        bubbles     :   true, 
        imgAnim     :   'slide',
    });
    

    })
;
