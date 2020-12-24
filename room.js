var firebaseConfig = {
      apiKey: "AIzaSyARgq5zHYXqdDOlfza_hQ0Ll_6rrJwTJCs",
      authDomain: "kwitter-app-335b6.firebaseapp.com",
      databaseURL: "https://kwitter-app-335b6.firebaseio.com",
      projectId: "kwitter-app-335b6",
      storageBucket: "kwitter-app-335b6.appspot.com",
      messagingSenderId: "340476197190",
      appId: "1:340476197190:web:275b0a355cb922ad66cd47"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
function addroom(){
      room_name=document.getElementById("room_input").value;
      firebase.database().ref("/").child(room_name).update({
            message:"shriya added a room"
      });
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
