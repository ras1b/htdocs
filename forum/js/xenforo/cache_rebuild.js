/*
 * XenForo cache_rebuild.min.js
 * Copyright 2010-2017 XenForo Ltd.
 * Released under the XenForo License Agreement: http://xenforo.com/license-agreement
 */
!function(b,e,f,g){XenForo.CacheRebuild=function(a){this.__construct(a)};XenForo.CacheRebuild.prototype={__construct:function(a){this.$form=a;this.enabled=!0;a.submit(b.context(this,"formSubmit"));a.submit()},formSubmit:function(a){this.enabled&&(b("#ProgressText").show(),b("#ErrorText").hide(),b("input:submit",this.$form).hide(),b(f).trigger("PseudoAjaxStart"),.9<Math.random()||(XenForo.ajax(this.$form.attr("action"),this.$form.serializeArray(),b.context(this,"formSubmitResponse"),{error:b.context(this,
"formSubmitError"),timeout:125E3}),a.preventDefault()))},formSubmitResponse:function(a){var d=!1;if(a)try{a.error&&(d=!0);if(a._redirectTarget){e.location=a._redirectTarget;return}a.rebuildMessage||(a.rebuildMessage="");b(".RebuildMessage",this.$form).text(a.rebuildMessage);a.detailedMessage||(a.detailedMessage="");b(".DetailedMessage",this.$form).text(a.detailedMessage);a.showExitLink?b("#ExitLink").show():b("#ExitLink").hide();if(a.elements){for(var c in a.elements)b('input[name="'+c+'"]',this.$form).val(a.elements[c]);
this.$form.submit();return}}catch(h){}this._formSubmitError(d)},formSubmitError:function(a,b,c){this._formSubmitError(a&&4==a.readyState&&a.responseText)},_formSubmitError:function(a){this.enabled=!1;this.$form.data("MultiSubmitEnable")&&this.$form.data("MultiSubmitEnable")();b("#ProgressText").hide();b("#ErrorText").show();a?this.$form.submit():b("input:submit",this.$form).show()}};XenForo.register("form.CacheRebuild","XenForo.CacheRebuild")}(jQuery,this,document);
