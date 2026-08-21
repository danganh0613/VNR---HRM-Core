import {
  HrmDivider
} from "./chunk-PCXDK26M.js";
import "./chunk-ONEDVTQ4.js";
import {
  HrmCheckbox
} from "./chunk-V63HCRKY.js";
import "./chunk-BKAPBN54.js";
import {
  HrmInput
} from "./chunk-XC26CQEC.js";
import "./chunk-KOD2JY6G.js";
import {
  HrmButton
} from "./chunk-Z7JSW4RV.js";
import "./chunk-VA24G7CQ.js";
import "./chunk-MBPTEHMI.js";
import {
  FormsModule,
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
import {
  ChevronDown,
  Eye,
  EyeOff,
  Lock,
  Mail,
  TablerIconComponent,
  User,
  World
} from "./chunk-QL2Z65KF.js";
import "./chunk-XYGM7GOW.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-B7ZDCASH.js";
import {
  Component,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-X3WVFRKD.js";

// apps/ds-demo/src/app/features/auth/login.ts
var _c0 = () => ({ provider: "Google" });
var _c1 = () => ({ provider: "Microsoft" });
var _c2 = () => ({ provider: "LinkedIn" });
var LoginPage = class _LoginPage {
  constructor() {
    this.userIc = User;
    this.mail = Mail;
    this.lock = Lock;
    this.eye = Eye;
    this.eyeOff = EyeOff;
    this.world = World;
    this.chev = ChevronDown;
    this.email = "";
    this.password = "";
    this.remember = true;
    this.show = signal(false, ...ngDevMode ? [{ debugName: "show" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  static {
    this.\u0275fac = function LoginPage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoginPage)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginPage, selectors: [["app-login"]], decls: 85, vars: 72, consts: [[1, "lg"], [1, "lg-brand"], [1, "lg-quote"], [1, "lg-q-text"], [1, "lg-q-name"], [1, "lg-q-role"], [1, "lg-dots"], [1, "on"], [1, "lg-form"], [1, "lg-top"], ["src", "/assets/vnr-wordmark.svg", "alt", "VnResource", 1, "lg-logo-img"], [1, "lg-reg"], ["type", "button", 1, "lg-reg-btn"], [1, "lg-card"], [1, "lg-avatar"], [3, "icon", "size"], [1, "lg-title"], [1, "lg-sub"], [1, "lg-social"], ["variant", "default", 3, "block", "ariaLabel"], ["width", "20", "height", "20", "viewBox", "0 0 48 48", "xmlns", "http://www.w3.org/2000/svg", "aria-hidden", "true"], ["fill", "#FFC107", "d", "M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5z"], ["fill", "#FF3D00", "d", "M6.3 14.7l6.6 4.8C14.6 15.1 18.9 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"], ["fill", "#4CAF50", "d", "M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2c-2 1.5-4.6 2.4-7.2 2.4-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.6 39.6 16.2 44 24 44z"], ["fill", "#1976D2", "d", "M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.2 4.3-4.1 5.6l6.2 5.2C40.9 35.7 44 30.4 44 24c0-1.3-.1-2.3-.4-3.5z"], ["width", "18", "height", "18", "viewBox", "0 0 23 23", "xmlns", "http://www.w3.org/2000/svg", "aria-hidden", "true"], ["fill", "#F25022", "d", "M1 1h10v10H1z"], ["fill", "#7FBA00", "d", "M12 1h10v10H12z"], ["fill", "#00A4EF", "d", "M1 12h10v10H1z"], ["fill", "#FFB900", "d", "M12 12h10v10H12z"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "xmlns", "http://www.w3.org/2000/svg", "aria-hidden", "true"], ["fill", "#0A66C2", "d", "M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.74v20.5C0 23.2.8 24 1.77 24h20.45c.98 0 1.78-.8 1.78-1.76V1.74C24 .78 23.2 0 22.22 0z"], [3, "text"], [1, "lg-field"], [1, "lg-label"], ["htmlType", "email", "placeholder", "hello@vnresource.com", 3, "ngModelChange", "ngModel", "prefixIcon"], [1, "lg-pass"], ["placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 3, "ngModelChange", "ngModel", "prefixIcon", "htmlType"], ["type", "button", 1, "lg-eye", 3, "click"], [1, "lg-row"], [3, "ngModelChange", "ngModel"], ["type", "button", 1, "lg-forgot"], ["variant", "primary", 1, "lg-submit", 3, "block"], [1, "lg-foot"], ["type", "button", 1, "lg-lang"]], template: function LoginPage_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "aside", 1)(2, "div", 2)(3, "p", 3);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 4);
        \u0275\u0275text(7, "Nguy\u1EC5n Trung Hi\u1EBFu");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 5);
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 6);
        \u0275\u0275element(12, "i", 7)(13, "i")(14, "i");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "section", 8)(16, "header", 9);
        \u0275\u0275element(17, "img", 10);
        \u0275\u0275elementStart(18, "span", 11);
        \u0275\u0275text(19);
        \u0275\u0275pipe(20, "translate");
        \u0275\u0275elementStart(21, "button", 12);
        \u0275\u0275text(22);
        \u0275\u0275pipe(23, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(24, "div", 13)(25, "div", 14);
        \u0275\u0275element(26, "tabler-icon", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "h1", 16);
        \u0275\u0275text(28);
        \u0275\u0275pipe(29, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "p", 17);
        \u0275\u0275text(31);
        \u0275\u0275pipe(32, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "div", 18)(34, "hrm-button", 19);
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(36, "svg", 20);
        \u0275\u0275element(37, "path", 21)(38, "path", 22)(39, "path", 23)(40, "path", 24);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(41, "hrm-button", 19);
        \u0275\u0275pipe(42, "translate");
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(43, "svg", 25);
        \u0275\u0275element(44, "path", 26)(45, "path", 27)(46, "path", 28)(47, "path", 29);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(48, "hrm-button", 19);
        \u0275\u0275pipe(49, "translate");
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(50, "svg", 30);
        \u0275\u0275element(51, "path", 31);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275element(52, "hrm-divider", 32);
        \u0275\u0275pipe(53, "translate");
        \u0275\u0275elementStart(54, "label", 33)(55, "span", 34);
        \u0275\u0275text(56, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "hrm-input", 35);
        \u0275\u0275twoWayListener("ngModelChange", function LoginPage_Template_hrm_input_ngModelChange_57_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(58, "label", 33)(59, "span", 34);
        \u0275\u0275text(60);
        \u0275\u0275pipe(61, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "span", 36)(63, "hrm-input", 37);
        \u0275\u0275twoWayListener("ngModelChange", function LoginPage_Template_hrm_input_ngModelChange_63_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "button", 38);
        \u0275\u0275pipe(65, "translate");
        \u0275\u0275listener("click", function LoginPage_Template_button_click_64_listener() {
          return ctx.show.set(!ctx.show());
        });
        \u0275\u0275element(66, "tabler-icon", 15);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(67, "div", 39)(68, "hrm-checkbox", 40);
        \u0275\u0275twoWayListener("ngModelChange", function LoginPage_Template_hrm_checkbox_ngModelChange_68_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.remember, $event) || (ctx.remember = $event);
          return $event;
        });
        \u0275\u0275text(69);
        \u0275\u0275pipe(70, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "button", 41);
        \u0275\u0275text(72);
        \u0275\u0275pipe(73, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(74, "hrm-button", 42);
        \u0275\u0275text(75);
        \u0275\u0275pipe(76, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(77, "footer", 43)(78, "span");
        \u0275\u0275text(79, "\xA9 2025 VnResource");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(80, "button", 44);
        \u0275\u0275element(81, "tabler-icon", 15);
        \u0275\u0275text(82);
        \u0275\u0275pipe(83, "translate");
        \u0275\u0275element(84, "tabler-icon", 15);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 34, "docs.login.quote"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 36, "docs.login.quoteRole"));
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(20, 38, "docs.login.noAccount"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 40, "docs.login.register"));
        \u0275\u0275advance(4);
        \u0275\u0275property("icon", ctx.userIc)("size", 26);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 42, "docs.login.title"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 44, "docs.login.subtitle"));
        \u0275\u0275advance(3);
        \u0275\u0275property("block", true)("ariaLabel", \u0275\u0275pipeBind2(35, 46, "docs.login.ssoWith", \u0275\u0275pureFunction0(69, _c0)));
        \u0275\u0275advance(7);
        \u0275\u0275property("block", true)("ariaLabel", \u0275\u0275pipeBind2(42, 49, "docs.login.ssoWith", \u0275\u0275pureFunction0(70, _c1)));
        \u0275\u0275advance(7);
        \u0275\u0275property("block", true)("ariaLabel", \u0275\u0275pipeBind2(49, 52, "docs.login.ssoWith", \u0275\u0275pureFunction0(71, _c2)));
        \u0275\u0275advance(4);
        \u0275\u0275property("text", \u0275\u0275pipeBind1(53, 55, "docs.login.or"));
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.email);
        \u0275\u0275property("prefixIcon", ctx.mail);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(61, 57, "docs.login.password"));
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.password);
        \u0275\u0275property("prefixIcon", ctx.lock)("htmlType", ctx.show() ? "text" : "password");
        \u0275\u0275advance();
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(65, 59, ctx.show() ? "docs.login.hidePassword" : "docs.login.showPassword"));
        \u0275\u0275advance(2);
        \u0275\u0275property("icon", ctx.show() ? ctx.eyeOff : ctx.eye)("size", 18);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.remember);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(70, 61, "docs.login.remember"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(73, 63, "docs.login.forgot"));
        \u0275\u0275advance(2);
        \u0275\u0275property("block", true);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(76, 65, "docs.login.signIn"));
        \u0275\u0275advance(6);
        \u0275\u0275property("icon", ctx.world)("size", 16);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(83, 67, "docs.login.lang"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("icon", ctx.chev)("size", 14);
      }
    }, dependencies: [FormsModule, NgControlStatus, NgModel, TranslateModule, TablerIconComponent, HrmInput, HrmButton, HrmCheckbox, HrmDivider, TranslatePipe], styles: ['\n[_nghost-%COMP%] {\n  --vnr-dark: #145300;\n  --vnr-green: #1c7a0a;\n  --vnr-lime: #8ec517;\n  --primary-base: #1c7a0a;\n  position: relative;\n  display: block;\n  height: 100vh;\n  overflow: hidden;\n  isolation: isolate;\n  font-family: var(--font-sans);\n  color: var(--text-body);\n  background:\n    linear-gradient(\n      158deg,\n      #0f4d00 0%,\n      #256b0e 46%,\n      #7fbf1f 100%);\n}\n[_nghost-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: -160px;\n  top: -160px;\n  width: 720px;\n  height: 720px;\n  z-index: -1;\n  border-radius: 50%;\n  pointer-events: none;\n  background:\n    repeating-radial-gradient(\n      circle at center,\n      transparent 0 46px,\n      rgba(255, 255, 255, .06) 46px 48px);\n}\n.lg[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1.5fr;\n  height: 100vh;\n  padding: 24px;\n  gap: 24px;\n  box-sizing: border-box;\n}\n.lg-brand[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  color: #fff;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  padding: 30px 26px;\n}\n.lg-logo[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n}\n.lg-logo[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: var(--fs-19);\n  font-weight: 700;\n  color: #fff;\n  letter-spacing: -.01em;\n}\n.lg-quote[_ngcontent-%COMP%] {\n  max-width: 540px;\n}\n.lg-q-text[_ngcontent-%COMP%] {\n  font-size: var(--fs-26);\n  line-height: 1.44;\n  font-weight: 500;\n  margin: 0 0 24px;\n}\n.lg-q-name[_ngcontent-%COMP%] {\n  font-size: var(--fs-16);\n  font-weight: 700;\n}\n.lg-q-role[_ngcontent-%COMP%] {\n  font-size: var(--fs-14);\n  color: rgba(255, 255, 255, .82);\n  margin-top: 3px;\n}\n.lg-dots[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 7px;\n  margin-top: 24px;\n}\n.lg-dots[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, .4);\n}\n.lg-dots[_ngcontent-%COMP%]   i.on[_ngcontent-%COMP%] {\n  width: 22px;\n  border-radius: 5px;\n  background: #fff;\n}\n.lg-form[_ngcontent-%COMP%] {\n  min-width: 0;\n  background: var(--bg-surface);\n  border-radius: 26px;\n  padding: 30px 46px;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, .18);\n}\n.lg-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  min-height: 40px;\n  gap: 16px;\n}\n.lg-logo-img[_ngcontent-%COMP%] {\n  height: 32px;\n  width: auto;\n  display: block;\n}\n.lg-reg[_ngcontent-%COMP%] {\n  font-size: var(--fs-14);\n  color: var(--text-sub);\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  white-space: nowrap;\n}\n.lg-reg-btn[_ngcontent-%COMP%] {\n  border: 0;\n  cursor: pointer;\n  font-weight: 600;\n  color: #2f9e0e;\n  background: color-mix(in srgb, var(--vnr-lime) 22%, transparent);\n  padding: 6px 14px;\n  border-radius: 10px;\n  font-size: var(--fs-14);\n  transition: background .15s;\n}\n.lg-reg-btn[_ngcontent-%COMP%]:hover {\n  background: color-mix(in srgb, var(--vnr-lime) 34%, transparent);\n}\n.lg-card[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  width: 100%;\n  max-width: 372px;\n  margin: 0 auto;\n  justify-content: center;\n}\n.lg-avatar[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  display: grid;\n  place-items: center;\n  margin: 0 auto 16px;\n  color: var(--vnr-green);\n  background: var(--bg-surface);\n  box-shadow: 0 0 0 1px var(--border-sub), 0 0 0 8px color-mix(in srgb, var(--vnr-lime) 16%, transparent);\n}\n.lg-title[_ngcontent-%COMP%] {\n  font-size: var(--fs-26);\n  font-weight: 700;\n  color: var(--text-strong);\n  text-align: center;\n  margin: 0;\n}\n.lg-sub[_ngcontent-%COMP%] {\n  font-size: var(--fs-14);\n  color: var(--text-sub);\n  text-align: center;\n  margin: 6px 0 22px;\n}\n.lg-social[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n}\n.lg-social[_ngcontent-%COMP%]   hrm-button[_ngcontent-%COMP%]     .ant-btn {\n  height: 46px;\n}\n.lg-card[_ngcontent-%COMP%]   hrm-divider[_ngcontent-%COMP%] {\n  display: block;\n  margin: 18px 0;\n}\n.lg-card[_ngcontent-%COMP%]   hrm-divider[_ngcontent-%COMP%]     .ant-divider-inner-text {\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n  font-weight: 500;\n}\n.lg-flag[_ngcontent-%COMP%] {\n  font-size: var(--fs-15);\n  line-height: 1;\n}\n.lg-field[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 16px;\n}\n.lg-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: var(--fs-14);\n  font-weight: 500;\n  color: var(--text-strong);\n  margin-bottom: 7px;\n}\n.lg-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--vnr-lime);\n  font-style: normal;\n}\n.lg-field[_ngcontent-%COMP%]   hrm-input[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n}\n.lg-pass[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n}\n.lg-eye[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 2;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  color: var(--text-sub);\n  display: inline-flex;\n}\n.lg-eye[_ngcontent-%COMP%]:hover {\n  color: var(--text-strong);\n}\n.lg-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 6px 0 22px;\n}\n.lg-forgot[_ngcontent-%COMP%] {\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  font-size: var(--fs-14);\n  font-weight: 600;\n  color: var(--vnr-green);\n}\n.lg-forgot[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.lg-foot[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: var(--fs-13);\n  color: var(--text-sub);\n}\n.lg-lang[_ngcontent-%COMP%] {\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  color: var(--text-sub);\n  font-size: var(--fs-13);\n}\n@media (max-width: 900px) {\n  .lg-brand[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .lg-form[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=login.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginPage, [{
    type: Component,
    args: [{ selector: "app-login", imports: [FormsModule, TranslateModule, TablerIconComponent, HrmInput, HrmButton, HrmCheckbox, HrmDivider], template: `
    <div class="lg">
      <!-- Tr\xE1i: ch\u1EE9ng th\u1EF1c (tr\xEAn n\u1EC1n xanh) -->
      <aside class="lg-brand">
        <div class="lg-quote">
          <p class="lg-q-text">{{ 'docs.login.quote' | translate }}</p>
          <div class="lg-q-name">Nguy\u1EC5n Trung Hi\u1EBFu</div>
          <div class="lg-q-role">{{ 'docs.login.quoteRole' | translate }}</div>
          <div class="lg-dots"><i class="on"></i><i></i><i></i></div>
        </div>
      </aside>

      <!-- Ph\u1EA3i: th\u1EBB \u0111\u0103ng nh\u1EADp -->
      <section class="lg-form">
        <header class="lg-top">
          <img class="lg-logo-img" src="/assets/vnr-wordmark.svg" alt="VnResource" />
          <span class="lg-reg">{{ 'docs.login.noAccount' | translate }} <button type="button" class="lg-reg-btn">{{ 'docs.login.register' | translate }}</button></span>
        </header>

        <div class="lg-card">
          <div class="lg-avatar"><tabler-icon [icon]="userIc" [size]="26" /></div>
          <h1 class="lg-title">{{ 'docs.login.title' | translate }}</h1>
          <p class="lg-sub">{{ 'docs.login.subtitle' | translate }}</p>

          <div class="lg-social">
            <hrm-button [block]="true" variant="default" [ariaLabel]="'docs.login.ssoWith' | translate:{ provider: 'Google' }">
              <svg width="20" height="20" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5z"/>
                <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 15.1 18.9 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/>
                <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2c-2 1.5-4.6 2.4-7.2 2.4-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.6 39.6 16.2 44 24 44z"/>
                <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.2 4.3-4.1 5.6l6.2 5.2C40.9 35.7 44 30.4 44 24c0-1.3-.1-2.3-.4-3.5z"/>
              </svg>
            </hrm-button>
            <hrm-button [block]="true" variant="default" [ariaLabel]="'docs.login.ssoWith' | translate:{ provider: 'Microsoft' }">
              <svg width="18" height="18" viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path fill="#F25022" d="M1 1h10v10H1z"/><path fill="#7FBA00" d="M12 1h10v10H12z"/>
                <path fill="#00A4EF" d="M1 12h10v10H1z"/><path fill="#FFB900" d="M12 12h10v10H12z"/>
              </svg>
            </hrm-button>
            <hrm-button [block]="true" variant="default" [ariaLabel]="'docs.login.ssoWith' | translate:{ provider: 'LinkedIn' }">
              <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path fill="#0A66C2" d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.74v20.5C0 23.2.8 24 1.77 24h20.45c.98 0 1.78-.8 1.78-1.76V1.74C24 .78 23.2 0 22.22 0z"/>
              </svg>
            </hrm-button>
          </div>

          <hrm-divider [text]="'docs.login.or' | translate" />

          <label class="lg-field">
            <span class="lg-label">Email</span>
            <hrm-input [(ngModel)]="email" [prefixIcon]="mail" htmlType="email" placeholder="hello@vnresource.com" />
          </label>

          <label class="lg-field">
            <span class="lg-label">{{ 'docs.login.password' | translate }}</span>
            <span class="lg-pass">
              <hrm-input [(ngModel)]="password" [prefixIcon]="lock" [htmlType]="show() ? 'text' : 'password'" placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" />
              <button type="button" class="lg-eye" (click)="show.set(!show())" [attr.aria-label]="(show() ? 'docs.login.hidePassword' : 'docs.login.showPassword') | translate">
                <tabler-icon [icon]="show() ? eyeOff : eye" [size]="18" />
              </button>
            </span>
          </label>

          <div class="lg-row">
            <hrm-checkbox [(ngModel)]="remember">{{ 'docs.login.remember' | translate }}</hrm-checkbox>
            <button type="button" class="lg-forgot">{{ 'docs.login.forgot' | translate }}</button>
          </div>

          <hrm-button variant="primary" [block]="true" class="lg-submit">{{ 'docs.login.signIn' | translate }}</hrm-button>
        </div>

        <footer class="lg-foot">
          <span>\xA9 2025 VnResource</span>
          <button type="button" class="lg-lang"><tabler-icon [icon]="world" [size]="16" /> {{ 'docs.login.lang' | translate }} <tabler-icon [icon]="chev" [size]="14" /></button>
        </footer>
      </section>
    </div>
  `, styles: ['/* angular:styles/component:css;9aa7e866f2d1c6783198ae40b0b06513199aedf64df8e6568a640ac77fd16722;/Users/mac/projects/Final Core Prototype/vnr.hrm.prototype/src/vnr.hrm.web/apps/ds-demo/src/app/features/auth/login.ts */\n:host {\n  --vnr-dark: #145300;\n  --vnr-green: #1c7a0a;\n  --vnr-lime: #8ec517;\n  --primary-base: #1c7a0a;\n  position: relative;\n  display: block;\n  height: 100vh;\n  overflow: hidden;\n  isolation: isolate;\n  font-family: var(--font-sans);\n  color: var(--text-body);\n  background:\n    linear-gradient(\n      158deg,\n      #0f4d00 0%,\n      #256b0e 46%,\n      #7fbf1f 100%);\n}\n:host::before {\n  content: "";\n  position: absolute;\n  left: -160px;\n  top: -160px;\n  width: 720px;\n  height: 720px;\n  z-index: -1;\n  border-radius: 50%;\n  pointer-events: none;\n  background:\n    repeating-radial-gradient(\n      circle at center,\n      transparent 0 46px,\n      rgba(255, 255, 255, .06) 46px 48px);\n}\n.lg {\n  display: grid;\n  grid-template-columns: 1fr 1.5fr;\n  height: 100vh;\n  padding: 24px;\n  gap: 24px;\n  box-sizing: border-box;\n}\n.lg-brand {\n  flex: 1;\n  min-width: 0;\n  color: #fff;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  padding: 30px 26px;\n}\n.lg-logo {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n}\n.lg-logo b {\n  font-size: var(--fs-19);\n  font-weight: 700;\n  color: #fff;\n  letter-spacing: -.01em;\n}\n.lg-quote {\n  max-width: 540px;\n}\n.lg-q-text {\n  font-size: var(--fs-26);\n  line-height: 1.44;\n  font-weight: 500;\n  margin: 0 0 24px;\n}\n.lg-q-name {\n  font-size: var(--fs-16);\n  font-weight: 700;\n}\n.lg-q-role {\n  font-size: var(--fs-14);\n  color: rgba(255, 255, 255, .82);\n  margin-top: 3px;\n}\n.lg-dots {\n  display: flex;\n  gap: 7px;\n  margin-top: 24px;\n}\n.lg-dots i {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, .4);\n}\n.lg-dots i.on {\n  width: 22px;\n  border-radius: 5px;\n  background: #fff;\n}\n.lg-form {\n  min-width: 0;\n  background: var(--bg-surface);\n  border-radius: 26px;\n  padding: 30px 46px;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, .18);\n}\n.lg-top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  min-height: 40px;\n  gap: 16px;\n}\n.lg-logo-img {\n  height: 32px;\n  width: auto;\n  display: block;\n}\n.lg-reg {\n  font-size: var(--fs-14);\n  color: var(--text-sub);\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  white-space: nowrap;\n}\n.lg-reg-btn {\n  border: 0;\n  cursor: pointer;\n  font-weight: 600;\n  color: #2f9e0e;\n  background: color-mix(in srgb, var(--vnr-lime) 22%, transparent);\n  padding: 6px 14px;\n  border-radius: 10px;\n  font-size: var(--fs-14);\n  transition: background .15s;\n}\n.lg-reg-btn:hover {\n  background: color-mix(in srgb, var(--vnr-lime) 34%, transparent);\n}\n.lg-card {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  width: 100%;\n  max-width: 372px;\n  margin: 0 auto;\n  justify-content: center;\n}\n.lg-avatar {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  display: grid;\n  place-items: center;\n  margin: 0 auto 16px;\n  color: var(--vnr-green);\n  background: var(--bg-surface);\n  box-shadow: 0 0 0 1px var(--border-sub), 0 0 0 8px color-mix(in srgb, var(--vnr-lime) 16%, transparent);\n}\n.lg-title {\n  font-size: var(--fs-26);\n  font-weight: 700;\n  color: var(--text-strong);\n  text-align: center;\n  margin: 0;\n}\n.lg-sub {\n  font-size: var(--fs-14);\n  color: var(--text-sub);\n  text-align: center;\n  margin: 6px 0 22px;\n}\n.lg-social {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n}\n.lg-social hrm-button ::ng-deep .ant-btn {\n  height: 46px;\n}\n.lg-card hrm-divider {\n  display: block;\n  margin: 18px 0;\n}\n.lg-card hrm-divider ::ng-deep .ant-divider-inner-text {\n  font-size: var(--fs-12);\n  color: var(--text-sub);\n  font-weight: 500;\n}\n.lg-flag {\n  font-size: var(--fs-15);\n  line-height: 1;\n}\n.lg-field {\n  display: block;\n  margin-bottom: 16px;\n}\n.lg-label {\n  display: block;\n  font-size: var(--fs-14);\n  font-weight: 500;\n  color: var(--text-strong);\n  margin-bottom: 7px;\n}\n.lg-label i {\n  color: var(--vnr-lime);\n  font-style: normal;\n}\n.lg-field hrm-input {\n  display: block;\n  width: 100%;\n}\n.lg-pass {\n  position: relative;\n  display: block;\n}\n.lg-eye {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 2;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  color: var(--text-sub);\n  display: inline-flex;\n}\n.lg-eye:hover {\n  color: var(--text-strong);\n}\n.lg-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 6px 0 22px;\n}\n.lg-forgot {\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  font-size: var(--fs-14);\n  font-weight: 600;\n  color: var(--vnr-green);\n}\n.lg-forgot:hover {\n  text-decoration: underline;\n}\n.lg-foot {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: var(--fs-13);\n  color: var(--text-sub);\n}\n.lg-lang {\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  color: var(--text-sub);\n  font-size: var(--fs-13);\n}\n@media (max-width: 900px) {\n  .lg-brand {\n    display: none;\n  }\n  .lg-form {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=login.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginPage, { className: "LoginPage", filePath: "apps/ds-demo/src/app/features/auth/login.ts", lineNumber: 174 });
})();
export {
  LoginPage
};
//# sourceMappingURL=chunk-UO6SXN4S.js.map
