System.register(["jimu-core/emotion","jimu-core"],function(e,t){var i={},r={};return{setters:[function(e){i.jsx=e.jsx,i.jsxs=e.jsxs},function(e){r.css=e.css}],execute:function(){e((()=>{var e={9244(e){"use strict";e.exports=r},7386(e){"use strict";e.exports=i}},t={};function o(i){var r=t[i];if(void 0!==r)return r.exports;var s=t[i]={exports:{}};return e[i](s,s.exports,o),s.exports}o.d=(e,t)=>{for(var i in t)o.o(t,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="";var s={};return o.p=window.jimuConfig.baseUrl,(()=>{"use strict";o.r(s),o.d(s,{__set_webpack_public_path__:()=>n,default:()=>a});var e=o(7386),t=o(9244);const i=[{id:"analytics",eyebrow:"01",title:"Analytics",source:"WFR Survey + DS Survey"},{id:"completed-summary",eyebrow:"02",title:"Completed Summary",source:"WFR Survey + DS Survey"},{id:"ytd-saves-losses",eyebrow:"03",title:"YTD Saves and Losses",source:"Total Saves + Fire Saves + Smoke Saves + Losses"}],r=()=>t.css`
  &.historical-page-widget-root {
    --canvas: #f7f5f0;
    --canvas-soft: #faf8f2;
    --surface: #ffffff;
    --surface-sunken: #efede6;

    --ink: #14110d;
    --ink-soft: #3a3530;
    --muted: #6e6862;
    --muted-soft: #948d86;

    --accent: #ab2328;
    --accent-deep: #7a1518;
    --accent-soft: #f8e8e8;

    --rule: rgba(20, 17, 13, 0.12);
    --rule-soft: rgba(20, 17, 13, 0.08);

    width: 100%;
    height: 580px;
    min-height: 580px;
    color: var(--ink);
    background: var(--canvas);
    overflow: hidden;
    box-sizing: border-box;
    padding: 0;
    font-family:
      Inter,
      Avenir Next,
      Arial,
      Helvetica,
      sans-serif;
    font-variant-numeric: tabular-nums;
    font-feature-settings: 'tnum';
  }

  .historical-main-panel {
    width: 100%;
    height: 100%;
    min-height: 580px;
    background: var(--surface);
    border: 1px solid var(--rule);
    border-radius: 8px;
    color: var(--ink);
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .historical-section {
    flex: 1 1 0;
    min-height: 0;
    display: grid;
    grid-template-columns: 72px minmax(0, 1fr);
    border-bottom: 1px solid var(--rule);
    background: var(--surface);
  }

  .last-historical-section {
    border-bottom: none;
  }

  .section-index {
    border-right: 1px solid var(--rule-soft);
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding-top: 28px;
    color: var(--muted-soft);
    font-size: 11px;
    line-height: 1;
    font-weight: 600;
    letter-spacing: 0.08em;
    font-variant-numeric: tabular-nums;
    font-feature-settings: 'tnum';
  }

  .section-main {
    min-width: 0;
    padding: 24px 32px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }

  .section-title-row {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 24px;
  }

  .section-title {
    margin: 0;
    color: var(--ink);
    font-family:
      Inter Tight,
      Inter,
      Avenir Next,
      Arial,
      Helvetica,
      sans-serif;
    font-size: 18px;
    line-height: 1.15;
    font-weight: 500;
    letter-spacing: -0.01em;
  }

  .section-source {
    display: flex;
    align-items: baseline;
    justify-content: flex-end;
    gap: 8px;
    min-width: 220px;
    color: var(--muted);
    font-size: 11px;
    line-height: 1.2;
    white-space: nowrap;
  }

  .source-label {
    color: var(--muted-soft);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  .source-value {
    color: var(--muted);
    font-weight: 500;
  }

  .section-placeholder {
    margin-top: auto;
    padding-top: 24px;
    color: var(--muted-soft);
    font-size: 14px;
    line-height: 1.45;
    font-weight: 500;
  }

  @media (max-width: 760px) {
    &.historical-page-widget-root {
      height: 580px;
      min-height: 580px;
    }

    .historical-section {
      grid-template-columns: 48px minmax(0, 1fr);
    }

    .section-index {
      padding-top: 22px;
    }

    .section-main {
      padding: 20px;
    }

    .section-title-row {
      flex-direction: column;
      gap: 8px;
    }

    .section-source {
      min-width: 0;
      justify-content: flex-start;
      flex-wrap: wrap;
      white-space: normal;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    * {
      transition-duration: 0.01ms !important;
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      scroll-behavior: auto !important;
    }
  }
`,a=t=>(0,e.jsx)("div",{className:"historical-page-widget-root",css:r(),children:(0,e.jsx)("div",{className:"historical-main-panel",children:i.map((t,r)=>(0,e.jsxs)("section",{className:"historical-section "+(r===i.length-1?"last-historical-section":""),children:[(0,e.jsx)("div",{className:"section-index",children:t.eyebrow}),(0,e.jsxs)("div",{className:"section-main",children:[(0,e.jsxs)("div",{className:"section-title-row",children:[(0,e.jsx)("h3",{className:"section-title",children:t.title}),(0,e.jsxs)("div",{className:"section-source",children:[(0,e.jsx)("span",{className:"source-label",children:"Source"}),(0,e.jsx)("span",{className:"source-value",children:t.source})]})]}),(0,e.jsx)("div",{className:"section-placeholder",children:"Content area reserved for historical data."})]})]},t.id))})});function n(e){o.p=e}})(),s})())}}});