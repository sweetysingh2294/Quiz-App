const firebaseConfig = {
    apiKey: "AIzaSyC_6AbaXGtexA3yKc2p6AYN3ELbob6Kx9g",
    authDomain: "quiz-app-13cf3.firebaseapp.com",
    projectId: "quiz-app-13cf3",
    storageBucket: "quiz-app-13cf3.appspot.com",
    messagingSenderId: "35110611810",
    appId: "1:35110611810:web:f3c53f9bbf0ca294ce9a3b",
    measurementId: "G-QXCBK0S6QD"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);