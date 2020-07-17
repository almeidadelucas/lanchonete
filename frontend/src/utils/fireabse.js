import firebase from 'firebase';
import firebaseConfig from '../_config/firebase.json';
import { store } from '../store';
import { authActions } from '../actions/auth';
import Cookies from 'universal-cookie';
import { FIREBASE_ID_TOKEN } from '../constants/cookies.json';

const cookies = new Cookies();

firebase.initializeApp(firebaseConfig);
firebase.auth().useDeviceLanguage();

firebase.auth().onAuthStateChanged(user => store.dispatch(authActions.setCurrentUser(user)));

const singnInWithGoogle = (success, failed) => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then(result => {
      const idToken = result.credential.idToken;
      cookies.set(FIREBASE_ID_TOKEN, idToken);
      success('Login');
    })
    .catch(err => failed(err.message));
};

const signOut = (success, failed) => {
  firebase.auth().signOut()
    .then(() => {
      cookies.remove(FIREBASE_ID_TOKEN);
      success('Logout');
    })
    .catch(err => failed(err.message));
}

export default firebase;
export { singnInWithGoogle, signOut };
