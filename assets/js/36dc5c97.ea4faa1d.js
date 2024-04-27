"use strict";(self.webpackChunktransloco_docs=self.webpackChunktransloco_docs||[]).push([[3011],{9653:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var t=n(4848),s=n(8453);const o={title:"Prefetch the User Language",description:"Recipe - Prefetch the User Language | Transloco Angular i18n"},a=void 0,c={id:"recipes/prefetch",title:"Prefetch the User Language",description:"Recipe - Prefetch the User Language | Transloco Angular i18n",source:"@site/docs/recipes/prefetch.mdx",sourceDirName:"recipes",slug:"/recipes/prefetch",permalink:"/transloco/docs/recipes/prefetch",draft:!1,unlisted:!1,editUrl:"https://github.com/jsverse/transloco/edit/master/docs/docs/recipes/prefetch.mdx",tags:[],version:"current",frontMatter:{title:"Prefetch the User Language",description:"Recipe - Prefetch the User Language | Transloco Angular i18n"},sidebar:"docs",previous:{title:"Angular",permalink:"/transloco/docs/migration/angular"},next:{title:"Using xliff",permalink:"/transloco/docs/recipes/xliff"}},i={},l=[{value:"Prefetch the User Language",id:"prefetch-the-user-language",level:2}];function u(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"prefetch-the-user-language",children:"Prefetch the User Language"}),"\n",(0,t.jsx)(r.p,{children:"We recommend pre-emptively fetching the user\u2019s data from the server, including internationalization settings, and making it available to the components, before we allow the user to interact with them."}),"\n",(0,t.jsx)(r.p,{children:"We want to ensure the data is available, because we don\u2019t want to incur a bad user experience, such as jumpy content or flickering CSS."}),"\n",(0,t.jsxs)(r.p,{children:["Here's how you can achieve this using the ",(0,t.jsx)(r.code,{children:"APP_INITIALIZER"})," token:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"import { APP_INITIALIZER } from '@angular/core';\nimport { UserService } from './user.service';\nimport { TranslocoService } from '@jsverse/transloco';\n\nexport function preloadUser(userService: UserService, transloco: TranslocoService) {\n  return function() {\n    return userService.getUser().then(({ lang }) => {\n      transloco.setActiveLang(lang);\n      return transloco.load(lang).toPromise();\n    }\n  };\n}\n\nexport const preLoad = {\n  provide: APP_INITIALIZER,\n  multi: true,\n  useFactory: preloadUser,\n  deps: [UserService, TranslocoService]\n};\n"})}),"\n",(0,t.jsx)(r.p,{children:"This will make sure the application doesn't bootstrap before Transloco loads the translation file based on the current user's language."}),"\n",(0,t.jsxs)(r.p,{children:["You can read more about it in ",(0,t.jsx)(r.a,{href:"https://netbasal.com/optimize-user-experience-while-your-angular-app-loads-7e982a67ff1a",children:"this article"}),"."]})]})}function p(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>a,x:()=>c});var t=n(6540);const s={},o=t.createContext(s);function a(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);