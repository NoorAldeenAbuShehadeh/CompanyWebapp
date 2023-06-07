import {collection,getDocs,orderBy,query,limit,where} from 'firebase/firestore'
import {db} from './Firebase'
const RetrieveData = async (collectionName,key,value,order='publishDate',limitItem=1000)=>{
    const colRef = collection(db,collectionName)
    let q;
    if(key && value)q = query(colRef,where(key, '==', value));
    else if(collectionName==='News')q = query(colRef,orderBy("dateOfPublish",'desc'));
    else q = query(colRef);
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((item) => ({ id: item.id, ...item.data() }));
    return data;
}

export default RetrieveData