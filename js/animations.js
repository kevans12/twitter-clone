//hiding the buttons
$(document).ready(function() {
  $('#tweet-controls').hide();
});
//expanding box when clicked and then shrinking it again
$(document).ready(function() {
  $('.tweet-compose').focus(function() {
    $(this).css('height', '5em');
    $('#tweet-controls').show();
  });
  $('.tweet-compose').blur(function() {
    $(this).css('height', '2.5em');
    // $('#tweet-controls').hide();
  });
//decreasing the character count in the tweet box
maxCharacters = 140;
$('.tweet-compose').text(maxCharacters);
$('.tweet-compose').bind('keyup keydown', function() {
    var count = $('#char-count');
    var characters = $(this).val().length;
    if ((characters + 10) > maxCharacters) {
        count.css('color', 'red');
    } else {
        count.css('color', 'black');
    };
    count.text(maxCharacters - characters);

    if(characters > maxCharacters){
      $('#tweet-submit').prop('disabled', true);
    } else {
      $('#tweet-submit').prop('disabled',false);
    };
});
//adding tweets to the stream
function tweetContent() {
  var myTweet = $('.tweet-compose').val();
  return myTweet;
}

$('#tweet-submit').click(function() {
  $('#stream').prepend(
    '<div class = "tweet">'+
    '<img class="avatar" src="img/kyle.jpg" />' +
    '<strong class = "fullname">Kyle Evans </strong>' +
    '<span class="username">@kylelarryevans</span>' +
    '<p class="tweet-text">' +
    tweetContent() +
    '</p>' +
    '<div class = "tweet-actions">'+
    '<ul>' +
      '<li><span class="icon action-reply"></span> Reply</li>' +
      '<li><span class="icon action-retweet"></span> Retweet</li>' +
      '<li><span class="icon action-favorite"></span> Favorite</li>' +
      '<li><span class="icon action-more"></span> More</li>' +
    '</ul>' +
    '</div>' +
    '<div class="stats">' +
      '<div class="retweets">' +
        '<p class="num-retweets">1,000</p>'+
      '  <p> RETWEETS</p>'+
      '</div>'+
    '  <div class="favorites">'+
      '  <p class="num-favorites">500</p>'+
        '<p> FAVORITES</p>'+
    '  </div>'+
      '<div class="users-interact">'+
        '<div>'+
  '</div>') +
hideTweetActions(); +
hideRetweets();
  });

//hide tweet-actions unless we hover over the tweet
function hideTweetActions() {
$('.tweet-actions').hide();
$('.tweet').off('hover');
$('.tweet').hover(
  function(){
   $(this).find('.tweet-actions').show();},
  function(){
   $(this).find('.tweet-actions').hide();}
   );
};
hideTweetActions();
//hide retweets etc unless we click on tweet
function hideRetweets() {
$('.stats').hide();
$('.tweet').off('click');
$('.tweet').click(
  function(){
    $(this).find('.stats').toggle();}
  );
};
hideRetweets();

//hover over the images
$('[data-toggle="tooltip"]').tooltip();
$("#jenny").html('<a id = "sammy" href="#" data-toggle="tooltip" title=""><img id = "jenny" class="avatar" src="img/jennyshen.jpg"/></a>');
$("#sammy").tooltip({content:"<img src='img/sammy.jpg'/>"});

});//ending
