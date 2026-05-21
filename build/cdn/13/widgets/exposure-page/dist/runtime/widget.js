System.register(["jimu-core/emotion","jimu-core","jimu-arcgis"],function(e,t){var i={},a={},r={};return{setters:[function(e){i.jsx=e.jsx,i.jsxs=e.jsxs},function(e){a.DataSourceComponent=e.DataSourceComponent,a.React=e.React,a.css=e.css},function(e){r.JimuMapViewComponent=e.JimuMapViewComponent,r.loadArcGISJSAPIModules=e.loadArcGISJSAPIModules}],execute:function(){e((()=>{var e={2686(e){"use strict";e.exports=r},9244(e){"use strict";e.exports=a},7386(e){"use strict";e.exports=i}},t={};function o(i){var a=t[i];if(void 0!==a)return a.exports;var r=t[i]={exports:{}};return e[i](r,r.exports,o),r.exports}o.d=(e,t)=>{for(var i in t)o.o(t,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="";var s={};return o.p=window.jimuConfig.baseUrl,(()=>{"use strict";o.r(s),o.d(s,{__set_webpack_public_path__:()=>_e,default:()=>Pe});var e=o(7386),t=o(9244),i=o(2686),a=function(e,t,i,a){return new(i||(i=Promise))(function(r,o){function s(e){try{l(a.next(e))}catch(e){o(e)}}function n(e){try{l(a.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof i?t:new i(function(e){e(t)})).then(s,n)}l((a=a.apply(e,t||[])).next())})};const r=[-98.5795,39.8283],n={totalSaves:null,fireSaves:null,smokeSaves:null,losses:null},l={halfMile:null,threeMile:null,fiveMile:null},d={activeCard:null,title:"",items:[],totalItemCount:0,message:""},c={items:[],totalItemCount:0,message:"Select the Smoke Check Log layer in settings.",hasDistanceFields:!1},p={items:[],totalItemCount:0,message:""},m=["totalSaves","fireSaves","smokeSaves","losses"],u={totalSaves:"Total Saves",fireSaves:"Fire Saves",smokeSaves:"Smoke Saves",losses:"Losses"},g="policyid",f="street",x="city",h="state",b="zip_code",v="save_type",w="incident_name",y="chloeta_incident_id",j="incident_name",S="county",N="state",k="zip_code",C="acreage",I="containment",z="threat_status",D="half_mile_buffer",M="three_mile_buffer",R="five_mile_buffer",$="distance_to_nearest_insured_mi",L="last_update",T="chloeta_incident_id",E="updated_time",F="incident_name",U="acreage",A="containment",P="threat_status",_="new_update",O="chloeta_incident_id",B=["No Immediate Threat","Potential Threat","Response Recommended"],G=B.map(e=>e.toLowerCase()),V=[{key:"halfMile",label:"0-0.5"},{key:"threeMile",label:"0.5-3"},{key:"fiveMile",label:"3-5"}],q=[{key:"halfMile",label:"0-0.5 mi"},{key:"threeMile",label:"0.5-3 mi"},{key:"fiveMile",label:"3-5 mi"}],J=["status","state","zipCode","name"],Q={status:"Threat Status",state:"State",zipCode:"ZIP Code",name:"Incident Name"},K=e=>null==e||Number.isNaN(e)?"--":Math.round(e).toLocaleString(),W=(e,t=1)=>null==e||Number.isNaN(e)?"--":e.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:t}),H=e=>null==e||Number.isNaN(e)?"-- ac":`${Math.round(e).toLocaleString()} ac`,Y=e=>{if(null==e||Number.isNaN(e))return null;const t=e>0&&e<=1?100*e:e;return Math.min(100,Math.max(0,t))},Z=e=>{const t=Y(e);return null===t?"--%":`${Math.round(t).toLocaleString()}%`},X=e=>{if(null==e||""===e)return null;const t=String(e).trim(),i=Number(e),a=Number.isFinite(i)?new Date(i):new Date(t);return Number.isNaN(a.getTime())?null:a.getTime()},ee=e=>{const t=X(e);if(null===t){return String(null!=e?e:"").trim()||"--"}const i=new Date(t);return`${i.toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"})}\n${i.toLocaleTimeString(void 0,{hour:"numeric",minute:"2-digit"})}`},te=e=>{const t=new Date(e);return`${t.toLocaleDateString(void 0,{month:"short",day:"numeric"})} ${t.toLocaleTimeString(void 0,{hour:"numeric",minute:"2-digit"})}`},ie=e=>{const t=String(e||"").trim();return t&&"1=1"!==t?t:""},ae=e=>e.replace(/'/g,"''"),re=e=>{const t=e.map(e=>ie(e)).filter(Boolean);return t.length?t.map(e=>`(${e})`).join(" AND "):"1=1"},oe=(e,t)=>{const i=ie(e.definitionExpression);return i?((e,t)=>{const i=ie(e).toLowerCase();if(!i)return!1;const a=t.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g,"\\$&");return new RegExp(`(^|[^a-z0-9_])${a}([^a-z0-9_]|$)`).test(i)})(i,t)?null:i:null},se=e=>{const t=Number(e);return Number.isFinite(t)?t:0},ne=e=>{if(null==e||""===e)return null;const t=Number(e);return Number.isFinite(t)?t:null},le=(e,t)=>{const i=String(null!=e?e:"").trim();return i||t},de=e=>a(void 0,void 0,void 0,function*(){var t,a;if(!e)return null;const r=e;try{"function"==typeof r.ready&&(yield r.ready()),"function"==typeof r.load&&(yield r.load())}catch(e){console.warn("Data source did not fully ready/load before layer lookup:",e)}let o=r.layer||(null===(t=r.getLayer)||void 0===t?void 0:t.call(r));if(!o&&"function"==typeof r.createJSAPILayerByDataSource)try{o=yield r.createJSAPILayerByDataSource()}catch(e){console.warn("Unable to create JSAPI layer from data source:",e)}if(!o){const e=r.url||(null===(a=r.getUrl)||void 0===a?void 0:a.call(r));if(e)try{const[t]=yield(0,i.loadArcGISJSAPIModules)(["esri/layers/FeatureLayer"]);o=new t({url:e})}catch(e){console.warn("Unable to create FeatureLayer from data source URL:",e)}}return o?("function"==typeof o.load&&(yield o.load()),o):(console.warn("No JSAPI layer could be resolved from data source:",{id:r.id,type:r.type,label:r.label,url:r.url}),null)}),ce=(e,t)=>{var i;const a=[],r=null===(i=null==e?void 0:e.getCurrentQueryParams)||void 0===i?void 0:i.call(e),o=ie(null==r?void 0:r.where),s=ie(t.definitionExpression);return o&&a.push(o),s&&s!==o&&a.push(s),a.length?a.map(e=>`(${e})`).join(" AND "):"1=1"},pe=(e,t)=>{const i=e.fields||[],a=new Map;return i.forEach(e=>{a.set(e.name.toLowerCase(),e.name)}),a.get(t.toLowerCase())||null},me=(e,t)=>{const i=(e.fields||[]).find(e=>e.name.toLowerCase()===t.toLowerCase());return String((null==i?void 0:i.type)||"").toLowerCase()},ue=e=>["oid","small-integer","integer","single","double","long"].includes(e),ge=(e,t,i)=>{const a=Array.from(new Set(i.map(e=>String(null!=e?e:"").trim()).filter(Boolean)));if(!a.length)return"1=0";const r=me(e,t);if(ue(r)){const e=a.map(e=>Number(e)).filter(e=>Number.isFinite(e));return e.length?`${t} IN (${e.join(", ")})`:"1=0"}return`${t} IN (${a.map(e=>`'${ae(e)}'`).join(", ")})`},fe=(e,t,i)=>{const a=String(i||"").trim();if(!a)return"1=0";const r=me(e,t);if(ue(r)){const e=Number(a);return Number.isFinite(e)?`${t} = ${e}`:"1=0"}return`${t} = '${ae(a)}'`},xe=e=>({incidentName:pe(e,j),county:pe(e,S),state:pe(e,N),zipCode:pe(e,k),acreage:pe(e,C),containment:pe(e,I),threatStatus:pe(e,z),halfMile:pe(e,D),threeMile:pe(e,M),fiveMile:pe(e,R),nearestDistance:pe(e,$),lastUpdate:pe(e,L),chloetaIncidentId:pe(e,T)}),he=(e,t)=>{const i=t.filter(Boolean);return e.objectIdField&&i.push(e.objectIdField),Array.from(new Set(i))},be=e=>{const t=e.toLowerCase();return t.includes("response recommended")||t.includes("threatening")?1:t.includes("potential")?2:t.includes("no immediate")?3:4},ve=e=>{const t=be(e);return 1===t?"status-response":2===t?"status-potential":3===t?"status-no-immediate":"status-monitoring"},we=e=>{const t=be(e);return 1===t?"note-status-response":2===t?"note-status-potential":3===t?"note-status-no-immediate":"note-status-monitoring"},ye=e=>{const t=String(e||"").trim();return"determined"===t.toLowerCase()?"Monitoring":t},je=e=>"halfMile"===e?"distance-fill-half-mile":"threeMile"===e?"distance-fill-three-mile":"fiveMile"===e?"distance-fill-five-mile":"",Se=e=>V.reduce((t,i)=>t+e[i.key],0),Ne=e=>{const t=[];return e.county&&t.push(e.county),e.state&&t.push(e.state),1===e.zipCodes.length?t.push(e.zipCodes[0]):e.zipCodes.length>1?t.push(`${e.zipCodes[0]} +${e.zipCodes.length-1}`):e.zipCode&&t.push(e.zipCode),t.length?t.join(", "):"Location --"},ke=e=>{const t=[];return e.city&&t.push(e.city),e.state&&t.push(e.state),e.zipCode&&t.push(e.zipCode),t.length?t.join(", "):"Location --"},Ce=(e,t)=>"status"===t?e.status?[e.status]:[]:"state"===t?e.state?[e.state]:[]:"zipCode"===t?e.zipCodes.length?e.zipCodes:e.zipCode?[e.zipCode]:[]:"name"===t&&e.name?[e.name]:[],Ie=(e,t,i,r)=>a(void 0,void 0,void 0,function*(){if(!t||!i)return null;if(null===r)return null;try{const a=yield de(t);if(!a)return null;const o=a.createQuery(),s=[ce(t,a)];if(Array.isArray(r)){const t=pe(a,y);if(!t)return console.warn(`${e} layer is missing field ${y}.`),null;s.push(ge(a,t,r))}return o.where=re(s),o.geometry=i,o.spatialRelationship="intersects",o.returnGeometry=!1,yield a.queryFeatureCount(o)}catch(t){return console.error(`Error counting ${e}:`,t),null}}),ze=(e,t,i)=>a(void 0,void 0,void 0,function*(){if(!t||!i)return 0;try{const a=yield de(t);if(!a)return 0;const r=pe(a,y);if(!r)return console.warn(`${e} layer is missing field ${y}.`),0;const o=a.createQuery();return o.where=re([ce(t,a),fe(a,r,i)]),o.returnGeometry=!1,yield a.queryFeatureCount(o)}catch(t){return console.error(`Error counting ${e} for selected fire:`,t),0}}),De=t=>(0,e.jsxs)("div",{className:"ytd-metric-card is-clickable",role:"button",tabIndex:0,onClick:t.onClick,onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),t.onClick())},children:[(0,e.jsx)("div",{className:"ytd-metric-label",children:t.label}),(0,e.jsx)("div",{className:"ytd-metric-value",children:K(t.value)})]}),Me=t=>(0,e.jsxs)("div",{className:["fire-detail-summary-card",t.onClick?"is-clickable":"",t.variant?`is-${t.variant}`:""].join(" "),role:t.onClick?"button":void 0,tabIndex:t.onClick?0:void 0,onClick:t.onClick,onKeyDown:e=>{t.onClick&&("Enter"!==e.key&&" "!==e.key||(e.preventDefault(),t.onClick()))},children:[(0,e.jsx)("div",{className:"mini-stat-label",children:t.label}),(0,e.jsx)("div",{className:"mini-stat-value",children:t.value})]}),Re=t=>(0,e.jsxs)("div",{className:"exposure-panel save-loss-details-panel",children:[(0,e.jsxs)("div",{className:"panel-title-row detail-panel-title-row",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{className:"panel-title",children:t.details.title||"SAVE / LOSS DETAILS"}),(0,e.jsxs)("div",{className:"panel-caption",children:[K(t.details.totalItemCount)," records within the current map extent"]})]}),(0,e.jsx)("button",{className:"clear-filter-button",type:"button",onClick:t.onClear,children:"Clear filter"})]}),t.details.message&&(0,e.jsx)("div",{className:"placeholder-copy",children:t.details.message}),!t.details.message&&(0,e.jsx)("div",{className:"save-loss-list",children:t.details.items.map(i=>(0,e.jsxs)("div",{className:"save-loss-row is-clickable",role:"button",tabIndex:0,onClick:()=>t.onItemClick(i),onKeyDown:e=>((e,i)=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),t.onItemClick(i))})(e,i),children:[(0,e.jsxs)("div",{className:"save-loss-main",children:[(0,e.jsx)("div",{className:"save-loss-policy",children:i.policyId||"Policy --"}),(0,e.jsx)("div",{className:"save-loss-street",children:i.street||"Street --"}),(0,e.jsx)("div",{className:"save-loss-location",children:ke(i)})]}),(0,e.jsxs)("div",{className:"save-loss-side",children:[(0,e.jsx)("div",{className:"save-loss-type-pill",children:i.saveType||"Type --"}),(0,e.jsx)("div",{className:"save-loss-incident",children:i.incidentName||"Incident --"})]})]},i.id))})]}),$e=t=>{const i=(a=t.counts,q.reduce((e,t)=>e+(a[t.key]||0),0));var a;return(0,e.jsxs)("div",{className:"exposure-panel impacted-distance-panel",children:[(0,e.jsxs)("div",{className:"panel-title-row impacted-distance-title-row",children:[(0,e.jsx)("div",{children:(0,e.jsx)("div",{className:"panel-title",children:"CURRENT IMPACTED POLICIES BY DISTANCE"})}),(0,e.jsx)("div",{className:"distance-total-pill",children:K(i)})]}),(0,e.jsx)("div",{className:"impacted-distance-chart",children:q.map(a=>{const r=t.counts[a.key],o=r||0,s=i>0?Math.min(100,Math.max(0,o/i*100)):0;return(0,e.jsxs)("div",{className:"impacted-distance-row",children:[(0,e.jsx)("div",{className:"impacted-distance-label",children:a.label}),(0,e.jsx)("div",{className:"impacted-distance-bar-track",children:(0,e.jsx)("div",{className:["impacted-distance-bar-fill",je(a.key)].join(" "),style:{width:`${s}%`}})}),(0,e.jsx)("div",{className:"impacted-distance-value",children:K(r)})]},a.key)})})]})},Le=t=>{const i=Se(t.item.bands);return t.hasDistanceFields?(0,e.jsxs)("div",{className:"distance-bars",children:[(0,e.jsxs)("div",{className:"distance-title-row",children:[(0,e.jsx)("div",{className:"distance-title",children:"Impacted Policies"}),(0,e.jsx)("div",{className:"distance-total",children:K(t.item.totalExposure)})]}),V.map(a=>{const r=t.item.bands[a.key],o=i>0?Math.min(100,Math.max(0,r/i*100)):0;return(0,e.jsxs)("div",{className:"distance-row",children:[(0,e.jsx)("div",{className:"distance-label",children:a.label}),(0,e.jsx)("div",{className:"distance-bar-track",children:(0,e.jsx)("div",{className:["distance-bar-fill",je(a.key)].join(" "),style:{width:`${o}%`}})}),(0,e.jsx)("div",{className:"distance-value",children:K(r)})]},a.key)})]}):(0,e.jsx)("div",{className:"distance-not-configured",children:"Distance fields were not found on the SCL layer."})},Te=i=>{const a=t.React.useMemo(()=>i.notes.items.reduce((e,t)=>(null===t.updatedTimestamp||e.push({timestamp:t.updatedTimestamp,label:te(t.updatedTimestamp),acreage:t.acreage,containment:Y(t.containment)}),e),[]).sort((e,t)=>e.timestamp-t.timestamp),[i.notes.items]),r=a.map(e=>e.acreage).filter(e=>null!==e),o=a.map(e=>e.containment).filter(e=>null!==e),s=r.length>0||o.length>0,n=26,l=78,d=720-l-78,c=300-n-62,p=r.length?Math.max(...r):1,m=Math.max(1,100*Math.ceil(p/100)),u=e=>a.length<=1?l:l+e/(a.length-1)*d,g=e=>n+c-e/m*c,f=e=>n+c-e/100*c,x=a.map((e,t)=>null===e.acreage?null:`${u(t)},${g(e.acreage)}`).filter(Boolean).join(" "),h=a.map((e,t)=>null===e.containment?null:`${u(t)},${f(e.containment)}`).filter(Boolean).join(" "),b=t.React.useMemo(()=>a.length<=5?a.map((e,t)=>t):Array.from(new Set([0,Math.round(.25*(a.length-1)),Math.round(.5*(a.length-1)),Math.round(.75*(a.length-1)),a.length-1])),[a]),v=n+c/2,w=l-56,y=l+d+56;return(0,e.jsx)("div",{className:"progression-modal-backdrop",onClick:e=>{e.target===e.currentTarget&&i.onClose()},children:(0,e.jsxs)("div",{className:"progression-modal",role:"dialog","aria-modal":"true","aria-label":"Fire progression over time",children:[(0,e.jsxs)("div",{className:"progression-modal-header",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{className:"progression-modal-title",children:"FIRE PROGRESSION OVER TIME"}),(0,e.jsxs)("div",{className:"progression-modal-subtitle",children:[i.item.name," incident"]})]}),(0,e.jsx)("button",{className:"progression-modal-close-button",type:"button",onClick:i.onClose,"aria-label":"Close fire progression chart",children:"x"})]}),(0,e.jsxs)("div",{className:"progression-legend-row",children:[(0,e.jsxs)("div",{className:"progression-legend-item",children:[(0,e.jsx)("span",{className:"progression-legend-dot acreage-dot"}),"Acreage (ac)"]}),(0,e.jsxs)("div",{className:"progression-legend-item",children:[(0,e.jsx)("span",{className:"progression-legend-dot containment-dot"}),"Containment (%)"]})]}),!s&&(0,e.jsx)("div",{className:"progression-empty-state",children:"No acreage or containment values were found in the Smoke Check Log Notes."}),s&&(0,e.jsx)("div",{className:"progression-chart-wrap",children:(0,e.jsxs)("svg",{className:"progression-chart-svg",viewBox:"0 0 720 300",role:"img","aria-label":"Line chart showing acreage and containment over time",children:[[0,.25,.5,.75,1].map(t=>{const i=n+c-t*c,a=m*t,r=100*t;return(0,e.jsxs)("g",{children:[(0,e.jsx)("line",{className:"progression-grid-line",x1:l,x2:l+d,y1:i,y2:i}),(0,e.jsx)("text",{className:"progression-axis-text acreage-axis-text",x:l-10,y:i+4,textAnchor:"end",children:K(a)}),(0,e.jsxs)("text",{className:"progression-axis-text containment-axis-text",x:l+d+10,y:i+4,textAnchor:"start",children:[Math.round(r),"%"]})]},t)}),(0,e.jsx)("line",{className:"progression-axis-line",x1:l,x2:l,y1:n,y2:n+c}),(0,e.jsx)("line",{className:"progression-axis-line",x1:l+d,x2:l+d,y1:n,y2:n+c}),(0,e.jsx)("line",{className:"progression-axis-line",x1:l,x2:l+d,y1:n+c,y2:n+c}),x&&(0,e.jsx)("polyline",{className:"progression-line acreage-line",points:x}),h&&(0,e.jsx)("polyline",{className:"progression-line containment-line",points:h}),a.map((t,i)=>{const a=u(i);return(0,e.jsxs)("g",{children:[null!==t.acreage&&(0,e.jsx)("circle",{className:"progression-point acreage-point",cx:a,cy:g(t.acreage),r:3.7}),null!==t.containment&&(0,e.jsx)("circle",{className:"progression-point containment-point",cx:a,cy:f(t.containment),r:3.7})]},`${t.timestamp}-${i}`)}),b.map(t=>{const i=a[t],r=u(t);return(0,e.jsx)("text",{className:"progression-x-label",x:r,y:n+c+24,textAnchor:"middle",children:i.label},`${i.timestamp}-label`)}),(0,e.jsx)("text",{className:"progression-axis-label acreage-axis-label",x:w,y:v,textAnchor:"middle",dy:"0.35em",transform:`rotate(-90 ${w} ${v})`,children:"Acreage"}),(0,e.jsx)("text",{className:"progression-axis-label containment-axis-label",x:y,y:v,textAnchor:"middle",dy:"0.35em",transform:`rotate(90 ${y} ${v})`,children:"Containment"})]})})]})})},Ee=t=>(0,e.jsxs)("div",{className:"exposure-panel fire-details-panel",children:[(0,e.jsxs)("div",{className:"panel-title-row detail-panel-title-row",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{className:"panel-title",children:t.item.name}),(0,e.jsx)("div",{className:"panel-caption",children:Ne(t.item)})]}),(0,e.jsx)("button",{className:"clear-filter-button",type:"button",onClick:t.onClear,children:"Clear filter"})]}),(0,e.jsxs)("div",{className:"fire-detail-summary-grid",children:[(0,e.jsx)(Me,{label:"Acreage",value:H(t.item.acreage),variant:"acreage",onClick:t.onOpenProgressionChart}),(0,e.jsx)(Me,{label:"Containment",value:Z(t.item.containment),variant:"containment",onClick:t.onOpenProgressionChart}),(0,e.jsx)(Me,{label:"Nearest Policy",value:`${W(t.item.nearestDistance,2)} mi`}),(0,e.jsx)(Me,{label:"Impacted Policies",value:K(t.item.totalExposure)})]}),(0,e.jsxs)("div",{className:"fire-save-loss-grid",children:[(0,e.jsxs)("div",{className:"fire-detail-summary-card fire-save-loss-card",children:[(0,e.jsx)("div",{className:"mini-stat-label",children:"Total Saves"}),(0,e.jsx)("div",{className:"mini-stat-value",children:K(t.counts.totalSaves)})]}),(0,e.jsxs)("div",{className:"fire-detail-summary-card fire-save-loss-card",children:[(0,e.jsx)("div",{className:"mini-stat-label",children:"Fire Saves"}),(0,e.jsx)("div",{className:"mini-stat-value",children:K(t.counts.fireSaves)})]}),(0,e.jsxs)("div",{className:"fire-detail-summary-card fire-save-loss-card",children:[(0,e.jsx)("div",{className:"mini-stat-label",children:"Smoke Saves"}),(0,e.jsx)("div",{className:"mini-stat-value",children:K(t.counts.smokeSaves)})]}),(0,e.jsxs)("div",{className:"fire-detail-summary-card fire-save-loss-card",children:[(0,e.jsx)("div",{className:"mini-stat-label",children:"Losses"}),(0,e.jsx)("div",{className:"mini-stat-value",children:K(t.counts.losses)})]})]}),(0,e.jsx)("div",{className:"fire-detail-status-row",children:(0,e.jsx)("span",{className:`status-pill ${ve(t.item.status)}`,children:t.item.status})}),(0,e.jsxs)("div",{className:"scl-notes-header-row",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{className:"scl-notes-title",children:"SMOKE CHECK LOG NOTES"}),(0,e.jsx)("div",{className:"panel-caption",children:"Fire Progression Information"})]}),(0,e.jsx)("div",{className:"distance-total-pill",children:K(t.notes.totalItemCount)})]}),t.notes.message&&(0,e.jsx)("div",{className:"placeholder-copy",children:t.notes.message}),!t.notes.message&&(0,e.jsxs)("div",{className:"scl-notes-table-shell",children:[(0,e.jsxs)("div",{className:"scl-notes-table-header",children:[(0,e.jsx)("div",{children:"Updated Time"}),(0,e.jsx)("div",{children:"Incident Name"}),(0,e.jsx)("div",{children:"Acreage"}),(0,e.jsx)("div",{children:"Containment"}),(0,e.jsx)("div",{children:"Update"}),(0,e.jsx)("div",{children:"Threat Status"})]}),(0,e.jsx)("div",{className:"scl-notes-list",children:t.notes.items.map(i=>(0,e.jsxs)("div",{className:"scl-note-row",children:[(0,e.jsx)("div",{className:"scl-note-cell scl-note-time-cell",children:i.updatedTime||"--"}),(0,e.jsx)("div",{className:"scl-note-cell scl-note-incident-cell",children:i.incidentName||t.item.name||"--"}),(0,e.jsx)("div",{className:"scl-note-cell scl-note-acreage-cell",children:H(i.acreage)}),(0,e.jsx)("div",{className:"scl-note-cell scl-note-containment-cell",children:Z(i.containment)}),(0,e.jsx)("div",{className:"scl-note-cell scl-note-update-cell",children:i.newUpdate||"No update text provided."}),(0,e.jsx)("div",{className:"scl-note-cell scl-note-threat-cell",children:(0,e.jsx)("span",{className:`note-threat-status ${we(ye(i.threatStatus))}`,children:ye(i.threatStatus)||"--"})})]},i.id))})]})]}),Fe=t=>(0,e.jsxs)("div",{className:["wildfire-card",t.onClick?"is-clickable":""].join(" "),role:t.onClick?"button":void 0,tabIndex:t.onClick?0:void 0,onClick:()=>{var e;null===(e=t.onClick)||void 0===e||e.call(t,t.item)},onKeyDown:e=>{t.onClick&&("Enter"!==e.key&&" "!==e.key||(e.preventDefault(),t.onClick(t.item)))},children:[(0,e.jsxs)("div",{className:"wildfire-info",children:[(0,e.jsxs)("div",{className:"wildfire-top-row",children:[(0,e.jsx)("div",{className:"wildfire-rank",children:t.index+1}),(0,e.jsxs)("div",{className:"wildfire-name-block",children:[(0,e.jsx)("div",{className:"wildfire-name",children:t.item.name}),(0,e.jsx)("div",{className:"wildfire-location",children:Ne(t.item)})]})]}),(0,e.jsxs)("div",{className:"wildfire-stat-grid",children:[(0,e.jsxs)("div",{className:"wildfire-mini-stat",children:[(0,e.jsx)("div",{className:"mini-stat-label",children:"Acreage"}),(0,e.jsx)("div",{className:"mini-stat-value",children:H(t.item.acreage)})]}),(0,e.jsxs)("div",{className:"wildfire-mini-stat",children:[(0,e.jsx)("div",{className:"mini-stat-label",children:"Containment"}),(0,e.jsx)("div",{className:"mini-stat-value",children:Z(t.item.containment)})]}),(0,e.jsxs)("div",{className:"wildfire-mini-stat",children:[(0,e.jsx)("div",{className:"mini-stat-label",children:"Nearest Policy"}),(0,e.jsxs)("div",{className:"mini-stat-value",children:[W(t.item.nearestDistance,2)," mi"]})]})]}),(0,e.jsxs)("div",{className:"wildfire-footer-row",children:[(0,e.jsx)("span",{className:`status-pill ${ve(t.item.status)}`,children:t.item.status}),(0,e.jsx)("span",{className:"scl-record-count",children:t.item.lastUpdate||"Last update --"})]})]}),(0,e.jsx)(Le,{item:t.item,hasDistanceFields:t.hasDistanceFields})]}),Ue=t=>{const i=Q[t.field],a=Boolean(t.searchText.trim()||t.selectedValue);return(0,e.jsxs)("div",{className:"wildfire-filter-panel",children:[(0,e.jsxs)("div",{className:"wildfire-filter-panel-header",children:[(0,e.jsx)("div",{className:"wildfire-filter-panel-title",children:"FILTER OPTIONS"}),(0,e.jsx)("button",{className:"wildfire-filter-minimize-button",type:"button",onClick:t.onMinimize,"aria-label":"Minimize wildfire filter options",title:"Minimize",children:"-"})]}),(0,e.jsxs)("div",{className:"wildfire-filter-controls",children:[(0,e.jsxs)("div",{className:"wildfire-filter-field-wrap",children:[(0,e.jsx)("div",{className:"wildfire-filter-label",children:"Filter By"}),(0,e.jsx)("select",{className:"wildfire-filter-select",value:t.field,onChange:e=>{t.onFieldChange(e.target.value)},children:J.map(t=>(0,e.jsx)("option",{value:t,children:Q[t]},t))})]}),(0,e.jsxs)("div",{className:"wildfire-filter-search-wrap",children:[(0,e.jsx)("div",{className:"wildfire-filter-label",children:"Search Options"}),(0,e.jsx)("input",{className:"wildfire-filter-input",value:t.searchText,placeholder:`Type ${i.toLowerCase()}...`,onChange:e=>{t.onSearchTextChange(e.target.value)}})]}),a&&(0,e.jsx)("button",{className:"wildfire-filter-clear-button",type:"button",onClick:t.onClear,children:"Clear"})]}),(0,e.jsxs)("div",{className:"wildfire-filter-options",children:[0===t.options.length&&(0,e.jsx)("div",{className:"wildfire-filter-empty-option",children:"No options found."}),t.options.map(i=>{const a=i===t.selectedValue;return(0,e.jsx)("button",{className:["wildfire-filter-option",a?"is-selected":""].join(" "),type:"button",onClick:()=>{t.onOptionSelect(i)},children:i},i)})]})]})},Ae=()=>t.css`
  &.exposure-sidebar-widget-root {
    position: relative;
    z-index: 20;
    isolation: isolate;
    width: 100%;
    max-width: 936px;
    height: auto;
    max-height: none;
    min-height: 0;
    color: #ffffff;
    background: transparent;
    overflow: visible;
    box-sizing: border-box;
    padding: 0 12px 0 14px;
    pointer-events: auto;
    font-family:
      Avenir Next,
      Arial,
      Helvetica,
      sans-serif;
  }

  &.exposure-sidebar-widget-root.is-progression-modal-open {
    z-index: 2147483000;
    isolation: auto;
    overflow: visible;
  }

  .exposure-sidebar {
    position: relative;
    z-index: 21;
    width: 100%;
    max-width: 914px;
    height: auto;
    max-height: none;
    min-height: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: stretch;
    box-sizing: border-box;
    overflow: visible;
  }

  .exposure-panel {
    width: 100%;
    background:
      linear-gradient(
        180deg,
        rgba(11, 24, 39, 0.97) 0%,
        rgba(8, 17, 29, 0.97) 100%
      );
    border: 1px solid rgba(119, 146, 177, 0.28);
    border-radius: 12px;
    color: #ffffff;
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.03),
      0 8px 20px rgba(0, 0, 0, 0.14);
    box-sizing: border-box;
  }

  .top-summary-panels-row {
    width: 100%;
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 10px;
    align-items: stretch;
    flex: 0 0 auto;
  }

  .top-summary-panels-row .exposure-panel {
    height: 100%;
  }

  .top-summary-panels-row .ytd-card-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .ytd-panel {
    padding: 8px 10px;
    min-height: 118px;
    flex: 0 0 auto;
  }

  .panel-title-row {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 10px;
    padding-bottom: 8px;
    margin-bottom: 8px;
    border-bottom: 1px solid rgba(139, 160, 188, 0.22);
  }

  .panel-title {
    color: #ffffff;
    font-size: 13px;
    line-height: 1.2;
    font-weight: 800;
    letter-spacing: 0.08em;
  }

  .panel-caption {
    margin-top: 5px;
    color: rgba(210, 220, 235, 0.62);
    font-size: 11px;
    line-height: 1.3;
    letter-spacing: 0.04em;
  }

  .ytd-card-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 7px;
  }

  .ytd-metric-card {
    min-height: 52px;
    border-radius: 9px;
    padding: 8px 10px;
    background: rgba(16, 31, 51, 0.88);
    border: 1px solid rgba(124, 148, 178, 0.22);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.03);
  }

  .ytd-metric-card.is-clickable {
    cursor: pointer;
    transition:
      border-color 120ms ease,
      background 120ms ease,
      transform 120ms ease;
  }

  .ytd-metric-card.is-clickable:hover {
    border-color: rgba(190, 205, 225, 0.38);
    background: rgba(20, 38, 62, 0.92);
  }

  .ytd-metric-label {
    color: rgba(208, 218, 233, 0.72);
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.11em;
    text-transform: uppercase;
    white-space: nowrap;
  }

  .ytd-metric-value {
    margin-top: 5px;
    color: #ffffff;
    font-size: 22px;
    line-height: 1;
    font-weight: 800;
    letter-spacing: -0.03em;
  }

  .impacted-distance-panel {
    flex: 0 0 auto;
    padding: 8px 10px;
    min-height: 118px;
  }

  .impacted-distance-title-row {
    margin-bottom: 8px;
  }

  .distance-total-pill {
    min-width: 42px;
    height: 26px;
    padding: 0 10px;
    border-radius: 999px;
    background: rgba(17, 34, 55, 0.95);
    border: 1px solid rgba(124, 148, 178, 0.28);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    font-size: 12px;
    font-weight: 900;
    flex: 0 0 auto;
  }

  .impacted-distance-chart {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .impacted-distance-row {
    display: grid;
    grid-template-columns: 72px minmax(0, 1fr) 44px;
    gap: 8px;
    align-items: center;
  }

  .impacted-distance-label {
    color: rgba(210, 220, 235, 0.68);
    font-size: 10px;
    font-weight: 800;
    white-space: nowrap;
  }

  .impacted-distance-bar-track {
    height: 8px;
    border-radius: 999px;
    background: rgba(8, 17, 29, 0.9);
    border: 1px solid rgba(124, 148, 178, 0.18);
    overflow: hidden;
  }

  .impacted-distance-bar-fill {
    height: 100%;
    min-width: 2px;
    border-radius: 999px;
  }

  .impacted-distance-value {
    color: #ffffff;
    font-size: 11px;
    font-weight: 900;
    text-align: right;
  }

  .save-loss-details-panel,
  .fire-details-panel {
    flex: 0 0 auto;
    height: 580px;
    max-height: 580px;
    min-height: 0;
    padding: 10px 12px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .detail-panel-title-row {
    flex: 0 0 auto;
  }

  .clear-filter-button {
    height: 28px;
    border-radius: 999px;
    border: 1px solid rgba(124, 148, 178, 0.34);
    background: rgba(8, 17, 29, 0.82);
    color: rgba(240, 246, 255, 0.92);
    font-size: 11px;
    font-weight: 800;
    padding: 0 12px;
    cursor: pointer;
    white-space: nowrap;
  }

  .clear-filter-button:hover {
    background: rgba(20, 38, 62, 0.96);
    border-color: rgba(190, 205, 225, 0.4);
  }

  .save-loss-list {
    flex: 1 1 auto;
    min-height: 0;
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    gap: 7px;
    padding-right: 4px;
  }

  .save-loss-list::-webkit-scrollbar {
    width: 7px;
  }

  .save-loss-list::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.03);
    border-radius: 999px;
  }

  .save-loss-list::-webkit-scrollbar-thumb {
    background: rgba(148, 163, 184, 0.34);
    border-radius: 999px;
  }

  .save-loss-row {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 210px;
    gap: 10px;
    padding: 10px;
    border-radius: 10px;
    background: rgba(16, 31, 51, 0.78);
    border: 1px solid rgba(124, 148, 178, 0.2);
  }

  .save-loss-row.is-clickable {
    cursor: pointer;
    transition:
      border-color 120ms ease,
      background 120ms ease;
  }

  .save-loss-row.is-clickable:hover {
    border-color: rgba(190, 205, 225, 0.34);
    background: rgba(20, 38, 62, 0.9);
  }

  .save-loss-main {
    min-width: 0;
  }

  .save-loss-policy {
    color: #ffffff;
    font-size: 13px;
    font-weight: 800;
    line-height: 1.2;
  }

  .save-loss-street {
    margin-top: 5px;
    color: rgba(226, 232, 240, 0.78);
    font-size: 11px;
    font-weight: 700;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .save-loss-location {
    margin-top: 3px;
    color: rgba(210, 220, 235, 0.58);
    font-size: 11px;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .save-loss-side {
    min-width: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    gap: 6px;
  }

  .save-loss-type-pill {
    max-width: 100%;
    border-radius: 999px;
    padding: 4px 8px;
    background: rgba(8, 17, 29, 0.82);
    border: 1px solid rgba(124, 148, 178, 0.28);
    color: rgba(240, 246, 255, 0.9);
    font-size: 10px;
    font-weight: 800;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .save-loss-incident {
    max-width: 100%;
    color: rgba(210, 220, 235, 0.58);
    font-size: 10px;
    font-weight: 700;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .fire-detail-summary-grid,
  .fire-save-loss-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 7px;
    margin-bottom: 8px;
  }

  .fire-detail-summary-card {
    border-radius: 8px;
    padding: 7px 8px;
    background: rgba(8, 17, 29, 0.5);
    border: 1px solid rgba(124, 148, 178, 0.16);
    min-width: 0;
  }

  .fire-detail-summary-card.is-clickable {
    cursor: pointer;
    transition:
      border-color 120ms ease,
      background 120ms ease,
      box-shadow 120ms ease;
  }

  .fire-detail-summary-card.is-clickable:hover {
    background: rgba(20, 38, 62, 0.86);
  }

  .fire-detail-summary-card.is-acreage:hover {
    border-color: rgba(255, 47, 47, 0.64);
    box-shadow: 0 0 14px rgba(255, 47, 47, 0.2);
  }

  .fire-detail-summary-card.is-containment:hover {
    border-color: rgba(34, 197, 94, 0.64);
    box-shadow: 0 0 14px rgba(34, 197, 94, 0.2);
  }

  .fire-save-loss-card {
    background: rgba(16, 31, 51, 0.74);
  }

  .fire-detail-status-row {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 10px;
    flex-wrap: wrap;
  }

  .fire-detail-id {
    color: rgba(210, 220, 235, 0.58);
    font-size: 10px;
    font-weight: 700;
  }

  .scl-notes-header-row {
    flex: 0 0 auto;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 10px;
    padding-top: 9px;
    margin-bottom: 8px;
    border-top: 1px solid rgba(139, 160, 188, 0.22);
  }

  .scl-notes-title {
    color: #ffffff;
    font-size: 12px;
    line-height: 1.2;
    font-weight: 800;
    letter-spacing: 0.08em;
  }

  .scl-notes-table-shell {
    flex: 1 1 auto;
    min-height: 0;
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(124, 148, 178, 0.18);
    border-radius: 9px;
    overflow-y: auto;
    overflow-x: hidden;
    background: rgba(16, 31, 51, 0.42);
    scrollbar-gutter: stable;
  }

  .scl-notes-table-shell::-webkit-scrollbar {
    width: 7px;
  }

  .scl-notes-table-shell::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.03);
    border-radius: 999px;
  }

  .scl-notes-table-shell::-webkit-scrollbar-thumb {
    background: rgba(148, 163, 184, 0.34);
    border-radius: 999px;
  }

  .scl-notes-table-header {
    position: sticky;
    top: 0;
    z-index: 2;
    flex: 0 0 auto;
    display: grid;
    grid-template-columns:
      78px
      78px
      62px
      78px
      minmax(145px, 1fr)
      170px;
    gap: 8px;
    align-items: center;
    padding: 8px 10px;
    background: rgba(8, 17, 29, 0.96);
    border-bottom: 1px solid rgba(124, 148, 178, 0.18);
    color: rgba(208, 218, 233, 0.62);
    font-size: 9px;
    font-weight: 900;
    letter-spacing: 0.09em;
    text-transform: uppercase;
  }

  .scl-notes-table-header div:nth-child(2),
  .scl-notes-table-header div:nth-child(3),
  .scl-notes-table-header div:nth-child(4),
  .scl-notes-table-header div:nth-child(6) {
    text-align: center;
  }

  .scl-notes-list {
    flex: 0 0 auto;
    min-height: 0;
    overflow: visible;
    display: flex;
    flex-direction: column;
    gap: 0;
    padding-right: 0;
  }

  .scl-note-row {
    display: grid;
    grid-template-columns:
      78px
      78px
      62px
      78px
      minmax(145px, 1fr)
      170px;
    gap: 8px;
    align-items: center;
    padding: 10px;
    background: rgba(16, 31, 51, 0.72);
    border-bottom: 1px solid rgba(124, 148, 178, 0.18);
  }

  .scl-note-row:last-child {
    border-bottom: none;
  }

  .scl-note-cell {
    min-width: 0;
    color: rgba(240, 246, 255, 0.88);
    font-size: 11px;
    font-weight: 700;
    line-height: 1.35;
  }

  .scl-note-time-cell {
    color: #ffffff;
    font-size: 11px;
    font-weight: 900;
    line-height: 1.25;
    white-space: pre-line;
  }

  .scl-note-incident-cell {
    color: rgba(210, 220, 235, 0.7);
    text-align: center;
  }

  .scl-note-acreage-cell,
  .scl-note-containment-cell {
    color: rgba(240, 246, 255, 0.9);
    font-weight: 900;
    white-space: nowrap;
    text-align: center;
  }

  .scl-note-update-cell {
    color: rgba(240, 246, 255, 0.86);
    font-weight: 700;
    white-space: normal;
    overflow-wrap: anywhere;
  }

  .scl-note-threat-cell {
    display: flex;
    justify-content: center;
    min-width: 0;
    overflow: hidden;
  }

  .note-threat-status {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 100%;
    min-width: 0;
    min-height: 21px;
    padding: 3px 5px;
    box-sizing: border-box;
    border-radius: 999px;
    border: 1px solid rgba(124, 148, 178, 0.24);
    background: rgba(8, 17, 29, 0.72);
    color: rgba(240, 246, 255, 0.88);
    font-size: 6.5px;
    font-weight: 900;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: clip;
    box-shadow: none;
    text-shadow: none;
  }

  .note-status-response {
    color: #ffd6d6;
    background: rgba(255, 47, 47, 0.18);
    border-color: rgba(255, 95, 95, 0.42);
  }

  .note-status-potential {
    color: #ffe2bd;
    background: rgba(255, 138, 29, 0.18);
    border-color: rgba(255, 184, 90, 0.42);
  }

  .note-status-no-immediate {
    color: #fff2a8;
    background: rgba(255, 224, 51, 0.16);
    border-color: rgba(255, 244, 110, 0.38);
  }

  .note-status-monitoring {
    color: rgba(210, 220, 235, 0.72);
    background: rgba(8, 17, 29, 0.72);
    border-color: rgba(124, 148, 178, 0.24);
  }

  .progression-modal-backdrop {
    position: fixed;
    inset: 0;
    z-index: 2147483000;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 110px 22px 22px 50px;
    background: rgba(2, 8, 16, 0.68);
    backdrop-filter: blur(2px);
    pointer-events: auto;
  }

  .progression-modal {
    width: min(700px, calc(100vw - 44px));
    max-height: calc(100vh - 44px);
    overflow: hidden;
    border-radius: 14px;
    background:
      linear-gradient(
        180deg,
        rgba(13, 28, 45, 0.98) 0%,
        rgba(8, 17, 29, 0.98) 100%
      );
    border: 1px solid rgba(124, 148, 178, 0.32);
    box-shadow:
      0 24px 80px rgba(0, 0, 0, 0.48),
      inset 0 1px 0 rgba(255, 255, 255, 0.04);
    color: #ffffff;
    display: flex;
    flex-direction: column;
  }

  .progression-modal-header {
    flex: 0 0 auto;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 14px;
    padding: 16px 18px 12px 18px;
    border-bottom: 1px solid rgba(139, 160, 188, 0.22);
  }

  .progression-modal-title {
    color: #ffffff;
    font-size: 14px;
    font-weight: 900;
    letter-spacing: 0.08em;
  }

  .progression-modal-subtitle {
    margin-top: 5px;
    color: rgba(210, 220, 235, 0.62);
    font-size: 11px;
    font-weight: 700;
  }

  .progression-modal-close-button {
    width: 30px;
    height: 30px;
    border-radius: 999px;
    border: 1px solid rgba(124, 148, 178, 0.34);
    background: rgba(8, 17, 29, 0.82);
    color: rgba(240, 246, 255, 0.9);
    font-size: 22px;
    line-height: 1;
    font-weight: 400;
    cursor: pointer;
  }

  .progression-modal-close-button:hover {
    background: rgba(20, 38, 62, 0.96);
    border-color: rgba(190, 205, 225, 0.44);
  }

  .progression-legend-row {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 12px 18px 0 18px;
  }

  .progression-legend-item {
    display: flex;
    align-items: center;
    gap: 7px;
    color: rgba(226, 232, 240, 0.78);
    font-size: 11px;
    font-weight: 800;
  }

  .progression-legend-dot {
    width: 9px;
    height: 9px;
    border-radius: 999px;
  }

  .acreage-dot {
    background: #ff2f2f;
    box-shadow: 0 0 10px rgba(255, 47, 47, 0.45);
  }

  .containment-dot {
    background: #22c55e;
    box-shadow: 0 0 10px rgba(34, 197, 94, 0.45);
  }

  .progression-chart-wrap {
    flex: 1 1 auto;
    min-height: 0;
    padding: 6px 18px 0 18px;
  }

  .progression-chart-svg {
    width: 100%;
    height: auto;
    display: block;
  }

  .progression-grid-line {
    stroke: rgba(148, 163, 184, 0.24);
    stroke-width: 1;
    stroke-dasharray: 4 4;
  }

  .progression-axis-line {
    stroke: rgba(148, 163, 184, 0.35);
    stroke-width: 1;
  }

  .progression-axis-text {
    fill: rgba(210, 220, 235, 0.62);
    font-size: 10px;
    font-weight: 800;
  }

  .acreage-axis-text {
    fill: #ff7b7b;
  }

  .containment-axis-text {
    fill: #86efac;
  }

  .acreage-axis-label,
  .containment-axis-label {
    fill: #ffffff;
  }

  .progression-axis-label {
    font-size: 11px;
    font-weight: 900;
    letter-spacing: 0.05em;
  }

  .progression-x-label {
    fill: rgba(210, 220, 235, 0.58);
    font-size: 9px;
    font-weight: 700;
  }

  .progression-line {
    fill: none;
    stroke-width: 2.5;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .acreage-line {
    stroke: #ff2f2f;
    filter: drop-shadow(0 0 4px rgba(255, 47, 47, 0.45));
  }

  .containment-line {
    stroke: #22c55e;
    filter: drop-shadow(0 0 4px rgba(34, 197, 94, 0.45));
  }

  .progression-point {
    stroke: rgba(8, 17, 29, 0.96);
    stroke-width: 1.5;
  }

  .acreage-point {
    fill: #ff2f2f;
  }

  .containment-point {
    fill: #22c55e;
  }

  .progression-empty-state {
    margin: 18px;
    padding: 18px;
    border-radius: 11px;
    border: 1px dashed rgba(124, 148, 178, 0.28);
    background: rgba(8, 17, 29, 0.42);
    color: rgba(210, 220, 235, 0.72);
    font-size: 12px;
    font-weight: 700;
  }

  .placeholder-copy {
    margin-top: 8px;
    color: rgba(210, 220, 235, 0.58);
    font-size: 12px;
  }

  .ongoing-wildfires-panel {
    flex: 0 0 auto;
    height: 380px;
    max-height: 380px;
    min-height: 0;
    padding: 8px 10px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .ongoing-title-row {
    margin-bottom: 8px;
    flex: 0 0 auto;
  }

  .ongoing-actions {
    display: flex;
    align-items: center;
    gap: 8px;
    flex: 0 0 auto;
  }

  .wildfire-options-button {
    width: 34px;
    height: 24px;
    border-radius: 999px;
    border: 1px solid rgba(124, 148, 178, 0.36);
    background: rgba(8, 17, 29, 0.82);
    color: rgba(240, 246, 255, 0.9);
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0;
  }

  .wildfire-options-button:hover,
  .wildfire-options-button.is-active {
    background: rgba(20, 38, 62, 0.96);
    border-color: rgba(190, 205, 225, 0.45);
  }

  .wildfire-options-dots {
    display: block;
    color: #ffffff;
    font-size: 13px;
    font-weight: 900;
    letter-spacing: 0.08em;
    line-height: 1;
    transform: translateY(-1px);
  }

  .ongoing-count-pill {
    min-width: 36px;
    height: 24px;
    padding: 0 9px;
    border-radius: 999px;
    background: rgba(17, 34, 55, 0.95);
    border: 1px solid rgba(124, 148, 178, 0.28);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    font-size: 12px;
    font-weight: 800;
  }

  .ongoing-count-total {
    margin-left: 3px;
    color: rgba(210, 220, 235, 0.58);
    font-size: 10px;
    font-weight: 800;
  }

  .wildfire-filter-panel {
    flex: 0 0 auto;
    max-height: 155px;
    min-height: 0;
    margin-bottom: 8px;
    padding: 9px 10px;
    border-radius: 10px;
    background: rgba(8, 17, 29, 0.58);
    border: 1px solid rgba(124, 148, 178, 0.2);
    overflow: hidden;
    box-sizing: border-box;
  }

  .wildfire-filter-panel-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    margin-bottom: 7px;
  }

  .wildfire-filter-panel-title {
    color: rgba(208, 218, 233, 0.7);
    font-size: 9px;
    font-weight: 900;
    letter-spacing: 0.12em;
  }

  .wildfire-filter-minimize-button {
    width: 22px;
    height: 22px;
    border-radius: 999px;
    border: 1px solid rgba(124, 148, 178, 0.3);
    background: rgba(16, 31, 51, 0.92);
    color: rgba(240, 246, 255, 0.88);
    font-size: 15px;
    font-weight: 900;
    line-height: 1;
    cursor: pointer;
  }

  .wildfire-filter-minimize-button:hover {
    background: rgba(20, 38, 62, 0.96);
    border-color: rgba(190, 205, 225, 0.4);
  }

  .wildfire-filter-controls {
    display: grid;
    grid-template-columns: 150px minmax(0, 1fr) auto;
    gap: 8px;
    align-items: end;
  }

  .wildfire-filter-label {
    color: rgba(208, 218, 233, 0.6);
    font-size: 9px;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 5px;
  }

  .wildfire-filter-select,
  .wildfire-filter-input {
    width: 100%;
    height: 30px;
    border-radius: 8px;
    border: 1px solid rgba(124, 148, 178, 0.26);
    background: rgba(16, 31, 51, 0.96);
    color: #ffffff;
    font-size: 11px;
    font-weight: 700;
    padding: 0 9px;
    outline: none;
  }

  .wildfire-filter-input::placeholder {
    color: rgba(210, 220, 235, 0.38);
  }

  .wildfire-filter-select:focus,
  .wildfire-filter-input:focus {
    border-color: rgba(190, 205, 225, 0.48);
  }

  .wildfire-filter-clear-button {
    height: 30px;
    border-radius: 999px;
    border: 1px solid rgba(124, 148, 178, 0.3);
    background: rgba(8, 17, 29, 0.8);
    color: rgba(240, 246, 255, 0.9);
    font-size: 10px;
    font-weight: 800;
    padding: 0 10px;
    cursor: pointer;
  }

  .wildfire-filter-clear-button:hover {
    background: rgba(20, 38, 62, 0.96);
  }

  .wildfire-filter-options {
    max-height: 64px;
    min-height: 0;
    overflow-y: auto;
    overflow-x: hidden;
    overscroll-behavior: contain;
    scrollbar-gutter: stable;
    margin-top: 9px;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    gap: 6px;
    padding-right: 5px;
  }

  .wildfire-filter-option {
    max-width: 100%;
    border-radius: 999px;
    border: 1px solid rgba(124, 148, 178, 0.24);
    background: rgba(16, 31, 51, 0.9);
    color: rgba(240, 246, 255, 0.88);
    font-size: 10px;
    font-weight: 800;
    padding: 5px 9px;
    cursor: pointer;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .wildfire-filter-option:hover,
  .wildfire-filter-option.is-selected {
    border-color: rgba(226, 232, 240, 0.52);
    background: rgba(30, 42, 60, 0.96);
    color: #ffffff;
  }

  .wildfire-filter-empty-option {
    color: rgba(210, 220, 235, 0.56);
    font-size: 11px;
    font-weight: 700;
  }

  .active-wildfire-filter-row {
    flex: 0 0 auto;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding: 7px 9px;
    border-radius: 9px;
    background: rgba(8, 17, 29, 0.5);
    border: 1px solid rgba(124, 148, 178, 0.18);
  }

  .active-wildfire-filter-text {
    min-width: 0;
    color: rgba(210, 220, 235, 0.62);
    font-size: 10px;
    font-weight: 700;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .active-wildfire-filter-text span {
    color: #ffffff;
  }

  .active-filter-clear-button {
    height: 22px;
    border-radius: 999px;
    border: 1px solid rgba(124, 148, 178, 0.28);
    background: rgba(16, 31, 51, 0.92);
    color: rgba(240, 246, 255, 0.88);
    font-size: 10px;
    font-weight: 800;
    padding: 0 9px;
    cursor: pointer;
    flex: 0 0 auto;
  }

  .active-filter-clear-button:hover {
    background: rgba(20, 38, 62, 0.96);
  }

  .wildfire-filter-empty-results {
    margin-top: 8px;
    color: rgba(210, 220, 235, 0.58);
    font-size: 12px;
    font-weight: 600;
  }

  .wildfire-list {
    flex: 1 1 0;
    min-height: 0;
    max-height: none;
    overflow-y: auto;
    overflow-x: hidden;
    overscroll-behavior: contain;
    scrollbar-gutter: stable;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding-right: 4px;
  }

  .wildfire-card {
    display: grid;
    grid-template-columns: minmax(250px, 1fr) minmax(260px, 320px);
    gap: 10px;
    padding: 8px 10px;
    border-radius: 10px;
    background: rgba(16, 31, 51, 0.78);
    border: 1px solid rgba(124, 148, 178, 0.22);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.03);
  }

  .wildfire-card.is-clickable {
    cursor: pointer;
    transition:
      border-color 120ms ease,
      background 120ms ease;
  }

  .wildfire-card.is-clickable:hover {
    border-color: rgba(190, 205, 225, 0.36);
    background: rgba(20, 38, 62, 0.9);
  }

  .wildfire-card.is-clickable:focus {
    outline: none;
    border-color: rgba(226, 232, 240, 0.5);
  }

  .wildfire-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 0;
  }

  .wildfire-top-row {
    display: flex;
    align-items: flex-start;
    gap: 9px;
    min-width: 0;
  }

  .wildfire-rank {
    width: 25px;
    height: 25px;
    border-radius: 8px;
    background: rgba(8, 17, 29, 0.92);
    border: 1px solid rgba(124, 148, 178, 0.24);
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(226, 232, 240, 0.86);
    font-size: 11px;
    font-weight: 800;
    flex: 0 0 auto;
  }

  .wildfire-name-block {
    min-width: 0;
  }

  .wildfire-name {
    color: #ffffff;
    font-size: 14px;
    font-weight: 800;
    line-height: 1.2;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .wildfire-location {
    margin-top: 5px;
    color: rgba(210, 220, 235, 0.64);
    font-size: 11px;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .wildfire-stat-grid {
    margin-top: 7px;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 5px;
  }

  .wildfire-mini-stat {
    border-radius: 7px;
    padding: 5px 7px;
    background: rgba(8, 17, 29, 0.5);
    border: 1px solid rgba(124, 148, 178, 0.16);
    min-width: 0;
  }

  .mini-stat-label {
    color: rgba(208, 218, 233, 0.56);
    font-size: 9px;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    white-space: nowrap;
  }

  .mini-stat-value {
    margin-top: 3px;
    color: #ffffff;
    font-size: 10px;
    font-weight: 800;
    white-space: nowrap;
  }

  .wildfire-footer-row {
    margin-top: 7px;
    display: flex;
    align-items: center;
    gap: 7px;
    flex-wrap: wrap;
  }

  .status-pill {
    border-radius: 999px;
    padding: 3px 8px;
    font-size: 10px;
    font-weight: 900;
    letter-spacing: 0.05em;
    color: rgba(240, 246, 255, 0.94);
    background: rgba(8, 17, 29, 0.82);
    border: 1px solid rgba(124, 148, 178, 0.28);
    white-space: nowrap;
    text-transform: uppercase;
  }

  .status-response {
    color: #ffffff;
    background: #ff2f2f;
    border-color: rgba(255, 95, 95, 0.98);
    box-shadow:
      0 0 8px rgba(255, 47, 47, 0.9),
      0 0 18px rgba(255, 47, 47, 0.58),
      0 0 32px rgba(255, 47, 47, 0.32),
      inset 0 0 9px rgba(255, 255, 255, 0.28);
    text-shadow:
      0 0 5px rgba(255, 255, 255, 0.85),
      0 0 10px rgba(255, 47, 47, 0.9);
  }

  .status-potential {
    color: #ffffff;
    background: #ff8a1d;
    border-color: rgba(255, 184, 90, 0.98);
    box-shadow:
      0 0 8px rgba(255, 138, 29, 0.9),
      0 0 18px rgba(255, 138, 29, 0.58),
      0 0 32px rgba(255, 138, 29, 0.32),
      inset 0 0 9px rgba(255, 255, 255, 0.26);
    text-shadow:
      0 0 5px rgba(255, 255, 255, 0.78),
      0 0 10px rgba(255, 138, 29, 0.9);
  }

  .status-no-immediate {
    color: #1f2937;
    background: #ffe033;
    border-color: rgba(255, 244, 110, 0.98);
    box-shadow:
      0 0 8px rgba(255, 224, 51, 0.9),
      0 0 18px rgba(255, 224, 51, 0.58),
      0 0 32px rgba(255, 224, 51, 0.32),
      inset 0 0 9px rgba(255, 255, 255, 0.32);
    text-shadow:
      0 0 5px rgba(255, 255, 255, 0.75),
      0 0 10px rgba(255, 224, 51, 0.85);
  }

  .status-monitoring {
    border-color: rgba(119, 146, 177, 0.28);
    background: rgba(8, 17, 29, 0.82);
    box-shadow: none;
    text-shadow: none;
  }

  .scl-record-count {
    color: rgba(210, 220, 235, 0.52);
    font-size: 10px;
    font-weight: 700;
  }

  .distance-bars {
    min-width: 0;
  }

  .distance-title-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    margin-bottom: 5px;
  }

  .distance-title {
    color: rgba(208, 218, 233, 0.72);
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .distance-total {
    color: #ffffff;
    font-size: 12px;
    font-weight: 900;
  }

  .distance-row {
    display: grid;
    grid-template-columns: 44px minmax(80px, 1fr) 38px;
    gap: 7px;
    align-items: center;
    margin-top: 4px;
  }

  .distance-label {
    color: rgba(210, 220, 235, 0.62);
    font-size: 10px;
    font-weight: 700;
    white-space: nowrap;
  }

  .distance-bar-track {
    height: 6px;
    border-radius: 999px;
    background: rgba(8, 17, 29, 0.9);
    border: 1px solid rgba(124, 148, 178, 0.18);
    overflow: hidden;
  }

  .distance-bar-fill {
    height: 100%;
    min-width: 2px;
    border-radius: 999px;
  }

  .distance-fill-half-mile {
    background: #ff2f2f;
    box-shadow:
      0 0 6px rgba(255, 47, 47, 0.82),
      0 0 14px rgba(255, 47, 47, 0.46);
  }

  .distance-fill-three-mile {
    background: linear-gradient(90deg, #ff8a1d 0%, #ffe033 100%);
    box-shadow:
      0 0 6px rgba(255, 170, 40, 0.82),
      0 0 14px rgba(255, 203, 45, 0.46);
  }

  .distance-fill-five-mile {
    background: #22c55e;
    box-shadow:
      0 0 6px rgba(34, 197, 94, 0.82),
      0 0 14px rgba(34, 197, 94, 0.46);
  }

  .distance-value {
    color: #ffffff;
    font-size: 10px;
    font-weight: 800;
    text-align: right;
  }

  .distance-not-configured {
    color: rgba(210, 220, 235, 0.58);
    font-size: 11px;
    line-height: 1.35;
    border: 1px dashed rgba(124, 148, 178, 0.25);
    border-radius: 9px;
    padding: 10px;
    background: rgba(8, 17, 29, 0.36);
  }

  .status-pill,
  .status-pill.status-response,
  .status-pill.status-potential,
  .status-pill.status-no-immediate,
  .status-pill.status-monitoring {
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    width: fit-content !important;
    min-height: 24px !important;
    padding: 4px 10px !important;
    border-radius: 999px !important;
    font-size: 10px !important;
    font-weight: 900 !important;
    letter-spacing: 0.04em !important;
    text-transform: uppercase !important;
    white-space: nowrap !important;
    box-shadow: none !important;
    text-shadow: none !important;
    filter: none !important;
  }

  .status-pill.status-response {
    color: #ffffff !important;
    background: rgba(220, 38, 38, 0.86) !important;
    border: 1px solid rgba(248, 113, 113, 0.62) !important;
  }

  .status-pill.status-potential {
    color: #ffffff !important;
    background: rgba(234, 88, 12, 0.86) !important;
    border: 1px solid rgba(251, 146, 60, 0.62) !important;
  }

  .status-pill.status-no-immediate {
    color: #1f2937 !important;
    background: rgba(250, 204, 21, 0.88) !important;
    border: 1px solid rgba(253, 224, 71, 0.66) !important;
  }

  .status-pill.status-monitoring {
    color: rgba(240, 246, 255, 0.92) !important;
    background: rgba(8, 17, 29, 0.82) !important;
    border: 1px solid rgba(119, 146, 177, 0.32) !important;
  }

  @media (max-width: 760px) {
    &.exposure-sidebar-widget-root {
      padding: 0;
      max-width: 100%;
      min-height: 0;
    }

    .exposure-sidebar {
      gap: 12px;
      max-width: 100%;
      min-height: 0;
    }

    .top-summary-panels-row {
      grid-template-columns: 1fr;
    }

    .ytd-card-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .wildfire-card {
      grid-template-columns: 1fr;
    }

    .save-loss-row {
      grid-template-columns: 1fr;
    }

    .save-loss-side {
      align-items: flex-start;
    }

    .wildfire-filter-controls {
      grid-template-columns: 1fr;
    }

    .wildfire-filter-panel {
      max-height: 185px;
    }

    .wildfire-filter-options {
      max-height: 78px;
    }

    .fire-detail-summary-grid,
    .fire-save-loss-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .scl-notes-table-header {
      display: none;
    }

    .scl-note-row {
      grid-template-columns: 1fr;
      gap: 6px;
      border-radius: 9px;
      margin-bottom: 7px;
    }

    .scl-note-threat-cell {
      justify-content: flex-start;
    }

    .progression-modal {
      width: calc(100vw - 28px);
    }
  }

  @media (max-width: 460px) {
    .ytd-card-grid {
      grid-template-columns: 1fr;
    }

    .wildfire-stat-grid,
    .fire-detail-summary-grid,
    .fire-save-loss-grid {
      grid-template-columns: 1fr;
    }
  }
`,Pe=o=>{var s;const{config:S}=o,[N,k]=t.React.useState(null),[C,I]=t.React.useState(null),[D,M]=t.React.useState(null),[R,$]=t.React.useState(null),[L,q]=t.React.useState(null),[J,W]=t.React.useState(null),[H,Y]=t.React.useState(null),[Z,te]=t.React.useState(null),[ie,me]=t.React.useState(null),[ue,ve]=t.React.useState(null),[we,ye]=t.React.useState(n),[je,Ne]=t.React.useState(n),[ke,Me]=t.React.useState(l),[Le,Pe]=t.React.useState(null),[_e,Oe]=t.React.useState(d),[Be,Ge]=t.React.useState(c),[Ve,qe]=t.React.useState(null),[Je,Qe]=t.React.useState(null),[Ke,We]=t.React.useState(p),[He,Ye]=t.React.useState(!1),[Ze,Xe]=t.React.useState("status"),[et,tt]=t.React.useState(""),[it,at]=t.React.useState(""),[rt,ot]=t.React.useState(!1),st=t.React.useRef(null),nt=t.React.useCallback(e=>"totalSaves"===e?C:"fireSaves"===e?D:"smokeSaves"===e?R:"losses"===e?L:null,[C,D,R,L]),lt=t.React.useCallback((e,t)=>a(void 0,void 0,void 0,function*(){const i=nt(e);if(!i)return;const a=yield de(i);a&&(a.visible=t)}),[nt]),dt=t.React.useCallback(e=>a(void 0,void 0,void 0,function*(){if(!st.current){const e={};yield Promise.all(m.map(t=>a(void 0,void 0,void 0,function*(){const i=nt(t),a=yield de(i);a&&(e[t]=a.visible)}))),st.current=e}yield Promise.all(m.map(t=>a(void 0,void 0,void 0,function*(){yield lt(t,t===e)})))}),[nt,lt]),ct=t.React.useCallback(()=>a(void 0,void 0,void 0,function*(){const e=st.current;st.current=null,e&&(yield Promise.all(m.map(t=>a(void 0,void 0,void 0,function*(){const i=e[t];void 0!==i&&(yield lt(t,i))}))))}),[lt]),pt=t.React.useCallback(()=>a(void 0,void 0,void 0,function*(){const e=null==N?void 0:N.view;if(e)try{yield e.goTo({center:r,scale:24e6},{duration:700})}catch(e){console.error("Error zooming to CONUS extent:",e)}}),[N]),mt=t.React.useCallback(()=>a(void 0,void 0,void 0,function*(){var e;const t=(null===(e=null==N?void 0:N.view)||void 0===e?void 0:e.extent)||null;if(!J||!t)return null;try{const e=yield de(J);if(!e)return null;const a=xe(e);if(!a.threatStatus||!a.chloetaIncidentId)return console.warn(`SCL layer must include ${z} and ${T} to filter active incident saves.`),null;const r=e.createQuery();r.where=re([oe(e,a.threatStatus),(i=a.threatStatus,`${i} = '${ae("Response Recommended")}'`)]),r.geometry=t,r.spatialRelationship="intersects",r.returnGeometry=!1,r.outFields=he(e,[a.chloetaIncidentId]),r.num=4e3;const o=yield e.queryFeatures(r),s=new Set;return o.features.forEach(e=>{const t=e.attributes||{},i=le(t[a.chloetaIncidentId],"");i&&s.add(i)}),Array.from(s)}catch(e){return console.error("Error loading active Response Recommended incident IDs:",e),null}var i}),[N,J]),ut=t.React.useCallback(()=>a(void 0,void 0,void 0,function*(){var e;const t=(null===(e=null==N?void 0:N.view)||void 0===e?void 0:e.extent)||null;if(!t)return void ye(n);const i=yield mt(),[a,r,o,s]=yield Promise.all([Ie("Total Saves",C,t,i),Ie("Fire Saves",D,t,i),Ie("Smoke Saves",R,t,i),Ie("Losses",L,t)]);ye({totalSaves:a,fireSaves:r,smokeSaves:o,losses:s})}),[N,C,D,R,L,mt]),gt=t.React.useCallback(e=>a(void 0,void 0,void 0,function*(){if(!(null==e?void 0:e.chloetaIncidentId))return void Ne(n);const[t,i,a,r]=yield Promise.all([ze("Selected Fire Total Saves",C,e.chloetaIncidentId),ze("Selected Fire Fire Saves",D,e.chloetaIncidentId),ze("Selected Fire Smoke Saves",R,e.chloetaIncidentId),ze("Selected Fire Losses",L,e.chloetaIncidentId)]);Ne({totalSaves:t,fireSaves:i,smokeSaves:a,losses:r})}),[C,D,R,L]),ft=t.React.useCallback(()=>a(void 0,void 0,void 0,function*(){var e;const t=(null===(e=null==N?void 0:N.view)||void 0===e?void 0:e.extent)||null;if(!t)return void Me(l);const[i,a,r]=yield Promise.all([Ie("0-0.5 mi Policies",Z,t),Ie("0.5-3 mi Policies",ie,t),Ie("3-5 mi Policies",ue,t)]);Me({halfMile:i,threeMile:a,fiveMile:r})}),[N,Z,ie,ue]),xt=t.React.useCallback(e=>a(void 0,void 0,void 0,function*(){var t,i;const a=void 0!==e?e:Le;if(!a)return;const r=u[a],o=nt(a),s=(null===(t=null==N?void 0:N.view)||void 0===t?void 0:t.extent)||null,n=(e=>"totalSaves"===e||"fireSaves"===e||"smokeSaves"===e)(a);if(Oe({activeCard:a,title:`${r.toUpperCase()} DETAILS`,items:[],totalItemCount:0,message:"Loading records..."}),o)if(s)try{const e=yield de(o);if(!e)return void Oe({activeCard:a,title:`${r.toUpperCase()} DETAILS`,items:[],totalItemCount:0,message:`Unable to load the ${r} layer.`});const t=(e=>({policyId:pe(e,g),street:pe(e,f),city:pe(e,x),state:pe(e,h),zipCode:pe(e,b),saveType:pe(e,v),incidentName:pe(e,w),chloetaIncidentId:pe(e,y)}))(e),l=[ce(o,e)];if(n){const i=yield mt();if(null===i)return void Oe({activeCard:a,title:`${r.toUpperCase()} DETAILS`,items:[],totalItemCount:0,message:"Unable to determine active Response Recommended incidents from the SCL layer."});if(!t.chloetaIncidentId)return void Oe({activeCard:a,title:`${r.toUpperCase()} DETAILS`,items:[],totalItemCount:0,message:`Missing required field on ${r} layer: ${y}`});l.push(ge(e,t.chloetaIncidentId,i))}const d=e.createQuery();d.where=re(l),d.geometry=s,d.spatialRelationship="intersects",d.returnGeometry=!0,(null===(i=null==N?void 0:N.view)||void 0===i?void 0:i.spatialReference)&&(d.outSpatialReference=N.view.spatialReference),d.outFields=he(e,[t.policyId,t.street,t.city,t.state,t.zipCode,t.saveType,t.incidentName,t.chloetaIncidentId]),d.num=4e3;const c=(yield e.queryFeatures(d)).features.map((i,o)=>{var s;const n=i.attributes||{},l=e.objectIdField?String(null!==(s=n[e.objectIdField])&&void 0!==s?s:o):String(o);return{id:`${a}-${l}`,policyId:t.policyId?le(n[t.policyId],""):"",street:t.street?le(n[t.street],""):"",city:t.city?le(n[t.city],""):"",state:t.state?le(n[t.state],""):"",zipCode:t.zipCode?le(n[t.zipCode],""):"",saveType:t.saveType?le(n[t.saveType],r):r,incidentName:t.incidentName?le(n[t.incidentName],""):"",geometry:i.geometry||null}});c.sort((e,t)=>{const i=e.incidentName.localeCompare(t.incidentName);return 0!==i?i:e.policyId.localeCompare(t.policyId)}),Oe({activeCard:a,title:`${r.toUpperCase()} DETAILS`,items:c,totalItemCount:c.length,message:c.length?"":`No ${r.toLowerCase()} records found in the current map extent.`})}catch(e){console.error(`Error loading ${r} details:`,e),Oe({activeCard:a,title:`${r.toUpperCase()} DETAILS`,items:[],totalItemCount:0,message:`Unable to load ${r.toLowerCase()} records.`})}else Oe({activeCard:a,title:`${r.toUpperCase()} DETAILS`,items:[],totalItemCount:0,message:"Waiting for map extent."});else Oe({activeCard:a,title:`${r.toUpperCase()} DETAILS`,items:[],totalItemCount:0,message:`Select the ${r} layer in settings.`})}),[Le,nt,N,mt]),ht=t.React.useCallback(e=>a(void 0,void 0,void 0,function*(){if(e)if(e.chloetaIncidentId)if(H){We({items:[],totalItemCount:0,message:"Loading notes..."});try{const t=yield de(H);if(!t)return void We({items:[],totalItemCount:0,message:"Unable to load the Smoke Check Log Notes layer."});const i=(e=>({updatedTime:pe(e,E),incidentName:pe(e,F),acreage:pe(e,U),containment:pe(e,A),threatStatus:pe(e,P),newUpdate:pe(e,_),chloetaIncidentId:pe(e,O)}))(t);if(!i.chloetaIncidentId)return void We({items:[],totalItemCount:0,message:`Missing required notes field: ${O}`});const a=t.createQuery();a.where=re([t.definitionExpression,fe(t,i.chloetaIncidentId,e.chloetaIncidentId)]),a.returnGeometry=!1,a.outFields=he(t,[i.updatedTime,i.incidentName,i.acreage,i.containment,i.threatStatus,i.newUpdate,i.chloetaIncidentId]),a.num=4e3,i.updatedTime&&(a.orderByFields=[`${i.updatedTime} DESC`]);const r=(yield t.queryFeatures(a)).features.map((e,a)=>{var r;const o=e.attributes||{},s=i.updatedTime?o[i.updatedTime]:null;return{id:`note-${t.objectIdField?String(null!==(r=o[t.objectIdField])&&void 0!==r?r:a):String(a)}`,updatedTime:i.updatedTime?ee(s):"--",updatedTimestamp:X(s),incidentName:i.incidentName?le(o[i.incidentName],""):"",acreage:i.acreage?ne(o[i.acreage]):null,containment:i.containment?ne(o[i.containment]):null,threatStatus:i.threatStatus?le(o[i.threatStatus],""):"",newUpdate:i.newUpdate?le(o[i.newUpdate],""):""}});We({items:r,totalItemCount:r.length,message:r.length?"":"No smoke check log notes found for this incident."})}catch(e){console.error("Error loading SCL notes:",e),We({items:[],totalItemCount:0,message:"Unable to load smoke check log notes."})}}else We({items:[],totalItemCount:0,message:"Select the Smoke Check Log Notes layer in settings."});else We({items:[],totalItemCount:0,message:"This wildfire does not have a chloeta_incident_id."});else We(p)}),[H]),bt=t.React.useCallback(e=>a(void 0,void 0,void 0,function*(){const t=null==N?void 0:N.view,i=e.geometry;if(t&&i)try{let e=i;if("point"===i.type){const a="number"==typeof t.zoom?t.zoom:10;e={target:i,zoom:Math.max(a,15)}}else{const t=i.extent;t&&(e=t.expand(1.5))}yield t.goTo(e,{duration:700})}catch(e){console.error("Error zooming to save/loss record:",e)}}),[N]),vt=t.React.useCallback(e=>{qe(null),We(p),Ne(n),ot(!1),Pe(e);nt(e)&&dt(e),xt(e)},[dt,nt,xt]),wt=t.React.useCallback(()=>{Pe(null),Oe(d),ct(),pt()},[ct,pt]),yt=t.React.useCallback(()=>a(void 0,void 0,void 0,function*(){var e,t;const i=(null===(e=null==N?void 0:N.view)||void 0===e?void 0:e.extent)||null;var a;if(J)if(i)try{const e=yield de(J);if(!e)return void Ge(Object.assign(Object.assign({},c),{message:"Unable to load the Smoke Check Log layer."}));const r=xe(e);if(!r.incidentName)return void Ge(Object.assign(Object.assign({},c),{message:`Missing required SCL field: ${j}`}));if(!r.threatStatus)return void Ge(Object.assign(Object.assign({},c),{message:`Missing required SCL field: ${z}`}));const o=Boolean(r.halfMile||r.threeMile||r.fiveMile),s=e.createQuery();s.where=re([oe(e,r.threatStatus),(a=r.threatStatus,`${a} IN (${B.map(e=>`'${ae(e)}'`).join(", ")})`)]),s.geometry=i,s.spatialRelationship="intersects",s.returnGeometry=!0,(null===(t=null==N?void 0:N.view)||void 0===t?void 0:t.spatialReference)&&(s.outSpatialReference=N.view.spatialReference),s.outFields=he(e,[r.incidentName,r.county,r.state,r.zipCode,r.acreage,r.containment,r.threatStatus,r.halfMile,r.threeMile,r.fiveMile,r.nearestDistance,r.lastUpdate,r.chloetaIncidentId]),s.num=4e3;const n=yield e.queryFeatures(s),l=new Map;n.features.forEach((t,i)=>{var a;const o=t.attributes||{},s=le(o[r.incidentName],"");if(!s)return;const n=le(o[r.threatStatus],"Monitoring");if(!(e=>G.includes(e.trim().toLowerCase()))(n))return;const d=r.chloetaIncidentId?le(o[r.chloetaIncidentId],""):"",c=e.objectIdField?String(null!==(a=o[e.objectIdField])&&void 0!==a?a:i):String(i),p=d||s.toLowerCase()||`unknown-${c}`,m=r.county?le(o[r.county],""):"",u=r.state?le(o[r.state],""):"",g=r.zipCode?le(o[r.zipCode],""):"",f=r.acreage?ne(o[r.acreage]):null,x=r.containment?ne(o[r.containment]):null,h=r.nearestDistance?ne(o[r.nearestDistance]):null,b=r.lastUpdate?le(o[r.lastUpdate],""):"",v=t.geometry||null,w={halfMile:r.halfMile?se(o[r.halfMile]):0,threeMile:r.threeMile?se(o[r.threeMile]):0,fiveMile:r.fiveMile?se(o[r.fiveMile]):0},y=l.get(p);if(y){if(y.featureCount+=1,!y.chloetaIncidentId&&d&&(y.chloetaIncidentId=d),!y.county&&m&&(y.county=m),!y.state&&u&&(y.state=u),!y.zipCode&&g&&(y.zipCode=g),g&&!y.zipCodes.includes(g)&&y.zipCodes.push(g),be(n)<be(y.status)&&(y.status=n),null!==f&&(y.acreage=null===y.acreage?f:Math.max(y.acreage,f)),null!==x&&(y.containment=null===y.containment?x:Math.max(y.containment,x)),null!==h){const e=null===y.nearestDistance||h<y.nearestDistance;y.nearestDistance=null===y.nearestDistance?h:Math.min(y.nearestDistance,h),e&&v&&(y.geometry=v)}else!y.geometry&&v&&(y.geometry=v);y.lastUpdate=((e,t)=>{const i=String(e||"").trim(),a=String(t||"").trim();if(!a)return i;if(!i)return a;const r=Date.parse(i),o=Date.parse(a);return Number.isFinite(r)&&Number.isFinite(o)&&o>r?a:i})(y.lastUpdate,b),V.forEach(e=>{y.bands[e.key]+=w[e.key]}),y.totalExposure=Se(y.bands)}else l.set(p,{id:p,name:s,county:m,state:u,zipCode:g,zipCodes:g?[g]:[],status:n,acreage:f,containment:x,nearestDistance:h,lastUpdate:b,chloetaIncidentId:d,totalExposure:Se(w),featureCount:1,geometry:v,bands:Object.assign({},w)})});const d=Array.from(l.values()).map(e=>(o||(e.totalExposure=e.featureCount),e.zipCodes=e.zipCodes.sort((e,t)=>e.localeCompare(t)),e));d.sort((e,t)=>{var i,a;const r=be(e.status)-be(t.status);if(0!==r)return r;if(t.totalExposure!==e.totalExposure)return t.totalExposure-e.totalExposure;return(null!==(i=e.nearestDistance)&&void 0!==i?i:Number.POSITIVE_INFINITY)-(null!==(a=t.nearestDistance)&&void 0!==a?a:Number.POSITIVE_INFINITY)}),Ge({items:d,totalItemCount:d.length,message:d.length?"":"No ongoing wildfires found in the current map extent.",hasDistanceFields:o})}catch(e){console.error("Error loading ongoing wildfires:",e),Ge(Object.assign(Object.assign({},c),{message:"Unable to load ongoing wildfires."}))}else Ge(Object.assign(Object.assign({},c),{message:"Waiting for map extent."}));else Ge(c)}),[N,J]),jt=t.React.useCallback(e=>a(void 0,void 0,void 0,function*(){const t=null==N?void 0:N.view,i=e.geometry;if(Qe(e),t&&i)try{yield t.goTo({target:i,scale:5e4},{duration:700})}catch(e){console.error("Error zooming to ongoing wildfire:",e)}}),[N]),St=t.React.useCallback(e=>{Pe(null),Oe(d),qe(e),Qe(e),Ne(n),ot(!1),ht(e),gt(e),jt(e)},[ht,gt,jt]),Nt=t.React.useCallback(()=>{qe(null),We(p),Ne(n),Qe(null),tt(""),at(""),Ye(!1),ot(!1),pt()},[pt]),kt=t.React.useCallback(()=>{ut(),ft(),Le?xt(Le):Ve?(ht(Ve),gt(Ve)):yt()},[Le,Ve,ut,ft,yt,xt,ht,gt]);t.React.useEffect(()=>{kt()},[kt]),t.React.useEffect(()=>{const e=null==N?void 0:N.view;if(!e)return;let t;const i=()=>{t&&window.clearTimeout(t),t=window.setTimeout(()=>{kt()},350)},a=e.watch("stationary",e=>{e&&i()}),r=e.watch("extent",()=>{e.stationary&&i()});return i(),()=>{null==a||a.remove(),null==r||r.remove(),t&&window.clearTimeout(t)}},[N,kt]),t.React.useEffect(()=>{const e=window.setInterval(()=>{kt()},6e4);return()=>{window.clearInterval(e)}},[kt]);const Ct=Boolean(it||et.trim()),It=t.React.useMemo(()=>{const e=new Set;Be.items.forEach(t=>{Ce(t,Ze).forEach(t=>{const i=t.trim();i&&e.add(i)})});const t=et.trim().toLowerCase();return Array.from(e).sort((e,t)=>e.localeCompare(t)).filter(e=>!t||e.toLowerCase().includes(t))},[Be.items,Ze,et]),zt=t.React.useMemo(()=>{const e=it.trim().toLowerCase(),t=et.trim().toLowerCase();return e||t?Be.items.filter(i=>{const a=Ce(i,Ze).map(e=>e.trim().toLowerCase());return e?a.some(t=>t===e):a.some(e=>e.includes(t))}):Be.items},[Be.items,Ze,et,it]),Dt=t.React.useCallback(e=>{Xe(e),tt(""),at("")},[]),Mt=t.React.useCallback(e=>{tt(e),at("")},[]),Rt=t.React.useCallback(e=>{at(e),tt(e),Ye(!1)},[]),$t=t.React.useCallback(()=>{tt(""),at(""),Qe(null),Ye(!1),pt()},[pt]);return(0,e.jsxs)("div",{className:["exposure-sidebar-widget-root",rt?"is-progression-modal-open":""].join(" "),css:Ae(),children:[(null===(s=o.useMapWidgetIds)||void 0===s?void 0:s[0])&&(0,e.jsx)(i.JimuMapViewComponent,{useMapWidgetId:o.useMapWidgetIds[0],onActiveViewChange:e=>{k(e||null)}}),S.totalSavesUseDataSource&&(0,e.jsx)(t.DataSourceComponent,{useDataSource:S.totalSavesUseDataSource,widgetId:o.id,onDataSourceCreated:e=>{I(e)}}),S.fireSavesUseDataSource&&(0,e.jsx)(t.DataSourceComponent,{useDataSource:S.fireSavesUseDataSource,widgetId:o.id,onDataSourceCreated:e=>{M(e)}}),S.smokeSavesUseDataSource&&(0,e.jsx)(t.DataSourceComponent,{useDataSource:S.smokeSavesUseDataSource,widgetId:o.id,onDataSourceCreated:e=>{$(e)}}),S.lossesUseDataSource&&(0,e.jsx)(t.DataSourceComponent,{useDataSource:S.lossesUseDataSource,widgetId:o.id,onDataSourceCreated:e=>{q(e)}}),S.smokeCheckLogUseDataSource&&(0,e.jsx)(t.DataSourceComponent,{useDataSource:S.smokeCheckLogUseDataSource,widgetId:o.id,onDataSourceCreated:e=>{W(e)}}),S.smokeCheckLogNotesUseDataSource&&(0,e.jsx)(t.DataSourceComponent,{useDataSource:S.smokeCheckLogNotesUseDataSource,widgetId:o.id,onDataSourceCreated:e=>{Y(e)}}),S.distanceHalfMilePoliciesUseDataSource&&(0,e.jsx)(t.DataSourceComponent,{useDataSource:S.distanceHalfMilePoliciesUseDataSource,widgetId:o.id,onDataSourceCreated:e=>{te(e)}}),S.distanceThreeMilePoliciesUseDataSource&&(0,e.jsx)(t.DataSourceComponent,{useDataSource:S.distanceThreeMilePoliciesUseDataSource,widgetId:o.id,onDataSourceCreated:e=>{me(e)}}),S.distanceFiveMilePoliciesUseDataSource&&(0,e.jsx)(t.DataSourceComponent,{useDataSource:S.distanceFiveMilePoliciesUseDataSource,widgetId:o.id,onDataSourceCreated:e=>{ve(e)}}),(0,e.jsx)("div",{className:"exposure-sidebar",children:Le?(0,e.jsx)(Re,{details:_e,onClear:wt,onItemClick:bt}):Ve?(0,e.jsx)(Ee,{item:Ve,notes:Ke,counts:je,onClear:Nt,onOpenProgressionChart:()=>{ot(!0)}}):(0,e.jsxs)(t.React.Fragment,{children:[(0,e.jsxs)("div",{className:"top-summary-panels-row",children:[(0,e.jsxs)("div",{className:"exposure-panel ytd-panel",children:[(0,e.jsx)("div",{className:"panel-title-row",children:(0,e.jsx)("div",{children:(0,e.jsx)("div",{className:"panel-title",children:"ACTIVE INCIDENTS SAVES & LOSSES"})})}),(0,e.jsxs)("div",{className:"ytd-card-grid",children:[(0,e.jsx)(De,{label:"Total Saves",value:we.totalSaves,onClick:()=>vt("totalSaves")}),(0,e.jsx)(De,{label:"Fire Saves",value:we.fireSaves,onClick:()=>vt("fireSaves")}),(0,e.jsx)(De,{label:"Smoke Saves",value:we.smokeSaves,onClick:()=>vt("smokeSaves")}),(0,e.jsx)(De,{label:"Losses",value:we.losses,onClick:()=>vt("losses")})]})]}),(0,e.jsx)($e,{counts:ke})]}),(0,e.jsxs)("div",{className:"exposure-panel ongoing-wildfires-panel",children:[(0,e.jsxs)("div",{className:"panel-title-row ongoing-title-row",children:[(0,e.jsx)("div",{children:(0,e.jsx)("div",{className:"panel-title",children:"ONGOING WILDFIRES"})}),(0,e.jsxs)("div",{className:"ongoing-actions",children:[(0,e.jsx)("button",{className:["wildfire-options-button",He?"is-active":""].join(" "),type:"button","aria-label":He?"Minimize filter options":"Open filter options",title:He?"Minimize filter options":"Open filter options",onClick:()=>{Ye(e=>!e)},children:(0,e.jsx)("span",{className:"wildfire-options-dots",children:"..."})}),(0,e.jsxs)("div",{className:"ongoing-count-pill",children:[K(zt.length),Ct&&(0,e.jsxs)("span",{className:"ongoing-count-total",children:["/",K(Be.totalItemCount)]})]})]})]}),!Be.message&&He&&(0,e.jsx)(Ue,{field:Ze,searchText:et,selectedValue:it,options:It,onFieldChange:Dt,onSearchTextChange:Mt,onOptionSelect:Rt,onClear:$t,onMinimize:()=>{Ye(!1)}}),!Be.message&&(Ct||Je)&&!He&&(0,e.jsxs)("div",{className:"active-wildfire-filter-row",children:[(0,e.jsx)("div",{className:"active-wildfire-filter-text",children:Ct?(0,e.jsxs)(t.React.Fragment,{children:["Filtered by ",Q[Ze],":"," ",(0,e.jsx)("span",{children:it||et})]}):(0,e.jsxs)(t.React.Fragment,{children:["Focused on:"," ",(0,e.jsx)("span",{children:(null==Je?void 0:Je.name)||"Selected wildfire"})]})}),(0,e.jsx)("button",{className:"active-filter-clear-button",type:"button",onClick:$t,children:"Clear"})]}),Be.message&&(0,e.jsx)("div",{className:"placeholder-copy",children:Be.message}),!Be.message&&0===zt.length&&(0,e.jsx)("div",{className:"wildfire-filter-empty-results",children:"No wildfires match the current filter."}),!Be.message&&zt.length>0&&(0,e.jsx)("div",{className:"wildfire-list",children:zt.map((t,i)=>(0,e.jsx)(Fe,{item:t,index:i,hasDistanceFields:Be.hasDistanceFields,onClick:St},t.id))})]})]})}),Ve&&rt&&(0,e.jsx)(Te,{item:Ve,notes:Ke,onClose:()=>{ot(!1)}})]})};function _e(e){o.p=e}})(),s})())}}});