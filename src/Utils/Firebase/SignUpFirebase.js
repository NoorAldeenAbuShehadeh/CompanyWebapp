import FirebaseApp from './Firebase'
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth'

const SignUpFirebase = async (email,password)=>{
    const auth = getAuth(FirebaseApp)
    const credintials = await createUserWithEmailAndPassword(auth,email,password)
    return credintials
}

export default SignUpFirebase