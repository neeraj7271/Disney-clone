
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/database";
import "firebase/compat/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
//   authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
//   projectId: "disneyplus-clone-a33d5",
//   storageBucket: "disneyplus-clone-a33d5.appspot.com",
//   messagingSenderId: "37918794208",
//   appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
//   measurementId: "G-DRVLJKWRWG",
// };


const firebaseConfig = {
  apiKey: "AIzaSyA_VqtiaI0CNH-ZaTb_9cCG1RvJXdIsMeg",
  authDomain: "disneyplusclone-62304.firebaseapp.com",
  projectId: "disneyplusclone-62304",
  storageBucket: "disneyplusclone-62304.appspot.com",
  messagingSenderId: "401200648573",
  appId: "1:401200648573:web:44056d2ce023ab6b5dbc14"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore(firebaseApp);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
 
export { auth, provider, storage };

export default db;
