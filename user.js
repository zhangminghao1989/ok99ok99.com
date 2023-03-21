// ==UserScript==
// @name         学达云教育-建造师继续教育-自动上课
// @namespace    https://github.com/tankririri/ok99ok99.com
// @version      1.7.5
// @description  自动提交和播放下一节
// @license      GNU GPLv3
// @match        https://*.ok99ok99.com/*
// @require      https://code.jquery.com/jquery-1.11.3.min.js

// ==/UserScript==
console.log("学达云教育-建造师继续教育-自动上课开始运行！");
(function () {
	'use strict';
	setTimeout(function(){
		var info = 0;
		var myval = setInterval(function () {
			if(!/p[0-9]+\.ok99ok99\.com/.test(window.location.host)){
				if($("#divwxck > div").length == 0){
					alert("请进行微信验证，验证完成后手动刷新页面！");
					console.log("请进行微信验证，验证完成后手动刷新页面！");
					clearInterval(myval);
				} else {
					if(info == 0){
						$("p:contains('学习时间大于计划时间才能提交')").after("<b>手动播放视频后开始自动上课！</b>");
						info = 1;
					}
					if($(".submit_btn").attr("disabled") != "disabled"){
						$(".submit_btn").click();
					}
					if($("span i.ico_shipin2.color_blue").length == 0){
						$(".ico_shipin2:first").click();
					}
				}
			}
		},5000)
	},10000)
})();
