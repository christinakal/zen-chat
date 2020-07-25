import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDhBiI7bBN7kQMaDrr2kj-TZ-idRSk-vuI",
  authDomain: "zenchat-e5a97.firebaseapp.com",
  databaseURL: "https://zenchat-e5a97.firebaseio.com",
  projectId: "zenchat-e5a97",
  storageBucket: "zenchat-e5a97.appspot.com",
  messagingSenderId: "19522844832",
  appId: "1:19522844832:web:d3c7bd433215e9ff6ff1c5",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth;
export const db = firebase.database();
