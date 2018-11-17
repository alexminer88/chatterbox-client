var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // Username on click 
    // on "#username" do something --- invoke Friends.toggleStatus
    // $('#chats').find('.username').trigger('click');
    $('.username').on("click", function(name) {
    // calls toggleStatus on friends object
      Friends.toggleStatus(name);
    });
    
    //event handler for rooms clicks
    $('#rooms').on("click", function() {
      Rooms.add();
    });
    
    $('form .submit').on("submit", function() {
      // send message
      console.log('test');
      // let text = $('#message');
      // let roomName = $('#roomSelect').find(":selected").text();
      // let message = {
      //   username,
      //   text,
      //   roomName
      // };
      Parse.create();
      // Messages.add();
      
      // takes form input
      // sends to messages
      // invoke messagesViews?
    });
    
    
  },

  render: function() {
    
  },
  
  renderMessage: function(message) {
    var html = _.template(
      '<div class="chat">' +
        '<div class="username">' +
          '<p class="message">' +
            '<%= text %>' +
          '</p>' + 
        '</div>' +
      '</div>'
    );
    $('#chats').append(html(message));
  }
};
