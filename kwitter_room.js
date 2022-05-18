var firebaseConfig = {
      apiKey: "AIzaSyDzUkwjLcFKd1CCrpTp-62lwopFN5iLs7k",
      authDomain: "kwitter-379ea.firebaseapp.com",
      databaseURL: "https://kwitter-379ea-default-rtdb.firebaseio.com",
      projectId: "kwitter-379ea",
      storageBucket: "kwitter-379ea.appspot.com",
      messagingSenderId: "1089918263140",
      appId: "1:1089918263140:web:0fe4bb80ea239fa5752471"
    };

firebase.initializeApp(firebaseConfig);
username = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
//ADD YOUR FIREBASE LINKS HERE
function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}


function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id='" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}

function redirectToRoomName(name) {console.log(name)
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

getData();
