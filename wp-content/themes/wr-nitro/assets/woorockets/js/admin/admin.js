(function(f){f.fn.WR_ImagesLoaded=function(k){var i=function(m,n){var l=new Image;l.onload=n;l.src=m};var h=this.find("img").toArray().map(function(l){return l.src});if(h.length){var j=0;f(h).each(function(l,m){i(m,function(){j++;if(j==h.length){k()}})})}else{k()}};function e(){var i=f("#tabs-container .nitro-nav"),k=f("#tabs-container .tab-pane"),h=f(".trigger-tab"),j=window.location.hash;i.click(function(l){l.preventDefault();f(this).addClass("active").siblings().removeClass("active");k.removeClass("active").filter(f(l.target).attr("href")).addClass("active");history.pushState({},"",f(l.target).attr("href"))});h.on("click",function(l){l.preventDefault();i.filter('[href="'+f(l.target).attr("href")+'"]').trigger("click")});if(j){i.removeClass("active").filter('[href="'+j+'"]').addClass("active");k.removeClass("active").filter(j).addClass("active")}else{i.eq(0).addClass("active").siblings().removeClass("active");k.removeClass("active").filter(i.eq(0).attr("href")).addClass("active")}}function c(){f(".wr-scroll-animated").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var i=f(this.hash);var h=f("#wpadminbar").outerHeight();i=i.length?i:f("[name="+this.hash.slice(1)+"]");if(i.length){f("html,body").animate({scrollTop:i.offset().top-h-100+"px"},800);return false}}})}function d(){f('a[target="thickbox"]').each(function(h,j){if(!f(j).prop("wr_override_thickbox")){f(j).click(function(o){o.preventDefault();var n=f(this).attr("data-width"),i=f(this).attr("data-height");if(n.substr(-1)=="%"){n=f(window).width()*(parseInt(n)/100)}if(i.substr(-1)=="%"){i=f(window).height()*(parseInt(i)/100)}var m=f(this).attr("href")+(f(this).attr("href").indexOf("?")>-1?"&":"?")+"width="+n+"&height="+i;tb_show(f(this).attr("title"),m);f("#TB_closeWindowButton, #TB_overlay").off("click",tb_remove);var k=this,l=function(){var q=f(k).attr("data-width"),p=f(k).attr("data-height");if(q.substr(-1)=="%"){q=f(window).width()*(parseInt(q)/100)}if(p.substr(-1)=="%"){p=f(window).height()*(parseInt(p)/100)}TB_WIDTH=(q*1)+30;TB_HEIGHT=(p*1)+40;ajaxContentW=TB_WIDTH-30;ajaxContentH=TB_HEIGHT-45;f("#TB_ajaxContent").css({width:ajaxContentW,height:ajaxContentH});f("#TB_iframeContent").css({width:ajaxContentW+29,height:ajaxContentH+17});tb_position()};f(window).on("resize",l);f("#TB_closeWindowButton, #TB_overlay").click(function(q){q.preventDefault();var p=f("#TB_closeWindowButton").attr("data-prevent-close");if(p){if(f(this).attr("id")=="TB_closeWindowButton"){return alert(p)}}else{tb_remove(q)}f(window).off("resize",l)});return false});f(j).prop("wr_override_thickbox",true)}})}function b(){var h;f("#plugins").on("click",".install-plugin, .uninstall-plugin",function(j){j.preventDefault();if(f(this).attr("disabled")){return}var l=f(this).hasClass("install-plugin")?"install":"uninstall";var i=f.trim(f(this).prev().text().replace(/[\s\t\r\n]{2,99}/g," "));if(confirm(wr_nitro_admin["confirm_"+l+"_plugin"].replace("%PLUGIN%",i))){f(this).hide().after('<span class="spinner is-active"></span>');var k=f.proxy(function(){if("install"==l){switch(h){case"js_composer":return setTimeout(k,1000);break}h=f(this).attr("data-plugin")}f.ajax({context:this,url:wr_nitro_admin[l+"_plugin_url"],type:"POST",dataType:"json",data:{plugin:f(this).attr("data-plugin"),nonce:wr_nitro_admin[l+"_plugin_nonce"]},complete:function(m){if(!m.responseJSON&&(m.responseJSON=m.responseText.match(/\{"success":.+\}/))){m.responseJSON=f.parseJSON(m.responseJSON[0])}if(!m.responseJSON||!m.responseJSON.success){if(m.responseJSON&&m.responseJSON.data){alert(m.responseJSON.data)}else{alert(m.responseText?m.responseText:wr_nitro_admin.unknown_error)}"install"==l&&(h=null)}else{f(this).removeClass(l+"-plugin").addClass((l=="install"?"uninstall":"install")+"-plugin");f(this).text(wr_nitro_admin[l=="install"?"uninstall":"install"]);if("install"==l){switch(h){case"js_composer":f.ajax({url:ajaxurl.replace("admin-ajax.php","index.php"),complete:function(){h=null}});break;default:h=null;break}}}f(this).show().next().remove()}})},this);k()}})}function g(){f("#demos .install-sample, #demos .uninstall-sample").click(function(h){h.preventDefault();if(f(this).attr("disabled")){return}var j=f(this).hasClass("install-sample")?"install":"uninstall";var o=f.trim(f(this).parent().children("h5").text().replace(/[\s\t\r\n]{2,99}/g," "));var p=function(s){f("#TB_closeWindowButton").attr("data-prevent-close",wr_nitro_admin.close_prevented);var r="package="+s+"&step=2&nonce="+wr_nitro_admin.install_sample_nonce+"&"+f("#sample-data-installation-options input").serialize();f.ajax({url:wr_nitro_admin.install_sample_url,dataType:"json",data:r,complete:function(t){if(!t.responseJSON||!t.responseJSON.success){f("#wr-install-sample-data-download-package .spinner").removeClass("spinner").addClass("dashicons dashicons-no-alt");f("#wr-install-sample-data-download-package .wr-status").removeClass("hidden");if(t.responseJSON&&t.responseJSON.data){f("#wr-install-sample-data-download-package .wr-status").html(t.responseJSON.data)}else{if(t.responseText){f("#wr-install-sample-data-download-package .wr-status").html(t.responseText)}else{f("#wr-install-sample-data-download-package .wr-status").html(wr_nitro_admin.unknown_error)}}if(f('#sample-data-installation-options input[name="option"]:checked').val()=="page"){return m()}return l(s)}f("#wr-install-sample-data-download-package .spinner").removeClass("spinner").addClass("dashicons dashicons-yes");i(s)}})},l=function(r){f("#TB_closeWindowButton").removeAttr("data-prevent-close");f("#wr-install-sample-data-manually").removeClass("hidden");f("#wr-upload-sample-data").load(function(s){var t=f(this).contents().find("body").text(),u=f.parseJSON(t);if(!u||!u.success){f("#wr-install-sample-data-upload-package .spinner").removeClass("spinner").addClass("dashicons dashicons-no-alt");f("#wr-install-sample-data-upload-package .wr-status").removeClass("hidden");if(u&&u.data){f("#wr-install-sample-data-upload-package .wr-status").html(u.data)}else{if(t){f("#wr-install-sample-data-upload-package .wr-status").html(t)}else{f("#wr-install-sample-data-upload-package .wr-status").html(wr_nitro_admin.unknown_error)}}return m()}f("#wr-install-sample-data-upload-package .spinner").removeClass("spinner").addClass("dashicons dashicons-yes");i(r)});f("#wr-upload-sample-data-package").click(function(){f("#wr-install-sample-data-upload-package").removeClass("hidden");f("#wr-install-sample-data-manually").addClass("hidden");var s=f(this.form).find('input[name="nonce"]');if(!s.length){s=f('<input name="nonce" value="" />').appendTo(this.form)}s.val(wr_nitro_admin.install_sample_nonce);f(this.form).submit()})},i=f.proxy(function(s){f("#TB_closeWindowButton").attr("data-prevent-close",wr_nitro_admin.close_prevented);f("#wr-install-sample-data-import-data").removeClass("hidden");var r=wr_nitro_admin.install_sample_url+"&package="+s+"&step=3&nonce="+wr_nitro_admin.install_sample_nonce+"&"+f("#sample-data-installation-options input").serialize();f("#nitro-manipulate-sample-data").off("load").load(f.proxy(function(u){var t={responseText:f(u.target).contents().find("body").text(),responseJSON:f(u.target).contents().find("body").text().match(/\{"success":.+\}/)};if(t.responseJSON){t.responseJSON=f.parseJSON(t.responseJSON[0])}if(!t.responseJSON||!t.responseJSON.success){f("#wr-install-sample-data-import-data .spinner").removeClass("spinner").addClass("dashicons dashicons-no-alt");f("#wr-install-sample-data-import-data .wr-status").removeClass("hidden");if(t.responseJSON&&t.responseJSON.data){f("#wr-install-sample-data-import-data .wr-status").html(t.responseJSON.data)}else{if(t.responseText){f("#wr-install-sample-data-import-data .wr-status").html(t.responseText)}else{f("#wr-install-sample-data-import-data .wr-status").html(wr_nitro_admin.unknown_error)}}return m()}var v=f.proxy(function(){f("#wr-install-sample-data-import-data .spinner").removeClass("spinner").addClass("dashicons dashicons-yes");f("#demos .uninstall-sample").addClass("hidden");f("#demos .install-sample").removeClass("hidden");f(this).addClass("hidden").parent().children(".uninstall-sample").removeClass("hidden");if(t.responseJSON.data&&t.responseJSON.data.required_plugins){return n(s,t.responseJSON.data)}if(t.responseJSON.data&&t.responseJSON.data.demo_assets){return q(s,t.responseJSON.data.demo_assets)}m(true)},this);if(t.responseJSON.data&&t.responseJSON.data.refresh_nonce){window.wr_nitro_refresh=t.responseJSON.data.refresh_nonce;k(v)}else{v()}},this)).attr("src",r)},this),k=function(r){f.ajax({url:wr_nitro_admin.refresh_nonce_url,dataType:"json",data:{nonce:wr_nitro_refresh},complete:function(s){if(s.responseJSON&&s.responseJSON.success){for(var t in s.responseJSON.data){wr_nitro_admin[t]=s.responseJSON.data[t]}}if(typeof r=="function"){r()}}})},n=function(t,s){if(s.required_plugins.length){var r=function(u){u=u||0;f("#wr-install-sample-data-required-plugins .install-status").text((u+1)+"/"+s.required_plugins.length+": "+s.required_plugins[u]);f("#wr-install-sample-data-required-plugins .progress-bar").css("width",Math.round((u/s.required_plugins.length)*100)+"%");f("#wr-install-sample-data-required-plugins .percentage").text(Math.round((u/s.required_plugins.length)*100));return f.ajax({url:wr_nitro_admin.install_plugin_url,type:"POST",dataType:"json",data:{plugin:s.required_plugins[u],nonce:wr_nitro_admin.install_plugin_nonce},complete:function(v){if(!v.responseJSON&&(v.responseJSON=v.responseText.match(/\{"success":.+\}/))){v.responseJSON=f.parseJSON(v.responseJSON[0])}if(!v.responseJSON||!v.responseJSON.success){if(v.responseJSON&&v.responseJSON.data){var y=v.responseText.match(/<div class="error">(.+)<\/div>/);if(y){y=y[1]}else{y=v.responseJSON.data}if(y=="NONCE_EXPIRED"){var w=false,x=(new Date()).getTime(),z=function(){var A=document.getElementById("wp-auth-check-frame");if(!w){if(A){w=true}}else{if(!A){return k(function(){r(u)})}}if((new Date()).getTime()-x<(60*1000)){setTimeout(z,200)}else{f("#wr-install-sample-data-required-plugins .wr-status").removeClass("hidden");f("#wr-install-sample-data-required-plugins .wr-status").append('<span class="session-expired">'+(f("#wr-install-sample-data-required-plugins .wr-status").html()!=""?"<br>":"")+wr_nitro_admin.session_expired+' <a href="'+wr_nitro_admin.login_link+'" target="_blank" rel="noopener noreferrer">'+wr_nitro_admin.login_again+"</a></span>");window.wr_nitro_refesh_nonces_interval=setInterval(function(){k(function(){r(u)})},5000)}};if(!window.wr_nitro_refeshed_nonces){k(function(){r(u)});window.wr_nitro_refeshed_nonces=true}else{z()}return}}else{y=wr_nitro_admin.install_plugin_failed.replace("%s",s.required_plugins[u])}f("#wr-install-sample-data-required-plugins .wr-status").removeClass("hidden");if(f("#wr-install-sample-data-required-plugins .wr-status").html()!=""){f("#wr-install-sample-data-required-plugins .wr-status").append("<br>")}f("#wr-install-sample-data-required-plugins .wr-status").append(y)}else{if(window.wr_nitro_refesh_nonces_interval){f("#wr-install-sample-data-required-plugins .wr-status .session-expired").remove();clearInterval(wr_nitro_refesh_nonces_interval)}}if(u+1==s.required_plugins.length){f("#wr-install-sample-data-required-plugins .install-status").addClass("hidden");f("#wr-install-sample-data-required-plugins .progress").addClass("hidden");if(f("#wr-install-sample-data-required-plugins .wr-status").hasClass("hidden")){f("#wr-install-sample-data-required-plugins .spinner").removeClass("spinner").addClass("dashicons dashicons-yes");if(s.demo_assets){return q(t,s.demo_assets)}m(true)}else{f("#wr-install-sample-data-required-plugins .spinner").removeClass("spinner").addClass("dashicons dashicons-no-alt");m()}return}switch(s.required_plugins[u]){case"js_composer":f.ajax({url:ajaxurl.replace("admin-ajax.php","index.php"),complete:function(){r(u+1)}});break;default:r(u+1);break}}})};f("#wr-install-sample-data-required-plugins").removeClass("hidden");r()}else{if(s.demo_assets){return q(t,s.demo_assets)}m(true)}},q=function(t,s){var r=function(u){u=u||0;f("#wr-install-sample-data-demo-assets .download-status").text((u+1)+"/"+s.length+": "+s[u]);f("#wr-install-sample-data-demo-assets .progress-bar").css("width",Math.round((u/s.length)*100)+"%");f("#wr-install-sample-data-demo-assets .percentage").text(Math.round((u/s.length)*100));f.ajax({url:wr_nitro_admin.install_sample_url,data:{"package":t,step:4,asset:u,nonce:wr_nitro_admin.install_sample_nonce},complete:function(){if(u+1==s.length){f("#wr-install-sample-data-demo-assets .spinner").removeClass("spinner").addClass("dashicons dashicons-yes");f("#wr-install-sample-data-demo-assets .download-status").addClass("hidden");f("#wr-install-sample-data-demo-assets .progress").addClass("hidden");return m(true)}r(u+1)}})};f("#wr-install-sample-data-demo-assets").removeClass("hidden");r()},m=function(r){f("#TB_closeWindowButton").removeAttr("data-prevent-close");if(r){f("#wr-install-sample-data-success-message").removeClass("hidden")}else{f("#wr-install-sample-data-failure-message").removeClass("hidden")}};switch(j){case"install":f.ajax({context:this,url:wr_nitro_admin.install_sample_url,dataType:"json",data:{"package":f(this).attr("data-package"),nonce:wr_nitro_admin.install_sample_nonce},complete:function(r){if(!r.responseJSON||!r.responseJSON.data){f("#TB_ajaxContent").append(r.responseText?r.responseText:wr_nitro_admin.unknown_error)}else{f("#TB_ajaxContent").append(r.responseJSON.data);f("#TB_ajaxContent").on("click",'#sample-data-installation-options input[name="option"]',function(s){f("#sample-data-installation-options .select-page")[this.value=="full"?"hide":"show"]()}).on("click","#sample-data-installation-options .select-page .box",function(s){f(this).toggleClass("selected");if(f(this).hasClass("selected")){f(this).children('input[type="checkbox"]').attr("checked","checked")}else{f(this).children('input[type="checkbox"]').removeAttr("checked")}}).on("click","#confirm-sample-data-installation",function(s){if(s.target.checked){f("#go-to-sample-data-installation-step-2").removeAttr("disabled")}else{f("#go-to-sample-data-installation-step-2").attr("disabled","disabled")}}).on("click","#cancel-sample-data-installation",function(s){f("#TB_closeWindowButton").trigger("click")}).on("click","#go-to-sample-data-installation-step-2",function(s){f("#sample-data-installation-step-1").addClass("hidden");f("#sample-data-installation-step-2").removeClass("hidden");p(f("#sample-data-installation-step-2").attr("data-package"))})}}});break;case"uninstall":f.ajax({context:this,url:wr_nitro_admin.uninstall_sample_url,dataType:"json",data:{"package":f(this).attr("data-package"),nonce:wr_nitro_admin.uninstall_sample_nonce},complete:function(r){if(!r.responseJSON||!r.responseJSON.data){f("#TB_ajaxContent").append(r.responseText?r.responseText:wr_nitro_admin.unknown_error)}else{f("#TB_ajaxContent").append(r.responseJSON.data);f("#TB_ajaxContent").on("click","#confirm-sample-data-uninstallation",function(s){if(s.target.checked){f("#go-to-sample-data-installation-step-2").removeAttr("disabled")}else{f("#go-to-sample-data-installation-step-2").attr("disabled","disabled")}}).on("click","#cancel-sample-data-installation",function(s){f("#TB_closeWindowButton").trigger("click")}).on("click","#go-to-sample-data-installation-step-2",f.proxy(function(s){f("#demos").find(".install-sample, .uninstall-sample").attr("disabled","disabled");f(this).addClass("hidden").after('<span class="spinner is-active"></span>');f("#TB_closeWindowButton").trigger("click");f("#nitro-manipulate-sample-data").off("load").load(f.proxy(function(u){var t={responseText:f(u.target).contents().find("body").text(),responseJSON:f(u.target).contents().find("body").text().match(/\{"success":.+\}/)};if(t.responseJSON){t.responseJSON=f.parseJSON(t.responseJSON[0])}if(!t.responseJSON||!t.responseJSON.success){if(t.responseJSON&&t.responseJSON.data){alert(t.responseJSON.data)}else{alert(t.responseText?t.responseText:wr_nitro_admin.unknown_error)}f(this).removeClass("hidden").next().remove();return f("#demos").find(".install-sample, .uninstall-sample").removeAttr("disabled")}window.location.reload()},this)).attr("src",wr_nitro_admin.uninstall_sample_url+"&step=2&package="+f(this).attr("data-package")+"&nonce="+wr_nitro_admin.uninstall_sample_nonce)},this))}}});break}})}function a(){if(typeof f.fn.magnificPopup=="undefined"){return setTimeout(a,100)}f(".open-purchase-code").magnificPopup({type:"image",mainClass:"mfp-fade",removalDelay:160})}f(document).ready(function(){e();c();d();b();g();if(f(".open-purchase-code").length){a()}})})(jQuery);