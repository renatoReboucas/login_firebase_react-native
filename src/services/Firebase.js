import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: 'AIzaSyAPOct4rmXlktB9f259wWKNMIl3fRUiSuE',
  authDomain: 'teste-286704.firebaseapp.com',
  databaseURL: 'https://teste-286704.firebaseio.com',
  projectId: 'teste-286704',
  storageBucket: 'teste-286704.appspot.com',
  messagingSenderId: '491904435983',
  appId: '1:491904435983:web:ec9facdace65e2be70e07a',
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
