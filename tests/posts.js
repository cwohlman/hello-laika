//tests/posts.js
var assert = require('assert');

// We'll write more tests soon!
suite('Posts', function() {
  test('in the server', function(done, server) {
    server.eval(function() {
      Posts.insert({title: 'hello title'});
      var docs = Posts.find().fetch();
      emit('docs', docs);
    });

    server.once('docs', function(docs) {
      assert.equal(docs.length, 1);
      done();
    });
  });

  test('using both client and the server', function(done, server, client) {
    server.eval(function() {
      Posts.find().observe({
        added: addedNewPost
      });

      function addedNewPost(post) {
        emit('post', post);
      }
    }).once('post', function(post) {
      assert.equal(post.title, 'hello title');
      done();
    });

    client.eval(function() {
      Posts.insert({title: 'hello title'});
    });
  });

  test('using both client and the server', function(done, server, client) {
    server.eval(function() {
      Posts.find().observe({
        added: addedNewPost
      });

      function addedNewPost(post) {
        emit('post', post);
      }
    }).once('post', function(post) {
      assert.equal(post.title, 'hello title');
      done();
    });

    client.eval(function() {
      Posts.insert({title: 'hello title'});
    });
  });

  test('using both client and the server', function(done, server, client) {
    server.eval(function() {
      Posts.find().observe({
        added: addedNewPost
      });

      function addedNewPost(post) {
        emit('post', post);
      }
    }).once('post', function(post) {
      assert.equal(post.title, 'hello title');
      done();
    });

    client.eval(function() {
      Posts.insert({title: 'hello title'});
    });
  });

  test('using both client and the server', function(done, server, client) {
    server.eval(function() {
      Posts.find().observe({
        added: addedNewPost
      });

      function addedNewPost(post) {
        emit('post', post);
      }
    }).once('post', function(post) {
      assert.equal(post.title, 'hello title');
      done();
    });

    client.eval(function() {
      Posts.insert({title: 'hello title'});
    });
  });

  test('using both client and the server', function(done, server, client) {
    server.eval(function() {
      Posts.find().observe({
        added: addedNewPost
      });

      function addedNewPost(post) {
        emit('post', post);
      }
    }).once('post', function(post) {
      assert.equal(post.title, 'hello title');
      done();
    });

    client.eval(function() {
      Posts.insert({title: 'hello title'});
    });
  });
  test('using both client and the server', function(done, server, client) {
    server.eval(function() {
      Posts.find().observe({
        added: addedNewPost
      });

      function addedNewPost(post) {
        emit('post', post);
      }
    }).once('post', function(post) {
      assert.equal(post.title, 'hello title');
      done();
    });

    client.eval(function() {
      Posts.insert({title: 'hello title'});
    });
  });
  test('using both client and the server', function(done, server, client) {
    server.eval(function() {
      Posts.find().observe({
        added: addedNewPost
      });

      function addedNewPost(post) {
        emit('post', post);
      }
    }).once('post', function(post) {
      assert.equal(post.title, 'hello title');
      done();
    });

    client.eval(function() {
      Posts.insert({title: 'hello title'});
    });
  });
  test('using both client and the server', function(done, server, client) {
    server.eval(function() {
      Posts.find().observe({
        added: addedNewPost
      });

      function addedNewPost(post) {
        emit('post', post);
      }
    }).once('post', function(post) {
      assert.equal(post.title, 'hello title');
      done();
    });

    client.eval(function() {
      Posts.insert({title: 'hello title'});
    });
  });
  test('using both client and the server', function(done, server, client) {
    server.eval(function() {
      Posts.find().observe({
        added: addedNewPost
      });

      function addedNewPost(post) {
        emit('post', post);
      }
    }).once('post', function(post) {
      assert.equal(post.title, 'hello title');
      done();
    });

    client.eval(function() {
      Posts.insert({title: 'hello title'});
    });
  });
  test('using both client and the server', function(done, server, client) {
    server.eval(function() {
      Posts.find().observe({
        added: addedNewPost
      });

      function addedNewPost(post) {
        emit('post', post);
      }
    }).once('post', function(post) {
      assert.equal(post.title, 'hello title');
      done();
    });

    client.eval(function() {
      Posts.insert({title: 'hello title'});
    });
  });
  test('using both client and the server', function(done, server, client) {
    server.eval(function() {
      Posts.find().observe({
        added: addedNewPost
      });

      function addedNewPost(post) {
        emit('post', post);
      }
    }).once('post', function(post) {
      assert.equal(post.title, 'hello title');
      done();
    });

    client.eval(function() {
      Posts.insert({title: 'hello title'});
    });
  });
  test('using both client and the server', function(done, server, client) {
    server.eval(function() {
      Posts.find().observe({
        added: addedNewPost
      });

      function addedNewPost(post) {
        emit('post', post);
      }
    }).once('post', function(post) {
      assert.equal(post.title, 'hello title');
      done();
    });

    client.eval(function() {
      Posts.insert({title: 'hello title'});
    });
  });

});
