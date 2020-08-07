import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBbo-GB8OrinU-dLTZJQGD7Hk3RK_gtfvw",
    authDomain: "tinder-clone-2b55e.firebaseapp.com",
    databaseURL: "https://tinder-clone-2b55e.firebaseio.com",
    projectId: "tinder-clone-2b55e",
    storageBucket: "tinder-clone-2b55e.appspot.com",
    messagingSenderId: "421865164404",
    appId: "1:421865164404:web:d82e88548c6c07bd950b21",
    measurementId: "G-NT6X2845H2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;