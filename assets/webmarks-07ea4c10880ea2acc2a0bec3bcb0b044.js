"use strict";define("webmarks/app",["exports","ember","webmarks/resolver","ember-load-initializers","webmarks/config/environment"],function(e,t,n,o,a){var l=void 0;t.default.MODEL_FACTORY_INJECTIONS=!0,l=t.default.Application.extend({modulePrefix:a.default.modulePrefix,podModulePrefix:a.default.podModulePrefix,Resolver:n.default}),(0,o.default)(l,a.default.modulePrefix),e.default=l}),define("webmarks/components/bookmark-form/component",["exports","ember"],function(e,t){e.default=t.default.Component.extend({autofocusTitleField:function(){t.default.isEmpty(this.get("bookmark.title"))&&this.$("input#title").focus()}.on("didInsertElement"),autocompleteTags:function(){var e=this.get("availableTags"),n=function(e){return e.split(/,\s*/)},o=function(e){return n(e).pop()};this.$("input#tags").bind("keydown",function(e){e.keyCode===t.default.$.ui.keyCode.TAB&&t.default.$(this).data("uiAutocomplete").menu.active&&e.preventDefault()}).autocomplete({autoFocus:!0,minLength:0,position:{my:"left top",at:"left+110 bottom",collision:"none"},source:function(n,a){return a(t.default.$.ui.autocomplete.filter(e,o(n.term)))},focus:function(){return!1},select:function(e,t){var o=void 0;return o=n(this.value),o.pop(),o.push(t.item.value),o.push(""),this.value=o.join(", "),!1}})}.on("didInsertElement"),actions:{commit:function(){this.sendAction("commit")},cancel:function(){this.sendAction("cancel")}}})}),define("webmarks/components/bookmark-form/template",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"04VzOd3W",block:'{"statements":[["open-element","form",[]],["modifier",["action"],[["get",[null]],"commit"],[["on"],["submit"]]],["flush-element"],["text","\\n  "],["open-element","fieldset",[]],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","control-group"],["flush-element"],["text","\\n      "],["open-element","label",[]],["static-attr","for","title"],["flush-element"],["append",["helper",["t"],["bookmark.edit.form.title"],null],false],["close-element"],["text","\\n      "],["append",["helper",["input"],null,[["value","id","required"],[["get",["bookmark","title"]],"title","required"]]],false],["text","\\n    "],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","control-group"],["flush-element"],["text","\\n      "],["open-element","label",[]],["static-attr","for","url"],["flush-element"],["append",["helper",["t"],["bookmark.edit.form.url"],null],false],["close-element"],["text","\\n      "],["append",["helper",["input"],null,[["value","id","required"],[["get",["bookmark","url"]],"url","required"]]],false],["text","\\n    "],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","control-group"],["flush-element"],["text","\\n      "],["open-element","label",[]],["static-attr","for","description"],["flush-element"],["append",["helper",["t"],["bookmark.edit.form.description"],null],false],["close-element"],["text","\\n      "],["append",["helper",["input"],null,[["value","id"],[["get",["bookmark","description"]],"description"]]],false],["text","\\n    "],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","control-group"],["flush-element"],["text","\\n      "],["open-element","label",[]],["static-attr","for","tags"],["flush-element"],["append",["helper",["t"],["bookmark.edit.form.tags"],null],false],["close-element"],["text","\\n      "],["append",["helper",["input"],null,[["value","id"],[["get",["bookmark","tags"]],"tags"]]],false],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","controls"],["flush-element"],["text","\\n    "],["open-element","button",[]],["static-attr","type","submit"],["static-attr","class","button button-primary"],["flush-element"],["append",["helper",["t"],["bookmark.edit.form.save"],null],false],["close-element"],["text","\\n    "],["open-element","button",[]],["static-attr","class","button button-secondary"],["modifier",["action"],[["get",[null]],"cancel"]],["flush-element"],["append",["helper",["t"],["bookmark.edit.form.cancel"],null],false],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"webmarks/components/bookmark-form/template.hbs"}})}),define("webmarks/components/bookmark-search/component",["exports","ember"],function(e,t){e.default=t.default.Component.extend({tagName:"div",classNames:["search-input"],focusSearchField:function(){var e=this;document.invisible||t.default.run.scheduleOnce("afterRender",function(){e.$("input[type=text]")[0].focus()})},didInsertElement:function(){this._super.apply(this,arguments),this.focusSearchField(),this.set("visibilityHandler",this.focusSearchField.bind(this)),document.addEventListener("visibilitychange",this.get("visibilityHandler"),!1)},willDestroyElement:function(){this._super.apply(this,arguments),document.removeEventListener("visibilitychange",this.get("visibilityHandler"))}})}),define("webmarks/components/bookmark-search/template",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"Z/mH27LP",block:'{"statements":[["append",["helper",["input"],null,[["value","placeholder"],[["get",["filterText"]],["helper",["t"],["inputs.text_fields.search.placeholder"],null]]]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"webmarks/components/bookmark-search/template.hbs"}})}),define("webmarks/controllers/application",["exports","ember"],function(e,t){e.default=t.default.Controller.extend({storage:t.default.inject.service(),init:function(){this._super.apply(this,arguments),this.get("storage").on("disconnected",this.handleStorageDisconnect.bind(this))},handleStorageDisconnect:function(){this.get("storage").deleteTagListCache(),t.default.Logger.debug("RS disconnected, transition to welcome"),this.transitionToRoute("welcome")}})}),define("webmarks/controllers/bookmarks/edit",["exports","webmarks/controllers/bookmarks/new"],function(e,t){var n=t.default.extend();e.default=n}),define("webmarks/controllers/bookmarks/index",["exports","ember"],function(e,t){e.default=t.default.Controller.extend({storage:t.default.inject.service(),filterText:"",sortProperties:["createdAt:desc"],sortedBookmarks:t.default.computed.sort("model","sortProperties"),filteredContent:function(){var e=this.get("filterText").toLowerCase();return t.default.isEmpty(e)||e.length<3?this.get("sortedBookmarks"):this.get("sortedBookmarks").filter(function(n){return!t.default.isEmpty(n.description)&&-1!==n.description.toLowerCase().indexOf(e)||-1!==n.title.toLowerCase().indexOf(e)||-1!==n.url.toLowerCase().indexOf(e)||!t.default.isEmpty(n.tags)&&-1!==n.tags.indexOf(e)})}.property("filterText","sortedBookmarks"),actions:{remove:function(e){this.get("storage").removeBookmark(e.id).catch(function(e){alert("Something went wrong."),console.log("ERROR:"),console.log(e)})}}})}),define("webmarks/controllers/bookmarks/new",["exports","ember"],function(e,t){e.default=t.default.Controller.extend({storage:t.default.inject.service(),queryParams:["title","url"],title:null,url:null,bookmarkletUsed:!1,bookmarkletLink:t.default.computed(function(){return t.default.String.htmlSafe('javascript:void(location.href="'+window.location.origin+'/bookmarks/new/?url="+encodeURIComponent(location.href)+"&title="+encodeURIComponent(document.title))')}),actions:{commit:function(){var e=this;this.get("storage").storeBookmark(this.get("model.serialize")).then(function(){e.transitionToRoute("index")}).catch(function(e){alert("Something went wrong."),console.log("ERROR:"),console.log(e)})},cancel:function(){this.transitionToRoute("index")}}})}),define("webmarks/controllers/index",["exports","ember"],function(e,t){e.default=t.default.Controller.extend({})}),define("webmarks/controllers/welcome",["exports","ember"],function(e,t){e.default=t.default.Controller.extend({application:t.default.inject.controller(),storage:t.default.inject.service(),attemptedTransition:t.default.computed.alias("application.attemptedTransition"),init:function(){this._super.apply(this,arguments),this.get("storage").on("connected",this.handleStorageConnect.bind(this))},handleStorageConnect:function(){console.log("rs connected, transition to index"),t.default.isPresent(this.get("attemptedTransition"))?(this.get("attemptedTransition").retry(),this.set("attemptedTransition",null)):this.transitionToRoute("bookmarks.index")}})}),define("webmarks/helpers/app-version",["exports","ember","webmarks/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,n,o){function a(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return t.hideSha?l.match(o.versionRegExp)[0]:t.hideVersion?l.match(o.shaRegExp)[0]:l}e.appVersion=a;var l=n.default.APP.version;e.default=t.default.Helper.helper(a)}),define("webmarks/helpers/t",["exports","ember-i18n/helper"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("webmarks/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","webmarks/config/environment"],function(e,t,n){var o=n.default.APP,a=o.name,l=o.version;e.default={name:"App Version",initialize:(0,t.default)(a,l)}}),define("webmarks/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("webmarks/initializers/ember-i18n",["exports","ember-i18n/initializers/ember-i18n"],function(e,t){e.default=t.default}),define("webmarks/initializers/export-application-global",["exports","ember","webmarks/config/environment"],function(e,t,n){function o(){var e=arguments[1]||arguments[0];if(!1!==n.default.exportApplicationGlobal){var o;if("undefined"!=typeof window)o=window;else if("undefined"!=typeof global)o=global;else{if("undefined"==typeof self)return;o=self}var a,l=n.default.exportApplicationGlobal;a="string"==typeof l?l:t.default.String.classify(n.default.modulePrefix),o[a]||(o[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete o[a]}}))}}e.initialize=o,e.default={name:"export-application-global",initialize:o}}),define("webmarks/instance-initializers/ember-i18n",["exports","ember-i18n/instance-initializers/ember-i18n"],function(e,t){e.default=t.default}),define("webmarks/instance-initializers/i18n",["exports","ember"],function(e,t){function n(e){return(navigator.languages||[]).concat([navigator.language,navigator.userLanguage,"en"]).compact().find(function(t){return e.includes(t)||e.includes(t.split("-")[0])})}e.default={name:"i18n",initialize:function(e){var o=e.lookup("service:i18n"),a=n(o.get("locales"));o.set("locale",a),moment.locale(a),o.on("missing",function(e,n){t.default.Logger.warn("Missing translation: "+n)})}}}),define("webmarks/locales/de/config",["exports"],function(e){e.default={}}),define("webmarks/locales/de/translations",["exports"],function(e){e.default={welcome_page:{welcome_to_webmarks:"Willkommen bei Webmarks!",please_connect_your_remote_storage_first:"<p>Mit Webmarks kannst du Bookmarks in deinem eigenen Datenspeicher ablegen und synchronisieren.</p><p>Bitte verbinde nun deinen Datenspeicher (rechts oben).",upcoming_relase_note:"(Dies ist für die kommende Release-Version von Webmarks nicht erforderlich.)"},bookmark:{new:{header:"Bookmark hinzufügen",bookmarklet:{use_text:"Verwende das Lesezeichen",drag_text:"Ziehe den folgenden Link in deine Lesezeichen-Symbolleiste:",create_webmark:"Webmark erstellen"}},index:{updated:"aktualisiert",you_have_not_stored_any_bookmarks_yet:"Du hast noch keine Lesezeichen gespeichert.",add_the_first_one:"Füge das erste hinzu"},edit:{header:"Bookmark aktualisieren",form:{title:"Titel",url:"URL",description:"Beschreibung",tags:"Tags",save:"Speichern",cancel:"Abbrechen"}}},links:{add_new:"Neue hinzufügen"},inputs:{text_fields:{"search.placeholder":"Suche"}}}}),define("webmarks/locales/en/config",["exports"],function(e){e.default={}}),define("webmarks/locales/en/translations",["exports"],function(e){e.default={welcome_page:{welcome_to_webmarks:"Welcome to Webmarks!",please_connect_your_remote_storage_first:"<p>With Webmarks, you can save and synchronize bookmarks in a storage of your choice.</p><p>Please connect your remote storage first.</p>",upcoming_relase_note:"(This will not be necessary for the upcoming release version of Webmarks.)"},bookmark:{new:{header:"Add a new bookmark",bookmarklet:{use_text:"Use the bookmarklet",drag_text:"Drag this to your bookmarks toolbar:",create_webmark:"Create Webmark"}},index:{updated:"updated",you_have_not_stored_any_bookmarks_yet:"You haven&#39;t stored any bookmarks yet.",add_the_first_one:"Add the first one"},edit:{header:"Update bookmark",form:{title:"Title",url:"URL",description:"Description",tags:"Tags",save:"Save",cancel:"Cancel"}}},links:{add_new:"Add new"},inputs:{text_fields:{"search.placeholder":"Search"}}}}),define("webmarks/mixins/require-rs-connection",["exports","ember"],function(e,t){e.default=t.default.Mixin.create({storage:t.default.inject.service(),beforeModel:function(e){this._super.apply(this,arguments),this.get("storage.connected")||(this.controllerFor("application").set("attemptedTransition",e),this.transitionTo("welcome"))}})}),define("webmarks/models/bookmark",["exports","ember"],function(e,t){e.default=t.default.Object.extend({id:"",url:"",title:"",description:"",tags:[],createdAt:null,updatedAt:null,createdAtTimeAgo:function(){return moment(this.get("createdAt")).fromNow()}.property("createdAt"),updatedAtTimeAgo:function(){return moment(this.get("updatedAt")).fromNow()}.property("updatedAt"),domain:function(){var e=document.createElement("a");return e.href=this.get("url"),e.hostname}.property("url"),serialize:function(){var e=this.getProperties("url","title","description"),n=this.get("tags"),o=this.get("createdAt");return null!==o&&(e.createdAt=o),n&&n.length>0&&("string"==typeof n&&(n=n.split(",")),e.tags=n.map(t.default.$.trim).reject(function(e){return t.default.isEmpty(e)})),e}.property("url","title","description","tags","createdAt")})}),define("webmarks/resolver",["exports","ember-resolver"],function(e,t){e.default=t.default}),define("webmarks/router",["exports","ember","webmarks/config/environment"],function(e,t,n){var o=t.default.Router.extend({location:n.default.locationType,rootURL:n.default.rootURL});o.map(function(){this.route("welcome",{path:"/welcome"}),this.route("bookmarks",function(){this.route("new",{queryParams:["title","url"]}),this.route("edit",{path:"edit/:bookmark_id"})})}),e.default=o}),define("webmarks/routes/application",["exports","ember"],function(e,t){e.default=t.default.Route.extend({i18n:t.default.inject.service()})}),define("webmarks/routes/bookmarks/edit",["exports","ember","webmarks/models/bookmark","webmarks/mixins/require-rs-connection"],function(e,t,n,o){e.default=t.default.Route.extend(o.default,{storage:t.default.inject.service(),i18n:t.default.inject.service(),model:function(e){return this.get("storage").getBookmark(e.bookmark_id)},setupController:function(e,t){var o=this.get("storage").getTagListCache();e.set("availableTags",o),this._super(e,n.default.create(t))}})}),define("webmarks/routes/bookmarks/index",["exports","ember","webmarks/mixins/require-rs-connection"],function(e,t,n){e.default=t.default.Route.extend(n.default,{storage:t.default.inject.service(),i18n:t.default.inject.service(),model:function(){return this.get("storage").getBookmarks()}})}),define("webmarks/routes/bookmarks/new",["exports","ember","webmarks/models/bookmark","webmarks/mixins/require-rs-connection"],function(e,t,n,o){e.default=t.default.Route.extend(o.default,{storage:t.default.inject.service(),i18n:t.default.inject.service(),model:function(e){var t={};return e.title&&e.url&&(t.title=e.title,t.url=e.url),n.default.create(t)},setupController:function(e,t){t.title.length>0&&e.set("bookmarkletUsed",!0);var n=this.get("storage").getTagListCache();e.set("availableTags",n),this._super(e,t)},resetController:function(e){e.get("queryParams").forEach(function(t){e.set(t,null)})}})}),define("webmarks/routes/index",["exports","ember"],function(e,t){e.default=t.default.Route.extend({storage:t.default.inject.service(),redirect:function(){this.get("storage.connected")?this.transitionTo("bookmarks.index"):this.transitionTo("welcome")}})}),define("webmarks/routes/welcome",["exports","ember"],function(e,t){e.default=t.default.Route.extend({i18n:t.default.inject.service(),storage:t.default.inject.service(),beforeModel:function(){this.get("storage.connected")&&(console.log("ohai"),this.transitionTo("index"))}})}),define("webmarks/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("webmarks/services/i18n",["exports","ember-i18n/services/i18n"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("webmarks/services/storage",["exports","ember","webmarks/config/environment","webmarks/models/bookmark","npm:remotestoragejs","npm:remotestorage-widget","npm:remotestorage-module-bookmarks"],function(e,t,n,o,a,l,s){var r=t.default.RSVP.Promise,i=t.default.Service,c=t.default.Evented,m=t.default.computed,u=t.default.Logger,d=t.default.run,f=t.default.isPresent,p=t.default.isEmpty;e.default=i.extend(c,{remoteStorage:null,widget:null,connecting:!0,connected:m.alias("remoteStorage.connected"),archiveBookmarks:null,bookmarksLoaded:!1,tags:null,init:function(){this._super.apply(this,arguments),this.set("archiveBookmarks",[]),this.setupRemoteStorage(),this.setupConnectWidget(),this.setupEventHandlers()},getBookmarks:function(){var e=this;return new r(function(t,n){e.get("bookmarksLoaded")?t(e.get("archiveBookmarks")):e.loadBookmarks().then(function(e){t(e)}).catch(n)})},getBookmark:function(e){var t=this;return new r(function(n,o){t.get("bookmarksLoaded")?n(t.get("archiveBookmarks").findBy("id",e)):t.loadBookmarks().then(function(t){n(t.findBy("id",e))}).catch(o)})},fetchBookmarks:function(){var e=this.get("remoteStorage").bookmarks.archive;return new r(function(t){e.getAll().then(t)})},loadBookmarks:function(){var e=this;return this.fetchBookmarks().then(function(t){var n=e.get("archiveBookmarks");return t.forEach(function(e){var t=o.default.create({id:e.id,url:e.url,title:e.title,description:e.description,tags:e.tags,createdAt:e.createdAt}),a=n.findBy("id",t.id);a&&n.removeObject(a),n.pushObject(t)}),e.set("bookmarksLoaded",!0),e.createTagListCache(),e.setupChangeHandler(),n})},removeBookmark:function(e){var t=this,n=this.get("archiveBookmarks").findBy("id",e);return this.get("remoteStorage").bookmarks.archive.remove(e).then(function(){t.get("archiveBookmarks").removeObject(n)})},storeBookmark:function(e){var t=this;return this.get("remoteStorage").bookmarks.archive.store(e).then(function(e){var n=t.get("archiveBookmarks").findBy("id",e.id);n&&t.get("archiveBookmarks").removeObject(n);var a=o.default.create(e);t.get("archiveBookmarks").pushObject(a)})},setupRemoteStorage:function(){var e=new a.default({modules:[s.default.default]});this.set("remoteStorage",e),e.access.claim("bookmarks","rw"),e.caching.enable("/bookmarks/archive/"),e.setApiKeys({dropbox:n.default.dropboxAppKey,googledrive:n.default.gdriveClientId})},setupConnectWidget:function(){var e=new l.default(this.get("remoteStorage"),{domID:"remotestorage-connect",redirectUri:window.location.href});e.attach(),this.set("widget",e)},setupChangeHandler:function(){var e=this;this.get("remoteStorage").bookmarks.client.scope("archive/").on("change",function(t){d(function(){var n=e.get("archiveBookmarks");if(t.origin.match(/remote/)){var a=void 0;if(!t.oldValue&&t.newValue){a=o.default.create(t.newValue);var l=n.findBy("id",a.id);l&&(u.warn("Received change event for a new item that was already cached",l,t),n.removeObject(l)),n.pushObject(a)}if(t.oldValue&&!t.newValue&&(a=n.findBy("id",t.oldValue.id),n.removeObject(a)),t.oldValue&&t.newValue){a=o.default.create(t.newValue);var l=n.findBy("id",a.id);l&&n.removeObject(l),n.pushObject(a)}}})})},setupEventHandlers:function(){var e=this,t=this.get("remoteStorage");t.on("ready",function(){u.debug("rs.on ready")}),t.on("connected",function(){u.debug("rs.on connected"),e.set("connecting",!1),e.set("connected",!0),e.trigger("connected")}),t.on("not-connected",function(){u.debug("rs.on not-connected"),e.set("connecting",!1),e.set("connected",!1)}),t.on("disconnected",function(){u.debug("rs.on disconnected"),e.set("connecting",!1),e.set("connected",!1),e.trigger("disconnected"),e.set("archiveBookmarks",[])}),t.on("connecting",function(){u.debug("rs.on connecting"),e.set("connecting",!0),e.set("connected",!1)}),t.on("authing",function(){u.debug("rs.on authing"),e.set("connecting",!0),e.set("connected",!1)})},createTagListCache:function(){var e=this.get("archiveBookmarks").mapBy("tags").compact().reduce(function(e,t){return e.concat(t)},[""]).reject(function(e){return p(e)}).uniq().sort();u.debug("[storage] Writing tag list to localStorage",JSON.stringify(e));try{localStorage.setItem("webmarks:tags",e)}catch(e){u.warn("[storage] Error writing tag list to localStorage",e)}},getTagListCache:function(){var e=localStorage.getItem("webmarks:tags");return f(e)?e.split(","):(u.warn("[storage] Tag list from cache was empty"),[])},deleteTagListCache:function(){try{return localStorage.removeItem("webmarks:tags")}catch(e){return u.warn("[storage] Error deleting tag list from localStorage",e),!1}}})}),define("webmarks/templates/application",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"g2JSwSba",block:'{"statements":[["open-element","div",[]],["static-attr","class","container"],["flush-element"],["text","\\n  "],["open-element","aside",[]],["flush-element"],["text","\\n    "],["open-element","header",[]],["flush-element"],["text","\\n      "],["open-element","h1",[]],["flush-element"],["block",["link-to"],["index"],[["class"],["pure-menu-heading"]],1],["close-element"],["text","\\n    "],["close-element"],["text","\\n    "],["open-element","nav",[]],["static-attr","class","main"],["flush-element"],["text","\\n      "],["open-element","ul",[]],["flush-element"],["text","\\n        "],["open-element","li",[]],["flush-element"],["block",["link-to"],["bookmarks.new"],null,0],["close-element"],["text","\\n      "],["close-element"],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n  "],["open-element","main",[]],["flush-element"],["text","\\n    "],["append",["unknown",["outlet"]],false],["text","\\n  "],["close-element"],["text","\\n"],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["open-element","i",[]],["static-attr","class","icon-plus"],["flush-element"],["close-element"],["text"," "],["append",["helper",["t"],["links.add_new"],null],false]],"locals":[]},{"statements":[["open-element","img",[]],["static-attr","src","/img/icon-128-b620f7a5c6bf8098fe01f2363fc800e2.png"],["static-attr","alt","Webmarks"],["flush-element"],["close-element"]],"locals":[]}],"hasPartials":false}',meta:{moduleName:"webmarks/templates/application.hbs"}})}),define("webmarks/templates/bookmarks",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"a/Z76pGR",block:'{"statements":[["append",["unknown",["outlet"]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"webmarks/templates/bookmarks.hbs"}})}),define("webmarks/templates/bookmarks/edit",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"YsuhAU9h",block:'{"statements":[["open-element","section",[]],["static-attr","id","bookmark-edit"],["flush-element"],["text","\\n  "],["open-element","header",[]],["flush-element"],["text","\\n    "],["open-element","h2",[]],["flush-element"],["append",["helper",["t"],["bookmark.edit.header"],null],false],["close-element"],["text","\\n  "],["close-element"],["text","\\n\\n  "],["append",["helper",["bookmark-form"],null,[["bookmark","availableTags","commit","cancel"],[["get",["model"]],["get",["availableTags"]],["helper",["action"],[["get",[null]],"commit"],null],["helper",["action"],[["get",[null]],"cancel"],null]]]],false],["text","\\n"],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"webmarks/templates/bookmarks/edit.hbs"}})}),define("webmarks/templates/bookmarks/index",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"lT2kOvTq",block:'{"statements":[["open-element","section",[]],["static-attr","id","search"],["flush-element"],["text","\\n  "],["append",["helper",["bookmark-search"],null,[["filterText"],[["get",["filterText"]]]]],false],["text","\\n"],["close-element"],["text","\\n\\n"],["block",["if"],[["get",["model"]]],null,8,1]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["append",["helper",["t"],["bookmark.index.add_the_first_one"],null],false]],"locals":[]},{"statements":[["text","  "],["open-element","div",[]],["static-attr","class","no-bookmarks"],["flush-element"],["text","\\n    "],["open-element","p",[]],["flush-element"],["append",["helper",["t"],["bookmark.index.you_have_not_stored_any_bookmarks_yet"],null],false],["close-element"],["text","\\n    "],["open-element","p",[]],["flush-element"],["block",["link-to"],["bookmarks.new"],null,0],["close-element"],["text","\\n  "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["open-element","p",[]],["static-attr","class","description"],["flush-element"],["append",["unknown",["item","description"]],false],["close-element"]],"locals":[]},{"statements":[["open-element","i",[]],["static-attr","class","icon-pencil"],["flush-element"],["close-element"]],"locals":[]},{"statements":[["text","              "],["open-element","span",[]],["static-attr","class","tag"],["flush-element"],["append",["get",["tag"]],false],["close-element"],["text","\\n"]],"locals":["tag"]},{"statements":[["text","            ·\\n"],["block",["each"],[["get",["item","tags"]]],null,4]],"locals":[]},{"statements":[["text","            ("],["append",["helper",["t"],["bookmark.index.updated"],null],false],["text"," "],["open-element","span",[]],["static-attr","class","date"],["flush-element"],["append",["unknown",["item","updatedAtTimeAgo"]],false],["text",")"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","      "],["open-element","li",[]],["static-attr","class","bookmark"],["flush-element"],["text","\\n        "],["open-element","h4",[]],["static-attr","class","heading"],["flush-element"],["text","\\n          "],["open-element","a",[]],["dynamic-attr","href",["unknown",["item","url"]],null],["static-attr","target","_blank"],["flush-element"],["append",["unknown",["item","title"]],false],["close-element"],["text","\\n        "],["close-element"],["text","\\n        "],["open-element","p",[]],["static-attr","class","meta"],["flush-element"],["text","\\n          "],["open-element","span",[]],["static-attr","class","domain"],["flush-element"],["append",["unknown",["item","domain"]],false],["close-element"],["text","\\n          ·\\n          "],["open-element","span",[]],["static-attr","class","date"],["flush-element"],["append",["unknown",["item","createdAtTimeAgo"]],false],["close-element"],["text","\\n"],["block",["if"],[["get",["item","updatedAt"]]],null,6],["block",["if"],[["get",["item","tags"]]],null,5],["text","        "],["close-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","actions"],["flush-element"],["text","\\n          "],["block",["link-to"],["bookmarks.edit",["get",["item"]]],null,3],["text","\\n          "],["open-element","a",[]],["modifier",["action"],[["get",[null]],"remove",["get",["item"]]]],["flush-element"],["open-element","i",[]],["static-attr","class","icon-trash"],["flush-element"],["close-element"],["close-element"],["text","\\n        "],["close-element"],["text","\\n        "],["block",["if"],[["get",["item","description"]]],null,2],["text","\\n      "],["close-element"],["text","\\n"]],"locals":["item"]},{"statements":[["text","  "],["open-element","ul",[]],["static-attr","class","bookmark-list"],["flush-element"],["text","\\n"],["block",["each"],[["get",["filteredContent"]]],null,7],["text","  "],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',meta:{moduleName:"webmarks/templates/bookmarks/index.hbs"}})}),define("webmarks/templates/bookmarks/new",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"cDXtAKWP",block:'{"statements":[["open-element","section",[]],["static-attr","id","bookmark-new"],["flush-element"],["text","\\n  "],["open-element","header",[]],["flush-element"],["text","\\n    "],["open-element","h2",[]],["flush-element"],["append",["helper",["t"],["bookmark.new.header"],null],false],["close-element"],["text","\\n  "],["close-element"],["text","\\n\\n  "],["append",["helper",["bookmark-form"],null,[["bookmark","availableTags","commit","cancel"],[["get",["model"]],["get",["availableTags"]],["helper",["action"],[["get",[null]],"commit"],null],["helper",["action"],[["get",[null]],"cancel"],null]]]],false],["text","\\n"],["close-element"],["text","\\n\\n"],["block",["unless"],[["get",["bookmarkletUsed"]]],null,0]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["open-element","section",[]],["static-attr","id","bookmarklet"],["flush-element"],["text","\\n  "],["open-element","h3",[]],["flush-element"],["append",["helper",["t"],["bookmark.new.bookmarklet.use_text"],null],false],["close-element"],["text","\\n  "],["open-element","p",[]],["static-attr","class","hint"],["flush-element"],["append",["helper",["t"],["bookmark.new.bookmarklet.drag_text"],null],false],["close-element"],["text","\\n  "],["open-element","p",[]],["flush-element"],["open-element","a",[]],["dynamic-attr","href",["unknown",["bookmarkletLink"]],null],["static-attr","class","button"],["flush-element"],["append",["helper",["t"],["bookmark.new.bookmarklet.create_webmark"],null],false],["close-element"],["close-element"],["text","\\n"],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',meta:{moduleName:"webmarks/templates/bookmarks/new.hbs"}})}),define("webmarks/templates/loading",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"9B5CuYez",block:'{"statements":[["open-element","section",[]],["static-attr","id","loading"],["flush-element"],["text","\\n  "],["open-element","div",[]],["static-attr","class","loading-spinner"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","bounce1"],["flush-element"],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","bounce2"],["flush-element"],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","bounce3"],["flush-element"],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"webmarks/templates/loading.hbs"}})}),define("webmarks/templates/welcome",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"JJRoc77M",
block:'{"statements":[["open-element","section",[]],["static-attr","id","welcome"],["flush-element"],["text","\\n  "],["open-element","h2",[]],["flush-element"],["append",["helper",["t"],["welcome_page.welcome_to_webmarks"],null],false],["close-element"],["text","\\n  "],["append",["helper",["t"],["welcome_page.please_connect_your_remote_storage_first"],null],false],["text","\\n  "],["open-element","p",[]],["static-attr","class","hint"],["flush-element"],["text","\\n   "],["append",["helper",["t"],["welcome_page.upcoming_relase_note"],null],false],["text","\\n  "],["close-element"],["text","\\n"],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"webmarks/templates/welcome.hbs"}})}),define("webmarks/utils/i18n/compile-template",["exports","ember-i18n/utils/i18n/compile-template"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("webmarks/utils/i18n/missing-message",["exports","ember-i18n/utils/i18n/missing-message"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("webmarks/config/environment",["ember"],function(e){try{var t="webmarks/config/environment",n=document.querySelector('meta[name="'+t+'"]').getAttribute("content"),o=JSON.parse(unescape(n)),a={default:o};return Object.defineProperty(a,"__esModule",{value:!0}),a}catch(e){throw new Error('Could not read config from meta tag with name "'+t+'".')}}),runningTests||require("webmarks/app").default.create({name:"webmarks",version:"1.0.0-beta+34033878"});