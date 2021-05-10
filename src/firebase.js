// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCQTLac5VhUwf3-0H9pqNkaO_S6y4wkRM8",
    authDomain: "todo-be2a5.firebaseapp.com",
    databaseURL: "https://todo-be2a5-default-rtdb.firebaseio.com",
    projectId: "todo-be2a5",
    storageBucket: "todo-be2a5.appspot.com",
    messagingSenderId: "199113826390",
    appId: "1:199113826390:web:d1f169c67202b1fed41bf7",
    measurementId: "G-FWS9P8SNK7"
})
const db=firebaseApp.firestore()
export default db