import { Feedback } from '@/types/feedback';
import {
  addDoc,
  collection,
  getDocs,
  limit,
  orderBy,
  query,
} from 'firebase/firestore';
import { firestore } from './index';
import { SNAIL_SIDE_LENGTH } from '@/components/feedback/variables';

export const feedbackListCollection = collection(firestore, 'feedback-list');

export async function getFeedbackListFromFirestore(): Promise<Feedback[]> {
  const initialFeedbackList: Feedback[] = [];

  const querySnapshot = await getDocs(
    query(
      feedbackListCollection,
      orderBy('timestamp', 'desc'),
      limit(SNAIL_SIDE_LENGTH ** 2)
    )
  );
  querySnapshot.forEach((doc) => {
    initialFeedbackList.push(doc.data() as Feedback);
  });

  return initialFeedbackList;
}

export async function addFeedbackToFirestore(newFeedback: Feedback) {
  try {
    const docRef = await addDoc(feedbackListCollection, newFeedback);
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}
