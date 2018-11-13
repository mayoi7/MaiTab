/*jshint esversion: 6 */
$(function() {
  $('#search').on('click', function(event) {
    event.preventDefault();
    /* Act on the event */
    let val = encodeURIComponent($('#word').val());
    window.open("https://www.baidu.com/baidu?tn=baidu&word=" + val);
  });

  $('#word').bind('keypress',function(event){
    /* Act on the event */
    if(event.keyCode == 13) {
      let val = encodeURIComponent($('#word').val());
      window.open("https://www.baidu.com/baidu?tn=baidu&word=" + val);
    }
  });
});
