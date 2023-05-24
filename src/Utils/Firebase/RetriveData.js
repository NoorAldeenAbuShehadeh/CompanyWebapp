import {collection,getDocs,orderBy,query,limit} from 'firebase/firestore'
import {db} from './Firebase'
const RetrieveData = async (collectionName,order='publishDate',limitItem=1000)=>{
    const colRef = collection(db,collectionName)
    const q = query(colRef, orderBy(order, 'desc'), limit(limitItem));
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((item) => item.data());
    return data;
}

export default RetrieveData