// right click on any page
chrome.contextMenus.create({
    title: "Go MaiTab",
    // documentUrlPatterns: ['https://*.bilibili.com/*'], // 只在某些页面显示此右键菜单
    onclick: function(){
      alert('success');
    }
});
