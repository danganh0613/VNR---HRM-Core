import {
  HrmFormField
} from "./chunk-DQ7HQVUW.js";
import {
  NzRadioComponent,
  NzRadioGroupComponent,
  NzRadioModule
} from "./chunk-UGXOFJ2W.js";
import {
  HrmControl
} from "./chunk-Q7XZAXLL.js";
import {
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel
} from "./chunk-E7PHJUT4.js";
import "./chunk-3BG2BWBR.js";
import "./chunk-XAIBVLVQ.js";
import "./chunk-DWLT6DTW.js";
import "./chunk-PKUWSVS6.js";
import "./chunk-L5ZKGN3K.js";
import {
  SgDo,
  SgDoc,
  SgDont,
  SgExample,
  SgRow,
  SgUse
} from "./chunk-SZV2GIDV.js";
import "./chunk-WH372SY7.js";
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
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-JVYAKZTD.js";
import {
  Component,
  Input,
  forwardRef,
  inject,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵsanitizeHtml,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-RFPCG6C6.js";

// libs/hrm-ui/src/lib/data-entry/hrm-radio-group.ts
var _forTrack0 = ($index, $item) => $item.value;
function HrmRadioGroup_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("nzValue", o_r1.value)("nzDisabled", o_r1.disabled);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(o_r1.label);
  }
}
function HrmRadioGroup_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("nzValue", o_r1.value)("nzDisabled", o_r1.disabled);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(o_r1.label);
  }
}
function HrmRadioGroup_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, HrmRadioGroup_For_2_Conditional_0_Template, 2, 3, "label", 1)(1, HrmRadioGroup_For_2_Conditional_1_Template, 2, 3, "label", 2);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.variant() === "button" ? 0 : 1);
  }
}
var HrmRadioGroup = class _HrmRadioGroup extends HrmControl {
  constructor() {
    super(...arguments);
    this.options = input([], ...ngDevMode ? [{ debugName: "options" }] : (
      /* istanbul ignore next */
      []
    ));
    this.variant = input("default", ...ngDevMode ? [{ debugName: "variant" }] : (
      /* istanbul ignore next */
      []
    ));
    this.size = input("md", ...ngDevMode ? [{ debugName: "size" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275HrmRadioGroup_BaseFactory;
      return function HrmRadioGroup_Factory(__ngFactoryType__) {
        return (\u0275HrmRadioGroup_BaseFactory || (\u0275HrmRadioGroup_BaseFactory = \u0275\u0275getInheritedFactory(_HrmRadioGroup)))(__ngFactoryType__ || _HrmRadioGroup);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmRadioGroup, selectors: [["hrm-radio-group"]], hostAttrs: [1, "hrm-radio-group"], inputs: { options: [1, "options"], variant: [1, "variant"], size: [1, "size"] }, features: [\u0275\u0275ProvidersFeature([{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => _HrmRadioGroup), multi: true }]), \u0275\u0275InheritDefinitionFeature], decls: 3, vars: 4, consts: [[3, "ngModelChange", "ngModel", "nzDisabled", "nzButtonStyle", "nzSize"], ["nz-radio-button", "", 3, "nzValue", "nzDisabled"], ["nz-radio", "", 3, "nzValue", "nzDisabled"]], template: function HrmRadioGroup_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nz-radio-group", 0);
        \u0275\u0275listener("ngModelChange", function HrmRadioGroup_Template_nz_radio_group_ngModelChange_0_listener($event) {
          return ctx.emit($event);
        });
        \u0275\u0275repeaterCreate(1, HrmRadioGroup_For_2_Template, 2, 1, null, null, _forTrack0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("ngModel", ctx.value())("nzDisabled", ctx.disabled())("nzButtonStyle", "solid")("nzSize", ctx.size() === "sm" ? "small" : ctx.size() === "lg" ? "large" : "default");
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.options());
      }
    }, dependencies: [FormsModule, NgControlStatus, NgModel, NzRadioModule, NzRadioComponent, NzRadioGroupComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmRadioGroup, [{
    type: Component,
    args: [{
      selector: "hrm-radio-group",
      imports: [FormsModule, NzRadioModule],
      template: `
    <nz-radio-group
      [ngModel]="value()"
      (ngModelChange)="emit($event)"
      [nzDisabled]="disabled()"
      [nzButtonStyle]="'solid'"
      [nzSize]="size() === 'sm' ? 'small' : size() === 'lg' ? 'large' : 'default'">
      @for (o of options(); track o.value) {
        @if (variant() === 'button') {
          <label nz-radio-button [nzValue]="o.value" [nzDisabled]="o.disabled">{{ o.label }}</label>
        } @else {
          <label nz-radio [nzValue]="o.value" [nzDisabled]="o.disabled">{{ o.label }}</label>
        }
      }
    </nz-radio-group>
  `,
      host: { class: "hrm-radio-group" },
      providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => HrmRadioGroup), multi: true }]
    }]
  }], null, { options: [{ type: Input, args: [{ isSignal: true, alias: "options", required: false }] }], variant: [{ type: Input, args: [{ isSignal: true, alias: "variant", required: false }] }], size: [{ type: Input, args: [{ isSignal: true, alias: "size", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmRadioGroup, { className: "HrmRadioGroup", filePath: "libs/hrm-ui/src/lib/data-entry/hrm-radio-group.ts", lineNumber: 30 });
})();

// apps/ds-demo/src/app/features/styleguide/pages/hrm/data-entry/radio.ts
var SgDocRadio = class _SgDocRadio {
  constructor() {
    this.t = inject(TranslateService);
    this.period = "week";
    this.plan = "pro";
    this.workMode = "hybrid";
    this.contract = "";
    this.when = [
      "docs.radio.when1",
      "docs.radio.when2",
      "docs.radio.when3"
    ];
  }
  get periodOpts() {
    return [
      { label: this.t.instant("docs.radio.optDay"), value: "day" },
      { label: this.t.instant("docs.radio.optWeek"), value: "week" },
      { label: this.t.instant("docs.radio.optMonth"), value: "month" },
      { label: this.t.instant("docs.radio.optQuarter"), value: "quarter" }
    ];
  }
  get planOpts() {
    return [
      { label: this.t.instant("docs.radio.planBasic"), value: "basic" },
      { label: this.t.instant("docs.radio.planPro"), value: "pro" },
      { label: this.t.instant("docs.radio.planEnt"), value: "ent" }
    ];
  }
  get workModeOpts() {
    return [
      { label: this.t.instant("docs.radio.modeOffice"), value: "office" },
      { label: this.t.instant("docs.radio.modeHybrid"), value: "hybrid" },
      { label: this.t.instant("docs.radio.modeRemote"), value: "remote" }
    ];
  }
  get contractOpts() {
    return [
      { label: this.t.instant("docs.radio.contractProbation"), value: "probation" },
      { label: this.t.instant("docs.radio.contractFixed"), value: "fixed" },
      { label: this.t.instant("docs.radio.contractPermanent"), value: "permanent" }
    ];
  }
  static {
    this.\u0275fac = function SgDocRadio_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocRadio)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocRadio, selectors: [["sg-doc-radio"]], decls: 56, vars: 81, consts: [["category", "Data Input", 3, "title", "desc"], ["sgOverview", ""], [2, "width", "100%", "max-width", "340px"], [3, "label", "help"], [3, "ngModelChange", "ngModel", "options"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], [3, "innerHTML"], ["sgExamples", ""], [3, "title", "desc"], [2, "width", "100%", "max-width", "420px"], [2, "width", "100%", "max-width", "360px"], [3, "label", "required", "error"]], template: function SgDocRadio_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "div", 1)(4, "div", 2)(5, "hrm-form-field", 3);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementStart(8, "hrm-radio-group", 4);
        \u0275\u0275twoWayListener("ngModelChange", function SgDocRadio_Template_hrm_radio_group_ngModelChange_8_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.period, $event) || (ctx.period = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(9, "div", 5);
        \u0275\u0275element(10, "sg-use", 6);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 7)(15, "sg-do");
        \u0275\u0275element(16, "span", 8);
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "sg-do");
        \u0275\u0275element(19, "span", 8);
        \u0275\u0275pipe(20, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "sg-do");
        \u0275\u0275element(22, "span", 8);
        \u0275\u0275pipe(23, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "sg-dont");
        \u0275\u0275element(25, "span", 8);
        \u0275\u0275pipe(26, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 9)(28, "sg-example", 10);
        \u0275\u0275pipe(29, "translate");
        \u0275\u0275pipe(30, "translate");
        \u0275\u0275elementStart(31, "sg-row")(32, "hrm-radio-group", 4);
        \u0275\u0275twoWayListener("ngModelChange", function SgDocRadio_Template_hrm_radio_group_ngModelChange_32_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.period, $event) || (ctx.period = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(33, "sg-example", 10);
        \u0275\u0275pipe(34, "translate");
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275elementStart(36, "sg-row")(37, "hrm-radio-group", 4);
        \u0275\u0275twoWayListener("ngModelChange", function SgDocRadio_Template_hrm_radio_group_ngModelChange_37_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.plan, $event) || (ctx.plan = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(38, "sg-example", 10);
        \u0275\u0275pipe(39, "translate");
        \u0275\u0275pipe(40, "translate");
        \u0275\u0275elementStart(41, "sg-row")(42, "div", 11)(43, "hrm-form-field", 3);
        \u0275\u0275pipe(44, "translate");
        \u0275\u0275pipe(45, "translate");
        \u0275\u0275elementStart(46, "hrm-radio-group", 4);
        \u0275\u0275twoWayListener("ngModelChange", function SgDocRadio_Template_hrm_radio_group_ngModelChange_46_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.workMode, $event) || (ctx.workMode = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(47, "sg-example", 10);
        \u0275\u0275pipe(48, "translate");
        \u0275\u0275pipe(49, "translate");
        \u0275\u0275elementStart(50, "sg-row")(51, "div", 12)(52, "hrm-form-field", 13);
        \u0275\u0275pipe(53, "translate");
        \u0275\u0275pipe(54, "translate");
        \u0275\u0275elementStart(55, "hrm-radio-group", 4);
        \u0275\u0275twoWayListener("ngModelChange", function SgDocRadio_Template_hrm_radio_group_ngModelChange_55_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.contract, $event) || (ctx.contract = $event);
          return $event;
        });
        \u0275\u0275elementEnd()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 35, "docs.radio.title"))("desc", \u0275\u0275pipeBind1(2, 37, "docs.radio.desc"));
        \u0275\u0275advance(5);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(6, 39, "docs.radio.ovLabel"))("help", \u0275\u0275pipeBind1(7, 41, "docs.radio.ovHelp"));
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.period);
        \u0275\u0275property("options", ctx.periodOpts);
        \u0275\u0275advance(2);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(11, 43, "docs.radio.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(12, 45, "docs.radio.behavior"))("avoid", \u0275\u0275pipeBind1(13, 47, "docs.radio.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(17, 49, "docs.radio.do1"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(20, 51, "docs.radio.do2"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(23, 53, "docs.radio.do3"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(26, 55, "docs.radio.dont1"), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(29, 57, "docs.radio.exHorizT"))("desc", \u0275\u0275pipeBind1(30, 59, "docs.radio.exHorizD"));
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.period);
        \u0275\u0275property("options", ctx.periodOpts);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(34, 61, "docs.radio.exPlanT"))("desc", \u0275\u0275pipeBind1(35, 63, "docs.radio.exPlanD"));
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.plan);
        \u0275\u0275property("options", ctx.planOpts);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(39, 65, "docs.radio.exDescT"))("desc", \u0275\u0275pipeBind1(40, 67, "docs.radio.exDescD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(44, 69, "docs.radio.workMode"))("help", \u0275\u0275pipeBind1(45, 71, "docs.radio.helpWorkMode"));
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.workMode);
        \u0275\u0275property("options", ctx.workModeOpts);
        \u0275\u0275advance();
        \u0275\u0275property("title", \u0275\u0275pipeBind1(48, 73, "docs.radio.exReqT"))("desc", \u0275\u0275pipeBind1(49, 75, "docs.radio.exReqD"));
        \u0275\u0275advance(5);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(53, 77, "docs.radio.contractType"))("required", true)("error", ctx.contract ? "" : \u0275\u0275pipeBind1(54, 79, "docs.radio.errContract"));
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.contract);
        \u0275\u0275property("options", ctx.contractOpts);
      }
    }, dependencies: [FormsModule, NgControlStatus, NgModel, TranslateModule, HrmRadioGroup, HrmFormField, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocRadio, [{
    type: Component,
    args: [{
      selector: "sg-doc-radio",
      imports: [FormsModule, TranslateModule, HrmRadioGroup, HrmFormField, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow],
      template: `
    <sg-doc category="Data Input" [title]="'docs.radio.title' | translate" [desc]="'docs.radio.desc' | translate">

      <div sgOverview>
        <div style="width:100%;max-width:340px">
          <hrm-form-field [label]="'docs.radio.ovLabel' | translate" [help]="'docs.radio.ovHelp' | translate">
            <hrm-radio-group [(ngModel)]="period" [options]="periodOpts" />
          </hrm-form-field>
        </div>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.radio.purpose' | translate"
          [when]="when"
          [behavior]="'docs.radio.behavior' | translate"
          [avoid]="'docs.radio.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do><span [innerHTML]="'docs.radio.do1' | translate"></span></sg-do>
        <sg-do><span [innerHTML]="'docs.radio.do2' | translate"></span></sg-do>
        <sg-do><span [innerHTML]="'docs.radio.do3' | translate"></span></sg-do>
        <sg-dont><span [innerHTML]="'docs.radio.dont1' | translate"></span></sg-dont>
      </div>

      <div sgExamples>
        <sg-example [title]="'docs.radio.exHorizT' | translate"
          [desc]="'docs.radio.exHorizD' | translate">
          <sg-row>
            <hrm-radio-group [(ngModel)]="period" [options]="periodOpts" />
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.radio.exPlanT' | translate"
          [desc]="'docs.radio.exPlanD' | translate">
          <sg-row>
            <hrm-radio-group [(ngModel)]="plan" [options]="planOpts" />
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.radio.exDescT' | translate"
          [desc]="'docs.radio.exDescD' | translate">
          <sg-row>
            <div style="width:100%;max-width:420px">
              <hrm-form-field [label]="'docs.radio.workMode' | translate" [help]="'docs.radio.helpWorkMode' | translate">
                <hrm-radio-group [(ngModel)]="workMode" [options]="workModeOpts" />
              </hrm-form-field>
            </div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.radio.exReqT' | translate"
          [desc]="'docs.radio.exReqD' | translate">
          <sg-row>
            <div style="width:100%;max-width:360px">
              <hrm-form-field [label]="'docs.radio.contractType' | translate" [required]="true"
                [error]="contract ? '' : ('docs.radio.errContract' | translate)">
                <hrm-radio-group [(ngModel)]="contract" [options]="contractOpts" />
              </hrm-form-field>
            </div>
          </sg-row>
        </sg-example>
      </div>

    </sg-doc>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocRadio, { className: "SgDocRadio", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/data-entry/radio.ts", lineNumber: 80 });
})();
export {
  SgDocRadio
};
//# sourceMappingURL=chunk-3LKIKEWM.js.map
