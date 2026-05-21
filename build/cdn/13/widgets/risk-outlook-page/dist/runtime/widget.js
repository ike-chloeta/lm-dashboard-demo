System.register(["jimu-core/emotion","jimu-core"],function(e,t){var i={},o={};return{setters:[function(e){i.jsx=e.jsx,i.jsxs=e.jsxs},function(e){o.React=e.React,o.css=e.css}],execute:function(){e((()=>{var e={9244(e){"use strict";e.exports=o},7386(e){"use strict";e.exports=i}},t={};function s(i){var o=t[i];if(void 0!==o)return o.exports;var l=t[i]={exports:{}};return e[i](l,l.exports,s),l.exports}s.d=(e,t)=>{for(var i in t)s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.p="";var l={};return s.p=window.jimuConfig.baseUrl,(()=>{"use strict";s.r(l),s.d(l,{__set_webpack_public_path__:()=>n,default:()=>a});var e=s(7386),t=s(9244);const i=[{key:"threeDay",title:"3-DAY OUTLOOK",detail:"Pertinent risk outlook details for the next 3 days will display here."},{key:"sevenDay",title:"7-DAY OUTLOOK",detail:"Pertinent risk outlook details for the next 7 days will display here."},{key:"fourteenDay",title:"14-DAY OUTLOOK",detail:"Pertinent risk outlook details for the next 14 days will display here."},{key:"thirtyDay",title:"30-DAY OUTLOOK",detail:"Pertinent risk outlook details for the next 30 days will display here."}],o=[{level:"Extreme",zipCodes:"(Zip)",assets:"(#)",tiv:"($)"},{level:"Very High",zipCodes:"(Zip)",assets:"(#)",tiv:"($)"},{level:"High",zipCodes:"(Zip)",assets:"(#)",tiv:"($)"},{level:"Moderate",zipCodes:"(Zip)",assets:"(#)",tiv:"($)"},{level:"Low",zipCodes:"(Zip)",assets:"(#)",tiv:"($)"}],r=()=>t.css`
  &.risk-outlook-widget-root {
    width: 100%;
    height: 570px;
    min-height: 570px;
    color: #ffffff;
    background: transparent;
    overflow: hidden;
    box-sizing: border-box;
    padding: 0 12px;
    font-family:
      Avenir Next,
      Arial,
      Helvetica,
      sans-serif;
  }

  .risk-outlook-main-panel {
    width: 100%;
    height: 100%;
    min-height: 570px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    box-sizing: border-box;
    overflow: hidden;
  }

  .risk-section {
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
    overflow: hidden;
  }

  .outlook-section {
    flex: 0 0 auto;
    padding: 10px 12px;
  }

  .outlook-item {
    border-bottom: 1px solid rgba(139, 160, 188, 0.18);
  }

  .outlook-item:last-child {
    border-bottom: none;
  }

  .outlook-button {
    width: 100%;
    min-height: 38px;
    border: none;
    outline: none;
    background: transparent;
    color: #ffffff;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    font-family:
      Avenir Next,
      Arial,
      Helvetica,
      sans-serif;
  }

  .outlook-title {
    color: #ffffff;
    font-size: 20px;
    line-height: 1.1;
    font-weight: 800;
    letter-spacing: -0.02em;
    text-align: left;
  }

  .outlook-chevron {
    width: 24px;
    height: 24px;
    border-radius: 999px;
    background: rgba(16, 31, 51, 0.88);
    border: 1px solid rgba(124, 148, 178, 0.24);
    color: rgba(226, 232, 240, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 800;
    flex: 0 0 auto;
  }

  .outlook-detail {
    margin: -2px 0 10px 0;
    color: rgba(210, 220, 235, 0.66);
    font-size: 11px;
    line-height: 1.35;
    font-weight: 600;
    letter-spacing: 0.02em;
  }

  .state-section {
    flex: 1;
    min-height: 0;
    padding: 12px;
  }

  .section-title-row {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 12px;
    box-sizing: border-box;
    padding: 0 0 10px 0;
    margin-bottom: 10px;
    border-bottom: 1px solid rgba(139, 160, 188, 0.22);
  }

  .section-title {
    color: #ffffff;
    font-size: 13px;
    line-height: 1.2;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .section-caption {
    margin-top: 5px;
    color: rgba(210, 220, 235, 0.62);
    font-size: 11px;
    line-height: 1.3;
    letter-spacing: 0.04em;
  }

  .state-select {
    min-width: 135px;
    height: 32px;
    border-radius: 999px;
    border: 1px solid rgba(124, 148, 178, 0.28);
    background: rgba(16, 31, 51, 0.88);
    color: #ffffff;
    padding: 0 12px;
    font-size: 12px;
    font-weight: 700;
    outline: none;
    font-family:
      Avenir Next,
      Arial,
      Helvetica,
      sans-serif;
  }

  .state-select option {
    color: #111827;
    background: #ffffff;
  }

  .risk-table-card {
    border-radius: 10px;
    padding: 10px 12px 12px 12px;
    background: rgba(16, 31, 51, 0.72);
    border: 1px solid rgba(124, 148, 178, 0.18);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.03);
  }

  .risk-table-title {
    color: rgba(226, 232, 240, 0.9);
    font-size: 11px;
    line-height: 1.2;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-bottom: 8px;
  }

  .risk-table {
    display: grid;
    grid-template-columns: minmax(86px, 1.15fr) minmax(78px, 1fr) minmax(62px, 0.7fr) minmax(62px, 0.7fr);
    column-gap: 12px;
    row-gap: 5px;
    align-items: center;
  }

  .risk-table-header {
    color: #ffffff;
    font-size: 13px;
    line-height: 1.1;
    font-weight: 800;
    letter-spacing: -0.01em;
  }

  .risk-level-header {
    color: rgba(226, 232, 240, 0.86);
    font-size: 11px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .risk-table-cell {
    color: rgba(235, 241, 249, 0.9);
    font-size: 12px;
    line-height: 1.15;
    font-weight: 700;
  }

  .risk-level-cell {
    color: #ffffff;
    font-weight: 800;
  }

  @media (max-width: 760px) {
    &.risk-outlook-widget-root {
      padding: 0;
      height: 580px;
      min-height: 580px;
    }

    .risk-outlook-main-panel {
      min-height: 580px;
    }

    .outlook-title {
      font-size: 18px;
    }

    .section-title-row {
      flex-direction: column;
      align-items: stretch;
    }

    .state-select {
      width: 100%;
    }

    .risk-table {
      grid-template-columns: minmax(80px, 1fr) minmax(70px, 1fr) minmax(58px, 0.7fr) minmax(58px, 0.7fr);
      column-gap: 8px;
    }
  }
`,a=s=>{const[l,a]=t.React.useState("threeDay"),[n,d]=t.React.useState("");return(0,e.jsx)("div",{className:"risk-outlook-widget-root",css:r(),children:(0,e.jsxs)("div",{className:"risk-outlook-main-panel",children:[(0,e.jsx)("div",{className:"risk-section outlook-section",children:i.map(t=>{const i=l===t.key;return(0,e.jsxs)("div",{className:"outlook-item "+(i?"outlook-item-open":""),children:[(0,e.jsxs)("button",{className:"outlook-button",type:"button",onClick:()=>{var e;e=t.key,a(t=>t===e?null:e)},children:[(0,e.jsx)("span",{className:"outlook-title",children:t.title}),(0,e.jsx)("span",{className:"outlook-chevron",children:i?"\u2212":"+"})]}),i&&(0,e.jsx)("div",{className:"outlook-detail",children:t.detail})]},t.key)})}),(0,e.jsxs)("div",{className:"risk-section state-section",children:[(0,e.jsxs)("div",{className:"section-title-row",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{className:"section-title",children:"SELECT STATE"}),(0,e.jsx)("div",{className:"section-caption",children:"Review assets and TIV within each risk level."})]}),(0,e.jsxs)("select",{className:"state-select",value:n,onChange:e=>{d(e.target.value)},children:[(0,e.jsx)("option",{value:"",children:"Select State"}),(0,e.jsx)("option",{value:"AL",children:"Alabama"}),(0,e.jsx)("option",{value:"AZ",children:"Arizona"}),(0,e.jsx)("option",{value:"CA",children:"California"}),(0,e.jsx)("option",{value:"CO",children:"Colorado"}),(0,e.jsx)("option",{value:"FL",children:"Florida"}),(0,e.jsx)("option",{value:"GA",children:"Georgia"}),(0,e.jsx)("option",{value:"ID",children:"Idaho"}),(0,e.jsx)("option",{value:"MT",children:"Montana"}),(0,e.jsx)("option",{value:"NM",children:"New Mexico"}),(0,e.jsx)("option",{value:"NV",children:"Nevada"}),(0,e.jsx)("option",{value:"OK",children:"Oklahoma"}),(0,e.jsx)("option",{value:"OR",children:"Oregon"}),(0,e.jsx)("option",{value:"TX",children:"Texas"}),(0,e.jsx)("option",{value:"UT",children:"Utah"}),(0,e.jsx)("option",{value:"WA",children:"Washington"}),(0,e.jsx)("option",{value:"WY",children:"Wyoming"})]})]}),(0,e.jsxs)("div",{className:"risk-table-card",children:[(0,e.jsx)("div",{className:"risk-table-title",children:"WITHIN RISK LEVEL"}),(0,e.jsxs)("div",{className:"risk-table",children:[(0,e.jsx)("div",{className:"risk-table-header risk-level-header",children:"Risk Level"}),(0,e.jsx)("div",{className:"risk-table-header",children:"Zip Codes"}),(0,e.jsx)("div",{className:"risk-table-header",children:"Assets"}),(0,e.jsx)("div",{className:"risk-table-header",children:"TIV"}),o.map(i=>(0,e.jsxs)(t.React.Fragment,{children:[(0,e.jsx)("div",{className:"risk-table-cell risk-level-cell",children:i.level}),(0,e.jsx)("div",{className:"risk-table-cell",children:i.zipCodes}),(0,e.jsx)("div",{className:"risk-table-cell",children:i.assets}),(0,e.jsx)("div",{className:"risk-table-cell",children:i.tiv})]},i.level))]})]})]})]})})};function n(e){s.p=e}})(),l})())}}});