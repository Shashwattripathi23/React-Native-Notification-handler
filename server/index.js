const admin = require('firebase-admin');

// Replace this with the path to your Firebase service account key file
const serviceAccount = require('./service-key.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});


const sendNotification = async () => {
    const fcmToken = 'cTcZWZZ1SomOPClpzt_Ku6:APA91bH_Z6CHEn9FHiR4hsivvPZ1YsSDzHFATZLClQRv3QoxcWfvW0R-zDZ_v7RAnWCiFft89RHsOjwTHIQjDxkEZWuRZZXozmGNSb778EO3Ij0vJ4_X2Vc';
  
    const message = {
      token: fcmToken,
      notification: {
        title: 'Still Alive!',
        body: 'We need update from you to keep you alive',
      },
      data: {
        customKey: 'customValue', // Optional custom data
      },
    };
  
    try {
      const response = await admin.messaging().send(message);
      console.log('Notification sent successfully:', response);
    } catch (error) {
      console.error('Error sending notification:', error);
    }
  };
  
  sendNotification();
  