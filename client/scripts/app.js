var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);
      // do call appropriate methods with the data
      data.results.forEach(element => {
        let message = {};
        message.text = element.text === undefined ? undefined: element.text.split('<').join('&lt;').split('>').join('&gt;');
        message.username = element.username === undefined ? undefined: element.username.split('<').join('&lt;').split('>').join('&gt;');
        message.roomname = element.roomname === undefined || element.roomname === null ? undefined : element.roomname.split('<').join('&lt;').split('>').join('&gt;');
        Messages.add(message);
        // if roomname does not exists, add room
        if (message.roomname !== undefined && !Rooms.allRooms.includes(message.roomname)) {
          Rooms.add(message.roomname);
        }
        

      });
      // render rooms
      RoomsView.render();
      MessagesView.render();
      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  },
  
};
















