// ==UserScript==
// @name         学达云教育-二级建造师继续教育(河南)-自动上课
// @version      1.4
// @description  自动提交和播放下一节，参考Tuziang和felixXHX的脚本制作
// @match        *://ok99ok99.com/*
// @match        *://*.ok99ok99.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    setTimeout(function(){
        var right = document.getElementById("rightiframe").contentWindow.document
        var left = document.getElementById("leftiframe").contentWindow.document
        var alert_count = 0
        setInterval(function () {
            if(right.getElementById("TB_ajaxWindowTitle") && right.getElementsByClassName("btn_Dora_b").length == 0){
                if (alert_count == 0) {
                    alert("请进行微信验证，验证完成后手动刷新页面！");
                    alert_count = 1;
                } else {
                console.log("请进行微信验证，验证完成后手动刷新页面！");}
            } else {
            console.log(right.getElementById("SaveStudyRecord").disabled)
            if(right.getElementsByClassName("btn_Dora_b").length > 0){
                right.getElementsByClassName("btn_Dora_b")[0].click()
                var lists = left.getElementsByClassName("nofinished")
                lists[0].getElementsByTagName("a")[0].click()
                location.reload()
            }
            if(right.getElementById("SaveStudyRecord").disabled != true){
                right.getElementById("SaveStudyRecord").click()
            }}
        },5000)
    },10000)
    setTimeout(function(){
        var right = document.getElementById("rightiframe").contentWindow.document
        var left = document.getElementById("leftiframe").contentWindow.document
        if(right.getElementById("TB_ajaxWindowTitle") && right.getElementsByClassName("btn_Dora_b").length == 0){
            console.log(right.getElementById("TB_ajaxWindowTitle").disabled)
        } else {
            if(right.getElementById("curtime").innerText=="00:00:00"){
            location.reload()
        }}
    },5000)
})();
