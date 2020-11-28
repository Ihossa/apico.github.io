import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {  
apiKey: "AIzaSyBd9gatonPMiQFxldPEtzeVwRdC0Swwofw",
authDomain: "api-apico.firebaseapp.com",
databaseURL: "https://api-apico.firebaseio.com",
projectId: "api-apico",
storageBucket: "api-apico.appspot.com",
messagingSenderId: "274767631099",
appId: "1:274767631099:web:542a3987a0c8fe0e80d65e"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : ''
  
export default firebase