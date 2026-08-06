importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCZLJ3VX05H05lTFWt3obbqVK71_jgaffs",
  authDomain: "feely-813ca.firebaseapp.com",
  databaseURL: "https://feely-813ca-default-rtdb.firebaseio.com",
  projectId: "feely-813ca",
  storageBucket: "feely-813ca.firebasestorage.app",
  messagingSenderId: "945704178477",
  appId: "1:945704178477:web:7ec595932e9e56699539a4"
});

const messaging = firebase.messaging();

// استقبال الإشعار عندما يكون التطبيق في الخلفية أو مغلقاً
messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title || 'نبضة حب جديدة 💖';
  const notificationOptions = {
    body: payload.notification.body || 'وصلتك نبضة جديدة في Feely!',
    icon: 'https://cdn-icons-png.flaticon.com/512/2589/2589175.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
