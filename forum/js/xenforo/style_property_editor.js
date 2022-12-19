/*
 * XenForo style_property_editor.min.js
 * Copyright 2010-2017 XenForo Ltd.
 * Released under the XenForo License Agreement: http://xenforo.com/license-agreement
 */
var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.findInternal=function(a,d,c){a instanceof String&&(a=String(a));for(var e=a.length,b=0;b<e;b++){var f=a[b];if(d.call(c,f,b,a))return{i:b,v:f}}return{i:-1,v:void 0}};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,d,c){a!=Array.prototype&&a!=Object.prototype&&(a[d]=c.value)};
$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);$jscomp.polyfill=function(a,d,c,e){if(d){c=$jscomp.global;a=a.split(".");for(e=0;e<a.length-1;e++){var b=a[e];b in c||(c[b]={});c=c[b]}a=a[a.length-1];e=c[a];d=d(e);d!=e&&null!=d&&$jscomp.defineProperty(c,a,{configurable:!0,writable:!0,value:d})}};
$jscomp.polyfill("Array.prototype.find",function(a){return a?a:function(a,c){return $jscomp.findInternal(this,a,c).v}},"es6","es3");
!function(a,d,c,e){XenForo.StylePropertyForm=function(b){b.bind("submit",function(f){var c=a("#propertyTabs").data("XenForo.Tabs");f=c.getCurrentTab();c=c.api.getCurrentTab().closest("li.PropertyTab");b.find("input[name=tab_index]").val(f);b.find("input[name=tab_id]").val(c.attr("id"));f=b.serialize();var d=b.find("input:not(input[type=hidden]), select, textarea"),e=a('<input type="hidden" name="_xfStylePropertiesData" />');d.each(function(){var b=a(this);b.data("attr-name",b.attr("name"));b.removeAttr("name")});
e.val(f).appendTo(b);setTimeout(function(){d.each(function(){var b=a(this);b.attr("name",b.data("attr-name"))});e.remove()},100)});location.hash&&(0==location.hash.indexOf("#tab-")?a("#propertyTabs").data("XenForo.Tabs").click(parseInt(location.hash.substr(5),10)):a("#propertyTabs").data("XenForo.Tabs").click(a("#propertyTabs > li").index(c.getElementById(location.hash.substr(1)))))};XenForo.StylePropertyEditor=function(b){b.find(".TextDecoration input:checkbox").click(function(b){b=a(b.target);console.log("Text-decoration checkbox - Value=%s, Checked=%s",
b.attr("value"),b.is(":checked"));b.is(":checkbox")||b.prop("checked",!b.is(":checked"));b.is(":checked")&&("none"==b.attr("value")?a(this).not('[value="none"]').prop("checked",!1):a(this).filter('[value="none"]').prop("checked",!1))})};XenForo.StylePropertyTooltip=function(b){if(!(800>a(d).width())){var c=b.find("div.DescriptionTip").addClass("xenTooltip propertyDescriptionTip").appendTo("body").append('<span class="arrow" />');c.length&&b.tooltip(XenForo.configureTooltipRtl({position:"bottom left",
offset:[-24,-6],tip:c,delay:0}))}};XenForo.register("#PropertyForm","XenForo.StylePropertyForm");XenForo.register(".StylePropertyEditor","XenForo.StylePropertyEditor");XenForo.register("#propertyTabs > li","XenForo.StylePropertyTooltip")}(jQuery,this,document);