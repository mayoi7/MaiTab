# MaiTab
MaiTab是一款chrome插件，用于代替新标签页，同时提供了一系列辅助功能，包括自动清理百度搜索的广告.

## 使用方法
- 将项目下载到本地
- 参考[如何使用Chrome浏览器，打包生成自己的插件](https://blog.csdn.net/wanwuguicang/article/details/79742017)
- 安装好插件后，在插件的选项页可设置是否开启搜索广告清理

## 项目结构
```
MaiTab:
│  .gitattributes
│  .gitignore
│  list.txt
│  manifest.json
|  HISTORY.md
│  README.md
│  
├─css
│      newtab.css
│      option.css
│      popup.css
│      
├─html
│      newtab.html
│      option.html
│      popup.html
│      
├─img
│      icon128.png
│      icon16.png
│      icon48.png
│      
├─js
│      background.js
│      content-script.js
│      newtab.js
│      option.js
│      popup.js
│      
└─lib
        bootstrap.min.css
        jquery-min-1.12.4.js
        switch-button.css
```

## 已知问题
在360极速浏览器上使用时，导致覆写的newtab无效，暂时没有解决方案

## 备注
本产品仅限针对百度搜索

如果使用过程中发现未能正常清理广告，请先检查是否在此插件的选项页开启了对应设置，如果开启设置未生效，请刷新即可.

有任何bug或使用时的问题请联系acerola.orion@qq.com
