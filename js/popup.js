$('#start-clear').bind('click', function() {
  chrome.storage.sync.set({'normal_clear': true}, function() {

  });
});
