// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAcxyUjyPjnsXTnJorsZoR9d1eVdzoYPIo",
    authDomain: "train-time-project.firebaseapp.com",
    databaseURL: "https://train-time-project.firebaseio.com",
    projectId: "train-time-project",
    storageBucket: "",
    messagingSenderId: "135207133392"
  };
  firebase.initializeApp(config);
  console.log("firebase initialized")

  var database=firebase.database();
 console.log("firebase created")
 
  $('body').on("click","#add-train",function(){

      //event.preventdefault();

    var trainName=$('#trainname-input').val().trim();
    var destination= $('#destination-input').val().trim();
    var firstTrainTime=$('#firsttraintime-input').val().trim();
    var frequency=$('#frequency-input').val().trim();

    console.log(trainName)

    database.ref().push({
      // database.ref().set({
        name: trainName,
        destination: destination,
        firsttraintime: firstTrainTime,
        frequency: frequency,
        dateAdded:firebase.database.ServerValue.TIMESTAMP
      });

  });


  database.ref().on("child_added", function(childSnapSpot){

    console.log(childSnapSpot.val().name);
    console.log(childSnapSpot.val().destination);
    console.log(childSnapSpot.val().firsttraintime);
    //console.log(childSnapSpot.val().frequency);
    //console.log(childSnapSpot.val().dateAdded);

  
    $('table tr:last')
    .after(
      '<tr><td>' + childSnapSpot.val().name 
      + '</td><td>' + childSnapSpot.val().destination
      + '</td><td>' + childSnapSpot.val().frequency
      + '</td><td></td><td></td><td>'
      )

  });