import {
  DATAVIZ_CATEGORICAL,
  DATAVIZ_SEQ,
  HUE_RAMPS,
  NEUTRAL_RAMPS,
  SEMANTIC_GROUPS,
  STATUS_ROWS,
  TAG_ROWS,
  UTILITY_TOKENS,
  readCssVar
} from "./chunk-KQEAAKHO.js";
import {
  SgThemeService
} from "./chunk-ONBXQHVZ.js";
import {
  NgTemplateOutlet
} from "./chunk-XYGM7GOW.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-B7ZDCASH.js";
import {
  Component,
  effect,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-X3WVFRKD.js";

// apps/ds-demo/src/app/features/styleguide/pages/colors.ts
var _c0 = (a0) => ({ $implicit: a0 });
var _forTrack0 = ($index, $item) => $item.name;
var _forTrack1 = ($index, $item) => $item.label;
var _forTrack2 = ($index, $item) => $item.var;
function SgColors_For_20_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "div", 16);
    \u0275\u0275elementStart(2, "div", 17);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("title", s_r1.var + " \xB7 " + ctx_r1.resolved()[s_r1.var]);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", "var(" + s_r1.var + ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r1.label);
  }
}
function SgColors_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "small");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 14);
    \u0275\u0275repeaterCreate(6, SgColors_For_20_For_7_Template, 4, 4, "div", 15, _forTrack2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r3.note);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(r_r3.steps);
  }
}
function SgColors_For_30_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "div", 16);
    \u0275\u0275elementStart(2, "div", 17);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("title", s_r4.var + " \xB7 " + ctx_r1.resolved()[s_r4.var]);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", "var(" + s_r4.var + ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r4.label);
  }
}
function SgColors_For_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "small");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 14);
    \u0275\u0275repeaterCreate(6, SgColors_For_30_For_7_Template, 4, 4, "div", 15, _forTrack2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r5.note);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(r_r5.steps);
  }
}
function SgColors_For_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 12);
  }
  if (rf & 2) {
    const g_r6 = ctx.$implicit;
    \u0275\u0275nextContext();
    const cardGroup_r7 = \u0275\u0275reference(73);
    \u0275\u0275property("ngTemplateOutlet", cardGroup_r7)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c0, g_r6));
  }
}
function SgColors_For_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 12);
  }
  if (rf & 2) {
    const row_r8 = ctx.$implicit;
    \u0275\u0275nextContext();
    const roleRow_r9 = \u0275\u0275reference(75);
    \u0275\u0275property("ngTemplateOutlet", roleRow_r9)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c0, row_r8));
  }
}
function SgColors_For_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 12);
  }
  if (rf & 2) {
    const row_r10 = ctx.$implicit;
    \u0275\u0275nextContext();
    const roleRow_r9 = \u0275\u0275reference(75);
    \u0275\u0275property("ngTemplateOutlet", roleRow_r9)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c0, row_r10));
  }
}
function SgColors_For_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "div", 16);
    \u0275\u0275elementStart(2, "div", 17);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("title", s_r11.var + " \xB7 " + ctx_r1.resolved()[s_r11.var]);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", "var(" + s_r11.var + ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r11.label);
  }
}
function SgColors_For_70_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "div", 16);
    \u0275\u0275elementStart(2, "div", 17);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("title", s_r12.var + " \xB7 " + ctx_r1.resolved()[s_r12.var]);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", "var(" + s_r12.var + ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r12.label);
  }
}
function SgColors_For_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 18);
    \u0275\u0275repeaterCreate(4, SgColors_For_70_For_5_Template, 4, 4, "div", 15, _forTrack2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r13 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r13.name);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(r_r13.steps);
  }
}
function SgColors_ng_template_72_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const g_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(g_r14.note);
  }
}
function SgColors_ng_template_72_For_6_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r15 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("data-g", ctx_r1.cr()[t_r15.var].g);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r1.cr()[t_r15.var].v, " \xB7 ", ctx_r1.cr()[t_r15.var].g);
  }
}
function SgColors_ng_template_72_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "div", 21);
    \u0275\u0275elementStart(2, "div", 22)(3, "div", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 24);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, SgColors_ng_template_72_For_6_Conditional_7_Template, 2, 3, "span", 25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r15 = ctx.$implicit;
    const g_r14 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", "var(" + t_r15.var + ")");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r15.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.resolved()[t_r15.var]);
    \u0275\u0275advance();
    \u0275\u0275conditional(g_r14.contrastVs && ctx_r1.cr()[t_r15.var] ? 7 : -1);
  }
}
function SgColors_ng_template_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 8)(1, "h2", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, SgColors_ng_template_72_Conditional_3_Template, 2, 1, "p", 10);
    \u0275\u0275elementStart(4, "div", 19);
    \u0275\u0275repeaterCreate(5, SgColors_ng_template_72_For_6_Template, 8, 5, "div", 20, _forTrack2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const g_r14 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(g_r14.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(g_r14.note ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(g_r14.items);
  }
}
function SgColors_ng_template_74_For_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sw_r16 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("data-g", ctx_r1.cr()[sw_r16.var].g);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.cr()[sw_r16.var].g);
  }
}
function SgColors_ng_template_74_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275element(1, "div", 30);
    \u0275\u0275elementStart(2, "div", 31);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, SgColors_ng_template_74_For_5_Conditional_4_Template, 2, 2, "span", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sw_r16 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("title", sw_r16.var + " \xB7 " + ctx_r1.resolved()[sw_r16.var]);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", "var(" + sw_r16.var + ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(sw_r16.role);
    \u0275\u0275advance();
    \u0275\u0275conditional(sw_r16.contrast && ctx_r1.cr()[sw_r16.var] ? 4 : -1);
  }
}
function SgColors_ng_template_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 28);
    \u0275\u0275repeaterCreate(4, SgColors_ng_template_74_For_5_Template, 5, 5, "div", 29, _forTrack2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r17 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r17.name);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(row_r17.swatches);
  }
}
function parseRgb(v) {
  v = v.trim();
  const m = v.match(/rgba?\(([^)]+)\)/i);
  if (m) {
    const p = m[1].split(/[ ,/]+/).filter(Boolean).map(Number);
    if (p.length >= 3 && p.every((n) => !isNaN(n)))
      return [p[0], p[1], p[2]];
    return null;
  }
  let h = v.replace("#", "");
  if (h.length === 3)
    h = h.split("").map((c) => c + c).join("");
  if (h.length === 6) {
    const n = parseInt(h, 16);
    if (!isNaN(n))
      return [n >> 16 & 255, n >> 8 & 255, n & 255];
  }
  return null;
}
function relLum([r, g, b]) {
  const f = (c) => {
    c /= 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
}
function contrast(fg, bg) {
  const a = parseRgb(fg), b = parseRgb(bg);
  if (!a || !b)
    return null;
  const [l1, l2] = [relLum(a), relLum(b)].sort((x, y) => y - x);
  return (l1 + 0.05) / (l2 + 0.05);
}
function grade(v) {
  return v >= 7 ? "AAA" : v >= 4.5 ? "AA" : v >= 3 ? "AA-L" : "FAIL";
}
var SgColors = class _SgColors {
  constructor() {
    this.ramps = NEUTRAL_RAMPS;
    this.hueRamps = HUE_RAMPS;
    this.semanticGroups = SEMANTIC_GROUPS;
    this.statusRows = STATUS_ROWS;
    this.tagRows = TAG_ROWS;
    this.datavizCat = DATAVIZ_CATEGORICAL;
    this.datavizSeq = DATAVIZ_SEQ;
    this.utility = UTILITY_TOKENS;
    this.theme = inject(SgThemeService);
    this.resolved = signal({}, ...ngDevMode ? [{ debugName: "resolved" }] : (
      /* istanbul ignore next */
      []
    ));
    this.cr = signal({}, ...ngDevMode ? [{ debugName: "cr" }] : (
      /* istanbul ignore next */
      []
    ));
    effect(() => {
      this.theme.theme();
      const allVars = /* @__PURE__ */ new Set();
      const ramps = [...NEUTRAL_RAMPS, ...HUE_RAMPS, ...DATAVIZ_SEQ];
      for (const r of ramps)
        for (const s of r.steps)
          allVars.add(s.var);
      for (const s of DATAVIZ_CATEGORICAL)
        allVars.add(s.var);
      const cardGroups = [...SEMANTIC_GROUPS, UTILITY_TOKENS];
      for (const g of cardGroups)
        for (const t of g.items)
          allVars.add(t.var);
      for (const row of [...STATUS_ROWS, ...TAG_ROWS])
        for (const sw of row.swatches)
          allVars.add(sw.var);
      allVars.add("--bg-surface");
      const map = {};
      for (const v of allVars)
        map[v] = readCssVar(v);
      this.resolved.set(map);
      const crMap = {};
      const put = (v, bg) => {
        const val = contrast(map[v], bg);
        if (val != null)
          crMap[v] = { v: val.toFixed(2), g: grade(val) };
      };
      for (const g of cardGroups) {
        if (!g.contrastVs)
          continue;
        const bg = map[g.contrastVs];
        for (const t of g.items)
          put(t.var, bg);
      }
      const surface = map["--bg-surface"];
      for (const row of [...STATUS_ROWS, ...TAG_ROWS])
        for (const sw of row.swatches)
          if (sw.contrast)
            put(sw.var, surface);
      this.cr.set(crMap);
    });
  }
  static {
    this.\u0275fac = function SgColors_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgColors)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgColors, selectors: [["sg-colors"]], decls: 76, vars: 10, consts: [["cardGroup", ""], ["roleRow", ""], [1, "sg-h"], [1, "sg-desc"], [1, "tier"], [1, "tier-n"], [1, "tier-h"], [1, "tier-d"], [1, "sg-group"], [1, "sg-group-h"], [1, "grp-note"], [1, "ramp"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ramp-name"], [1, "ramp-steps"], [1, "ramp-step", 3, "title"], [1, "ramp-chip"], [1, "ramp-l"], [1, "ramp-steps", "seq"], [1, "sg-grid"], [1, "sg-card"], [1, "swatch"], [1, "sg-card-body"], [1, "sg-card-label"], [1, "sg-card-val"], [1, "cr"], [1, "role-row"], [1, "role-name"], [1, "role-sws"], [1, "role-sw", 3, "title"], [1, "role-chip"], [1, "role-tag"]], template: function SgColors_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h1", 2);
        \u0275\u0275text(1);
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p", 3);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 4)(7, "span", 5);
        \u0275\u0275text(8, "01");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div")(10, "div", 6);
        \u0275\u0275text(11, "Palette g\u1ED1c \u2014 Primitive");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 7);
        \u0275\u0275text(13, "Thang m\xE0u th\xF4 0\u2192950. KH\xD4NG d\xF9ng tr\u1EF1c ti\u1EBFp trong component \u2014 ch\u1EC9 \u0111\u1EC3 token semantic tham chi\u1EBFu.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(14, "section", 8)(15, "h2", 9);
        \u0275\u0275text(16, "Neutral ramp");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "p", 10);
        \u0275\u0275text(18, "Config \u0111\u1ED5i Slate \u2194 Gray \u2192 c\u1EA3 h\u1EC7 neutral \u0111\u1ED5i. 2 thang c\xF9ng b\u1EADc s\xE1ng n\xEAn contrast gi\u1EEF nguy\xEAn.");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(19, SgColors_For_20_Template, 8, 2, "div", 11, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "section", 8)(22, "h2", 9);
        \u0275\u0275text(23, "Accent / Status ramps");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "p", 10);
        \u0275\u0275text(25, "9 hue tr\u1EA1ng th\xE1i, m\u1ED7i hue thang \u0111\u1EA7y \u0111\u1EE7 50\u2192950. Semantic status ph\xE2n b\u1ED5: ");
        \u0275\u0275elementStart(26, "b");
        \u0275\u0275text(27, "base=600 \xB7 text=800 \xB7 border=200 \xB7 bg=50");
        \u0275\u0275elementEnd();
        \u0275\u0275text(28, " (dark: text=300). Nh\xE3n ph\u1EA3i = status d\xF9ng hue \u0111\xF3.");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(29, SgColors_For_30_Template, 8, 2, "div", 11, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div", 4)(32, "span", 5);
        \u0275\u0275text(33, "02");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "div")(35, "div", 6);
        \u0275\u0275text(36, "Token ng\u1EEF ngh\u0129a \u2014 Semantic");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "div", 7);
        \u0275\u0275text(38, "Token theo VAI TR\xD2, t\u1EF1 b\xE1m Light/Dark. \u0110\xE2y l\xE0 th\u1EE9 component d\xF9ng.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275repeaterCreate(39, SgColors_For_40_Template, 1, 4, "ng-container", 12, _forTrack1);
        \u0275\u0275elementStart(41, "section", 8)(42, "h2", 9);
        \u0275\u0275text(43, "Status \u2014 Tr\u1EA1ng th\xE1i");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "p", 10);
        \u0275\u0275text(45, "5 tr\u1EA1ng th\xE1i \xD7 5 vai tr\xF2. ");
        \u0275\u0275elementStart(46, "b");
        \u0275\u0275text(47, "On");
        \u0275\u0275elementEnd();
        \u0275\u0275text(48, " = ch\u1EEF tr\xEAn n\xFAt solid (warning/away = t\u1ED1i v\xEC n\u1EC1n s\xE1ng). Badge = contrast ch\u1EEF tr\xEAn n\u1EC1n surface.");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(49, SgColors_For_50_Template, 1, 4, "ng-container", 12, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "section", 8)(52, "h2", 9);
        \u0275\u0275text(53, "Categorical \u2014 Nh\xE3n / Chart / L\u1ECBch");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "p", 10);
        \u0275\u0275text(55, "10 hue ph\xE2n lo\u1EA1i (C\xD3 legend). Component Tag d\xF9ng b\u1EA3ng n\xE0y. N\u1EC1n/Vi\u1EC1n = alpha b\xE1m n\u1EC1n; Ch\u1EEF t\u1EF1 \u0111\u1EA3o theo theme (\u0111\u1EC1u AAA).");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(56, SgColors_For_57_Template, 1, 4, "ng-container", 12, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "section", 8)(59, "h2", 9);
        \u0275\u0275text(60, "Data-viz \u2014 Bi\u1EC3u \u0111\u1ED3");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "p", 10);
        \u0275\u0275text(62, "Categorical = th\u1EE9 t\u1EF1 c\u1ED1 \u0111\u1ECBnh ch\u1ED1ng tr\xF9ng series. Sequential = thang 5 b\u1EADc cho heatmap/m\u1EADt \u0111\u1ED9.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "div", 11)(64, "div", 13);
        \u0275\u0275text(65, "Categorical");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "div", 14);
        \u0275\u0275repeaterCreate(67, SgColors_For_68_Template, 4, 4, "div", 15, _forTrack2);
        \u0275\u0275elementEnd()();
        \u0275\u0275repeaterCreate(69, SgColors_For_70_Template, 6, 1, "div", 11, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementContainer(71, 12);
        \u0275\u0275template(72, SgColors_ng_template_72_Template, 7, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(74, SgColors_ng_template_74_Template, 6, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const cardGroup_r7 = \u0275\u0275reference(73);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 4, "sg.nav.colors"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 6, "sg.colors.desc"));
        \u0275\u0275advance(15);
        \u0275\u0275repeater(ctx.ramps);
        \u0275\u0275advance(10);
        \u0275\u0275repeater(ctx.hueRamps);
        \u0275\u0275advance(10);
        \u0275\u0275repeater(ctx.semanticGroups);
        \u0275\u0275advance(10);
        \u0275\u0275repeater(ctx.statusRows);
        \u0275\u0275advance(7);
        \u0275\u0275repeater(ctx.tagRows);
        \u0275\u0275advance(11);
        \u0275\u0275repeater(ctx.datavizCat);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.datavizSeq);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngTemplateOutlet", cardGroup_r7)("ngTemplateOutletContext", \u0275\u0275pureFunction1(8, _c0, ctx.utility));
      }
    }, dependencies: [TranslateModule, NgTemplateOutlet, TranslatePipe], styles: ['\n.sg-h[_ngcontent-%COMP%] {\n  font-size: var(--fs-24);\n  font-weight: 600;\n  color: var(--text-strong);\n  margin: 0 0 6px;\n}\n.sg-desc[_ngcontent-%COMP%] {\n  font-size: var(--fs-14);\n  color: var(--text-sub);\n  margin: 0 0 28px;\n  max-width: 720px;\n  line-height: 20px;\n}\n.sg-group[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.sg-group-h[_ngcontent-%COMP%] {\n  font-size: var(--fs-12);\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--text-soft);\n  margin: 0 0 12px;\n}\n.sg-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n  gap: 12px;\n}\n.sg-card[_ngcontent-%COMP%] {\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-xl);\n  overflow: hidden;\n  background: var(--bg-surface);\n}\n.sg-card-body[_ngcontent-%COMP%] {\n  padding: 8px 10px;\n}\n.sg-card-label[_ngcontent-%COMP%] {\n  font-size: var(--fs-13);\n  font-weight: 500;\n  color: var(--text-strong);\n  font-feature-settings: "tnum";\n}\n.sg-card-val[_ngcontent-%COMP%] {\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n  font-variant-numeric: tabular-nums;\n  word-break: break-all;\n}\n.cluster[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  align-items: center;\n}\n.stack[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.grid2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(220px, 1fr));\n  gap: 16px;\n}\n.grid3[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n  gap: 16px;\n}\n.demo-box[_ngcontent-%COMP%] {\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-xl);\n  background: var(--bg-surface);\n  padding: 20px;\n}\n.demo-note[_ngcontent-%COMP%] {\n  font-size: var(--fs-12);\n  color: var(--text-soft);\n  margin-top: 8px;\n}\n/*# sourceMappingURL=sg-page.css.map */', "\n.swatch[_ngcontent-%COMP%] {\n  height: 64px;\n  border-bottom: 1px solid var(--border-sub);\n}\n.grp-note[_ngcontent-%COMP%] {\n  margin: -4px 0 16px;\n  color: var(--text-sub);\n  font-size: var(--fs-13);\n  max-width: 74ch;\n  line-height: 1.5;\n}\n.grp-note[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: var(--text-body);\n  font-weight: 600;\n}\n.tier[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin: 40px 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 2px solid var(--border-strong);\n}\n.tier[_ngcontent-%COMP%]:first-of-type {\n  margin-top: 8px;\n}\n.tier-n[_ngcontent-%COMP%] {\n  font-size: var(--fs-13);\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  color: var(--text-on-primary);\n  background: var(--primary-base);\n  border-radius: var(--radius-full);\n  width: 34px;\n  height: 34px;\n  display: grid;\n  place-items: center;\n  flex: none;\n}\n.tier-h[_ngcontent-%COMP%] {\n  font-size: var(--fs-18);\n  font-weight: 600;\n  color: var(--text-strong);\n}\n.tier-d[_ngcontent-%COMP%] {\n  font-size: var(--fs-13);\n  color: var(--text-sub);\n  margin-top: 2px;\n  max-width: 76ch;\n}\n.ramp[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.ramp-name[_ngcontent-%COMP%] {\n  width: 92px;\n  flex: none;\n  font-size: var(--fs-13);\n  font-weight: 600;\n  color: var(--text-body);\n  padding-top: 6px;\n}\n.ramp-name[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 400;\n  color: var(--text-soft);\n  font-size: var(--fs-11);\n}\n.ramp-steps[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  min-width: 280px;\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  box-shadow: inset 0 0 0 1px var(--border-sub);\n}\n.ramp-steps.seq[_ngcontent-%COMP%] {\n  max-width: 420px;\n}\n.ramp-step[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.ramp-chip[_ngcontent-%COMP%] {\n  height: 44px;\n}\n.ramp-l[_ngcontent-%COMP%] {\n  font-size: var(--fs-10);\n  text-align: center;\n  color: var(--text-soft);\n  padding: 3px 0;\n  font-variant-numeric: tabular-nums;\n}\n.role-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 10px 0;\n  border-bottom: 1px solid var(--border-soft);\n  flex-wrap: wrap;\n}\n.role-name[_ngcontent-%COMP%] {\n  width: 168px;\n  flex: none;\n  font-size: var(--fs-13);\n  font-weight: 600;\n  color: var(--text-strong);\n  text-transform: capitalize;\n}\n.role-sws[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.role-sw[_ngcontent-%COMP%] {\n  width: 76px;\n  text-align: center;\n}\n.role-chip[_ngcontent-%COMP%] {\n  height: 40px;\n  border-radius: var(--radius-sm);\n  box-shadow: inset 0 0 0 1px var(--border-sub);\n}\n.role-tag[_ngcontent-%COMP%] {\n  font-size: var(--fs-11);\n  color: var(--text-sub);\n  margin-top: 4px;\n}\n.cr[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 3px;\n  padding: 1px 6px;\n  border-radius: var(--radius-full);\n  font-size: var(--fs-10);\n  font-weight: 700;\n  font-variant-numeric: tabular-nums;\n  background: var(--bg-surface-subtle);\n  color: var(--text-sub);\n}\n.cr[data-g=AAA][_ngcontent-%COMP%], \n.cr[data-g=AA][_ngcontent-%COMP%] {\n  background: var(--success-muted-light);\n  color: var(--success-dark);\n}\n.cr[data-g=AA-L][_ngcontent-%COMP%] {\n  background: var(--warning-muted-light);\n  color: var(--warning-dark);\n}\n.cr[data-g=FAIL][_ngcontent-%COMP%] {\n  background: var(--error-muted-light);\n  color: var(--error-dark);\n}\n/*# sourceMappingURL=colors.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgColors, [{
    type: Component,
    args: [{ selector: "sg-colors", imports: [TranslateModule, NgTemplateOutlet], template: `
    <h1 class="sg-h">{{ 'sg.nav.colors' | translate }}</h1>
    <p class="sg-desc">{{ 'sg.colors.desc' | translate }}</p>

    <!-- ============ T\u1EA6NG 1 \xB7 PALETTE G\u1ED0C ============ -->
    <div class="tier">
      <span class="tier-n">01</span>
      <div><div class="tier-h">Palette g\u1ED1c \u2014 Primitive</div>
        <div class="tier-d">Thang m\xE0u th\xF4 0\u2192950. KH\xD4NG d\xF9ng tr\u1EF1c ti\u1EBFp trong component \u2014 ch\u1EC9 \u0111\u1EC3 token semantic tham chi\u1EBFu.</div></div>
    </div>
    <section class="sg-group">
      <h2 class="sg-group-h">Neutral ramp</h2>
      <p class="grp-note">Config \u0111\u1ED5i Slate \u2194 Gray \u2192 c\u1EA3 h\u1EC7 neutral \u0111\u1ED5i. 2 thang c\xF9ng b\u1EADc s\xE1ng n\xEAn contrast gi\u1EEF nguy\xEAn.</p>
      @for (r of ramps; track r.name) {
        <div class="ramp">
          <div class="ramp-name">{{ r.name }}<small>{{ r.note }}</small></div>
          <div class="ramp-steps">
            @for (s of r.steps; track s.var) {
              <div class="ramp-step" [title]="s.var + ' \xB7 ' + resolved()[s.var]">
                <div class="ramp-chip" [style.background]="'var(' + s.var + ')'"></div>
                <div class="ramp-l">{{ s.label }}</div>
              </div>
            }
          </div>
        </div>
      }
    </section>

    <section class="sg-group">
      <h2 class="sg-group-h">Accent / Status ramps</h2>
      <p class="grp-note">9 hue tr\u1EA1ng th\xE1i, m\u1ED7i hue thang \u0111\u1EA7y \u0111\u1EE7 50\u2192950. Semantic status ph\xE2n b\u1ED5: <b>base=600 \xB7 text=800 \xB7 border=200 \xB7 bg=50</b> (dark: text=300). Nh\xE3n ph\u1EA3i = status d\xF9ng hue \u0111\xF3.</p>
      @for (r of hueRamps; track r.name) {
        <div class="ramp">
          <div class="ramp-name">{{ r.name }}<small>{{ r.note }}</small></div>
          <div class="ramp-steps">
            @for (s of r.steps; track s.var) {
              <div class="ramp-step" [title]="s.var + ' \xB7 ' + resolved()[s.var]">
                <div class="ramp-chip" [style.background]="'var(' + s.var + ')'"></div>
                <div class="ramp-l">{{ s.label }}</div>
              </div>
            }
          </div>
        </div>
      }
    </section>

    <!-- ============ T\u1EA6NG 2 \xB7 SEMANTIC ============ -->
    <div class="tier">
      <span class="tier-n">02</span>
      <div><div class="tier-h">Token ng\u1EEF ngh\u0129a \u2014 Semantic</div>
        <div class="tier-d">Token theo VAI TR\xD2, t\u1EF1 b\xE1m Light/Dark. \u0110\xE2y l\xE0 th\u1EE9 component d\xF9ng.</div></div>
    </div>

    @for (g of semanticGroups; track g.label) {
      <ng-container [ngTemplateOutlet]="cardGroup" [ngTemplateOutletContext]="{ $implicit: g }" />
    }

    <!-- Status \u2014 b\u1ED9 vai tr\xF2 -->
    <section class="sg-group">
      <h2 class="sg-group-h">Status \u2014 Tr\u1EA1ng th\xE1i</h2>
      <p class="grp-note">5 tr\u1EA1ng th\xE1i \xD7 5 vai tr\xF2. <b>On</b> = ch\u1EEF tr\xEAn n\xFAt solid (warning/away = t\u1ED1i v\xEC n\u1EC1n s\xE1ng). Badge = contrast ch\u1EEF tr\xEAn n\u1EC1n surface.</p>
      @for (row of statusRows; track row.name) {
        <ng-container [ngTemplateOutlet]="roleRow" [ngTemplateOutletContext]="{ $implicit: row }" />
      }
    </section>

    <!-- Categorical / Tag \u2014 b\u1ED9 vai tr\xF2 -->
    <section class="sg-group">
      <h2 class="sg-group-h">Categorical \u2014 Nh\xE3n / Chart / L\u1ECBch</h2>
      <p class="grp-note">10 hue ph\xE2n lo\u1EA1i (C\xD3 legend). Component Tag d\xF9ng b\u1EA3ng n\xE0y. N\u1EC1n/Vi\u1EC1n = alpha b\xE1m n\u1EC1n; Ch\u1EEF t\u1EF1 \u0111\u1EA3o theo theme (\u0111\u1EC1u AAA).</p>
      @for (row of tagRows; track row.name) {
        <ng-container [ngTemplateOutlet]="roleRow" [ngTemplateOutletContext]="{ $implicit: row }" />
      }
    </section>

    <!-- Data-viz -->
    <section class="sg-group">
      <h2 class="sg-group-h">Data-viz \u2014 Bi\u1EC3u \u0111\u1ED3</h2>
      <p class="grp-note">Categorical = th\u1EE9 t\u1EF1 c\u1ED1 \u0111\u1ECBnh ch\u1ED1ng tr\xF9ng series. Sequential = thang 5 b\u1EADc cho heatmap/m\u1EADt \u0111\u1ED9.</p>
      <div class="ramp">
        <div class="ramp-name">Categorical</div>
        <div class="ramp-steps">
          @for (s of datavizCat; track s.var) {
            <div class="ramp-step" [title]="s.var + ' \xB7 ' + resolved()[s.var]">
              <div class="ramp-chip" [style.background]="'var(' + s.var + ')'"></div>
              <div class="ramp-l">{{ s.label }}</div>
            </div>
          }
        </div>
      </div>
      @for (r of datavizSeq; track r.name) {
        <div class="ramp">
          <div class="ramp-name">{{ r.name }}</div>
          <div class="ramp-steps seq">
            @for (s of r.steps; track s.var) {
              <div class="ramp-step" [title]="s.var + ' \xB7 ' + resolved()[s.var]">
                <div class="ramp-chip" [style.background]="'var(' + s.var + ')'"></div>
                <div class="ramp-l">{{ s.label }}</div>
              </div>
            }
          </div>
        </div>
      }
    </section>

    <!-- Utility -->
    <ng-container [ngTemplateOutlet]="cardGroup" [ngTemplateOutletContext]="{ $implicit: utility }" />

    <!-- ===== reusable templates ===== -->
    <ng-template #cardGroup let-g>
      <section class="sg-group">
        <h2 class="sg-group-h">{{ g.label }}</h2>
        @if (g.note) { <p class="grp-note">{{ g.note }}</p> }
        <div class="sg-grid">
          @for (t of g.items; track t.var) {
            <div class="sg-card">
              <div class="swatch" [style.background]="'var(' + t.var + ')'"></div>
              <div class="sg-card-body">
                <div class="sg-card-label">{{ t.label }}</div>
                <div class="sg-card-val">{{ resolved()[t.var] }}</div>
                @if (g.contrastVs && cr()[t.var]) {
                  <span class="cr" [attr.data-g]="cr()[t.var]!.g">{{ cr()[t.var]!.v }} \xB7 {{ cr()[t.var]!.g }}</span>
                }
              </div>
            </div>
          }
        </div>
      </section>
    </ng-template>

    <ng-template #roleRow let-row>
      <div class="role-row">
        <div class="role-name">{{ row.name }}</div>
        <div class="role-sws">
          @for (sw of row.swatches; track sw.var) {
            <div class="role-sw" [title]="sw.var + ' \xB7 ' + resolved()[sw.var]">
              <div class="role-chip" [style.background]="'var(' + sw.var + ')'"></div>
              <div class="role-tag">{{ sw.role }}</div>
              @if (sw.contrast && cr()[sw.var]) {
                <span class="cr" [attr.data-g]="cr()[sw.var]!.g">{{ cr()[sw.var]!.g }}</span>
              }
            </div>
          }
        </div>
      </div>
    </ng-template>
  `, styles: ['/* apps/ds-demo/src/app/features/styleguide/sg-page.css */\n.sg-h {\n  font-size: var(--fs-24);\n  font-weight: 600;\n  color: var(--text-strong);\n  margin: 0 0 6px;\n}\n.sg-desc {\n  font-size: var(--fs-14);\n  color: var(--text-sub);\n  margin: 0 0 28px;\n  max-width: 720px;\n  line-height: 20px;\n}\n.sg-group {\n  margin-bottom: 32px;\n}\n.sg-group-h {\n  font-size: var(--fs-12);\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--text-soft);\n  margin: 0 0 12px;\n}\n.sg-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n  gap: 12px;\n}\n.sg-card {\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-xl);\n  overflow: hidden;\n  background: var(--bg-surface);\n}\n.sg-card-body {\n  padding: 8px 10px;\n}\n.sg-card-label {\n  font-size: var(--fs-13);\n  font-weight: 500;\n  color: var(--text-strong);\n  font-feature-settings: "tnum";\n}\n.sg-card-val {\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n  font-variant-numeric: tabular-nums;\n  word-break: break-all;\n}\n.cluster {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  align-items: center;\n}\n.stack {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.grid2 {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(220px, 1fr));\n  gap: 16px;\n}\n.grid3 {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n  gap: 16px;\n}\n.demo-box {\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-xl);\n  background: var(--bg-surface);\n  padding: 20px;\n}\n.demo-note {\n  font-size: var(--fs-12);\n  color: var(--text-soft);\n  margin-top: 8px;\n}\n/*# sourceMappingURL=sg-page.css.map */\n', "/* angular:styles/component:css;8837308f1dc2fb3a78485a3c24ac803a7f45ba961fc52d00d5c81b51a4bfdb4d;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/colors.ts */\n.swatch {\n  height: 64px;\n  border-bottom: 1px solid var(--border-sub);\n}\n.grp-note {\n  margin: -4px 0 16px;\n  color: var(--text-sub);\n  font-size: var(--fs-13);\n  max-width: 74ch;\n  line-height: 1.5;\n}\n.grp-note b {\n  color: var(--text-body);\n  font-weight: 600;\n}\n.tier {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin: 40px 0 20px;\n  padding-bottom: 14px;\n  border-bottom: 2px solid var(--border-strong);\n}\n.tier:first-of-type {\n  margin-top: 8px;\n}\n.tier-n {\n  font-size: var(--fs-13);\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  color: var(--text-on-primary);\n  background: var(--primary-base);\n  border-radius: var(--radius-full);\n  width: 34px;\n  height: 34px;\n  display: grid;\n  place-items: center;\n  flex: none;\n}\n.tier-h {\n  font-size: var(--fs-18);\n  font-weight: 600;\n  color: var(--text-strong);\n}\n.tier-d {\n  font-size: var(--fs-13);\n  color: var(--text-sub);\n  margin-top: 2px;\n  max-width: 76ch;\n}\n.ramp {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.ramp-name {\n  width: 92px;\n  flex: none;\n  font-size: var(--fs-13);\n  font-weight: 600;\n  color: var(--text-body);\n  padding-top: 6px;\n}\n.ramp-name small {\n  display: block;\n  font-weight: 400;\n  color: var(--text-soft);\n  font-size: var(--fs-11);\n}\n.ramp-steps {\n  display: flex;\n  flex: 1;\n  min-width: 280px;\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  box-shadow: inset 0 0 0 1px var(--border-sub);\n}\n.ramp-steps.seq {\n  max-width: 420px;\n}\n.ramp-step {\n  flex: 1;\n}\n.ramp-chip {\n  height: 44px;\n}\n.ramp-l {\n  font-size: var(--fs-10);\n  text-align: center;\n  color: var(--text-soft);\n  padding: 3px 0;\n  font-variant-numeric: tabular-nums;\n}\n.role-row {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 10px 0;\n  border-bottom: 1px solid var(--border-soft);\n  flex-wrap: wrap;\n}\n.role-name {\n  width: 168px;\n  flex: none;\n  font-size: var(--fs-13);\n  font-weight: 600;\n  color: var(--text-strong);\n  text-transform: capitalize;\n}\n.role-sws {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.role-sw {\n  width: 76px;\n  text-align: center;\n}\n.role-chip {\n  height: 40px;\n  border-radius: var(--radius-sm);\n  box-shadow: inset 0 0 0 1px var(--border-sub);\n}\n.role-tag {\n  font-size: var(--fs-11);\n  color: var(--text-sub);\n  margin-top: 4px;\n}\n.cr {\n  display: inline-block;\n  margin-top: 3px;\n  padding: 1px 6px;\n  border-radius: var(--radius-full);\n  font-size: var(--fs-10);\n  font-weight: 700;\n  font-variant-numeric: tabular-nums;\n  background: var(--bg-surface-subtle);\n  color: var(--text-sub);\n}\n.cr[data-g=AAA],\n.cr[data-g=AA] {\n  background: var(--success-muted-light);\n  color: var(--success-dark);\n}\n.cr[data-g=AA-L] {\n  background: var(--warning-muted-light);\n  color: var(--warning-dark);\n}\n.cr[data-g=FAIL] {\n  background: var(--error-muted-light);\n  color: var(--error-dark);\n}\n/*# sourceMappingURL=colors.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgColors, { className: "SgColors", filePath: "apps/ds-demo/src/app/features/styleguide/pages/colors.ts", lineNumber: 234 });
})();
export {
  SgColors
};
//# sourceMappingURL=chunk-233K6MAU.js.map
