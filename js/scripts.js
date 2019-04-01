$(document).ready(function() {
  $("#submit").click(function(event) {
    event.preventDefault();

  var favoriteThings = [];

    favoriteThings.push($("#a").val());
    favoriteThings.push($("#b").val());



    console.log(favoriteThings);
    // $("#output").show(favoriteThings);
    $("#first").text(favoriteThings[0]);
    $("#second").text(favoriteThings[1]);

  });
});
