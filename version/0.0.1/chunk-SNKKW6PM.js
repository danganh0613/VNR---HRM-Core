import {
  toNzStatus
} from "./chunk-7IBNPHRP.js";
import {
  NzInputDirective,
  NzInputGroupComponent,
  NzInputModule
} from "./chunk-EGUSTVRG.js";
import "./chunk-ZUH7BZUU.js";
import {
  HrmControl
} from "./chunk-Q7XZAXLL.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel
} from "./chunk-E7PHJUT4.js";
import "./chunk-3BG2BWBR.js";
import "./chunk-XAIBVLVQ.js";
import "./chunk-DWLT6DTW.js";
import "./chunk-PKUWSVS6.js";
import "./chunk-L5ZKGN3K.js";
import "./chunk-LQM5UC6B.js";
import {
  SgDo,
  SgDoc,
  SgDont,
  SgExample,
  SgRow,
  SgUse
} from "./chunk-SZV2GIDV.js";
import "./chunk-WH372SY7.js";
import "./chunk-IMWVUFP6.js";
import "./chunk-ICAAXTRA.js";
import "./chunk-NXJVNWYP.js";
import "./chunk-HZSB2KG5.js";
import "./chunk-LHDJXUQP.js";
import "./chunk-REKUOEC5.js";
import "./chunk-C5E47IHV.js";
import "./chunk-BWIWCH2F.js";
import "./chunk-HV4ZTFQC.js";
import "./chunk-F2S6JWCU.js";
import "./chunk-D3TBJI5I.js";
import "./chunk-VFL3HCK4.js";
import "./chunk-D2BVEXVI.js";
import "./chunk-LRW4ARR4.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-JVYAKZTD.js";
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
  ɵɵsanitizeHtml,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-RFPCG6C6.js";

