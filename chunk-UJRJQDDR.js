import {
  SgDo,
  SgDoc,
  SgDont,
  SgExample,
  SgRow,
  SgUse
} from "./chunk-2SR4XMAS.js";
import {
  NzAvatarComponent,
  NzAvatarModule
} from "./chunk-KXHKNX77.js";
import {
  CdkPortalOutlet,
  TemplatePortal
} from "./chunk-LIYCNYOA.js";
import "./chunk-LVO4IPRO.js";
import {
  NzOutletModule,
  NzStringTemplateOutletDirective
} from "./chunk-T7NAGNI6.js";
import "./chunk-Y56K4O2M.js";
import "./chunk-REKUOEC5.js";
import {
  Directionality
} from "./chunk-QANRYIV5.js";
import "./chunk-4363XCMO.js";
import "./chunk-W6FDVVRF.js";
import {
  takeUntilDestroyed
} from "./chunk-KVAFNQGO.js";
import "./chunk-VUIKJ27O.js";
import "./chunk-W3HXIMCC.js";
import {
  MessageReply,
  TablerIconComponent,
  ThumbUp
} from "./chunk-QL2Z65KF.js";
import "./chunk-XYGM7GOW.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-B7ZDCASH.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  DestroyRef,
  Directive,
  Input,
  NgModule,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  inject,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomTemplate,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-X3WVFRKD.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-comment.mjs
