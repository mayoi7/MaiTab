/*jshint esversion: 6 */
$(function() {
  $('#search').on('click', function(event) {
    event.preventDefault();
    /* Act on the event */
    let val = $('#word').val();
    window.open("https://www.baidu.com/baidu?tn=baidu&word=" + val);
  });
});
