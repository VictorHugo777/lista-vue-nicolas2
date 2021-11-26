import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDpnuW3jTDxgahxftAvWasAErH5635FfB4",
  authDomain: "todo-list-vue-80163.firebaseapp.com",
  projectId: "todo-list-vue-80163",
  storageBucket: "todo-list-vue-80163.appspot.com",
  messagingSenderId: "284979986529",
  appId: "1:284979986529:web:83735cd3d22d0bb7c72a20"
  };

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const auth = firebase.auth()

const profileCollection = db.collection('profile')
const tasksCollection = db.collection('tasks')

export {
    db, auth, profileCollection, tasksCollection
}