System.register(["jimu-core/emotion","jimu-core"],function(e,t){var r={},i={};return{setters:[function(e){r.jsx=e.jsx,r.jsxs=e.jsxs},function(e){i.DataSourceComponent=e.DataSourceComponent,i.DataSourceStatus=e.DataSourceStatus,i.React=e.React,i.css=e.css}],execute:function(){e((()=>{var e={9244(e){"use strict";e.exports=i},7386(e){"use strict";e.exports=r}},t={};function a(r){var i=t[r];if(void 0!==i)return i.exports;var n=t[r]={exports:{}};return e[r](n,n.exports,a),n.exports}a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.p="";var n={};return a.p=window.jimuConfig.baseUrl,(()=>{"use strict";a.r(n),a.d(n,{__set_webpack_public_path__:()=>y,default:()=>S});var e=a(7386),t=a(9244);const r={canvas:"#F7F5F0",canvasSoft:"#FAF8F2",surface:"#FFFFFF",surfaceSunken:"#EFEDE6",ink:"#14110D",inkSoft:"#3A3530",muted:"#6E6862",mutedSoft:"#948D86",accent:"#AB2328",accentDeep:"#7A1518",accentSoft:"#F8E8E8",accentHover:"#C42A2F",rule:"rgba(20, 17, 13, 0.12)",ruleStrong:"rgba(20, 17, 13, 0.18)",success:"#2E8B57",warning:"#B75E18"},i={event:"event",eventId:"eventid"},s={wildfireResponse:"wildfire response",dedicatedService:"dedicated service"},o={where:"1=1",outFields:["*"]};function c(e){return null==e?"":String(e).trim()}function l(e,t){if(!e)return;if(void 0!==e[t])return e[t];const r=Object.keys(e).find(e=>e.toLowerCase()===t.toLowerCase());return r?e[r]:void 0}function d(e){const t=Array.from(new Set(e.map(e=>String(e||"").trim()).filter(Boolean)));if(!t.length)return"1=0";return function(e,t){const r=[];for(let i=0;i<e.length;i+=t)r.push(e.slice(i,i+t));return r}(t,900).map(e=>{const t=e.map(e=>`'${e.replace(/'/g,"''")}'`).join(",");return`${i.eventId} IN (${t})`}).join(" OR ")}function u(e){let t=0,r=0;const a=new Set;return e.forEach(e=>{const n=function(e){var t;const r=null===(t=null==e?void 0:e.getData)||void 0===t?void 0:t.call(e);return r&&"object"==typeof r?r:{}}(e),o=c(l(n,i.eventId));o&&a.add(o);const d=c(l(n,i.event)).toLowerCase();d!==s.wildfireResponse?d===s.dedicatedService&&(r+=1):t+=1}),{wfrCount:t,dsCount:r,activeTotal:t+r,eventIds:Array.from(a)}}function m(e){return 0===e?"No current assignments found":"Completed on current assignments."}function p(e){const t=e=>String(e).padStart(2,"0");return`${t(e.getUTCHours())}:${t(e.getUTCMinutes())}:${t(e.getUTCSeconds())} UTC`}function f(e=!1){return{count:0,isLoading:!1,hasError:!1,isConfigured:e}}function v(e,t,r,i,a){return r.isConfigured?r.hasError?{id:e,label:t,value:"\u2014 Assessments",detail:"Survey layer failed to load"}:r.isLoading?{id:e,label:t,value:"Loading...",detail:"Filtering survey assessments"}:{id:e,label:t,value:(n=r.count,`${n} ${1===n?"Assessment":"Assessments"}`),detail:m(i)}:{id:e,label:t,value:"\u2014 Assessments",detail:a};var n}function g(e,t,r,i,a){if(r)return[{id:"active",label:"Active Resources",value:"\u2014 Engines",detail:"RST layer failed to load"},{id:"wfr-assessments",label:"Wildfire Response",value:"\u2014 Assessments",detail:"RST layer failed to load"},{id:"ds-assessments",label:"Dedicated Service",value:"\u2014 Assessments",detail:"RST layer failed to load"}];if(t)return[{id:"active",label:"Active Resources",value:"Loading...",detail:"Querying RST layer"},{id:"wfr-assessments",label:"Wildfire Response",value:"Loading...",detail:"Waiting for RST event IDs"},{id:"ds-assessments",label:"Dedicated Service",value:"Loading...",detail:"Waiting for RST event IDs"}];const n=e.eventIds.length;return[{id:"active",label:"Active Resources",value:(s=e.activeTotal,`${s} ${1===s?"Engine":"Engines"}`),detail:`${e.wfrCount} WFR \xb7 ${e.dsCount} DS`},v("wfr-assessments","Wildfire Response",i,n,"Select WFR survey layer in settings"),v("ds-assessments","Dedicated Service",a,n,"Select DS survey layer in settings")];var s}function x(r){const{useDataSource:i,widgetId:a,query:n,children:s}=r;return i?(0,e.jsx)(t.DataSourceComponent,{useDataSource:i,widgetId:a,query:n,queryAll:!0,children:(e,r)=>s(function(e,r,i){var a;const n=null==r?void 0:r.status,s=!e||n===t.DataSourceStatus.Loading||n===t.DataSourceStatus.Unloaded,o=n===t.DataSourceStatus.LoadError;return{count:(s||o?[]:(null===(a=null==e?void 0:e.getRecords)||void 0===a?void 0:a.call(e))||[]).length,isLoading:s,hasError:o,isConfigured:i}}(e,r,!0))}):(0,e.jsx)(t.React.Fragment,{children:s(f(!1))})}function h(t){return(0,e.jsxs)("div",{className:"source-cite",children:[(0,e.jsx)("span",{children:t.source}),(0,e.jsx)("span",{className:"cite-divider",children:"\xb7"}),(0,e.jsx)("span",{className:"cite__ts num",children:t.timestamp})]})}function w(t){const{metric:r}=t,i=function(e){const t=e.match(/^(.+?)\s+(Engines?|Assessments?)$/);return t?{valueText:t[1],unitText:t[2]}:{valueText:e,unitText:""}}(r.value);return(0,e.jsxs)("div",{className:`metric-card metric-card--${r.id}`,children:[(0,e.jsxs)("div",{className:"metric-top-row",children:[(0,e.jsx)("span",{className:"metric-signal"}),(0,e.jsx)("span",{className:"metric-label",children:r.label})]}),(0,e.jsxs)("div",{className:"metric-value-row",children:[(0,e.jsx)("span",{className:"metric-value num",children:i.valueText}),i.unitText&&(0,e.jsx)("span",{className:"metric-unit",children:i.unitText})]}),(0,e.jsx)("div",{className:"metric-detail",children:r.detail})]})}function b(t){const{metrics:r,timestamp:i}=t;return(0,e.jsxs)("section",{className:"operations-hero","aria-label":"Operations summary",children:[(0,e.jsx)("div",{className:"hero-accent-line"}),(0,e.jsxs)("div",{className:"hero-main",children:[(0,e.jsxs)("div",{className:"hero-copy",children:[(0,e.jsx)("div",{className:"hero-kicker",children:"Resource Operations"}),(0,e.jsx)("h2",{className:"hero-title",children:"Operations"}),(0,e.jsx)("p",{className:"hero-subtitle",children:"Current assignment load and completed assessment activity across active response operations."})]}),(0,e.jsxs)("div",{className:"hero-metric-panel",children:[(0,e.jsxs)("div",{className:"metric-panel-header",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{className:"meta-label",children:"Current Operations Signals"}),(0,e.jsx)("div",{className:"meta-subtitle",children:"Counts update from the connected RST and survey layers."})]}),(0,e.jsx)(h,{source:"RST + Survey Layers",timestamp:i})]}),(0,e.jsx)("div",{className:"hero-metrics",children:r.map(t=>(0,e.jsx)(w,{metric:t},t.id))})]})]})]})}function S(i){var a,n,s;const c=null===(a=i.useDataSources)||void 0===a?void 0:a[0],l=null===(n=i.useDataSources)||void 0===n?void 0:n[1],m=null===(s=i.useDataSources)||void 0===s?void 0:s[2],[v,h]=t.React.useState(()=>p(new Date));t.React.useEffect(()=>{const e=window.setInterval(()=>{h(p(new Date))},1e3);return()=>{window.clearInterval(e)}},[]);return(0,e.jsx)("div",{className:"operations-bar-widget-root",css:t.css`
    &.operations-bar-widget-root {
      --canvas: ${r.canvas};
      --canvas-soft: ${r.canvasSoft};
      --surface: ${r.surface};
      --surface-sunken: ${r.surfaceSunken};
      --ink: ${r.ink};
      --ink-soft: ${r.inkSoft};
      --muted: ${r.muted};
      --muted-soft: ${r.mutedSoft};
      --accent: ${r.accent};
      --accent-deep: ${r.accentDeep};
      --accent-soft: ${r.accentSoft};
      --accent-hover: ${r.accentHover};
      --success: ${r.success};
      --warning: ${r.warning};
      --rule: ${r.rule};
      --rule-strong: ${r.ruleStrong};

      width: 100%;
      min-height: 156px;
      color: var(--ink);
      background: var(--canvas);
      box-sizing: border-box;
      padding: 14px;
      overflow: hidden;
      font-family:
        Inter,
        Avenir Next,
        Arial,
        Helvetica,
        sans-serif;
      font-variant-numeric: tabular-nums;
      font-feature-settings: 'tnum';
    }

    &.operations-bar-widget-root,
    &.operations-bar-widget-root * {
      box-sizing: border-box;
    }

    .operations-hero {
      position: relative;
      width: 100%;
      min-height: 128px;
      overflow: hidden;
      border-radius: 8px;
      border: 1px solid var(--rule);
      background:
        linear-gradient(
          180deg,
          var(--surface) 0%,
          var(--canvas-soft) 100%
        );
    }

    .hero-accent-line {
      position: absolute;
      inset: 0 auto 0 0;
      width: 5px;
      background: var(--accent);
    }

    .hero-main {
      min-height: 128px;
      display: grid;
      grid-template-columns: minmax(240px, 0.72fr) minmax(620px, 1.28fr);
      align-items: end;
      gap: 24px;
      padding: 22px 24px 20px 28px;
    }

    .hero-copy {
      min-width: 0;
    }

    .hero-kicker {
      margin-bottom: 8px;
      color: var(--muted);
      font-size: 11px;
      line-height: 1;
      font-weight: 600;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }

    .hero-title {
      margin: 0;
      color: var(--ink);
      font-family:
        Inter Tight,
        Inter,
        Avenir Next,
        Arial,
        Helvetica,
        sans-serif;
      font-size: clamp(38px, 4.4vw, 56px);
      line-height: 0.95;
      font-weight: 500;
      letter-spacing: -0.055em;
      text-transform: uppercase;
    }

    .hero-subtitle {
      max-width: 520px;
      margin: 10px 0 0 0;
      color: var(--ink-soft);
      font-size: 14px;
      line-height: 1.35;
      font-weight: 500;
    }

    .hero-metric-panel {
      min-width: 0;
      padding: 14px 0 0 24px;
      border-left: 1px solid var(--rule);
    }

    .metric-panel-header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 16px;
      margin-bottom: 12px;
    }

    .meta-label {
      color: var(--muted);
      font-size: 11px;
      line-height: 1;
      font-weight: 600;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }

    .meta-subtitle {
      margin-top: 6px;
      color: var(--ink-soft);
      font-size: 12px;
      line-height: 1.25;
      font-weight: 500;
    }

    .source-cite {
      display: flex;
      align-items: center;
      gap: 6px;
      color: var(--muted);
      font-size: 11px;
      line-height: 1.2;
      font-weight: 500;
      letter-spacing: 0.02em;
      white-space: nowrap;
    }

    .cite-divider {
      color: var(--muted-soft);
    }

    .cite__ts {
      font-family:
        JetBrains Mono,
        SFMono-Regular,
        Consolas,
        Liberation Mono,
        monospace;
      font-size: 11px;
      font-weight: 400;
      color: var(--muted);
    }

    .hero-metrics {
      display: grid;
      grid-template-columns: repeat(3, minmax(180px, 1fr));
      gap: 8px;
    }

    .metric-card {
      position: relative;
      min-height: 76px;
      padding: 10px 11px;
      border-radius: 8px;
      border: 1px solid var(--rule);
      background: rgba(255, 255, 255, 0.56);
      color: var(--ink);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition:
        background 120ms ease,
        border-color 120ms ease;
    }

    .metric-card:hover {
      background: var(--surface);
      border-color: var(--rule-strong);
    }

    .metric-card--active {
      --metric-accent: var(--ink-soft);
    }

    .metric-card--wfr-assessments {
      --metric-accent: var(--accent);
    }

    .metric-card--ds-assessments {
      --metric-accent: var(--success);
    }

    .metric-top-row {
      display: flex;
      align-items: center;
      gap: 7px;
      min-width: 0;
    }

    .metric-signal {
      width: 7px;
      height: 7px;
      border-radius: 999px;
      background: var(--metric-accent);
      flex: 0 0 auto;
    }

    .metric-label {
      min-width: 0;
      color: var(--muted);
      font-size: 10px;
      line-height: 1.15;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .metric-value-row {
      margin-top: 8px;
      display: flex;
      align-items: baseline;
      gap: 7px;
    }

    .metric-value {
      color: var(--ink);
      font-family:
        Inter Tight,
        Inter,
        Avenir Next,
        Arial,
        Helvetica,
        sans-serif;
      font-size: 28px;
      line-height: 0.95;
      font-weight: 500;
      letter-spacing: -0.045em;
    }

    .metric-unit {
      color: var(--ink-soft);
      font-size: 12px;
      line-height: 1;
      font-weight: 600;
    }

    .metric-detail {
      margin-top: 8px;
      color: var(--ink-soft);
      font-size: 11px;
      line-height: 1.25;
      font-weight: 500;
      overflow-wrap: anywhere;
    }

    .num {
      font-variant-numeric: tabular-nums;
      font-feature-settings: 'tnum';
    }

    @media (max-width: 1280px) {
      .hero-main {
        grid-template-columns: 1fr;
        align-items: start;
        gap: 18px;
      }

      .hero-metric-panel {
        width: 100%;
        padding: 16px 0 0 0;
        border-left: none;
        border-top: 1px solid var(--rule);
      }

      .hero-metrics {
        grid-template-columns: repeat(3, minmax(150px, 1fr));
      }
    }

    @media (max-width: 860px) {
      &.operations-bar-widget-root {
        padding: 10px;
        min-height: 150px;
      }

      .operations-hero {
        min-height: 130px;
      }

      .hero-main {
        min-height: 130px;
        gap: 14px;
        padding: 18px 16px 18px 22px;
      }

      .hero-title {
        font-size: 34px;
      }

      .hero-subtitle {
        font-size: 13px;
      }

      .metric-panel-header {
        flex-direction: column;
        gap: 8px;
      }

      .source-cite {
        white-space: normal;
      }

      .hero-metrics {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .metric-card {
        min-height: 76px;
      }
    }

    @media (max-width: 420px) {
      .hero-title {
        font-size: 30px;
      }

      .hero-metrics {
        grid-template-columns: 1fr;
      }

      .metric-value {
        font-size: 26px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      &.operations-bar-widget-root *,
      &.operations-bar-widget-root *::before,
      &.operations-bar-widget-root *::after {
        transition-duration: 0.01ms !important;
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
      }
    }
  `,"data-widget-id":i.id,children:c?(0,e.jsx)(t.DataSourceComponent,{useDataSource:c,widgetId:i.id,query:o,queryAll:!0,children:(r,a)=>{var n;const s=null==a?void 0:a.status,o=!r||s===t.DataSourceStatus.Loading||s===t.DataSourceStatus.Unloaded,c=s===t.DataSourceStatus.LoadError,p=u(o||c?[]:(null===(n=null==r?void 0:r.getRecords)||void 0===n?void 0:n.call(r))||[]);if(o||c){const t=g(p,o,c,f(Boolean(l)),f(Boolean(m)));return(0,e.jsx)(b,{metrics:t,timestamp:v})}const h={where:d(p.eventIds),outFields:["*"]};return(0,e.jsx)(x,{useDataSource:l,widgetId:i.id,query:h,children:t=>(0,e.jsx)(x,{useDataSource:m,widgetId:i.id,query:h,children:r=>{const i=g(p,!1,!1,t,r);return(0,e.jsx)(b,{metrics:i,timestamp:v})}})})}}):(0,e.jsx)(b,{metrics:[{id:"active",label:"Active Resources",value:"\u2014 Engines",detail:"Select an RST feature layer in settings"},{id:"wfr-assessments",label:"Wildfire Response",value:"\u2014 Assessments",detail:"Select an RST feature layer in settings"},{id:"ds-assessments",label:"Dedicated Service",value:"\u2014 Assessments",detail:"Select an RST feature layer in settings"}],timestamp:v})})}function y(e){a.p=e}})(),n})())}}});