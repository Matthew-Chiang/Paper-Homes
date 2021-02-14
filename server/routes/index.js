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

// async function addUserData(db, data) {
//   const docRef = db.collection('users').doc(data['email']);
//   firstname_ =  data['firstName']
//   lastname_ = data['lastName']
//   password_ = data['password']
//   email_ = data['email']
//   type_ = data['type']
//   // mailingAddres_ = data['mailingAddress']
//   await docRef.set({
//     firstName: firstname_,
//     lastName: lastname_,
//     email: email_,
//     password: password_,
//     type: type_,
//     // mailingAddress: mailingAddres_

//   });
// }

// async function updateUserData(db, data) {
//   const docRef = db.collection('users').doc(data['email']);
//   await docRef.set({
//     data
//   });
// }

async function addUserData(db, data) {
  const docRef = db.collection('users').doc(data['email']);
  await docRef.set(data);
}

async function quickstartListen(db,data) {
  // [START quickstart_listen]
  // [START firestore_setup_dataset_read]
  //const snapshot = await db.collection('users').doc(data).get();
  const userRef = db.collection('users').doc(data);
  // console.log(userRef);
  const doc = await userRef.get()
  const user = await doc.data();
  // if (!doc.exists) {
  //   console.log('No such document!');
  // } else {
  //   console.log('Document data:', doc.data());
  // }

  return doc.data();
  
  // [END firestore_setup_dataset_read]
  // [END quickstart_listen]
}


/* GET home page. */
router.post('/user', function(req, res, next) {
  data = req.body
  console.log(data);

  addUserData(db, data)
  res.send("user");

  
  
});
router.get("/user/:user_id", function (req, res, next) {
  const user_id = req.params.user_id;
  data = req.body;
  // console.log(user_id);

  // user = quickstartListen(db, user_id);
  // (async()=> {
  //   console.log(await quickstartListen(db,user_id))
  // })()
  quickstartListen(db,user_id).then(user =>{
    res.send(user);
  }) 
  //res.send("user");//quickstartListen(db, user_id));
});
/* GET user page. */
/*
router.getuser('/user', function(req, res, next) {
  data = req.body
  console.log(data);

  quickstartListen(db)
  res.send("user");

});
*/

// /* GET home page. */
// router.put('/user', function(req, res, next) {
//   data = req.body
//   console.log(data);

//   addUserData(db, data)
//   res.send("user");

// });

module.exports = router;
