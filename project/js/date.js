import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  orderBy
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "你的APIKEY",
  authDomain: "你的專案.firebaseapp.com",
  projectId: "你的ID",
  storageBucket: "你的專案.appspot.com",
  messagingSenderId: "xxx",
  appId: "xxx"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const gallery = document.querySelector(".gallery");

const q = query(collection(db, "photos"), orderBy("order"));

const snapshot = await getDocs(q);

snapshot.forEach((doc) => {
  const data = doc.data();

  const li = document.createElement("li");
  li.className = "image";

  li.innerHTML = `
    <img src="${data.imageUrl}" alt="${data.title}">
  `;

  gallery.appendChild(li);
});
