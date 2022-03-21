import firebase from "firebase";

// config for firebase
let firebaseConfig = {
  apiKey: "AIzaSyARCEDJL4euoC8E6y7Xzq5aSqUGsS13hrg", // Add your API Key
  databaseURL:
    "https://gmeetclone-default-rtdb.asia-southeast1.firebasedatabase.app/", // Ad your Realtime databaseURL
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase;

let firepadRef = firebase.database().ref();

export const userName = prompt("Enter your name and join the meet!");
const urlparams = new URLSearchParams(window.location.search);
const roomId = urlparams.get("id");

// if we have a room ID in the params we join the meet else we create a meet and enter that
if (roomId) {
  firepadRef = firepadRef.child(roomId);
} else {
  firepadRef = firepadRef.push();
  window.history.replaceState(null, "Meet", "?id=" + firepadRef.key);
}

export default firepadRef;
