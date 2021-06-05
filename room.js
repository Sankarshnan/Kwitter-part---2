var firebaseConfig = {
    apiKey: "AIzaSyCDmmN702bKmwuqQIx6R2qj9boV8kUsymo",
    authDomain: "kwitter-web-page-58c31.firebaseapp.com",
    databaseURL: "https://kwitter-web-page-58c31-default-rtdb.firebaseio.com",
    projectId: "kwitter-web-page-58c31",
    storageBucket: "kwitter-web-page-58c31.appspot.com",
    messagingSenderId: "47344169659",
    appId: "1:47344169659:web:28f1a479d3a9acc51c2f9e",
    measurementId: "G-5G29DJJH8C"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addRoom(){
    Room_name = document.getElementById("room_name").value

      firebase.database().ref("/").child(Room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", Room_name)

     window.location = "chat.html"
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      localStorage.removeItem("passcode");
          window.location = "index.html";
}