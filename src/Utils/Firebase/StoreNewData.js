import {collection,addDoc,} from 'firebase/firestore'
import {db} from './Firebase'
const StoreNewData = async (collectionName,docData)=>{
    const colRef = collection(db,collectionName)
    return await addDoc(colRef,docData)
}

export default StoreNewData