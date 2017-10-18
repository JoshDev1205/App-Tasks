import * as firebase from 'firebase'
import settings from './settings'

const firebaseApp = firebase.initializeApp(settings)

export const auth = firebaseApp.auth()
export const db = firebaseApp.firestore()
export const storage = firebaseApp.storage()

export default firebaseApp
