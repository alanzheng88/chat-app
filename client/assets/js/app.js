$(function(){

  var socket = io();

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
    var formattedMessage = '<li>' + msg + '</li>';
    $('#messages').append(formattedMessage);
  });
});