void 0===TCB_Front.js_modules["progress-bar"]&&TCB_Front.setModuleLoadedStatus("progress-bar",!1),function(e,t){if(TCB_Front.isModuleLoaded("progress-bar"))return;e(window).on("tcb_after_dom_ready",(()=>s.init(e("body"))));let s={},a=e=>{if(!e)return 0;let t=e.offsetWidth;const s=getComputedStyle(e);return t+=parseInt(s.marginLeft)+parseInt(s.marginRight),t},r=function(e){let s=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const a=t.inlineCssVariable(e,"--nodes-completed"+(s?"-dual":"")),r=parseInt(a),l=a-r,o=e.querySelectorAll(".tve-progress-line--fill"+(s?"-dual":""));Array.prototype.forEach.call(o,(e=>{t.inlineCssVariable(e,{["--progress"+(s?"-dual":"")]:"0%"})}));for(let e=0;e<r;e++)o[e]&&t.inlineCssVariable(o[e],{["--progress"+(s?"-dual":"")]:"100%"});if(l&&o[r]&&t.inlineCssVariable(o[r],{["--progress"+(s?"-dual":"")]:"50%"}),tve_frontend_options.is_editor_page&&e.classList.contains("thrv_data_element_start")&&(e.classList.remove("thrv_data_element_start"),setTimeout((()=>{e.classList.add("thrv_data_element_start")}),100)),!s){const t=e.querySelectorAll(".tve-progress-node"),s=e.querySelectorAll(".tve-progress-icon"),a=e.querySelectorAll(".tve-progress-label-wrapper--nodes .tve-progress-label");for(let e=0;e<=t.length;e++)t[e]&&(t[e].classList.remove("tve-state-expanded"),s[e].classList.remove("tve-state-expanded"),a[e].classList.remove("tve-state-expanded"));if(r)for(let e=0;e<=r;e++)t[e]&&(t[e].classList.add("tve-state-expanded"),s[e].classList.add("tve-state-expanded"),a[e].classList.add("tve-state-expanded"));l&&t[r]&&(t[r].classList.add("tve-state-expanded"),s[r].classList.add("tve-state-expanded"),a[r].classList.add("tve-state-expanded"))}},l=function(e){let s=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const r=e.getAttribute(`data${s?"-dual":""}-field`),l=e.getAttribute(`data${s?"-dual":""}-fd`),o=e.getAttribute(`data${s?"-dual":""}-value`),i=e.getAttribute(`data${s?"-dual":""}-dv`),d=e.querySelectorAll(".tve-progress-label-wrapper--nodes .tve-progress-label").length,n=e.getAttribute(`data${s?"-dual":""}-value-shortcode`);let p;if(!s||!["apprentice"].includes(e.dataset.field)){if("request_data"===r){switch(l){case"query":p=t.queryString.get(o);break;case"post":p=tve_frontend_options.post_request_data?tve_frontend_options.post_request_data[o]:0;break;case"cookie":p=t.getCookie(o)}p=p||i}else if("apprentice"===r){try{const s=tve_frontend_options.is_editor_page?{total:a?d:4,completed:a?d/2:2}:JSON.parse(n),r=Number(s.is_current_completed)?s.completed:s.completed+1;if(a)p=s.completed,t.inlineCssVariable(e,{"--nodes-completed-dual":Math.min(r,d)});else{if(!s.total)return void e.remove();p=s.completed/s.total*100,t.inlineCssVariable(e,{"--progress-dual":`${Math.min(r/s.total*100,100)}%`})}}catch(e){}p=p||i}else p=n;p=Number(p),p=isNaN(p)?0:Math.min(p,a?d:100),t.inlineCssVariable(e,{[a?"--nodes-completed"+(s?"-dual":""):"--progress"+(s?"-dual":"")]:`${p}${a?"":"%"}`})}},o=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.$body;return e.find(".tve-progress-bar-wrapper").addBack(".tve-progress-bar-wrapper")};s.handleLabelPosition=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.$body;o(e).each(((e,t)=>{if("nodes"===t.dataset.type){const e=t.querySelectorAll(".tve-progress-label-wrapper--nodes .tve-progress-label"),s=t.querySelectorAll(".tve-progress-node");for(let t=0;t<s.length;t++)e[t].style.setProperty("left",s[t].offsetLeft+Math.ceil(s[t].offsetWidth/2)-a(e[t])/2+"px"),tve_frontend_options.is_editor_page||e[t].style.setProperty("visibility","visible")}}))},s.fillNodes=e=>{e.each(((e,t)=>{r(t),t.classList.contains("with-dual-progress")&&r(t,!0)})),s.toggleLabels(e)},s.handleDynamicValues=e=>{e.hasClass("tve-progress-bar-wrapper")||(e=e.find(".tve-progress-bar-wrapper")),e.filter("[data-field],[data-dual-field]").each(((e,s)=>{let a=s.classList.contains("with-dual-progress"),o="nodes"===s.dataset.type;l(s,!1,o),a&&l(s,!0,o),o&&(r(s),a&&r(s,!0)),s.dataset.field&&!tve_frontend_options.is_editor_page&&((e,s)=>{let a="block",r=parseFloat(t.inlineCssVariable(e,s?"--nodes-completed":"--progress"));s&&e.querySelectorAll(".tve-progress-node").length===r&&(r=100),(0===r&&parseInt(e.dataset.hideEmpty)||100===r&&parseInt(e.dataset.hideFull))&&(a="none"),e.style.setProperty("display",a,"important")})(s,o)}))},s.toggleLabels=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.$body;o(s).each(((s,a)=>{const r=e(a),l=r.find(".tve-progress-label-wrapper--nodes .tve-progress-label");if("current"===TCB_Front.getMediaAttr(r,"data-label-display")){const e=parseInt(t.inlineCssVariable(r,"--nodes-completed"));l.css("visibility","hidden"),l.eq(e).css("visibility","visible")}else l.css("visibility","visible")}))},s.init=e=>{const a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.$body;s.handleLabelPosition(e),s.toggleLabels()};s.handleDynamicValues(o(e)),a(),t.addResizeCallback((()=>{a()})),t.$document.on("switchstate",(function(e,t){a(t)}))},window.TCB_Front.progressBar=s,TCB_Front.setModuleLoadedStatus("progress-bar",!0)}(ThriveGlobal.$j,TCB_Front);