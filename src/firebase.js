import firebase from 'firebase/app';
import "firebase/database";
const firebaseConfig = {
    apiKey: "AIzaSyCKPAhbEMtIqOUOA5Tc8lnen7tJAPv8B9g",
    authDomain: "vue-fb-cda.firebaseapp.com",
    databaseURL: "https://vue-fb-cda-default-rtdb.firebaseio.com",
    projectId: "vue-fb-cda",
    storageBucket: "vue-fb-cda.appspot.com",
    messagingSenderId: "124687094352",
    appId: "1:124687094352:web:4240c9cbf01b49e0f17755"
  };
firebase.initializeApp(firebaseConfig);
export default firebase.database();