'use strict';

angular.module('costeplaneApp')

.controller('ReservationController', function($scope, $timeout, $locale, $filter, $q, reservationService, $http, ngDialog) {
//INITIALIZE VARIABLES
    $scope.firstName = '';
    $scope.lastName ='';
    $scope.email ='';
// SET SHOW FUNCTION FOR RESERVATION STATUS
    $scope.showfunction = function() {
        $scope.showReservationCompleted = false;
        $scope.showReservationUpdated = false;
        $scope.showReservationDeleted = false;
    }

    $scope.showfunction();

// GET ALL RESERVATIONS FUNCTION FROM MONGODB (UNWRAPS THE PROMISE MADE IN SERVICES.JS )

    reservationService.getAllReservations().then(
        function(data) {
            
            $scope.allReservations = data.data;
            console.log($scope.allReservations);
        }, function() {
            console.log("Controller error.")
        }
    );

// FORM SUBMISSION --> POST TO DATABASE THAT RESERVATIONS HAS BEEN MADE
    
    $scope.submitReservation = function() {
        $scope.showfunction();
        $scope.dt =$filter('date')($scope.dt, "yyyy-MM-dd");
        $scope.dt2 =$filter('date')($scope.dt2, "yyyy-MM-dd");
        var postData = {firstName: $scope.firstName, lastName: $scope.lastName, email: $scope.email, startDate: $scope.dt, endDate: $scope.dt2}
    

        reservationService.postReservations(postData).then(
        function(data) {
            data = postData;
            console.log("yeah");
            $scope.showReservationCompleted = true;
            $scope.form.$setPristine();

        }, function() {
            console.log("Controller error.")
        }
    );
   }
    
// FORM MODIFIACTION --> UPDATES DATABASE IF RESERVATION HAS BEEN MODIFIED, GETS USER ID AND THEN MODIFIES THE DB/ IF THE USER ID + FIRST NAME + LAST NAME DON'T EXIST THEN THE FORM POSTS TO DB.

$scope.updateReservation = function() {
     $scope.showfunction();
    
     var postData = {firstName: $scope.firstName, lastName: $scope.lastName, email: $scope.email, startDate: $scope.dt, endDate: $scope.dt2};
    
    reservationService.getAllReservations().then(
    function(data) {
        $scope.allReservations = data.data;
        
        for (var i in $scope.allReservations) {
            if (( $scope.allReservations[i].firstName === $scope.firstName) && ($scope.allReservations[i].lastName = $scope.lastName) && ($scope.allReservations[i].email === $scope.email)){
                
                
                postData.ID = $scope.allReservations[i]._id;
                
                reservationService.updateReservations(postData).then(
                      function(data) {
                        data = postData;
                        console.log("yeah updated");
                        $scope.showReservationUpdated = true;
                
                    }, function() {
                        console.log("Controller error.")
                    }
                )
            }
            
            else {
                reservationService.postReservations(postData).then(
            function(data) {
                data = postData;
                console.log("yeah");
               // $scope.showReservationCompleted = true;
            }, function() {
                console.log("Controller error.")
            }
           );
                
            }
        }
    }, function() {     
           
    })
}

$scope.deleteReservation = function() {
        $scope.showfunction();
      var postData = {firstName: $scope.firstName, lastName: $scope.lastName, email: $scope.email, startDate: $scope.dt, endDate: $scope.dt2};

      reservationService.getAllReservations().then(
            function(data) {
                $scope.allReservations = data.data;

                for (var i in $scope.allReservations) {
                        $scope.dt =$filter('date')($scope.dt, "yyyy-MM-dd");
                        $scope.dt2 =$filter('date')($scope.dt2, "yyyy-MM-dd");
                        $scope.allReservations[i].startDate =$filter('date')($scope.allReservations[i].startDate, "yyyy-MM-dd");
                        $scope.allReservations[i].endDate =$filter('date')($scope.allReservations[i].endDate, "yyyy-MM-dd");
                    
                        console.log($scope.dt, $scope.allReservations[i].startDate);
                        console.log($scope.dt2, $scope.allReservations[i].endDate);
                    
                    
                      if (( $scope.allReservations[i].firstName === $scope.firstName) && ($scope.allReservations[i].lastName = $scope.lastName) && ($scope.allReservations[i].email === $scope.email) && ($scope.allReservations[i].startDate === $scope.dt) && ($scope.allReservations[i].endDate === $scope.dt2)) {
                          
                          console.log("lalal")
                          
                          reservationService.deleteReservations($scope.allReservations[i]._id).then(
                            function(data) {
                                data = postData;
                                console.log("yeah deleted");
                                $scope.showReservationDeleted = true;
                            }, function() {
                                console.log("Controller error.")
                            }
                          
                          )
                          
                          
                      }
                    
                }

    })
    
}
 

   /* $http.post("/api/reservation/", postData).then(function(data, status) {

            $scope.hello = data;
        console.log('yeah')

        }) */



$scope.today = function() {
    $scope.dt = new Date();
    console.log($scope.dt);
    $scope.dt2 = new Date().setDate(new Date().getDate() +7);
 //  var date2 = $scope.dt;
   // var numberofdays = 7;
    //$scope.dt2 = date2.setDate(date2.getDate()+numberofdays);
   console.log($scope.dt);

  };
$scope.dt2 = $scope.dt;
  $scope.today();

  $scope.clear = function() {
    $scope.dt = null;
    $scope.dt2 = null;
  };

  $scope.inlineOptions = {
    customClass: getDayClass,
    minDate: new Date(),
    showWeeks: true
  };

  $scope.dateOptions = {
    dateDisabled: disabled,
    formatYear: 'yy',
    maxDate: new Date(2020, 5, 22),
    minDate: new Date(),
    startingDay: 6
  };
    
 $scope.dateOptions2 = {
        dateDisabled: disabled,
        formatYear: 'yy',
        maxDate: new Date(2020, 5, 22),
        minDate: new Date(),
        startingDay: 6
      };

     $scope.dt2 = new Date().setDate(new Date().getDate()+7);
    $scope.changedt = function() {
     var date=$scope.dt;
        $scope.dt2=new Date(date).setDate(new Date(date).getDate()+7);
      
    
    $scope.dateOptions2 = {
        dateDisabled: disabled,
        formatYear: 'yy',
        maxDate: new Date(2020, 5, 22),
        minDate: $scope.dt2,
        startingDay: 6
      };
     
       $scope.dateOptions = {
        dateDisabled: disabled,
        formatYear: 'yy',
        maxDate: new Date(2020, 5, 22),
        minDate: new Date(),
        startingDay: 6
      };
    }


  // Disable weekend selection
  function disabled(data) {
    var date = data.date,
      mode = data.mode;
    return mode === 'day' && (date.getDay() === 1 || date.getDay() === 2 || date.getDay() === 3 || date.getDay() === 4 || date.getDay() === 5|| date.getDay() === 0);
  }

  $scope.toggleMin = function() {
    $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
    $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
  };

  $scope.toggleMin();

  $scope.open1 = function() {
    $scope.popup1.opened = true;
    
      $scope.dateOptions = {
        dateDisabled: disabled,
        formatYear: 'yy',
        maxDate: new Date(2020, 5, 22),
        minDate: new Date(),
        startingDay: 6
      };
    
  };

  $scope.open2 = function() {
    $scope.popup2.opened = true;
  };

  $scope.setDate = function(year, month, day) {
    $scope.dt = new Date(year, month, day);
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'dd/MM/yyyy', 'shortDate'];
  $scope.format = $scope.formats[3];
  $scope.altInputFormats = ['M!/d!/yyyy'];

  $scope.popup1 = {
    opened: false
  };

  $scope.popup2 = {
    opened: false
  };

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date();
  afterTomorrow.setDate(tomorrow.getDate() + 1);
  $scope.events = [
    {
      date: tomorrow,
      status: 'full'
    },
    {
      date: afterTomorrow,
      status: 'partially'
    }
  ];

  function getDayClass(data) {
    var date = data.date,
      mode = data.mode;
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i = 0; i < $scope.events.length; i++) {
        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

        if (dayToCheck === currentDay) {
          return $scope.events[i].status;
        }
      }
    }

    return '';
  }

});