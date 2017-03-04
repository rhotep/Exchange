
  firebase.initializeApp(_jh_config.firebase)

  function writeUserData(userId, name, email, imageUrl) {
	  firebase.database().ref('users/' + userId).set({
	    username: name,
	    email: email,
	    profile_picture : imageUrl
	  })
	}



var app = angular.module('Test', [
	'ngMaterial',
	'firebase'
])


app.controller("SampleCtrl", function($scope, $firebaseArray) {
   var ref = firebase.database().ref().child("messages");
  // create a synchronized array
  // click on `index.html` above to see it used in the DOM!
  $scope.messages = $firebaseArray(ref);

  $scope.post = function(){
  	$scope.messages.$add({message: $scope.message, from: $scope.username})
  	$scope.message = ''
  }

});