import {
  TYPE_GROUPS,
  readCssVar
} from "./chunk-KQEAAKHO.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-JVYAKZTD.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵstyleMap,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-RFPCG6C6.js";

// apps/ds-demo/src/app/features/styleguide/pages/typography.ts
var _forTrack0 = ($index, $item) => $item.label;
var _forTrack1 = ($index, $item) => $item.key;
function SgTypography_For_7_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 5)(1, "div", 6);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 7)(4, "span", 8);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "span", 9);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const t_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleMap(ctx_r1.styleFor(t_r1.key));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.sample);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r1.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.spec(t_r1.key));
  }
}
function SgTypography_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "section", 2)(1, "h2", 3);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 4);
    \u0275\u0275repeaterCreate(4, SgTypography_For_7_For_5_Template, 8, 5, "div", 5, _forTrack1);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const g_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(g_r3.label);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(g_r3.items);
  }
}
var SgTypography = class _SgTypography {
  constructor() {
    this.groups = TYPE_GROUPS;
    this.sample = "Aa Bb Cc \u2014 Xin ch\xE0o 0123";
  }
  styleFor(key) {
    const tr = readCssVar(`${key}-text-transform`) || "none";
    return {
      "font-size": `var(${key}-font-size)`,
      "line-height": `var(${key}-line-height)`,
      "font-weight": `var(${key}-font-weight)`,
      "letter-spacing": `var(${key}-letter-spacing)`,
      "text-transform": tr
    };
  }
  spec(key) {
    return `${readCssVar(`${key}-font-size`)} / ${readCssVar(`${key}-line-height`)} \xB7 ${readCssVar(`${key}-font-weight`)}`;
  }
  static {
    this.\u0275fac = function SgTypography_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgTypography)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgTypography, selectors: [["sg-typography"]], decls: 8, vars: 6, consts: [[1, "sg-h"], [1, "sg-desc"], [1, "sg-group"], [1, "sg-group-h"], [1, "rows"], [1, "row"], [1, "specimen"], [1, "meta"], [1, "name"], [1, "spec"]], template: function SgTypography_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "h1", 0);
        \u0275\u0275text(1);
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(3, "p", 1);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275domElementEnd();
        \u0275\u0275repeaterCreate(6, SgTypography_For_7_Template, 6, 1, "section", 2, _forTrack0);
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, "sg.nav.typography"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 4, "sg.typography.desc"));
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.groups);
      }
    }, dependencies: [TranslateModule, TranslatePipe], styles: ['\n.sg-h[_ngcontent-%COMP%] {\n  font-size: var(--fs-24);\n  font-weight: 600;\n  color: var(--text-strong);\n  margin: 0 0 6px;\n}\n.sg-desc[_ngcontent-%COMP%] {\n  font-size: var(--fs-14);\n  color: var(--text-sub);\n  margin: 0 0 28px;\n  max-width: 720px;\n  line-height: 20px;\n}\n.sg-group[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.sg-group-h[_ngcontent-%COMP%] {\n  font-size: var(--fs-12);\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--text-soft);\n  margin: 0 0 12px;\n}\n.sg-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n  gap: 12px;\n}\n.sg-card[_ngcontent-%COMP%] {\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-xl);\n  overflow: hidden;\n  background: var(--bg-surface);\n}\n.sg-card-body[_ngcontent-%COMP%] {\n  padding: 8px 10px;\n}\n.sg-card-label[_ngcontent-%COMP%] {\n  font-size: var(--fs-13);\n  font-weight: 500;\n  color: var(--text-strong);\n  font-feature-settings: "tnum";\n}\n.sg-card-val[_ngcontent-%COMP%] {\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n  font-variant-numeric: tabular-nums;\n  word-break: break-all;\n}\n.cluster[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  align-items: center;\n}\n.stack[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.grid2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(220px, 1fr));\n  gap: 16px;\n}\n.grid3[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n  gap: 16px;\n}\n.demo-box[_ngcontent-%COMP%] {\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-xl);\n  background: var(--bg-surface);\n  padding: 20px;\n}\n.demo-note[_ngcontent-%COMP%] {\n  font-size: var(--fs-12);\n  color: var(--text-soft);\n  margin-top: 8px;\n}\n/*# sourceMappingURL=sg-page.css.map */', "\n.rows[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 24px;\n  padding: 12px 0;\n  border-bottom: 1px solid var(--border-soft);\n}\n.specimen[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  color: var(--text-strong);\n  font-family: var(--font-sans);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.meta[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 260px;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  text-align: right;\n}\n.name[_ngcontent-%COMP%] {\n  font-size: var(--fs-13);\n  font-weight: 500;\n  color: var(--text-body);\n}\n.spec[_ngcontent-%COMP%] {\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n  font-variant-numeric: tabular-nums;\n}\n/*# sourceMappingURL=typography.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgTypography, [{
    type: Component,
    args: [{ selector: "sg-typography", imports: [TranslateModule], template: `
    <h1 class="sg-h">{{ 'sg.nav.typography' | translate }}</h1>
    <p class="sg-desc">{{ 'sg.typography.desc' | translate }}</p>

    @for (g of groups; track g.label) {
      <section class="sg-group">
        <h2 class="sg-group-h">{{ g.label }}</h2>
        <div class="rows">
          @for (t of g.items; track t.key) {
            <div class="row">
              <div class="specimen" [style]="styleFor(t.key)">{{ sample }}</div>
              <div class="meta">
                <span class="name">{{ t.label }}</span>
                <span class="spec">{{ spec(t.key) }}</span>
              </div>
            </div>
          }
        </div>
      </section>
    }
  `, styles: ['/* apps/ds-demo/src/app/features/styleguide/sg-page.css */\n.sg-h {\n  font-size: var(--fs-24);\n  font-weight: 600;\n  color: var(--text-strong);\n  margin: 0 0 6px;\n}\n.sg-desc {\n  font-size: var(--fs-14);\n  color: var(--text-sub);\n  margin: 0 0 28px;\n  max-width: 720px;\n  line-height: 20px;\n}\n.sg-group {\n  margin-bottom: 32px;\n}\n.sg-group-h {\n  font-size: var(--fs-12);\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--text-soft);\n  margin: 0 0 12px;\n}\n.sg-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n  gap: 12px;\n}\n.sg-card {\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-xl);\n  overflow: hidden;\n  background: var(--bg-surface);\n}\n.sg-card-body {\n  padding: 8px 10px;\n}\n.sg-card-label {\n  font-size: var(--fs-13);\n  font-weight: 500;\n  color: var(--text-strong);\n  font-feature-settings: "tnum";\n}\n.sg-card-val {\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n  font-variant-numeric: tabular-nums;\n  word-break: break-all;\n}\n.cluster {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  align-items: center;\n}\n.stack {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.grid2 {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(220px, 1fr));\n  gap: 16px;\n}\n.grid3 {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n  gap: 16px;\n}\n.demo-box {\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-xl);\n  background: var(--bg-surface);\n  padding: 20px;\n}\n.demo-note {\n  font-size: var(--fs-12);\n  color: var(--text-soft);\n  margin-top: 8px;\n}\n/*# sourceMappingURL=sg-page.css.map */\n', "/* angular:styles/component:css;793162522366f887e1c3320c769483462e59cc21f5370c45e3e21ae643d9e44d;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/typography.ts */\n.rows {\n  display: flex;\n  flex-direction: column;\n}\n.row {\n  display: flex;\n  align-items: baseline;\n  gap: 24px;\n  padding: 12px 0;\n  border-bottom: 1px solid var(--border-soft);\n}\n.specimen {\n  flex: 1;\n  min-width: 0;\n  color: var(--text-strong);\n  font-family: var(--font-sans);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.meta {\n  flex-shrink: 0;\n  width: 260px;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  text-align: right;\n}\n.name {\n  font-size: var(--fs-13);\n  font-weight: 500;\n  color: var(--text-body);\n}\n.spec {\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n  font-variant-numeric: tabular-nums;\n}\n/*# sourceMappingURL=typography.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgTypography, { className: "SgTypography", filePath: "apps/ds-demo/src/app/features/styleguide/pages/typography.ts", lineNumber: 47 });
})();
export {
  SgTypography
};
//# sourceMappingURL=chunk-3HMLQGAJ.js.map
