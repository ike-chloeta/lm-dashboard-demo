System.register(["jimu-core/emotion","jimu-core","jimu-arcgis"],function(e,t){var i={},a={},s={};return{setters:[function(e){i.jsx=e.jsx,i.jsxs=e.jsxs},function(e){a.DataSourceComponent=e.DataSourceComponent,a.React=e.React,a.css=e.css},function(e){s.JimuMapViewComponent=e.JimuMapViewComponent,s.loadArcGISJSAPIModules=e.loadArcGISJSAPIModules}],execute:function(){e((()=>{var e={2686(e){"use strict";e.exports=s},9244(e){"use strict";e.exports=a},7386(e){"use strict";e.exports=i}},t={};function r(i){var a=t[i];if(void 0!==a)return a.exports;var s=t[i]={exports:{}};return e[i](s,s.exports,r),s.exports}r.d=(e,t)=>{for(var i in t)r.o(t,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="";var n={};return r.p=window.jimuConfig.baseUrl,(()=>{"use strict";r.r(n),r.d(n,{__set_webpack_public_path__:()=>Oe,default:()=>_e});var e=r(7386),t=r(9244),i=r(2686),a=function(e,t,i,a){return new(i||(i=Promise))(function(s,r){function n(e){try{o(a.next(e))}catch(e){r(e)}}function l(e){try{o(a.throw(e))}catch(e){r(e)}}function o(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i(function(e){e(t)})).then(n,l)}o((a=a.apply(e,t||[])).next())})};const s=[-98.5795,39.8283],l={totalSaves:null,fireSaves:null,smokeSaves:null,losses:null},o={halfMile:null,threeMile:null,fiveMile:null},c={activeCard:null,title:"",items:[],totalItemCount:0,message:""},d={items:[],totalItemCount:0,message:"Select the Smoke Check Log layer in settings.",hasDistanceFields:!1},m={items:[],totalItemCount:0,message:""},u=["totalSaves","fireSaves","smokeSaves","losses"],p={totalSaves:"Total Saves",fireSaves:"Fire Saves",smokeSaves:"Smoke Saves",losses:"Losses"},f="policyid",h="street",g="city",v="state",x="zip_code",b="save_type",w="incident_name",y="chloeta_incident_id",j="incident_name",k="county",S="state",N="zip_code",C="acreage",I="containment",D="threat_status",z="half_mile_buffer",M="three_mile_buffer",R="five_mile_buffer",F="distance_to_nearest_insured_mi",L="last_update",T="chloeta_incident_id",$="updated_time",E="incident_name",A="acreage",U="containment",P="threat_status",_="new_update",O="chloeta_incident_id",B=["No Immediate Threat","Potential Threat","Response Recommended"],G=B.map(e=>e.toLowerCase()),V=[{key:"halfMile",label:"0-0.5"},{key:"threeMile",label:"0.5-3"},{key:"fiveMile",label:"3-5"}],q=[{key:"halfMile",label:"0-0.5 mi"},{key:"threeMile",label:"0.5-3 mi"},{key:"fiveMile",label:"3-5 mi"}],J=["status","state","zipCode","name"],Q={status:"Threat Status",state:"State",zipCode:"ZIP Code",name:"Incident Name"},K=e=>null==e||Number.isNaN(e)?"--":Math.round(e).toLocaleString(),W=(e,t=1)=>null==e||Number.isNaN(e)?"--":e.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:t}),H=e=>null==e||Number.isNaN(e)?"-- ac":`${Math.round(e).toLocaleString()} ac`,Y=e=>{if(null==e||Number.isNaN(e))return null;const t=e>0&&e<=1?100*e:e;return Math.min(100,Math.max(0,t))},Z=e=>{const t=Y(e);return null===t?"--%":`${Math.round(t).toLocaleString()}%`},X=e=>{if(null==e||""===e)return null;const t=String(e).trim(),i=Number(e),a=Number.isFinite(i)?new Date(i):new Date(t);return Number.isNaN(a.getTime())?null:a.getTime()},ee=e=>{const t=X(e);if(null===t){return String(null!=e?e:"").trim()||"--"}const i=new Date(t);return`${i.toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"})}\n${i.toLocaleTimeString(void 0,{hour:"numeric",minute:"2-digit"})}`},te=e=>{const t=new Date(e);return`${t.toLocaleDateString(void 0,{month:"short",day:"numeric"})} ${t.toLocaleTimeString(void 0,{hour:"numeric",minute:"2-digit"})}`},ie=e=>`${e} \xb7 ${(new Date).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1,timeZone:"UTC"})} UTC`,ae=e=>{const t=String(e||"").trim();return t&&"1=1"!==t?t:""},se=e=>e.replace(/'/g,"''"),re=e=>{const t=e.map(e=>ae(e)).filter(Boolean);return t.length?t.map(e=>`(${e})`).join(" AND "):"1=1"},ne=(e,t)=>{const i=ae(e.definitionExpression);return i?((e,t)=>{const i=ae(e).toLowerCase();if(!i)return!1;const a=t.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g,"\\$&");return new RegExp(`(^|[^a-z0-9_])${a}([^a-z0-9_]|$)`).test(i)})(i,t)?null:i:null},le=e=>{const t=Number(e);return Number.isFinite(t)?t:0},oe=e=>{if(null==e||""===e)return null;const t=Number(e);return Number.isFinite(t)?t:null},ce=(e,t)=>{const i=String(null!=e?e:"").trim();return i||t},de=e=>a(void 0,void 0,void 0,function*(){var t,a;if(!e)return null;const s=e;try{"function"==typeof s.ready&&(yield s.ready()),"function"==typeof s.load&&(yield s.load())}catch(e){console.warn("Data source did not fully ready/load before layer lookup:",e)}let r=s.layer||(null===(t=s.getLayer)||void 0===t?void 0:t.call(s));if(!r&&"function"==typeof s.createJSAPILayerByDataSource)try{r=yield s.createJSAPILayerByDataSource()}catch(e){console.warn("Unable to create JSAPI layer from data source:",e)}if(!r){const e=s.url||(null===(a=s.getUrl)||void 0===a?void 0:a.call(s));if(e)try{const[t]=yield(0,i.loadArcGISJSAPIModules)(["esri/layers/FeatureLayer"]);r=new t({url:e})}catch(e){console.warn("Unable to create FeatureLayer from data source URL:",e)}}return r?("function"==typeof r.load&&(yield r.load()),r):(console.warn("No JSAPI layer could be resolved from data source:",{id:s.id,type:s.type,label:s.label,url:s.url}),null)}),me=(e,t)=>{var i;const a=[],s=null===(i=null==e?void 0:e.getCurrentQueryParams)||void 0===i?void 0:i.call(e),r=ae(null==s?void 0:s.where),n=ae(t.definitionExpression);return r&&a.push(r),n&&n!==r&&a.push(n),a.length?a.map(e=>`(${e})`).join(" AND "):"1=1"},ue=(e,t)=>{const i=e.fields||[],a=new Map;return i.forEach(e=>{a.set(e.name.toLowerCase(),e.name)}),a.get(t.toLowerCase())||null},pe=(e,t)=>{const i=(e.fields||[]).find(e=>e.name.toLowerCase()===t.toLowerCase());return String((null==i?void 0:i.type)||"").toLowerCase()},fe=e=>["oid","small-integer","integer","single","double","long"].includes(e),he=(e,t,i)=>{const a=Array.from(new Set(i.map(e=>String(null!=e?e:"").trim()).filter(Boolean)));if(!a.length)return"1=0";const s=pe(e,t);if(fe(s)){const e=a.map(e=>Number(e)).filter(e=>Number.isFinite(e));return e.length?`${t} IN (${e.join(", ")})`:"1=0"}return`${t} IN (${a.map(e=>`'${se(e)}'`).join(", ")})`},ge=(e,t,i)=>{const a=String(i||"").trim();if(!a)return"1=0";const s=pe(e,t);if(fe(s)){const e=Number(a);return Number.isFinite(e)?`${t} = ${e}`:"1=0"}return`${t} = '${se(a)}'`},ve=e=>({incidentName:ue(e,j),county:ue(e,k),state:ue(e,S),zipCode:ue(e,N),acreage:ue(e,C),containment:ue(e,I),threatStatus:ue(e,D),halfMile:ue(e,z),threeMile:ue(e,M),fiveMile:ue(e,R),nearestDistance:ue(e,F),lastUpdate:ue(e,L),chloetaIncidentId:ue(e,T)}),xe=(e,t)=>{const i=t.filter(Boolean);return e.objectIdField&&i.push(e.objectIdField),Array.from(new Set(i))},be=e=>{const t=e.toLowerCase();return t.includes("response recommended")||t.includes("threatening")?1:t.includes("potential")?2:t.includes("no immediate")?3:4},we=e=>{const t=be(e);return 1===t?"status-response":2===t?"status-potential":3===t?"status-no-immediate":"status-monitoring"},ye=e=>{const t=be(e);return 1===t?"note-status-response":2===t?"note-status-potential":3===t?"note-status-no-immediate":"note-status-monitoring"},je=e=>{const t=String(e||"").trim();return"determined"===t.toLowerCase()?"Monitoring":t},ke=e=>"halfMile"===e?"distance-fill-half-mile":"threeMile"===e?"distance-fill-three-mile":"fiveMile"===e?"distance-fill-five-mile":"",Se=e=>V.reduce((t,i)=>t+e[i.key],0),Ne=e=>{const t=[];return e.county&&t.push(e.county),e.state&&t.push(e.state),1===e.zipCodes.length?t.push(e.zipCodes[0]):e.zipCodes.length>1?t.push(`${e.zipCodes[0]} +${e.zipCodes.length-1}`):e.zipCode&&t.push(e.zipCode),t.length?t.join(", "):"Location --"},Ce=e=>{const t=[];return e.city&&t.push(e.city),e.state&&t.push(e.state),e.zipCode&&t.push(e.zipCode),t.length?t.join(", "):"Location --"},Ie=(e,t)=>"status"===t?e.status?[e.status]:[]:"state"===t?e.state?[e.state]:[]:"zipCode"===t?e.zipCodes.length?e.zipCodes:e.zipCode?[e.zipCode]:[]:"name"===t&&e.name?[e.name]:[],De=(e,t,i,s)=>a(void 0,void 0,void 0,function*(){if(!t||!i)return null;if(null===s)return null;try{const a=yield de(t);if(!a)return null;const r=a.createQuery(),n=[me(t,a)];if(Array.isArray(s)){const t=ue(a,y);if(!t)return console.warn(`${e} layer is missing field ${y}.`),null;n.push(he(a,t,s))}return r.where=re(n),r.geometry=i,r.spatialRelationship="intersects",r.returnGeometry=!1,yield a.queryFeatureCount(r)}catch(t){return console.error(`Error counting ${e}:`,t),null}}),ze=(e,t,i)=>a(void 0,void 0,void 0,function*(){if(!t||!i)return 0;try{const a=yield de(t);if(!a)return 0;const s=ue(a,y);if(!s)return console.warn(`${e} layer is missing field ${y}.`),0;const r=a.createQuery();return r.where=re([me(t,a),ge(a,s,i)]),r.returnGeometry=!1,yield a.queryFeatureCount(r)}catch(t){return console.error(`Error counting ${e} for selected fire:`,t),0}}),Me=t=>(0,e.jsxs)("div",{className:"ytd-metric-card is-clickable",role:"button",tabIndex:0,onClick:t.onClick,onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),t.onClick())},children:[(0,e.jsx)("div",{className:"ytd-metric-label",children:t.label}),(0,e.jsx)("div",{className:"ytd-metric-value",children:K(t.value)})]}),Re=t=>(0,e.jsxs)("div",{className:["fire-detail-summary-card",t.onClick?"is-clickable":"",t.variant?`is-${t.variant}`:""].join(" "),role:t.onClick?"button":void 0,tabIndex:t.onClick?0:void 0,onClick:t.onClick,onKeyDown:e=>{t.onClick&&("Enter"!==e.key&&" "!==e.key||(e.preventDefault(),t.onClick()))},children:[(0,e.jsx)("div",{className:"mini-stat-label",children:t.label}),(0,e.jsx)("div",{className:"mini-stat-value",children:t.value})]}),Fe=t=>(0,e.jsxs)("div",{className:"exposure-panel save-loss-details-panel",children:[(0,e.jsxs)("div",{className:"panel-title-row detail-panel-title-row",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{className:"panel-title",children:t.details.title||"SAVE / LOSS DETAILS"}),(0,e.jsxs)("div",{className:"panel-caption",children:[K(t.details.totalItemCount)," records \xb7 ",ie("Save/Loss layer")]})]}),(0,e.jsx)("button",{className:"clear-filter-button",type:"button",onClick:t.onClear,children:"Clear filter"})]}),t.details.message&&(0,e.jsx)("div",{className:"placeholder-copy",children:t.details.message}),!t.details.message&&(0,e.jsx)("div",{className:"save-loss-list",children:t.details.items.map(i=>(0,e.jsxs)("div",{className:"save-loss-row is-clickable",role:"button",tabIndex:0,onClick:()=>t.onItemClick(i),onKeyDown:e=>((e,i)=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),t.onItemClick(i))})(e,i),children:[(0,e.jsxs)("div",{className:"save-loss-main",children:[(0,e.jsx)("div",{className:"save-loss-policy",children:i.policyId||"Policy --"}),(0,e.jsx)("div",{className:"save-loss-street",children:i.street||"Street --"}),(0,e.jsx)("div",{className:"save-loss-location",children:Ce(i)})]}),(0,e.jsxs)("div",{className:"save-loss-side",children:[(0,e.jsx)("div",{className:"save-loss-type-pill",children:i.saveType||"Type --"}),(0,e.jsx)("div",{className:"save-loss-incident",children:i.incidentName||"Incident --"})]})]},i.id))})]}),Le=t=>{const i=(a=t.counts,q.reduce((e,t)=>e+(a[t.key]||0),0));var a;return(0,e.jsxs)("div",{className:"exposure-panel impacted-distance-panel",children:[(0,e.jsxs)("div",{className:"panel-title-row impacted-distance-title-row",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{className:"panel-title",children:"CURRENT IMPACTED POLICIES BY DISTANCE"}),(0,e.jsx)("div",{className:"panel-caption",children:ie("Policy distance layers")})]}),(0,e.jsx)("div",{className:"distance-total-pill",children:K(i)})]}),(0,e.jsx)("div",{className:"impacted-distance-chart",children:q.map(a=>{const s=t.counts[a.key],r=s||0,n=i>0?Math.min(100,Math.max(0,r/i*100)):0;return(0,e.jsxs)("div",{className:"impacted-distance-row",children:[(0,e.jsx)("div",{className:"impacted-distance-label",children:a.label}),(0,e.jsx)("div",{className:"impacted-distance-bar-track",children:(0,e.jsx)("div",{className:["impacted-distance-bar-fill",ke(a.key)].join(" "),style:{width:`${n}%`}})}),(0,e.jsx)("div",{className:"impacted-distance-value",children:K(s)})]},a.key)})})]})},Te=t=>{const i=Se(t.item.bands);return t.hasDistanceFields?(0,e.jsxs)("div",{className:"distance-bars",children:[(0,e.jsxs)("div",{className:"distance-title-row",children:[(0,e.jsx)("div",{className:"distance-title",children:"Impacted Policies"}),(0,e.jsx)("div",{className:"distance-total",children:K(t.item.totalExposure)})]}),V.map(a=>{const s=t.item.bands[a.key],r=i>0?Math.min(100,Math.max(0,s/i*100)):0;return(0,e.jsxs)("div",{className:"distance-row",children:[(0,e.jsx)("div",{className:"distance-label",children:a.label}),(0,e.jsx)("div",{className:"distance-bar-track",children:(0,e.jsx)("div",{className:["distance-bar-fill",ke(a.key)].join(" "),style:{width:`${r}%`}})}),(0,e.jsx)("div",{className:"distance-value",children:K(s)})]},a.key)})]}):(0,e.jsx)("div",{className:"distance-not-configured",children:"Distance fields were not found on the SCL layer."})},$e=i=>{const a=t.React.useMemo(()=>i.notes.items.reduce((e,t)=>(null===t.updatedTimestamp||e.push({timestamp:t.updatedTimestamp,label:te(t.updatedTimestamp),acreage:t.acreage,containment:Y(t.containment)}),e),[]).sort((e,t)=>e.timestamp-t.timestamp),[i.notes.items]),s=a.map(e=>e.acreage).filter(e=>null!==e),r=a.map(e=>e.containment).filter(e=>null!==e),n=s.length>0||r.length>0,l=26,o=78,c=720-o-78,d=300-l-62,m=s.length?Math.max(...s):1,u=Math.max(1,100*Math.ceil(m/100)),p=e=>a.length<=1?o:o+e/(a.length-1)*c,f=e=>l+d-e/u*d,h=e=>l+d-e/100*d,g=a.map((e,t)=>null===e.acreage?null:`${p(t)},${f(e.acreage)}`).filter(Boolean).join(" "),v=a.map((e,t)=>null===e.containment?null:`${p(t)},${h(e.containment)}`).filter(Boolean).join(" "),x=t.React.useMemo(()=>a.length<=5?a.map((e,t)=>t):Array.from(new Set([0,Math.round(.25*(a.length-1)),Math.round(.5*(a.length-1)),Math.round(.75*(a.length-1)),a.length-1])),[a]),b=l+d/2,w=o-56,y=o+c+56;return(0,e.jsx)("div",{className:"progression-modal-backdrop",onClick:e=>{e.target===e.currentTarget&&i.onClose()},children:(0,e.jsxs)("div",{className:"progression-modal",role:"dialog","aria-modal":"true","aria-label":"Fire progression over time",children:[(0,e.jsxs)("div",{className:"progression-modal-header",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{className:"progression-modal-title",children:"FIRE PROGRESSION OVER TIME"}),(0,e.jsxs)("div",{className:"progression-modal-subtitle",children:[i.item.name," incident \xb7 ",ie("Smoke Check Log Notes")]})]}),(0,e.jsx)("button",{className:"progression-modal-close-button",type:"button",onClick:i.onClose,"aria-label":"Close fire progression chart",children:"x"})]}),(0,e.jsxs)("div",{className:"progression-legend-row",children:[(0,e.jsxs)("div",{className:"progression-legend-item",children:[(0,e.jsx)("span",{className:"progression-legend-dot acreage-dot"}),"Acreage (ac)"]}),(0,e.jsxs)("div",{className:"progression-legend-item",children:[(0,e.jsx)("span",{className:"progression-legend-dot containment-dot"}),"Containment (%)"]})]}),!n&&(0,e.jsx)("div",{className:"progression-empty-state",children:"No acreage or containment values were found in the Smoke Check Log Notes."}),n&&(0,e.jsx)("div",{className:"progression-chart-wrap",children:(0,e.jsxs)("svg",{className:"progression-chart-svg",viewBox:"0 0 720 300",role:"img","aria-label":"Line chart showing acreage and containment over time",children:[[0,.25,.5,.75,1].map(t=>{const i=l+d-t*d,a=u*t,s=100*t;return(0,e.jsxs)("g",{children:[(0,e.jsx)("line",{className:"progression-grid-line",x1:o,x2:o+c,y1:i,y2:i}),(0,e.jsx)("text",{className:"progression-axis-text acreage-axis-text",x:o-10,y:i+4,textAnchor:"end",children:K(a)}),(0,e.jsxs)("text",{className:"progression-axis-text containment-axis-text",x:o+c+10,y:i+4,textAnchor:"start",children:[Math.round(s),"%"]})]},t)}),(0,e.jsx)("line",{className:"progression-axis-line",x1:o,x2:o,y1:l,y2:l+d}),(0,e.jsx)("line",{className:"progression-axis-line",x1:o+c,x2:o+c,y1:l,y2:l+d}),(0,e.jsx)("line",{className:"progression-axis-line",x1:o,x2:o+c,y1:l+d,y2:l+d}),g&&(0,e.jsx)("polyline",{className:"progression-line acreage-line",points:g}),v&&(0,e.jsx)("polyline",{className:"progression-line containment-line",points:v}),a.map((t,i)=>{const a=p(i);return(0,e.jsxs)("g",{children:[null!==t.acreage&&(0,e.jsx)("circle",{className:"progression-point acreage-point",cx:a,cy:f(t.acreage),r:3.7}),null!==t.containment&&(0,e.jsx)("circle",{className:"progression-point containment-point",cx:a,cy:h(t.containment),r:3.7})]},`${t.timestamp}-${i}`)}),x.map(t=>{const i=a[t],s=p(t);return(0,e.jsx)("text",{className:"progression-x-label",x:s,y:l+d+24,textAnchor:"middle",children:i.label},`${i.timestamp}-label`)}),(0,e.jsx)("text",{className:"progression-axis-label acreage-axis-label",x:w,y:b,textAnchor:"middle",dy:"0.35em",transform:`rotate(-90 ${w} ${b})`,children:"Acreage"}),(0,e.jsx)("text",{className:"progression-axis-label containment-axis-label",x:y,y:b,textAnchor:"middle",dy:"0.35em",transform:`rotate(90 ${y} ${b})`,children:"Containment"})]})})]})})},Ee=t=>(0,e.jsxs)("div",{className:"exposure-panel fire-details-panel",children:[(0,e.jsxs)("div",{className:"panel-title-row detail-panel-title-row",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{className:"panel-title",children:t.item.name}),(0,e.jsxs)("div",{className:"panel-caption",children:[Ne(t.item)," \xb7 ",ie("Smoke Check Log")]})]}),(0,e.jsx)("button",{className:"clear-filter-button",type:"button",onClick:t.onClear,children:"Clear filter"})]}),(0,e.jsxs)("div",{className:"fire-detail-summary-grid",children:[(0,e.jsx)(Re,{label:"Acreage",value:H(t.item.acreage),variant:"acreage",onClick:t.onOpenProgressionChart}),(0,e.jsx)(Re,{label:"Containment",value:Z(t.item.containment),variant:"containment",onClick:t.onOpenProgressionChart}),(0,e.jsx)(Re,{label:"Nearest Policy",value:`${W(t.item.nearestDistance,2)} mi`}),(0,e.jsx)(Re,{label:"Impacted Policies",value:K(t.item.totalExposure)})]}),(0,e.jsxs)("div",{className:"fire-save-loss-grid",children:[(0,e.jsxs)("div",{className:"fire-detail-summary-card fire-save-loss-card",children:[(0,e.jsx)("div",{className:"mini-stat-label",children:"Total Saves"}),(0,e.jsx)("div",{className:"mini-stat-value",children:K(t.counts.totalSaves)})]}),(0,e.jsxs)("div",{className:"fire-detail-summary-card fire-save-loss-card",children:[(0,e.jsx)("div",{className:"mini-stat-label",children:"Fire Saves"}),(0,e.jsx)("div",{className:"mini-stat-value",children:K(t.counts.fireSaves)})]}),(0,e.jsxs)("div",{className:"fire-detail-summary-card fire-save-loss-card",children:[(0,e.jsx)("div",{className:"mini-stat-label",children:"Smoke Saves"}),(0,e.jsx)("div",{className:"mini-stat-value",children:K(t.counts.smokeSaves)})]}),(0,e.jsxs)("div",{className:"fire-detail-summary-card fire-save-loss-card",children:[(0,e.jsx)("div",{className:"mini-stat-label",children:"Losses"}),(0,e.jsx)("div",{className:"mini-stat-value",children:K(t.counts.losses)})]})]}),(0,e.jsx)("div",{className:"fire-detail-status-row",children:(0,e.jsx)("span",{className:`status-pill ${we(t.item.status)}`,children:t.item.status})}),(0,e.jsxs)("div",{className:"scl-notes-header-row",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{className:"scl-notes-title",children:"SMOKE CHECK LOG NOTES"}),(0,e.jsxs)("div",{className:"panel-caption",children:["Fire progression \xb7 ",ie("Smoke Check Log Notes")]})]}),(0,e.jsx)("div",{className:"distance-total-pill",children:K(t.notes.totalItemCount)})]}),t.notes.message&&(0,e.jsx)("div",{className:"placeholder-copy",children:t.notes.message}),!t.notes.message&&(0,e.jsxs)("div",{className:"scl-notes-table-shell",children:[(0,e.jsxs)("div",{className:"scl-notes-table-header",children:[(0,e.jsx)("div",{children:"Updated Time"}),(0,e.jsx)("div",{children:"Incident Name"}),(0,e.jsx)("div",{children:"Acreage"}),(0,e.jsx)("div",{children:"Containment"}),(0,e.jsx)("div",{children:"Update"}),(0,e.jsx)("div",{children:"Threat Status"})]}),(0,e.jsx)("div",{className:"scl-notes-list",children:t.notes.items.map(i=>(0,e.jsxs)("div",{className:"scl-note-row",children:[(0,e.jsx)("div",{className:"scl-note-cell scl-note-time-cell",children:i.updatedTime||"--"}),(0,e.jsx)("div",{className:"scl-note-cell scl-note-incident-cell",children:i.incidentName||t.item.name||"--"}),(0,e.jsx)("div",{className:"scl-note-cell scl-note-acreage-cell",children:H(i.acreage)}),(0,e.jsx)("div",{className:"scl-note-cell scl-note-containment-cell",children:Z(i.containment)}),(0,e.jsx)("div",{className:"scl-note-cell scl-note-update-cell",children:i.newUpdate||"No update text provided."}),(0,e.jsx)("div",{className:"scl-note-cell scl-note-threat-cell",children:(0,e.jsx)("span",{className:`note-threat-status ${ye(je(i.threatStatus))}`,children:je(i.threatStatus)||"--"})})]},i.id))})]})]}),Ae=t=>(0,e.jsxs)("div",{className:["wildfire-card",t.onClick?"is-clickable":""].join(" "),role:t.onClick?"button":void 0,tabIndex:t.onClick?0:void 0,onClick:()=>{var e;null===(e=t.onClick)||void 0===e||e.call(t,t.item)},onKeyDown:e=>{t.onClick&&("Enter"!==e.key&&" "!==e.key||(e.preventDefault(),t.onClick(t.item)))},children:[(0,e.jsxs)("div",{className:"wildfire-info",children:[(0,e.jsxs)("div",{className:"wildfire-top-row",children:[(0,e.jsx)("div",{className:"wildfire-rank",children:t.index+1}),(0,e.jsxs)("div",{className:"wildfire-name-block",children:[(0,e.jsx)("div",{className:"wildfire-name",children:t.item.name}),(0,e.jsx)("div",{className:"wildfire-location",children:Ne(t.item)})]})]}),(0,e.jsxs)("div",{className:"wildfire-stat-grid",children:[(0,e.jsxs)("div",{className:"wildfire-mini-stat",children:[(0,e.jsx)("div",{className:"mini-stat-label",children:"Acreage"}),(0,e.jsx)("div",{className:"mini-stat-value",children:H(t.item.acreage)})]}),(0,e.jsxs)("div",{className:"wildfire-mini-stat",children:[(0,e.jsx)("div",{className:"mini-stat-label",children:"Containment"}),(0,e.jsx)("div",{className:"mini-stat-value",children:Z(t.item.containment)})]}),(0,e.jsxs)("div",{className:"wildfire-mini-stat",children:[(0,e.jsx)("div",{className:"mini-stat-label",children:"Nearest Policy"}),(0,e.jsxs)("div",{className:"mini-stat-value",children:[W(t.item.nearestDistance,2)," mi"]})]})]}),(0,e.jsxs)("div",{className:"wildfire-footer-row",children:[(0,e.jsx)("span",{className:`status-pill ${we(t.item.status)}`,children:t.item.status}),(0,e.jsx)("span",{className:"scl-record-count",children:t.item.lastUpdate||"Last update --"})]})]}),(0,e.jsx)(Te,{item:t.item,hasDistanceFields:t.hasDistanceFields})]}),Ue=t=>{const i=Q[t.field],a=Boolean(t.searchText.trim()||t.selectedValue);return(0,e.jsxs)("div",{className:"wildfire-filter-panel",children:[(0,e.jsxs)("div",{className:"wildfire-filter-panel-header",children:[(0,e.jsx)("div",{className:"wildfire-filter-panel-title",children:"FILTER OPTIONS"}),(0,e.jsx)("button",{className:"wildfire-filter-minimize-button",type:"button",onClick:t.onMinimize,"aria-label":"Minimize wildfire filter options",title:"Minimize",children:"-"})]}),(0,e.jsxs)("div",{className:"wildfire-filter-controls",children:[(0,e.jsxs)("div",{className:"wildfire-filter-field-wrap",children:[(0,e.jsx)("div",{className:"wildfire-filter-label",children:"Filter By"}),(0,e.jsx)("select",{className:"wildfire-filter-select",value:t.field,onChange:e=>{t.onFieldChange(e.target.value)},children:J.map(t=>(0,e.jsx)("option",{value:t,children:Q[t]},t))})]}),(0,e.jsxs)("div",{className:"wildfire-filter-search-wrap",children:[(0,e.jsx)("div",{className:"wildfire-filter-label",children:"Search Options"}),(0,e.jsx)("input",{className:"wildfire-filter-input",value:t.searchText,placeholder:`Type ${i.toLowerCase()}...`,onChange:e=>{t.onSearchTextChange(e.target.value)}})]}),a&&(0,e.jsx)("button",{className:"wildfire-filter-clear-button",type:"button",onClick:t.onClear,children:"Clear"})]}),(0,e.jsxs)("div",{className:"wildfire-filter-options",children:[0===t.options.length&&(0,e.jsx)("div",{className:"wildfire-filter-empty-option",children:"No options found."}),t.options.map(i=>{const a=i===t.selectedValue;return(0,e.jsx)("button",{className:["wildfire-filter-option",a?"is-selected":""].join(" "),type:"button",onClick:()=>{t.onOptionSelect(i)},children:i},i)})]})]})},Pe=()=>t.css`
  &.exposure-sidebar-widget-root {
    --canvas: #F7F5F0;
    --canvas-soft: #FAF8F2;
    --surface: #FFFFFF;
    --surface-sunken: #EFEDE6;
    --ink: #14110D;
    --ink-soft: #3A3530;
    --muted: #6E6862;
    --muted-soft: #948D86;
    --rule: rgba(20, 17, 13, 0.14);
    --rule-strong: rgba(20, 17, 13, 0.22);
    --accent: #AB2328;
    --accent-deep: #7A1518;
    --accent-soft: #F8E8E8;
    --accent-hover: #C42A2F;
    --orange: #B45309;
    --orange-soft: #FFF2DE;
    --yellow: #8A6A00;
    --yellow-soft: #FFF6C7;
    --green: #3F7A3A;
    --green-soft: #E8F3E7;
    --r-1: 3px;
    --r-2: 6px;
    --r-3: 8px;
    --r-4: 12px;
    --r-full: 999px;

    position: relative;
    z-index: 20;
    isolation: isolate;
    width: 100%;
    max-width: 936px;
    height: auto;
    max-height: none;
    min-height: 0;
    color: var(--ink);
    background: transparent;
    overflow: visible;
    box-sizing: border-box;
    padding: 0 12px 0 14px;
    pointer-events: auto;
    font-family:
      Inter,
      Avenir Next,
      Arial,
      Helvetica,
      sans-serif;
    font-variant-numeric: tabular-nums;
    font-feature-settings: 'tnum' 1;
  }

  &.exposure-sidebar-widget-root.is-progression-modal-open {
    z-index: 2147483000;
    isolation: auto;
    overflow: visible;
  }

  .exposure-sidebar,
  .exposure-sidebar * {
    box-sizing: border-box;
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
    gap: 12px;
    align-items: stretch;
    overflow: visible;
  }

  .exposure-panel {
    width: 100%;
    color: var(--ink);
    background: var(--surface);
    border: 1px solid var(--rule);
    border-radius: var(--r-3);
    box-shadow: none;
  }

  .top-summary-panels-row {
    width: 100%;
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 12px;
    align-items: stretch;
    flex: 0 0 auto;
  }

  .top-summary-panels-row .exposure-panel {
    height: 100%;
  }

  .top-summary-panels-row .ytd-card-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .ytd-panel,
  .impacted-distance-panel {
    padding: 12px;
    min-height: 124px;
    flex: 0 0 auto;
  }

  .panel-title-row {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 12px;
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid var(--rule);
  }

  .panel-title {
    color: var(--ink);
    font-family:
      Inter Tight,
      Inter,
      Avenir Next,
      Arial,
      sans-serif;
    font-size: 13px;
    line-height: 1.2;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .panel-caption {
    margin-top: 5px;
    color: var(--muted);
    font-size: 11px;
    line-height: 1.35;
    font-weight: 500;
    letter-spacing: 0.02em;
  }

  .ytd-card-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 8px;
  }

  .ytd-metric-card,
  .fire-detail-summary-card,
  .wildfire-mini-stat {
    background: var(--canvas-soft);
    border: 1px solid var(--rule);
    border-radius: var(--r-3);
    box-shadow: none;
  }

  .ytd-metric-card {
    min-height: 54px;
    padding: 10px 12px;
  }

  .ytd-metric-card.is-clickable {
    cursor: pointer;
    transition:
      border-color 120ms ease,
      background 120ms ease;
  }

  .ytd-metric-card.is-clickable:hover {
    background: var(--surface-sunken);
    border-color: var(--rule-strong);
  }

  .ytd-metric-label,
  .mini-stat-label,
  .wildfire-filter-label,
  .distance-title,
  .wildfire-filter-panel-title {
    color: var(--muted);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    white-space: nowrap;
  }

  .ytd-metric-value {
    margin-top: 5px;
    color: var(--ink);
    font-family:
      Inter Tight,
      Inter,
      Avenir Next,
      Arial,
      sans-serif;
    font-size: 24px;
    line-height: 1;
    font-weight: 500;
    letter-spacing: -0.02em;
  }

  .impacted-distance-title-row {
    margin-bottom: 10px;
  }

  .distance-total-pill,
  .ongoing-count-pill {
    min-width: 38px;
    height: 26px;
    padding: 0 10px;
    border-radius: var(--r-full);
    background: var(--canvas-soft);
    border: 1px solid var(--rule);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--ink);
    font-size: 12px;
    font-weight: 600;
    flex: 0 0 auto;
    font-variant-numeric: tabular-nums;
  }

  .impacted-distance-chart {
    display: flex;
    flex-direction: column;
    gap: 7px;
  }

  .impacted-distance-row {
    display: grid;
    grid-template-columns: 72px minmax(0, 1fr) 44px;
    gap: 8px;
    align-items: center;
  }

  .impacted-distance-label,
  .distance-label {
    color: var(--muted);
    font-size: 10px;
    font-weight: 600;
    white-space: nowrap;
  }

  .impacted-distance-bar-track,
  .distance-bar-track {
    height: 7px;
    border-radius: var(--r-full);
    background: var(--surface-sunken);
    border: 1px solid rgba(20, 17, 13, 0.1);
    overflow: hidden;
  }

  .impacted-distance-bar-fill,
  .distance-bar-fill {
    height: 100%;
    min-width: 2px;
    border-radius: var(--r-full);
  }

  .impacted-distance-value,
  .distance-value,
  .distance-total {
    color: var(--ink);
    font-size: 11px;
    font-weight: 600;
    text-align: right;
  }

  .save-loss-details-panel {
    flex: 0 0 auto;
    height: 580px;
    max-height: 580px;
    min-height: 0;
    padding: 12px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .fire-details-panel {
    flex: 0 0 auto;
    height: 580px;
    max-height: 580px;
    min-height: 0;
    padding: 12px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .detail-panel-title-row {
    flex: 0 0 auto;
  }

  .clear-filter-button,
  .wildfire-filter-clear-button,
  .active-filter-clear-button,
  .wildfire-filter-minimize-button,
  .wildfire-options-button,
  .progression-modal-close-button {
    border-radius: var(--r-2);
    border: 1px solid var(--rule);
    background: var(--surface);
    color: var(--ink-soft);
    box-shadow: none;
    cursor: pointer;
    font-family: inherit;
    font-weight: 600;
    transition:
      border-color 120ms ease,
      background 120ms ease,
      color 120ms ease;
  }

  .clear-filter-button {
    height: 30px;
    font-size: 11px;
    padding: 0 12px;
    white-space: nowrap;
  }

  .clear-filter-button:hover,
  .wildfire-filter-clear-button:hover,
  .active-filter-clear-button:hover,
  .wildfire-filter-minimize-button:hover,
  .wildfire-options-button:hover,
  .wildfire-options-button.is-active,
  .progression-modal-close-button:hover {
    background: var(--accent-soft);
    border-color: rgba(171, 35, 40, 0.35);
    color: var(--accent-deep);
  }

  .save-loss-list {
    flex: 1 1 auto;
    min-height: 0;
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding-right: 4px;
  }

  .save-loss-list::-webkit-scrollbar,
  .wildfire-list::-webkit-scrollbar,
  .wildfire-filter-options::-webkit-scrollbar,
  .scl-notes-table-shell::-webkit-scrollbar {
    width: 7px;
  }

  .save-loss-list::-webkit-scrollbar-track,
  .wildfire-list::-webkit-scrollbar-track,
  .wildfire-filter-options::-webkit-scrollbar-track,
  .scl-notes-table-shell::-webkit-scrollbar-track {
    background: var(--surface-sunken);
    border-radius: var(--r-full);
  }

  .save-loss-list::-webkit-scrollbar-thumb,
  .wildfire-list::-webkit-scrollbar-thumb,
  .wildfire-filter-options::-webkit-scrollbar-thumb,
  .scl-notes-table-shell::-webkit-scrollbar-thumb {
    background: var(--muted-soft);
    border-radius: var(--r-full);
  }

  .save-loss-row {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 210px;
    gap: 12px;
    padding: 12px;
    border-radius: var(--r-3);
    background: var(--surface);
    border: 1px solid var(--rule);
    box-shadow: none;
  }

  .save-loss-row.is-clickable {
    cursor: pointer;
    transition:
      border-color 120ms ease,
      background 120ms ease;
  }

  .save-loss-row.is-clickable:hover {
    border-color: var(--rule-strong);
    background: var(--canvas-soft);
  }

  .save-loss-main {
    min-width: 0;
  }

  .save-loss-policy {
    color: var(--ink);
    font-size: 14px;
    font-weight: 600;
    line-height: 1.2;
  }

  .save-loss-street,
  .save-loss-location,
  .save-loss-incident,
  .scl-record-count,
  .active-wildfire-filter-text {
    color: var(--muted);
    font-size: 11px;
    font-weight: 500;
  }

  .save-loss-street,
  .save-loss-location,
  .save-loss-incident {
    margin-top: 4px;
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
    border-radius: var(--r-1);
    padding: 4px 8px;
    background: var(--canvas-soft);
    border: 1px solid var(--rule);
    color: var(--ink-soft);
    font-size: 10px;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .fire-detail-summary-grid,
  .fire-save-loss-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 8px;
    margin-bottom: 8px;
  }

  .fire-detail-summary-card {
    padding: 8px 10px;
    min-width: 0;
  }

  .fire-detail-summary-card.is-clickable {
    cursor: pointer;
    transition:
      border-color 120ms ease,
      background 120ms ease;
  }

  .fire-detail-summary-card.is-clickable:hover {
    background: var(--surface-sunken);
    border-color: var(--rule-strong);
  }

  .fire-detail-summary-card.is-acreage:hover {
    border-color: rgba(171, 35, 40, 0.45);
  }

  .fire-detail-summary-card.is-containment:hover {
    border-color: rgba(63, 122, 58, 0.45);
  }

  .fire-save-loss-card {
    background: var(--canvas-soft);
  }

  .mini-stat-value {
    margin-top: 4px;
    color: var(--ink);
    font-size: 12px;
    font-weight: 600;
    white-space: nowrap;
  }

  .fire-detail-status-row {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 10px;
    flex-wrap: wrap;
  }

  .fire-detail-id {
    color: var(--muted);
    font-size: 11px;
    font-weight: 500;
  }

  .scl-notes-header-row {
    flex: 0 0 auto;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 12px;
    padding-top: 10px;
    margin-bottom: 8px;
    border-top: 1px solid var(--rule);
  }

  .scl-notes-title {
    color: var(--ink);
    font-family:
      Inter Tight,
      Inter,
      Avenir Next,
      Arial,
      sans-serif;
    font-size: 13px;
    line-height: 1.2;
    font-weight: 600;
    letter-spacing: 0.08em;
  }

  .scl-notes-table-shell {
    flex: 1 1 auto;
    min-height: 0;
    display: flex;
    flex-direction: column;
    border: 1px solid var(--rule);
    border-radius: var(--r-3);
    overflow-y: auto;
    overflow-x: hidden;
    background: var(--surface);
    scrollbar-gutter: stable;
  }

  .scl-notes-table-header,
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
    padding: 9px 10px;
  }

  .scl-notes-table-header {
    position: sticky;
    top: 0;
    z-index: 2;
    flex: 0 0 auto;
    background: var(--canvas-soft);
    border-bottom: 1px solid var(--rule);
    color: var(--muted);
    font-size: 9px;
    font-weight: 600;
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
    background: var(--surface);
    border-bottom: 1px solid var(--rule);
  }

  .scl-note-row:last-child {
    border-bottom: none;
  }

  .scl-note-cell {
    min-width: 0;
    color: var(--ink-soft);
    font-size: 11px;
    font-weight: 500;
    line-height: 1.35;
  }

  .scl-note-time-cell {
    color: var(--ink);
    font-size: 11px;
    font-weight: 600;
    line-height: 1.25;
    white-space: pre-line;
  }

  .scl-note-incident-cell {
    color: var(--muted);
    text-align: center;
  }

  .scl-note-acreage-cell,
  .scl-note-containment-cell {
    color: var(--ink);
    font-weight: 600;
    white-space: nowrap;
    text-align: center;
  }

  .scl-note-update-cell {
    color: var(--ink-soft);
    font-weight: 500;
    white-space: normal;
    overflow-wrap: anywhere;
  }

  .scl-note-threat-cell {
    display: flex;
    justify-content: center;
    min-width: 0;
    overflow: hidden;
  }

  .note-threat-status,
  .status-pill {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    min-height: 24px;
    padding: 4px 10px;
    border-radius: var(--r-1);
    border: 1px solid currentColor;
    background: var(--canvas-soft);
    color: var(--ink-soft);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    white-space: nowrap;
    box-shadow: none;
    text-shadow: none;
    filter: none;
  }

  .note-threat-status {
    width: 100%;
    min-height: 20px;
    padding: 3px 6px;
    font-size: 7px;
    overflow: hidden;
    text-overflow: clip;
  }

  .status-pill::before {
    content: '';
    width: 7px;
    height: 7px;
    margin-right: 6px;
    border-radius: 2px;
    background: currentColor;
    flex: 0 0 auto;
  }

  .status-response,
  .note-status-response {
    color: var(--accent);
    background: var(--accent-soft);
    border-color: rgba(171, 35, 40, 0.35);
  }

  .status-potential,
  .note-status-potential {
    color: var(--orange);
    background: var(--orange-soft);
    border-color: rgba(180, 83, 9, 0.35);
  }

  .status-no-immediate,
  .note-status-no-immediate {
    color: var(--yellow);
    background: var(--yellow-soft);
    border-color: rgba(138, 106, 0, 0.35);
  }

  .status-monitoring,
  .note-status-monitoring {
    color: var(--muted);
    background: var(--canvas-soft);
    border-color: rgba(110, 104, 98, 0.3);
  }

  .progression-modal-backdrop {
    position: fixed;
    inset: 0;
    z-index: 2147483000;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 110px 22px 22px 50px;
    background: rgba(20, 17, 13, 0.36);
    backdrop-filter: blur(2px);
    pointer-events: auto;
  }

  .progression-modal {
    width: min(700px, calc(100vw - 44px));
    max-height: calc(100vh - 44px);
    overflow: hidden;
    border-radius: var(--r-4);
    background: var(--surface);
    border: 1px solid var(--rule-strong);
    box-shadow: none;
    color: var(--ink);
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
    border-bottom: 1px solid var(--rule);
  }

  .progression-modal-title {
    color: var(--ink);
    font-family:
      Inter Tight,
      Inter,
      Avenir Next,
      Arial,
      sans-serif;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0.08em;
  }

  .progression-modal-subtitle {
    margin-top: 5px;
    color: var(--muted);
    font-size: 11px;
    font-weight: 500;
  }

  .progression-modal-close-button {
    width: 30px;
    height: 30px;
    font-size: 20px;
    line-height: 1;
    font-weight: 500;
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
    color: var(--ink-soft);
    font-size: 11px;
    font-weight: 600;
  }

  .progression-legend-dot {
    width: 8px;
    height: 8px;
    border-radius: var(--r-1);
  }

  .acreage-dot,
  .acreage-point {
    background: var(--accent);
    fill: var(--accent);
  }

  .containment-dot,
  .containment-point {
    background: var(--green);
    fill: var(--green);
  }

  .progression-chart-wrap {
    flex: 1 1 auto;
    min-height: 0;
    padding: 6px 18px 16px 18px;
  }

  .progression-chart-svg {
    width: 100%;
    height: auto;
    display: block;
  }

  .progression-grid-line {
    stroke: rgba(20, 17, 13, 0.14);
    stroke-width: 1;
    stroke-dasharray: 3 4;
  }

  .progression-axis-line {
    stroke: rgba(20, 17, 13, 0.32);
    stroke-width: 1;
  }

  .progression-axis-text,
  .progression-x-label {
    fill: var(--muted);
    font-size: 9px;
    font-weight: 500;
  }

  .acreage-axis-text {
    fill: var(--accent);
  }

  .containment-axis-text {
    fill: var(--green);
  }

  .acreage-axis-label,
  .containment-axis-label {
    fill: var(--ink);
  }

  .progression-axis-label {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.05em;
  }

  .progression-line {
    fill: none;
    stroke-width: 2.5;
    stroke-linecap: round;
    stroke-linejoin: round;
    filter: none;
  }

  .acreage-line {
    stroke: var(--accent);
  }

  .containment-line {
    stroke: var(--green);
  }

  .progression-point {
    stroke: var(--surface);
    stroke-width: 1.5;
  }

  .progression-empty-state,
  .distance-not-configured,
  .placeholder-copy,
  .wildfire-filter-empty-option,
  .wildfire-filter-empty-results {
    color: var(--muted);
    font-size: 12px;
    line-height: 1.4;
  }

  .progression-empty-state,
  .distance-not-configured {
    margin: 18px;
    padding: 16px;
    border-radius: var(--r-3);
    border: 1px dashed var(--rule-strong);
    background: var(--canvas-soft);
  }

  .placeholder-copy {
    margin-top: 8px;
  }

  .ongoing-wildfires-panel {
    flex: 0 0 auto;
    height: 380px;
    max-height: 380px;
    min-height: 0;
    padding: 12px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .ongoing-title-row {
    margin-bottom: 10px;
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
    height: 26px;
    padding: 0;
  }

  .wildfire-options-dots {
    display: block;
    color: currentColor;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.08em;
    line-height: 1;
    transform: translateY(-1px);
  }

  .ongoing-count-total {
    margin-left: 3px;
    color: var(--muted);
    font-size: 10px;
    font-weight: 600;
  }

  .wildfire-filter-panel {
    flex: 0 0 auto;
    max-height: 155px;
    min-height: 0;
    margin-bottom: 8px;
    padding: 10px;
    border-radius: var(--r-3);
    background: var(--canvas-soft);
    border: 1px solid var(--rule);
    overflow: hidden;
  }

  .wildfire-filter-panel-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    margin-bottom: 8px;
  }

  .wildfire-filter-minimize-button {
    width: 22px;
    height: 22px;
    font-size: 15px;
    line-height: 1;
  }

  .wildfire-filter-controls {
    display: grid;
    grid-template-columns: 150px minmax(0, 1fr) auto;
    gap: 8px;
    align-items: end;
  }

  .wildfire-filter-label {
    margin-bottom: 5px;
  }

  .wildfire-filter-select,
  .wildfire-filter-input {
    width: 100%;
    height: 32px;
    border-radius: var(--r-2);
    border: 1px solid var(--rule);
    background: var(--surface);
    color: var(--ink);
    font-size: 12px;
    font-weight: 500;
    padding: 0 9px;
    outline: none;
  }

  .wildfire-filter-input::placeholder {
    color: var(--muted-soft);
  }

  .wildfire-filter-select:focus,
  .wildfire-filter-input:focus {
    border-color: rgba(171, 35, 40, 0.45);
  }

  .wildfire-filter-clear-button {
    height: 32px;
    font-size: 10px;
    padding: 0 10px;
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
    border-radius: var(--r-1);
    border: 1px solid var(--rule);
    background: var(--surface);
    color: var(--ink-soft);
    font-size: 10px;
    font-weight: 600;
    padding: 5px 9px;
    cursor: pointer;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .wildfire-filter-option:hover,
  .wildfire-filter-option.is-selected {
    border-color: rgba(171, 35, 40, 0.4);
    background: var(--accent-soft);
    color: var(--accent-deep);
  }

  .active-wildfire-filter-row {
    flex: 0 0 auto;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding: 8px 10px;
    border-radius: var(--r-3);
    background: var(--canvas-soft);
    border: 1px solid var(--rule);
  }

  .active-wildfire-filter-text {
    min-width: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .active-wildfire-filter-text span {
    color: var(--ink);
  }

  .active-filter-clear-button {
    height: 24px;
    font-size: 10px;
    padding: 0 9px;
    flex: 0 0 auto;
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
    gap: 12px;
    padding: 10px;
    border-radius: var(--r-3);
    background: var(--surface);
    border: 1px solid var(--rule);
    box-shadow: none;
  }

  .wildfire-card.is-clickable {
    cursor: pointer;
    transition:
      border-color 120ms ease,
      background 120ms ease;
  }

  .wildfire-card.is-clickable:hover {
    border-color: var(--rule-strong);
    background: var(--canvas-soft);
  }

  .wildfire-card.is-clickable:focus {
    outline: none;
    border-color: rgba(171, 35, 40, 0.45);
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
    width: 24px;
    height: 24px;
    border-radius: var(--r-2);
    background: var(--canvas-soft);
    border: 1px solid var(--rule);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--muted);
    font-size: 11px;
    font-weight: 600;
    flex: 0 0 auto;
  }

  .wildfire-name-block {
    min-width: 0;
  }

  .wildfire-name {
    color: var(--ink);
    font-size: 14px;
    font-weight: 600;
    line-height: 1.2;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .wildfire-location {
    margin-top: 5px;
    color: var(--muted);
    font-size: 11px;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .wildfire-stat-grid {
    margin-top: 8px;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 6px;
  }

  .wildfire-mini-stat {
    padding: 6px 8px;
    min-width: 0;
  }

  .wildfire-footer-row {
    margin-top: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
  }

  .distance-bars {
    min-width: 0;
  }

  .distance-title-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    margin-bottom: 7px;
  }

  .distance-row {
    display: grid;
    grid-template-columns: 44px minmax(80px, 1fr) 38px;
    gap: 7px;
    align-items: center;
    margin-top: 5px;
  }

  .distance-fill-half-mile,
  .impacted-distance-panel .distance-fill-half-mile,
  .impacted-distance-bar-fill.distance-fill-half-mile,
  .distance-bar-fill.distance-fill-half-mile {
    background: var(--accent);
  }

  .distance-fill-three-mile,
  .impacted-distance-panel .distance-fill-three-mile,
  .impacted-distance-bar-fill.distance-fill-three-mile,
  .distance-bar-fill.distance-fill-three-mile {
    background: var(--orange);
  }

  .distance-fill-five-mile,
  .impacted-distance-panel .distance-fill-five-mile,
  .impacted-distance-bar-fill.distance-fill-five-mile,
  .distance-bar-fill.distance-fill-five-mile {
    background: var(--green);
  }

  .list-footer-note {
    margin-top: 8px;
    color: var(--muted);
    font-size: 10px;
    font-weight: 500;
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      scroll-behavior: auto !important;
      transition-duration: 0.01ms !important;
    }
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
      border-radius: var(--r-3);
      margin-bottom: 7px;
      border: 1px solid var(--rule);
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
`,_e=r=>{var n;const{config:k}=r,[S,N]=t.React.useState(null),[C,I]=t.React.useState(null),[z,M]=t.React.useState(null),[R,F]=t.React.useState(null),[L,q]=t.React.useState(null),[J,W]=t.React.useState(null),[H,Y]=t.React.useState(null),[Z,te]=t.React.useState(null),[ae,pe]=t.React.useState(null),[fe,we]=t.React.useState(null),[ye,je]=t.React.useState(l),[ke,Ne]=t.React.useState(l),[Ce,Re]=t.React.useState(o),[Te,_e]=t.React.useState(null),[Oe,Be]=t.React.useState(c),[Ge,Ve]=t.React.useState(d),[qe,Je]=t.React.useState(null),[Qe,Ke]=t.React.useState(null),[We,He]=t.React.useState(m),[Ye,Ze]=t.React.useState(!1),[Xe,et]=t.React.useState("status"),[tt,it]=t.React.useState(""),[at,st]=t.React.useState(""),[rt,nt]=t.React.useState(!1),lt=t.React.useRef(null),ot=t.React.useCallback(e=>"totalSaves"===e?C:"fireSaves"===e?z:"smokeSaves"===e?R:"losses"===e?L:null,[C,z,R,L]),ct=t.React.useCallback((e,t)=>a(void 0,void 0,void 0,function*(){const i=ot(e);if(!i)return;const a=yield de(i);a&&(a.visible=t)}),[ot]),dt=t.React.useCallback(e=>a(void 0,void 0,void 0,function*(){if(!lt.current){const e={};yield Promise.all(u.map(t=>a(void 0,void 0,void 0,function*(){const i=ot(t),a=yield de(i);a&&(e[t]=a.visible)}))),lt.current=e}yield Promise.all(u.map(t=>a(void 0,void 0,void 0,function*(){yield ct(t,t===e)})))}),[ot,ct]),mt=t.React.useCallback(()=>a(void 0,void 0,void 0,function*(){const e=lt.current;lt.current=null,e&&(yield Promise.all(u.map(t=>a(void 0,void 0,void 0,function*(){const i=e[t];void 0!==i&&(yield ct(t,i))}))))}),[ct]),ut=t.React.useCallback(()=>a(void 0,void 0,void 0,function*(){const e=null==S?void 0:S.view;if(e)try{yield e.goTo({center:s,scale:24e6},{duration:700})}catch(e){console.error("Error zooming to CONUS extent:",e)}}),[S]),pt=t.React.useCallback(()=>a(void 0,void 0,void 0,function*(){var e;const t=(null===(e=null==S?void 0:S.view)||void 0===e?void 0:e.extent)||null;if(!J||!t)return null;try{const e=yield de(J);if(!e)return null;const a=ve(e);if(!a.threatStatus||!a.chloetaIncidentId)return console.warn(`SCL layer must include ${D} and ${T} to filter active incident saves.`),null;const s=e.createQuery();s.where=re([ne(e,a.threatStatus),(i=a.threatStatus,`${i} = '${se("Response Recommended")}'`)]),s.geometry=t,s.spatialRelationship="intersects",s.returnGeometry=!1,s.outFields=xe(e,[a.chloetaIncidentId]),s.num=4e3;const r=yield e.queryFeatures(s),n=new Set;return r.features.forEach(e=>{const t=e.attributes||{},i=ce(t[a.chloetaIncidentId],"");i&&n.add(i)}),Array.from(n)}catch(e){return console.error("Error loading active Response Recommended incident IDs:",e),null}var i}),[S,J]),ft=t.React.useCallback(()=>a(void 0,void 0,void 0,function*(){var e;const t=(null===(e=null==S?void 0:S.view)||void 0===e?void 0:e.extent)||null;if(!t)return void je(l);const i=yield pt(),[a,s,r,n]=yield Promise.all([De("Total Saves",C,t,i),De("Fire Saves",z,t,i),De("Smoke Saves",R,t,i),De("Losses",L,t)]);je({totalSaves:a,fireSaves:s,smokeSaves:r,losses:n})}),[S,C,z,R,L,pt]),ht=t.React.useCallback(e=>a(void 0,void 0,void 0,function*(){if(!(null==e?void 0:e.chloetaIncidentId))return void Ne(l);const[t,i,a,s]=yield Promise.all([ze("Selected Fire Total Saves",C,e.chloetaIncidentId),ze("Selected Fire Fire Saves",z,e.chloetaIncidentId),ze("Selected Fire Smoke Saves",R,e.chloetaIncidentId),ze("Selected Fire Losses",L,e.chloetaIncidentId)]);Ne({totalSaves:t,fireSaves:i,smokeSaves:a,losses:s})}),[C,z,R,L]),gt=t.React.useCallback(()=>a(void 0,void 0,void 0,function*(){var e;const t=(null===(e=null==S?void 0:S.view)||void 0===e?void 0:e.extent)||null;if(!t)return void Re(o);const[i,a,s]=yield Promise.all([De("0-0.5 mi Policies",Z,t),De("0.5-3 mi Policies",ae,t),De("3-5 mi Policies",fe,t)]);Re({halfMile:i,threeMile:a,fiveMile:s})}),[S,Z,ae,fe]),vt=t.React.useCallback(e=>a(void 0,void 0,void 0,function*(){var t,i;const a=void 0!==e?e:Te;if(!a)return;const s=p[a],r=ot(a),n=(null===(t=null==S?void 0:S.view)||void 0===t?void 0:t.extent)||null,l=(e=>"totalSaves"===e||"fireSaves"===e||"smokeSaves"===e)(a);if(Be({activeCard:a,title:`${s.toUpperCase()} DETAILS`,items:[],totalItemCount:0,message:"Loading records..."}),r)if(n)try{const e=yield de(r);if(!e)return void Be({activeCard:a,title:`${s.toUpperCase()} DETAILS`,items:[],totalItemCount:0,message:`Unable to load the ${s} layer.`});const t=(e=>({policyId:ue(e,f),street:ue(e,h),city:ue(e,g),state:ue(e,v),zipCode:ue(e,x),saveType:ue(e,b),incidentName:ue(e,w),chloetaIncidentId:ue(e,y)}))(e),o=[me(r,e)];if(l){const i=yield pt();if(null===i)return void Be({activeCard:a,title:`${s.toUpperCase()} DETAILS`,items:[],totalItemCount:0,message:"Unable to determine active Response Recommended incidents from the SCL layer."});if(!t.chloetaIncidentId)return void Be({activeCard:a,title:`${s.toUpperCase()} DETAILS`,items:[],totalItemCount:0,message:`Missing required field on ${s} layer: ${y}`});o.push(he(e,t.chloetaIncidentId,i))}const c=e.createQuery();c.where=re(o),c.geometry=n,c.spatialRelationship="intersects",c.returnGeometry=!0,(null===(i=null==S?void 0:S.view)||void 0===i?void 0:i.spatialReference)&&(c.outSpatialReference=S.view.spatialReference),c.outFields=xe(e,[t.policyId,t.street,t.city,t.state,t.zipCode,t.saveType,t.incidentName,t.chloetaIncidentId]),c.num=4e3;const d=(yield e.queryFeatures(c)).features.map((i,r)=>{var n;const l=i.attributes||{},o=e.objectIdField?String(null!==(n=l[e.objectIdField])&&void 0!==n?n:r):String(r);return{id:`${a}-${o}`,policyId:t.policyId?ce(l[t.policyId],""):"",street:t.street?ce(l[t.street],""):"",city:t.city?ce(l[t.city],""):"",state:t.state?ce(l[t.state],""):"",zipCode:t.zipCode?ce(l[t.zipCode],""):"",saveType:t.saveType?ce(l[t.saveType],s):s,incidentName:t.incidentName?ce(l[t.incidentName],""):"",geometry:i.geometry||null}});d.sort((e,t)=>{const i=e.incidentName.localeCompare(t.incidentName);return 0!==i?i:e.policyId.localeCompare(t.policyId)}),Be({activeCard:a,title:`${s.toUpperCase()} DETAILS`,items:d,totalItemCount:d.length,message:d.length?"":`No ${s.toLowerCase()} records found in the current map extent.`})}catch(e){console.error(`Error loading ${s} details:`,e),Be({activeCard:a,title:`${s.toUpperCase()} DETAILS`,items:[],totalItemCount:0,message:`Unable to load ${s.toLowerCase()} records.`})}else Be({activeCard:a,title:`${s.toUpperCase()} DETAILS`,items:[],totalItemCount:0,message:"Waiting for map extent."});else Be({activeCard:a,title:`${s.toUpperCase()} DETAILS`,items:[],totalItemCount:0,message:`Select the ${s} layer in settings.`})}),[Te,ot,S,pt]),xt=t.React.useCallback(e=>a(void 0,void 0,void 0,function*(){if(e)if(e.chloetaIncidentId)if(H){He({items:[],totalItemCount:0,message:"Loading notes..."});try{const t=yield de(H);if(!t)return void He({items:[],totalItemCount:0,message:"Unable to load the Smoke Check Log Notes layer."});const i=(e=>({updatedTime:ue(e,$),incidentName:ue(e,E),acreage:ue(e,A),containment:ue(e,U),threatStatus:ue(e,P),newUpdate:ue(e,_),chloetaIncidentId:ue(e,O)}))(t);if(!i.chloetaIncidentId)return void He({items:[],totalItemCount:0,message:`Missing required notes field: ${O}`});const a=t.createQuery();a.where=re([t.definitionExpression,ge(t,i.chloetaIncidentId,e.chloetaIncidentId)]),a.returnGeometry=!1,a.outFields=xe(t,[i.updatedTime,i.incidentName,i.acreage,i.containment,i.threatStatus,i.newUpdate,i.chloetaIncidentId]),a.num=4e3,i.updatedTime&&(a.orderByFields=[`${i.updatedTime} DESC`]);const s=(yield t.queryFeatures(a)).features.map((e,a)=>{var s;const r=e.attributes||{},n=i.updatedTime?r[i.updatedTime]:null;return{id:`note-${t.objectIdField?String(null!==(s=r[t.objectIdField])&&void 0!==s?s:a):String(a)}`,updatedTime:i.updatedTime?ee(n):"--",updatedTimestamp:X(n),incidentName:i.incidentName?ce(r[i.incidentName],""):"",acreage:i.acreage?oe(r[i.acreage]):null,containment:i.containment?oe(r[i.containment]):null,threatStatus:i.threatStatus?ce(r[i.threatStatus],""):"",newUpdate:i.newUpdate?ce(r[i.newUpdate],""):""}});He({items:s,totalItemCount:s.length,message:s.length?"":"No smoke check log notes found for this incident."})}catch(e){console.error("Error loading SCL notes:",e),He({items:[],totalItemCount:0,message:"Unable to load smoke check log notes."})}}else He({items:[],totalItemCount:0,message:"Select the Smoke Check Log Notes layer in settings."});else He({items:[],totalItemCount:0,message:"This wildfire does not have a chloeta_incident_id."});else He(m)}),[H]),bt=t.React.useCallback(e=>a(void 0,void 0,void 0,function*(){const t=null==S?void 0:S.view,i=e.geometry;if(t&&i)try{let e=i;if("point"===i.type){const a="number"==typeof t.zoom?t.zoom:10;e={target:i,zoom:Math.max(a,15)}}else{const t=i.extent;t&&(e=t.expand(1.5))}yield t.goTo(e,{duration:700})}catch(e){console.error("Error zooming to save/loss record:",e)}}),[S]),wt=t.React.useCallback(e=>{Je(null),He(m),Ne(l),nt(!1),_e(e);ot(e)&&dt(e),vt(e)},[dt,ot,vt]),yt=t.React.useCallback(()=>{_e(null),Be(c),mt(),ut()},[mt,ut]),jt=t.React.useCallback(()=>a(void 0,void 0,void 0,function*(){var e,t;const i=(null===(e=null==S?void 0:S.view)||void 0===e?void 0:e.extent)||null;var a;if(J)if(i)try{const e=yield de(J);if(!e)return void Ve(Object.assign(Object.assign({},d),{message:"Unable to load the Smoke Check Log layer."}));const s=ve(e);if(!s.incidentName)return void Ve(Object.assign(Object.assign({},d),{message:`Missing required SCL field: ${j}`}));if(!s.threatStatus)return void Ve(Object.assign(Object.assign({},d),{message:`Missing required SCL field: ${D}`}));const r=Boolean(s.halfMile||s.threeMile||s.fiveMile),n=e.createQuery();n.where=re([ne(e,s.threatStatus),(a=s.threatStatus,`${a} IN (${B.map(e=>`'${se(e)}'`).join(", ")})`)]),n.geometry=i,n.spatialRelationship="intersects",n.returnGeometry=!0,(null===(t=null==S?void 0:S.view)||void 0===t?void 0:t.spatialReference)&&(n.outSpatialReference=S.view.spatialReference),n.outFields=xe(e,[s.incidentName,s.county,s.state,s.zipCode,s.acreage,s.containment,s.threatStatus,s.halfMile,s.threeMile,s.fiveMile,s.nearestDistance,s.lastUpdate,s.chloetaIncidentId]),n.num=4e3;const l=yield e.queryFeatures(n),o=new Map;l.features.forEach((t,i)=>{var a;const r=t.attributes||{},n=ce(r[s.incidentName],"");if(!n)return;const l=ce(r[s.threatStatus],"Monitoring");if(!(e=>G.includes(e.trim().toLowerCase()))(l))return;const c=s.chloetaIncidentId?ce(r[s.chloetaIncidentId],""):"",d=e.objectIdField?String(null!==(a=r[e.objectIdField])&&void 0!==a?a:i):String(i),m=c||n.toLowerCase()||`unknown-${d}`,u=s.county?ce(r[s.county],""):"",p=s.state?ce(r[s.state],""):"",f=s.zipCode?ce(r[s.zipCode],""):"",h=s.acreage?oe(r[s.acreage]):null,g=s.containment?oe(r[s.containment]):null,v=s.nearestDistance?oe(r[s.nearestDistance]):null,x=s.lastUpdate?ce(r[s.lastUpdate],""):"",b=t.geometry||null,w={halfMile:s.halfMile?le(r[s.halfMile]):0,threeMile:s.threeMile?le(r[s.threeMile]):0,fiveMile:s.fiveMile?le(r[s.fiveMile]):0},y=o.get(m);if(y){if(y.featureCount+=1,!y.chloetaIncidentId&&c&&(y.chloetaIncidentId=c),!y.county&&u&&(y.county=u),!y.state&&p&&(y.state=p),!y.zipCode&&f&&(y.zipCode=f),f&&!y.zipCodes.includes(f)&&y.zipCodes.push(f),be(l)<be(y.status)&&(y.status=l),null!==h&&(y.acreage=null===y.acreage?h:Math.max(y.acreage,h)),null!==g&&(y.containment=null===y.containment?g:Math.max(y.containment,g)),null!==v){const e=null===y.nearestDistance||v<y.nearestDistance;y.nearestDistance=null===y.nearestDistance?v:Math.min(y.nearestDistance,v),e&&b&&(y.geometry=b)}else!y.geometry&&b&&(y.geometry=b);y.lastUpdate=((e,t)=>{const i=String(e||"").trim(),a=String(t||"").trim();if(!a)return i;if(!i)return a;const s=Date.parse(i),r=Date.parse(a);return Number.isFinite(s)&&Number.isFinite(r)&&r>s?a:i})(y.lastUpdate,x),V.forEach(e=>{y.bands[e.key]+=w[e.key]}),y.totalExposure=Se(y.bands)}else o.set(m,{id:m,name:n,county:u,state:p,zipCode:f,zipCodes:f?[f]:[],status:l,acreage:h,containment:g,nearestDistance:v,lastUpdate:x,chloetaIncidentId:c,totalExposure:Se(w),featureCount:1,geometry:b,bands:Object.assign({},w)})});const c=Array.from(o.values()).map(e=>(r||(e.totalExposure=e.featureCount),e.zipCodes=e.zipCodes.sort((e,t)=>e.localeCompare(t)),e));c.sort((e,t)=>{var i,a;const s=be(e.status)-be(t.status);if(0!==s)return s;if(t.totalExposure!==e.totalExposure)return t.totalExposure-e.totalExposure;return(null!==(i=e.nearestDistance)&&void 0!==i?i:Number.POSITIVE_INFINITY)-(null!==(a=t.nearestDistance)&&void 0!==a?a:Number.POSITIVE_INFINITY)}),Ve({items:c,totalItemCount:c.length,message:c.length?"":"No ongoing wildfires found in the current map extent.",hasDistanceFields:r})}catch(e){console.error("Error loading ongoing wildfires:",e),Ve(Object.assign(Object.assign({},d),{message:"Unable to load ongoing wildfires."}))}else Ve(Object.assign(Object.assign({},d),{message:"Waiting for map extent."}));else Ve(d)}),[S,J]),kt=t.React.useCallback(e=>a(void 0,void 0,void 0,function*(){const t=null==S?void 0:S.view,i=e.geometry;if(Ke(e),t&&i)try{yield t.goTo({target:i,scale:5e4},{duration:700})}catch(e){console.error("Error zooming to ongoing wildfire:",e)}}),[S]),St=t.React.useCallback(e=>{_e(null),Be(c),Je(e),Ke(e),Ne(l),nt(!1),xt(e),ht(e),kt(e)},[xt,ht,kt]),Nt=t.React.useCallback(()=>{Je(null),He(m),Ne(l),Ke(null),it(""),st(""),Ze(!1),nt(!1),ut()},[ut]),Ct=t.React.useCallback(()=>{ft(),gt(),Te?vt(Te):qe?(xt(qe),ht(qe)):jt()},[Te,qe,ft,gt,jt,vt,xt,ht]);t.React.useEffect(()=>{Ct()},[Ct]),t.React.useEffect(()=>{const e=null==S?void 0:S.view;if(!e)return;let t;const i=()=>{t&&window.clearTimeout(t),t=window.setTimeout(()=>{Ct()},350)},a=e.watch("stationary",e=>{e&&i()}),s=e.watch("extent",()=>{e.stationary&&i()});return i(),()=>{null==a||a.remove(),null==s||s.remove(),t&&window.clearTimeout(t)}},[S,Ct]),t.React.useEffect(()=>{const e=window.setInterval(()=>{Ct()},6e4);return()=>{window.clearInterval(e)}},[Ct]);const It=Boolean(at||tt.trim()),Dt=t.React.useMemo(()=>{const e=new Set;Ge.items.forEach(t=>{Ie(t,Xe).forEach(t=>{const i=t.trim();i&&e.add(i)})});const t=tt.trim().toLowerCase();return Array.from(e).sort((e,t)=>e.localeCompare(t)).filter(e=>!t||e.toLowerCase().includes(t))},[Ge.items,Xe,tt]),zt=t.React.useMemo(()=>{const e=at.trim().toLowerCase(),t=tt.trim().toLowerCase();return e||t?Ge.items.filter(i=>{const a=Ie(i,Xe).map(e=>e.trim().toLowerCase());return e?a.some(t=>t===e):a.some(e=>e.includes(t))}):Ge.items},[Ge.items,Xe,tt,at]),Mt=t.React.useCallback(e=>{et(e),it(""),st("")},[]),Rt=t.React.useCallback(e=>{it(e),st("")},[]),Ft=t.React.useCallback(e=>{st(e),it(e),Ze(!1)},[]),Lt=t.React.useCallback(()=>{it(""),st(""),Ke(null),Ze(!1),ut()},[ut]);return(0,e.jsxs)("div",{className:["exposure-sidebar-widget-root",rt?"is-progression-modal-open":""].join(" "),css:Pe(),children:[(null===(n=r.useMapWidgetIds)||void 0===n?void 0:n[0])&&(0,e.jsx)(i.JimuMapViewComponent,{useMapWidgetId:r.useMapWidgetIds[0],onActiveViewChange:e=>{N(e||null)}}),k.totalSavesUseDataSource&&(0,e.jsx)(t.DataSourceComponent,{useDataSource:k.totalSavesUseDataSource,widgetId:r.id,onDataSourceCreated:e=>{I(e)}}),k.fireSavesUseDataSource&&(0,e.jsx)(t.DataSourceComponent,{useDataSource:k.fireSavesUseDataSource,widgetId:r.id,onDataSourceCreated:e=>{M(e)}}),k.smokeSavesUseDataSource&&(0,e.jsx)(t.DataSourceComponent,{useDataSource:k.smokeSavesUseDataSource,widgetId:r.id,onDataSourceCreated:e=>{F(e)}}),k.lossesUseDataSource&&(0,e.jsx)(t.DataSourceComponent,{useDataSource:k.lossesUseDataSource,widgetId:r.id,onDataSourceCreated:e=>{q(e)}}),k.smokeCheckLogUseDataSource&&(0,e.jsx)(t.DataSourceComponent,{useDataSource:k.smokeCheckLogUseDataSource,widgetId:r.id,onDataSourceCreated:e=>{W(e)}}),k.smokeCheckLogNotesUseDataSource&&(0,e.jsx)(t.DataSourceComponent,{useDataSource:k.smokeCheckLogNotesUseDataSource,widgetId:r.id,onDataSourceCreated:e=>{Y(e)}}),k.distanceHalfMilePoliciesUseDataSource&&(0,e.jsx)(t.DataSourceComponent,{useDataSource:k.distanceHalfMilePoliciesUseDataSource,widgetId:r.id,onDataSourceCreated:e=>{te(e)}}),k.distanceThreeMilePoliciesUseDataSource&&(0,e.jsx)(t.DataSourceComponent,{useDataSource:k.distanceThreeMilePoliciesUseDataSource,widgetId:r.id,onDataSourceCreated:e=>{pe(e)}}),k.distanceFiveMilePoliciesUseDataSource&&(0,e.jsx)(t.DataSourceComponent,{useDataSource:k.distanceFiveMilePoliciesUseDataSource,widgetId:r.id,onDataSourceCreated:e=>{we(e)}}),(0,e.jsx)("div",{className:"exposure-sidebar",children:Te?(0,e.jsx)(Fe,{details:Oe,onClear:yt,onItemClick:bt}):qe?(0,e.jsx)(Ee,{item:qe,notes:We,counts:ke,onClear:Nt,onOpenProgressionChart:()=>{nt(!0)}}):(0,e.jsxs)(t.React.Fragment,{children:[(0,e.jsxs)("div",{className:"top-summary-panels-row",children:[(0,e.jsxs)("div",{className:"exposure-panel ytd-panel",children:[(0,e.jsx)("div",{className:"panel-title-row",children:(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{className:"panel-title",children:"ACTIVE INCIDENTS SAVES & LOSSES"}),(0,e.jsx)("div",{className:"panel-caption",children:ie("Saves/Losses layers")})]})}),(0,e.jsxs)("div",{className:"ytd-card-grid",children:[(0,e.jsx)(Me,{label:"Total Saves",value:ye.totalSaves,onClick:()=>wt("totalSaves")}),(0,e.jsx)(Me,{label:"Fire Saves",value:ye.fireSaves,onClick:()=>wt("fireSaves")}),(0,e.jsx)(Me,{label:"Smoke Saves",value:ye.smokeSaves,onClick:()=>wt("smokeSaves")}),(0,e.jsx)(Me,{label:"Losses",value:ye.losses,onClick:()=>wt("losses")})]})]}),(0,e.jsx)(Le,{counts:Ce})]}),(0,e.jsxs)("div",{className:"exposure-panel ongoing-wildfires-panel",children:[(0,e.jsxs)("div",{className:"panel-title-row ongoing-title-row",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{className:"panel-title",children:"ONGOING WILDFIRES"}),(0,e.jsx)("div",{className:"panel-caption",children:ie("Smoke Check Log")})]}),(0,e.jsxs)("div",{className:"ongoing-actions",children:[(0,e.jsx)("button",{className:["wildfire-options-button",Ye?"is-active":""].join(" "),type:"button","aria-label":Ye?"Minimize filter options":"Open filter options",title:Ye?"Minimize filter options":"Open filter options",onClick:()=>{Ze(e=>!e)},children:(0,e.jsx)("span",{className:"wildfire-options-dots",children:"..."})}),(0,e.jsxs)("div",{className:"ongoing-count-pill",children:[K(zt.length),It&&(0,e.jsxs)("span",{className:"ongoing-count-total",children:["/",K(Ge.totalItemCount)]})]})]})]}),!Ge.message&&Ye&&(0,e.jsx)(Ue,{field:Xe,searchText:tt,selectedValue:at,options:Dt,onFieldChange:Mt,onSearchTextChange:Rt,onOptionSelect:Ft,onClear:Lt,onMinimize:()=>{Ze(!1)}}),!Ge.message&&(It||Qe)&&!Ye&&(0,e.jsxs)("div",{className:"active-wildfire-filter-row",children:[(0,e.jsx)("div",{className:"active-wildfire-filter-text",children:It?(0,e.jsxs)(t.React.Fragment,{children:["Filtered by ",Q[Xe],":"," ",(0,e.jsx)("span",{children:at||tt})]}):(0,e.jsxs)(t.React.Fragment,{children:["Focused on:"," ",(0,e.jsx)("span",{children:(null==Qe?void 0:Qe.name)||"Selected wildfire"})]})}),(0,e.jsx)("button",{className:"active-filter-clear-button",type:"button",onClick:Lt,children:"Clear"})]}),Ge.message&&(0,e.jsx)("div",{className:"placeholder-copy",children:Ge.message}),!Ge.message&&0===zt.length&&(0,e.jsx)("div",{className:"wildfire-filter-empty-results",children:"No wildfires match the current filter."}),!Ge.message&&zt.length>0&&(0,e.jsx)("div",{className:"wildfire-list",children:zt.map((t,i)=>(0,e.jsx)(Ae,{item:t,index:i,hasDistanceFields:Ge.hasDistanceFields,onClick:St},t.id))})]})]})}),qe&&rt&&(0,e.jsx)($e,{item:qe,notes:We,onClose:()=>{nt(!1)}})]})};function Oe(e){r.p=e}})(),n})())}}});