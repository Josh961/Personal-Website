(self.webpackChunkpersonal_website=self.webpackChunkpersonal_website||[]).push([[944],{3262:function(e,t,n){"use strict";n.d(t,{c:function(){return i}});var o=n(3036);let i=(()=>{class e{constructor(){}ngOnInit(){this.currentYear=(new Date).getFullYear()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-footer"]],decls:14,vars:1,consts:[[1,"footer"],[1,"footer__item"],["href","https://github.com/Josh961","target","_blank",1,"footer__link"],["src","assets/images/github.svg","alt","GitHub",1,"footer__image"],["href","https://linkedin.com/in/joshua-zinkovsky","target","_blank",1,"footer__link"],["src","assets/images/linkedin.svg","alt","LinkedIn",1,"footer__image"],[1,"footer__copyright"],["href","https://josh961.github.io/Old-Portfolio/","target","_blank",1,"github"]],template:function(e,t){1&e&&(o.TgZ(0,"footer",0),o.TgZ(1,"div"),o.TgZ(2,"div",1),o.TgZ(3,"a",2),o._UZ(4,"img",3),o._uU(5,"GitHub "),o.qZA(),o.qZA(),o.TgZ(6,"div",1),o.TgZ(7,"a",4),o._UZ(8,"img",5),o._uU(9,"LinkedIn "),o.qZA(),o.qZA(),o.qZA(),o.TgZ(10,"span",6),o._uU(11),o.qZA(),o.TgZ(12,"a",7),o._uU(13,"Code on GitHub"),o.qZA(),o.qZA()),2&e&&(o.xp6(11),o.hij("Copyright \xa9 joshz.me ",t.currentYear,""))},styles:[".footer[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;align-items:center;position:relative;height:8rem;padding:.25rem 0}.footer__item[_ngcontent-%COMP%]{display:inline;margin:0 1.5rem}.footer__link[_ngcontent-%COMP%]{display:inline-flex;align-items:center;color:var(--nav-link);font-size:1.25rem;transition:opacity .4s ease;transform:translateY(50%)}@media (min-width:600px){.footer__link[_ngcontent-%COMP%]{font-size:1.5rem}}.footer__link[_ngcontent-%COMP%]:focus, .footer__link[_ngcontent-%COMP%]:hover{opacity:.6}.footer__image[_ngcontent-%COMP%]{height:3rem;margin-right:.75rem}.footer__copyright[_ngcontent-%COMP%]{color:var(--nav-link)}.github[_ngcontent-%COMP%]{position:absolute;right:.75rem;bottom:.25rem;color:#728197;font-size:.75rem;transition:color .3s ease}@media (max-width:599px){.github[_ngcontent-%COMP%]{display:none}}.github[_ngcontent-%COMP%]:focus, .github[_ngcontent-%COMP%]:hover{color:#a0aec0}"]}),e})()},7314:function(e,t,n){"use strict";n.d(t,{J:function(){return f}});var o=n(3036),i=n(3308),r=n(1116),a=n(6979);const s=function(e){return{"theme-selector--desktop":e}};let c=(()=>{class e{constructor(e,t){this.renderer=e,this.themeService=t,this.desktop=!1,this.themeSelected=new o.vpe}toggleTheme(e){switch(e){case"light":this.renderer.addClass(document.body,"light"),this.renderer.removeClass(document.body,"dark"),this.renderer.removeClass(document.body,"solarized"),localStorage.setItem("theme","light"),this.themeService.setTheme("light");break;case"dark":this.renderer.addClass(document.body,"dark"),this.renderer.removeClass(document.body,"light"),this.renderer.removeClass(document.body,"solarized"),localStorage.setItem("theme","dark"),this.themeService.setTheme("dark");break;case"solarized":this.renderer.addClass(document.body,"solarized"),this.renderer.removeClass(document.body,"light"),this.renderer.removeClass(document.body,"dark"),localStorage.setItem("theme","solarized"),this.themeService.setTheme("solarized")}}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(o.Qsj),o.Y36(a.f))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-theme-selector"]],inputs:{desktop:"desktop"},outputs:{themeSelected:"themeSelected"},decls:4,vars:3,consts:[[1,"theme-selector",3,"ngClass"],["type","button",1,"circle-button","circle-button--light",3,"click"],["type","button",1,"circle-button","circle-button--dark",3,"click"],["type","button",1,"circle-button","circle-button--solarized",3,"click"]],template:function(e,t){1&e&&(o.TgZ(0,"div",0),o.TgZ(1,"button",1),o.NdJ("click",function(){return t.toggleTheme("light")}),o.qZA(),o.TgZ(2,"button",2),o.NdJ("click",function(){return t.toggleTheme("dark")}),o.qZA(),o.TgZ(3,"button",3),o.NdJ("click",function(){return t.toggleTheme("solarized")}),o.qZA(),o.qZA()),2&e&&o.Q6J("ngClass",o.VKq(1,s,t.desktop))},directives:[r.mk],styles:[".theme-selector[_ngcontent-%COMP%]{display:flex;background:transparent}.theme-selector--desktop[_ngcontent-%COMP%]{flex-direction:column;position:absolute;top:150%;right:0}.theme-selector--desktop[_ngcontent-%COMP%] > .circle-button[_ngcontent-%COMP%]{margin:0 0 .5rem}.circle-button[_ngcontent-%COMP%]{height:2rem;width:2rem;margin:0 .25rem;border-radius:50%;transition:color .1s ease-in,background .1s ease-in;cursor:pointer}.circle-button--light[_ngcontent-%COMP%]{background:#f8fafc;border:2px solid #a0aec0}.theme-selector--desktop[_ngcontent-%COMP%] > .circle-button--light[_ngcontent-%COMP%]:hover{background:#edf2f7}.circle-button--dark[_ngcontent-%COMP%]{background:#2d3748;border:2px solid #728197}.theme-selector--desktop[_ngcontent-%COMP%] > .circle-button--dark[_ngcontent-%COMP%]:hover{background:#1a212d}.circle-button--solarized[_ngcontent-%COMP%]{background:#fdf6e2;border:2px solid #92a0a0}.theme-selector--desktop[_ngcontent-%COMP%] > .circle-button--solarized[_ngcontent-%COMP%]:hover{background:#ede7d4}[_ngcontent-%COMP%]:not(.theme-selector--desktop) > .circle-button[_ngcontent-%COMP%]{outline:none}"]}),e})();const l=function(){return["/home"]},d=function(){return["/projects"]},g=function(){return["/about"]},m=function(){return["/contact"]};function u(e,t){if(1&e){const e=o.EpF();o.TgZ(0,"div",11),o.TgZ(1,"span",12),o.NdJ("click",function(){return o.CHM(e),o.oxw().toggleMobileNavigation(!1)}),o._uU(2,"\xd7"),o.qZA(),o.TgZ(3,"div",13),o.TgZ(4,"a",14),o._uU(5,"Home"),o.qZA(),o.TgZ(6,"a",14),o._uU(7,"Projects"),o.qZA(),o.TgZ(8,"a",14),o._uU(9,"About"),o.qZA(),o.TgZ(10,"a",14),o._uU(11,"Contact"),o.qZA(),o.qZA(),o._UZ(12,"app-theme-selector"),o.qZA()}2&e&&(o.xp6(4),o.Q6J("routerLink",o.DdM(4,l)),o.xp6(2),o.Q6J("routerLink",o.DdM(5,d)),o.xp6(2),o.Q6J("routerLink",o.DdM(6,g)),o.xp6(2),o.Q6J("routerLink",o.DdM(7,m)))}const _=function(e){return{"navigation__header--fade":e}},p=function(e){return{"navigation__links--fade":e}};let f=(()=>{class e{constructor(e,t){this.router=e,this.renderer=t,this.onHomePage=!1,this.displayMobileNavigation=!1}ngOnInit(){this.checkHomeRoute()}ngOnDestroy(){this.renderer.setStyle(document.body,"overflow","initial")}checkHomeRoute(){"/home"===this.router.url&&(this.onHomePage=!0)}toggleMobileNavigation(e){e?(this.displayMobileNavigation=!0,this.renderer.setStyle(document.body,"overflow","hidden")):(this.displayMobileNavigation=!1,this.renderer.setStyle(document.body,"overflow","initial"))}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(i.F0),o.Y36(o.Qsj))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-navigation"]],decls:20,vars:18,consts:[[1,"navigation"],[1,"navigation__header",3,"ngClass","routerLink"],[1,"bold"],[1,"navigation__links",3,"ngClass"],["routerLinkActive","navigation__link--selected",1,"navigation__link",3,"routerLink"],[1,"dropdown-wrapper"],["type","button",1,"dropdown-wrapper__button"],[1,"dropdown"],[3,"desktop"],["src","assets/images/menu.svg","alt","Menu",1,"navigation__menu-button",3,"click"],["class","mobile-navigation",4,"ngIf"],[1,"mobile-navigation"],[1,"mobile-navigation__close",3,"click"],[1,"mobile-navigation__list"],["routerLinkActive","mobile-navigation__link--selected",1,"mobile-navigation__link",3,"routerLink"]],template:function(e,t){1&e&&(o.TgZ(0,"nav",0),o.TgZ(1,"a",1),o._uU(2," Joshua "),o.TgZ(3,"span",2),o._uU(4,"Zinkovsky"),o.qZA(),o.qZA(),o.TgZ(5,"div",3),o.TgZ(6,"a",4),o._uU(7,"Home"),o.qZA(),o.TgZ(8,"a",4),o._uU(9,"Projects"),o.qZA(),o.TgZ(10,"a",4),o._uU(11,"About"),o.qZA(),o.TgZ(12,"a",4),o._uU(13,"Contact"),o.qZA(),o.TgZ(14,"div",5),o._UZ(15,"button",6),o.TgZ(16,"div",7),o._UZ(17,"app-theme-selector",8),o.qZA(),o.qZA(),o.TgZ(18,"img",9),o.NdJ("click",function(){return t.toggleMobileNavigation(!0)}),o.qZA(),o.qZA(),o.qZA(),o.YNc(19,u,13,8,"div",10)),2&e&&(o.xp6(1),o.Q6J("ngClass",o.VKq(9,_,t.onHomePage))("routerLink",o.DdM(11,l)),o.xp6(4),o.Q6J("ngClass",o.VKq(12,p,t.onHomePage)),o.xp6(1),o.Q6J("routerLink",o.DdM(14,l)),o.xp6(2),o.Q6J("routerLink",o.DdM(15,d)),o.xp6(2),o.Q6J("routerLink",o.DdM(16,g)),o.xp6(2),o.Q6J("routerLink",o.DdM(17,m)),o.xp6(5),o.Q6J("desktop",!0),o.xp6(2),o.Q6J("ngIf",t.displayMobileNavigation))},directives:[i.yS,r.mk,i.Od,c,r.O5],styles:['@-webkit-keyframes fade-in-bottom{0%{transform:translateY(50px)}to{opacity:1;transform:translateY(0)}}@keyframes fade-in-bottom{0%{transform:translateY(50px)}to{opacity:1;transform:translateY(0)}}@-webkit-keyframes fade-in-left{0%{transform:translateX(-50px)}to{opacity:1;transform:translateX(0)}}@keyframes fade-in-left{0%{transform:translateX(-50px)}to{opacity:1;transform:translateX(0)}}.navigation[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;height:4rem;padding:0 .5rem;background:var(--bg-nav);border-bottom:2px solid var(--subtle);font-family:Quicksand;font-size:1.5rem}@media (min-width:600px){.navigation[_ngcontent-%COMP%]{padding:0 1rem 0 2rem}}.navigation__header[_ngcontent-%COMP%]{color:var(--header)}@media (min-width:600px){.navigation__header[_ngcontent-%COMP%]{font-size:2.25rem}}@media (min-width:900px){.navigation__header--fade[_ngcontent-%COMP%]{opacity:0;-webkit-animation:fade-in-bottom 2s;animation:fade-in-bottom 2s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-delay:.2s;animation-delay:.2s}}.navigation__links[_ngcontent-%COMP%]{display:flex;align-items:center}@media (min-width:900px){.navigation__links--fade[_ngcontent-%COMP%]{opacity:0;-webkit-animation:fade-in-left 2s;animation:fade-in-left 2s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-delay:1s;animation-delay:1s}}.navigation__link[_ngcontent-%COMP%]{display:none;position:relative;padding:0 .5rem;height:4rem;color:var(--nav-link)}@media (min-width:900px){.navigation__link[_ngcontent-%COMP%]{display:inline-flex;align-items:center;margin-left:1rem;font-size:1.25rem}}@media (min-width:1200px){.navigation__link[_ngcontent-%COMP%]{margin-left:1.5rem;font-size:1.5rem}}.navigation__link--selected[_ngcontent-%COMP%], .navigation__link[_ngcontent-%COMP%]:focus, .navigation__link[_ngcontent-%COMP%]:hover{color:var(--nav-link-hover)}.navigation__link--selected[_ngcontent-%COMP%]:after{position:absolute;content:"";right:0;bottom:0;left:0;height:2px;background:var(--opposite)}.navigation__menu-button[_ngcontent-%COMP%]{height:4rem;padding:.75rem}@media (min-width:900px){.navigation__menu-button[_ngcontent-%COMP%]{display:none}}.navigation__menu-button[_ngcontent-%COMP%]:hover{cursor:pointer}.dropdown-wrapper[_ngcontent-%COMP%]{display:none;position:relative;margin-left:.75rem}@media (min-width:900px){.dropdown-wrapper[_ngcontent-%COMP%]{display:inline}}.dropdown-wrapper__button[_ngcontent-%COMP%]{height:2rem;width:2rem;background:linear-gradient(45deg,#f688b4,#64b4ed);border:2px solid #ccd6e0;border-radius:50%;transition:color .1s ease-in,background .1s ease-in;cursor:pointer}.dropdown-wrapper__button[_ngcontent-%COMP%]:hover{opacity:.8}.dropdown-wrapper__button[_ngcontent-%COMP%]:focus{outline:none}.dropdown-wrapper[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]{display:none}.dropdown-wrapper[_ngcontent-%COMP%]:focus-within   .dropdown[_ngcontent-%COMP%]{display:block}.mobile-navigation[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;position:fixed;top:0;left:0;height:100%;width:100%;z-index:1;background:var(--bg)}.mobile-navigation__close[_ngcontent-%COMP%]{position:absolute;top:0;right:0;padding:.75rem 1.5rem;float:right;color:#728197;font-size:2.25rem;font-weight:700}.mobile-navigation__close[_ngcontent-%COMP%]:hover{color:#4a5568;cursor:pointer}.mobile-navigation__list[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;position:relative;margin-bottom:1rem}.mobile-navigation__link[_ngcontent-%COMP%]{padding:0 .5rem;margin:.5rem 0;color:var(--nav-link);font-size:1.875rem}.mobile-navigation__link--selected[_ngcontent-%COMP%]{background:#f5adbc}']}),e})()},4887:function(e,t,n){"use strict";n.d(t,{m:function(){return a}});var o=n(1116),i=n(3308),r=n(3036);let a=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({providers:[],imports:[[o.ez,i.Bz]]}),e})()},6979:function(e,t,n){"use strict";n.d(t,{f:function(){return d}});var o=n(9162),i=n(9666),r={now:function(){return(r.delegate||Date).now()},delegate:void 0},a=function(e){function t(t,n,o){void 0===t&&(t=1/0),void 0===n&&(n=1/0),void 0===o&&(o=r);var i=e.call(this)||this;return i._bufferSize=t,i._windowTime=n,i._timestampProvider=o,i._buffer=[],i._infiniteTimeWindow=!0,i._infiniteTimeWindow=n===1/0,i._bufferSize=Math.max(1,t),i._windowTime=Math.max(1,n),i}return(0,o.ZT)(t,e),t.prototype.next=function(t){var n=this,o=n._buffer,i=n._infiniteTimeWindow,r=n._timestampProvider,a=n._windowTime;n.isStopped||(o.push(t),!i&&o.push(r.now()+a)),this._trimBuffer(),e.prototype.next.call(this,t)},t.prototype._subscribe=function(e){this._throwIfClosed(),this._trimBuffer();for(var t=this._innerSubscribe(e),n=this._infiniteTimeWindow,o=this._buffer.slice(),i=0;i<o.length&&!e.closed;i+=n?1:2)e.next(o[i]);return this._checkFinalizedStatuses(e),t},t.prototype._trimBuffer=function(){var e=this._bufferSize,t=this._timestampProvider,n=this._buffer,o=this._infiniteTimeWindow,i=(o?1:2)*e;if(e<1/0&&i<n.length&&n.splice(0,n.length-i),!o){for(var r=t.now(),a=0,s=1;s<n.length&&n[s]<=r;s+=2)a=s;a&&n.splice(0,a+1)}},t}(i.x),s=n(2041),c=n(1816),l=n(3036);let d=(()=>{class e{constructor(){this.themeSubject=new a(1)}setTheme(e){this.themeSubject.next(e)}getTheme(){return this.themeSubject.asObservable().pipe((0,c.K)(e=>(0,s.of)("light")))}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);