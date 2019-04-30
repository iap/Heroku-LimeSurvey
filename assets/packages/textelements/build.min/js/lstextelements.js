(function(t){function e(e){for(var r,i,s=e[0],c=e[1],u=e[2],d=0,g=[];d<s.length;d++)i=s[d],a[i]&&g.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(g.length)g.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={main:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){n("668d"),t.exports=n("52bd")},3384:function(t,e,n){"use strict";var r=n("af2e"),a=n.n(r);a.a},"3c07":function(t,e,n){"use strict";var r=n("aad9"),a=n.n(r);a.a},"52bd":function(t,e,n){},"668d":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("a026"),a=n("3730"),o=n.n(a),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-center scoped-new-texteditor"},[[t.$store.state.languages.length>1?n("div",{staticClass:"row"},[n("language-selector",{attrs:{elId:"texteditor",aLanguages:t.$store.state.languages,parentCurrentLanguage:t.$store.state.activeLanguage},on:{change:t.selectLanguage}})],1):t._e(),n("div",{staticClass:"row"},[n("div",{staticClass:"form-group col-md-4 col-sm-6"},[n("label",{attrs:{for:"surveyTitle"}},[t._v(t._s(t._f("translate")("Survey title")))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.currentSurveyTitle,expression:"currentSurveyTitle"}],staticClass:"form-control",attrs:{type:"text",name:"surveyls_title",id:"surveyTitle"},domProps:{value:t.currentSurveyTitle},on:{input:function(e){e.target.composing||(t.currentSurveyTitle=e.target.value)}}})]),n("div",{staticClass:"form-group col-md-4 col-sm-6"},[n("label",{attrs:{for:"dateFormat"}},[t._v(t._s(t._f("translate")("Date format")))]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.currentDateFormat,expression:"currentDateFormat"}],staticClass:"form-control",attrs:{id:"dateFormat",name:"dateformat"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.currentDateFormat=e.target.multiple?n:n[0]}}},t._l(t.$store.state.dateFormatOptions,function(e,r){return n("option",{key:r,domProps:{value:r}},[t._v(" "+t._s(e)+" ")])}),0)]),n("div",{staticClass:"form-group col-md-4 col-sm-12"},[n("label",{attrs:{for:""}},[t._v(t._s(t._f("translate")("Decimal mark")))]),n("div",{staticClass:"fullystyled--radioButtons",attrs:{role:"group"}},[n("div",{staticClass:"radioButtons--container"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.currentDecimalDivider,expression:"currentDecimalDivider"}],staticClass:"radio",attrs:{type:"radio",id:"decimalDivider-0",name:"numberformat"},domProps:{value:0,checked:t._q(t.currentDecimalDivider,0)},on:{change:function(e){t.currentDecimalDivider=0}}}),n("label",{attrs:{for:"decimalDivider-0"}},[t._v(" "+t._s(t._f("translate")("Dot "))+" (.) ")])]),n("div",{staticClass:"radioButtons--container"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.currentDecimalDivider,expression:"currentDecimalDivider"}],staticClass:"radio",attrs:{type:"radio",id:"decimalDivider-1",name:"numberformat"},domProps:{value:1,checked:t._q(t.currentDecimalDivider,1)},on:{change:function(e){t.currentDecimalDivider=1}}}),n("label",{attrs:{for:"decimalDivider-1"}},[t._v(" "+t._s(t._f("translate")("Comma "))+" (,) ")])])])])]),n("div",{staticClass:"row"},[n("div",{staticClass:"form-group col-sm-4"},[n("label",{attrs:{for:"endUrl"}},[t._v(t._s(t._f("translate")("End url")))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.currentEndUrl,expression:"currentEndUrl"}],staticClass:"form-control",attrs:{type:"text",name:"url",id:"endUrl"},domProps:{value:t.currentEndUrl},on:{input:function(e){e.target.composing||(t.currentEndUrl=e.target.value)}}})]),n("div",{staticClass:"form-group col-sm-8"},[n("label",{attrs:{for:"endUrlDescription"}},[t._v(t._s(t._f("translate")("URL description (link text)")))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.currentEndUrlDescription,expression:"currentEndUrlDescription"}],staticClass:"form-control",attrs:{type:"text",name:"urldescrip",id:"endUrlDescription"},domProps:{value:t.currentEndUrlDescription},on:{input:function(e){e.target.composing||(t.currentEndUrlDescription=e.target.value)}}})])]),n("div",{staticClass:"row scoped-editor-row"},[n("div",{staticClass:"col-sm-12 ls-space margin top-5 bottom-5 scope-contains-ckeditor "},[n("label",{},[t._v(t._s(t._f("translate")("Description"))+":")]),n("ckeditor",{attrs:{editor:t.descriptionEditorObject,config:{}},model:{value:t.currentDescription,callback:function(e){t.currentDescription=e},expression:"currentDescription"}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.currentDescription,expression:"currentDescription"}],attrs:{type:"hidden",name:"description"},domProps:{value:t.currentDescription},on:{input:function(e){e.target.composing||(t.currentDescription=e.target.value)}}})],1)]),n("div",{staticClass:"row scoped-editor-row"},[n("div",{staticClass:"col-sm-12 ls-space margin top-5 bottom-5 scope-contains-ckeditor "},[n("label",{},[t._v(t._s(t._f("translate")("Welcome"))+":")]),n("ckeditor",{attrs:{editor:t.welcomeEditorObject,config:{}},model:{value:t.currentWelcome,callback:function(e){t.currentWelcome=e},expression:"currentWelcome"}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.currentWelcome,expression:"currentWelcome"}],attrs:{type:"hidden",name:"welcome"},domProps:{value:t.currentWelcome},on:{input:function(e){e.target.composing||(t.currentWelcome=e.target.value)}}})],1)]),n("div",{staticClass:"row scoped-editor-row"},[n("div",{staticClass:"col-sm-12 ls-space margin top-5 bottom-5 scope-contains-ckeditor "},[n("label",{},[t._v(t._s(t._f("translate")("End message"))+":")]),n("ckeditor",{attrs:{editor:t.endTextEditorObject,config:{}},model:{value:t.currentEndText,callback:function(e){t.currentEndText=e},expression:"currentEndText"}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.currentEndText,expression:"currentEndText"}],attrs:{type:"hidden",name:"endtext"},domProps:{value:t.currentEndText},on:{input:function(e){e.target.composing||(t.currentEndText=e.target.value)}}})],1)])],n("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"loading-back-greyed"})],2)},s=[],c=n("8a60"),u=n.n(c),l=n("fb3d"),d=n.n(l),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-xs-12"},[n("div",{staticClass:"button-toolbar",attrs:{id:t.elId+"-language-selector"}},[n("div",{staticClass:"btn-group"},[t._l(t.getInChunks[0],function(e,r){return n("button",{key:r+"-button",class:"btn btn-"+(r==t.currentLanguage?"primary active":"default"),on:{click:function(e){return e.preventDefault(),t.setCurrentLanguage(r)}}},[t._v("\n                "+t._s(e)+"\n            ")])}),t.getInChunks.length>1?n("button",{staticClass:"btn btn-default dropdown-toggle",attrs:{"data-toggle":"dropdown"}},[t._v("\n                "+t._s(t._f("translate")("More Languages"))+"\n                "),n("span",{staticClass:"caret"})]):t._e(),n("ul",{staticClass:"dropdown-menu"},t._l(t.getInChunks[1],function(e,r){return n("li",{key:r+"-dropdown",on:{click:function(e){return e.preventDefault(),t.setCurrentLanguage(r)}}},[n("a",{attrs:{href:"#"}},[t._v(t._s(e))])])}),0)],2)]),n("hr")])},m=[],p=n("d623"),f=n.n(p),v=n("2593"),h=n.n(v),y=n("ec69"),D=n.n(y),L=n("2acb"),_=n.n(L),b=(n("6cd4"),{name:"language-selector",props:{elId:{type:String,required:!0},aLanguages:{type:[Array,Object],required:!0},parentCurrentLanguage:{type:String,required:!0}},computed:{currentLanguage:{get:function(){return this.parentCurrentLanguage},set:function(t){this.$emit("change",t)}},getInChunks:function(){if(f()(this.aLanguages)<=5)return[this.aLanguages];var t=h()(this.aLanguages,_()(D()(this.aLanguages),0,4)),e=h()(this.aLanguages,_()(D()(this.aLanguages),5));return[t,e]}},methods:{setCurrentLanguage:function(t){this.$emit("change",t)}}}),w=b,x=(n("3384"),n("2877")),E=Object(x["a"])(w,g,m,!1,null,"23840c6a",null),T=E.exports,C=n("795b"),k=n.n(C),F={methods:{__runAjax:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"get",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"json",a={};a[LS.data.csrfTokenName]=LS.data.csrfToken;var o=$.merge(e,a);return new k.a(function(e,a){void 0==$&&a("JQUERY NOT AVAILABLE!"),$.ajax({url:t,method:n||"get",data:o,dataType:r,success:function(t,n,r){e({success:!0,data:t,transferStatus:n,xhr:r})},error:function(t,e,n){a({success:!1,error:n,transferStatus:e,xhr:t})}})})},$_post:function(t,e){return this.__runAjax(t,e,"post")},$_get:function(t,e){return this.__runAjax(t,e,"get")},$_load:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"get";return this.__runAjax(t,e,n,"html")},$_delete:function(t,e){return this.__runAjax(t,e,"delete")},$_put:function(t,e){return this.__runAjax(t,e,"put")}}},U={name:"lsnexttexteditor",components:{"language-selector":T},mixins:[F],data:function(){return{loading:!0,event:null,descriptionEditorObject:d.a,welcomeEditorObject:d.a,endTextEditorObject:d.a}},computed:{isNewSurvey:function(){return window.TextEditData.isNewSurvey},currentSurveyTitle:{get:function(){return this.$store.state.surveyTitle[this.$store.state.activeLanguage]},set:function(t){this.$store.commit("setSurveyTitleForCurrentLanguage",t)}},currentWelcome:{get:function(){return this.$store.state.welcome[this.$store.state.activeLanguage]},set:function(t){this.$store.commit("setWelcomeForCurrentLanguage",t)}},currentDescription:{get:function(){return this.$store.state.description[this.$store.state.activeLanguage]},set:function(t){this.$store.commit("setDescriptionForCurrentLanguage",t)}},currentEndText:{get:function(){return this.$store.state.endText[this.$store.state.activeLanguage]},set:function(t){this.$store.commit("setEndTextForCurrentLanguage",t)}},currentEndUrl:{get:function(){return this.$store.state.endUrl[this.$store.state.activeLanguage]},set:function(t){this.$store.commit("setEndUrlForCurrentLanguage",t)}},currentEndUrlDescription:{get:function(){return this.$store.state.endUrlDescription[this.$store.state.activeLanguage]},set:function(t){this.$store.commit("setEndUrlDescriptionForCurrentLanguage",t)}},currentDateFormat:{get:function(){return this.$store.state.dateFormat[this.$store.state.activeLanguage]},set:function(t){this.$store.commit("setDateFormatForCurrentLanguage",t)}},currentDecimalDivider:{get:function(){return this.$store.state.decimalDivider[this.$store.state.activeLanguage]},set:function(t){this.$store.commit("setDecimalDividerForCurrentLanguage",t)}}},methods:{applyHotkeys:function(){var t=this;u.a.bind("ctrl+right",this.chooseNextLanguage),u.a.bind("ctrl+left",this.choosePreviousLanguage),u.a.bind("ctrl+shift+s",this.submitCurrentState),u.a.bind("ctrl+alt+d",function(){t.$store.commit("toggleDebugMode")})},chooseNextLanguage:function(){this.$log.log("HOTKEY","chooseNextLanguage"),this.$store.commit("nextLanguage")},choosePreviousLanguage:function(){this.$log.log("HOTKEY","choosePreviousLanguage"),this.$store.commit("previousLanguage")},submitCurrentState:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.toggleLoading(),this.$store.dispatch("saveData").then(function(n){t.toggleLoading(),1==e&&(window.location.href=n.data.redirect),$("#in_survey_common").trigger("lsStopLoading"),window.LS.notifyFader(n.data.message,"well-lg bg-primary text-center"),t.$log.log("OBJECT AFTER TRANSFER: ",n)},function(e){t.toggleLoading(),$("#in_survey_common").trigger("lsStopLoading"),window.LS.notifyFader("Texts could not be stored. Reloading page.","well-lg bg-danger text-center")})},selectLanguage:function(t){this.$log.log("LANGUAGE CHANGED",t),this.$store.commit("setActiveLanguage",t)}},created:function(){this.$store.dispatch("getDateFormatOptions"),this.$store.dispatch("getDataSet")},mounted:function(){var t=this;$("#advancedTextEditor").on("jquery:trigger",this.jqueryTriggered),this.applyHotkeys(),$("#surveytexts").on("submit",function(t){t.preventDefault()}),window.TextEditData.isNewSurvey||$("#save-button").on("click",function(e){t.submitCurrentState()}),this.toggleLoading(!1)}},O=U,S=(n("3c07"),Object(x["a"])(O,i,s,!1,null,"825fb476",null)),j=S.exports,A=n("2f62"),P=n("bfa9"),N=n("ead5"),G=n.n(N),R=n("ba84"),W=n.n(R),M={setSurveyTitle:function(t,e){t.surveyTitle=e},setWelcome:function(t,e){t.welcome=e},setDescription:function(t,e){t.description=e},setEndText:function(t,e){t.endText=e},setEndUrl:function(t,e){t.endUrl=e},setEndUrlDescription:function(t,e){t.endUrlDescription=e},setDateFormat:function(t,e){t.dateFormat=e},setDecimalDivider:function(t,e){t.decimalDivider=e},setDateFormatOptions:function(t,e){t.dateFormatOptions=e},setSurveyTitleForCurrentLanguage:function(t,e){r["a"].set(t.surveyTitle,t.activeLanguage,e)},setWelcomeForCurrentLanguage:function(t,e){r["a"].set(t.welcome,t.activeLanguage,e)},setDescriptionForCurrentLanguage:function(t,e){r["a"].set(t.description,t.activeLanguage,e)},setEndTextForCurrentLanguage:function(t,e){r["a"].set(t.endText,t.activeLanguage,e)},setEndUrlForCurrentLanguage:function(t,e){r["a"].set(t.endUrl,t.activeLanguage,e)},setEndUrlDescriptionForCurrentLanguage:function(t,e){r["a"].set(t.endUrlDescription,t.activeLanguage,e)},setDateFormatForCurrentLanguage:function(t,e){r["a"].set(t.dateFormat,t.activeLanguage,e)},setDecimalDividerForCurrentLanguage:function(t,e){r["a"].set(t.decimalDivider,t.activeLanguage,e)},setActiveLanguage:function(t,e){t.activeLanguage=e},setLanguages:function(t,e){t.languages=e},nextLanguage:function(t){var e=D()(t.languages),n=W()(e,t.activeLanguage);n<e.length&&(t.activeLanguage=e[n+1])},previousLanguage:function(t){var e=D()(t.languages),n=W()(e,t.activeLanguage);n>0&&(t.activeLanguage=e[n-1])},setSurvey:function(t,e){t.survey=e},toggleDebugMode:function(t){t.debugMode=!t.debugMode}},I=(n("ac6a"),n("2ef0")),B=n.n(I),H=(n("14b9"),n("774e")),q=n.n(H),J=n("75fc"),Y=n("d225"),K=n("b0b4"),V=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];Object(Y["a"])(this,t),this.param=e,this.silencer=n,this.collector=[],this.currentGroupDescription="",this.activeGroups=0,this.timeHolder=null,this.methods=["group","groupEnd","log","trace","time","timeEnd","error","warn"],this.silent={group:function(){},groupEnd:function(){},log:function(){},trace:function(){},time:function(){},timeEnd:function(){},error:function(){},err:function(){},debug:function(){},warn:function(){}}}return Object(K["a"])(t,[{key:"_generateError",value:function(){try{throw new Error}catch(t){return t}}},{key:"_insertParamToArguments",value:function(t){if(""!==this.param){var e=Object(J["a"])(t);return e.unshift(this.param),e}return q()(arguments)}},{key:"setSilent",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.silencer=t||!this.silencer}},{key:"group",value:function(){if(!this.silencer){var t=this._insertParamToArguments(arguments);if("function"!==typeof console.group){var e=t[0]||"GROUP";this.currentGroupDescription=e,this.activeGroups++}else console.group.apply(console,t)}}},{key:"groupEnd",value:function(){if(!this.silencer){var t=this._insertParamToArguments(arguments);"function"!==typeof console.groupEnd?(this.currentGroupDescription="",this.activeGroups--,this.activeGroups=0===this.activeGroups?0:this.activeGroups--):console.groupEnd.apply(console,t)}}},{key:"log",value:function(){if(!this.silencer){var t=this._insertParamToArguments(arguments);"function"!==typeof console.group?(t.shift(),t.unshift(" ".repeat(2*this.activeGroups)),this.log.apply(this,t)):console.log.apply(console,t)}}},{key:"trace",value:function(){if(!this.silencer){var t=this._insertParamToArguments(arguments);if("function"!==typeof console.trace){var e=this._generateError();e.stack?this.log.apply(console,e.stack):(this.log(t),void 0!=arguments.callee&&this.trace.apply(console,arguments.callee))}else console.trace.apply(console,t)}}},{key:"time",value:function(){if(!this.silencer){var t=this._insertParamToArguments(arguments);"function"!==typeof console.time?this.timeHolder=new Date:console.time.apply(console,t)}}},{key:"timeEnd",value:function(){if(!this.silencer){var t=this._insertParamToArguments(arguments);if("function"!==typeof console.timeEnd){var e=new Date-this.timeHolder;this.log("Took ".concat(Math.floor(e/36e5)," hours, ").concat(Math.floor(e/6e4)," minutes and ").concat(Math.floor(e/1e3)," seconds ( ").concat(e," ms)")),this.time=new Date}else console.timeEnd.apply(console,t)}}},{key:"error",value:function(){var t=this._insertParamToArguments(arguments);"function"!==typeof console.error?(this.log("--- ERROR ---"),this.log(t)):console.error.apply(console,t)}},{key:"warn",value:function(){var t=this._insertParamToArguments(arguments);"function"!==typeof console.warn?(this.log("--- WARN ---"),this.log(t)):console.warn.apply(console,t)}}]),t}(),X=V,Q=new X("TEXTEDITOR"),z=function(t){window.debugState.backend?t.prototype.$log=Q:t.prototype.$log=console.ls.silent},Z={getDataSet:function(t){F.methods.$_get(window.TextEditData.connectorBaseUrl+"/getCurrentEditorValues").then(function(e){Q.log("Getting Data",e),t.dispatch("updateObjects",e.data.textdata),t.commit("setLanguages",e.data.languages),t.commit("setActiveLanguage",B.a.keys(e.data.languages)[0])})},updateObjects:function(t,e){Q.log("UPDATING AJAX",e),t.commit("setSurveyTitle",e.surveyTitle),t.commit("setWelcome",e.welcome),t.commit("setDescription",e.description),t.commit("setEndText",e.endText),t.commit("setEndUrl",e.endUrl),t.commit("setEndUrlDescription",e.endUrlDescription),t.commit("setDateFormat",e.dateFormat),t.commit("setDecimalDivider",e.decimalDivider)},getDateFormatOptions:function(t){F.methods.$_get(window.TextEditData.connectorBaseUrl+"/getDateFormatOptions").then(function(e){t.commit("setDateFormatOptions",e.data)})},saveData:function(t){var e={};B.a.each(B.a.keys(t.state.languages),function(n){e[n]={surveyTitle:t.state.surveyTitle[n],welcome:t.state.welcome[n],description:t.state.description[n],endText:t.state.endText[n],endUrl:t.state.endUrl[n],endUrlDescription:t.state.endUrlDescription[n],dateFormat:t.state.dateFormat[n],decimalDivider:t.state.decimalDivider[n]}});var n=B.a.merge({changes:e},window.LS.data.csrfTokenData);return Q.log("OBJECT TO BE TRANSFERRED: ",{postObject:n}),F.methods.$_post(window.TextEditData.connectorBaseUrl+"/saveTextData",n)}},tt=n("13ea"),et=n.n(tt),nt={fullyLoaded:function(t){return!et()(t.welcome)}},rt={surveyTitle:{},welcome:{},description:{},endText:{},endUrl:{},endUrlDescription:{},dateFormat:{},decimalDivider:{},dateFormatOptions:{},languages:[],survey:{},debugMode:!1,activeLanguage:""};r["a"].use(G.a),r["a"].use(A["a"]);var at=function(t){var e=new P["a"]({key:"lstextedit_"+t,storage:window.localStorage});return new A["a"].Store({state:rt,plugins:[e.plugin],mutations:M,actions:Z,getters:nt})};r["a"].config.ignoredElements=["x-test"],r["a"].use(z),r["a"].use(o.a),r["a"].mixin({methods:{toggleLoading:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(this.loading=!this.loading,null!==t)return this.loading=t,void(t?$("#textEditLoader").fadeIn(200):$("#textEditLoader").fadeOut(400));"none"!=$("#textEditLoader").css("display")?$("#textEditLoader").fadeOut(400):$("#textEditLoader").fadeIn(200)},translate:function(t){return window.TextEditData.i10N[t]||t}},filters:{translate:function(t){return window.TextEditData.i10N[t]||t}}});var ot=at(LS.parameters.surveyid||0);new r["a"]({el:"#advancedTextEditor",store:ot,components:{lsnexttexteditor:j}})},aad9:function(t,e,n){},af2e:function(t,e,n){}});
//# sourceMappingURL=lstextelements.js.map