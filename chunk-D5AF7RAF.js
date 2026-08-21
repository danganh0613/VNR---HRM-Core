import {
  HrmProgressCell
} from "./chunk-JKQTIUU3.js";
import {
  HrmFileCell
} from "./chunk-I5EGM5OV.js";
import {
  HrmApprovalFlow
} from "./chunk-74FNUKEN.js";
import {
  HRM_WORKFLOW_ACTIONS,
  HrmStatusCell
} from "./chunk-6PIPPRJM.js";
import {
  HrmUserCell
} from "./chunk-QLXCS5IB.js";
import {
  NzDropDownModule,
  NzDropdownDirective,
  NzDropdownMenuComponent
} from "./chunk-KGPHHG27.js";
import {
  HrmTag
} from "./chunk-VPGGL6TV.js";
import {
  NzMenuDirective,
  NzMenuItemComponent,
  NzMenuModule
} from "./chunk-LIWX2G7Z.js";
import {
  HrmButton
} from "./chunk-Z7JSW4RV.js";
import {
  Check,
  DotsVertical,
  Download,
  Edit,
  Paperclip,
  TablerIconComponent
} from "./chunk-QL2Z65KF.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-B7ZDCASH.js";
import {
  Component,
  ElementRef,
  Input,
  Output,
  ViewChild,
  ViewChildren,
  __spreadProps,
  __spreadValues,
  afterEveryRender,
  computed,
  effect,
  input,
  output,
  setClassMetadata,
  signal,
  viewChild,
  viewChildren,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuerySignal
} from "./chunk-X3WVFRKD.js";

// apps/ds-demo/src/app/features/styleguide/pages/hrm/template/_people.ts
var STAGES = {
  todo: { label: "Ch\u1EDD nh\u1EADn vi\u1EC7c", hue: "gray" },
  doing: { label: "\u0110ang th\u1EED vi\u1EC7c", hue: "blue" },
  done: { label: "Ch\xEDnh th\u1EE9c", hue: "green" }
};
var PEOPLE = [
  { id: 1, name: "Nguy\u1EC5n V\u0103n A", email: "a.nguyen@vnr.vn", dept: "Ph\xF2ng Kinh doanh", manager: "Tr\u1EA7n Minh Qu\xE2n", role: "docs.enterpriseGrid.roleManager", tenure: "docs.enterpriseGrid.tenure1", status: "active", stage: "doing", start: "2026-07-08", end: "2026-07-15", progress: 60 },
  { id: 2, name: "Tr\u1EA7n Th\u1ECB B", email: "b.tran@vnr.vn", dept: "Ph\xF2ng K\u1EBF to\xE1n", manager: "L\xEA Th\u1ECB Thu H\u01B0\u01A1ng", role: "docs.enterpriseGrid.roleSpecialist", tenure: "docs.enterpriseGrid.tenure2", status: "active", stage: "todo", start: "2026-07-12", end: "2026-07-18", progress: 0 },
  { id: 3, name: "L\xEA V\u0103n C", email: "c.le@vnr.vn", dept: "Ph\xF2ng K\u1EF9 thu\u1EADt", manager: "Nguy\u1EC5n Thanh H\xE0", role: "docs.enterpriseGrid.roleIntern", tenure: "docs.enterpriseGrid.tenure3", status: "absent", stage: "done", start: "2026-07-05", end: "2026-07-10", progress: 100 },
  { id: 4, name: "Ph\u1EA1m Thu D", email: "d.pham@vnr.vn", dept: "Ph\xF2ng Kinh doanh", manager: "Tr\u1EA7n Minh Qu\xE2n", role: "docs.enterpriseGrid.roleLead", tenure: "docs.enterpriseGrid.tenure4", status: "active", stage: "doing", start: "2026-07-10", end: "2026-07-20", progress: 40 },
  { id: 5, name: "\u0110\u1ED7 Minh E", email: "e.do@vnr.vn", dept: "Ph\xF2ng Ch\u0103m s\xF3c KH", manager: "Ph\u1EA1m Ho\xE0ng Nam", role: "docs.enterpriseGrid.roleStaff", tenure: "docs.enterpriseGrid.tenure5", status: "active", stage: "todo", start: "2026-07-14", end: "2026-07-22", progress: 10 },
  { id: 6, name: "V\u0169 H\u1EA3i F", email: "f.vu@vnr.vn", dept: "Ph\xF2ng K\u1EF9 thu\u1EADt", manager: "Nguy\u1EC5n Thanh H\xE0", role: "docs.enterpriseGrid.roleLead", tenure: "docs.enterpriseGrid.tenure6", status: "absent", stage: "done", start: "2026-07-06", end: "2026-07-12", progress: 100 }
];
function fmtDM(v) {
  const d = new Date(String(v ?? ""));
  return isNaN(d.getTime()) ? "" : `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}`;
}
function fmtDMY(v) {
  const d = new Date(String(v ?? ""));
  return isNaN(d.getTime()) ? "" : `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}/${d.getFullYear()}`;
}
function fmtHMDMY(v, hm) {
  const dmy = fmtDMY(v);
  return dmy ? `${hm} ${dmy}` : hm;
}
function empHist(r) {
  const out = [{ time: `${fmtDM(r["start"])} 08:30`, text: "T\u1EA1o h\u1ED3 s\u01A1 nh\xE2n vi\xEAn", on: false }];
  if (r["stage"] === "todo") {
    out.push({ time: fmtDM(r["start"]), text: "Ch\u1EDD nh\u1EADn vi\u1EC7c", on: true });
    return out;
  }
  out.push({ time: `${fmtDM(r["start"])} 09:00`, text: "B\u1EAFt \u0111\u1EA7u th\u1EED vi\u1EC7c", on: r["stage"] === "doing" });
  if (r["stage"] === "done")
    out.push({ time: `${fmtDM(r["end"])} 17:00`, text: "Chuy\u1EC3n ch\xEDnh th\u1EE9c", on: true });
  return out;
}

