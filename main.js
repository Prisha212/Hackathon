
//setting up firebase with our website

   const firebaseApp = firebase.initializeApp({ 
apiKey: "AIzaSyDh5Yv8s_rszGwrsFdS-IeMTR2YGLSJ01k",
  authDomain: "hackathon-2ca4d.firebaseapp.com",
  projectId: "hackathon-2ca4d",
  storageBucket: "hackathon-2ca4d.appspot.com",
  messagingSenderId: "111268778535",
  appId: "1:111268778535:web:12689bac6d77bb426af402"
   });
   const db = firebaseApp.firestore();
   const auth = firebaseApp.auth();

//Login function

const SignUp = () =>{
   const email =document.getElementById("email").value;
   const password = document.getElementById("password").value;
   console.log(email,password)
   firebase.auth().createUserWithEmailAndPassword(email, password)

  .then((result) => {
    // Signed in 
  console.write("You are logged In")
  console.log(result)
    // ...
  })
  .catch((error) => {
    console.log(error.code);
    console.log(error.message)
    // ..
  });

}
