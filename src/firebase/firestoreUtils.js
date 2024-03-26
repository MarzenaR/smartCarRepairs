import { firestore } from "./firebaseConfig";

// method collection to get required connection

export const usersCollection = firestore.collection("users");
export const bookingsJobsCollection = firestore.collection("bookings_jobs");
export const garagesCollection = firestore.collection("mechanic_garages");
