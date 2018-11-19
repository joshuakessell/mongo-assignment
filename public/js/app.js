const render = function (post) {

  //clear kudos div
  $('#kudos-list').empty();

  //render html for each post
  for (let i = 0; i < post.length; i++) {
    $('#kudos-list')
      .append(
        `<div class="kudos-card" id="kudos-container">
          <h3>${post[i].subject}</h5>
          <h6>From: ${post[i].giveFrom.name}</h6> 
          <h6>To: ${post[i].giveTo.name}</h6>
          <div class="kudos-message">
          <p>${post[i].message}</p>
        </div>
      </div>`
      );
  }
}

//get all kudos and post them using the above function, render
const getKudos = function () {
  $.get('/api/kudos/')
    .then(function (data) {
      render(data)
    });
};


const getUsers = function () {
  $.get('/api/user/')
    .then(function (data) {
      for(let i=0; i < data.length; i++) {
        $('#fromKudo').append(`<option value=${user[i]._id}'>${user[i].name}</option>`);
        $('#toKudo').append(`<option value=${user[i]._id}'>${user[i].name}</option>`);
      }
    });

}

//save form data to the database and post to the page
const postKudo = function (event) {
  event.preventDefault();
  $('#404').empty();
  if ($('#fromKudo').val() && $('#toKudo').val()) {
    let kudos = {
      giveFrom: $('#giveFrom').val(),
      giveTo: $('#giveTo').val(),
      subject: $('#kudo-subject').val().trim,
      message: $('#kudo-message').val().trim
    }
    $.post('api/kudos', kudos)
      .then(function (data) {
        $('#giveFrom').val('');
        $('#giveTo').val('');
        $('#kudo-subject').val('');
        $('#kudo-message').val('');
        getKudos();
      })
  } else {
    $('#404').append(`<p>You must select both a "To" and "From" user.</p>`);  
  }
};

getKudos();
getUsers();

// Click listener
$(document).on('click', '#postKudos', postKudo);