var _c0 = ["*"];
function NzCommentActionComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
var _c1 = [[["nz-avatar", "nz-comment-avatar", ""]], [["nz-comment-content"]], "*"];
var _c2 = ["nz-avatar[nz-comment-avatar]", "nz-comment-content", "*"];
function NzCommentComponent_Conditional_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.nzAuthor);
  }
}
function NzCommentComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275template(1, NzCommentComponent_Conditional_5_ng_container_1_Template, 2, 1, "ng-container", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("nzStringTemplateOutlet", ctx_r0.nzAuthor);
  }
}
function NzCommentComponent_Conditional_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.nzDatetime);
  }
}
function NzCommentComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275template(1, NzCommentComponent_Conditional_6_ng_container_1_Template, 2, 1, "ng-container", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("nzStringTemplateOutlet", ctx_r0.nzDatetime);
  }
}
function NzCommentComponent_Conditional_8_For_2_ng_template_2_Template(rf, ctx) {
}
function NzCommentComponent_Conditional_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "span");
    \u0275\u0275template(2, NzCommentComponent_Conditional_8_For_2_ng_template_2_Template, 0, 0, "ng-template", 9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const action_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("nzCommentActionHost", action_r2.content);
  }
}
function NzCommentComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 6);
    \u0275\u0275repeaterCreate(1, NzCommentComponent_Conditional_8_For_2_Template, 3, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.actions);
  }
}
var NzCommentAvatarDirective = class _NzCommentAvatarDirective {
  static \u0275fac = function NzCommentAvatarDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzCommentAvatarDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NzCommentAvatarDirective,
    selectors: [["nz-avatar", "nz-comment-avatar", ""]],
    exportAs: ["nzCommentAvatar"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCommentAvatarDirective, [{
    type: Directive,
    args: [{
      selector: "nz-avatar[nz-comment-avatar]",
      exportAs: "nzCommentAvatar"
    }]
  }], null, null);
})();
var NzCommentContentDirective = class _NzCommentContentDirective {
  static \u0275fac = function NzCommentContentDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzCommentContentDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NzCommentContentDirective,
    selectors: [["nz-comment-content"], ["", "nz-comment-content", ""]],
    hostAttrs: [1, "ant-comment-content-detail"],
    exportAs: ["nzCommentContent"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCommentContentDirective, [{
    type: Directive,
    args: [{
      selector: "nz-comment-content, [nz-comment-content]",
      exportAs: "nzCommentContent",
      host: {
        class: "ant-comment-content-detail"
      }
    }]
  }], null, null);
})();
var NzCommentActionHostDirective = class _NzCommentActionHostDirective extends CdkPortalOutlet {
  nzCommentActionHost;
  ngOnInit() {
    super.ngOnInit();
  }
  ngOnDestroy() {
    super.ngOnDestroy();
  }
  ngAfterViewInit() {
    this.attach(this.nzCommentActionHost);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275NzCommentActionHostDirective_BaseFactory;
    return function NzCommentActionHostDirective_Factory(__ngFactoryType__) {
      return (\u0275NzCommentActionHostDirective_BaseFactory || (\u0275NzCommentActionHostDirective_BaseFactory = \u0275\u0275getInheritedFactory(_NzCommentActionHostDirective)))(__ngFactoryType__ || _NzCommentActionHostDirective);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NzCommentActionHostDirective,
    selectors: [["", "nzCommentActionHost", ""]],
    inputs: {
      nzCommentActionHost: "nzCommentActionHost"
    },
    exportAs: ["nzCommentActionHost"],
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCommentActionHostDirective, [{
    type: Directive,
    args: [{
      selector: "[nzCommentActionHost]",
      exportAs: "nzCommentActionHost"
    }]
  }], null, {
    nzCommentActionHost: [{
      type: Input
    }]
  });
})();
var NzCommentActionComponent = class _NzCommentActionComponent {
  implicitContent;
  viewContainerRef = inject(ViewContainerRef);
  contentPortal = null;
  get content() {
    return this.contentPortal;
  }
  ngOnInit() {
    this.contentPortal = new TemplatePortal(this.implicitContent, this.viewContainerRef);
  }
  static \u0275fac = function NzCommentActionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzCommentActionComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzCommentActionComponent,
    selectors: [["nz-comment-action"]],
    viewQuery: function NzCommentActionComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(TemplateRef, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.implicitContent = _t.first);
      }
    },
    exportAs: ["nzCommentAction"],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function NzCommentActionComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275domTemplate(0, NzCommentActionComponent_ng_template_0_Template, 1, 0, "ng-template");
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCommentActionComponent, [{
    type: Component,
    args: [{
      selector: "nz-comment-action",
      exportAs: "nzCommentAction",
      template: "<ng-template><ng-content /></ng-template>",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, {
    implicitContent: [{
      type: ViewChild,
      args: [TemplateRef, {
        static: true
      }]
    }]
  });
})();
var NzCommentComponent = class _NzCommentComponent {
  destroyRef = inject(DestroyRef);
  cdr = inject(ChangeDetectorRef);
  directionality = inject(Directionality);
  nzAuthor;
  nzDatetime;
  dir = "ltr";
  actions;
  ngOnInit() {
    this.directionality.change?.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
  }
  static \u0275fac = function NzCommentComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzCommentComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzCommentComponent,
    selectors: [["nz-comment"]],
    contentQueries: function NzCommentComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, NzCommentActionComponent, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.actions = _t);
      }
    },
    hostVars: 4,
    hostBindings: function NzCommentComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("ant-comment", true)("ant-comment-rtl", ctx.dir === "rtl");
      }
    },
    inputs: {
      nzAuthor: "nzAuthor",
      nzDatetime: "nzDatetime"
    },
    exportAs: ["nzComment"],
    ngContentSelectors: _c2,
    decls: 11,
    vars: 3,
    consts: [[1, "ant-comment-inner"], [1, "ant-comment-avatar"], [1, "ant-comment-content"], [1, "ant-comment-content-author"], [1, "ant-comment-content-author-name"], [1, "ant-comment-content-author-time"], [1, "ant-comment-actions"], [1, "ant-comment-nested"], [4, "nzStringTemplateOutlet"], [3, "nzCommentActionHost"]],
    template: function NzCommentComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c1);
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275projection(2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 2)(4, "div", 3);
        \u0275\u0275conditionalCreate(5, NzCommentComponent_Conditional_5_Template, 2, 1, "span", 4);
        \u0275\u0275conditionalCreate(6, NzCommentComponent_Conditional_6_Template, 2, 1, "span", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275projection(7, 1);
        \u0275\u0275conditionalCreate(8, NzCommentComponent_Conditional_8_Template, 3, 0, "ul", 6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 7);
        \u0275\u0275projection(10, 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275conditional(ctx.nzAuthor ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.nzDatetime ? 6 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional((ctx.actions == null ? null : ctx.actions.length) ? 8 : -1);
      }
    },
    dependencies: [NzOutletModule, NzStringTemplateOutletDirective, NzCommentActionHostDirective],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCommentComponent, [{
    type: Component,
    args: [{
      selector: "nz-comment",
      exportAs: "nzComment",
      template: `
    <div class="ant-comment-inner">
      <div class="ant-comment-avatar">
        <ng-content select="nz-avatar[nz-comment-avatar]" />
      </div>
      <div class="ant-comment-content">
        <div class="ant-comment-content-author">
          @if (nzAuthor) {
            <span class="ant-comment-content-author-name">
              <ng-container *nzStringTemplateOutlet="nzAuthor">{{ nzAuthor }}</ng-container>
            </span>
          }
          @if (nzDatetime) {
            <span class="ant-comment-content-author-time">
              <ng-container *nzStringTemplateOutlet="nzDatetime">{{ nzDatetime }}</ng-container>
            </span>
          }
        </div>
        <ng-content select="nz-comment-content" />
        @if (actions?.length) {
          <ul class="ant-comment-actions">
            @for (action of actions; track action) {
              <li>
                <span><ng-template [nzCommentActionHost]="action.content" /></span>
              </li>
            }
          </ul>
        }
      </div>
    </div>
    <div class="ant-comment-nested">
      <ng-content />
    </div>
  `,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class.ant-comment]": `true`,
        "[class.ant-comment-rtl]": `dir === "rtl"`
      },
      imports: [NzOutletModule, NzCommentActionHostDirective]
    }]
  }], null, {
    nzAuthor: [{
      type: Input
    }],
    nzDatetime: [{
      type: Input
    }],
    actions: [{
      type: ContentChildren,
      args: [NzCommentActionComponent]
    }]
  });
})();
var NZ_COMMENT_CELLS = [NzCommentAvatarDirective, NzCommentContentDirective, NzCommentActionComponent, NzCommentActionHostDirective];
var NzCommentModule = class _NzCommentModule {
  static \u0275fac = function NzCommentModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzCommentModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NzCommentModule,
    imports: [NzCommentComponent, NzCommentAvatarDirective, NzCommentContentDirective, NzCommentActionComponent, NzCommentActionHostDirective],
    exports: [NzCommentComponent, NzCommentAvatarDirective, NzCommentContentDirective, NzCommentActionComponent, NzCommentActionHostDirective]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [NzCommentComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCommentModule, [{
    type: NgModule,
    args: [{
      imports: [NzCommentComponent, ...NZ_COMMENT_CELLS],
      exports: [NzCommentComponent, ...NZ_COMMENT_CELLS]
    }]
  }], null, null);
})();

