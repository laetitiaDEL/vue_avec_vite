import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAcJ2FxqHjiXlQwI5ziNwgt03ABXnELVaA",
  authDomain: "auth-e540d.firebaseapp.com",
  projectId: "auth-e540d",
  storageBucket: "auth-e540d.appspot.com",
  messagingSenderId: "101066105595",
  appId: "1:101066105595:web:c7045a8568f9c560a9865e"
};

firebase.initializeApp(firebaseConfig);
//! utilisation du router
createApp(App).use(router).mount('#app')
