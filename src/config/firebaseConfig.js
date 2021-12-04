import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyChe3ITMkuAO7ejBi67rKBCiDJkpyUssGQ",
    authDomain: "mario-plan-8f62f.firebaseapp.com",
    projectId: "mario-plan-8f62f",
    storageBucket: "mario-plan-8f62f.appspot.com",
    messagingSenderId: "39894189351",
    appId: "1:39894189351:web:2eb060caeba871d23f5502",
    measurementId: "G-L1GP66888C"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase