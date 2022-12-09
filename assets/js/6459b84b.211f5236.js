"use strict";(self.webpackChunktransloco_docs=self.webpackChunktransloco_docs||[]).push([[7868],{3905:function(t,n,e){e.d(n,{Zo:function(){return u},kt:function(){return g}});var a=e(7294);function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function o(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function l(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?o(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function i(t,n){if(null==t)return{};var e,a,r=function(t,n){if(null==t)return{};var e,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)e=o[a],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)e=o[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var s=a.createContext({}),p=function(t){var n=a.useContext(s),e=n;return t&&(e="function"==typeof t?t(n):l(l({},n),t)),e},u=function(t){var n=p(t.components);return a.createElement(s.Provider,{value:n},t.children)},c={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(t,n){var e=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=p(e),g=r,m=d["".concat(s,".").concat(g)]||d[g]||c[g]||o;return e?a.createElement(m,l(l({ref:n},u),{},{components:e})):a.createElement(m,l({ref:n},u))}));function g(t,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var o=e.length,l=new Array(o);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,l[1]=i;for(var p=2;p<o;p++)l[p]=e[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,e)}d.displayName="MDXCreateElement"},2424:function(t,n,e){e.r(n),e.d(n,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var a=e(7462),r=e(3366),o=(e(7294),e(3905)),l=e(4996),i=["components"],s={id:"installation",title:"Installation",description:"Installation | Transloco Angular i18n"},p=void 0,u={unversionedId:"getting-started/installation",id:"getting-started/installation",title:"Installation",description:"Installation | Transloco Angular i18n",source:"@site/docs/getting-started/installation.mdx",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/transloco/docs/getting-started/installation",draft:!1,editUrl:"https://github.com/ngneat/transloco/edit/master/docs/docs/getting-started/installation.mdx",tags:[],version:"current",frontMatter:{id:"installation",title:"Installation",description:"Installation | Transloco Angular i18n"},sidebar:"docs",next:{title:"Config Options",permalink:"/transloco/docs/getting-started/config-options"}},c={},d=[{value:"Angular &amp; Transloco versions",id:"angular--transloco-versions",level:2}],g={toc:d};function m(t){var n=t.components,e=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,a.Z)({},g,e,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Install the library using Angular CLI:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ng add @ngneat/transloco --project your_project_name\n")),(0,o.kt)("img",{className:"gif",src:(0,l.Z)("/img/installation.gif")}),(0,o.kt)("p",null,"As part of the installation process you'll be presented with questions; Once you answer them, everything you need will automatically be created for you. Let's take a closer look at the generated files:"),(0,o.kt)("p",null,"First, Transloco creates boilerplate files for the requested translations:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="assets/i18n/en.json"',title:'"assets/i18n/en.json"'},'{\n  "hello": "transloco en",\n  "dynamic": "transloco {{value}}"\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="assets/i18n/es.json"',title:'"assets/i18n/es.json"'},'{\n  "hello": "transloco es",\n  "dynamic": "transloco {{value}}"\n}\n')),(0,o.kt)("p",null,"Next, it will create a new file, ",(0,o.kt)("inlineCode",{parentName:"p"},"transloco-root.module.ts")," which exposes an Angular's module with a default configuration, and inject it into the ",(0,o.kt)("inlineCode",{parentName:"p"},"AppModule"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="transloco-root.module.ts"',title:'"transloco-root.module.ts"'},"import { HttpClient } from '@angular/common/http';\nimport {\n  TRANSLOCO_LOADER,\n  Translation,\n  TranslocoLoader,\n  TRANSLOCO_CONFIG,\n  translocoConfig,\n  TranslocoModule\n} from '@ngneat/transloco';\nimport { Injectable, NgModule } from '@angular/core';\nimport { environment } from '../environments/environment';\n\n@Injectable({ providedIn: 'root' })\nexport class TranslocoHttpLoader implements TranslocoLoader {\n  constructor(private http: HttpClient) {}\n\n  getTranslation(lang: string) {\n    return this.http.get<Translation>(`/assets/i18n/${lang}.json`);\n  }\n}\n\n@NgModule({\n  exports: [ TranslocoModule ],\n  providers: [\n    {\n      provide: TRANSLOCO_CONFIG,\n      useValue: translocoConfig({\n        availableLangs: ['en', 'es'],\n        defaultLang: 'en',\n        // Remove this option if your application\n        // doesn't support changing language in runtime.\n        reRenderOnLangChange: true,\n        prodMode: environment.production,\n      })\n    },\n    { provide: TRANSLOCO_LOADER, useClass: TranslocoHttpLoader }\n  ]\n})\nexport class TranslocoRootModule {}\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You should import the ",(0,o.kt)("inlineCode",{parentName:"p"},"TranslocoRootModule")," once in your root module, and use ",(0,o.kt)("inlineCode",{parentName:"p"},"TranslocoModule")," in any other module.")),(0,o.kt)("p",null,"As you might have noticed it also set an ",(0,o.kt)("inlineCode",{parentName:"p"},"HttpLoader")," into the module's providers. The ",(0,o.kt)("inlineCode",{parentName:"p"},"HttpLoader")," is a class that implements the ",(0,o.kt)("inlineCode",{parentName:"p"},"TranslocoLoader")," interface. It's responsible for instructing Transloco how to load the translation files. It uses Angular HTTP client to fetch the files, based on the given path (We'll see why it called path on the lazy load section)."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"When you deploy your application and Transloco is unable to load your language files it might because you need to use a relative path:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"getTranslation(langPath: string) {\n  return this.http.get(`./assets/i18n/${langPath}.json`);\n}\n"))),(0,o.kt)("p",null,"And that's it! Now we are ready to use it in our project."),(0,o.kt)("h2",{id:"angular--transloco-versions"},"Angular & Transloco versions"),(0,o.kt)("p",null,"Make sure you install the version corresponding to your Angular version:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Angular"),(0,o.kt)("th",{parentName:"tr",align:null},"@ngneat/transloco"),(0,o.kt)("th",{parentName:"tr",align:null},"@ngneat/transloco-locale"),(0,o.kt)("th",{parentName:"tr",align:null},"@ngneat/transloco-messageformat"),(0,o.kt)("th",{parentName:"tr",align:null},"@ngneat/transloco-preload-langs"),(0,o.kt)("th",{parentName:"tr",align:null},"@ngneat/transloco-persist-translations"),(0,o.kt)("th",{parentName:"tr",align:null},"@ngneat/transloco-persist-lang"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"13"),(0,o.kt)("td",{parentName:"tr",align:null},"4.x"),(0,o.kt)("td",{parentName:"tr",align:null},"4.x"),(0,o.kt)("td",{parentName:"tr",align:null},"4.x"),(0,o.kt)("td",{parentName:"tr",align:null},"4.x"),(0,o.kt)("td",{parentName:"tr",align:null},"4.x"),(0,o.kt)("td",{parentName:"tr",align:null},"4.x")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"12"),(0,o.kt)("td",{parentName:"tr",align:null},"3.x"),(0,o.kt)("td",{parentName:"tr",align:null},"3.x"),(0,o.kt)("td",{parentName:"tr",align:null},"3.x"),(0,o.kt)("td",{parentName:"tr",align:null},"3.x"),(0,o.kt)("td",{parentName:"tr",align:null},"3.x"),(0,o.kt)("td",{parentName:"tr",align:null},"3.x")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},">=6 <12"),(0,o.kt)("td",{parentName:"tr",align:null},"2.x"),(0,o.kt)("td",{parentName:"tr",align:null},"<3"),(0,o.kt)("td",{parentName:"tr",align:null},"<3"),(0,o.kt)("td",{parentName:"tr",align:null},"<3"),(0,o.kt)("td",{parentName:"tr",align:null},"<3"),(0,o.kt)("td",{parentName:"tr",align:null},"<3")))))}m.isMDXComponent=!0}}]);