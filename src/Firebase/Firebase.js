import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyADHBG2jyUjUuKJCY4qxWso4R1O_EAORj0",
  authDomain: "myportfolio-1a36d.firebaseapp.com",
  projectId: "myportfolio-1a36d",
  storageBucket: "myportfolio-1a36d.appspot.com",
  messagingSenderId: "492619679085",
  appId: "1:492619679085:web:254c6b292d81a7e3f74664",
  measurementId: "G-Y50QYC81E6"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


