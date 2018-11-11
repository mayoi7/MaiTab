/*jshint esversion: 6 */
chrome.storage.sync.get({'normal_clear': false, 'right_clear': false}, function(items) {
  if(items.normal_clear == true) {
    $('#normal_clear').prop('checked', 'true');
  }
  if(items.right_clear == true) {
    $('#right_clear').prop('checked', 'true');
  }
});

$(function() {
  // 绑定清理搜索广告的按钮事件
  $('#normal_clear').on('change', function(event) {
    event.preventDefault();
    /* Act on the event */
    if($('#normal_clear').is(':checked')) {
      chrome.storage.sync.set({'normal_clear': true}, function(items) {});
    } else {
      chrome.storage.sync.set({'normal_clear': false}, function(items) {});
    }
  });

  // 绑定清理右侧广告的按钮事件
  $('#right_clear').on('change', function(event) {
    event.preventDefault();
    /* Act on the event */
    if($('#right_clear').is(':checked')) {
      chrome.storage.sync.set({'right_clear': true}, function(items) {});
    } else {
      chrome.storage.sync.set({'right_clear': false}, function(items) {});
    }
  });
});
