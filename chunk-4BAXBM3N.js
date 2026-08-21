import {
  RADIUS,
  SIZE_GROUPS,
  SPACING,
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
  ɵɵtextInterpolate
} from "./chunk-X3WVFRKD.js";

// apps/ds-demo/src/app/features/styleguide/pages/spacing.ts
var _forTrack0 = ($index, $item) => $item.var;
var _forTrack1 = ($index, $item) => $item.label;
function SgSpacing_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 5)(1, "span", 8);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(3, "span", 9);
    \u0275\u0275domElementStart(4, "span", 10);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const t_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r1.label);
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", "var(" + t_r1.var + ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.val(t_r1.var));
  }
}
function SgSpacing_For_13_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 7);
    \u0275\u0275domElement(1, "span", 11);
    \u0275\u0275domElementStart(2, "span", 12);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "span", 13);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const t_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", "var(" + t_r3.var + ")")("height", "var(" + t_r3.var + ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.val(t_r3.var));
  }
}
function SgSpacing_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "section", 2)(1, "h2", 3);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 6);
    \u0275\u0275repeaterCreate(4, SgSpacing_For_13_For_5_Template, 6, 6, "div", 7, _forTrack0);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const g_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(g_r4.label);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(g_r4.items);
  }
}
function SgSpacing_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 7);
    \u0275\u0275domElement(1, "span", 14);
    \u0275\u0275domElementStart(2, "span", 12);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "span", 13);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const t_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("border-radius", "var(" + t_r5.var + ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.val(t_r5.var));
  }
}
var SgSpacing = class _SgSpacing {
  constructor() {
    this.spacing = SPACING;
    this.sizes = SIZE_GROUPS;
    this.radius = RADIUS;
  }
  val(v) {
    return readCssVar(v);
  }
  static {
    this.\u0275fac = function SgSpacing_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgSpacing)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgSpacing, selectors: [["sg-spacing"]], decls: 20, vars: 6, consts: [[1, "sg-h"], [1, "sg-desc"], [1, "sg-group"], [1, "sg-group-h"], [1, "bars"], [1, "bar-row"], [1, "chips"], [1, "chip"], [1, "bar-name"], [1, "bar"], [1, "bar-val"], [1, "dot"], [1, "chip-name"], [1, "chip-val"], [1, "rbox"]], template: function SgSpacing_Template(rf, ctx) {
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
        \u0275\u0275text(8, "Spacing \xB7 4px base");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(9, "div", 4);
        \u0275\u0275repeaterCreate(10, SgSpacing_For_11_Template, 6, 4, "div", 5, _forTrack0);
        \u0275\u0275domElementEnd()();
        \u0275\u0275repeaterCreate(12, SgSpacing_For_13_Template, 6, 1, "section", 2, _forTrack1);
        \u0275\u0275domElementStart(14, "section", 2)(15, "h2", 3);
        \u0275\u0275text(16, "Radius");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(17, "div", 6);
        \u0275\u0275repeaterCreate(18, SgSpacing_For_19_Template, 6, 4, "div", 7, _forTrack0);
        \u0275\u0275domElementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, "sg.nav.spacing"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 4, "sg.spacing.desc"));
        \u0275\u0275advance(6);
        \u0275\u0275repeater(ctx.spacing);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.sizes);
        \u0275\u0275advance(6);
        \u0275\u0275repeater(ctx.radius);
      }
    }, dependencies: [TranslateModule, TranslatePipe], styles: ['\n.sg-h[_ngcontent-%COMP%] {\n  font-size: var(--fs-24);\n  font-weight: 600;\n  color: var(--text-strong);\n  margin: 0 0 6px;\n}\n.sg-desc[_ngcontent-%COMP%] {\n  font-size: var(--fs-14);\n  color: var(--text-sub);\n  margin: 0 0 28px;\n  max-width: 720px;\n  line-height: 20px;\n}\n.sg-group[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.sg-group-h[_ngcontent-%COMP%] {\n  font-size: var(--fs-12);\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--text-soft);\n  margin: 0 0 12px;\n}\n.sg-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n  gap: 12px;\n}\n.sg-card[_ngcontent-%COMP%] {\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-xl);\n  overflow: hidden;\n  background: var(--bg-surface);\n}\n.sg-card-body[_ngcontent-%COMP%] {\n  padding: 8px 10px;\n}\n.sg-card-label[_ngcontent-%COMP%] {\n  font-size: var(--fs-13);\n  font-weight: 500;\n  color: var(--text-strong);\n  font-feature-settings: "tnum";\n}\n.sg-card-val[_ngcontent-%COMP%] {\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n  font-variant-numeric: tabular-nums;\n  word-break: break-all;\n}\n.cluster[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  align-items: center;\n}\n.stack[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.grid2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(220px, 1fr));\n  gap: 16px;\n}\n.grid3[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n  gap: 16px;\n}\n.demo-box[_ngcontent-%COMP%] {\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-xl);\n  background: var(--bg-surface);\n  padding: 20px;\n}\n.demo-note[_ngcontent-%COMP%] {\n  font-size: var(--fs-12);\n  color: var(--text-soft);\n  margin-top: 8px;\n}\n/*# sourceMappingURL=sg-page.css.map */', "\n.bars[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.bar-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.bar-name[_ngcontent-%COMP%] {\n  width: 90px;\n  font-size: var(--fs-13);\n  color: var(--text-body);\n  font-variant-numeric: tabular-nums;\n}\n.bar[_ngcontent-%COMP%] {\n  height: 16px;\n  background: var(--primary-base);\n  border-radius: var(--radius-xs);\n  flex-shrink: 0;\n}\n.bar-val[_ngcontent-%COMP%] {\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n  font-variant-numeric: tabular-nums;\n}\n.chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  align-items: flex-end;\n}\n.chip[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  min-width: 72px;\n}\n.dot[_ngcontent-%COMP%] {\n  background: var(--primary-bg-soft);\n  border: 1px solid var(--primary-border);\n  border-radius: var(--radius-full);\n}\n.rbox[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  background: var(--primary-bg-soft);\n  border: 1px solid var(--primary-border);\n}\n.chip-name[_ngcontent-%COMP%] {\n  font-size: var(--fs-12);\n  font-weight: 500;\n  color: var(--text-body);\n}\n.chip-val[_ngcontent-%COMP%] {\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n  font-variant-numeric: tabular-nums;\n}\n/*# sourceMappingURL=spacing.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgSpacing, [{
    type: Component,
    args: [{ selector: "sg-spacing", imports: [TranslateModule], template: `
    <h1 class="sg-h">{{ 'sg.nav.spacing' | translate }}</h1>
    <p class="sg-desc">{{ 'sg.spacing.desc' | translate }}</p>

    <section class="sg-group">
      <h2 class="sg-group-h">Spacing \xB7 4px base</h2>
      <div class="bars">
        @for (t of spacing; track t.var) {
          <div class="bar-row">
            <span class="bar-name">{{ t.label }}</span>
            <span class="bar" [style.width]="'var(' + t.var + ')'"></span>
            <span class="bar-val">{{ val(t.var) }}</span>
          </div>
        }
      </div>
    </section>

    @for (g of sizes; track g.label) {
      <section class="sg-group">
        <h2 class="sg-group-h">{{ g.label }}</h2>
        <div class="chips">
          @for (t of g.items; track t.var) {
            <div class="chip">
              <span class="dot" [style.width]="'var(' + t.var + ')'" [style.height]="'var(' + t.var + ')'"></span>
              <span class="chip-name">{{ t.label }}</span>
              <span class="chip-val">{{ val(t.var) }}</span>
            </div>
          }
        </div>
      </section>
    }

    <section class="sg-group">
      <h2 class="sg-group-h">Radius</h2>
      <div class="chips">
        @for (t of radius; track t.var) {
          <div class="chip">
            <span class="rbox" [style.borderRadius]="'var(' + t.var + ')'"></span>
            <span class="chip-name">{{ t.label }}</span>
            <span class="chip-val">{{ val(t.var) }}</span>
          </div>
        }
      </div>
    </section>
  `, styles: ['/* apps/ds-demo/src/app/features/styleguide/sg-page.css */\n.sg-h {\n  font-size: var(--fs-24);\n  font-weight: 600;\n  color: var(--text-strong);\n  margin: 0 0 6px;\n}\n.sg-desc {\n  font-size: var(--fs-14);\n  color: var(--text-sub);\n  margin: 0 0 28px;\n  max-width: 720px;\n  line-height: 20px;\n}\n.sg-group {\n  margin-bottom: 32px;\n}\n.sg-group-h {\n  font-size: var(--fs-12);\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--text-soft);\n  margin: 0 0 12px;\n}\n.sg-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n  gap: 12px;\n}\n.sg-card {\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-xl);\n  overflow: hidden;\n  background: var(--bg-surface);\n}\n.sg-card-body {\n  padding: 8px 10px;\n}\n.sg-card-label {\n  font-size: var(--fs-13);\n  font-weight: 500;\n  color: var(--text-strong);\n  font-feature-settings: "tnum";\n}\n.sg-card-val {\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n  font-variant-numeric: tabular-nums;\n  word-break: break-all;\n}\n.cluster {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  align-items: center;\n}\n.stack {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.grid2 {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(220px, 1fr));\n  gap: 16px;\n}\n.grid3 {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n  gap: 16px;\n}\n.demo-box {\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-xl);\n  background: var(--bg-surface);\n  padding: 20px;\n}\n.demo-note {\n  font-size: var(--fs-12);\n  color: var(--text-soft);\n  margin-top: 8px;\n}\n/*# sourceMappingURL=sg-page.css.map */\n', "/* angular:styles/component:css;ddfda983b116ab51cbb7bdb3b51709b5187a6ed44c2c6132a63349df4a501595;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/spacing.ts */\n.bars {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.bar-row {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.bar-name {\n  width: 90px;\n  font-size: var(--fs-13);\n  color: var(--text-body);\n  font-variant-numeric: tabular-nums;\n}\n.bar {\n  height: 16px;\n  background: var(--primary-base);\n  border-radius: var(--radius-xs);\n  flex-shrink: 0;\n}\n.bar-val {\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n  font-variant-numeric: tabular-nums;\n}\n.chips {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  align-items: flex-end;\n}\n.chip {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  min-width: 72px;\n}\n.dot {\n  background: var(--primary-bg-soft);\n  border: 1px solid var(--primary-border);\n  border-radius: var(--radius-full);\n}\n.rbox {\n  width: 56px;\n  height: 56px;\n  background: var(--primary-bg-soft);\n  border: 1px solid var(--primary-border);\n}\n.chip-name {\n  font-size: var(--fs-12);\n  font-weight: 500;\n  color: var(--text-body);\n}\n.chip-val {\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n  font-variant-numeric: tabular-nums;\n}\n/*# sourceMappingURL=spacing.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgSpacing, { className: "SgSpacing", filePath: "apps/ds-demo/src/app/features/styleguide/pages/spacing.ts", lineNumber: 69 });
})();
export {
  SgSpacing
};
//# sourceMappingURL=chunk-4BAXBM3N.js.map
