import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBh5IJ9on9YKmlIi7NhUc-bPlVl2UccY90",
  authDomain: "netflix-clone-c8018.firebaseapp.com",
  projectId: "netflix-clone-c8018",
  storageBucket: "netflix-clone-c8018.appspot.com",
  messagingSenderId: "1023678178821",
  appId: "1:1023678178821:web:1ff41ccaffe625f1ca5e6c",
};



const firebaseApp = initializeApp(firebaseConfig);


const db = getFirestore(firebaseApp);


const auth = getAuth(firebaseApp);


export{auth};
export default db;
