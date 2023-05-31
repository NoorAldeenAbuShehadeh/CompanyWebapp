import { deleteDoc, doc } from 'firebase/firestore';
import {db} from './Firebase'

const DeleteItem = async (collectionName, itemId) => {
    try {
      const itemRef = doc(db, collectionName, itemId);
      await deleteDoc(itemRef);
      console.log('Item deleted successfully');
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  export default DeleteItem