/*jshint esversion: 6 */
console.log("content-script run");
let isEnd = false;  // 是否清除了百度异步加载的广告
let count = 0;
let needClear = true;

/* true: 是广告*/
function checkIfAds($child) {
  let $id = $child.attr('id');
  if($child.attr('class').search('result') < 0) {
    return true;
  } else if($id == undefined) {
    return true;
  } else if($id == "1" && '广告' == $child.find('span').text()) {
    return true;
  } else return false;
}

// 检查是否包含广告
// （广告的形式确定了，为了避免拖慢用户打开网页的速度，定义一个新的方法来判断）
function lightCheckIfAds($child) {
  let $id = $child.attr('id');
  if($child.attr('class').search('result') < 0) return true;
  if($id == "1" && '广告' == $child.find('span').text()) {
    return true;
  } else return false;
}

/* 避免百度再次添加广告，重复一遍检索 */
function clearAdsAgain() {
  // 百度再次添加的广告都是id为1的
  let $childs =  $('#content_left').children();
  $childs.each(function() {
    if(lightCheckIfAds($(this) ) ) {
      $(this).hide();
      isEnd = true; // 查询到百度添加广告后就停止
    } else {
      $(this).show();
    }
  });
}

/* 清除百度(搜索)的广告 */
function clearAdsInBaidu() {
  let $childs =  $('#content_left').children();
  $childs.each(function() {
    if(lightCheckIfAds($(this) ) ) {
      $(this).hide();
    } else {
      $(this).show();
    }
  });
}

function finalClearAdsInBaidu() {
  clearAdsInBaidu();
  count = 0;
  let time = setInterval(function(){
    clearAdsAgain();
    count += 1;
    if(count >= 50) clearInterval(time);
    console.log('test once');
  }, 200);
}

chrome.storage.sync.get({'normal_clear': false}, function(items) {
  console.log(items.normal_clear);
  if(items.normal_clear == true) {
    needClear = true;
    finalClearAdsInBaidu();
  } else {
    needClear = false;
  }
});

// 收到background发来的消息时进行再次清理
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.reclear == true) {  // 判断是否为要处理的消息
    finalClearAdsInBaidu();
    sendResponse({"result": "ok"});
  }
});
