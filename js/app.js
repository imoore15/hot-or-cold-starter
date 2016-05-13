var rannum;
var user;
$(document).ready(function(){
  
  
  newgame();
  console.log(rannum);
	
	/*--- Display information modal box ---*/
  	

    $(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

    $("#guessButton").click(function(event){
      event.preventDefault();
      user = $('#userGuess').val();
      $('#guessList').append('<li>' + user + '</li>');
      $('#count').text(parseInt($('#count').text()) +1);
      
      if (rannum == user) {
        $('#feedback').text('CORRECT');

      }

      else if (Math.abs(rannum - user) > 50) {
        $('#feedback').text('Ice Cold');
      }

      else if (Math.abs(rannum - user) > 25) {
        $('#feedback').text('Warm');
      }

      else if (Math.abs(rannum - user) > 10) {
        $('#feedback').text('Warmer');
      }

      else if (Math.abs(rannum - user) > 5) {
        $('#feedback').text('On Fire');
      }
    
    });
});


  	function newgame() {
      rannum = Math.floor(Math.random()*101);
      
  	}



    


  

    


//* $("#myID").method(function() {}); *//
//* function() {}; *//
