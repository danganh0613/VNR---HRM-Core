import {
  NzInputNumberComponent,
  NzInputNumberModule
} from "./chunk-3HHHYBKP.js";
import {
  toNzStatus
} from "./chunk-XC26CQEC.js";
import {
  HrmControl
} from "./chunk-KOD2JY6G.js";
import {
  SgDo,
  SgDoc,
  SgDont,
  SgExample,
  SgRow,
  SgUse
} from "./chunk-2SR4XMAS.js";
import "./chunk-LVO4IPRO.js";
import "./chunk-VA24G7CQ.js";
import "./chunk-MBPTEHMI.js";
import {
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel
} from "./chunk-N7XJPSMP.js";
import "./chunk-LQM5UC6B.js";
import "./chunk-6KJOFSCV.js";
import "./chunk-XAIBVLVQ.js";
import "./chunk-46BX4VJR.js";
import "./chunk-PKUWSVS6.js";
import "./chunk-QUMJX4YX.js";
import "./chunk-KX7AUY7O.js";
import "./chunk-LMW5SXOA.js";
import "./chunk-T7NAGNI6.js";
import "./chunk-6YNSEAJZ.js";
import "./chunk-Y56K4O2M.js";
import "./chunk-REKUOEC5.js";
import "./chunk-QANRYIV5.js";
import "./chunk-4363XCMO.js";
import "./chunk-W6FDVVRF.js";
import "./chunk-KVAFNQGO.js";
import "./chunk-VUIKJ27O.js";
import "./chunk-W3HXIMCC.js";
import "./chunk-QL2Z65KF.js";
import "./chunk-XYGM7GOW.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-B7ZDCASH.js";
import {
  Component,
  Input,
  forwardRef,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-X3WVFRKD.js";

// libs/hrm-ui/src/lib/domain-hrm/hrm-money.ts
var toNz = (s) => s === "sm" ? "small" : s === "lg" ? "large" : "default";
var HrmMoney = class _HrmMoney extends HrmControl {
  constructor() {
    super(...arguments);
    this.placeholder = input("", ...ngDevMode ? [{ debugName: "placeholder" }] : (
      /* istanbul ignore next */
      []
    ));
    this.size = input("md", ...ngDevMode ? [{ debugName: "size" }] : (
      /* istanbul ignore next */
      []
    ));
    this.status = input("", ...ngDevMode ? [{ debugName: "status" }] : (
      /* istanbul ignore next */
      []
    ));
    this.min = input(0, ...ngDevMode ? [{ debugName: "min" }] : (
      /* istanbul ignore next */
      []
    ));
    this.step = input(1e3, ...ngDevMode ? [{ debugName: "step" }] : (
      /* istanbul ignore next */
      []
    ));
    this.unit = input("\u20AB", ...ngDevMode ? [{ debugName: "unit" }] : (
      /* istanbul ignore next */
      []
    ));
    this.toNz = toNz;
    this.toNzStatus = toNzStatus;
    this.formatter = (v) => v == null || isNaN(v) ? "" : `${v}`.replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " " + this.unit();
    this.parser = (v) => Number(v.replace(/[^\d]/g, "")) || 0;
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275HrmMoney_BaseFactory;
      return function HrmMoney_Factory(__ngFactoryType__) {
        return (\u0275HrmMoney_BaseFactory || (\u0275HrmMoney_BaseFactory = \u0275\u0275getInheritedFactory(_HrmMoney)))(__ngFactoryType__ || _HrmMoney);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmMoney, selectors: [["hrm-money"]], hostAttrs: [1, "hrm-money"], hostVars: 2, hostBindings: function HrmMoney_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("hrm-status-success", ctx.status() === "success");
      }
    }, inputs: { placeholder: [1, "placeholder"], size: [1, "size"], status: [1, "status"], min: [1, "min"], step: [1, "step"], unit: [1, "unit"] }, features: [\u0275\u0275ProvidersFeature([{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => _HrmMoney), multi: true }]), \u0275\u0275InheritDefinitionFeature], decls: 1, vars: 9, consts: [[2, "width", "100%", 3, "ngModelChange", "nzBlur", "ngModel", "nzMin", "nzStep", "nzDisabled", "nzSize", "nzStatus", "nzPlaceHolder", "nzFormatter", "nzParser"]], template: function HrmMoney_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nz-input-number", 0);
        \u0275\u0275listener("ngModelChange", function HrmMoney_Template_nz_input_number_ngModelChange_0_listener($event) {
          return ctx.emit($event);
        })("nzBlur", function HrmMoney_Template_nz_input_number_nzBlur_0_listener() {
          return ctx.markTouched();
        });
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("ngModel", ctx.value())("nzMin", ctx.min())("nzStep", ctx.step())("nzDisabled", ctx.disabled())("nzSize", ctx.toNz(ctx.size()))("nzStatus", ctx.toNzStatus(ctx.status()))("nzPlaceHolder", ctx.placeholder())("nzFormatter", ctx.formatter)("nzParser", ctx.parser);
      }
    }, dependencies: [FormsModule, NgControlStatus, NgModel, NzInputNumberModule, NzInputNumberComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmMoney, [{
    type: Component,
    args: [{
      selector: "hrm-money",
      imports: [FormsModule, NzInputNumberModule],
      template: `
    <nz-input-number
      style="width:100%"
      [ngModel]="value()"
      (ngModelChange)="emit($event)"
      (nzBlur)="markTouched()"
      [nzMin]="min()"
      [nzStep]="step()"
      [nzDisabled]="disabled()"
      [nzSize]="toNz(size())"
      [nzStatus]="toNzStatus(status())"
      [nzPlaceHolder]="placeholder()"
      [nzFormatter]="formatter"
      [nzParser]="parser"></nz-input-number>
  `,
      host: { class: "hrm-money", "[class.hrm-status-success]": "status() === 'success'" },
      providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => HrmMoney), multi: true }]
    }]
  }], null, { placeholder: [{ type: Input, args: [{ isSignal: true, alias: "placeholder", required: false }] }], size: [{ type: Input, args: [{ isSignal: true, alias: "size", required: false }] }], status: [{ type: Input, args: [{ isSignal: true, alias: "status", required: false }] }], min: [{ type: Input, args: [{ isSignal: true, alias: "min", required: false }] }], step: [{ type: Input, args: [{ isSignal: true, alias: "step", required: false }] }], unit: [{ type: Input, args: [{ isSignal: true, alias: "unit", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmMoney, { className: "HrmMoney", filePath: "libs/hrm-ui/src/lib/domain-hrm/hrm-money.ts", lineNumber: 31 });
})();

// apps/ds-demo/src/app/features/styleguide/pages/hrm/domain/money.ts
var SgDocMoney = class _SgDocMoney {
  constructor() {
    this.salary = 15e6;
    this.allow = 73e4;
    this.when = [
      "docs.money.when1",
      "docs.money.when2",
      "docs.money.when3"
    ];
  }
  static {
    this.\u0275fac = function SgDocMoney_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocMoney)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocMoney, selectors: [["sg-doc-money"]], decls: 66, vars: 90, consts: [["category", "Data Input", 3, "title", "desc"], ["sgOverview", ""], [2, "width", "100%", "max-width", "280px"], [3, "ngModelChange", "ngModel", "placeholder"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], ["sgExamples", ""], [3, "title", "desc"], [2, "width", "240px"], ["label", "min 100.000 \xB7 step 100.000"], [3, "ngModelChange", "ngModel", "min", "step", "placeholder"], [2, "width", "220px"], ["status", "error", 3, "ngModel", "placeholder"], ["status", "warning", 3, "ngModel", "placeholder"], ["status", "success", 3, "ngModel", "placeholder"], ["label", "sm \xB7 md \xB7 lg"], [2, "width", "200px"], ["size", "sm", 3, "ngModel", "placeholder"], ["size", "md", 3, "ngModel", "placeholder"], ["size", "lg", 3, "ngModel", "placeholder"]], template: function SgDocMoney_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "div", 1)(4, "div", 2)(5, "hrm-money", 3);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275twoWayListener("ngModelChange", function SgDocMoney_Template_hrm_money_ngModelChange_5_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.salary, $event) || (ctx.salary = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "div", 4);
        \u0275\u0275element(8, "sg-use", 5);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 6)(13, "sg-do");
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "sg-do");
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "sg-do");
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "sg-dont");
        \u0275\u0275text(23);
        \u0275\u0275pipe(24, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 7)(26, "sg-example", 8);
        \u0275\u0275pipe(27, "translate");
        \u0275\u0275pipe(28, "translate");
        \u0275\u0275elementStart(29, "sg-row")(30, "div", 9)(31, "hrm-money", 3);
        \u0275\u0275pipe(32, "translate");
        \u0275\u0275twoWayListener("ngModelChange", function SgDocMoney_Template_hrm_money_ngModelChange_31_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.salary, $event) || (ctx.salary = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(33, "sg-example", 8);
        \u0275\u0275pipe(34, "translate");
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275elementStart(36, "sg-row", 10)(37, "div", 9)(38, "hrm-money", 11);
        \u0275\u0275pipe(39, "translate");
        \u0275\u0275twoWayListener("ngModelChange", function SgDocMoney_Template_hrm_money_ngModelChange_38_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.allow, $event) || (ctx.allow = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(40, "sg-example", 8);
        \u0275\u0275pipe(41, "translate");
        \u0275\u0275pipe(42, "translate");
        \u0275\u0275elementStart(43, "sg-row")(44, "div", 12);
        \u0275\u0275element(45, "hrm-money", 13);
        \u0275\u0275pipe(46, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "div", 12);
        \u0275\u0275element(48, "hrm-money", 14);
        \u0275\u0275pipe(49, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "div", 12);
        \u0275\u0275element(51, "hrm-money", 15);
        \u0275\u0275pipe(52, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(53, "sg-example", 8);
        \u0275\u0275pipe(54, "translate");
        \u0275\u0275pipe(55, "translate");
        \u0275\u0275elementStart(56, "sg-row", 16)(57, "div", 17);
        \u0275\u0275element(58, "hrm-money", 18);
        \u0275\u0275pipe(59, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "div", 17);
        \u0275\u0275element(61, "hrm-money", 19);
        \u0275\u0275pipe(62, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "div", 17);
        \u0275\u0275element(64, "hrm-money", 20);
        \u0275\u0275pipe(65, "translate");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 38, "docs.money.title"))("desc", \u0275\u0275pipeBind1(2, 40, "docs.money.desc"));
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.salary);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 42, "docs.money.phSalary"));
        \u0275\u0275advance(3);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(9, 44, "docs.money.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(10, 46, "docs.money.behavior"))("avoid", \u0275\u0275pipeBind1(11, 48, "docs.money.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 50, "docs.money.do1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 52, "docs.money.do2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 54, "docs.money.do3"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 56, "docs.money.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(27, 58, "docs.money.exSalaryT"))("desc", \u0275\u0275pipeBind1(28, 60, "docs.money.exSalaryD"));
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.salary);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(32, 62, "docs.money.phSalary"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(34, 64, "docs.money.exAllowT"))("desc", \u0275\u0275pipeBind1(35, 66, "docs.money.exAllowD"));
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.allow);
        \u0275\u0275property("min", 1e5)("step", 1e5)("placeholder", \u0275\u0275pipeBind1(39, 68, "docs.money.phAllow"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(41, 70, "docs.money.exStateT"))("desc", \u0275\u0275pipeBind1(42, 72, "docs.money.exStateD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("ngModel", 5e8)("placeholder", \u0275\u0275pipeBind1(46, 74, "docs.money.phSalaryShort"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngModel", 2e6)("placeholder", \u0275\u0275pipeBind1(49, 76, "docs.money.phSalaryShort"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngModel", 15e6)("placeholder", \u0275\u0275pipeBind1(52, 78, "docs.money.phSalaryShort"));
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(54, 80, "docs.money.exSizeT"))("desc", \u0275\u0275pipeBind1(55, 82, "docs.money.exSizeD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("ngModel", 5e6)("placeholder", \u0275\u0275pipeBind1(59, 84, "docs.money.small"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngModel", 5e6)("placeholder", \u0275\u0275pipeBind1(62, 86, "docs.money.medium"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngModel", 5e6)("placeholder", \u0275\u0275pipeBind1(65, 88, "docs.money.large"));
      }
    }, dependencies: [FormsModule, NgControlStatus, NgModel, TranslateModule, HrmMoney, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocMoney, [{
    type: Component,
    args: [{
      selector: "sg-doc-money",
      imports: [FormsModule, TranslateModule, HrmMoney, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow],
      template: `
    <sg-doc category="Data Input" [title]="'docs.money.title' | translate" [desc]="'docs.money.desc' | translate">

      <div sgOverview>
        <div style="width:100%;max-width:280px">
          <hrm-money [(ngModel)]="salary" [placeholder]="'docs.money.phSalary' | translate" />
        </div>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.money.purpose' | translate"
          [when]="when"
          [behavior]="'docs.money.behavior' | translate"
          [avoid]="'docs.money.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do>{{ 'docs.money.do1' | translate }}</sg-do>
        <sg-do>{{ 'docs.money.do2' | translate }}</sg-do>
        <sg-do>{{ 'docs.money.do3' | translate }}</sg-do>
        <sg-dont>{{ 'docs.money.dont1' | translate }}</sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.money.exSalaryT' | translate"
          [desc]="'docs.money.exSalaryD' | translate">
          <sg-row>
            <div style="width:240px"><hrm-money [(ngModel)]="salary" [placeholder]="'docs.money.phSalary' | translate" /></div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.money.exAllowT' | translate"
          [desc]="'docs.money.exAllowD' | translate">
          <sg-row label="min 100.000 \xB7 step 100.000">
            <div style="width:240px"><hrm-money [(ngModel)]="allow" [min]="100000" [step]="100000" [placeholder]="'docs.money.phAllow' | translate" /></div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.money.exStateT' | translate"
          [desc]="'docs.money.exStateD' | translate">
          <sg-row>
            <div style="width:220px"><hrm-money status="error" [ngModel]="500000000" [placeholder]="'docs.money.phSalaryShort' | translate" /></div>
            <div style="width:220px"><hrm-money status="warning" [ngModel]="2000000" [placeholder]="'docs.money.phSalaryShort' | translate" /></div>
            <div style="width:220px"><hrm-money status="success" [ngModel]="15000000" [placeholder]="'docs.money.phSalaryShort' | translate" /></div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.money.exSizeT' | translate"
          [desc]="'docs.money.exSizeD' | translate">
          <sg-row label="sm \xB7 md \xB7 lg">
            <div style="width:200px"><hrm-money size="sm" [ngModel]="5000000" [placeholder]="'docs.money.small' | translate" /></div>
            <div style="width:200px"><hrm-money size="md" [ngModel]="5000000" [placeholder]="'docs.money.medium' | translate" /></div>
            <div style="width:200px"><hrm-money size="lg" [ngModel]="5000000" [placeholder]="'docs.money.large' | translate" /></div>
          </sg-row>
        </sg-example>
      </div>

    </sg-doc>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocMoney, { className: "SgDocMoney", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/domain/money.ts", lineNumber: 73 });
})();
export {
  SgDocMoney
};
//# sourceMappingURL=chunk-LTEQZIKU.js.map
