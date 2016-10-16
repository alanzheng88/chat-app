$(function(){
  var socket = io();

  var getListHtml = function(val) {
    return '<li>' + val + '</li>';
  }

  $('#chatform').submit(function() {
    var username = $('#username').val();
    var message = $('#message').val();
    var text = username + ': ' + message
    socket.emit('message', text);
    $('#username').val('');
    $('#message').val('');
    return false;
  })

  socket.on('message', function (msg) {
    $('#messages').append(getListHtml(msg));
  });

});