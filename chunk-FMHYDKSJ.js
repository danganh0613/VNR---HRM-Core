import {
  Search,
  TablerIconComponent,
  tabler_icons_angular_exports
} from "./chunk-QL2Z65KF.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-B7ZDCASH.js";
import {
  Component,
  computed,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-X3WVFRKD.js";

// apps/ds-demo/src/app/features/styleguide/pages/icons.ts
var _c0 = (a0) => ({ n: a0 });
var _forTrack0 = ($index, $item) => $item.name;
function SgIcons_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "tabler-icon", 9);
    \u0275\u0275elementStart(2, "span", 10);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r1 = ctx.$implicit;
    \u0275\u0275property("title", i_r1.name);
    \u0275\u0275advance();
    \u0275\u0275property("icon", i_r1.obj)("size", 22);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r1.name);
  }
}
function SgIcons_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, "sg.icons.more", \u0275\u0275pureFunction1(4, _c0, ctx_r1.filtered().length - ctx_r1.shown().length)));
  }
}
function SgIcons_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "sg.icons.none"));
  }
}
var ALL_ICONS = Object.entries(tabler_icons_angular_exports).filter(([k, v]) => k.startsWith("Icon") && v && typeof v === "object" && "nodes" in v && "name" in v).map(([, v]) => ({ name: v.name, obj: v })).sort((a, b) => a.name.localeCompare(b.name));
var SgIcons = class _SgIcons {
  constructor() {
    this.total = ALL_ICONS.length;
    this.searchIcon = Search;
    this.query = signal("", ...ngDevMode ? [{ debugName: "query" }] : (
      /* istanbul ignore next */
      []
    ));
    this.cap = 300;
    this.filtered = computed(() => {
      const q = this.query().trim().toLowerCase();
      return q ? ALL_ICONS.filter((i) => i.name.includes(q)) : ALL_ICONS;
    }, ...ngDevMode ? [{ debugName: "filtered" }] : (
      /* istanbul ignore next */
      []
    ));
    this.shown = computed(() => this.filtered().slice(0, this.cap), ...ngDevMode ? [{ debugName: "shown" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function SgIcons_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgIcons)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgIcons, selectors: [["sg-icons"]], decls: 17, vars: 16, consts: [[1, "sg-h"], [1, "sg-desc"], [1, "search-bar"], [1, "s-ico", 3, "icon", "size"], [1, "search", 3, "input", "value", "placeholder"], [1, "count"], [1, "ico-grid"], [1, "ico-cell", 3, "title"], [1, "more"], [3, "icon", "size"], [1, "ico-name"]], template: function SgIcons_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h1", 0);
        \u0275\u0275text(1);
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p", 1);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 2);
        \u0275\u0275element(7, "tabler-icon", 3);
        \u0275\u0275elementStart(8, "input", 4);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275listener("input", function SgIcons_Template_input_input_8_listener($event) {
          return ctx.query.set($event.target.value);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "span", 5);
        \u0275\u0275text(11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 6);
        \u0275\u0275repeaterCreate(13, SgIcons_For_14_Template, 4, 4, "div", 7, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(15, SgIcons_Conditional_15_Template, 3, 6, "div", 8);
        \u0275\u0275conditionalCreate(16, SgIcons_Conditional_16_Template, 3, 3, "div", 8);
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 10, "sg.nav.icons"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 12, "sg.icons.desc"));
        \u0275\u0275advance(3);
        \u0275\u0275property("icon", ctx.searchIcon)("size", 18);
        \u0275\u0275advance();
        \u0275\u0275property("value", ctx.query())("placeholder", \u0275\u0275pipeBind1(9, 14, "sg.icons.search"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate2("", ctx.filtered().length, " / ", ctx.total);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.shown());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.filtered().length > ctx.shown().length ? 15 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.filtered().length === 0 ? 16 : -1);
      }
    }, dependencies: [TranslateModule, TablerIconComponent, TranslatePipe], styles: ['\n.sg-h[_ngcontent-%COMP%] {\n  font-size: var(--fs-24);\n  font-weight: 600;\n  color: var(--text-strong);\n  margin: 0 0 6px;\n}\n.sg-desc[_ngcontent-%COMP%] {\n  font-size: var(--fs-14);\n  color: var(--text-sub);\n  margin: 0 0 28px;\n  max-width: 720px;\n  line-height: 20px;\n}\n.sg-group[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.sg-group-h[_ngcontent-%COMP%] {\n  font-size: var(--fs-12);\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--text-soft);\n  margin: 0 0 12px;\n}\n.sg-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n  gap: 12px;\n}\n.sg-card[_ngcontent-%COMP%] {\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-xl);\n  overflow: hidden;\n  background: var(--bg-surface);\n}\n.sg-card-body[_ngcontent-%COMP%] {\n  padding: 8px 10px;\n}\n.sg-card-label[_ngcontent-%COMP%] {\n  font-size: var(--fs-13);\n  font-weight: 500;\n  color: var(--text-strong);\n  font-feature-settings: "tnum";\n}\n.sg-card-val[_ngcontent-%COMP%] {\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n  font-variant-numeric: tabular-nums;\n  word-break: break-all;\n}\n.cluster[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  align-items: center;\n}\n.stack[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.grid2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(220px, 1fr));\n  gap: 16px;\n}\n.grid3[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n  gap: 16px;\n}\n.demo-box[_ngcontent-%COMP%] {\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-xl);\n  background: var(--bg-surface);\n  padding: 20px;\n}\n.demo-note[_ngcontent-%COMP%] {\n  font-size: var(--fs-12);\n  color: var(--text-soft);\n  margin-top: 8px;\n}\n/*# sourceMappingURL=sg-page.css.map */', "\n.search-bar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: -32px;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: var(--bg-app);\n  padding: 8px 0 16px;\n}\n.s-ico[_ngcontent-%COMP%] {\n  color: var(--text-sub);\n}\n.search[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 420px;\n  height: 40px;\n  padding: 0 14px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg);\n  background: var(--bg-surface);\n  color: var(--text-strong);\n  font-family: var(--font-sans);\n  font-size: var(--fs-14);\n  outline: none;\n}\n.search[_ngcontent-%COMP%]:focus {\n  border-color: var(--border-focus);\n  box-shadow: var(--shadow-focus-primary);\n}\n.count[_ngcontent-%COMP%] {\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n  font-variant-numeric: tabular-nums;\n}\n.ico-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(112px, 1fr));\n  gap: 8px;\n}\n.ico-cell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  padding: 14px 6px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg);\n  background: var(--bg-surface);\n  color: var(--text-body);\n  cursor: default;\n  transition: border-color var(--duration-fast) var(--ease-out), color var(--duration-fast) var(--ease-out);\n}\n.ico-cell[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-base);\n  color: var(--primary-base);\n}\n.ico-name[_ngcontent-%COMP%] {\n  font-size: var(--fs-11);\n  color: var(--text-sub);\n  text-align: center;\n  word-break: break-all;\n  line-height: 1.3;\n}\n.ico-cell[_ngcontent-%COMP%]:hover   .ico-name[_ngcontent-%COMP%] {\n  color: var(--text-strong);\n}\n.more[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  font-size: var(--fs-13);\n  color: var(--text-sub);\n}\n/*# sourceMappingURL=icons.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgIcons, [{
    type: Component,
    args: [{ selector: "sg-icons", imports: [TranslateModule, TablerIconComponent], template: `
    <h1 class="sg-h">{{ 'sg.nav.icons' | translate }}</h1>
    <p class="sg-desc">{{ 'sg.icons.desc' | translate }}</p>

    <div class="search-bar">
      <tabler-icon [icon]="searchIcon" [size]="18" class="s-ico" />
      <input class="search" [value]="query()" (input)="query.set($any($event.target).value)"
        [placeholder]="'sg.icons.search' | translate" />
      <span class="count">{{ filtered().length }} / {{ total }}</span>
    </div>

    <div class="ico-grid">
      @for (i of shown(); track i.name) {
        <div class="ico-cell" [title]="i.name">
          <tabler-icon [icon]="i.obj" [size]="22" />
          <span class="ico-name">{{ i.name }}</span>
        </div>
      }
    </div>
    @if (filtered().length > shown().length) {
      <div class="more">{{ 'sg.icons.more' | translate:{ n: filtered().length - shown().length } }}</div>
    }
    @if (filtered().length === 0) {
      <div class="more">{{ 'sg.icons.none' | translate }}</div>
    }
  `, styles: ['/* apps/ds-demo/src/app/features/styleguide/sg-page.css */\n.sg-h {\n  font-size: var(--fs-24);\n  font-weight: 600;\n  color: var(--text-strong);\n  margin: 0 0 6px;\n}\n.sg-desc {\n  font-size: var(--fs-14);\n  color: var(--text-sub);\n  margin: 0 0 28px;\n  max-width: 720px;\n  line-height: 20px;\n}\n.sg-group {\n  margin-bottom: 32px;\n}\n.sg-group-h {\n  font-size: var(--fs-12);\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--text-soft);\n  margin: 0 0 12px;\n}\n.sg-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n  gap: 12px;\n}\n.sg-card {\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-xl);\n  overflow: hidden;\n  background: var(--bg-surface);\n}\n.sg-card-body {\n  padding: 8px 10px;\n}\n.sg-card-label {\n  font-size: var(--fs-13);\n  font-weight: 500;\n  color: var(--text-strong);\n  font-feature-settings: "tnum";\n}\n.sg-card-val {\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n  font-variant-numeric: tabular-nums;\n  word-break: break-all;\n}\n.cluster {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  align-items: center;\n}\n.stack {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.grid2 {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(220px, 1fr));\n  gap: 16px;\n}\n.grid3 {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n  gap: 16px;\n}\n.demo-box {\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-xl);\n  background: var(--bg-surface);\n  padding: 20px;\n}\n.demo-note {\n  font-size: var(--fs-12);\n  color: var(--text-soft);\n  margin-top: 8px;\n}\n/*# sourceMappingURL=sg-page.css.map */\n', "/* angular:styles/component:css;98074f6ae38ff9dc2262c36d7a2607d2dbfe3e220408376da1f865312196ae7b;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/icons.ts */\n.search-bar {\n  position: sticky;\n  top: -32px;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: var(--bg-app);\n  padding: 8px 0 16px;\n}\n.s-ico {\n  color: var(--text-sub);\n}\n.search {\n  flex: 1;\n  max-width: 420px;\n  height: 40px;\n  padding: 0 14px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg);\n  background: var(--bg-surface);\n  color: var(--text-strong);\n  font-family: var(--font-sans);\n  font-size: var(--fs-14);\n  outline: none;\n}\n.search:focus {\n  border-color: var(--border-focus);\n  box-shadow: var(--shadow-focus-primary);\n}\n.count {\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n  font-variant-numeric: tabular-nums;\n}\n.ico-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(112px, 1fr));\n  gap: 8px;\n}\n.ico-cell {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  padding: 14px 6px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-lg);\n  background: var(--bg-surface);\n  color: var(--text-body);\n  cursor: default;\n  transition: border-color var(--duration-fast) var(--ease-out), color var(--duration-fast) var(--ease-out);\n}\n.ico-cell:hover {\n  border-color: var(--primary-base);\n  color: var(--primary-base);\n}\n.ico-name {\n  font-size: var(--fs-11);\n  color: var(--text-sub);\n  text-align: center;\n  word-break: break-all;\n  line-height: 1.3;\n}\n.ico-cell:hover .ico-name {\n  color: var(--text-strong);\n}\n.more {\n  margin-top: 16px;\n  font-size: var(--fs-13);\n  color: var(--text-sub);\n}\n/*# sourceMappingURL=icons.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgIcons, { className: "SgIcons", filePath: "apps/ds-demo/src/app/features/styleguide/pages/icons.ts", lineNumber: 83 });
})();
export {
  SgIcons
};
//# sourceMappingURL=chunk-FMHYDKSJ.js.map
