import {
  DURATIONS,
  EASINGS,
  SHADOWS,
  Z_INDEX,
  readCssVar
} from "./chunk-KQEAAKHO.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-B7ZDCASH.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-X3WVFRKD.js";

// apps/ds-demo/src/app/features/styleguide/pages/elevation.ts
var _forTrack0 = ($index, $item) => $item.var;
function SgElevation_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 12)(1, "span", 13);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const t_r1 = ctx.$implicit;
    \u0275\u0275styleProp("box-shadow", "var(" + t_r1.var + ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1.label);
  }
}
function SgElevation_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 7)(1, "span", 14);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 15);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.val(t_r2.var));
  }
}
function SgElevation_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 9)(1, "div", 16);
    \u0275\u0275domElement(2, "span", 17);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 13);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const e_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("transition-timing-function", "var(" + e_r4.var + ")")("transition-duration", ctx_r2.dur);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r4.label);
  }
}
function SgElevation_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 11);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const d_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", d_r5.label, " \xB7 ", ctx_r2.val(d_r5.var));
  }
}
var SgElevation = class _SgElevation {
  constructor() {
    this.shadows = SHADOWS;
    this.zindex = Z_INDEX;
    this.durations = DURATIONS;
    this.easings = EASINGS;
    this.dur = "600ms";
  }
  val(v) {
    return readCssVar(v);
  }
  static {
    this.\u0275fac = function SgElevation_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgElevation)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgElevation, selectors: [["sg-elevation"]], decls: 28, vars: 9, consts: [[1, "sg-h"], [1, "sg-desc"], [1, "sg-group"], [1, "sg-group-h"], [1, "shadows"], [1, "sh-card", 3, "boxShadow"], [1, "zlist"], [1, "zrow"], [1, "motions"], [1, "mrow"], [1, "durs"], [1, "dur-chip"], [1, "sh-card"], [1, "chip-name"], [1, "zname"], [1, "zval"], [1, "track"], [1, "ball"]], template: function SgElevation_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "h1", 0);
        \u0275\u0275text(1);
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(3, "p", 1);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(6, "section", 2)(7, "h2", 3);
        \u0275\u0275text(8, "Shadow / Elevation");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(9, "div", 4);
        \u0275\u0275repeaterCreate(10, SgElevation_For_11_Template, 3, 3, "div", 5, _forTrack0);
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(12, "section", 2)(13, "h2", 3);
        \u0275\u0275text(14, "Z-index");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(15, "div", 6);
        \u0275\u0275repeaterCreate(16, SgElevation_For_17_Template, 5, 2, "div", 7, _forTrack0);
        \u0275\u0275domElementEnd()();
        \u0275\u0275domElementStart(18, "section", 2)(19, "h2", 3);
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(22, "div", 8);
        \u0275\u0275repeaterCreate(23, SgElevation_For_24_Template, 5, 5, "div", 9, _forTrack0);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(25, "div", 10);
        \u0275\u0275repeaterCreate(26, SgElevation_For_27_Template, 2, 2, "span", 11, _forTrack0);
        \u0275\u0275domElementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 3, "sg.nav.elevation"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 5, "sg.elevation.desc"));
        \u0275\u0275advance(6);
        \u0275\u0275repeater(ctx.shadows);
        \u0275\u0275advance(6);
        \u0275\u0275repeater(ctx.zindex);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 7, "sg.elevation.motionHint"));
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.easings);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.durations);
      }
    }, dependencies: [TranslateModule, TranslatePipe], styles: ['\n.sg-h[_ngcontent-%COMP%] {\n  font-size: var(--fs-24);\n  font-weight: 600;\n  color: var(--text-strong);\n  margin: 0 0 6px;\n}\n.sg-desc[_ngcontent-%COMP%] {\n  font-size: var(--fs-14);\n  color: var(--text-sub);\n  margin: 0 0 28px;\n  max-width: 720px;\n  line-height: 20px;\n}\n.sg-group[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.sg-group-h[_ngcontent-%COMP%] {\n  font-size: var(--fs-12);\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--text-soft);\n  margin: 0 0 12px;\n}\n.sg-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n  gap: 12px;\n}\n.sg-card[_ngcontent-%COMP%] {\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-xl);\n  overflow: hidden;\n  background: var(--bg-surface);\n}\n.sg-card-body[_ngcontent-%COMP%] {\n  padding: 8px 10px;\n}\n.sg-card-label[_ngcontent-%COMP%] {\n  font-size: var(--fs-13);\n  font-weight: 500;\n  color: var(--text-strong);\n  font-feature-settings: "tnum";\n}\n.sg-card-val[_ngcontent-%COMP%] {\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n  font-variant-numeric: tabular-nums;\n  word-break: break-all;\n}\n.cluster[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  align-items: center;\n}\n.stack[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.grid2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(220px, 1fr));\n  gap: 16px;\n}\n.grid3[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n  gap: 16px;\n}\n.demo-box[_ngcontent-%COMP%] {\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-xl);\n  background: var(--bg-surface);\n  padding: 20px;\n}\n.demo-note[_ngcontent-%COMP%] {\n  font-size: var(--fs-12);\n  color: var(--text-soft);\n  margin-top: 8px;\n}\n/*# sourceMappingURL=sg-page.css.map */', "\n.shadows[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 24px;\n}\n.sh-card[_ngcontent-%COMP%] {\n  width: 160px;\n  height: 96px;\n  border-radius: var(--radius-2xl);\n  background: var(--bg-surface);\n  border: 1px solid var(--border-soft);\n  display: flex;\n  align-items: flex-end;\n  padding: 10px;\n}\n.chip-name[_ngcontent-%COMP%] {\n  font-size: var(--fs-12);\n  font-weight: 500;\n  color: var(--text-body);\n}\n.zlist[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  max-width: 360px;\n}\n.zrow[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 6px 10px;\n  border-radius: var(--radius-md);\n  background: var(--bg-surface-subtle);\n}\n.zname[_ngcontent-%COMP%] {\n  font-size: var(--fs-13);\n  color: var(--text-body);\n}\n.zval[_ngcontent-%COMP%] {\n  font-size: var(--fs-13);\n  color: var(--text-sub);\n  font-variant-numeric: tabular-nums;\n}\n.motions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  max-width: 480px;\n}\n.mrow[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.track[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 20px;\n  background: var(--bg-surface-subtle);\n  border-radius: var(--radius-full);\n  position: relative;\n  overflow: hidden;\n}\n.ball[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  width: 16px;\n  height: 16px;\n  border-radius: var(--radius-full);\n  background: var(--primary-base);\n  transition-property: left;\n  transition-timing-function: var(--ease-out);\n  transition-duration: 300ms;\n}\n.mrow[_ngcontent-%COMP%]:hover   .ball[_ngcontent-%COMP%] {\n  left: calc(100% - 18px);\n}\n.durs[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.dur-chip[_ngcontent-%COMP%] {\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n  font-variant-numeric: tabular-nums;\n  padding: 4px 10px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-full);\n}\n/*# sourceMappingURL=elevation.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgElevation, [{
    type: Component,
    args: [{ selector: "sg-elevation", imports: [TranslateModule], template: `
    <h1 class="sg-h">{{ 'sg.nav.elevation' | translate }}</h1>
    <p class="sg-desc">{{ 'sg.elevation.desc' | translate }}</p>

    <section class="sg-group">
      <h2 class="sg-group-h">Shadow / Elevation</h2>
      <div class="shadows">
        @for (t of shadows; track t.var) {
          <div class="sh-card" [style.boxShadow]="'var(' + t.var + ')'">
            <span class="chip-name">{{ t.label }}</span>
          </div>
        }
      </div>
    </section>

    <section class="sg-group">
      <h2 class="sg-group-h">Z-index</h2>
      <div class="zlist">
        @for (t of zindex; track t.var) {
          <div class="zrow">
            <span class="zname">{{ t.label }}</span>
            <span class="zval">{{ val(t.var) }}</span>
          </div>
        }
      </div>
    </section>

    <section class="sg-group">
      <h2 class="sg-group-h">{{ 'sg.elevation.motionHint' | translate }}</h2>
      <div class="motions">
        @for (e of easings; track e.var) {
          <div class="mrow">
            <div class="track">
              <span class="ball" [style.transitionTimingFunction]="'var(' + e.var + ')'" [style.transitionDuration]="dur"></span>
            </div>
            <span class="chip-name">{{ e.label }}</span>
          </div>
        }
      </div>
      <div class="durs">
        @for (d of durations; track d.var) {
          <span class="dur-chip">{{ d.label }} \xB7 {{ val(d.var) }}</span>
        }
      </div>
    </section>
  `, styles: ['/* apps/ds-demo/src/app/features/styleguide/sg-page.css */\n.sg-h {\n  font-size: var(--fs-24);\n  font-weight: 600;\n  color: var(--text-strong);\n  margin: 0 0 6px;\n}\n.sg-desc {\n  font-size: var(--fs-14);\n  color: var(--text-sub);\n  margin: 0 0 28px;\n  max-width: 720px;\n  line-height: 20px;\n}\n.sg-group {\n  margin-bottom: 32px;\n}\n.sg-group-h {\n  font-size: var(--fs-12);\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--text-soft);\n  margin: 0 0 12px;\n}\n.sg-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n  gap: 12px;\n}\n.sg-card {\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-xl);\n  overflow: hidden;\n  background: var(--bg-surface);\n}\n.sg-card-body {\n  padding: 8px 10px;\n}\n.sg-card-label {\n  font-size: var(--fs-13);\n  font-weight: 500;\n  color: var(--text-strong);\n  font-feature-settings: "tnum";\n}\n.sg-card-val {\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n  font-variant-numeric: tabular-nums;\n  word-break: break-all;\n}\n.cluster {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  align-items: center;\n}\n.stack {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.grid2 {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(220px, 1fr));\n  gap: 16px;\n}\n.grid3 {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n  gap: 16px;\n}\n.demo-box {\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-xl);\n  background: var(--bg-surface);\n  padding: 20px;\n}\n.demo-note {\n  font-size: var(--fs-12);\n  color: var(--text-soft);\n  margin-top: 8px;\n}\n/*# sourceMappingURL=sg-page.css.map */\n', "/* angular:styles/component:css;b03c28784d0f7e6087954afbb14982f00b3f9f7a4c22c4cdd236e4c25c641cf3;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/elevation.ts */\n.shadows {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 24px;\n}\n.sh-card {\n  width: 160px;\n  height: 96px;\n  border-radius: var(--radius-2xl);\n  background: var(--bg-surface);\n  border: 1px solid var(--border-soft);\n  display: flex;\n  align-items: flex-end;\n  padding: 10px;\n}\n.chip-name {\n  font-size: var(--fs-12);\n  font-weight: 500;\n  color: var(--text-body);\n}\n.zlist {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  max-width: 360px;\n}\n.zrow {\n  display: flex;\n  justify-content: space-between;\n  padding: 6px 10px;\n  border-radius: var(--radius-md);\n  background: var(--bg-surface-subtle);\n}\n.zname {\n  font-size: var(--fs-13);\n  color: var(--text-body);\n}\n.zval {\n  font-size: var(--fs-13);\n  color: var(--text-sub);\n  font-variant-numeric: tabular-nums;\n}\n.motions {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  max-width: 480px;\n}\n.mrow {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.track {\n  flex: 1;\n  height: 20px;\n  background: var(--bg-surface-subtle);\n  border-radius: var(--radius-full);\n  position: relative;\n  overflow: hidden;\n}\n.ball {\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  width: 16px;\n  height: 16px;\n  border-radius: var(--radius-full);\n  background: var(--primary-base);\n  transition-property: left;\n  transition-timing-function: var(--ease-out);\n  transition-duration: 300ms;\n}\n.mrow:hover .ball {\n  left: calc(100% - 18px);\n}\n.durs {\n  margin-top: 16px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.dur-chip {\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n  font-variant-numeric: tabular-nums;\n  padding: 4px 10px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-full);\n}\n/*# sourceMappingURL=elevation.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgElevation, { className: "SgElevation", filePath: "apps/ds-demo/src/app/features/styleguide/pages/elevation.ts", lineNumber: 85 });
})();
export {
  SgElevation
};
//# sourceMappingURL=chunk-QNBFYZNJ.js.map
