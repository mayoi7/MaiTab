/*jshint esversion: 6 */

// right click on any page
// chrome.contextMenus.create({
//     title: "Go MaiTab",
//     // documentUrlPatterns: ['https://*.bilibili.com/*'], // 只在某些页面显示此右键菜单
//     onclick: function(){
//       console.log("go");
//       alert("yes");
//       top.location="/html/newtab.html";
//     }
// });

chrome.webRequest.onBeforeRequest.addListener((details) => {
    // 每次拦截到搜索的请求就重新清理广告
    // 发送一条一次性的消息
    // 如果设置了清理就清理
    chrome.storage.sync.get({'normal_clear': false, 'right_clear': false}, function(items) {
      if(items.normal_clear == true) {
        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
          chrome.tabs.sendMessage(tabs[0].id, { normal_clear: true }, (response) => {
            console.log("response: " + response);
          });
        });
      }

      if(items.right_clear == true) {
        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
          chrome.tabs.sendMessage(tabs[0].id, { right_clear: true }, (response) => {
            console.log("response: " + response);
          });
        });
      }
    });
  },
  {urls: [
    "*://*.baidu.com/*word=*",
    "*://*.baidu.com/*wd=*"
  ]}, ["blocking"]
);