// libs/hrm-ui/src/lib/data-display/hrm-comment-thread.ts
function HrmCommentThread_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "hrm-tag", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("color", c_r1.roleHue || "gray");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r1.roleLabel);
  }
}
function HrmCommentThread_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r1.time);
  }
}
function HrmCommentThread_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 7);
    \u0275\u0275element(2, "hrm-user-cell", 8);
    \u0275\u0275conditionalCreate(3, HrmCommentThread_For_2_Conditional_3_Template, 2, 2, "hrm-tag", 9);
    \u0275\u0275element(4, "span", 10);
    \u0275\u0275conditionalCreate(5, HrmCommentThread_For_2_Conditional_5_Template, 2, 1, "span", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 12);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("name", c_r1.author)("colorful", true)("avatarSize", 28);
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r1.roleLabel ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(c_r1.time ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r1.text);
  }
}
var HrmCommentThread = class _HrmCommentThread {
  constructor() {
    this.comments = input([], ...ngDevMode ? [{ debugName: "comments" }] : (
      /* istanbul ignore next */
      []
    ));
    this.placeholder = input("", ...ngDevMode ? [{ debugName: "placeholder" }] : (
      /* istanbul ignore next */
      []
    ));
    this.sendLabel = input("", ...ngDevMode ? [{ debugName: "sendLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.attachLabel = input("", ...ngDevMode ? [{ debugName: "attachLabel" }] : (
      /* istanbul ignore next */
      []
    ));
    this.send = output();
    this.attach = output();
    this.draft = signal("", ...ngDevMode ? [{ debugName: "draft" }] : (
      /* istanbul ignore next */
      []
    ));
    this.icClip = Paperclip;
  }
  submit() {
    const t = this.draft().trim();
    if (!t)
      return;
    this.send.emit(t);
    this.draft.set("");
  }
  static {
    this.\u0275fac = function HrmCommentThread_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmCommentThread)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmCommentThread, selectors: [["hrm-comment-thread"]], hostAttrs: [1, "hrm-comment-thread"], inputs: { comments: [1, "comments"], placeholder: [1, "placeholder"], sendLabel: [1, "sendLabel"], attachLabel: [1, "attachLabel"] }, outputs: { send: "send", attach: "attach" }, decls: 9, vars: 7, consts: [[1, "ct"], [1, "ct-item"], [1, "ct-input"], [1, "ct-field", 3, "input", "keydown.enter", "value", "placeholder"], ["type", "button", 1, "ct-attach", 3, "click"], [3, "icon", "size"], ["variant", "primary", 3, "click", "disabled"], [1, "ct-head"], [3, "name", "colorful", "avatarSize"], ["variant", "light", "size", "sm", 3, "color"], [1, "ct-spacer"], [1, "ct-time"], [1, "ct-bubble"]], template: function HrmCommentThread_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275repeaterCreate(1, HrmCommentThread_For_2_Template, 8, 6, "div", 1, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementStart(3, "div", 2)(4, "input", 3);
        \u0275\u0275listener("input", function HrmCommentThread_Template_input_input_4_listener($event) {
          return ctx.draft.set($event.target.value);
        })("keydown.enter", function HrmCommentThread_Template_input_keydown_enter_4_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "button", 4);
        \u0275\u0275listener("click", function HrmCommentThread_Template_button_click_5_listener() {
          return ctx.attach.emit();
        });
        \u0275\u0275element(6, "tabler-icon", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "hrm-button", 6);
        \u0275\u0275listener("click", function HrmCommentThread_Template_hrm_button_click_7_listener() {
          return ctx.submit();
        });
        \u0275\u0275text(8);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.comments());
        \u0275\u0275advance(3);
        \u0275\u0275property("value", ctx.draft())("placeholder", ctx.placeholder());
        \u0275\u0275advance();
        \u0275\u0275attribute("aria-label", ctx.attachLabel() || null);
        \u0275\u0275advance();
        \u0275\u0275property("icon", ctx.icClip)("size", 16);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", !ctx.draft().trim());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.sendLabel());
      }
    }, dependencies: [TablerIconComponent, HrmButton, HrmTag, HrmUserCell], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.ct[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.ct-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.ct-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  min-width: 0;\n}\n.ct-spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.ct-time[_ngcontent-%COMP%] {\n  flex: none;\n  font-size: var(--fs-12);\n  color: var(--text-soft);\n  font-variant-numeric: tabular-nums;\n}\n.ct-bubble[_ngcontent-%COMP%] {\n  margin-left: 36px;\n  padding: 8px 12px;\n  border-radius: var(--radius-md);\n  background: var(--bg-surface-subtle);\n  font-size: var(--fs-13);\n  line-height: 1.55;\n  color: var(--text-body);\n  white-space: pre-line;\n  overflow-wrap: anywhere;\n}\n.ct-input[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 2px;\n}\n.ct-field[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  height: 32px;\n  padding: 0 10px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-md);\n  background: var(--bg-surface);\n  color: var(--text-body);\n  font: inherit;\n  font-size: var(--fs-13);\n  outline: none;\n  transition: border-color var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.ct-field[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-soft);\n}\n.ct-field[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary-base);\n}\n.ct-attach[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 32px;\n  height: 32px;\n  flex: none;\n  border: 1px solid var(--border-sub);\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  color: var(--icon-secondary);\n}\n.ct-attach[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-base);\n  color: var(--icon-primary);\n}\n/*# sourceMappingURL=hrm-comment-thread.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmCommentThread, [{
    type: Component,
    args: [{ selector: "hrm-comment-thread", imports: [TablerIconComponent, HrmButton, HrmTag, HrmUserCell], template: `
    <div class="ct">
      @for (c of comments(); track $index) {
        <div class="ct-item">
          <div class="ct-head">
            <hrm-user-cell [name]="c.author" [colorful]="true" [avatarSize]="28" />
            @if (c.roleLabel) {
              <hrm-tag [color]="$any(c.roleHue || 'gray')" variant="light" size="sm">{{ c.roleLabel }}</hrm-tag>
            }
            <span class="ct-spacer"></span>
            @if (c.time) { <span class="ct-time">{{ c.time }}</span> }
          </div>
          <div class="ct-bubble">{{ c.text }}</div>
        </div>
      }

      <div class="ct-input">
        <input class="ct-field" [value]="draft()" (input)="draft.set($any($event.target).value)"
          (keydown.enter)="submit()" [placeholder]="placeholder()" />
        <button type="button" class="ct-attach" [attr.aria-label]="attachLabel() || null" (click)="attach.emit()">
          <tabler-icon [icon]="icClip" [size]="16" />
        </button>
        <hrm-button variant="primary" [disabled]="!draft().trim()" (click)="submit()">{{ sendLabel() }}</hrm-button>
      </div>
    </div>
  `, host: { class: "hrm-comment-thread" }, styles: ["/* angular:styles/component:css;6c92ad70ba9e7f9706419c5373bd65ad4b6534a38f62a441c709e8af5a1fb1a5;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/libs/hrm-ui/src/lib/data-display/hrm-comment-thread.ts */\n:host {\n  display: block;\n}\n.ct {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.ct-item {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.ct-head {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  min-width: 0;\n}\n.ct-spacer {\n  flex: 1;\n}\n.ct-time {\n  flex: none;\n  font-size: var(--fs-12);\n  color: var(--text-soft);\n  font-variant-numeric: tabular-nums;\n}\n.ct-bubble {\n  margin-left: 36px;\n  padding: 8px 12px;\n  border-radius: var(--radius-md);\n  background: var(--bg-surface-subtle);\n  font-size: var(--fs-13);\n  line-height: 1.55;\n  color: var(--text-body);\n  white-space: pre-line;\n  overflow-wrap: anywhere;\n}\n.ct-input {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 2px;\n}\n.ct-field {\n  flex: 1;\n  min-width: 0;\n  height: 32px;\n  padding: 0 10px;\n  border: 1px solid var(--border-sub);\n  border-radius: var(--radius-md);\n  background: var(--bg-surface);\n  color: var(--text-body);\n  font: inherit;\n  font-size: var(--fs-13);\n  outline: none;\n  transition: border-color var(--duration-fast, .15s) var(--ease-out, ease);\n}\n.ct-field::placeholder {\n  color: var(--text-soft);\n}\n.ct-field:focus {\n  border-color: var(--primary-base);\n}\n.ct-attach {\n  display: grid;\n  place-items: center;\n  width: 32px;\n  height: 32px;\n  flex: none;\n  border: 1px solid var(--border-sub);\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  color: var(--icon-secondary);\n}\n.ct-attach:hover {\n  border-color: var(--primary-base);\n  color: var(--icon-primary);\n}\n/*# sourceMappingURL=hrm-comment-thread.css.map */\n"] }]
  }], null, { comments: [{ type: Input, args: [{ isSignal: true, alias: "comments", required: false }] }], placeholder: [{ type: Input, args: [{ isSignal: true, alias: "placeholder", required: false }] }], sendLabel: [{ type: Input, args: [{ isSignal: true, alias: "sendLabel", required: false }] }], attachLabel: [{ type: Input, args: [{ isSignal: true, alias: "attachLabel", required: false }] }], send: [{ type: Output, args: ["send"] }], attach: [{ type: Output, args: ["attach"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmCommentThread, { className: "HrmCommentThread", filePath: "libs/hrm-ui/src/lib/data-display/hrm-comment-thread.ts", lineNumber: 89 });
})();

// apps/ds-demo/src/app/features/styleguide/pages/hrm/template/emp-detail-card.ts
var _c0 = ["actbar"];
var _c1 = ["actbtn"];
var _forTrack0 = ($index, $item) => $item.text;
var _forTrack1 = ($index, $item) => $item.key;
function SgEmpDetail_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "hrm-status", 6);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("preset", ctx_r1.wfStatus())("dot", true);
  }
}
function SgEmpDetail_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "hrm-tag", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r3 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("color", ctx_r1.stageHue(r_r3));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.stageLabel(r_r3));
  }
}
function SgEmpDetail_Conditional_0_Conditional_5_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "hrm-button", 23, 1);
    \u0275\u0275listener("click", function SgEmpDetail_Conditional_0_Conditional_5_For_3_Template_hrm_button_click_0_listener() {
      const a_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.run(a_r5));
    });
    \u0275\u0275element(2, "tabler-icon", 18);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r5 = ctx.$implicit;
    const \u0275$index_18_r6 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("variant", a_r5.tone === "neutral" ? "default" : "primary")("hidden", \u0275$index_18_r6 >= ctx_r1.visibleCount());
    \u0275\u0275attribute("data-tone", a_r5.tone);
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", a_r5.icon)("size", 15);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", a_r5.label, " ");
  }
}
function SgEmpDetail_Conditional_0_Conditional_5_Conditional_4_For_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 27);
    \u0275\u0275listener("click", function SgEmpDetail_Conditional_0_Conditional_5_Conditional_4_For_6_Conditional_0_Template_li_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const a_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.run(a_r8));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("pk-mi-danger", a_r8.danger);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r8.label);
  }
}
function SgEmpDetail_Conditional_0_Conditional_5_Conditional_4_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, SgEmpDetail_Conditional_0_Conditional_5_Conditional_4_For_6_Conditional_0_Template, 2, 3, "li", 26);
  }
  if (rf & 2) {
    const \u0275$index_33_r9 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275conditional(\u0275$index_33_r9 >= ctx_r1.visibleCount() ? 0 : -1);
  }
}
function SgEmpDetail_Conditional_0_Conditional_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275element(1, "tabler-icon", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "nz-dropdown-menu", null, 2)(4, "ul", 25);
    \u0275\u0275repeaterCreate(5, SgEmpDetail_Conditional_0_Conditional_5_Conditional_4_For_6_Template, 1, 1, null, null, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const moreMenu_r10 = \u0275\u0275reference(3);
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("nzDropdownMenu", moreMenu_r10);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r1.more)("size", 16);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.actions());
  }
}
function SgEmpDetail_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8, 0);
    \u0275\u0275repeaterCreate(2, SgEmpDetail_Conditional_0_Conditional_5_For_3_Template, 4, 6, "hrm-button", 22, _forTrack1);
    \u0275\u0275conditionalCreate(4, SgEmpDetail_Conditional_0_Conditional_5_Conditional_4_Template, 7, 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.actions());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.visibleCount() < ctx_r1.actions().length ? 4 : -1);
  }
}
function SgEmpDetail_Conditional_0_For_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 30);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const h_r11 = ctx.$implicit;
    \u0275\u0275classProp("is-on", h_r11.on);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(h_r11.time);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(h_r11.text);
  }
}
function SgEmpDetail_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4);
    \u0275\u0275element(2, "hrm-user-cell", 5);
    \u0275\u0275conditionalCreate(3, SgEmpDetail_Conditional_0_Conditional_3_Template, 1, 2, "hrm-status", 6)(4, SgEmpDetail_Conditional_0_Conditional_4_Template, 2, 2, "hrm-tag", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, SgEmpDetail_Conditional_0_Conditional_5_Template, 5, 1, "div", 8);
    \u0275\u0275elementStart(6, "section", 9)(7, "h4", 10);
    \u0275\u0275text(8, "Th\xF4ng tin nh\xE2n vi\xEAn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "dl", 11)(10, "dt");
    \u0275\u0275text(11, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "dd");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "dt");
    \u0275\u0275text(15, "Ch\u1EE9c v\u1EE5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "dd");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "dt");
    \u0275\u0275text(20, "Ph\xF2ng ban");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "dd");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "dt");
    \u0275\u0275text(24, "Th\xE2m ni\xEAn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "dd");
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "dt");
    \u0275\u0275text(29, "Qu\u1EA3n l\xFD tr\u1EF1c ti\u1EBFp");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "dd");
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "dt");
    \u0275\u0275text(33, "Chuy\xEAn c\u1EA7n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "dd");
    \u0275\u0275element(35, "hrm-status-cell", 12);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "section", 9)(38, "h4", 10);
    \u0275\u0275text(39, "Qu\xE1 tr\xECnh th\u1EED vi\u1EC7c");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "dl", 11)(41, "dt");
    \u0275\u0275text(42, "K\u1EF3 th\u1EED vi\u1EC7c");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "dd");
    \u0275\u0275text(44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "dt");
    \u0275\u0275text(46, "Ti\u1EBFn \u0111\u1ED9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "dd");
    \u0275\u0275element(48, "hrm-progress-cell", 13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "section", 9)(50, "h4", 10);
    \u0275\u0275text(51, "Quy tr\xECnh ph\xEA duy\u1EC7t");
    \u0275\u0275elementEnd();
    \u0275\u0275element(52, "hrm-approval-flow", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "section", 9)(54, "h4", 10);
    \u0275\u0275text(55, "T\u1EC7p \u0111\xEDnh k\xE8m");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 15);
    \u0275\u0275element(57, "hrm-file-cell", 16);
    \u0275\u0275elementStart(58, "button", 17);
    \u0275\u0275element(59, "tabler-icon", 18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(60, "section", 9)(61, "h4", 10);
    \u0275\u0275text(62, "L\u1ECBch s\u1EED");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "div", 19);
    \u0275\u0275repeaterCreate(64, SgEmpDetail_Conditional_0_For_65_Template, 5, 4, "div", 20, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "section", 9)(67, "h4", 10);
    \u0275\u0275text(68, "B\xECnh lu\u1EADn & Trao \u0111\u1ED5i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "hrm-comment-thread", 21);
    \u0275\u0275listener("send", function SgEmpDetail_Conditional_0_Template_hrm_comment_thread_send_69_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSend($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r3 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("name", r_r3["name"])("sub", "NV-000" + r_r3["id"] + " \xB7 " + r_r3["dept"])("colorful", true)("avatarSize", 44);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.wfStatus() ? 3 : 4);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.showActionBar() ? 5 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(r_r3["email"]);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 23, r_r3["role"]));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(r_r3["dept"]);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 25, r_r3["tenure"]));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(r_r3["manager"]);
    \u0275\u0275advance(4);
    \u0275\u0275property("status", r_r3["status"] === "active" ? "success" : "error")("label", \u0275\u0275pipeBind1(36, 27, r_r3["status"] === "active" ? "docs.enterpriseGrid.statusActive" : "docs.enterpriseGrid.statusAbsent"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate2("", ctx_r1.fmt(r_r3["start"]), " \u2192 ", ctx_r1.fmt(r_r3["end"]));
    \u0275\u0275advance(4);
    \u0275\u0275property("value", r_r3["progress"])("color", r_r3["stage"] === "done" ? "green" : "primary");
    \u0275\u0275advance(4);
    \u0275\u0275property("steps", ctx_r1.approvalSteps(r_r3))("collapsedCount", 4);
    \u0275\u0275advance(5);
    \u0275\u0275property("name", "ho-so-NV-000" + r_r3["id"] + ".pdf");
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r1.download)("size", 16);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.hist(r_r3));
    \u0275\u0275advance(5);
    \u0275\u0275property("comments", ctx_r1.allComments());
  }
}
var SgEmpDetail = class _SgEmpDetail {
  /** Thực hiện hành động — quy trình thì phát ra ngoài; bản ghi để demo (no-op). */
  run(a) {
    if (a.kind === "wf")
      this.wfAction.emit(a.key.slice(3));
  }
  constructor() {
    this.emp = input(null, ...ngDevMode ? [{ debugName: "emp" }] : (
      /* istanbul ignore next */
      []
    ));
    this.wfStatus = input(null, ...ngDevMode ? [{ debugName: "wfStatus" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pageMode = input(false, ...ngDevMode ? [{ debugName: "pageMode" }] : (
      /* istanbul ignore next */
      []
    ));
    this.surfaceMode = input("", ...ngDevMode ? [{ debugName: "surfaceMode" }] : (
      /* istanbul ignore next */
      []
    ));
    this.showActionBar = computed(() => {
      const m = this.surfaceMode();
      return !this.pageMode() && m !== "center" && m !== "master" && m !== "side";
    }, ...ngDevMode ? [{ debugName: "showActionBar" }] : (
      /* istanbul ignore next */
      []
    ));
    this.wfAction = output();
    this.bar = viewChild("actbar", ...ngDevMode ? [{ debugName: "bar" }] : (
      /* istanbul ignore next */
      []
    ));
    this.btns = viewChildren("actbtn", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "btns" } : (
      /* istanbul ignore next */
      {}
    )), { read: ElementRef }));
    this.visibleCount = signal(99, ...ngDevMode ? [{ debugName: "visibleCount" }] : (
      /* istanbul ignore next */
      []
    ));
    this.widths = [];
    this.actions = computed(() => {
      const wf = this.wfStatus();
      const wfActs = wf ? HRM_WORKFLOW_ACTIONS[wf].map((a) => ({
        key: "wf:" + a.key,
        label: a.vi,
        tone: a.tone,
        icon: a.icon,
        kind: "wf"
      })) : [];
      return [
        ...wfActs,
        { key: "approveOfficial", label: "Duy\u1EC7t ch\xEDnh th\u1EE9c", tone: "primary", icon: this.check, kind: "detail" },
        { key: "editProfile", label: "S\u1EEDa h\u1ED3 s\u01A1", tone: "neutral", icon: this.edit, kind: "detail" }
      ];
    }, ...ngDevMode ? [{ debugName: "actions" }] : (
      /* istanbul ignore next */
      []
    ));
    this.extra = signal([], ...ngDevMode ? [{ debugName: "extra" }] : (
      /* istanbul ignore next */
      []
    ));
    this.allComments = computed(() => {
      const r = this.emp();
      if (!r)
        return this.extra();
      const st = String(r["stage"]);
      const out = [{
        author: String(r["name"]),
        roleLabel: "Ng\u01B0\u1EDDi t\u1EA1o",
        roleHue: "gray",
        time: `${fmtDM(r["start"])} 09:20`,
        text: "Em \u0111\xE3 n\u1ED9p \u0111\u1EE7 h\u1ED3 s\u01A1 v\xE0 b\xE0n giao \u0111\u1EA7u vi\u1EC7c theo h\u01B0\u1EDBng d\u1EABn. Anh/ch\u1ECB xem x\xE9t gi\xFAp em \u1EA1."
      }];
      if (st !== "todo") {
        out.push({
          author: String(r["manager"]),
          roleLabel: "Qu\u1EA3n l\xFD tr\u1EF1c ti\u1EBFp",
          roleHue: "gray",
          time: `${fmtDM(r["start"])} 10:05`,
          text: "Anh \u0111\xE3 nh\u1EADn h\u1ED3 s\u01A1. S\u1EBD theo d\xF5i v\xE0 \u0111\xE1nh gi\xE1 v\xE0o cu\u1ED1i k\u1EF3 th\u1EED vi\u1EC7c."
        });
      }
      if (st === "done") {
        out.push({
          author: this.nsOf(r),
          roleLabel: "Nh\xE2n s\u1EF1",
          roleHue: "gray",
          time: `${fmtDM(r["end"])} 14:05`,
          text: "H\u1ED3 s\u01A1 \u0111\xE3 \u0111\u01B0\u1EE3c duy\u1EC7t \u0111\u1EE7 c\xE1c c\u1EA5p. \u0110\xE3 chuy\u1EC3n tr\u1EA1ng th\xE1i Ch\xEDnh th\u1EE9c."
        });
      }
      return [...out, ...this.extra()];
    }, ...ngDevMode ? [{ debugName: "allComments" }] : (
      /* istanbul ignore next */
      []
    ));
    this.check = Check;
    this.edit = Edit;
    this.more = DotsVertical;
    this.download = Download;
    this.fmt = fmtDM;
    this.hist = empHist;
    effect(() => {
      this.emp();
      this.extra.set([]);
    });
    effect(() => {
      this.actions();
      this.widths = [];
      this.visibleCount.set(99);
    });
    afterEveryRender(() => this.recompute());
  }
  /** Đo bề rộng nút hiện + so với bề rộng thanh → set số nút hiển thị; phần dư vào ⋮. */
  recompute() {
    const bar = this.bar()?.nativeElement;
    const btns = this.btns();
    if (!bar || !btns.length)
      return;
    btns.forEach((b, i) => {
      const w = b.nativeElement.offsetWidth;
      if (w > 0)
        this.widths[i] = w;
    });
    const n = this.actions().length;
    const gap = 8, moreW = 34;
    const avail = bar.clientWidth;
    const full = this.widths.slice(0, n).reduce((s, w, i) => s + (w || 0) + (i ? gap : 0), 0);
    let count;
    if (full <= avail) {
      count = n;
    } else {
      let used = 0;
      count = 0;
      for (let i = 0; i < n; i++) {
        const w = (this.widths[i] || 0) + (i ? gap : 0);
        if (used + w + gap + moreW > avail)
          break;
        used += w;
        count++;
      }
      count = Math.max(1, count);
    }
    this.visibleCount.set(count);
  }
  /** Người duyệt cấp 2 (GĐ khối) / cấp 3 (Nhân sự) — ĐỘNG theo bản ghi: nếu QLTT của
   *  nhân viên trùng người mặc định thì thay người khác — 1 người KHÔNG duyệt 2 cấp. */
  gdOf(r) {
    return r["manager"] === "Ph\u1EA1m Ho\xE0ng Nam" ? "\u0110\u1ED7 Quang Vinh" : "Ph\u1EA1m Ho\xE0ng Nam";
  }
  nsOf(r) {
    return r["manager"] === "L\xEA Th\u1ECB Thu H\u01B0\u01A1ng" ? "Nguy\u1EC5n Th\u1ECB Mai" : "L\xEA Th\u1ECB Thu H\u01B0\u01A1ng";
  }
  /** Quy trình duyệt theo mẫu chuẩn: Gửi yêu cầu (người tạo) → các cấp quản lý.
   *  Badge chỉ hiện khi có nghĩa: bước đang chờ = "Chờ duyệt", bước đã duyệt = "Đã duyệt";
   *  bước chưa tới KHÔNG badge. done = duyệt hết · doing = cấp 1 đang chờ · todo = tất cả chưa tới. */
  approvalSteps(r) {
    const st = String(r["stage"]);
    const gd = this.gdOf(r), ns = this.nsOf(r);
    const sent = {
      title: "G\u1EEDi y\xEAu c\u1EA7u",
      name: String(r["name"]),
      role: String(r["dept"]),
      state: "approved",
      time: fmtHMDMY(r["start"], "08:30")
    };
    if (st === "done") {
      return [
        sent,
        { title: "Qu\u1EA3n l\xFD c\u1EA5p 1", name: String(r["manager"]), role: "Qu\u1EA3n l\xFD tr\u1EF1c ti\u1EBFp", state: "approved", stateLabel: "\u0110\xE3 duy\u1EC7t", time: fmtHMDMY(r["end"], "09:15") },
        { title: "Qu\u1EA3n l\xFD c\u1EA5p 2", name: gd, role: "Gi\xE1m \u0111\u1ED1c kh\u1ED1i", state: "approved", stateLabel: "\u0110\xE3 duy\u1EC7t", time: fmtHMDMY(r["end"], "10:40") },
        { title: "Qu\u1EA3n l\xFD c\u1EA5p 3", name: ns, role: "Ph\xF2ng Nh\xE2n s\u1EF1", state: "approved", stateLabel: "\u0110\xE3 duy\u1EC7t", time: fmtHMDMY(r["end"], "14:00") },
        { title: "Qu\u1EA3n l\xFD c\u1EA5p 4", name: "\u0110\u1ED7 Quang Vinh", role: "Ph\xF3 T\u1ED5ng gi\xE1m \u0111\u1ED1c", state: "approved", stateLabel: "\u0110\xE3 duy\u1EC7t", time: fmtHMDMY(r["end"], "15:20") },
        { title: "Qu\u1EA3n l\xFD c\u1EA5p 5", name: "V\u0169 \u0110\xECnh Long", role: "T\u1ED5ng gi\xE1m \u0111\u1ED1c", state: "approved", stateLabel: "\u0110\xE3 duy\u1EC7t", time: fmtHMDMY(r["end"], "16:05") }
      ];
    }
    return [
      sent,
      {
        title: "Qu\u1EA3n l\xFD c\u1EA5p 1",
        name: String(r["manager"]),
        role: "Qu\u1EA3n l\xFD tr\u1EF1c ti\u1EBFp",
        state: "current",
        stateLabel: "Ch\u1EDD duy\u1EC7t"
      },
      { title: "Qu\u1EA3n l\xFD c\u1EA5p 2", name: gd, role: "Gi\xE1m \u0111\u1ED1c kh\u1ED1i", state: "waiting" },
      { title: "Qu\u1EA3n l\xFD c\u1EA5p 3", name: ns, role: "Ph\xF2ng Nh\xE2n s\u1EF1", state: "waiting" },
      { title: "Qu\u1EA3n l\xFD c\u1EA5p 4", name: "\u0110\u1ED7 Quang Vinh", role: "Ph\xF3 T\u1ED5ng gi\xE1m \u0111\u1ED1c", state: "waiting" },
      { title: "Qu\u1EA3n l\xFD c\u1EA5p 5", name: "V\u0169 \u0110\xECnh Long", role: "T\u1ED5ng gi\xE1m \u0111\u1ED1c", state: "waiting" }
    ];
  }
  onSend(text) {
    this.extra.update((list) => [...list, {
      author: "\u0110\u1EB7ng Anh",
      roleLabel: "Nh\xE2n s\u1EF1",
      roleHue: "gray",
      time: "V\u1EEBa xong",
      text
    }]);
  }
  stageLabel(r) {
    return STAGES[String(r["stage"])]?.label ?? "";
  }
  stageHue(r) {
    return STAGES[String(r["stage"])]?.hue ?? "gray";
  }
  static {
    this.\u0275fac = function SgEmpDetail_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgEmpDetail)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgEmpDetail, selectors: [["sg-emp-detail"]], viewQuery: function SgEmpDetail_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx.bar, _c0, 5)(ctx.btns, _c1, 5, ElementRef);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance(2);
      }
    }, hostAttrs: [1, "sg-emp-detail"], hostVars: 1, hostBindings: function SgEmpDetail_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("data-page-mode", ctx.pageMode() ? "" : null);
      }
    }, inputs: { emp: [1, "emp"], wfStatus: [1, "wfStatus"], pageMode: [1, "pageMode"], surfaceMode: [1, "surfaceMode"] }, outputs: { wfAction: "wfAction" }, decls: 1, vars: 1, consts: [["actbar", ""], ["actbtn", ""], ["moreMenu", "nzDropdownMenu"], [1, "pk"], [1, "pk-head2"], [3, "name", "sub", "colorful", "avatarSize"], ["variant", "badge", 3, "preset", "dot"], ["variant", "light", "size", "sm", 3, "color"], [1, "pk-actions"], [1, "pk-sec"], [1, "pk-h"], [1, "pk-list"], ["variant", "dot", 3, "status", "label"], [3, "value", "color"], ["moreLabel", "+2 ng\u01B0\u1EDDi ph\xEA duy\u1EC7t", "collapseLabel", "Thu g\u1ECDn", 3, "steps", "collapsedCount"], [1, "pk-file"], ["size", "512 KB", 3, "name"], ["type", "button", "aria-label", "T\u1EA3i xu\u1ED1ng", 1, "pk-dl"], [3, "icon", "size"], [1, "pk-tl"], [1, "pk-tl-i", 3, "is-on"], ["placeholder", "Nh\u1EADp b\xECnh lu\u1EADn\u2026", "sendLabel", "G\u1EEDi", "attachLabel", "\u0110\xEDnh k\xE8m t\u1EC7p", 3, "send", "comments"], ["size", "md", 3, "variant", "hidden"], ["size", "md", 3, "click", "variant", "hidden"], ["type", "button", "aria-label", "Th\xEAm thao t\xE1c", "nz-dropdown", "", "nzTrigger", "click", "nzPlacement", "bottomRight", 1, "pk-more", 3, "nzDropdownMenu"], ["nz-menu", ""], ["nz-menu-item", "", 3, "pk-mi-danger"], ["nz-menu-item", "", 3, "click"], [1, "pk-tl-i"], [1, "pk-tl-t"], [1, "pk-tl-x"]], template: function SgEmpDetail_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, SgEmpDetail_Conditional_0_Template, 70, 29, "div", 3);
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275conditional((tmp_0_0 = ctx.emp()) ? 0 : -1, tmp_0_0);
      }
    }, dependencies: [TranslateModule, TablerIconComponent, NzDropDownModule, NzMenuDirective, NzMenuItemComponent, NzDropdownDirective, NzDropdownMenuComponent, NzMenuModule, HrmButton, HrmTag, HrmUserCell, HrmStatusCell, HrmFileCell, HrmProgressCell, HrmApprovalFlow, HrmCommentThread, TranslatePipe], styles: ['\n[_nghost-%COMP%] {\n  display: block;\n}\n.pk[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-3-5);\n  padding-top: var(--space-4);\n}\n.pk-head2[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: var(--space-2);\n}\n.pk-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  flex-wrap: nowrap;\n  width: 100%;\n  min-width: 0;\n  position: sticky;\n  top: 0;\n  z-index: 5;\n  padding: var(--space-2) 0;\n  margin-bottom: calc(-1 * var(--space-3-5));\n  background: var(--bg-surface);\n  border-bottom: 1px solid var(--border-soft);\n}\n.pk-actions[_ngcontent-%COMP%]    + .pk-sec[_ngcontent-%COMP%] {\n  border-top: 0;\n  padding-top: 0;\n}\n[data-page-mode][_nghost-%COMP%]   .pk[_ngcontent-%COMP%] {\n  padding-top: 0;\n}\n.pk-actions[_ngcontent-%COMP%]   hrm-button[hidden][_ngcontent-%COMP%] {\n  display: none;\n}\n.pk-actions[_ngcontent-%COMP%]   hrm-button[_ngcontent-%COMP%]   tabler-icon[_ngcontent-%COMP%] {\n  margin-right: var(--space-0-5);\n}\n.pk-actions[_ngcontent-%COMP%]   hrm-button[_ngcontent-%COMP%]     .ant-btn {\n  padding-inline: var(--space-2);\n  gap: var(--space-0-5);\n}\n.pk-actions[_ngcontent-%COMP%]   hrm-button[data-tone=error][_ngcontent-%COMP%]     .ant-btn {\n  background: var(--error-base);\n  border-color: var(--error-base);\n  color: var(--static-white, #fff);\n}\n.pk-actions[_ngcontent-%COMP%]   hrm-button[data-tone=error][_ngcontent-%COMP%]     .ant-btn:hover {\n  filter: brightness(0.95);\n}\n.pk-actions[_ngcontent-%COMP%]   hrm-button[data-tone=warning][_ngcontent-%COMP%]     .ant-btn {\n  background: var(--warning-base);\n  border-color: var(--warning-base);\n  color: var(--static-white, #fff);\n}\n.pk-actions[_ngcontent-%COMP%]   hrm-button[data-tone=warning][_ngcontent-%COMP%]     .ant-btn:hover {\n  filter: brightness(0.95);\n}\n.pk-actions[_ngcontent-%COMP%]   hrm-button[data-tone=violet][_ngcontent-%COMP%]     .ant-btn {\n  background: var(--purple-500);\n  border-color: var(--purple-500);\n  color: var(--static-white, #fff);\n}\n.pk-actions[_ngcontent-%COMP%]   hrm-button[data-tone=violet][_ngcontent-%COMP%]     .ant-btn:hover {\n  filter: brightness(0.95);\n}\n.pk-more[_ngcontent-%COMP%] {\n  flex: none;\n  margin-left: auto;\n}\n.pk-more[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border: 1px solid var(--border-sub);\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  color: var(--text-sub);\n}\n.pk-mi-danger[_ngcontent-%COMP%] {\n  color: var(--error-base);\n}\n.pk-more[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-base);\n  color: var(--text-strong);\n}\n.pk-h[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: var(--fs-12);\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: .04em;\n  color: var(--text-sub);\n}\n.pk-sec[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--border-soft);\n  padding-top: 12px;\n}\n.pk-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 118px 1fr;\n  gap: 8px 12px;\n  margin: 0;\n  align-items: center;\n}\n.pk-list[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  font-size: var(--fs-13);\n  color: var(--text-sub);\n}\n.pk-list[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--fs-13);\n  color: var(--text-body);\n  min-width: 0;\n}\n.pk-file[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  border: 1px solid var(--border-soft);\n  border-radius: var(--radius-md);\n  padding: 8px 10px;\n}\n.pk-dl[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 30px;\n  height: 30px;\n  flex: none;\n  border: 0;\n  background: transparent;\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  color: var(--icon-secondary);\n}\n.pk-dl[_ngcontent-%COMP%]:hover {\n  background: var(--bg-surface-subtle);\n  color: var(--icon-primary);\n}\n.pk-tl[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.pk-tl-i[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 0 0 12px 18px;\n}\n.pk-tl-i[_ngcontent-%COMP%]:last-child {\n  padding-bottom: 0;\n}\n.pk-tl-i[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 3px;\n  top: 4px;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: var(--neutral-300);\n}\n.pk-tl-i.is-on[_ngcontent-%COMP%]::before {\n  background: var(--primary-base);\n}\n.pk-tl-i[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  left: 6.5px;\n  top: 14px;\n  bottom: 2px;\n  width: 1px;\n  background: var(--border-soft);\n}\n.pk-tl-i[_ngcontent-%COMP%]:last-child::after {\n  display: none;\n}\n.pk-tl-t[_ngcontent-%COMP%] {\n  font-size: var(--fs-12);\n  color: var(--text-soft);\n}\n.pk-tl-x[_ngcontent-%COMP%] {\n  font-size: var(--fs-13);\n  color: var(--text-body);\n}\n/*# sourceMappingURL=emp-detail-card.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgEmpDetail, [{
    type: Component,
    args: [{ selector: "sg-emp-detail", imports: [TranslateModule, TablerIconComponent, NzDropDownModule, NzMenuModule, HrmButton, HrmTag, HrmUserCell, HrmStatusCell, HrmFileCell, HrmProgressCell, HrmApprovalFlow, HrmCommentThread], template: `
    @if (emp(); as r) {
      <div class="pk">
        <!-- Nh\u1EADn di\u1EC7n + TR\u1EA0NG TH\xC1I (component Status, thay tag giai \u0111o\u1EA1n c\u0169). -->
        <div class="pk-head2">
          <hrm-user-cell [name]="$any(r['name'])" [sub]="'NV-000' + r['id'] + ' \xB7 ' + r['dept']" [colorful]="true" [avatarSize]="44" />
          @if (wfStatus()) {
            <hrm-status [preset]="wfStatus()!" variant="badge" [dot]="true" />
          } @else {
            <hrm-tag [color]="$any(stageHue(r))" variant="light" size="sm">{{ stageLabel(r) }}</hrm-tag>
          }
        </div>

        <!-- Action bar G\u1ED8P (quy tr\xECnh + b\u1EA3n ghi): full-width, STICKY khi cu\u1ED9n; responsive KH\xD4NG
             r\u1EDBt h\xE0ng \u2014 n\xFAt d\u01B0 thu v\xE0o \u22EE (k\u1EBF b\xEAn n\xFAt more).
             PAGE MODE (to\xE0n trang/tab): \u1EA9n \u2014 action bar do TRANG t\u1EF1 d\u1EF1ng th\xE0nh topnav full-width. -->
        @if (showActionBar()) {
          <div class="pk-actions" #actbar>
            @for (a of actions(); track a.key; let i = $index) {
              <hrm-button #actbtn [variant]="a.tone === 'neutral' ? 'default' : 'primary'" size="md"
                [attr.data-tone]="a.tone" [hidden]="i >= visibleCount()" (click)="run(a)">
                <tabler-icon [icon]="$any(a.icon)" [size]="15" /> {{ a.label }}
              </hrm-button>
            }
            @if (visibleCount() < actions().length) {
              <button type="button" class="pk-more" aria-label="Th\xEAm thao t\xE1c"
                nz-dropdown [nzDropdownMenu]="moreMenu" nzTrigger="click" nzPlacement="bottomRight">
                <tabler-icon [icon]="more" [size]="16" />
              </button>
              <nz-dropdown-menu #moreMenu="nzDropdownMenu">
                <ul nz-menu>
                  @for (a of actions(); track a.key; let i = $index) {
                    @if (i >= visibleCount()) {
                      <li nz-menu-item [class.pk-mi-danger]="a.danger" (click)="run(a)">{{ a.label }}</li>
                    }
                  }
                </ul>
              </nz-dropdown-menu>
            }
          </div>
        }

        <section class="pk-sec">
          <h4 class="pk-h">Th\xF4ng tin nh\xE2n vi\xEAn</h4>
          <dl class="pk-list">
            <dt>Email</dt><dd>{{ r['email'] }}</dd>
            <dt>Ch\u1EE9c v\u1EE5</dt><dd>{{ $any(r['role']) | translate }}</dd>
            <dt>Ph\xF2ng ban</dt><dd>{{ r['dept'] }}</dd>
            <dt>Th\xE2m ni\xEAn</dt><dd>{{ $any(r['tenure']) | translate }}</dd>
            <dt>Qu\u1EA3n l\xFD tr\u1EF1c ti\u1EBFp</dt><dd>{{ r['manager'] }}</dd>
            <dt>Chuy\xEAn c\u1EA7n</dt>
            <dd><hrm-status-cell [status]="r['status'] === 'active' ? 'success' : 'error'"
              [label]="(r['status'] === 'active' ? 'docs.enterpriseGrid.statusActive' : 'docs.enterpriseGrid.statusAbsent') | translate"
              variant="dot" /></dd>
          </dl>
        </section>

        <section class="pk-sec">
          <h4 class="pk-h">Qu\xE1 tr\xECnh th\u1EED vi\u1EC7c</h4>
          <dl class="pk-list">
            <dt>K\u1EF3 th\u1EED vi\u1EC7c</dt><dd>{{ fmt(r['start']) }} \u2192 {{ fmt(r['end']) }}</dd>
            <dt>Ti\u1EBFn \u0111\u1ED9</dt>
            <dd><hrm-progress-cell [value]="$any(r['progress'])" [color]="r['stage'] === 'done' ? 'green' : 'primary'" /></dd>
          </dl>
        </section>

        <section class="pk-sec">
          <h4 class="pk-h">Quy tr\xECnh ph\xEA duy\u1EC7t</h4>
          <hrm-approval-flow [steps]="approvalSteps(r)" [collapsedCount]="4"
            moreLabel="+2 ng\u01B0\u1EDDi ph\xEA duy\u1EC7t" collapseLabel="Thu g\u1ECDn" />
        </section>

        <section class="pk-sec">
          <h4 class="pk-h">T\u1EC7p \u0111\xEDnh k\xE8m</h4>
          <div class="pk-file">
            <hrm-file-cell [name]="'ho-so-NV-000' + r['id'] + '.pdf'" size="512 KB" />
            <button type="button" class="pk-dl" aria-label="T\u1EA3i xu\u1ED1ng"><tabler-icon [icon]="download" [size]="16" /></button>
          </div>
        </section>

        <section class="pk-sec">
          <h4 class="pk-h">L\u1ECBch s\u1EED</h4>
          <div class="pk-tl">
            @for (h of hist(r); track h.text) {
              <div class="pk-tl-i" [class.is-on]="h.on">
                <div class="pk-tl-t">{{ h.time }}</div>
                <div class="pk-tl-x">{{ h.text }}</div>
              </div>
            }
          </div>
        </section>

        <section class="pk-sec">
          <h4 class="pk-h">B\xECnh lu\u1EADn &amp; Trao \u0111\u1ED5i</h4>
          <hrm-comment-thread [comments]="allComments()" placeholder="Nh\u1EADp b\xECnh lu\u1EADn\u2026"
            sendLabel="G\u1EEDi" attachLabel="\u0110\xEDnh k\xE8m t\u1EC7p" (send)="onSend($event)" />
        </section>
      </div>
    }
  `, host: { class: "sg-emp-detail", "[attr.data-page-mode]": "pageMode() ? '' : null" }, styles: ['/* angular:styles/component:css;fec384e138d802ed7b6b209788fea56ca4ef959bc8910a7be181a915e1f6f13b;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/template/emp-detail-card.ts */\n:host {\n  display: block;\n}\n.pk {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-3-5);\n  padding-top: var(--space-4);\n}\n.pk-head2 {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: var(--space-2);\n}\n.pk-actions {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  flex-wrap: nowrap;\n  width: 100%;\n  min-width: 0;\n  position: sticky;\n  top: 0;\n  z-index: 5;\n  padding: var(--space-2) 0;\n  margin-bottom: calc(-1 * var(--space-3-5));\n  background: var(--bg-surface);\n  border-bottom: 1px solid var(--border-soft);\n}\n.pk-actions + .pk-sec {\n  border-top: 0;\n  padding-top: 0;\n}\n:host([data-page-mode]) .pk {\n  padding-top: 0;\n}\n.pk-actions hrm-button[hidden] {\n  display: none;\n}\n.pk-actions hrm-button tabler-icon {\n  margin-right: var(--space-0-5);\n}\n.pk-actions hrm-button ::ng-deep .ant-btn {\n  padding-inline: var(--space-2);\n  gap: var(--space-0-5);\n}\n.pk-actions hrm-button[data-tone=error] ::ng-deep .ant-btn {\n  background: var(--error-base);\n  border-color: var(--error-base);\n  color: var(--static-white, #fff);\n}\n.pk-actions hrm-button[data-tone=error] ::ng-deep .ant-btn:hover {\n  filter: brightness(0.95);\n}\n.pk-actions hrm-button[data-tone=warning] ::ng-deep .ant-btn {\n  background: var(--warning-base);\n  border-color: var(--warning-base);\n  color: var(--static-white, #fff);\n}\n.pk-actions hrm-button[data-tone=warning] ::ng-deep .ant-btn:hover {\n  filter: brightness(0.95);\n}\n.pk-actions hrm-button[data-tone=violet] ::ng-deep .ant-btn {\n  background: var(--purple-500);\n  border-color: var(--purple-500);\n  color: var(--static-white, #fff);\n}\n.pk-actions hrm-button[data-tone=violet] ::ng-deep .ant-btn:hover {\n  filter: brightness(0.95);\n}\n.pk-more {\n  flex: none;\n  margin-left: auto;\n}\n.pk-more {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border: 1px solid var(--border-sub);\n  background: var(--bg-surface);\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  color: var(--text-sub);\n}\n.pk-mi-danger {\n  color: var(--error-base);\n}\n.pk-more:hover {\n  border-color: var(--primary-base);\n  color: var(--text-strong);\n}\n.pk-h {\n  margin: 0 0 8px;\n  font-size: var(--fs-12);\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: .04em;\n  color: var(--text-sub);\n}\n.pk-sec {\n  border-top: 1px solid var(--border-soft);\n  padding-top: 12px;\n}\n.pk-list {\n  display: grid;\n  grid-template-columns: 118px 1fr;\n  gap: 8px 12px;\n  margin: 0;\n  align-items: center;\n}\n.pk-list dt {\n  font-size: var(--fs-13);\n  color: var(--text-sub);\n}\n.pk-list dd {\n  margin: 0;\n  font-size: var(--fs-13);\n  color: var(--text-body);\n  min-width: 0;\n}\n.pk-file {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  border: 1px solid var(--border-soft);\n  border-radius: var(--radius-md);\n  padding: 8px 10px;\n}\n.pk-dl {\n  display: grid;\n  place-items: center;\n  width: 30px;\n  height: 30px;\n  flex: none;\n  border: 0;\n  background: transparent;\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  color: var(--icon-secondary);\n}\n.pk-dl:hover {\n  background: var(--bg-surface-subtle);\n  color: var(--icon-primary);\n}\n.pk-tl {\n  display: flex;\n  flex-direction: column;\n}\n.pk-tl-i {\n  position: relative;\n  padding: 0 0 12px 18px;\n}\n.pk-tl-i:last-child {\n  padding-bottom: 0;\n}\n.pk-tl-i::before {\n  content: "";\n  position: absolute;\n  left: 3px;\n  top: 4px;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: var(--neutral-300);\n}\n.pk-tl-i.is-on::before {\n  background: var(--primary-base);\n}\n.pk-tl-i::after {\n  content: "";\n  position: absolute;\n  left: 6.5px;\n  top: 14px;\n  bottom: 2px;\n  width: 1px;\n  background: var(--border-soft);\n}\n.pk-tl-i:last-child::after {\n  display: none;\n}\n.pk-tl-t {\n  font-size: var(--fs-12);\n  color: var(--text-soft);\n}\n.pk-tl-x {\n  font-size: var(--fs-13);\n  color: var(--text-body);\n}\n/*# sourceMappingURL=emp-detail-card.css.map */\n'] }]
  }], () => [], { emp: [{ type: Input, args: [{ isSignal: true, alias: "emp", required: false }] }], wfStatus: [{ type: Input, args: [{ isSignal: true, alias: "wfStatus", required: false }] }], pageMode: [{ type: Input, args: [{ isSignal: true, alias: "pageMode", required: false }] }], surfaceMode: [{ type: Input, args: [{ isSignal: true, alias: "surfaceMode", required: false }] }], wfAction: [{ type: Output, args: ["wfAction"] }], bar: [{ type: ViewChild, args: ["actbar", { isSignal: true }] }], btns: [{ type: ViewChildren, args: ["actbtn", __spreadProps(__spreadValues({}, { read: ElementRef }), { isSignal: true })] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgEmpDetail, { className: "SgEmpDetail", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/template/emp-detail-card.ts", lineNumber: 190 });
})();

export {
  STAGES,
  PEOPLE,
  fmtDM,
  SgEmpDetail
};
//# sourceMappingURL=chunk-D5AF7RAF.js.map
