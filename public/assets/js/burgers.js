$(function() {
  $('.form').on('submit', function(event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $('#inputBurger')
        .val()
        .trim(),
      devoured: 0
    };

    $.ajax('/api/burgers', {
      type: 'POST',
      data: newBurger
    }).then(function() {
      console.log('New Burger Added!');
      location.reload();
    });
  });

  $('.eatbutton').on('click', function(event) {
    var burgerId = $(this).data('id');
    var newBurger = $(this).data('newdevour');

    var burgerEaten = {
      devoured: newBurger
    };

    $.ajax('/api/burgers/' + burgerId, {
      type: 'PUT',
      data: burgerEaten
    }).then(function() {
      console.log('Devoured: ' + newBurger);
      location.reload();
    });
  });
});
