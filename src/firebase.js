// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase,get,ref } from "firebase/database";
import {getFirestore, doc, setDoc,getDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsqpb0g9fePSN_RCAhVx_UWnZCASuehPs",
  authDomain: "healthify-43543.firebaseapp.com",
  projectId: "healthify-43543",
  storageBucket: "healthify-43543.appspot.com",
  messagingSenderId: "757220017838",
  appId: "1:757220017838:web:1a60be475b843df9f10f3f",
  databaseURL: "https://healthify-43543-default-rtdb.asia-southeast1.firebasedatabase.app"
};

// Initialize Firebase
const fapp = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase(fapp);
const dbref =  ref(database, "/");
const db = getFirestore(fapp);


export const createUser = async (email, password) => {
 try {
    const result = await createUserWithEmailAndPassword(auth, email, password)
    return result.user;
 } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("createUser::", errorCode, errorMessage);
    return errorMessage;
 }
}

export const loginUser = async (email, password) => {
    try {
       const result = await signInWithEmailAndPassword(auth, email, password)
       return result.user;
    } catch (error) {
       const errorCode = error.code;
       const errorMessage = error.message;
       console.error("signinUser::", errorCode, errorMessage);
       return errorMessage;
    }
}

export const getRealtimeData = async () => {
   try {
      const snapshot = await get(dbref);
      if (snapshot.exists()) {
         return snapshot.val();
      } else {
        console.log("No data available");
      }
       
   } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("signinUser::", errorCode, errorMessage);
      return errorMessage;
   }
}


export const setPresData = async (data) => {
   try {
      const docRef = doc(db, "pre", "pre");
      await setDoc(docRef, data);
      console.log("Document written");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
}


export const getPresData = async () => {
   try {
      const docRef = doc(db, "pre", "pre");
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
         const data =  docSnap.data()
        console.log("Document data:", data);
        return data;
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error adding document: ", error);
    }
}

export const setUserData = async (data) => {
   try {
      const docRef = doc(db, "users", data.email);
      await setDoc(docRef, data);
      console.log("Document written");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
}

export const getUserData = async (email) => {
   try {
      const docRef = doc(db, "users", email);
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
         const data =  docSnap.data()
        console.log("Document data:", data);
        return data;
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error adding document: ", error);
    }
}


export const setDoctorData = async (data) => {
   try {
      const docRef = doc(db, "docs", data.email);
      await setDoc(docRef, data);
      console.log("Document written");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
}

export const getDoctorData = async (email) => {
   try {
      const docRef = doc(db, "docs", email);
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
         const data =  docSnap.data()
        console.log("Document data:", data);
        return data;
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error adding document: ", error);
    }
}