import firebase from "firebase/compat";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBlQWA4kC96rY3uYJuIVo4KALvZqIp6cuc",
    authDomain: "technological-combine.firebaseapp.com",
    projectId: "technological-combine",
    storageBucket: "technological-combine.appspot.com",
    messagingSenderId: "825549129412",
    appId: "1:825549129412:web:dc660375f32cd74e2deb91",
    measurementId: "G-03MGTHL5X1"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const config = {
    apiKey: "ADD-YOUR-DETAILS-HERE",
    authDomain: "ADD-YOUR-DETAILS-HERE",
    databaseURL: "ADD-YOUR-DETAILS-HERE"
};
firebase.initializeApp(config);
export const auth = firebase.auth();
export const db = firebase.database();
