import { initializeApp } from "firebase/app";
import{getAuth,GoogleAuthProvider,signInWithPopup,signOut} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAUNPfj2g31rXl1qFDGYJzhR_jgeqrY7SQ",
  authDomain: "react-js-demo-c8ffb.firebaseapp.com",
  projectId: "react-js-demo-c8ffb",
  storageBucket: "react-js-demo-c8ffb.appspot.com",
  messagingSenderId: "185918390322",
  appId: "1:185918390322:web:4e09ef0087dddeeeec7c2b"
};

//Intilizefirebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export  const provider=new GoogleAuthProvider();

export const signInWithGoogle=()=>{
    signInWithPopup(auth,provider).then((result)=>{
        console.log(result)
    }).catch(error=>console.log(error))

}
export const clickLogin = () => {
      signOut(auth);
  };