module.exports = {
  ...require("./controllers/user"),
};
// const functions = require("firebase-functions");
// const express = require("express");
// const cors = require("cors");

// const admin = require("firebase-admin");
// admin.initializeApp();

// const db = admin.firestore();

// const app = express();

// app.use(cors({ origin: true }));

// app.get("/", async (req, res) => {
//   const snapshot = await db.collection("users").get();
//   let users = [];
//   snapshot.forEach((doc) => {
//     let id = doc.id;
//     let data = doc.data();
//     users.push({ id, ...data });
//   });
//   res.status(200).send(JSON.stringify(users));
// });

// app.get("/:id", async (req, res) => {
//   const snapshot = await admin
//     .firestore()
//     .collection("users")
//     .doc(req.params.id)
//     .get();
//   const userId = snapshot.id;
//   const userData = snapshot.data();
//   res.status(200).send(JSON.stringify({ id: userId, ...userData }));
// });

// app.post("/", async (req, res) => {
//   const user = req.body;
//   await db.collection("users").add(user);
//   res.status(201).send();
// });

// app.put("/:id", async (req, res) => {
//   const body = req.body;
//   await db.collection("users").doc(req.params.id).update(body);
//   res.status(200).send();
// });

// app.delete("/:id", async (req, res) => {
//   await db.collection("users").doc(req.params.id).delete();
//   res.status(200).send();
// });

// exports.user = functions.https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

// // exports.helloWorld = functions.https.onRequest((request, response) => {
// //   functions.logger.info("Hello logs!", { structuredData: true });
// //   response.send("Hello from Firebase!");
// // });
