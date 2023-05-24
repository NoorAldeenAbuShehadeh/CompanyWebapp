import { collection, query, where, getDocs, updateDoc } from 'firebase/firestore';
import {db} from './Firebase'
async function UpdateData (collectionName,key,value,newDocument){
    const documentsRef = collection(db, collectionName);
    const q = query(documentsRef, where(key, '==', value));
    try {
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
          console.log('No matching documents found.');
          return;
        }
        querySnapshot.forEach((doc) => {
            updateDoc(doc.ref, newDocument);
            console.log('Document successfully updated!');
          });
      } catch (error) {
        console.error('Error updating documents:', error);
      }
}

export default UpdateData