(function(e){function n(n){for(var r,s,o=n[0],l=n[1],d=n[2],c=0,h=[];c<o.length;c++)s=o[c],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&h.push(i[s][0]),i[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(n);while(h.length)h.shift()();return a.push.apply(a,d||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,o=1;o<t.length;o++){var l=t[o];0!==i[l]&&(r=!1)}r&&(a.splice(n--,1),e=s(s.s=t[0]))}return e}var r={},i={app:0},a=[];function s(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=e,s.c=r,s.d=function(e,n,t){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)s.d(t,r,function(n){return e[n]}.bind(null,r));return t},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="/HJ-Gedichte/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=n,o=o.slice();for(var d=0;d<o.length;d++)n(o[d]);var u=l;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var r=t("85ec"),i=t.n(r);i.a},"0471":function(e,n,t){"use strict";var r=t("acb5"),i=t.n(r);i.a},2493:function(e,n,t){"use strict";var r=t("8b0b"),i=t.n(r);i.a},3237:function(e,n,t){"use strict";var r=t("d75b"),i=t.n(r);i.a},"3a1b":function(e,n,t){"use strict";var r=t("ed85"),i=t.n(r);i.a},"3b4f":function(e,n,t){},4734:function(e,n,t){},"4e9c":function(e,n,t){"use strict";var r=t("3b4f"),i=t.n(r);i.a},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("0cdd");var r=t("2b0e"),i=t("5f5b");t("ab8b"),t("2dd8");r["default"].use(i["a"]);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("HeaderBar",{staticClass:"nav"}),t("vue-page-transition",{attrs:{name:"fade-in-up"}},[t("router-view",{attrs:{id:"view"}})],1)],1)},s=[],o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[t("b-navbar-brand",[t("router-link",{staticClass:"brand",attrs:{to:"/"}},[t("img",{attrs:{src:"https://streemlead.com/cdn/wordflow/books-logo-small.png"}}),e._v(" H. J. Gedichte ")])],1),t("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[t("b-navbar-nav",{staticClass:"ml-auto"},[t("b-navbar-nav",[t("b-nav-item",[t("router-link",{attrs:{to:"/"}},[e._v("Gedichte")])],1),t("b-nav-item",[t("router-link",{attrs:{to:"/contact"}},[e._v("Kontakt")])],1)],1)],1)],1)],1)},l=[],d={name:"HeaderBar",props:{}},u=d,c=(t("3237"),t("2877")),h=Object(c["a"])(u,o,l,!1,null,"794c7430",null),g=h.exports,m={components:{HeaderBar:g}},f=m,b=(t("034f"),Object(c["a"])(f,a,s,!1,null,null,null)),v=b.exports,p=t("8c4f"),w=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"home",style:{backgroundImage:"url("+e.background_image+")"}},[t("div",{staticClass:"header"},[t("div",{staticClass:"wrapper"},[t("h1",[e._v("Gedichte von Hans Josef Rommerskirchen")]),t("div",{staticClass:"lead-text"},[t("vue-typer",{attrs:{text:e.zitate,repeat:1/0,"initial-action":"typing","pre-type-delay":70,"type-delay":100,"pre-erase-delay":4e3,"erase-delay":1e3,"erase-style":"select-all","erase-on-complete":!1,"caret-animation":"blink"}})],1),t("SearchBar",{attrs:{tags:e.randomTags},on:{filter:e.filter}})],1)]),t("div",{staticClass:"container"},e._l(e.flowbook,(function(n,r){return t("div",{key:r,staticClass:"item"},[t("router-link",{attrs:{to:{path:"/page",query:{item:n.id}}}},[t("FlowItem",{attrs:{align:e.alignSide(r),state:0===r,title:n.title,author:n.author,date:n.date}})],1)],1)})),0)])},k=[],_=(t("caad"),t("2532"),t("e956")),S=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"searchbar",attrs:{"data-aos":"zoom-in","data-aos-delay":"50","data-aos-duration":"1000","data-aos-easing":"ease-in-out"}},[t("h2",[e._v("Entdecken")]),t("b-input-group",{staticClass:"searchcontrols"},[t("b-form-input",{attrs:{placeholder:"Suchen"},model:{value:e.searchQuery,callback:function(n){e.searchQuery=n},expression:"searchQuery"}}),t("b-input-group-append",[t("b-button",{attrs:{variant:"info"},on:{click:function(n){return e.filter(e.searchQuery)}}},[t("i",{staticClass:"bx bx-search-alt bx-tada"})])],1)],1),t("div",{staticClass:"d-flex flex-wrap tags justify-content-center"},[t("div",[t("b-button",{staticClass:"tag",attrs:{size:"sm",variant:"outline-dark"},on:{click:function(n){return e.filter("Zufällig")}}},[e._v("#Zufällig")])],1),e._l(e.tags,(function(n,r){return t("div",{key:r},[t("b-button",{staticClass:"tag",attrs:{size:"sm",variant:"outline-dark"},on:{click:function(t){return e.filter(n)}}},[e._v("#"+e._s(n))])],1)}))],2)],1)},z=[],y={name:"SearchBar",components:{},props:{tags:Array},data:function(){return{searchQuery:""}},methods:{filter:function(e){console.log("filter: "+e),this.searchQuery=e,this.$emit("filter",e)}}},A=y,D=(t("8bf6"),Object(c["a"])(A,S,z,!1,null,"9d3b3680",null)),I=D.exports,x=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{"data-aos":"fade-up","data-aos-delay":"50","data-aos-duration":"1000","data-aos-easing":"ease-in-out"}},["left"===e.align?t("div",{staticClass:"flowitem d-flex flex-column",on:{mouseover:function(n){return e.toggleItem(!0)},mouseout:function(n){return e.toggleItem(!1)}}},[t("div",{staticClass:"d-flex"},[t("i",{staticClass:"bx bx-message-square-dots icon",class:{active:e.isActive,"bx-tada":e.isActive}}),t("span",{staticClass:"title",staticStyle:{"text-align":"left","padding-left":"20px"}},[e._v(" "+e._s(e.title)+" ")])]),t("span",{staticClass:"details",staticStyle:{"text-align":"left"}},[e._v("- "+e._s(e.author)+", "+e._s(e.date)+" -")])]):t("div",{staticClass:"flowitem d-flex flex-column",on:{mouseover:function(n){return e.toggleItem(!0)},mouseout:function(n){return e.toggleItem(!1)}}},[t("div",{staticClass:"d-flex flex-row-reverse"},[t("i",{staticClass:"bx bx-message-square-dots icon",class:{active:e.isActive,"bx-tada":e.isActive},staticStyle:{"text-align":"right"}}),t("span",{staticClass:"title",staticStyle:{"text-align":"right","padding-right":"20px"}},[e._v(" "+e._s(e.title)+" ")])]),t("span",{staticClass:"details",staticStyle:{"text-align":"right"}},[e._v("- "+e._s(e.author)+", "+e._s(e.date)+" -")])])])},G=[],C={name:"FlowItem",data:function(){return{isActive:!1}},props:{title:String,author:String,date:String,align:String,state:Boolean},methods:{toggleItem:function(e){this.isActive=e}},mounted:function(){this.$nextTick((function(){this.isActive=this.state}))}},E=C,B=(t("3a1b"),Object(c["a"])(E,x,G,!1,null,"7d7f5323",null)),W=B.exports,V={name:"HomeView",components:{VueTyper:_["VueTyper"],FlowItem:W,SearchBar:I},data:function(){return{flowbook:this.$root.flowbook,filterQuery:"",background_image:"https://streemlead.com/cdn/wordflow/old-books-1-blurred.png",zitate:['"Wer zu lesen versteht, besitzt den Schlüssel zu großen Taten, zu unerträumten Möglichkeiten."\n- Aldous Huxley -','"Nichts verscheuchte böse Träume schneller als das Rascheln von bedrucktem Papier."\n- Cornelia Funke -']}},computed:{randomTags:function(){for(var e=[],n=0;n<this.$root.flowbook.length;n++){for(var t=this.shuffleArray(this.$root.flowbook[n].tags),r=0;r<t.length;n++)if(!e.includes(t[r])){e.push(t[r]);break}if(5==e.length)break}return e}},methods:{alignSide:function(e){return e%2==0?"left":"right"},shuffleArray:function(e){for(var n=e.length-1;n>0;n--){var t=Math.floor(Math.random()*(n+1)),r=e[n];e[n]=e[t],e[t]=r}return e},filter:function(e){if("Zufällig"===e){var n=Math.floor(Math.random()*this.$root.flowbook.length);this.$router.push({path:"/page",query:{item:n}})}else{this.filterQuery=e;for(var t=[],r=0;r<this.$root.flowbook.length;r++)for(var i=0;i<this.$root.flowbook[r].tags.length;i++)if(this.$root.flowbook[r].tags[i].toLowerCase().includes(this.filterQuery.toLowerCase())||this.filterQuery.toLowerCase().includes(this.$root.flowbook[r].tags[i].toLowerCase())){t.push(this.$root.flowbook[r]);break}this.flowbook=t,this.$forceUpdate()}}}},F=V,j=(t("0471"),Object(c["a"])(F,w,k,!1,null,null,null)),$=j.exports,H=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"page",style:{backgroundImage:"url("+e.flowitem.background+")"}},[t("div",{staticClass:"container d-flex flex-column"},[t("div",{staticClass:"d-flex flex-column flex-grow-1",staticStyle:{margin:"10px 0"}},[t("WordFlow",{staticClass:"m-center wordflow",attrs:{title:e.flowitem.title,text:e.flowitem.text,author:e.flowitem.author,date:e.flowitem.date,type:"fading"}})],1)])])},T=[],O=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{"data-aos":"fade-up","data-aos-delay":"50","data-aos-duration":"1000","data-aos-easing":"ease-in-out"}},[t("div",{staticClass:"wordflow"},[t("h2",{},[e._v(e._s(e.title))]),"fading"===e.type?t("div",e._l(e.texts,(function(n,r){return t("div",{key:r},[t("span",{staticClass:"d-block text",class:{hidden:!n.isActive,animate__animated:n.isActive,animate__fadeInUp:n.isActive}},[e._v(" "+e._s(n.content)+" ")])])})),0):e._e(),t("p",{staticClass:"d-block",class:{hidden:!e.authorIsActive,animate__animated:e.authorIsActive,animate__fadeInLeft:e.authorIsActive}},[e._v("- "+e._s(e.author)+", "+e._s(e.date))]),"typer"===e.type?t("vue-typer",{staticClass:"text",attrs:{text:e.text[0],repeat:0,"initial-action":"typing","pre-type-delay":2e3,"type-delay":70,"caret-animation":"blink"}}):e._e()],1)])},P=[],R=(t("ac1f"),t("1276"),{name:"WordFlow",props:{title:String,author:String,date:String,type:String,text:String},data:function(){return{authorIsActive:!1}},computed:{texts:function(){var e=[];if(""!==this.text&&void 0!==this.text){for(var n=this.text.split("\n"),t=0;t<n.length;t++)e.push({isActive:!1,content:n[t]});console.log(n)}return e}},components:{VueTyper:_["VueTyper"]},methods:{},mounted:function(){var e=this,n=0,t=setInterval((function(){n<e.texts.length?(e.texts[n].isActive=!0,e.$forceUpdate(),n+=1):(e.authorIsActive=!0,clearInterval(t))}),2500)}}),L=R,U=(t("67b9"),Object(c["a"])(L,O,P,!1,null,"01d4ca89",null)),Z=U.exports,M={name:"PageView",components:{WordFlow:Z},data:function(){return{flowitem:[]}},mounted:function(){isNaN(parseInt(this.$route.query.item))||(this.flowitem=this.$root.flowbook[parseInt(this.$route.query.item)])}},J=M,K=(t("9246"),Object(c["a"])(J,H,T,!1,null,"0b5f2e27",null)),N=K.exports,q=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"contact",style:{backgroundImage:"url("+e.background_image+")"}},[t("div",{staticClass:"wrapper"},[t("div",{staticClass:"section"},[t("div",{staticClass:"body",attrs:{"data-aos":"fade-up","data-aos-delay":"50","data-aos-duration":"1000","data-aos-easing":"ease-in-out"}},[t("h1",[e._v("Über den Autor")]),t("b-row",{staticClass:"details"},[t("div",{staticClass:"col-md-4 col-xs-12"},[t("img",{staticClass:"img-fluid",attrs:{src:"https://streemlead.com/cdn/wordflow/autor-1.jpg"}})]),t("div",{staticClass:"col-md-8 col-xs-12"},[t("div",{staticClass:"info d-flex flex-column text-left w-100"},[t("div",{staticClass:"d-flex"},[t("span",{staticClass:"key"},[e._v("Name:")]),t("span",{staticClass:"value"},[e._v("Hans Josef Rommerskirchen")])]),t("div",{staticClass:"d-flex"},[t("span",{staticClass:"key"},[e._v("Alter:")]),t("span",{staticClass:"value"},[e._v("62 Jahre")])]),t("div",{staticClass:"d-flex"},[t("span",{staticClass:"key"},[e._v("E-Mail:")]),t("span",{staticClass:"value"},[e._v("romijosef@aol.com")])])])])]),e._m(0)],1)]),t("div",{staticClass:"section"},[t("div",{staticClass:"body",attrs:{"data-aos":"fade-up","data-aos-delay":"50","data-aos-duration":"1000","data-aos-easing":"ease-in-out"}},[t("h1",[e._v("Impressum")]),t("div",{staticClass:"panel"},[t("Impressum")],1)])]),t("div",{staticClass:"section"},[t("div",{staticClass:"body",attrs:{"data-aos":"fade-up","data-aos-delay":"50","data-aos-duration":"1000","data-aos-easing":"ease-in-out"}},[t("h1",[e._v("Datenschutzerklärung")]),t("div",{staticClass:"panel"},[t("PrivacyPolicy")],1)])])])])},Q=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"panel"},[t("span",{staticClass:"text"},[e._v("Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.")])])}],Y=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"privacypolicy"},[t("p",[e._v("Verantwortlicher im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung (DSGVO), ist:")]),e._m(0),t("h2",[e._v("Ihre Betroffenenrechte")]),t("p",[e._v("Unter den angegebenen Kontaktdaten unseres Datenschutzbeauftragten können Sie jederzeit folgende Rechte ausüben:")]),e._m(1),t("p",[e._v("Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.")]),t("p",[e._v("Sie können sich jederzeit mit einer Beschwerde an eine Aufsichtsbehörde wenden, z. B. an die zuständige Aufsichtsbehörde des Bundeslands Ihres Wohnsitzes oder an die für uns als verantwortliche Stelle zuständige Behörde.")]),e._m(2),t("p"),t("h2",[e._v("Verwendung von Google Analytics")]),t("p",[e._v(" Klicken Sie "),t("a",{attrs:{href:"#"},on:{click:e.toggleTracking}},[e._v("Hier")]),e._v(", um das Tracking durch Google Analytics zu "),e.trackingState?t("span",[e._v("deaktivieren.")]):t("span",[e._v("aktivieren.")])]),t("h3",[e._v("Art und Zweck der Verarbeitung:")]),t("p",[e._v("Diese Website benutzt Google Analytics, einen Webanalysedienst der Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043 USA (nachfolgend: „Google“). Google Analytics verwendet sog. „Cookies“, also Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Webseite durch Sie ermöglichen. Die durch das Cookie erzeugten Informationen über Ihre Benutzung dieser Webseite werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Aufgrund der Aktivierung der IP-Anonymisierung auf diesen Webseiten, wird Ihre IP-Adresse von Google jedoch innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt. Im Auftrag des Betreibers dieser Website wird Google diese Informationen benutzen, um Ihre Nutzung der Webseite auszuwerten, um Reports über die Webseitenaktivitäten zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen gegenüber dem Webseitenbetreiber zu erbringen. Die im Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt.")]),t("p",[e._v("Die Zwecke der Datenverarbeitung liegen in der Auswertung der Nutzung der Website und in der Zusammenstellung von Reports über Aktivitäten auf der Website. Auf Grundlage der Nutzung der Website und des Internets sollen dann weitere verbundene Dienstleistungen erbracht werden.")]),t("h3",[e._v("Rechtsgrundlage:")]),t("p",[e._v("Die Verarbeitung der Daten erfolgt auf Grundlage einer Einwilligung des Nutzers (Art. 6 Abs. 1 lit. a DSGVO).")]),t("h3",[e._v("Empfänger:")]),t("p",[e._v("Empfänger der Daten ist Google als Auftragsverarbeiter. Hierfür haben wir mit Google den entsprechenden Auftragsverarbeitungsvertrag abgeschlossen.")]),t("h3",[e._v("Speicherdauer:")]),t("p",[e._v("Die Löschung der Daten erfolgt, sobald diese für unsere Aufzeichnungszwecke nicht mehr erforderlich sind.")]),t("h3",[e._v("Drittlandtransfer:")]),e._m(3),t("h3",[e._v("Bereitstellung vorgeschrieben oder erforderlich:")]),t("p",[e._v("Die Bereitstellung Ihrer personenbezogenen Daten erfolgt freiwillig, allein auf Basis Ihrer Einwilligung. Sofern Sie den Zugriff unterbinden, kann es hierdurch zu Funktionseinschränkungen auf der Website kommen.")]),t("h3",[e._v("Widerruf der Einwilligung:")]),e._m(4),e._m(5),t("h3",[e._v("Profiling:")]),t("p",[e._v("Mit Hilfe des Tracking-Tools Google Analytics kann das Verhalten der Besucher der Webseite bewertet und die Interessen analysiert werden. Hierzu erstellen wir ein pseudonymes Nutzerprofil.")]),t("p"),t("h2",[e._v("Verwendung von Scriptbibliotheken (Google Webfonts)")]),t("h3",[e._v("Art und Zweck der Verarbeitung:")]),t("p",[e._v("Um unsere Inhalte browserübergreifend korrekt und grafisch ansprechend darzustellen, verwenden wir auf dieser Website „Google Web Fonts“ der Google LLC (1600 Amphitheatre Parkway, Mountain View, CA 94043, USA; nachfolgend „Google“) zur Darstellung von Schriften.")]),e._m(6),t("h3",[e._v("Rechtsgrundlage:")]),t("p",[e._v("Rechtsgrundlage für die Einbindung von Google Webfonts und dem damit verbundenen Datentransfer zu Google ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). ")]),t("h3",[e._v("Empfänger:")]),t("p",[e._v("Der Aufruf von Scriptbibliotheken oder Schriftbibliotheken löst automatisch eine Verbindung zum Betreiber der Bibliothek aus. Dabei ist es theoretisch möglich – aktuell allerdings auch unklar ob und ggf. zu welchen Zwecken – dass der Betreiber in diesem Fall Google Daten erhebt.")]),t("h3",[e._v("Speicherdauer:")]),t("p",[e._v("Wir erheben keine personenbezogenen Daten, durch die Einbindung von Google Webfonts.")]),e._m(7),t("h3",[e._v("Drittlandtransfer:")]),e._m(8),t("h3",[e._v("Bereitstellung vorgeschrieben oder erforderlich:")]),t("p",[e._v("Die Bereitstellung der personenbezogenen Daten ist weder gesetzlich, noch vertraglich vorgeschrieben. Allerdings kann ggfs. die korrekte Darstellung der Inhalte durch Standardschriften nicht möglich sein.")]),t("h3",[e._v("Widerruf der Einwilligung:")]),t("p",[e._v("Zur Darstellung der Inhalte wird regelmäßig die Programmiersprache JavaScript verwendet. Sie können der Datenverarbeitung daher widersprechen, indem Sie die Ausführung von JavaScript in Ihrem Browser deaktivieren oder einen JavaScript-Blocker installieren. Bitte beachten Sie, dass es hierdurch zu Funktionseinschränkungen auf der Website kommen kann.")]),t("p"),t("h2",[e._v("SSL-Verschlüsselung")]),t("p",[e._v("Um die Sicherheit Ihrer Daten bei der Übertragung zu schützen, verwenden wir dem aktuellen Stand der Technik entsprechende Verschlüsselungsverfahren (z. B. SSL) über HTTPS.")]),t("p"),t("h2",[e._v("Änderung unserer Datenschutzbestimmungen")]),t("p",[e._v("Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.")]),t("h2",[e._v("Fragen an den Datenschutzbeauftragten")]),t("p",[e._v("Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail oder wenden Sie sich direkt an die für den Datenschutz verantwortliche Person in unserer Organisation:")]),t("p"),e._m(9)])},X=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("Patrick Schult "),t("br"),e._v("Fronstr. 3 "),t("br"),e._v("41569 Rommerskirchen")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ul",[t("li",[e._v("Auskunft über Ihre bei uns gespeicherten Daten und deren Verarbeitung (Art. 15 DSGVO),")]),t("li",[e._v("Berichtigung unrichtiger personenbezogener Daten (Art. 16 DSGVO),")]),t("li",[e._v("Löschung Ihrer bei uns gespeicherten Daten (Art. 17 DSGVO),")]),t("li",[e._v("Einschränkung der Datenverarbeitung, sofern wir Ihre Daten aufgrund gesetzlicher Pflichten noch nicht löschen dürfen (Art. 18 DSGVO),")]),t("li",[e._v("Widerspruch gegen die Verarbeitung Ihrer Daten bei uns (Art. 21 DSGVO) und")]),t("li",[e._v("Datenübertragbarkeit, sofern Sie in die Datenverarbeitung eingewilligt haben oder einen Vertrag mit uns abgeschlossen haben (Art. 20 DSGVO).")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("Eine Liste der Aufsichtsbehörden (für den nichtöffentlichen Bereich) mit Anschrift finden Sie unter: "),t("a",{attrs:{href:"https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html",target:"_blank",rel:"nofollow noopener"}},[e._v("https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html")]),e._v(".")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("Google verarbeitet Ihre Daten in den USA und hat sich dem EU_US Privacy Shield unterworfen "),t("a",{attrs:{href:"https://www.privacyshield.gov/EU-US-Framework"}},[e._v("https://www.privacyshield.gov/EU-US-Framework")]),e._v(". ")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website vollumfänglich werden nutzen können. Sie können darüber hinaus die Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung der Webseite bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem sie das unter dem folgenden Link verfügbare Browser-Plugin herunterladen und installieren: "),t("a",{attrs:{href:"http://tools.google.com/dlpage/gaoptout?hl=de"}},[e._v("Browser Add On zur Deaktivierung von Google Analytics")]),e._v(".")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("Zusätzlich oder als Alternative zum Browser-Add-On können Sie das Tracking durch Google Analytics auf unseren Seiten unterbinden, indem Sie "),t("a",{attrs:{title:"Google Analytics Opt-Out-Cookie setzen",onClick:"gaOptout();alert('Google Analytics wurde deaktiviert');",href:"#"}},[e._v("diesen Link anklicken")]),e._v(". Dabei wird ein Opt-out-Cookie auf Ihrem Gerät installiert. Damit wird die Erfassung durch Google Analytics für diese Website und für diesen Browser zukünftig verhindert, so lange das Cookie in Ihrem Browser installiert bleibt.")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("Die Datenschutzrichtlinie des Bibliothekbetreibers Google finden Sie hier: "),t("a",{attrs:{href:"https://www.google.com/policies/privacy/"}},[e._v("https://www.google.com/policies/privacy/")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("Weitere Informationen zu Google Web Fonts finden Sie unter "),t("a",{attrs:{href:"https://developers.google.com/fonts/faq"}},[e._v("https://developers.google.com/fonts/faq")]),e._v(" und in der Datenschutzerklärung von Google: "),t("a",{attrs:{href:"https://www.google.com/policies/privacy/"}},[e._v("https://www.google.com/policies/privacy/")]),e._v(".")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("Google verarbeitet Ihre Daten in den USA und hat sich dem EU_US Privacy Shield unterworfen "),t("a",{attrs:{href:"https://www.privacyshield.gov/EU-US-Framework"}},[e._v("https://www.privacyshield.gov/EU-US-Framework")]),e._v(".")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[t("em",[e._v("Die Datenschutzerklärung wurde mithilfe der activeMind AG erstellt, den Experten für "),t("a",{attrs:{href:"https://www.activemind.de/datenschutz/datenschutzbeauftragter/",target:"_blank",rel:"noopener"}},[e._v("externe Datenschutzbeauftragte")]),e._v(".")])])}],ee={name:"PrivacyPolicy",data:function(){return{trackingState:!0}},methods:{toggleTracking:function(){this.trackingState?(this.trackingState=!1,this.$ga.disable(),alert("Tracking disabled")):(this.trackingState=!0,this.$ga.enable(),alert("Tracking enabled"))}}},ne=ee,te=(t("2493"),Object(c["a"])(ne,Y,X,!1,null,"6c7d629e",null)),re=te.exports,ie=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"impressum"},[t("p",[e._v("Angaben gemäß § 5 TMG")]),e._m(0),e._m(1),e._m(2),e._m(3),t("p",[e._v(" Klicken Sie "),t("a",{attrs:{href:"#"},on:{click:e.toggleTracking}},[e._v("Hier")]),e._v(", um das Tracking durch Google Analytics zu "),e.trackingState?t("span",[e._v("deaktivieren.")]):t("span",[e._v("aktivieren.")])]),t("p",[e._v("Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Inc. (''Google''). Google Analytics verwendet sog. ''Cookies'', Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglicht. Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser Website (einschließlich Ihrer IP-Adresse) wird an einen Server von Google in den USA übertragen und dort gespeichert. Google wird diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten für die Websitebetreiber zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen zu erbringen. Auch wird Google diese Informationen gegebenenfalls an Dritte übertragen, sofern dies gesetzlich vorgeschrieben oder soweit Dritte diese Daten im Auftrag von Google verarbeiten. Google wird in keinem Fall Ihre IP-Adresse mit anderen Daten der Google in Verbindung bringen. Sie können die Installation der Cookies durch eine entsprechende Einstellung Ihrer Browser Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website voll umfänglich nutzen können. Durch die Nutzung dieser Website erklären Sie sich mit der Bearbeitung der über Sie erhobenen Daten durch Google in der zuvor beschriebenen Art und Weise und zu dem zuvor benannten Zweck einverstanden.")]),t("br"),e._v(" Website Impressum erstellt durch "),t("a",{attrs:{href:"https://www.impressum-generator.de",target:"_blank"}},[e._v("impressum-generator.de")]),e._v(" von der "),t("a",{attrs:{href:"https://www.kanzlei-hasselbach.de/"}},[e._v("Kanzlei Hasselbach")])])},ae=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("Patrick Schult "),t("br"),e._v(" Fronstr. 3"),t("br"),e._v(" 41569 Rommerskirchen "),t("br")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[t("strong",[e._v("Vertreten durch: ")]),t("br"),e._v(" Patrick Schult"),t("br")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[t("strong",[e._v("Kontakt:")]),e._v(" "),t("br"),e._v(" Telefon: 02183-3474855"),t("br"),e._v(" E-Mail: "),t("a",{attrs:{href:"mailto:streemlead@gmail.com"}},[e._v("streemlead@gmail.com")]),t("br")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[t("strong",[e._v("Haftungsausschluss: ")]),t("br"),t("br"),t("strong",[e._v("Haftung für Inhalte")]),t("br"),t("br"),e._v(" Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen."),t("br"),t("br"),t("strong",[e._v("Haftung für Links")]),t("br"),t("br"),e._v(" Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen."),t("br"),t("br"),t("strong",[e._v("Urheberrecht")]),t("br"),t("br"),e._v(" Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen."),t("br"),t("br"),t("strong",[e._v("Datenschutz")]),t("br"),t("br"),e._v(" Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben. "),t("br"),e._v(" Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich. "),t("br"),e._v(" Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor."),t("br"),t("br"),t("br"),t("strong",[e._v("Google Analytics")]),t("br"),t("br")])}],se={name:"Impressum",data:function(){return{trackingState:!0}},methods:{toggleTracking:function(){this.trackingState?(this.trackingState=!1,this.$ga.disable(),alert("Tracking disabled")):(this.trackingState=!0,this.$ga.enable(),alert("Tracking enabled"))}}},oe=se,le=(t("eddb"),Object(c["a"])(oe,ie,ae,!1,null,"323a0c32",null)),de=le.exports,ue={name:"ContactView",props:{},data:function(){return{background_image:"https://streemlead.com/cdn/wordflow/old-letters-blurred.png"}},components:{PrivacyPolicy:re,Impressum:de}},ce=ue,he=(t("4e9c"),Object(c["a"])(ce,q,Q,!1,null,"5057b736",null)),ge=he.exports;r["default"].use(p["a"]);var me=[{path:"/",name:"Home",component:$},{path:"/page",name:"Page",component:N},{path:"/contact",name:"Contact",component:ge}],fe=new p["a"]({scrollBehavior:function(){return{x:0,y:0}},mode:"history",base:"/HJ-Gedichte/",routes:me}),be=fe,ve=(t("3357"),t("f5af")),pe=t.n(ve),we=(t("e829"),t("77ed"),t("678e"),t("f0eb")),ke=[{id:0,title:"Reisen",date:"18.12.2018",author:"Hans Josef Rommerskirchen",background:"https://streemlead.com/cdn/wordflow/travel-1.jpg",tags:["Reisen","Paris","London","Madrid","New York","schöne Länder","um die ganze Welt"],text:"Mit der liebsten würde ich gerne,\nReisen in die schönsten Länder,\nschweifen in die weite ferne,\nnach Paris,London Madrid,\nund nach New York reiste ich mit,\nwürde reisen mit ihr um die ganze Welt,\nhätte sie dazu das nötige Geld."},{id:1,title:"Er ist endlich da...",date:"06.01.2018",author:"Hans Josef Rommerskirchen",background:"https://streemlead.com/cdn/wordflow/rote-mohnblumen-1.jpg",tags:["Er ist endlich da","Blumen","Frühling","Sonne","Vöglein","Vögel","Schmetterling","Entenpaar","Blütenmeer","schönster Tag"],text:"Sieh nur wie schön die Blumen blühen,\nsieh der Sonne erste strahlen,\nsieh auf der Wiese satt und grün,\nzwei Vöglein sich im Grase aalen.\n      \nEin Schmetterling so herrlich bunt,\nvoll Freude durch die Lüfte flattert,\nso tut er seiner Freude kund,\nein Entenpaar gar fröhlich schnattert.\n      \nUnd ringsherum ein Blütenmeer,\nals ob der schönste Tag heut wär,\nes singen die Vögel, von fern und nah,\nder Frühling, der Frühling er ist endlich da."},{id:2,title:"Kindergeburtstag",date:"30.12.2017",author:"Hans Josef Rommerskirchen",background:"https://streemlead.com/cdn/wordflow/kindergeburtstag-1.jpg",tags:["Kindergeburtstag","Geburtstag","Satansbraten","Freundschaft","Vögel","Vöglein"],text:"Von weitem hört man es schon klingen,\ndie Vöglein den Bäumen es singen,\nalle Leute weit und breit,\nwissen sicher, das du ab heut.\n    \nEin Jahr wieder älter bist,\nund darum, weil dies so ist.\nKamen alle die dich gern,\nob von nahem oder fern.\n    \nDeine Freunde, die Verwandten,\nOpa, Oma, Onkel, Tanten,\nalle die versammelt hier,\num zu gratulieren Dir.\n    \nZum Geburtstagsfeste,\nalles gute nur das beste\nund wünschen dir zum Tage heut,\nalles gute und viel freut.\n    \nWillst wissen du wer dies dir schrieb?\nAber nicht verraten,\nPapa und Mama die haben dich lieb,\ndu kleiner Satansbraten."},{id:3,title:"Der Winter kommt",date:"30.12.2017",author:"Hans Josef Rommerskirchen",background:"https://streemlead.com/cdn/wordflow/winter-1.jpg",tags:["Der Winter kommt","Kalt","Schnee","Freundschaft","Hirsch","Schneeballschlacht"],text:"Hui es pfeift der Wind nun kalt,\nauf der Flur und auch im Wald.\nDie Felder all mit Schnee bedeckt,\nkein Grashalm mehr sein Köpfchen reckt.\n    \nAlle Bäume Schnee behangen,\nes den Kindern Freude macht,\nlustig ist n'e Schneeballschlacht,\nund die Vögel die hier sangen.\n    \nSind nach Süden auch schon fort,\nhier ein Hirsch und dort ein Reh,\nauch ein Häschen hier und dort,\nhoppelt durch den tiefen Schnee.\n    \nWeiße Landschaft schöne Welt,\nunter'm weiten Himmelszelt\nEs lässt sich nicht lange bitten,\nder Winter kommt mit Riesenschritten."},{id:4,title:"Spiegelbild",date:"08.06.2017",author:"Hans Josef Rommerskirchen",background:"https://streemlead.com/cdn/wordflow/badezimmer-1.jpg",tags:["Spiegelbild","Humor","dicker Bauch","Alt","Altern"],text:"Ach wie schaute ich verdutzt,\nals ich die Zähne mir geputzt,\nsah mein eigenes Spiegelbild,\ndie Frisur sie hing ganz wild.\nErste falten im Gesicht,\nund die Haare werden licht,\nda bemerkte ich dann auch,\ndick und dicker wird der Bauch.\nDoch lass ich dieses außer acht,\nso ist mein Körper eine Pracht."},{id:5,title:"Zum Burzeltag",date:"03.06.2017",author:"Hans Josef Rommerskirchen",background:"https://streemlead.com/cdn/wordflow/geburtstag-1.jpg",tags:["Zum Burzeltag","Geburtstag","Sonnenschein","Glück"],text:"Zum Burzeltag zum Burzeltag.\nmöcht ich dir gratulieren,\ndir sagen das ich dich sehr mag,\nund mit dir Jubilieren.\nUnd außerdem da wünsch ich dir,\nmag das Glück stets mit dir sein,\nund eines noch ab heut und hier,\nein Leben voller Sonnenschein."},{id:6,title:"Solltest du...",date:"09.11.2015",author:"Hans Josef Rommerskirchen",background:"https://streemlead.com/cdn/wordflow/freundschaft-1.jpg",tags:["Solltest du","Freundschaft","Freunde","Einsam","Allein"],text:"Solltest du einst in fernen Jahren,\nsitzen und traurig sein,\nmag dir schlimmes widerfahren,\nfühlst dich einsam und allein.\n    \nDann denke stets daran,\ndas wir beide freunde sind\negal was kommt, ob heute oder irgendwann,\nvertrauen können wir uns blind.\n    \nSolltest weinen du des Nachts ins Kissen,\nso solltest du doch wissen.\nLies diese Zeilen mit bedacht,\nbin da für dich bei Tag und Nacht."},{id:7,title:"Du mein Kind",date:"26.10.2015",author:"Hans Josef Rommerskirchen",background:"https://streemlead.com/cdn/wordflow/familie-1.jpg",tags:["Du mein Kind","Familie","Kind","Sonnenschein","Eltern"],text:"Du mein Kind hör mir mal zu,\nwir beide du und ich und ich und du.\nOb wir uns beide nah ob fern,\ndu bist für mich der hellste Stern,\nmöge es zwischen uns im Leben,\nniemals böse Worte geben.\nDu bist mein licht in Dunkelheit,\ndenn du bist mein Sonnenschein,\nheute und für alle zeit,\nund so wird es immer sein.\nOffen steht, stets für dich meine Tür,\ndas ich Dich habe!\nIch danke Gott dafür."},{id:8,title:"Gestern war...",date:"22.10.2015",author:"Hans Josef Rommerskirchen",background:"https://streemlead.com/cdn/wordflow/old-books-2.jpg",tags:["Humor","Frühling","Sommer","Herbst","Suppe"],text:"Gestern war der Tag vor heute,\nheute ist der Tag nach gestern,\nes gibt viele dumme Leute,\nund ich, ich hab vier Schwestern.\n    \nDie Nachtigall singt schöne Lieder,\nder Kakadu ist weiß,\nim Frühling blüht der schönste Flieder,\nim Sommer wird es heiß.\n    \nIm Herbst da fallen alle blätter,\nvom Baume meistens ab,\nund kalt wird meist das Wetter,\ndie Sonne macht oft schlapp.\n    \nDies alles nun es mag geschehen,\ndoch einmal davon abgesehen,\nmag heiß sein auch die Suppe,\ndies ist mir völlig schnuppe."},{id:9,title:"Zum Fünfzigsten",date:"19.10.2015",author:"Hans Josef Rommerskirchen",background:"https://streemlead.com/cdn/wordflow/smile-1.jpg",tags:["Geburtstag","Zum Fünfzigsten","Fünfzigsten","Glückwunsch"],text:"Wo die 4 einst hat gestanden,\nist nun eine 5 vorhanden,\naber mache dir nichts draus,\nhappy Birthday altes Haus."}],_e=ke,Se=t("0284"),ze=t.n(Se);r["default"].use(we["default"]),r["default"].config.productionTip=!1,r["default"].use(ze.a,{id:"UA-168087705-1",router:be}),new r["default"]({created:function(){pe.a.init()},data:function(){return{flowbook:_e}},router:be,render:function(e){return e(v)}}).$mount("#app")},"67b9":function(e,n,t){"use strict";var r=t("843c"),i=t.n(r);i.a},"6ef4":function(e,n,t){},"843c":function(e,n,t){},"85ec":function(e,n,t){},"8b0b":function(e,n,t){},"8bf6":function(e,n,t){"use strict";var r=t("4734"),i=t.n(r);i.a},9246:function(e,n,t){"use strict";var r=t("6ef4"),i=t.n(r);i.a},acb5:function(e,n,t){},d75b:function(e,n,t){},ed85:function(e,n,t){},eddb:function(e,n,t){"use strict";var r=t("f968"),i=t.n(r);i.a},f968:function(e,n,t){}});
//# sourceMappingURL=app.a6e8a8fc.js.map