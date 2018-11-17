var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    $('button').on("click", function() {
      // turned off in order to debug adding rooms on fetch
      // Rooms.add();
    });
  },

  render: function() {
    Rooms.allRooms.forEach(room => {
      RoomsView.renderRoom(room);
    });
  },
  
  renderRoom: function(roomName) {
    var html = _.template(
      "<option class='room'>" +
        "<%= roomName %>" + 
      "</option>"
    );
    $('#rooms select').append(html({ roomName: roomName }));
  }
};
