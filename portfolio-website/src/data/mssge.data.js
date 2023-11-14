import { messageDB } from "./firebase";
import { collection, addDoc, getDoc, updateDoc, doc} from "firebase/firestore";
const mssgeCollectionRef = collection(messageDB, "MESSAGE");
const reactID = "7dLlDzjVbJ9lDVMt9gRw";

class MessageData {
  sendMssge = (newMssge) => {
    return addDoc(mssgeCollectionRef, newMssge);
  };

  updateReaction = (updatedReaction) => {
    const reactDoc = doc(messageDB, "REACTIONS", reactID);
    return updateDoc(reactDoc);
  };

  getReactionValues = async () => {
    const reactDoc = doc(messageDB, "REACTIONS", reactID);
    const docSnapshot = await getDoc(reactDoc);
    if (docSnapshot.exists()) {
      return docSnapshot.data();
    } else {
      return null; 
    }
  };
}

export default new MessageData();