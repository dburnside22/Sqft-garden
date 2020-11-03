// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmZ6bPsZIJCDxmWctWkcrvpAAMiC7FwDY",
  authDomain: "plantdata-53c8c.firebaseapp.com",
  databaseURL: "https://plantdata-53c8c.firebaseio.com",
  projectId: "plantdata-53c8c",
  storageBucket: "plantdata-53c8c.appspot.com",
  messagingSenderId: "155688130868",
  appId: "1:155688130868:web:522d224f27c254c5e1ad61",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();

function testing() {
  database
    .collection("plants")
    .doc("kohlrabi")
    .set({
      plantName: "kohlrabi",
      spacing: 4,
      seedMonths: ["february", "march", "april", "august", "september"],
      transplantMonths: ["february", "march", "april", "august", "september"],
      houseMonths: ["december", "january"],
    })
    .then(() => {
      console.log("it sent the data!");
    })
    .catch(() => {
      console.log("it didn't work out");
    });
}

// testing();
