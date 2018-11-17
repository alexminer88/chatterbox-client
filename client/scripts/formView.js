var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    // event.preventDefault();
    var message = {
      username: window.location.search.slice(10),
      text: $('input:first').val(),
      roomname: 'hrsf108'
    };
    Parse.create(message, function() {
      console.log('oops');
    });
    console.log('click!' + event);
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};