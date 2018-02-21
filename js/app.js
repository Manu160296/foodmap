// Initialize Firebase
var config = {
  apiKey: 'AIzaSyBpss4wXn8LAJODAjI1bdrB1pCptLCyN4A',
  authDomain: 'social-network-3002b.firebaseapp.com',
  databaseURL: 'https://social-network-3002b.firebaseio.com',
  projectId: 'social-network-3002b',
  storageBucket: 'social-network-3002b.appspot.com',
  messagingSenderId: '57077219163'
};
firebase.initializeApp(config);


let signUp = $('.sign-up-js');
console.log(signUp);
signUp.on('click', () => {
  window.location.href = 'views/sign-up.html';
});

// autentiación correo y contraseña

var userRegister = $('.register-form-js');

userRegister.on('click', function() {
  // console.log(userRegister)

  // rescatar lo que usuario escribe en los inputs una vez que se haga click : 
  var email = $('.email-js').val();
  var password = $('.password-js').val();
  if (email && password) {
    userRegister.on('click', () => {
      window.location.href = 'views/home.html';
    });
  }
  // console.log(email);
  // console.log(password);

  // codigo firebase, se pasa como parámetro de la función los valores de los inputs(encerrados en las variables): 
  
  firebase.auth().createUserWithEmailAndPassword(email, password)
    

    // pasa cuando hay un error:
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      console.log(errorCode);
      var errorMessage = error.message;
      console.log(errorMessage);
      // ...
    });
});


var signIn = $('.sign-in-js');


signIn.on('click', function() {
  var email2 = $('.email2-js').val();
  var password2 = $('.password2-js').val();

  // doc Firebase / acceso de usuarios existentes :
  firebase.auth().signInWithEmailAndPassword(email2, password2)
    // ocurre cuando hay un error :
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      console.log(errorCode);
      var errorMessage = error.message;
      console.log(errorMessage);
      // ...
    });

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log('si existe usuario activo !!');
      // window.location.href = 'views/home.html';
      $(location).attr('href', 'views/home.html');
      /* User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        // ... */
    } else {
      // User is signed out.
      console.log('no existe usuario activo');
      // ...
    }
  });
});


