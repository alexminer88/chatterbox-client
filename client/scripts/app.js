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


    // setInterval(App.fetch, 5000);
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);
      // do call appropriate methods with the data
      data.results.forEach(element => {
        let message = {
          text: element.text,
          username: element.username,
          roomname: element.roomname
        };

        Messages.add(message);
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
















