// let's wait till the document is loaded
// and we'll put all of our code there.

$(document).ready(function(){

  //we need a way to capture the form data when the user
  //hits the add user button (which submits the form)

  $("form").submit(function(){
    //test the submit
    // alert("testing form submit")

    //when they submit
    //lets get all of the values out of the form inputs (and textarea)

    //and store them in some variables

    var first = $('#first').val();
    var last = $('#last').val();
    var desc = $('#desc').val();


    // our main task is to append some div cards to the div.cards div.

    // we'll build a string of HTML containing the variables
    // from the form
    var card = '<div class="card"><h1>' + first + ' ' + last + '</h1>';
    card += '<span>Click for description!</span>';
    card += '<p>' + desc + '</p></div>';

    // then we'll append it.

    //BONUS CHALLENGE!!!!!
    // WHAT IF WE ONLY WANT THEM TO BE ABLE TO POST 3 CARDS?????!!!

    // lets test how many children there are of div.cards

    if($('div.cards').children().length > 2){

      // we should get rid of the first card.
      $('div.cards').children()[0].remove();
    }



    $('div.cards').append(card);



    // now we need a click handler that will toggle
    // the visible/invisible elements in the contact card.
    // but lets do that outside of the form submit handler!~
    // after i do all the work i want to do
    // a nice thing might be to blank out the form

    $('#first').val("");
    $('#last').val("");
    $('#desc').val("");


    //make sure to prevent the default action of the form
    //which is to leave the page
    return false;
  })

  // we use document .on to handle dynamic data
  // that wasn't on the page at load time.

  $(document).on('click', "div.card", function(){
    // now we have access to the particular card that was clicked
    // with the ***this*** keyword.

    // HOWEVER
    // i only want to toggle the children elements of the div.
    $(this).children().toggle();

  })


})