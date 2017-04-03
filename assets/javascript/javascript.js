// Read JS once ready
$( document )
  .ready( function() {


// Generates a random number for the crystals
    var Random = Math.floor( Math.random() * 100 )

    $( '#randomNumber' )
      .text( Random );

    var blueNum = Math.floor( Math.random() * 10 + 1 )
    var greenNum = Math.floor( Math.random() * 11 + 2 )
    var redNum = Math.floor( Math.random() * 12 + 3 )
    var yellowNum = Math.floor( Math.random() * 13 + 4 )

// Buckets
    var bagTotal = 0;
    var wins = 0;
    var losses = 0;
    
//Tally set-up
    $( '#numberWins' )
      .text( wins );
    $( '#numberLosses' )
      .text( losses );

//Game reset
    function reset() {
      Random = Math.floor( Math.random() * 100 );
      $( '#randomNumber' )
        .text( Random );
      blueNum = Math.floor( Math.random() * 10 + 1 );
      greenNum = Math.floor( Math.random() * 11 + 2 );
      redNum = Math.floor( Math.random() * 12 + 3 );
      yellowNum = Math.floor( Math.random() * 13 + 4 );
      bagTotal = 0;
      $( '#gameTotal' )
        .text( bagTotal );
    }

//Tells when they've won
    function userWins() {
      alert( "You've won! Now give me the crystals!" );
      wins++;
      $( '#numberWins' )
        .text( wins );
      reset();
    }

//Tells the user when they've lost
    function userLoses() {
      alert( "Oh no! Your bag has ruptured!" );
      losses++;
      $( '#numberLosses' )
        .text( losses );
      reset();
    }

//Readies the crystals to react to the mouse clicking
//Blue Crystal
    $( '#blue-one' )
      .on( 'click', function() {
        bagTotal = bagTotal + blueNum;

        $( '#gameTotal' )
          .text( bagTotal );
          
        //Determines win-lose conditions
        if ( bagTotal == Random ) {
          userWins();
        } else if ( bagTotal > Random ) {
          userLoses();
        }
      } )

//Green Crystal
    $( '#green-two' )
      .on( 'click', function() {
        bagTotal = bagTotal + greenNum;

        $( '#gameTotal' )
          .text( bagTotal );

        //Determines win-lose conditions
        if ( bagTotal == Random ) {
          userWins();
        } else if ( bagTotal > Random ) {
          userLoses();
        }
      } )

//Red Crystal
    $( '#red-three' )
      .on( 'click', function() {
        bagTotal = bagTotal + redNum;

        $( '#gameTotal' )
          .text( bagTotal );

        //Determines win-lose conditions
        if ( bagTotal == Random ) {
          userWins();
        } else if ( bagTotal > Random ) {
          userLoses();
        }
      } )

//Yellow Crystal
    $( '#yellow-four' )
      .on( 'click', function() {
        bagTotal = bagTotal + yellowNum;

        $( '#gameTotal' )
          .text( bagTotal );

        //Determines win-lose conditions
        if ( bagTotal == Random ) {
          userWins();
        } else if ( bagTotal > Random ) {
          userLoses();
        }
      } );
  } );