import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCJNwu8QCxnabaPs_HStPFtz6YNJRv0nwQ",
    authDomain: "baas-waldo.firebaseapp.com",
    databaseURL: "https://baas-waldo.firebaseio.com",
    projectId: "baas-waldo",
    storageBucket: "baas-waldo.appspot.com",
    messagingSenderId: "614705905258",
    appId: "1:614705905258:web:931a249f66acebd0c79413",
    measurementId: "G-MQ2YVCD2F9"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
