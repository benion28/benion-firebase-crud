import * as firebase from "firebase";

/*
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.14.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.14.0/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCYX9LRwby4lMh2SHYV0Ah-De0JgVxBIqg",
    authDomain: "benion-database.firebaseapp.com",
    databaseURL: "https://benion-database.firebaseio.com",
    projectId: "benion-database",
    storageBucket: "benion-database.appspot.com",
    messagingSenderId: "391934444954",
    appId: "1:391934444954:web:8c014487b17dcce8b26623",
    measurementId: "G-9PBZGWNL1W"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>
*/

const firebaseConfig = {
    apiKey: "AIzaSyCYX9LRwby4lMh2SHYV0Ah-De0JgVxBIqg",
    authDomain: "benion-database.firebaseapp.com",
    databaseURL: "https://benion-database.firebaseio.com",
    projectId: "benion-database",
    storageBucket: "benion-database.appspot.com",
    messagingSenderId: "391934444954",
    appId: "1:391934444954:web:8c014487b17dcce8b26623",
    measurementId: "G-9PBZGWNL1W"
};

// Initialize Firebase
const firebaseObject = firebase.initializeApp(firebaseConfig);

export default firebaseObject.database().ref();