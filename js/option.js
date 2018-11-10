/*jshint esversion: 6 */
chrome.storage.sync.get({'normal_clear': false}, function(items) {
  if(items.normal_clear == true) {
    $('#normal_clear').prop('checked', 'true');
  }
});

$(function() {
  $('#normal_clear').on('change', function(event) {
    event.preventDefault();
    /* Act on the event */
    if($('#normal_clear').is(':checked')) {
      chrome.storage.sync.set({'normal_clear': true}, function(items) {});
    } else {
      chrome.storage.sync.set({'normal_clear': false}, function(items) {});
    }
  });
});
