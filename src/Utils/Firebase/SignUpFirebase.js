import {FirebaseApp} from './Firebase'
import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth'

const SignUpFirebase = async (email,password)=>{
    const auth = getAuth(FirebaseApp)
    const Credentials = await createUserWithEmailAndPassword(auth,email,password)
    return Credentials
}

export default SignUpFirebase