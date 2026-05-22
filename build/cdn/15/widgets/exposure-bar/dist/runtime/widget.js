System.register(["jimu-core/emotion","jimu-core","jimu-arcgis"],function(e,t){var r={},n={},i={};return{setters:[function(e){r.jsx=e.jsx,r.jsxs=e.jsxs},function(e){n.DataSourceManager=e.DataSourceManager,n.React=e.React,n.css=e.css},function(e){i.JimuMapViewComponent=e.JimuMapViewComponent}],execute:function(){e((()=>{var e={2686(e){"use strict";e.exports=i},9244(e){"use strict";e.exports=n},7386(e){"use strict";e.exports=r}},t={};function a(r){var n=t[r];if(void 0!==n)return n.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,a),i.exports}a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.p="";var o={};return a.p=window.jimuConfig.baseUrl,(()=>{"use strict";a.r(o),a.d(o,{__set_webpack_public_path__:()=>W,default:()=>J});var e=a(7386),t=a(9244),r=a(2686),n=function(e,t,r,n){return new(r||(r=Promise))(function(i,a){function o(e){try{s(n.next(e))}catch(e){a(e)}}function c(e){try{s(n.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r(function(e){e(t)})).then(o,c)}s((n=n.apply(e,t||[])).next())})};const i="#F7F5F0",c="#FAF8F2",s="#FFFFFF",u="#EFEDE6",l="#14110D",d="#3A3530",p="#6E6862",m="#948D86",f="#AB2328",h="#7A1518",x="#F8E8E8",g="#C42A2F",v="rgba(20, 17, 13, 0.12)",y="rgba(20, 17, 13, 0.18)",w="#B75E18",b="#9A7A12",S="threat_status",j="FireDiscoveryDateTime",$="IncidentTypeCategory",N="smokeCheckLogDataSourceId",C="nifcIncidentDataSourceId",I=[{id:"threateningProperties",label:"Threatening Properties",sourceKey:N,getWhereCandidates:()=>[`${S} = 'Response Recommended'`]},{id:"potentialThreat",label:"Potential Threat",sourceKey:N,getWhereCandidates:()=>[`${S} = 'Potential Threat'`]},{id:"noImmediateThreat",label:"No Immediate Threat",sourceKey:N,getWhereCandidates:()=>[`${S} = 'No Immediate Threat'`]},{id:"newStarts",label:"New Starts (<48 Hours)",sourceKey:C,getWhereCandidates:()=>{const e=function(e){const t=e.getUTCFullYear(),r=String(e.getUTCMonth()+1).padStart(2,"0"),n=String(e.getUTCDate()).padStart(2,"0"),i=String(e.getUTCHours()).padStart(2,"0"),a=String(e.getUTCMinutes()).padStart(2,"0"),o=String(e.getUTCSeconds()).padStart(2,"0");return`${t}-${r}-${n} ${i}:${a}:${o}`}(new Date(Date.now()-1728e5));return[`${$} = 'WF' AND ${j} >= TIMESTAMP '${e}'`,`${$} = 'WF' AND ${j} >= DATE '${e}'`,`${j} >= TIMESTAMP '${e}'`,`${j} >= DATE '${e}'`]}}],T={threateningProperties:null,potentialThreat:null,noImmediateThreat:null,newStarts:null};function F(e){const t=e=>String(e).padStart(2,"0");return`${t(e.getUTCHours())}:${t(e.getUTCMinutes())}:${t(e.getUTCSeconds())} UTC`}function k(e){return e?"function"==typeof e.asMutable?e.asMutable({deep:!0}):[...e]:[]}function D(e,t,r){const n=function(e,t){if(e)return e[t]}(t,r),i=function(e,t){if(t)return k(e).find(e=>e.dataSourceId===t)}(e,n);if(i)return i;const a=k(e);return r===N?a[0]:r===C?a[1]:void 0}function M(e){return 1===e?"Fire":"Fires"}function R(e,t,r){return n(this,void 0,void 0,function*(){const i=yield function(e){return n(this,void 0,void 0,function*(){const t=e.layer||("function"==typeof e.getLayer?e.getLayer():null);if(t)return"function"==typeof t.load&&(yield t.load()),t;if("function"==typeof e.createJSAPILayerByDataSource){const t=yield e.createJSAPILayerByDataSource();if(t&&"function"==typeof t.queryFeatureCount)return"function"==typeof t.load&&(yield t.load()),t}return null})}(e);if(!i||"function"!=typeof i.queryFeatureCount)return null;const a="function"==typeof i.createQuery?i.createQuery():{};a.where=r,a.geometry=t,a.spatialRelationship="intersects",a.returnGeometry=!1;const o=yield i.queryFeatureCount(a);return"number"==typeof o?o:0})}function A(e,t,r){return n(this,void 0,void 0,function*(){const n="function"==typeof t.toJSON?t.toJSON():t,i={where:r,geometry:n,spatialRel:"esriSpatialRelIntersects",returnGeometry:!1,disableClientQuery:!0};return function(e){return"number"==typeof e?e:"number"==typeof(null==e?void 0:e.count)?e.count:0}(yield e.queryCount(i))})}function E(e,r,i){return n(this,void 0,void 0,function*(){if(!e||!r)return null;const a=yield function(e){return n(this,void 0,void 0,function*(){const r=t.DataSourceManager.getInstance(),n=e.dataSourceId;let i=r.getDataSource(n);return i||(i=yield r.createDataSourceByUseDataSource(e)),i?("function"==typeof i.ready&&(yield i.ready()),i):null})}(e);if(!a)return null;let o=null;for(const e of i){try{const t=yield R(a,r,e);if("number"==typeof t)return t}catch(t){o=t,console.warn(`FeatureLayer queryFeatureCount failed for where clause: ${e}`,t)}try{return yield A(a,r,e)}catch(t){o=t,console.warn(`DataSource queryCount failed for where clause: ${e}`,t)}}if(o)throw o;return null})}function P(t){return(0,e.jsxs)("div",{className:"source-cite",children:[(0,e.jsx)("span",{children:t.source}),(0,e.jsx)("span",{className:"cite-divider",children:"\xb7"}),(0,e.jsx)("span",{className:"cite__ts num",children:t.timestamp})]})}function z(t){const{metric:r}=t;return(0,e.jsxs)("div",{className:`metric-card metric-card--${r.id}`,children:[(0,e.jsxs)("div",{className:"metric-top-row",children:[(0,e.jsx)("span",{className:"metric-signal"}),(0,e.jsx)("span",{className:"metric-label",children:r.label})]}),(0,e.jsxs)("div",{className:"metric-value-row",children:[(0,e.jsx)("span",{className:"metric-value num",children:r.value}),(0,e.jsx)("span",{className:"metric-unit",children:r.unit})]})]})}function _(t){return(0,e.jsxs)("section",{className:"exposure-hero",children:[(0,e.jsx)("div",{className:"hero-accent-line"}),(0,e.jsxs)("div",{className:"hero-main",children:[(0,e.jsxs)("div",{className:"hero-copy",children:[(0,e.jsx)("div",{className:"hero-kicker",children:"Portfolio Exposure Intelligence"}),(0,e.jsx)("h1",{className:"hero-title",children:"Exposure"}),(0,e.jsx)("p",{className:"hero-subtitle",children:"Current wildfire proximity signals within the active map extent."})]}),(0,e.jsxs)("div",{className:"hero-metric-panel",children:[(0,e.jsxs)("div",{className:"metric-panel-header",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{className:"meta-label",children:"Current Fire Signals"}),(0,e.jsx)("div",{className:"meta-subtitle",children:"Counts update from the connected map extent."})]}),(0,e.jsx)(P,{source:"SCL + NIFC IRWIN",timestamp:t.timestamp})]}),(0,e.jsx)("div",{className:"hero-metrics",children:t.metrics.map(t=>(0,e.jsx)(z,{metric:t},t.id))})]})]})]})}const U=()=>t.css`
  &.exposure-bar-widget-root {
    --canvas: ${i};
    --canvas-soft: ${c};
    --surface: ${s};
    --surface-sunken: ${u};
    --ink: ${l};
    --ink-soft: ${d};
    --muted: ${p};
    --muted-soft: ${m};
    --accent: ${f};
    --accent-deep: ${h};
    --accent-soft: ${x};
    --accent-hover: ${g};
    --warning: ${w};
    --caution: ${b};
    --rule: ${v};
    --rule-strong: ${y};

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

  &.exposure-bar-widget-root,
  &.exposure-bar-widget-root * {
    box-sizing: border-box;
  }

  .exposure-hero {
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
    grid-template-columns: repeat(4, minmax(132px, 1fr));
    gap: 8px;
  }

  .metric-card {
    position: relative;
    min-height: 64px;
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

  .metric-card--threateningProperties {
    --metric-accent: var(--accent);
  }

  .metric-card--potentialThreat {
    --metric-accent: var(--warning);
  }

  .metric-card--noImmediateThreat {
    --metric-accent: var(--caution);
  }

  .metric-card--newStarts {
    --metric-accent: var(--ink-soft);
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
      grid-template-columns: repeat(4, minmax(130px, 1fr));
    }
  }

  @media (max-width: 860px) {
    &.exposure-bar-widget-root {
      padding: 10px;
      min-height: 150px;
    }

    .exposure-hero {
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
      min-height: 66px;
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
    &.exposure-bar-widget-root *,
    &.exposure-bar-widget-root *::before,
    &.exposure-bar-widget-root *::after {
      transition-duration: 0.01ms !important;
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
    }
  }
`,J=i=>{var a,o;const[c,s]=t.React.useState(null),[u,l]=t.React.useState(T),[d,p]=t.React.useState(!1),[m,f]=t.React.useState(()=>F(new Date)),h=t.React.useRef([]),x=t.React.useRef(0),g=t.React.useRef(""),v=t.React.useCallback(()=>{h.current.forEach(e=>{e.remove()}),h.current=[]},[]),y=t.React.useCallback(e=>{if(v(),!e)return void s(null);const t=e.id;g.current=t;("function"==typeof e.whenJimuMapViewLoaded?e.whenJimuMapViewLoaded():Promise.resolve()).then(()=>{if(g.current!==t)return;const r=e.view;if(!r)return void s(null);r.extent&&s(r.extent.clone());const n=r.watch("stationary",e=>{e&&r.extent&&s(r.extent.clone())});h.current=[n]}).catch(e=>{console.error("Failed to load JimuMapView:",e),s(null)})},[v]);t.React.useEffect(()=>{const e=window.setInterval(()=>{f(F(new Date))},1e3);return()=>{window.clearInterval(e)}},[]),t.React.useEffect(()=>()=>{v()},[v]);const w=c?[c.xmin,c.ymin,c.xmax,c.ymax,null===(a=c.spatialReference)||void 0===a?void 0:a.wkid].join("|"):"";t.React.useEffect(()=>{if(!c)return l(T),void p(!1);const e=x.current+1;x.current=e;let t=!1;return n(void 0,void 0,void 0,function*(){p(!0);const r=yield Promise.all(I.map(e=>n(void 0,void 0,void 0,function*(){try{const t=D(i.useDataSources,i.config,e.sourceKey),r=yield E(t,c,e.getWhereCandidates());return{metricId:e.id,count:r}}catch(t){return console.error(`Exposure Bar count query failed for ${e.label}:`,t),{metricId:e.id,count:null}}})));if(t||e!==x.current)return;const a=Object.assign({},T);r.forEach(e=>{a[e.metricId]=e.count}),l(a),p(!1)}),()=>{t=!0}},[w,i.config,i.useDataSources]);const b=function(e,t){return I.map(r=>{const n=e[r.id];return{id:r.id,label:r.label,value:t&&null===n?"...":(i=n,null===i||Number.isNaN(i)?"--":new Intl.NumberFormat("en-US").format(i)),unit:M(n)};var i})}(u,d);return(0,e.jsxs)("div",{className:"exposure-bar-widget-root",css:U(),"data-widget-id":i.id,children:[(null===(o=i.useMapWidgetIds)||void 0===o?void 0:o[0])&&(0,e.jsx)(r.JimuMapViewComponent,{useMapWidgetId:i.useMapWidgetIds[0],onActiveViewChange:y}),(0,e.jsx)(_,{metrics:b,timestamp:m})]})};function W(e){a.p=e}})(),o})())}}});