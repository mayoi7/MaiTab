/*jshint esversion: 6 */

// right click on any page
chrome.contextMenus.create({
    title: "Go MaiTab",
    // documentUrlPatterns: ['https://*.bilibili.com/*'], // 只在某些页面显示此右键菜单
    onclick: function(){
      alert('success');
    }
});

chrome.webRequest.onBeforeRequest.addListener((details) => {
    // 每次拦截到搜索的请求就重新清理广告
    // 发送一条一次性的消息
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { reclear: true }, (response) => {
        console.log("response: " + response);
      });
    });
  },
  {urls: [
    "*://*.baidu.com/*tn=baidu&word=*",
    "*://*.baidu.com/*tn=baidu&wd=*"
  ]}, ["blocking"]
);
