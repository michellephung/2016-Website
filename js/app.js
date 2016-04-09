requirejs.config({
    'baseUrl': 'js/app',
    'paths': {
      'app': '.',
      jquery: '../vendor/jquery'
    }
});

// Load the main app module to start the app
requirejs(["main"]);