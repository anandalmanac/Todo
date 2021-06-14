//connecting to firebase database


import firebase from 'firebase';

const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyAA7d2B-sRF4IY1oSfnXeoBzdgELh6rP0Y",
    authDomain: "todo-5ab49.firebaseapp.com",
    projectId: "todo-5ab49",
    storageBucket: "todo-5ab49.appspot.com",
    messagingSenderId: "402652339513",
    appId: "1:402652339513:web:dbf6b5523ee72fc9539ce8",
    measurementId: "G-MRQY52D7KZ"
})
const db=firebaseApp.firestore();

export default db;













