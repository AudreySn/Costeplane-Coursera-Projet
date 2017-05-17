angular.module('costeplaneApp')

.service('reservationService', function($http, $q) {
    this.getAllReservations = function() {
        var defer = $q.defer();
        $http.get('/api/reservation').then(function(data) {
            defer.resolve(data);
        });
        return defer.promise;
    }

    this.postReservations = function (postData) {
            return $http.post('/api/reservation', postData);
    };
    
    this.deleteReservations = function (id) {
         return $http.delete('/api/reservation' + '/' + id);
    }
    
    this.updateReservations = function (postData) {
        return $http.put('/api/reservation' + '/' + postData.ID, postData)
    }

    
})





;