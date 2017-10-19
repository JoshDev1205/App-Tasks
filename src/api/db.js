import { db } from './firebase'

const usersRef = db.collection('users')
/* const tasksRef = db.collection('tasks')  In Progress */

export default {
  createUser (userObj) {
    const user = {
      id: userObj.id,
      name: userObj.name,
      lastName: userObj.lastName,
      email: userObj.email,
      isAdmin: false,
      isActive: true
    }

    usersRef.doc(userObj.id).set(user)
      .then(() => user)
  },

  getUser (uid) {
    usersRef.doc(uid).get().then((doc) => {
      if (doc && doc.exists) {
        return doc.data()
      }
    })
  },

  deleteUser (uid) {
    usersRef.doc(uid).update({
      isActive: false
    }).then(() => {
      const msg = 'Document successfully updated!'
      return msg
    })
  }

}
