//coutndown timer
// Set the date we're counting down to
var countDownDate = new Date("March 20, 2020 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML =
      "Eindelijk is het uitgekomen, grote blij☺";
  }
}, 1000);

//kankernkanekarlk;sdjfaskl;hflkjdasfchgfjkl;dafhjglkjasdhf;lkadsjfa;lkdsjf

// Set the date we're counting down to
var countDownDate2 = new Date("March 23, 2020 00:00:00").getTime();

// Update the count down every 1 second
var x2 = setInterval(function() {
  // Get today's date and time
  var now2 = new Date().getTime();

  // Find the distance between now and the count down date
  var distance2 = countDownDate2 - now2;

  // Time calculations for days, hours, minutes and seconds
  var days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));
  var hours2 = Math.floor(
    (distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("kanker").innerHTML =
    days2 + "d " + hours2 + "h " + minutes2 + "m " + seconds2 + "s ";

  // If the count down is over, write some text
  if (distance2 < 0) {
    clearInterval(x);
    document.getElementById("kanker").innerHTML = "Nieuwe Half Life game";
  }
}, 1000);
