import { doc, updateDoc } from 'firebase/firestore';
import {db} from './Firebase'

const UpdateData=async(collectionName, itemId, newData)=>{
  try {
    const itemRef = doc(db, collectionName, itemId);
    await updateDoc(itemRef, newData);
    // console.log('Document successfully updated!');
  } catch (error) {
    // console.error('Error updating document:', error);
  }
}

export default UpdateData