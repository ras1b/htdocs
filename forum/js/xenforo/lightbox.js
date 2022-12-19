/*
 * XenForo lightbox.min.js
 * Copyright 2010-2017 XenForo Ltd.
 * Released under the XenForo License Agreement: http://xenforo.com/license-agreement
 */
var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.findInternal=function(a,e,d){a instanceof String&&(a=String(a));for(var l=a.length,h=0;h<l;h++){var t=a[h];if(e.call(d,t,h,a))return{i:h,v:t}}return{i:-1,v:void 0}};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,e,d){a!=Array.prototype&&a!=Object.prototype&&(a[e]=d.value)};
$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);$jscomp.polyfill=function(a,e,d,l){if(e){d=$jscomp.global;a=a.split(".");for(l=0;l<a.length-1;l++){var h=a[l];h in d||(d[h]={});d=d[h]}a=a[a.length-1];l=d[a];e=e(l);e!=l&&null!=e&&$jscomp.defineProperty(d,a,{configurable:!0,writable:!0,value:e})}};
$jscomp.polyfill("Array.prototype.find",function(a){return a?a:function(a,d){return $jscomp.findInternal(this,a,d).v}},"es6","es3");
!function(a,e,d,l){XenForo.LightBox=function(h,l){var w=a("#LightBox").prop("unselectable",!0),u=w.find(".imageNav"),m=a("#LbImg"),n=w.find(".imageContainer"),v=[],k=a("#LbThumbs"),p=k.data("thumbheight"),q=0,r=0,t="";a("#LbPrev, #LbNext, #LightBox .imageContainer").click(a.context(function(b){b.preventDefault();this.shift("LbPrev"==a(b.target).closest(".imageNav").attr("id")?-1:1);return!1},this));this.bindNav=function(){a(d).bind({"keydown.lightbox":a.context(function(a){switch(a.keyCode){case 37:case 38:return a.preventDefault(),
this.shift(-1);case 39:case 40:return a.preventDefault(),this.shift(1)}},this),"wheel.lightbox":a.context(function(a,f){f&&(a.preventDefault(),this.shift(0>f?1:-1))},this)})};this.unbindNav=function(b){a(d).unbind(".lightbox")};this.shift=function(b){var f=k.find("li:not(#LbThumbTemplate) a");f.each(a.context(function(c,d){if(a(d).data("src")==m.attr("src"))return c+=b,0>c?c=f.length-1:c>=f.length&&(c=0),f.eq(c).triggerHandler("click",[!0]),!1},this))};this.setThumbStrip=function(b){console.info("setThumbStrip(%o)",
b);var f=a("#LbThumbTemplate"),c=this;v=[];k.find("li").not(f).remove();r=0;b.find("img.LbImage").each(a.context(function(b,d){var g=a(d),e=g.parent(".LbTrigger").attr("href")||g.attr("src");if(g.parents(".ignored").length)return this;-1==a.inArray(e,v)&&(v.push(e),setTimeout(function(){preLoader=new Image;preLoader.src=e},1),f.clone().removeAttr("id").appendTo(k).find("a").data("src",e).data("el",g).click(a.context(function(a,b){a.preventDefault();this.setImage(g,b?0:XenForo.speed.fast)},this)).find("img").load(function(){var b=
this;setTimeout(function(){var c=a(b),f=c.width();c.height()>f?(c.css("width",p),c.css("top",(c.height()-p)/2*-1)):(c.css("height",p),c.css(XenForo.switchStringRTL("left"),(c.width()-p)/2*-1));c.css("visibility","visible")},0)}).error(function(){c.removeFailedThumb(this)}).attr("src",g.attr("src")))},this));switch(v.length){case 0:return!1;case 1:u.hide();break;default:u.show()}return this};this.removeFailedThumb=function(b){a(b).closest("li").remove();switch(k.find("li:not(#LbThumbTemplate)").length){case 0:return h.close(),
!1;case 1:u.hide();break;default:u.show()}this.setDimensions(!0);this.selectThumb(t,0);return!0};this.setImage=function(b,f){if(void 0===b)return n.find("img.LbImg").not(m).remove(),m.css("display","").removeAttr("src"),this;var c=b.closest(l),d=b.parent(".LbTrigger").attr("href")||b.attr("src"),e=this;var g=m.clone(!0).removeAttr("id").css("display","").attr("src","about:blank");var h=a.context(function(){n.find("img.LbImg").not(m).remove();g.css({maxWidth:n.width(),maxHeight:n.height()});g.prependTo(m.parent()).css({position:"static",
"margin-top":(n.height()-g.height())/2,visibility:"visible",display:""});g.attr("src",d);m.css("display","none").attr("src",d)},this);g.one("load",function(){setTimeout(h,0)}).one("error",function(){k.find("li:not(#LbThumbTemplate) a").each(function(b,c){a(c).data("src")==d&&e.removeFailedThumb(c)&&e.setImage(a(k.find("li:not(#LbThumbTemplate) a").get(Math.max(0,b-1))).data("el"),0)})});g.attr("src",d);this.selectThumb(d,f);this.setImageInfo(c,d);this.setContentLink(c);return this};this.selectThumb=
function(b,d){var c=k.find("li:not(#LbThumbTemplate) a");c.find("img").fadeTo(0,.5);void 0===b&&(b=m.attr("src"));c.each(function(e,f){if(a(f).data("src")==b){t=b;r=e*(p+3);k.stop();if(d){var g={};g[XenForo.switchStringRTL("left")]=q-r;k.animate(g,d,function(){a(f).find("img").fadeTo(d/6,1)})}else k.css(XenForo.switchStringRTL("left"),q-r),a(f).find("img").fadeTo(0,1);a("#LbSelectedImage").text(e+1);a("#LbTotalImages").text(c.length);return!1}});return this};this.setDimensions=function(b){var d=a(e).height()-
2*h.getConf().top-a("#LbUpper").outerHeight()-a("#LbLower").outerHeight();n.css({height:d,lineHeight:0});w.find("img.LbImg").css({maxWidth:n.width(),maxHeight:d});q=Math.max(0,(k.parent().width()-(p+2))/2);b&&console.log("thumbOffset = "+q+", thumbShift = "+r);k.css(XenForo.switchStringRTL("left"),q-r);a("#LbReveal").css(XenForo.switchStringRTL("left"),q).show();return this};this.resetHeight=function(){n.css({height:"",lineHeight:""})};this.setImageInfo=function(b,d){var c=b.find("a.avatar"),e=c.find("img");
if(e.length)c=e.attr("src");else if(c=c.find("span.img").css("background-image"))c=c.replace(/^url\(("|'|)([^\1]+)\1\)$/i,"$2");c?a("#LbAvatar img").attr("src",c):a("#LbAvatar img").attr("src","rgba.php?r=0&g=0&b=0");a("#LbUsername").text(b.data("author"));a("#LbDateTime").text(b.find(".DateTime:first").text());a("#LbNewWindow").attr("href",d);return this};this.setContentLink=function(b){(b=b.attr("id"))?a("#LbContentLink, #LbDateTime").attr("href",e.location.href).attr("hash","#"+b):a("#LbContentLink").text("").removeAttr("href");
return this}}}(jQuery,this,document);