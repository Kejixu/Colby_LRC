//
// psd2css.js
//
//   This is where all the javascript required by your design is written.
//
//   Originally generated at http://psd2cssonline.com 
//   August 8, 2011, 7:52 pm with psd2css Online version 1.95

$(document).ready(function(){

  // This is required for the PNG fix to work.
  if (window.DD_belatedPNG)
    DD_belatedPNG.fix('.pngimg');

  // This is some javascript to stop IE from displaying the img alt attributes
  // when you mouse over imagess.  If you would like IE to display the alt attributes,
  // just comment out the following 4 lines.  Don't worry, if you leave this in 
  // place, your ALT attributes are still readable by the search engines.
  var tmpalt;
  $("img").hover( 
    function(){ tmpalt = $(this).attr( "alt" ); $(this).attr( "alt", "" ); },
    function(){ $(this).attr( "alt", tmpalt ); });

  // This is code to handle all of the _linkover events.  It works by
  // creating a special Wrap class, adding it to the link and linkover
  // divs of each link and linkover pair, and assigning a hover event to
  // that.
  $("#Layer-22").addClass("Wrap-23-22").hide();
  $("#Layer-23").addClass("Wrap-23-22");
  $(".Wrap-23-22").hover(
    function(){ $("#Layer-22").show(); $("#Layer-23").hide(); },
    function(){ $("#Layer-23").show(); $("#Layer-22").hide(); });
  $("#Layer-24").addClass("Wrap-25-24").hide();
  $("#Layer-25").addClass("Wrap-25-24");
  $(".Wrap-25-24").hover(
    function(){ $("#Layer-24").show(); $("#Layer-25").hide(); },
    function(){ $("#Layer-25").show(); $("#Layer-24").hide(); });
  $("#Layer-26").addClass("Wrap-27-26").hide();
  $("#Layer-27").addClass("Wrap-27-26");
  $(".Wrap-27-26").hover(
    function(){ $("#Layer-26").show(); $("#Layer-27").hide(); },
    function(){ $("#Layer-27").show(); $("#Layer-26").hide(); });
  $("#Layer-28").addClass("Wrap-29-28").hide();
  $("#Layer-29").addClass("Wrap-29-28");
  $(".Wrap-29-28").hover(
    function(){ $("#Layer-28").show(); $("#Layer-29").hide(); },
    function(){ $("#Layer-29").show(); $("#Layer-28").hide(); });
  $("#Layer-30").addClass("Wrap-31-30").hide();
  $("#Layer-31").addClass("Wrap-31-30");
  $(".Wrap-31-30").hover(
    function(){ $("#Layer-30").show(); $("#Layer-31").hide(); },
    function(){ $("#Layer-31").show(); $("#Layer-30").hide(); });
  $("#Layer-33").addClass("Wrap-34-33").hide();
  $("#Layer-34").addClass("Wrap-34-33");
  $(".Wrap-34-33").hover(
    function(){ $("#Layer-33").show(); $("#Layer-34").hide(); },
    function(){ $("#Layer-34").show(); $("#Layer-33").hide(); });
  $("#Layer-35").addClass("Wrap-36-35").hide();
  $("#Layer-36").addClass("Wrap-36-35");
  $(".Wrap-36-35").hover(
    function(){ $("#Layer-35").show(); $("#Layer-36").hide(); },
    function(){ $("#Layer-36").show(); $("#Layer-35").hide(); });
  $("#Layer-37").addClass("Wrap-38-37").hide();
  $("#Layer-38").addClass("Wrap-38-37");
  $(".Wrap-38-37").hover(
    function(){ $("#Layer-37").show(); $("#Layer-38").hide(); },
    function(){ $("#Layer-38").show(); $("#Layer-37").hide(); });
  $("#Layer-39").addClass("Wrap-40-39").hide();
  $("#Layer-40").addClass("Wrap-40-39");
  $(".Wrap-40-39").hover(
    function(){ $("#Layer-39").show(); $("#Layer-40").hide(); },
    function(){ $("#Layer-40").show(); $("#Layer-39").hide(); });
  $("#Layer-41").addClass("Wrap-42-41").hide();
  $("#Layer-42").addClass("Wrap-42-41");
  $(".Wrap-42-41").hover(
    function(){ $("#Layer-41").show(); $("#Layer-42").hide(); },
    function(){ $("#Layer-42").show(); $("#Layer-41").hide(); });















































});
