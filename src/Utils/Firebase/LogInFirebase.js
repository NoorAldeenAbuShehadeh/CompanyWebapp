import FirebaseApp from './Firebase'
import {getAuth,signInWithEmailAndPassword} from 'firebase/auth'

const LogInFirebase = async (email,password)=>{
    const auth = getAuth(FirebaseApp)
    const credintials = await signInWithEmailAndPassword(auth,email,password)
    return credintials
}

export default LogInFirebase