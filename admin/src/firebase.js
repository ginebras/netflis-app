import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBDXCAeB_XYbHrgypKlu4hVR8enYVZ4DrU",
  authDomain: "netflis-alejo.firebaseapp.com",
  projectId: "netflis-alejo",
  storageBucket: "netflis-alejo.appspot.com",
  messagingSenderId: "153209952204",
  appId: "1:153209952204:web:aff7f830ea43a421e4af69",
  measurementId: "G-HCLBSHK1TT"
};

firebase.initializeApp(firebaseConfig);
const storage=firebase.storage();

export default storage;