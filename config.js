import firebase from "firebase"

 var firebaseConfig = {
    apiKey: "AIzaSyByh6FfRkqnRmEAcUg-z6utcsC_zK0_p7E",
    authDomain: "student-attendance-app-c8db8.firebaseapp.com",
    databaseURL: "https://student-attendance-app-c8db8-default-rtdb.firebaseio.com",
    projectId: "student-attendance-app-c8db8",
    storageBucket: "student-attendance-app-c8db8.appspot.com",
    messagingSenderId: "416910015267",
    appId: "1:416910015267:web:45ac15bdc593efaf6caa96"
  };

  firebase.initializeApp(firebaseConfig)


export default firebase.database()