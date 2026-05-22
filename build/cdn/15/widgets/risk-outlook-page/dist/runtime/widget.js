System.register(["jimu-core/emotion","jimu-core"],function(e,t){var i={},a={};return{setters:[function(e){i.jsx=e.jsx,i.jsxs=e.jsxs},function(e){a.React=e.React,a.css=e.css}],execute:function(){e((()=>{var e={9244(e){"use strict";e.exports=a},7386(e){"use strict";e.exports=i}},t={};function o(i){var a=t[i];if(void 0!==a)return a.exports;var l=t[i]={exports:{}};return e[i](l,l.exports,o),l.exports}o.d=(e,t)=>{for(var i in t)o.o(t,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="";var l={};return o.p=window.jimuConfig.baseUrl,(()=>{"use strict";o.r(l),o.d(l,{__set_webpack_public_path__:()=>N,default:()=>j});var e=o(7386),t=o(9244);const i="#F7F5F0",a="#FAF8F2",r="#FFFFFF",s="#EFEDE6",n="#14110D",d="#3A3530",c="#6E6862",p="#948D86",u="#AB2328",x="#7A1518",m="#F8E8E8",h="#C42A2F",g="rgba(20, 17, 13, 0.12)",f="rgba(20, 17, 13, 0.18)",v=[{key:"threeDay",title:"3-Day Outlook",eyebrow:"Near term",window:"0-72 hr",detail:"Pertinent risk outlook details for the next 3 days will display here."},{key:"sevenDay",title:"7-Day Outlook",eyebrow:"Weekly",window:"1 week",detail:"Pertinent risk outlook details for the next 7 days will display here."},{key:"fourteenDay",title:"14-Day Outlook",eyebrow:"Extended",window:"2 weeks",detail:"Pertinent risk outlook details for the next 14 days will display here."},{key:"thirtyDay",title:"30-Day Outlook",eyebrow:"Monthly",window:"30 days",detail:"Pertinent risk outlook details for the next 30 days will display here."}],k=[{level:"Extreme",className:"risk-extreme",zipCodes:"(Zip)",assets:"(#)",tiv:"($)"},{level:"Very High",className:"risk-very-high",zipCodes:"(Zip)",assets:"(#)",tiv:"($)"},{level:"High",className:"risk-high",zipCodes:"(Zip)",assets:"(#)",tiv:"($)"},{level:"Moderate",className:"risk-moderate",zipCodes:"(Zip)",assets:"(#)",tiv:"($)"},{level:"Low",className:"risk-low",zipCodes:"(Zip)",assets:"(#)",tiv:"($)"}],b=[{value:"",label:"All States"},{value:"AL",label:"Alabama"},{value:"AZ",label:"Arizona"},{value:"CA",label:"California"},{value:"CO",label:"Colorado"},{value:"FL",label:"Florida"},{value:"GA",label:"Georgia"},{value:"ID",label:"Idaho"},{value:"MT",label:"Montana"},{value:"NM",label:"New Mexico"},{value:"NV",label:"Nevada"},{value:"OK",label:"Oklahoma"},{value:"OR",label:"Oregon"},{value:"TX",label:"Texas"},{value:"UT",label:"Utah"},{value:"WA",label:"Washington"},{value:"WY",label:"Wyoming"}],w=t=>(0,e.jsxs)("div",{className:"source-cite",children:[(0,e.jsx)("span",{children:t.source}),(0,e.jsx)("span",{className:"cite-divider",children:"\xb7"}),(0,e.jsx)("span",{className:"cite__ts",children:t.timestamp||"--:--:-- UTC"})]}),y=()=>t.css`
  &.risk-outlook-widget-root {
    --canvas: ${i};
    --canvas-soft: ${a};
    --surface: ${r};
    --surface-sunken: ${s};
    --ink: ${n};
    --ink-soft: ${d};
    --muted: ${c};
    --muted-soft: ${p};
    --accent: ${u};
    --accent-deep: ${x};
    --accent-soft: ${m};
    --accent-hover: ${h};
    --rule: ${g};
    --rule-strong: ${f};

    width: 100%;
    height: 100%;
    min-height: 360px;
    color: var(--ink);
    background: var(--canvas);
    overflow: auto;
    box-sizing: border-box;
    padding: 14px;
    font-family:
      Inter,
      Avenir Next,
      Arial,
      Helvetica,
      sans-serif;
    font-variant-numeric: tabular-nums;
    font-feature-settings: 'tnum';
  }

  &.risk-outlook-widget-root,
  &.risk-outlook-widget-root * {
    box-sizing: border-box;
  }

  .risk-outlook-main-panel {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .risk-panel {
    width: 100%;
    background: var(--surface);
    border: 1px solid var(--rule);
    border-radius: 8px;
    color: var(--ink);
    overflow: hidden;
  }

  .outlook-panel {
    flex: 0 0 auto;
  }

  .state-panel {
    flex: 0 0 auto;
  }

  .panel-heading {
    min-height: 68px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 16px;
    padding: 18px 20px 14px 20px;
    border-bottom: 1px solid var(--rule);
  }

  .state-heading {
    align-items: center;
  }

  .panel-kicker {
    margin-bottom: 5px;
    color: var(--muted);
    font-size: 11px;
    line-height: 1.1;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .panel-title {
    margin: 0;
    color: var(--ink);
    font-family:
      Inter Tight,
      Inter,
      Avenir Next,
      Arial,
      Helvetica,
      sans-serif;
    font-size: 24px;
    line-height: 1;
    font-weight: 500;
    letter-spacing: -0.035em;
  }

  .source-cite {
    display: flex;
    align-items: center;
    justify-content: flex-end;
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
    font-variant-numeric: tabular-nums;
    font-feature-settings: 'tnum';
  }

  .outlook-list {
    padding: 0 20px 10px 20px;
  }

  .outlook-item {
    border-bottom: 1px solid var(--rule);
  }

  .outlook-item:last-child {
    border-bottom: none;
  }

  .outlook-button {
    width: 100%;
    min-height: 58px;
    border: none;
    outline: none;
    background: transparent;
    color: var(--ink);
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    cursor: pointer;
    font-family:
      Inter,
      Avenir Next,
      Arial,
      Helvetica,
      sans-serif;
    text-align: left;
    transition:
      color 120ms ease,
      background 120ms ease;
  }

  .outlook-button:hover {
    color: var(--accent);
  }

  .outlook-button:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: -2px;
  }

  .outlook-main {
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 3px;
  }

  .outlook-eyebrow {
    color: var(--muted);
    font-size: 11px;
    line-height: 1.1;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .outlook-title {
    color: currentColor;
    font-family:
      Inter Tight,
      Inter,
      Avenir Next,
      Arial,
      Helvetica,
      sans-serif;
    font-size: 22px;
    line-height: 1;
    font-weight: 500;
    letter-spacing: -0.035em;
  }

  .outlook-meta {
    display: flex;
    align-items: center;
    gap: 10px;
    flex: 0 0 auto;
  }

  .outlook-window {
    min-width: 74px;
    height: 28px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--rule);
    border-radius: 6px;
    color: var(--muted);
    background: var(--canvas-soft);
    font-size: 12px;
    line-height: 1;
    font-weight: 600;
    font-variant-numeric: tabular-nums;
    font-feature-settings: 'tnum';
  }

  .outlook-toggle {
    width: 28px;
    height: 28px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--rule-strong);
    border-radius: 6px;
    color: var(--ink);
    background: var(--surface);
    font-size: 17px;
    line-height: 1;
    font-weight: 500;
  }

  .outlook-item.is-open .outlook-toggle {
    color: var(--surface);
    border-color: var(--accent);
    background: var(--accent);
  }

  .outlook-detail {
    padding: 0 0 16px 0;
    color: var(--ink-soft);
    font-size: 14px;
    line-height: 1.45;
    font-weight: 500;
  }

  .outlook-detail p {
    max-width: 720px;
    margin: 0;
  }

  .state-control-wrap {
    display: flex;
    align-items: center;
    gap: 10px;
    flex: 0 0 auto;
  }

  .state-label {
    color: var(--muted);
    font-size: 11px;
    line-height: 1;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .state-select {
    height: 36px;
    min-width: 164px;
    border-radius: 6px;
    border: 1px solid var(--rule-strong);
    background: var(--surface);
    color: var(--ink);
    padding: 0 12px;
    font-family:
      Inter,
      Avenir Next,
      Arial,
      Helvetica,
      sans-serif;
    font-size: 14px;
    font-weight: 500;
    outline: none;
  }

  .state-select:hover {
    border-color: rgba(171, 35, 40, 0.36);
  }

  .state-select:focus {
    border-color: var(--accent);
  }

  .state-summary-row {
    min-height: 54px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 12px 20px;
    border-bottom: 1px solid var(--rule);
    background: var(--canvas-soft);
  }

  .summary-label {
    color: var(--muted);
    font-size: 11px;
    line-height: 1;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .summary-value {
    margin-top: 5px;
    color: var(--ink);
    font-family:
      Inter Tight,
      Inter,
      Avenir Next,
      Arial,
      Helvetica,
      sans-serif;
    font-size: 18px;
    line-height: 1;
    font-weight: 500;
    letter-spacing: -0.025em;
  }

  .risk-table-wrap {
    padding: 16px 20px 18px 20px;
  }

  .risk-table-title {
    margin-bottom: 10px;
    color: var(--muted);
    font-size: 11px;
    line-height: 1;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .risk-table {
    width: 100%;
    border-top: 1px solid var(--rule);
  }

  .risk-table-row {
    min-height: 38px;
    display: grid;
    grid-template-columns:
      minmax(132px, 1.2fr)
      minmax(92px, 0.9fr)
      minmax(72px, 0.7fr)
      minmax(72px, 0.7fr);
    align-items: center;
    column-gap: 12px;
    border-bottom: 1px solid var(--rule);
  }

  .risk-table-head {
    min-height: 34px;
    color: var(--muted);
    font-size: 11px;
    line-height: 1;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .risk-table-row:not(.risk-table-head) {
    color: var(--ink-soft);
    font-size: 14px;
    line-height: 1.2;
    font-weight: 500;
  }

  .num {
    font-variant-numeric: tabular-nums;
    font-feature-settings: 'tnum';
  }

  .risk-pill {
    min-width: 116px;
    min-height: 24px;
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    border-radius: 4px;
    border: 1px solid currentColor;
    padding: 3px 8px;
    background: var(--surface);
    color: var(--muted);
    font-size: 12px;
    line-height: 1;
    font-weight: 600;
    white-space: nowrap;
  }

  .risk-pill::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 999px;
    margin-right: 7px;
    background: currentColor;
    flex: 0 0 auto;
  }

  .risk-extreme {
    color: #AB2328;
    background: #F8E8E8;
  }

  .risk-very-high {
    color: #9A3412;
    background: #FFF3E8;
  }

  .risk-high {
    color: #854D0E;
    background: #FFF8DB;
  }

  .risk-moderate {
    color: #6E6862;
    background: #F4F1EA;
  }

  .risk-low {
    color: #3F6212;
    background: #EEF6E8;
  }

  @media (max-width: 760px) {
    &.risk-outlook-widget-root {
      padding: 10px;
    }

    .panel-heading,
    .state-heading,
    .state-summary-row {
      flex-direction: column;
      align-items: stretch;
    }

    .source-cite {
      justify-content: flex-start;
    }

    .state-control-wrap {
      width: 100%;
      align-items: stretch;
      flex-direction: column;
      gap: 6px;
    }

    .state-select {
      width: 100%;
    }

    .outlook-list,
    .risk-table-wrap {
      padding-left: 14px;
      padding-right: 14px;
    }

    .panel-heading,
    .state-summary-row {
      padding-left: 14px;
      padding-right: 14px;
    }

    .outlook-title {
      font-size: 19px;
    }

    .outlook-meta {
      gap: 6px;
    }

    .outlook-window {
      min-width: 62px;
    }

    .risk-table-row {
      grid-template-columns:
        minmax(108px, 1.1fr)
        minmax(72px, 0.8fr)
        minmax(58px, 0.7fr)
        minmax(58px, 0.7fr);
      column-gap: 8px;
    }

    .risk-pill {
      min-width: 96px;
      font-size: 11px;
      padding-left: 6px;
      padding-right: 6px;
    }
  }

  @media (max-width: 460px) {
    .risk-table {
      overflow-x: auto;
    }

    .risk-table-row {
      min-width: 420px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .outlook-button {
      transition-duration: 0.01ms;
    }
  }
`,j=i=>{const[a,o]=t.React.useState("threeDay"),[l,r]=t.React.useState(""),s=(e=>{const t=b.find(t=>t.value===e);return(null==t?void 0:t.label)||"All States"})(l);return(0,e.jsx)("div",{className:"risk-outlook-widget-root",css:y(),"data-widget-id":i.id,children:(0,e.jsxs)("div",{className:"risk-outlook-main-panel",children:[(0,e.jsxs)("section",{className:"risk-panel outlook-panel",children:[(0,e.jsxs)("div",{className:"panel-heading",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{className:"panel-kicker",children:"Risk Outlooks"}),(0,e.jsx)("h2",{className:"panel-title",children:"Forecast Windows"})]}),(0,e.jsx)(w,{source:"Risk outlook feed"})]}),(0,e.jsx)("div",{className:"outlook-list",children:v.map(t=>{const i=a===t.key;return(0,e.jsxs)("div",{className:"outlook-item "+(i?"is-open":""),children:[(0,e.jsxs)("button",{className:"outlook-button",type:"button","aria-expanded":i,onClick:()=>{var e;e=t.key,o(t=>t===e?null:e)},children:[(0,e.jsxs)("span",{className:"outlook-main",children:[(0,e.jsx)("span",{className:"outlook-eyebrow",children:t.eyebrow}),(0,e.jsx)("span",{className:"outlook-title",children:t.title})]}),(0,e.jsxs)("span",{className:"outlook-meta",children:[(0,e.jsx)("span",{className:"outlook-window",children:t.window}),(0,e.jsx)("span",{className:"outlook-toggle",children:i?"\u2212":"+"})]})]}),i&&(0,e.jsx)("div",{className:"outlook-detail",children:(0,e.jsx)("p",{children:t.detail})})]},t.key)})})]}),(0,e.jsxs)("section",{className:"risk-panel state-panel",children:[(0,e.jsxs)("div",{className:"panel-heading state-heading",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{className:"panel-kicker",children:"Portfolio Exposure"}),(0,e.jsx)("h2",{className:"panel-title",children:"Select State"})]}),(0,e.jsxs)("div",{className:"state-control-wrap",children:[(0,e.jsx)("label",{className:"state-label",htmlFor:"risk-state-select",children:"State"}),(0,e.jsx)("select",{id:"risk-state-select",className:"state-select",value:l,onChange:e=>{r(e.target.value)},children:b.map(t=>(0,e.jsx)("option",{value:t.value,children:t.label},t.value||"all-states"))})]})]}),(0,e.jsxs)("div",{className:"state-summary-row",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{className:"summary-label",children:"Selected Geography"}),(0,e.jsx)("div",{className:"summary-value",children:s})]}),(0,e.jsx)(w,{source:"Portfolio risk model"})]}),(0,e.jsxs)("div",{className:"risk-table-wrap",children:[(0,e.jsx)("div",{className:"risk-table-title",children:"Within Risk Level"}),(0,e.jsxs)("div",{className:"risk-table",children:[(0,e.jsxs)("div",{className:"risk-table-row risk-table-head",children:[(0,e.jsx)("div",{children:"Risk Level"}),(0,e.jsx)("div",{children:"Zip Codes"}),(0,e.jsx)("div",{children:"Assets"}),(0,e.jsx)("div",{children:"TIV"})]}),k.map(t=>(0,e.jsxs)("div",{className:"risk-table-row",children:[(0,e.jsx)("div",{children:(0,e.jsx)("span",{className:`risk-pill ${t.className}`,children:t.level})}),(0,e.jsx)("div",{className:"num",children:t.zipCodes}),(0,e.jsx)("div",{className:"num",children:t.assets}),(0,e.jsx)("div",{className:"num",children:t.tiv})]},t.level))]})]})]})]})})};function N(e){o.p=e}})(),l})())}}});