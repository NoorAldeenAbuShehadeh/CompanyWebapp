import {FirebaseApp} from './Firebase'
import {getAuth,signInWithEmailAndPassword} from 'firebase/auth'

const LogInFirebase = async (email,password)=>{
    const auth = getAuth(FirebaseApp)
    const Credentials = await signInWithEmailAndPassword(auth,email,password)
    return Credentials
}

export default LogInFirebase