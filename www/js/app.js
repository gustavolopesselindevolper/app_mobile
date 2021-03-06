// Dom7
var $$ = Dom7;
$$('.logoff').hide();
$$('.estoqueindex').hide();
$$('.orcamentoindexadm').hide();
$$('.cadastropromocao').hide();
$$('.estoqueadm').hide();
$$('.login-screen-open').show();


// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Framework7', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
  // Enable panel left visibility breakpoint
  panel: {
    leftBreakpoint: 960,
  },
});

// Init/Create left panel view
var mainView = app.views.create('.view-left', {
  url: '/'
});

// Init/Create main view
var mainView = app.views.create('.view-main', {
  url: '/'
});

// Login Screen Demo
$$('#my-login-screen .SingUp').on('click', function () {
  var username = $$('#my-login-screen [name="email"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  firebase
    .auth()
    .createUserWithEmailAndPassword(username,password)//Promisses
    .then( function () {
      app.dialog.alert('Bem vindo: ' + username);
      this.$$('.toolbar-inner').text = 'Bem Vindo: ' + username;
    })
    .catch(function(error){
      console.error(error.code)
      console.error(error.message)
      if (error.code =='auth/ivalid-email'){
        app.dialog.alert('Email invalido no seu formato!!!');
      }$$('#btnSalvar').on('click', function () {
        var formData = app.form.convertToData('#form-user-content')
        var nameInput = $$('#name [name="email"]').val();
        var nameInput = $$('#password [name="password"]').val();
        alert(JSON.stringify(formData))
        firebase.database().ref().child('usuarios').push(JSON.stringify(formData))
    });
  app.loginScreen.close('Falha ao cadastrar, verifique o erro no console');
  })
  app.loginScreen.close('#my-login-screen');
});



$$('#my-login-screen .SingIn').on('click', function () {
  var username = $$('#my-login-screen [name="email"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  firebase
    .auth()
    .signInWithEmailAndPassword(username,password)//Promisses
    .then( function () {
      app.dialog.alert('Bem vindo: ' + username);
      this.$$('.toolbar-inner').text('Bem Vindo: ' + username + 'vc está logado!');



      if(username == "admin@gmail.com"){
      $$('.orcamentoindexadm').show();
      $$('.estoqueindexadm').show();  
      $$('.cadastropromocao').show();
      $$('.estoqueadm').show();
      $$('.logoff').show();
      $$('.login-screen-open').hide();
      $$('input#email').val('');
      $$('input#password').val('');
      }
      else{
      $$('.logoff').show();
      $$('.orcamentoindex').show();
      $$('.estoqueindex').show();
      $$('.login-screen-open').hide();
      $$('input#email').val('');
      $$('input#password').val('');
      }
      


      
    })
    .catch(function(error){
      console.error(error.code)
      console.error(error.message)
      if (error.code =='auth/user-not-found'){
        app.dialog.alert('Não há registro de usuario correspondente a este identificador. O usuário pode ter sido excluído');
      }
        app.dialog.alert('Email invalido no seu formato!!!');
    })
  app.loginScreen.close('#my-login-screen');
});



$$('#my-login-screen .SignOut').on('click', function () {
  app.loginScreen.close('#my-login-screen');
  $$('input#email').val('');
  $$('input#password').val('');
  firebase
    .auth()
    .signOut()
    .then( function () {
      this.$$('.toolbar-inner').text('Usuário não autenticado');
      app.dialog.alert('Usuário não autenticado');
      app.loginScreen.close('#my-login-screen');
      $$('.logoff').hide();
      $$('.login-screen-open').show();      
    }, function(error){
      console.error(error)
    })
});

$$('#my-login-screen .login-screen-close').on('click', function () {
  $$('input#emailInput').val('');
  $$('input#passwordInput').val('');
});

$$('.logoff').on('click', function () {
  firebase
    .auth()
    .signOut()
    .then( function () {
      this.$$('.toolbar-inner').text('Usuário não autenticado');
      app.dialog.alert('Usuário não autenticado');
      $$('input#email').val('');
      $$('input#password').val('');
      $$('.logoff').hide();
      $$('.orcamentoindex').hide();
      $$('.estoqueindex').hide();
      $$('.login-screen-open').show();
    }, function(error){
      console.error(error)
    })  
  });



$$('#my-login-screen .SingOut').on('click', function () {
  app.loginScreen.close('#my-login-screen');
    $$('input#email').val('');
    $$('input#password').val('');
    firebase
    .auth()
    .signOut()
    .then( function () {
      this.$$('.toolbar-inner').text('Usuario nao autenticado');
      app.dialog.alert('Usuario nao autenticado');
      app.loginScreen.close('#my-login-screen');
      $$('.orcamentoindexadm').hide();
      $$('.estoqueindexadm').hide();
      $$('.estoqueadm').hide(); 
      $$('.logoff').hide();
      $$('.login-screen-open').show();
    }, function(error){
        console.error(error)
    })
});


$$('#my-login-screen .login-screen-close').on('click', function () {
  $$('input#email').val('');
  $$('input#password').val('');
})
$$('.logoff').on('click', function() {
  firebase
  .auth()
  .signOut()
  .then( function() {
    this.$$('.toolbar-inner').text('Usuario não autenticado');
    app.diolog.alert('Usuario não autenticado');
    $$('input#email').val('');
    $$('input#password').val('');
    $$('.logoff').hide();
    $$('.login-screen-open').show();
  }, function(error){
    console.error(error)
  })
});


$$('#addButton').on('click', function () {
  var nome = $$('#nome').val();
  var email = $$('#emailorcamento').val();
  var telefone = $$('#telefone').val();
  var mensagem = $$('#mensagem').val();

  var formData = {Nome: nome, Email: email, Telefone: telefone, Mensagem: mensagem}
  console.log(formData);
  firebase.database().ref().child('orcamentos').push(formData)
  .then( function () {
    app.dialog.alert('Orçamento Efetuado com Sucesso');
    $$('input#nome').val('');
    $$('input#emailorcamento').val('');
    $$('input#telefone').val('');
    $$('input#mensagem').val('');
  }, function(error){
    app.dialog.alert('Erro, confira o console');
    console.error(error)
  })
});

$$('#addButtonpromocao').on('click', function () {
  var nome = $$('#nome').val();
  var email = $$('#fabricante').val();
  var telefone = $$('#descricao').val();

  var formData = {Nome: nome, Fabricante: fabricante, Descricao: descricao}
  console.log(formData);
  firebase.database().ref().child('esoque').push(formData)
  .then( function () {
    app.dialog.alert('Orçamento Efetuado com Sucesso');
    $$('input#nome').val('');
    $$('input#fabricante').val('');
    $$('input#descricao').val('');
  }, function(error){
    app.dialog.alert('Erro, confira o console');
    console.error(error)
  })
});



