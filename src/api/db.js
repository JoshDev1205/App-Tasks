import { db } from './firebase'

const usersRef = db.collection('users')
const tasksRef = db.collection('tasks')

export default {
  postUser (userObj) {
    const user = {
      id: userObj.id,
      name: userObj.name,
      lastName: userObj.lastName,
      email: userObj.email,
      isAdmin: false
    }

    usersRef.doc(userObj.id).set(user)
      .then(() => user)
  },

  getUserByEmail (email) {
    
  }
}
