var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    $('button').on("click", function() {
      // debugger;
      Rooms.add();
    });
  },

  render: function() {
  },
  
  renderRoom: function(roomName) {
    // takes in a string, creates "room"
    // appending "room" to $('#rooms select')
    var html = _.template(
      "<div class='messages'>" +
        "<p class='message'>" +
          "<%= roomName %>" +
        "</p>" + 
      "</div>"
    );
    $('#rooms select').append(html({ roomName: roomName }));
  }
};



// RoomsView.$button.click("on", function() {     
// // if select button option has a value of addRoom, add new room
// // should pop up a form? or a dialog box?
// // grab whatever that value is and invoke 
//   // add new room text to select menu
//   // add room to rooms.js (this is controller talking to model)
//   Rooms.add();
// //if select button option is not addRoom, should somehow talk to the model to run 
// // a method to get the visuals to change
// });
