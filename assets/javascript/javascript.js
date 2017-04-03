// Read JS once ready
$( document )
  .ready( function() {

    var Random = Math.floor( Math.random() * 100 )

    $( '#randomNumber' )
      .text( Random );

    var num1 = Math.floor( Math.random() * 10 + 1 )
    var num2 = Math.floor( Math.random() * 11 + 2 )
    var num3 = Math.floor( Math.random() * 12 + 3 )
    var num4 = Math.floor( Math.random() * 13 + 4 )

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
      num1 = Math.floor( Math.random() * 10 + 1 );
      num2 = Math.floor( Math.random() * 11 + 2 );
      num3 = Math.floor( Math.random() * 12 + 3 );
      num4 = Math.floor( Math.random() * 13 + 4 );
      bagTotal = 0;
      $( '#finalTotal' )
        .text( bagTotal );
    }

//Tells when they've won
    function userWins() {
      alert( "Winner, winner, chicken dinner!" );
      wins++;
      $( '#numberWins' )
        .text( wins );
      reset();
    }

//Tells the user when they've lost
    function userLoses() {
      alert( "Maybe next time, champ." );
      losses++;
      $( '#numberLosses' )
        .text( losses );
      reset()
    }

//Readies the crystals to react to clicking 
    $( '#blue-one' )
      .on( 'click', function() {
        bagTotal = bagTotal + num1;

        $( '#finalTotal' )
          .text( bagTotal );
        //Determines win-lose conditions
        if ( bagTotal == Random ) {
          userWins();
        } else if ( bagTotal > Random ) {
          userLoses();
        }
      } )
    $( '#green-two' )
      .on( 'click', function() {
        bagTotal = bagTotal + num2;
        console.log( "New bagTotal= " + bagTotal );
        $( '#finalTotal' )
          .text( bagTotal );
        //Determines win-lose conditions
        if ( bagTotal == Random ) {
          userWins();
        } else if ( bagTotal > Random ) {
          userLoses();
        }
      } )
    $( '#red-three' )
      .on( 'click', function() {
        bagTotal = bagTotal + num3;
        console.log( "New bagTotal= " + bagTotal );
        $( '#finalTotal' )
          .text( bagTotal );
        //Determines win-lose conditions
        if ( bagTotal == Random ) {
          userWins();
        } else if ( bagTotal > Random ) {
          userLoses();
        }
      } )
    $( '#yellow-four' )
      .on( 'click', function() {
        bagTotal = bagTotal + num4;
        console.log( "New bagTotal= " + bagTotal );
        $( '#finalTotal' )
          .text( bagTotal );
        //Determines win-lose conditions
        if ( bagTotal == Random ) {
          userWins();
        } else if ( bagTotal > Random ) {
          userLoses();
        }
      } );
  } );