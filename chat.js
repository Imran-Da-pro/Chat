const firebaseConfig = {
    apiKey: "AIzaSyBT88lohg6S8v1CTr8nB2Fnr7V3hDLmjmw",
    authDomain: "chat-c95a5.firebaseapp.com",
    databaseURL: "https://chat-c95a5-default-rtdb.firebaseio.com",
    projectId: "chat-c95a5",
    storageBucket: "chat-c95a5.appspot.com",
    messagingSenderId: "718917116573",
    appId: "1:718917116573:web:3f2f994c1e62a0f338ea74"
  };
  
  
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



