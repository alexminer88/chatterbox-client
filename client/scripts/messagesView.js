var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // event handler for username clicks
    $('#chats').on("click",'.username', MessagesView.handleClick);
    
    
    //event handler for rooms clicks
    $('#rooms').on("click", function() {
      
      Rooms.add();
    });
    
    //event handler for form submit
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
      // MessagesView.render();
      // Messages.add();
      
      // takes form input
      // sends to messages
      // invoke messagesViews?
    });
    
    $("#rooms select").on("change", function() {
      $('#chats').empty();      
      Messages.allMessages.forEach(message => {        
        let selected = $("#rooms select option:selected").text();
        if (selected === message.roomname) {
          MessagesView.renderMessage(message);
        } else if (selected === "All Rooms") {
          MessagesView.renderMessage(message);
        }        
      })
    });
       
  },

  render: function() {
    
    // only display messages from currently selected room, if none are selected, display all
    Messages.allMessages.forEach(message => {
        MessagesView.renderMessage(message);
      //$("#rooms select option:selected").text() --> currently selected room
      
      // let selected = $("#rooms select option:selected").text()
      // //print if selected === message.roomname
      // if (selected === message.roomname) {
      // }
    });
  },
  
  renderMessage: function(message) {
    var $message = MessageView.render(message);    
    $('#chats').append($message );
  },
  
  handleClick: function(event) {

    var username = event.target.getAttribute('data-username');
    if (username === undefined) {
      return;
    }
    username = JSON.stringify(username);
    Friends.toggleStatus(username);
    // Friends.highlight();
  }
};
