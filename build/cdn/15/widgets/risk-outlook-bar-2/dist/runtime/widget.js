System.register(["jimu-core/emotion","jimu-core"],function(e,t){var i={},o={};return{setters:[function(e){i.jsx=e.jsx,i.jsxs=e.jsxs},function(e){o.React=e.React,o.css=e.css}],execute:function(){e((()=>{var e={9244(e){"use strict";e.exports=o},7386(e){"use strict";e.exports=i}},t={};function r(i){var o=t[i];if(void 0!==o)return o.exports;var a=t[i]={exports:{}};return e[i](a,a.exports,r),a.exports}r.d=(e,t)=>{for(var i in t)r.o(t,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="";var a={};return r.p=window.jimuConfig.baseUrl,(()=>{"use strict";r.r(a),r.d(a,{__set_webpack_public_path__:()=>y,default:()=>j});var e=r(7386),t=r(9244);const i="#F7F5F0",o="#FAF8F2",n="#FFFFFF",s="#EFEDE6",c="#14110D",l="#3A3530",d="#6E6862",p="#948D86",m="#AB2328",u="#7A1518",x="#F8E8E8",h="#C42A2F",g="rgba(20, 17, 13, 0.12)",f="rgba(20, 17, 13, 0.18)",w=["3-Day","7-Day","14-Day","30-Day"],b=e=>{const t=e=>String(e).padStart(2,"0");return`${t(e.getUTCHours())}:${t(e.getUTCMinutes())}:${t(e.getUTCSeconds())} UTC`},v=t=>(0,e.jsxs)("div",{className:"source-cite",children:[(0,e.jsx)("span",{children:t.source}),(0,e.jsx)("span",{className:"cite-divider",children:"\xb7"}),(0,e.jsx)("span",{className:"cite__ts num",children:t.timestamp})]}),k=()=>t.css`
  &.risk-outlook-bar-widget-root {
    --canvas: ${i};
    --canvas-soft: ${o};
    --surface: ${n};
    --surface-sunken: ${s};
    --ink: ${c};
    --ink-soft: ${l};
    --muted: ${d};
    --muted-soft: ${p};
    --accent: ${m};
    --accent-deep: ${u};
    --accent-soft: ${x};
    --accent-hover: ${h};
    --rule: ${g};
    --rule-strong: ${f};

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

  &.risk-outlook-bar-widget-root,
  &.risk-outlook-bar-widget-root * {
    box-sizing: border-box;
  }

  .risk-outlook-hero {
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
    grid-template-columns: minmax(0, 1fr) auto;
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
    max-width: 560px;
    margin: 10px 0 0 0;
    color: var(--ink-soft);
    font-size: 14px;
    line-height: 1.35;
    font-weight: 500;
  }

  .hero-meta-panel {
    min-width: 250px;
    max-width: 320px;
    padding: 14px 16px;
    border-left: 1px solid var(--rule);
    background: rgba(255, 255, 255, 0.42);
  }

  .meta-label {
    margin-bottom: 10px;
    color: var(--muted);
    font-size: 11px;
    line-height: 1;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .window-chip-row {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 12px;
  }

  .window-chip {
    min-height: 26px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    border: 1px solid var(--rule-strong);
    background: var(--surface);
    color: var(--ink-soft);
    padding: 0 9px;
    font-size: 12px;
    line-height: 1;
    font-weight: 600;
    white-space: nowrap;
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

  .num {
    font-variant-numeric: tabular-nums;
    font-feature-settings: 'tnum';
  }

  @media (max-width: 760px) {
    &.risk-outlook-bar-widget-root {
      padding: 10px;
      min-height: 150px;
    }

    .risk-outlook-hero {
      min-height: 130px;
    }

    .hero-main {
      min-height: 130px;
      grid-template-columns: 1fr;
      align-items: start;
      gap: 14px;
      padding: 18px 16px 18px 22px;
    }

    .hero-title {
      font-size: 34px;
    }

    .hero-subtitle {
      font-size: 13px;
    }

    .hero-meta-panel {
      min-width: 0;
      max-width: none;
      width: 100%;
      padding: 12px 0 0 0;
      border-left: none;
      border-top: 1px solid var(--rule);
      background: transparent;
    }

    .window-chip-row {
      margin-bottom: 10px;
    }

    .source-cite {
      white-space: normal;
    }
  }

  @media (max-width: 420px) {
    .hero-title {
      font-size: 30px;
    }

    .window-chip {
      font-size: 11px;
      padding: 0 8px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    &.risk-outlook-bar-widget-root *,
    &.risk-outlook-bar-widget-root *::before,
    &.risk-outlook-bar-widget-root *::after {
      transition-duration: 0.01ms !important;
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
    }
  }
`,j=i=>{const[o,r]=t.React.useState(()=>b(new Date));return t.React.useEffect(()=>{const e=window.setInterval(()=>{r(b(new Date))},1e3);return()=>{window.clearInterval(e)}},[]),(0,e.jsx)("div",{className:"risk-outlook-bar-widget-root",css:k(),"data-widget-id":i.id,children:(0,e.jsxs)("section",{className:"risk-outlook-hero",children:[(0,e.jsx)("div",{className:"hero-accent-line"}),(0,e.jsxs)("div",{className:"hero-main",children:[(0,e.jsxs)("div",{className:"hero-copy",children:[(0,e.jsx)("div",{className:"hero-kicker",children:"Portfolio Risk Intelligence"}),(0,e.jsx)("h1",{className:"hero-title",children:"Risk Outlook"}),(0,e.jsx)("p",{className:"hero-subtitle",children:"Forecast windows and portfolio exposure summaries by geography."})]}),(0,e.jsxs)("div",{className:"hero-meta-panel",children:[(0,e.jsx)("div",{className:"meta-label",children:"Outlook Windows"}),(0,e.jsx)("div",{className:"window-chip-row",children:w.map(t=>(0,e.jsx)("span",{className:"window-chip",children:t},t))}),(0,e.jsx)(v,{source:"Risk outlook feed",timestamp:o})]})]})]})})};function y(e){r.p=e}})(),a})())}}});