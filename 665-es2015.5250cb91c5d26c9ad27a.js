(self.webpackChunkpersonal_website=self.webpackChunkpersonal_website||[]).push([[665],{4665:function(e,t,n){"use strict";n.r(t),n.d(t,{HomeModule:function(){return v}});var i=n(3308),o=n(4887),r=n(9666),a=n(3386),s=n(4659),c=n(9256),l=n(5397),d=n(3036),m=n(6979),g=n(7314);const u=["home"],h=function(){return["/home"]},p=function(){return["/projects"]},_=function(){return["/about"]},b=function(){return["/contact"]},f=[{path:"",component:(()=>{class e{constructor(e,t){this.renderer=e,this.themeService=t,this.ngUnsubscribe=new r.x}ngOnDestroy(){this.ngUnsubscribe.next(),this.ngUnsubscribe.complete()}ngAfterViewInit(){this.peformInitialThemeCheck(),this.subscribeToThemeService()}peformInitialThemeCheck(){const e=document.body.classList.contains("light"),t=document.body.classList.contains("dark");e?(this.home.nativeElement.classList.remove("home--dark"),this.home.nativeElement.classList.remove("home--solarized")):t?(this.renderer.addClass(this.home.nativeElement,"home--dark"),this.home.nativeElement.classList.remove("home--solarized")):(this.renderer.addClass(this.home.nativeElement,"home--solarized"),this.home.nativeElement.classList.remove("home--dark"))}subscribeToThemeService(){var e;this.themeService.getTheme().pipe((e=this.ngUnsubscribe,(0,a.e)(function(t,n){(0,c.Xf)(e).subscribe(new s.Q(n,function(){return n.complete()},l.Z)),!n.closed&&t.subscribe(n)}))).subscribe(e=>{"light"===e?(this.renderer.removeClass(this.home.nativeElement,"home--dark"),this.renderer.removeClass(this.home.nativeElement,"home--solarized")):"dark"===e?(this.renderer.addClass(this.home.nativeElement,"home--dark"),this.renderer.removeClass(this.home.nativeElement,"home--solarized")):"solarized"===e&&(this.renderer.addClass(this.home.nativeElement,"home--solarized"),this.renderer.removeClass(this.home.nativeElement,"home--dark"))})}}return e.\u0275fac=function(t){return new(t||e)(d.Y36(d.Qsj),d.Y36(m.f))},e.\u0275cmp=d.Xpm({type:e,selectors:[["app-home"]],viewQuery:function(e,t){if(1&e&&d.Gf(u,5),2&e){let e;d.iGM(e=d.CRH())&&(t.home=e.first)}},decls:22,vars:8,consts:[[1,"home"],["home",""],[1,"social-wrapper"],[1,"social-wrapper__item"],["href","https://github.com/Josh961","target","_blank",1,"social-wrapper__link"],["src","assets/images/github.svg","alt","GitHub",1,"social-wrapper__image"],["href","https://linkedin.com/in/joshua-zinkovsky","target","_blank",1,"social-wrapper__link"],["src","assets/images/linkedin.svg","alt","LinkedIn",1,"social-wrapper__image"],[1,"mobile-navigation"],[1,"mobile-navigation__list"],[1,"mobile-navigation__link",3,"routerLink"]],template:function(e,t){1&e&&(d.TgZ(0,"div",0,1),d._UZ(2,"app-navigation"),d.TgZ(3,"div",2),d.TgZ(4,"div",3),d.TgZ(5,"a",4),d._UZ(6,"img",5),d._uU(7," GitHub "),d.qZA(),d.qZA(),d.TgZ(8,"div",3),d.TgZ(9,"a",6),d._UZ(10,"img",7),d._uU(11," LinkedIn "),d.qZA(),d.qZA(),d.qZA(),d.TgZ(12,"div",8),d.TgZ(13,"div",9),d.TgZ(14,"a",10),d._uU(15,"Home"),d.qZA(),d.TgZ(16,"a",10),d._uU(17,"Projects"),d.qZA(),d.TgZ(18,"a",10),d._uU(19,"About"),d.qZA(),d.TgZ(20,"a",10),d._uU(21,"Contact"),d.qZA(),d.qZA(),d.qZA(),d.qZA()),2&e&&(d.xp6(14),d.Q6J("routerLink",d.DdM(4,h)),d.xp6(2),d.Q6J("routerLink",d.DdM(5,p)),d.xp6(2),d.Q6J("routerLink",d.DdM(6,_)),d.xp6(2),d.Q6J("routerLink",d.DdM(7,b)))},directives:[g.J,i.yS],styles:[".home[_ngcontent-%COMP%]{height:100vh;background-image:url(josh.d5bc2e70f9f2b4b4c6fb.svg);background-position:50%;background-repeat:no-repeat;background-size:100% 70%}@media (min-width:900px){.home[_ngcontent-%COMP%]{background-image:url(background.11c2134687c1ccf4b8a3.svg);background-size:cover}}.home--dark[_ngcontent-%COMP%]{background-image:url(josh-dark.28688eccb7ed5934a251.svg)}@media (min-width:900px){.home--dark[_ngcontent-%COMP%]{background-image:url(background-dark.6ae37ea44460422c3314.svg)}}.home--solarized[_ngcontent-%COMP%]{background-image:url(josh-solarized.69d3fd4c3551c4b60053.svg)}@media (min-width:900px){.home--solarized[_ngcontent-%COMP%]{background-image:url(background-solarized.b3d372bd9e89625fb585.svg)}}.social-wrapper[_ngcontent-%COMP%]{display:none}@media (min-width:900px){.social-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:absolute;top:57%;left:46.5%}}.social-wrapper__item[_ngcontent-%COMP%]{margin-bottom:2rem}.social-wrapper__link[_ngcontent-%COMP%]{display:flex;align-items:center;color:var(--nav-link);font-size:1.2vw;transition:opacity .4s ease}.social-wrapper__link[_ngcontent-%COMP%]:focus, .social-wrapper__link[_ngcontent-%COMP%]:hover{opacity:.6}.social-wrapper__image[_ngcontent-%COMP%]{width:5vh;margin-right:.75rem}.mobile-navigation[_ngcontent-%COMP%]{position:absolute;top:35%;left:50%;transform:translateX(-50%)}.mobile-navigation__list[_ngcontent-%COMP%]{display:flex;flex-direction:column}@media (min-width:900px){.mobile-navigation__list[_ngcontent-%COMP%]{display:none}}.mobile-navigation__link[_ngcontent-%COMP%]{color:var(--nav-link);font-size:6vw}@media (max-width:599px){.mobile-navigation__link[_ngcontent-%COMP%]{margin-bottom:.25rem}}"]}),e})()}];let v=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=d.oAB({type:e}),e.\u0275inj=d.cJS({providers:[],imports:[[i.Bz.forChild(f),o.m]]}),e})()},7314:function(e,t,n){"use strict";n.d(t,{J:function(){return _}});var i=n(3036),o=n(3308),r=n(1116),a=n(6979);const s=function(e){return{"theme-selector--desktop":e}};let c=(()=>{class e{constructor(e,t){this.renderer=e,this.themeService=t,this.desktop=!1,this.themeSelected=new i.vpe}toggleTheme(e){switch(e){case"light":this.renderer.addClass(document.body,"light"),this.renderer.removeClass(document.body,"dark"),this.renderer.removeClass(document.body,"solarized"),localStorage.setItem("theme","light"),this.themeService.setTheme("light");break;case"dark":this.renderer.addClass(document.body,"dark"),this.renderer.removeClass(document.body,"light"),this.renderer.removeClass(document.body,"solarized"),localStorage.setItem("theme","dark"),this.themeService.setTheme("dark");break;case"solarized":this.renderer.addClass(document.body,"solarized"),this.renderer.removeClass(document.body,"light"),this.renderer.removeClass(document.body,"dark"),localStorage.setItem("theme","solarized"),this.themeService.setTheme("solarized")}}}return e.\u0275fac=function(t){return new(t||e)(i.Y36(i.Qsj),i.Y36(a.f))},e.\u0275cmp=i.Xpm({type:e,selectors:[["app-theme-selector"]],inputs:{desktop:"desktop"},outputs:{themeSelected:"themeSelected"},decls:4,vars:3,consts:[[1,"theme-selector",3,"ngClass"],["type","button",1,"circle-button","circle-button--light",3,"click"],["type","button",1,"circle-button","circle-button--dark",3,"click"],["type","button",1,"circle-button","circle-button--solarized",3,"click"]],template:function(e,t){1&e&&(i.TgZ(0,"div",0),i.TgZ(1,"button",1),i.NdJ("click",function(){return t.toggleTheme("light")}),i.qZA(),i.TgZ(2,"button",2),i.NdJ("click",function(){return t.toggleTheme("dark")}),i.qZA(),i.TgZ(3,"button",3),i.NdJ("click",function(){return t.toggleTheme("solarized")}),i.qZA(),i.qZA()),2&e&&i.Q6J("ngClass",i.VKq(1,s,t.desktop))},directives:[r.mk],styles:[".theme-selector[_ngcontent-%COMP%]{display:flex;background:transparent}.theme-selector--desktop[_ngcontent-%COMP%]{flex-direction:column;position:absolute;top:150%;right:0}.theme-selector--desktop[_ngcontent-%COMP%] > .circle-button[_ngcontent-%COMP%]{margin:0 0 .5rem}.circle-button[_ngcontent-%COMP%]{height:2rem;width:2rem;margin:0 .25rem;border-radius:50%;transition:color .1s ease-in,background .1s ease-in;cursor:pointer}.circle-button--light[_ngcontent-%COMP%]{background:#f8fafc;border:2px solid #a0aec0}.theme-selector--desktop[_ngcontent-%COMP%] > .circle-button--light[_ngcontent-%COMP%]:hover{background:#edf2f7}.circle-button--dark[_ngcontent-%COMP%]{background:#2d3748;border:2px solid #728197}.theme-selector--desktop[_ngcontent-%COMP%] > .circle-button--dark[_ngcontent-%COMP%]:hover{background:#1a212d}.circle-button--solarized[_ngcontent-%COMP%]{background:#fdf6e2;border:2px solid #92a0a0}.theme-selector--desktop[_ngcontent-%COMP%] > .circle-button--solarized[_ngcontent-%COMP%]:hover{background:#ede7d4}[_ngcontent-%COMP%]:not(.theme-selector--desktop) > .circle-button[_ngcontent-%COMP%]{outline:none}"]}),e})();const l=function(){return["/home"]},d=function(){return["/projects"]},m=function(){return["/about"]},g=function(){return["/contact"]};function u(e,t){if(1&e){const e=i.EpF();i.TgZ(0,"div",11),i.TgZ(1,"span",12),i.NdJ("click",function(){return i.CHM(e),i.oxw().toggleMobileNavigation(!1)}),i._uU(2,"\xd7"),i.qZA(),i.TgZ(3,"div",13),i.TgZ(4,"a",14),i._uU(5,"Home"),i.qZA(),i.TgZ(6,"a",14),i._uU(7,"Projects"),i.qZA(),i.TgZ(8,"a",14),i._uU(9,"About"),i.qZA(),i.TgZ(10,"a",14),i._uU(11,"Contact"),i.qZA(),i.qZA(),i._UZ(12,"app-theme-selector"),i.qZA()}2&e&&(i.xp6(4),i.Q6J("routerLink",i.DdM(4,l)),i.xp6(2),i.Q6J("routerLink",i.DdM(5,d)),i.xp6(2),i.Q6J("routerLink",i.DdM(6,m)),i.xp6(2),i.Q6J("routerLink",i.DdM(7,g)))}const h=function(e){return{"navigation__header--fade":e}},p=function(e){return{"navigation__links--fade":e}};let _=(()=>{class e{constructor(e,t){this.router=e,this.renderer=t,this.onHomePage=!1,this.displayMobileNavigation=!1}ngOnInit(){this.checkHomeRoute()}ngOnDestroy(){this.renderer.setStyle(document.body,"overflow","initial")}checkHomeRoute(){"/home"===this.router.url&&(this.onHomePage=!0)}toggleMobileNavigation(e){e?(this.displayMobileNavigation=!0,this.renderer.setStyle(document.body,"overflow","hidden")):(this.displayMobileNavigation=!1,this.renderer.setStyle(document.body,"overflow","initial"))}}return e.\u0275fac=function(t){return new(t||e)(i.Y36(o.F0),i.Y36(i.Qsj))},e.\u0275cmp=i.Xpm({type:e,selectors:[["app-navigation"]],decls:20,vars:18,consts:[[1,"navigation"],[1,"navigation__header",3,"ngClass","routerLink"],[1,"bold"],[1,"navigation__links",3,"ngClass"],["routerLinkActive","navigation__link--selected",1,"navigation__link",3,"routerLink"],[1,"dropdown-wrapper"],["type","button",1,"dropdown-wrapper__button"],[1,"dropdown"],[3,"desktop"],["src","assets/images/menu.svg","alt","Menu",1,"navigation__menu-button",3,"click"],["class","mobile-navigation",4,"ngIf"],[1,"mobile-navigation"],[1,"mobile-navigation__close",3,"click"],[1,"mobile-navigation__list"],["routerLinkActive","mobile-navigation__link--selected",1,"mobile-navigation__link",3,"routerLink"]],template:function(e,t){1&e&&(i.TgZ(0,"nav",0),i.TgZ(1,"a",1),i._uU(2," Joshua "),i.TgZ(3,"span",2),i._uU(4,"Zinkovsky"),i.qZA(),i.qZA(),i.TgZ(5,"div",3),i.TgZ(6,"a",4),i._uU(7,"Home"),i.qZA(),i.TgZ(8,"a",4),i._uU(9,"Projects"),i.qZA(),i.TgZ(10,"a",4),i._uU(11,"About"),i.qZA(),i.TgZ(12,"a",4),i._uU(13,"Contact"),i.qZA(),i.TgZ(14,"div",5),i._UZ(15,"button",6),i.TgZ(16,"div",7),i._UZ(17,"app-theme-selector",8),i.qZA(),i.qZA(),i.TgZ(18,"img",9),i.NdJ("click",function(){return t.toggleMobileNavigation(!0)}),i.qZA(),i.qZA(),i.qZA(),i.YNc(19,u,13,8,"div",10)),2&e&&(i.xp6(1),i.Q6J("ngClass",i.VKq(9,h,t.onHomePage))("routerLink",i.DdM(11,l)),i.xp6(4),i.Q6J("ngClass",i.VKq(12,p,t.onHomePage)),i.xp6(1),i.Q6J("routerLink",i.DdM(14,l)),i.xp6(2),i.Q6J("routerLink",i.DdM(15,d)),i.xp6(2),i.Q6J("routerLink",i.DdM(16,m)),i.xp6(2),i.Q6J("routerLink",i.DdM(17,g)),i.xp6(5),i.Q6J("desktop",!0),i.xp6(2),i.Q6J("ngIf",t.displayMobileNavigation))},directives:[o.yS,r.mk,o.Od,c,r.O5],styles:['@-webkit-keyframes fade-in-bottom{0%{transform:translateY(50px)}to{opacity:1;transform:translateY(0)}}@keyframes fade-in-bottom{0%{transform:translateY(50px)}to{opacity:1;transform:translateY(0)}}@-webkit-keyframes fade-in-left{0%{transform:translateX(-50px)}to{opacity:1;transform:translateX(0)}}@keyframes fade-in-left{0%{transform:translateX(-50px)}to{opacity:1;transform:translateX(0)}}.navigation[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;height:4rem;padding:0 .5rem;background:var(--bg-nav);border-bottom:2px solid var(--subtle);font-family:Quicksand;font-size:1.5rem}@media (min-width:600px){.navigation[_ngcontent-%COMP%]{padding:0 1rem 0 2rem}}.navigation__header[_ngcontent-%COMP%]{color:var(--header)}@media (min-width:600px){.navigation__header[_ngcontent-%COMP%]{font-size:2.25rem}}@media (min-width:900px){.navigation__header--fade[_ngcontent-%COMP%]{opacity:0;-webkit-animation:fade-in-bottom 2s;animation:fade-in-bottom 2s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-delay:.2s;animation-delay:.2s}}.navigation__links[_ngcontent-%COMP%]{display:flex;align-items:center}@media (min-width:900px){.navigation__links--fade[_ngcontent-%COMP%]{opacity:0;-webkit-animation:fade-in-left 2s;animation:fade-in-left 2s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-delay:1s;animation-delay:1s}}.navigation__link[_ngcontent-%COMP%]{display:none;position:relative;padding:0 .5rem;height:4rem;color:var(--nav-link)}@media (min-width:900px){.navigation__link[_ngcontent-%COMP%]{display:inline-flex;align-items:center;margin-left:1rem;font-size:1.25rem}}@media (min-width:1200px){.navigation__link[_ngcontent-%COMP%]{margin-left:1.5rem;font-size:1.5rem}}.navigation__link--selected[_ngcontent-%COMP%], .navigation__link[_ngcontent-%COMP%]:focus, .navigation__link[_ngcontent-%COMP%]:hover{color:var(--nav-link-hover)}.navigation__link--selected[_ngcontent-%COMP%]:after{position:absolute;content:"";right:0;bottom:0;left:0;height:2px;background:var(--opposite)}.navigation__menu-button[_ngcontent-%COMP%]{height:4rem;padding:.75rem}@media (min-width:900px){.navigation__menu-button[_ngcontent-%COMP%]{display:none}}.navigation__menu-button[_ngcontent-%COMP%]:hover{cursor:pointer}.dropdown-wrapper[_ngcontent-%COMP%]{display:none;position:relative;margin-left:.75rem}@media (min-width:900px){.dropdown-wrapper[_ngcontent-%COMP%]{display:inline}}.dropdown-wrapper__button[_ngcontent-%COMP%]{height:2rem;width:2rem;background:linear-gradient(45deg,#f688b4,#64b4ed);border:2px solid #ccd6e0;border-radius:50%;transition:color .1s ease-in,background .1s ease-in;cursor:pointer}.dropdown-wrapper__button[_ngcontent-%COMP%]:hover{opacity:.8}.dropdown-wrapper__button[_ngcontent-%COMP%]:focus{outline:none}.dropdown-wrapper[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]{display:none}.dropdown-wrapper[_ngcontent-%COMP%]:focus-within   .dropdown[_ngcontent-%COMP%]{display:block}.mobile-navigation[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;position:fixed;top:0;left:0;height:100%;width:100%;z-index:1;background:var(--bg)}.mobile-navigation__close[_ngcontent-%COMP%]{position:absolute;top:0;right:0;padding:.75rem 1.5rem;float:right;color:#728197;font-size:2.25rem;font-weight:700}.mobile-navigation__close[_ngcontent-%COMP%]:hover{color:#4a5568;cursor:pointer}.mobile-navigation__list[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;position:relative;margin-bottom:1rem}.mobile-navigation__link[_ngcontent-%COMP%]{padding:0 .5rem;margin:.5rem 0;color:var(--nav-link);font-size:1.875rem}.mobile-navigation__link--selected[_ngcontent-%COMP%]{background:#f5adbc}']}),e})()},4887:function(e,t,n){"use strict";n.d(t,{m:function(){return a}});var i=n(1116),o=n(3308),r=n(3036);let a=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({providers:[],imports:[[i.ez,o.Bz]]}),e})()},6979:function(e,t,n){"use strict";n.d(t,{f:function(){return d}});var i=n(9162),o=n(9666),r={now:function(){return(r.delegate||Date).now()},delegate:void 0},a=function(e){function t(t,n,i){void 0===t&&(t=1/0),void 0===n&&(n=1/0),void 0===i&&(i=r);var o=e.call(this)||this;return o._bufferSize=t,o._windowTime=n,o._timestampProvider=i,o._buffer=[],o._infiniteTimeWindow=!0,o._infiniteTimeWindow=n===1/0,o._bufferSize=Math.max(1,t),o._windowTime=Math.max(1,n),o}return(0,i.ZT)(t,e),t.prototype.next=function(t){var n=this,i=n._buffer,o=n._infiniteTimeWindow,r=n._timestampProvider,a=n._windowTime;n.isStopped||(i.push(t),!o&&i.push(r.now()+a)),this._trimBuffer(),e.prototype.next.call(this,t)},t.prototype._subscribe=function(e){this._throwIfClosed(),this._trimBuffer();for(var t=this._innerSubscribe(e),n=this._infiniteTimeWindow,i=this._buffer.slice(),o=0;o<i.length&&!e.closed;o+=n?1:2)e.next(i[o]);return this._checkFinalizedStatuses(e),t},t.prototype._trimBuffer=function(){var e=this._bufferSize,t=this._timestampProvider,n=this._buffer,i=this._infiniteTimeWindow,o=(i?1:2)*e;if(e<1/0&&o<n.length&&n.splice(0,n.length-o),!i){for(var r=t.now(),a=0,s=1;s<n.length&&n[s]<=r;s+=2)a=s;a&&n.splice(0,a+1)}},t}(o.x),s=n(2041),c=n(1816),l=n(3036);let d=(()=>{class e{constructor(){this.themeSubject=new a(1)}setTheme(e){this.themeSubject.next(e)}getTheme(){return this.themeSubject.asObservable().pipe((0,c.K)(e=>(0,s.of)("light")))}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);