// libs/hrm-ui/src/lib/domain-hrm/hrm-phone.ts
var toNz = (s) => s === "sm" ? "small" : s === "lg" ? "large" : "default";
var HrmPhone = class _HrmPhone extends HrmControl {
  constructor() {
    super(...arguments);
    this.placeholder = input("S\u1ED1 \u0111i\u1EC7n tho\u1EA1i", ...ngDevMode ? [{ debugName: "placeholder" }] : (
      /* istanbul ignore next */
      []
    ));
    this.dialCode = input("+84", ...ngDevMode ? [{ debugName: "dialCode" }] : (
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
    this.toNz = toNz;
    this.toNzStatus = toNzStatus;
  }
  onInput(v) {
    this.emit((v ?? "").replace(/[^\d]/g, ""));
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275HrmPhone_BaseFactory;
      return function HrmPhone_Factory(__ngFactoryType__) {
        return (\u0275HrmPhone_BaseFactory || (\u0275HrmPhone_BaseFactory = \u0275\u0275getInheritedFactory(_HrmPhone)))(__ngFactoryType__ || _HrmPhone);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmPhone, selectors: [["hrm-phone"]], hostAttrs: [1, "hrm-phone"], hostVars: 2, hostBindings: function HrmPhone_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("hrm-status-success", ctx.status() === "success");
      }
    }, inputs: { placeholder: [1, "placeholder"], dialCode: [1, "dialCode"], size: [1, "size"], status: [1, "status"] }, features: [\u0275\u0275ProvidersFeature([{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => _HrmPhone), multi: true }]), \u0275\u0275InheritDefinitionFeature], decls: 2, vars: 6, consts: [[3, "nzAddOnBefore", "nzStatus"], ["nz-input", "", "type", "tel", "inputmode", "numeric", "maxlength", "11", 3, "ngModelChange", "blur", "ngModel", "placeholder", "nzSize", "disabled"]], template: function HrmPhone_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nz-input-group", 0)(1, "input", 1);
        \u0275\u0275listener("ngModelChange", function HrmPhone_Template_input_ngModelChange_1_listener($event) {
          return ctx.onInput($event);
        })("blur", function HrmPhone_Template_input_blur_1_listener() {
          return ctx.markTouched();
        });
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275property("nzAddOnBefore", ctx.dialCode())("nzStatus", ctx.toNzStatus(ctx.status()));
        \u0275\u0275advance();
        \u0275\u0275property("ngModel", ctx.value())("placeholder", ctx.placeholder())("nzSize", ctx.toNz(ctx.size()))("disabled", ctx.disabled());
      }
    }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, MaxLengthValidator, NgModel, NzInputModule, NzInputDirective, NzInputGroupComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmPhone, [{
    type: Component,
    args: [{
      selector: "hrm-phone",
      imports: [FormsModule, NzInputModule],
      template: `
    <nz-input-group [nzAddOnBefore]="dialCode()" [nzStatus]="toNzStatus(status())">
      <input
        nz-input
        type="tel"
        inputmode="numeric"
        [ngModel]="value()"
        (ngModelChange)="onInput($event)"
        (blur)="markTouched()"
        [placeholder]="placeholder()"
        [nzSize]="toNz(size())"
        [disabled]="disabled()"
        maxlength="11" />
    </nz-input-group>
  `,
      host: { class: "hrm-phone", "[class.hrm-status-success]": "status() === 'success'" },
      providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => HrmPhone), multi: true }]
    }]
  }], null, { placeholder: [{ type: Input, args: [{ isSignal: true, alias: "placeholder", required: false }] }], dialCode: [{ type: Input, args: [{ isSignal: true, alias: "dialCode", required: false }] }], size: [{ type: Input, args: [{ isSignal: true, alias: "size", required: false }] }], status: [{ type: Input, args: [{ isSignal: true, alias: "status", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmPhone, { className: "HrmPhone", filePath: "libs/hrm-ui/src/lib/domain-hrm/hrm-phone.ts", lineNumber: 31 });
})();

// apps/ds-demo/src/app/features/styleguide/pages/hrm/domain/phone.ts
var SgDocPhone = class _SgDocPhone {
  constructor() {
    this.phone = "";
    this.staff = "";
    this.when = [
      "docs.phone.when1",
      "docs.phone.when2",
      "docs.phone.when3"
    ];
  }
  static {
    this.\u0275fac = function SgDocPhone_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocPhone)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocPhone, selectors: [["sg-doc-phone"]], decls: 73, vars: 93, consts: [["category", "Data Input", 3, "title", "desc"], ["sgOverview", ""], [2, "width", "100%", "max-width", "280px"], [3, "ngModelChange", "placeholder", "ngModel"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], [3, "innerHTML"], ["sgExamples", ""], [3, "title", "desc"], [2, "width", "280px"], ["label", "+84 \xB7 +65 \xB7 +81"], [2, "width", "230px"], ["dialCode", "+84", 3, "placeholder", "ngModel"], ["dialCode", "+65", 3, "placeholder", "ngModel"], ["dialCode", "+81", 3, "placeholder", "ngModel"], [3, "label"], ["status", "error", 3, "ngModel"], ["status", "warning", 3, "ngModel"], ["status", "success", 3, "ngModel"], ["label", "sm \xB7 md \xB7 lg"], ["size", "sm", 3, "placeholder", "ngModel"], ["size", "md", 3, "placeholder", "ngModel"], ["size", "lg", 3, "placeholder", "ngModel"]], template: function SgDocPhone_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "div", 1)(4, "div", 2)(5, "hrm-phone", 3);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275twoWayListener("ngModelChange", function SgDocPhone_Template_hrm_phone_ngModelChange_5_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.phone, $event) || (ctx.phone = $event);
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
        \u0275\u0275element(17, "span", 7);
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "sg-do");
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "sg-dont");
        \u0275\u0275text(23);
        \u0275\u0275pipe(24, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "sg-dont");
        \u0275\u0275text(26);
        \u0275\u0275pipe(27, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 8)(29, "sg-example", 9);
        \u0275\u0275pipe(30, "translate");
        \u0275\u0275pipe(31, "translate");
        \u0275\u0275elementStart(32, "sg-row")(33, "div", 10)(34, "hrm-phone", 3);
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275twoWayListener("ngModelChange", function SgDocPhone_Template_hrm_phone_ngModelChange_34_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.staff, $event) || (ctx.staff = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(36, "sg-example", 9);
        \u0275\u0275pipe(37, "translate");
        \u0275\u0275pipe(38, "translate");
        \u0275\u0275elementStart(39, "sg-row", 11)(40, "div", 12);
        \u0275\u0275element(41, "hrm-phone", 13);
        \u0275\u0275pipe(42, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "div", 12);
        \u0275\u0275element(44, "hrm-phone", 14);
        \u0275\u0275pipe(45, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "div", 12);
        \u0275\u0275element(47, "hrm-phone", 15);
        \u0275\u0275pipe(48, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(49, "sg-example", 9);
        \u0275\u0275pipe(50, "translate");
        \u0275\u0275pipe(51, "translate");
        \u0275\u0275elementStart(52, "sg-row", 16);
        \u0275\u0275pipe(53, "translate");
        \u0275\u0275elementStart(54, "div", 12);
        \u0275\u0275element(55, "hrm-phone", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "div", 12);
        \u0275\u0275element(57, "hrm-phone", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "div", 12);
        \u0275\u0275element(59, "hrm-phone", 19);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(60, "sg-example", 9);
        \u0275\u0275pipe(61, "translate");
        \u0275\u0275pipe(62, "translate");
        \u0275\u0275elementStart(63, "sg-row", 20)(64, "div", 12);
        \u0275\u0275element(65, "hrm-phone", 21);
        \u0275\u0275pipe(66, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "div", 12);
        \u0275\u0275element(68, "hrm-phone", 22);
        \u0275\u0275pipe(69, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "div", 12);
        \u0275\u0275element(71, "hrm-phone", 23);
        \u0275\u0275pipe(72, "translate");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 39, "docs.phone.title"))("desc", \u0275\u0275pipeBind1(2, 41, "docs.phone.desc"));
        \u0275\u0275advance(5);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 43, "docs.phone.phStaff"));
        \u0275\u0275twoWayProperty("ngModel", ctx.phone);
        \u0275\u0275advance(3);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(9, 45, "docs.phone.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(10, 47, "docs.phone.behavior"))("avoid", \u0275\u0275pipeBind1(11, 49, "docs.phone.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 51, "docs.phone.do1"));
        \u0275\u0275advance(3);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(18, 53, "docs.phone.do2"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 55, "docs.phone.do3"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 57, "docs.phone.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 59, "docs.phone.dont2"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(30, 61, "docs.phone.exStaffT"))("desc", \u0275\u0275pipeBind1(31, 63, "docs.phone.exStaffD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(35, 65, "docs.phone.phStaff"));
        \u0275\u0275twoWayProperty("ngModel", ctx.staff);
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(37, 67, "docs.phone.exDialT"))("desc", \u0275\u0275pipeBind1(38, 69, "docs.phone.exDialD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(42, 71, "docs.phone.countryVN"))("ngModel", "");
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(45, 73, "docs.phone.countrySG"))("ngModel", "");
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(48, 75, "docs.phone.countryJP"))("ngModel", "");
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(50, 77, "docs.phone.exStateT"))("desc", \u0275\u0275pipeBind1(51, 79, "docs.phone.exStateD"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(53, 81, "docs.phone.exStateRow"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngModel", "090");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngModel", "0901234");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngModel", "0901234567");
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(61, 83, "docs.phone.exSizeT"))("desc", \u0275\u0275pipeBind1(62, 85, "docs.phone.exSizeD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(66, 87, "docs.phone.small"))("ngModel", "");
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(69, 89, "docs.phone.medium"))("ngModel", "");
        \u0275\u0275advance(3);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(72, 91, "docs.phone.large"))("ngModel", "");
      }
    }, dependencies: [FormsModule, NgControlStatus, NgModel, TranslateModule, HrmPhone, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocPhone, [{
    type: Component,
    args: [{
      selector: "sg-doc-phone",
      imports: [FormsModule, TranslateModule, HrmPhone, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow],
      template: `
    <sg-doc category="Data Input" [title]="'docs.phone.title' | translate" [desc]="'docs.phone.desc' | translate">

      <div sgOverview>
        <div style="width:100%;max-width:280px">
          <hrm-phone [placeholder]="'docs.phone.phStaff' | translate" [(ngModel)]="phone" />
        </div>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.phone.purpose' | translate"
          [when]="when"
          [behavior]="'docs.phone.behavior' | translate"
          [avoid]="'docs.phone.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do>{{ 'docs.phone.do1' | translate }}</sg-do>
        <sg-do><span [innerHTML]="'docs.phone.do2' | translate"></span></sg-do>
        <sg-do>{{ 'docs.phone.do3' | translate }}</sg-do>
        <sg-dont>{{ 'docs.phone.dont1' | translate }}</sg-dont>
        <sg-dont>{{ 'docs.phone.dont2' | translate }}</sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.phone.exStaffT' | translate"
          [desc]="'docs.phone.exStaffD' | translate">
          <sg-row>
            <div style="width:280px"><hrm-phone [placeholder]="'docs.phone.phStaff' | translate" [(ngModel)]="staff" /></div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.phone.exDialT' | translate"
          [desc]="'docs.phone.exDialD' | translate">
          <sg-row label="+84 \xB7 +65 \xB7 +81">
            <div style="width:230px"><hrm-phone dialCode="+84" [placeholder]="'docs.phone.countryVN' | translate" [ngModel]="''" /></div>
            <div style="width:230px"><hrm-phone dialCode="+65" [placeholder]="'docs.phone.countrySG' | translate" [ngModel]="''" /></div>
            <div style="width:230px"><hrm-phone dialCode="+81" [placeholder]="'docs.phone.countryJP' | translate" [ngModel]="''" /></div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.phone.exStateT' | translate"
          [desc]="'docs.phone.exStateD' | translate">
          <sg-row [label]="'docs.phone.exStateRow' | translate">
            <div style="width:230px"><hrm-phone status="error" [ngModel]="'090'" /></div>
            <div style="width:230px"><hrm-phone status="warning" [ngModel]="'0901234'" /></div>
            <div style="width:230px"><hrm-phone status="success" [ngModel]="'0901234567'" /></div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.phone.exSizeT' | translate"
          [desc]="'docs.phone.exSizeD' | translate">
          <sg-row label="sm \xB7 md \xB7 lg">
            <div style="width:230px"><hrm-phone size="sm" [placeholder]="'docs.phone.small' | translate" [ngModel]="''" /></div>
            <div style="width:230px"><hrm-phone size="md" [placeholder]="'docs.phone.medium' | translate" [ngModel]="''" /></div>
            <div style="width:230px"><hrm-phone size="lg" [placeholder]="'docs.phone.large' | translate" [ngModel]="''" /></div>
          </sg-row>
        </sg-example>
      </div>

    </sg-doc>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocPhone, { className: "SgDocPhone", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/domain/phone.ts", lineNumber: 76 });
})();
export {
  SgDocPhone
};
//# sourceMappingURL=chunk-SNKKW6PM.js.map
