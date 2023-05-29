import {FirebaseApp} from './Firebase'
import {getAuth, createUserWithEmailAndPassword, updatePassword} from 'firebase/auth'

const SignUpFirebase = async (email,password)=>{
    const auth = getAuth(FirebaseApp)
    const Credentials = await createUserWithEmailAndPassword(auth,email,password)
    return Credentials
}

export const changePassword = async (user, newPassword) => {
    const auth = getAuth(FirebaseApp)
    await updatePassword(user, newPassword)
  }

export default SignUpFirebase