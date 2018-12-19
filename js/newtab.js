/*jshint esversion: 6 */
$(function() {
  setBlurDegree();

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

$('#sb').bind('change', (e) => {
  let degree = $('#sb').val();
  $('.full-blur').css({
    filter: 'blur(' + (20 * degree / 100) + 'px)'
  });
  chrome.storage.sync.set({'blur_degree': degree}, function(items) {});
});

function setBlurDegree() {
  chrome.storage.sync.get({'blur_degree': 0}, function(items) {
    $('.full-blur').css({
      filter: 'blur(' + (20 * items.blur_degree / 100) + 'px)'
    });
    $('#sb').val(items.blur_degree);
  });
}
