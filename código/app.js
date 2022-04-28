const firebaseConfig = {
    apiKey: "AIzaSyDArWP6lnVuQuPu0sExcIrBLprP4R6t1Y8",
    authDomain: "login-8d4fe.firebaseapp.com",
    projectId: "login-8d4fe",
    storageBucket: "login-8d4fe.appspot.com",
    messagingSenderId: "823338263888",
    appId: "1:823338263888:web:6ed5e9302e12bc6caab855",
    measurementId: "G-WF9DV9RQ2K"
};

firebase.initializeApp(firebaseConfig);
let login = firebase.firestore();
const user = "userBanco";
let auth = firebase.auth();

function cadastrarUser() {
    login.collection(user).add(
        {
            nome: document.querySelector('input[type=text]').value,
            contato: document.querySelector('input[type=number]').value,
            email: document.querySelector('input[type=email]').value,
            pass: document.querySelector('input[type=password]').value
        })
            .then(() => {
                let email = document.querySelector('input[type=email]').value
                let pass = document.querySelector('input[type=password]').value
                auth.createUserWithEmailAndPassword(email, pass).then(() => {
                    alert("Sucessful!")
                }).catch(error => {
                    console.log(error)
                })
            })
}
function entrarLogin(){
      auth.signInWithEmailAndPassword(email, pass).then(() => {
        alert("Logged")
      }).catch(error => {
        console.log(error)
      })
}

function recuperarPass(){
    let email = document.querySelector('input[type=email]').value
    auth.sendPasswordResetEmail(email)
    .then(() => {
    alert("Check your inbox")
  })
  .catch((error) => {
    console.log(error)
  });
}