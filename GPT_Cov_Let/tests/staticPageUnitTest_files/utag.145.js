try{!function(t,a){var e={id:"145"};utag.o[a].sender[145]=e,void 0===utag.ut&&(utag.ut={});var d=/ut\d\.(\d*)\..*/.exec(utag.cfg.v);void 0===utag.ut.loader||!d||parseInt(d[1])<41?e.loader=function(t,a,e,d,i,o){for(i in utag.DB(t),a=document,"iframe"==t.type?(e=(o=a.getElementById(t.id))&&"IFRAME"==o.tagName?o:a.createElement("iframe"),t.attrs=t.attrs||{},utag.ut.merge(t.attrs,{height:"1",width:"1",style:"display:none"},0)):"img"==t.type?(utag.DB("Attach img: "+t.src),e=new Image):((e=a.createElement("script")).language="javascript",e.type="text/javascript",e.async=1,e.charset="utf-8"),t.id&&(e.id=t.id),utag.loader.GV(t.attrs))e.setAttribute(i,t.attrs[i]);e.setAttribute("src",t.src),"function"==typeof t.cb&&(e.addEventListener?e.addEventListener("load",(function(){t.cb()}),!1):e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t.cb())}),"img"==t.type||o||(i=t.loc||"head",(d=a.getElementsByTagName(i)[0])&&(utag.DB("Attach to "+i+": "+t.src),"script"==i?d.parentNode.insertBefore(e,d):d.appendChild(e)))}:e.loader=utag.ut.loader,void 0===utag.ut.typeOf?e.typeOf=function(t){return{}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}:e.typeOf=utag.ut.typeOf,e.ev={view:1,link:1},e.hasgtagjs=function(){if(window.gtagRename=window.gtagRename||"gtag",utag.ut.gtagFloodlightScriptRequested)return!0;var t,a=document.getElementsByTagName("script");for(t=0;t<a.length;t++)if(a[t].src&&a[t].src.indexOf("gtag-cm-dv360-sa360")>=0)return!0;return window.dataLayer=window.dataLayer||[],"function"!=typeof window[window.gtagRename]&&(window[window.gtagRename]=function(){dataLayer.push(arguments)},window[window.gtagRename]("js",new Date)),!1},e.scriptrequested=e.hasgtagjs(),e.o=window[window.gtagRename],e.map_func=function(t,a,d){var i=t.shift();a[i]=a[i]||{},t.length>0?e.map_func(t,a[i],d):a[i]=d},e.hasOwn=function(t,a){return null!=t&&Object.prototype.hasOwnProperty.call(t,a)},e.isEmptyObject=function(t,a){for(a in t)if(e.hasOwn(t,a))return!1;return!0},e.toBoolean=function(t){return!0===(t=t||"")||"true"===t.toLowerCase()||"on"===t.toLowerCase()},e.map={"gtagConversion:conversion":"conversion",FloodlightCat:"activity",FloodlightType:"activity_group"},e.extend=[function(t,a){try{a.FloodlightType="car_ja"}catch(t){utag.DB(t)}},function(t,a,e,d,i,o,r){if(void 0!==(d=a.pageKey)){e=[{"^[dp]_flagship3_search_srp_jobs$":"ja_msp1d"},{"^[dp]_flagship3_job_home$":"ja_msp1d"},{"^[dp]_flagship3_job_details$":"ja_msp1d"}];var n=!1;for(i=0;i<e.length;i++){for(o in utag.loader.GV(e[i]))new RegExp(o,"i").test(d)&&(a.FloodlightCat=e[i][o],n=!0);if(n)break}}}],e.send=function(t,a){if(e.ev[t]||void 0!==e.ev.all){var d,i,o,r,n,s,u,c,p,_,g;for(utag.DB("send:145"),utag.DB(a),e.data={qsp_delim:"&",kvp_delim:"=",base_url:"https://platform.linkedin.com/litms/vendor/google/gtag-cm-dv360-sa360.js",advertiser_id:"DC-9261636",activity_group:"",activity:"",counting_method:"unique",fire_purchase:"true",custom_scripts:"true",session_id:"",product_id:[],product_quantity:[],product_unit_price:[],dc_custom_params:{},event_name:"",event:[],custom:{}},d=0;d<e.extend.length;d++)try{if(0==(i=e.extend[d](t,a)))return}catch(o){}for(i in utag.DB("send:145:EXTENSIONS"),utag.DB(a),utag.loader.GV(e.map))if(void 0!==a[i]&&""!==a[i])for(o=e.map[i].split(","),r=0;r<o.length;r++)e.map_func(o[r].split("."),e.data,a[i]);else 2===(n=i.split(":")).length&&a[n[0]]===n[1]&&e.map[i]&&(e.data.event=e.data.event.concat(e.map[i].split(",")));if(utag.DB("send:145:MAPPINGS"),utag.DB(e.data),e.data.order_id=e.data.order_id||a._corder||"",e.data.order_total=e.data.order_total||a._ctotal||"",0===e.data.product_quantity.length&&void 0!==a._cquan&&(e.data.product_quantity=a._cquan.slice(0)),"string"==typeof e.data.advertiser_id&&(e.data.advertiser_id=e.data.advertiser_id.split(",")),"string"==typeof e.data.activity_group&&(e.data.activity_group=e.data.activity_group.split(",")),"string"==typeof e.data.activity&&(e.data.activity=e.data.activity.split(",")),"string"==typeof e.data.counting_method&&(e.data.counting_method=e.data.counting_method.split(",")),"string"==typeof e.data.session_id&&(e.data.session_id=e.data.session_id.split(",")),0===e.data.product_id.length&&void 0!==a._cprod&&(e.data.product_id=a._cprod.slice(0)),0===e.data.product_quantity.length&&void 0!==a._cquan&&(e.data.product_quantity=a._cquan.slice(0)),0===e.data.product_unit_price.length&&void 0!==a._cprice&&(e.data.product_unit_price=a._cprice.slice(0)),!e.data.advertiser_id)return void utag.DB(e.id+": Tag not fired: Required attribute not populated");for(s=0;s<e.data.advertiser_id.length;s++)/^[a-zA-Z]{2}-/.test(e.data.advertiser_id[s])||(e.data.advertiser_id[s]="DC-"+e.data.advertiser_id[s]);for(e.data.base_url+="?id="+e.data.advertiser_id[0],s=0;s<e.data.advertiser_id.length;s++)e.o("config",e.data.advertiser_id[s]);if(e.data.order_id){for(s=0;s<e.data.event.length;s++)"purchase"===e.data.event[s]&&(_=!0);!_&&e.toBoolean(e.data.fire_purchase)&&(e.data.event.push("purchase"),""===e.data.counting_method[0]&&(e.data.counting_method[0]="transactions"))}var l=0;if("number"==typeof e.data.product_quantity)l=e.data.product_quantity;else if(1===e.data.product_quantity.length)l=e.data.product_quantity[0];else if(e.data.product_quantity.length>1)for(s=0;s<e.data.product_quantity.length;s++)l+=parseInt(e.data.product_quantity[s],10);else l=1;for(s=0;s<e.data.event.length;s++)for(p=e.data.event[s],u=0;u<e.data.advertiser_id.length;u++){var m={};for("true"===e.data.custom_scripts||e.data.custom_scripts?m.allow_custom_scripts=!0:"false"!==e.data.custom_scripts&&e.data.custom_scripts||(m.allow_custom_scripts=!1),1===e.data.session_id.length&&""!==e.data.session_id[0]?m.session_id=e.data.session_id[0]:""!==e.data.session_id[u]&&(m.session_id=e.data.session_id[u]),e.data.order_total&&(m.value=e.data.order_total,m.transaction_id=e.data.order_id),e.data.product_quantity&&(m.quantity=l),m.items=[],c=0;c<e.data.product_id.length;c++)void 0===e.data.product_unit_price[c]||void 0===e.data.product_quantity[c]?utag.DB("No matching unit price or quantity for product ID "+e.data.product_id[c]):m.items.push({id:e.data.product_id[c],price:e.data.product_unit_price[c],quantity:e.data.product_quantity[c]});for(g in e.data.custom)m[g]=e.data.custom[g];if(!e.isEmptyObject(e.data.dc_custom_params))for(g in m.dc_custom_params={},e.data.dc_custom_params)m.dc_custom_params[g]=e.data.dc_custom_params[g];e.data.counting_method[u]&&e.data.counting_method[u]!==e.data.counting_method[u].toLowerCase()&&(e.data.counting_method[u]=e.data.counting_method[u].toLowerCase(),utag.DB("Counting Method not supplied in proper case - converted to lower case")),m.send_to=e.data.advertiser_id[u]+"/"+e.data.activity_group[u]+"/"+e.data.activity[u]+"+"+e.data.counting_method[u],"purchase"===p&&e.o("event","purchase",m),"conversion"===p&&e.o("event","conversion",m)}e.hasgtagjs()||(e.scriptrequested=!0,utag.ut.gtagFloodlightScriptRequested=!0,e.loader({type:"script",src:e.data.base_url,cb:null,loc:"script",id:"utag_145",attrs:{}})),utag.DB("send:145:COMPLETE")}},utag.o[a].loader.LOAD("145")}(0,"linkedin.voyager-web-jobs")}catch(t){utag.DB(t)}