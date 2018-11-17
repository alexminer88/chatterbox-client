var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);
    
    // create list of friends
    // let friends = new Friends();
    
    
    // I think we want to put our event handlers inside of each of these files.
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
      // do something with the data
      data.results.forEach(element => {
        // check data for script tags, meaning string starts with <script>
        
        
        if (element.username !== undefined && element.text !== undefined) {
          if (!element.text.slice(0, 7) === '<script>' && !element.username.slice(0, 7) === '<script>') {
            // push element's data to Messages
            let x = 0;
            let messageTest = {};
            messageTest.username = element.username;
            messageTest.text = element.text;
            messageTest.roomname = element.roomname;
            // let message = {
            //   username: element.username,
            //   text: element.text,
            //   roomname: element.roomname
            // };
            debugger;
            Messages.add(messageTest);
            
          } 
        }
      });
      // clean up data?
      // call functions to display data
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

// should send message on click of submit















