var express = require('express');
var router = express.Router();
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");
require("firebase/firestore");  

const firebaseConfig = {
  apiKey: "AIzaSyDtY3EfI2UIPsiSG-9PJrEQWclJ1ppAmdg",
  authDomain: "paperhomes-44719.firebaseapp.com",
  projectId: "paperhomes-44719",
  storageBucket: "paperhomes-44719.appspot.com",
  messagingSenderId: "1005204187826",
  appId: "1:1005204187826:web:49b167432e401c891977ab"
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

async function addUserData(db, data) {
  const docRef = db.collection('users').doc(db.collection("users").doc().id);
  firstname_ =  data['firstName']
  lastname_ = data['lastName']
  password_ = data['password']
  email_ = data['email']
  type_ = data['type']
  await docRef.set({
    firstName: firstname_,
    lastName: lastname_,
    email: email_,
    password: password_,
    type: type_,

  });
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.post('/user', function(req, res, next) {
  data = req.body
  console.log(data);

  addUserData(db, data)
  res.send("user");

});

module.exports = router;
