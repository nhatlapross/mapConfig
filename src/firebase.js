import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {

  apiKey: "AIzaSyC_d9mG00x9DA9oD-yII4AvkC_jqgMQDcI",

  authDomain: "xecanbang-eb813.firebaseapp.com",

  databaseURL: "https://xecanbang-eb813.firebaseio.com",

  projectId: "xecanbang-eb813",

  storageBucket: "xecanbang-eb813.appspot.com",

  messagingSenderId: "288623289413",

  appId: "1:288623289413:web:cc096984651e047f236f2c"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {app, auth}