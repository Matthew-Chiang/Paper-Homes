var express = require("express");
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
    appId: "1:1005204187826:web:49b167432e401c891977ab",
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
    const docRef = db.collection("users").doc(data["email"]);
    await docRef.set(data);
    await docRef.update({ createddate: "2021-02-14" });
}

async function quickstartListen(db, data) {
    // [START quickstart_listen]
    // [START firestore_setup_dataset_read]
    //const snapshot = await db.collection('users').doc(data).get();
    const userRef = db.collection("users").doc(data);
    // console.log(userRef);
    const doc = await userRef.get();
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
router.post("/user", function (req, res, next) {
    data = req.body;
    console.log(data);

    addUserData(db, data);
    res.send("user");
});
router.get("/user/:user_id", function (req, res, next) {
    const user_id = req.params.user_id;
    data = req.body;
    quickstartListen(db, user_id).then((user) => {
        res.send(user);
    });
});

router.get(
    "/address/getAddressForUser/:userid",
    async function (req, res, next) {
        const userid = req.params.userid;

        const addresses = await db
            .collection("address")
            .where("email", "==", userid)
            .get();
        if (addresses.empty) {
            console.log(
                "No matching addresses - /address/getAddressForUser/:userid"
            );
            return;
        }
        const dbAddress = [];
        addresses.forEach((doc) => {
            dbAddress.push({ ...doc.data(), address: doc.id });
        });
        res.send(dbAddress);
    }
);

router.post("/address/createAddresses", async function (req, res, next) {
    const addresses = req.body.addresses;
    addresses.forEach(async (address) => {
        const docRef = db.collection("address").doc(address.address);
        await docRef.set({ ...address, numUsed: 0, verified: false });
    });
    res.send({ msg: "success" });
});

router.post("/address/incrementAddress", async function (req, res, next) {
    const address = req.body.address;
    const docRef = db.collection("address").doc(address);
    await docRef.update({
        numUsed: firebase.firestore.FieldValue.increment(1),
    });
    res.send({ msg: "success" });
});

router.post("/address/decrementAddress", async function (req, res, next) {
    const address = req.body.address;
    const docRef = db.collection("address").doc(address);
    await docRef.update({
        numUsed: firebase.firestore.FieldValue.increment(-1),
    });
    res.send({ msg: "success" });
});

router.get("/address/getLeastUsedAddress", async function (req, res, next) {
    // console.log(db.collection("address").orderBy("numUsed").get());
    const address = await db
        .collection("address")
        .orderBy("numUsed")
        .limit(1)
        .get();

    if (address.empty) {
        console.log("No matching addresses - /address/getLeastUsedAddress");
        return;
    }
    let dbAddress;
    address.forEach((doc) => {
        dbAddress = { ...doc.data(), address: doc.id };
    });

    res.send(dbAddress);
});

module.exports = router;