// libs/hrm-ui/src/lib/data-display/hrm-comment.ts
var _c02 = ["*", [["nz-comment-action"]], [["hrm-comment"]]];
var _c12 = ["*", "nz-comment-action", "hrm-comment"];
function HrmComment_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-avatar", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("nzSrc", ctx_r0.avatarSrc());
  }
}
function HrmComment_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-avatar", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("nzText", ctx_r0.avatarText());
  }
}
var HrmComment = class _HrmComment {
  constructor() {
    this.author = input("", ...ngDevMode ? [{ debugName: "author" }] : (
      /* istanbul ignore next */
      []
    ));
    this.datetime = input("", ...ngDevMode ? [{ debugName: "datetime" }] : (
      /* istanbul ignore next */
      []
    ));
    this.avatarText = input("", ...ngDevMode ? [{ debugName: "avatarText" }] : (
      /* istanbul ignore next */
      []
    ));
    this.avatarSrc = input("", ...ngDevMode ? [{ debugName: "avatarSrc" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function HrmComment_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HrmComment)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmComment, selectors: [["hrm-comment"]], hostAttrs: [1, "hrm-comment"], inputs: { author: [1, "author"], datetime: [1, "datetime"], avatarText: [1, "avatarText"], avatarSrc: [1, "avatarSrc"] }, ngContentSelectors: _c12, decls: 7, vars: 3, consts: [[3, "nzAuthor", "nzDatetime"], ["nz-comment-avatar", "", 3, "nzSrc"], ["nz-comment-avatar", "", 3, "nzText"]], template: function HrmComment_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c02);
        \u0275\u0275elementStart(0, "nz-comment", 0);
        \u0275\u0275conditionalCreate(1, HrmComment_Conditional_1_Template, 1, 1, "nz-avatar", 1)(2, HrmComment_Conditional_2_Template, 1, 1, "nz-avatar", 2);
        \u0275\u0275elementStart(3, "nz-comment-content");
        \u0275\u0275projection(4);
        \u0275\u0275elementEnd();
        \u0275\u0275projection(5, 1);
        \u0275\u0275projection(6, 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("nzAuthor", ctx.author())("nzDatetime", ctx.datetime());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.avatarSrc() ? 1 : 2);
      }
    }, dependencies: [NzCommentModule, NzCommentComponent, NzCommentAvatarDirective, NzCommentContentDirective, NzAvatarModule, NzAvatarComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmComment, [{
    type: Component,
    args: [{
      selector: "hrm-comment",
      imports: [NzCommentModule, NzAvatarModule],
      template: `
    <nz-comment [nzAuthor]="author()" [nzDatetime]="datetime()">
      @if (avatarSrc()) {
        <nz-avatar nz-comment-avatar [nzSrc]="avatarSrc()"></nz-avatar>
      } @else {
        <nz-avatar nz-comment-avatar [nzText]="avatarText()"></nz-avatar>
      }
      <nz-comment-content><ng-content /></nz-comment-content>
      <ng-content select="nz-comment-action" />
      <ng-content select="hrm-comment" />
    </nz-comment>
  `,
      host: { class: "hrm-comment" }
    }]
  }], null, { author: [{ type: Input, args: [{ isSignal: true, alias: "author", required: false }] }], datetime: [{ type: Input, args: [{ isSignal: true, alias: "datetime", required: false }] }], avatarText: [{ type: Input, args: [{ isSignal: true, alias: "avatarText", required: false }] }], avatarSrc: [{ type: Input, args: [{ isSignal: true, alias: "avatarSrc", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmComment, { className: "HrmComment", filePath: "libs/hrm-ui/src/lib/data-display/hrm-comment.ts", lineNumber: 32 });
})();

// apps/ds-demo/src/app/features/styleguide/pages/hrm/data-display/comment.ts
var SgDocComment = class _SgDocComment {
  constructor() {
    this.thumbUp = ThumbUp;
    this.reply = MessageReply;
    this.when = [
      "docs.comment.when1",
      "docs.comment.when2",
      "docs.comment.when3"
    ];
  }
  static {
    this.\u0275fac = function SgDocComment_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SgDocComment)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SgDocComment, selectors: [["sg-doc-comment"]], decls: 79, vars: 110, consts: [["category", "Content", 3, "title", "desc"], ["sgOverview", ""], [2, "width", "100%", "max-width", "520px"], ["avatarText", "A", 3, "author", "datetime"], ["sgUsage", ""], [3, "purpose", "when", "behavior", "avoid"], ["sgBest", ""], ["sgExamples", ""], [3, "title", "desc"], ["avatarText", "B", 3, "author", "datetime"], ["avatarText", "C", 3, "author", "datetime"], [1, "cmt-act"], [3, "icon", "size"]], template: function SgDocComment_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "sg-doc", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementStart(3, "div", 1)(4, "div", 2)(5, "hrm-comment", 3);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "div", 4);
        \u0275\u0275element(11, "sg-use", 5);
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 6)(16, "sg-do");
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "sg-do");
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "sg-do");
        \u0275\u0275text(23);
        \u0275\u0275pipe(24, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "sg-dont");
        \u0275\u0275text(26);
        \u0275\u0275pipe(27, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 7)(29, "sg-example", 8);
        \u0275\u0275pipe(30, "translate");
        \u0275\u0275pipe(31, "translate");
        \u0275\u0275elementStart(32, "sg-row")(33, "div", 2)(34, "hrm-comment", 9);
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275pipe(36, "translate");
        \u0275\u0275text(37);
        \u0275\u0275pipe(38, "translate");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(39, "sg-example", 8);
        \u0275\u0275pipe(40, "translate");
        \u0275\u0275pipe(41, "translate");
        \u0275\u0275elementStart(42, "sg-row")(43, "div", 2)(44, "hrm-comment", 9);
        \u0275\u0275pipe(45, "translate");
        \u0275\u0275pipe(46, "translate");
        \u0275\u0275text(47);
        \u0275\u0275pipe(48, "translate");
        \u0275\u0275elementStart(49, "hrm-comment", 3);
        \u0275\u0275pipe(50, "translate");
        \u0275\u0275pipe(51, "translate");
        \u0275\u0275text(52);
        \u0275\u0275pipe(53, "translate");
        \u0275\u0275elementStart(54, "hrm-comment", 9);
        \u0275\u0275pipe(55, "translate");
        \u0275\u0275pipe(56, "translate");
        \u0275\u0275text(57);
        \u0275\u0275pipe(58, "translate");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(59, "sg-example", 8);
        \u0275\u0275pipe(60, "translate");
        \u0275\u0275pipe(61, "translate");
        \u0275\u0275elementStart(62, "sg-row")(63, "div", 2)(64, "hrm-comment", 10);
        \u0275\u0275pipe(65, "translate");
        \u0275\u0275pipe(66, "translate");
        \u0275\u0275text(67);
        \u0275\u0275pipe(68, "translate");
        \u0275\u0275elementStart(69, "nz-comment-action")(70, "span", 11);
        \u0275\u0275element(71, "tabler-icon", 12);
        \u0275\u0275text(72);
        \u0275\u0275pipe(73, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(74, "nz-comment-action")(75, "span", 11);
        \u0275\u0275element(76, "tabler-icon", 12);
        \u0275\u0275text(77);
        \u0275\u0275pipe(78, "translate");
        \u0275\u0275elementEnd()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 40, "docs.comment.title"))("desc", \u0275\u0275pipeBind1(2, 42, "docs.comment.desc"));
        \u0275\u0275advance(5);
        \u0275\u0275property("author", \u0275\u0275pipeBind1(6, 44, "docs.comment.author1"))("datetime", \u0275\u0275pipeBind1(7, 46, "docs.comment.time1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 48, "docs.comment.ovBody"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("purpose", \u0275\u0275pipeBind1(12, 50, "docs.comment.purpose"))("when", ctx.when)("behavior", \u0275\u0275pipeBind1(13, 52, "docs.comment.behavior"))("avoid", \u0275\u0275pipeBind1(14, 54, "docs.comment.avoid"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 56, "docs.comment.do1"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 58, "docs.comment.do2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 60, "docs.comment.do3"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 62, "docs.comment.dont1"));
        \u0275\u0275advance(3);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(30, 64, "docs.comment.ex1T"))("desc", \u0275\u0275pipeBind1(31, 66, "docs.comment.ex1D"));
        \u0275\u0275advance(5);
        \u0275\u0275property("author", \u0275\u0275pipeBind1(35, 68, "docs.comment.author2"))("datetime", \u0275\u0275pipeBind1(36, 70, "docs.comment.time2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(38, 72, "docs.comment.ex1Body"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(40, 74, "docs.comment.ex2T"))("desc", \u0275\u0275pipeBind1(41, 76, "docs.comment.ex2D"));
        \u0275\u0275advance(5);
        \u0275\u0275property("author", \u0275\u0275pipeBind1(45, 78, "docs.comment.author2"))("datetime", \u0275\u0275pipeBind1(46, 80, "docs.comment.time2"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(48, 82, "docs.comment.ex2Body1"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("author", \u0275\u0275pipeBind1(50, 84, "docs.comment.author1"))("datetime", \u0275\u0275pipeBind1(51, 86, "docs.comment.time3"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(53, 88, "docs.comment.ex2Body2"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("author", \u0275\u0275pipeBind1(55, 90, "docs.comment.author2"))("datetime", \u0275\u0275pipeBind1(56, 92, "docs.comment.time4"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(58, 94, "docs.comment.ex2Body3"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(60, 96, "docs.comment.ex3T"))("desc", \u0275\u0275pipeBind1(61, 98, "docs.comment.ex3D"));
        \u0275\u0275advance(5);
        \u0275\u0275property("author", \u0275\u0275pipeBind1(65, 100, "docs.comment.author3"))("datetime", \u0275\u0275pipeBind1(66, 102, "docs.comment.time5"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(68, 104, "docs.comment.ex3Body"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275property("icon", ctx.thumbUp)("size", 15);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(73, 106, "docs.comment.like"));
        \u0275\u0275advance(4);
        \u0275\u0275property("icon", ctx.reply)("size", 15);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(78, 108, "docs.comment.reply"));
      }
    }, dependencies: [TranslateModule, TablerIconComponent, NzCommentModule, NzCommentActionComponent, HrmComment, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow, TranslatePipe], styles: ["\n.cmt-act[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  cursor: pointer;\n  color: var(--text-sub);\n  font-size: var(--fs-13);\n}\n.cmt-act[_ngcontent-%COMP%]:hover {\n  color: var(--primary-base);\n}\n/*# sourceMappingURL=comment.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SgDocComment, [{
    type: Component,
    args: [{ selector: "sg-doc-comment", imports: [TranslateModule, TablerIconComponent, NzCommentModule, HrmComment, SgDoc, SgUse, SgDo, SgDont, SgExample, SgRow], template: `
    <sg-doc category="Content" [title]="'docs.comment.title' | translate" [desc]="'docs.comment.desc' | translate">

      <div sgOverview>
        <div style="width:100%;max-width:520px">
          <hrm-comment [author]="'docs.comment.author1' | translate" [datetime]="'docs.comment.time1' | translate" avatarText="A">
            {{ 'docs.comment.ovBody' | translate }}
          </hrm-comment>
        </div>
      </div>

      <div sgUsage>
        <sg-use
          [purpose]="'docs.comment.purpose' | translate"
          [when]="when"
          [behavior]="'docs.comment.behavior' | translate"
          [avoid]="'docs.comment.avoid' | translate" />
      </div>

      <div sgBest>
        <sg-do>{{ 'docs.comment.do1' | translate }}</sg-do>
        <sg-do>{{ 'docs.comment.do2' | translate }}</sg-do>
        <sg-do>{{ 'docs.comment.do3' | translate }}</sg-do>
        <sg-dont>{{ 'docs.comment.dont1' | translate }}</sg-dont>
      </div>

      <div sgExamples>

        <sg-example [title]="'docs.comment.ex1T' | translate"
          [desc]="'docs.comment.ex1D' | translate">
          <sg-row>
            <div style="width:100%;max-width:520px">
              <hrm-comment [author]="'docs.comment.author2' | translate" [datetime]="'docs.comment.time2' | translate" avatarText="B">
                {{ 'docs.comment.ex1Body' | translate }}
              </hrm-comment>
            </div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.comment.ex2T' | translate"
          [desc]="'docs.comment.ex2D' | translate">
          <sg-row>
            <div style="width:100%;max-width:520px">
              <hrm-comment [author]="'docs.comment.author2' | translate" [datetime]="'docs.comment.time2' | translate" avatarText="B">
                {{ 'docs.comment.ex2Body1' | translate }}
                <hrm-comment [author]="'docs.comment.author1' | translate" [datetime]="'docs.comment.time3' | translate" avatarText="A">
                  {{ 'docs.comment.ex2Body2' | translate }}
                  <hrm-comment [author]="'docs.comment.author2' | translate" [datetime]="'docs.comment.time4' | translate" avatarText="B">
                    {{ 'docs.comment.ex2Body3' | translate }}
                  </hrm-comment>
                </hrm-comment>
              </hrm-comment>
            </div>
          </sg-row>
        </sg-example>

        <sg-example [title]="'docs.comment.ex3T' | translate"
          [desc]="'docs.comment.ex3D' | translate">
          <sg-row>
            <div style="width:100%;max-width:520px">
              <hrm-comment [author]="'docs.comment.author3' | translate" [datetime]="'docs.comment.time5' | translate" avatarText="C">
                {{ 'docs.comment.ex3Body' | translate }}
                <nz-comment-action>
                  <span class="cmt-act"><tabler-icon [icon]="thumbUp" [size]="15" /> {{ 'docs.comment.like' | translate }}</span>
                </nz-comment-action>
                <nz-comment-action>
                  <span class="cmt-act"><tabler-icon [icon]="reply" [size]="15" /> {{ 'docs.comment.reply' | translate }}</span>
                </nz-comment-action>
              </hrm-comment>
            </div>
          </sg-row>
        </sg-example>

      </div>

    </sg-doc>
  `, styles: ["/* angular:styles/component:css;aa832f613a3a145af48b31b76b0b4f22b8deca9c7f672c08b9f73a067e64ac7f;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/styleguide/pages/hrm/data-display/comment.ts */\n.cmt-act {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  cursor: pointer;\n  color: var(--text-sub);\n  font-size: var(--fs-13);\n}\n.cmt-act:hover {\n  color: var(--primary-base);\n}\n/*# sourceMappingURL=comment.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SgDocComment, { className: "SgDocComment", filePath: "apps/ds-demo/src/app/features/styleguide/pages/hrm/data-display/comment.ts", lineNumber: 98 });
})();
export {
  SgDocComment
};
//# sourceMappingURL=chunk-UJRJQDDR.js.map
