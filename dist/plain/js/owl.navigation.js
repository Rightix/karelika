"use strict";!function(n){function e(t){this._core=t,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":n.proxy(function(t){t.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+n(t.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot")+"</div>")},this),"added.owl.carousel":n.proxy(function(t){t.namespace&&this._core.settings.dotsData&&this._templates.splice(t.position,0,this._templates.pop())},this),"remove.owl.carousel":n.proxy(function(t){t.namespace&&this._core.settings.dotsData&&this._templates.splice(t.position,1)},this),"changed.owl.carousel":n.proxy(function(t){t.namespace&&"position"==t.property.name&&this.draw()},this),"initialized.owl.carousel":n.proxy(function(t){t.namespace&&!this._initialized&&(this._core.trigger("initialize",null,"navigation"),this.initialize(),this.update(),this.draw(),this._initialized=!0,this._core.trigger("initialized",null,"navigation"))},this),"refreshed.owl.carousel":n.proxy(function(t){t.namespace&&this._initialized&&(this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation"))},this)},this._core.options=n.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers)}e.Defaults={nav:!1,navText:['<span aria-label="Previous">&#x2039;</span>','<span aria-label="Next">&#x203a;</span>'],navSpeed:!1,navElement:'button type="button" role="presentation"',navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},e.prototype.initialize=function(){var t,s=this._core.settings;for(t in this._controls.$relative=(s.navContainer?n(s.navContainer):n("<div>").addClass(s.navContainerClass).appendTo(this.$element)).addClass("disabled"),this._controls.$previous=n("<"+s.navElement+">").addClass(s.navClass[0]).html(s.navText[0]).prependTo(this._controls.$relative).on("click",n.proxy(function(t){this.prev(s.navSpeed)},this)),this._controls.$next=n("<"+s.navElement+">").addClass(s.navClass[1]).html(s.navText[1]).appendTo(this._controls.$relative).on("click",n.proxy(function(t){this.next(s.navSpeed)},this)),s.dotsData||(this._templates=[n('<button role="button">').addClass(s.dotClass).append(n("<span>")).prop("outerHTML")]),this._controls.$absolute=(s.dotsContainer?n(s.dotsContainer):n("<div>").addClass(s.dotsClass).appendTo(this.$element)).addClass("disabled"),this._controls.$absolute.on("click","button",n.proxy(function(t){var e=n(t.target).parent().is(this._controls.$absolute)?n(t.target).index():n(t.target).parent().index();t.preventDefault(),this.to(e,s.dotsSpeed)},this)),this._overrides)this._core[t]=n.proxy(this[t],this)},e.prototype.destroy=function(){var t,e,s,i,o;for(t in o=this._core.settings,this._handlers)this.$element.off(t,this._handlers[t]);for(e in this._controls)"$relative"===e&&o.navContainer?this._controls[e].html(""):this._controls[e].remove();for(i in this.overides)this._core[i]=this._overrides[i];for(s in Object.getOwnPropertyNames(this))"function"!=typeof this[s]&&(this[s]=null)},e.prototype.update=function(){var t,e,s=this._core.clones().length/2,i=s+this._core.items().length,o=this._core.maximum(!0),n=this._core.settings,a=n.center||n.autoWidth||n.dotsData?1:n.dotsEach||n.items;if("page"!==n.slideBy&&(n.slideBy=Math.min(n.slideBy,n.items)),n.dots||"page"==n.slideBy)for(this._pages=[],t=s,e=0;t<i;t++){if(a<=e||0===e){if(this._pages.push({start:Math.min(o,t-s),end:t-s+a-1}),Math.min(o,t-s)===o)break;e=0,0}e+=this._core.mergers(this._core.relative(t))}},e.prototype.draw=function(){var t,e=this._core.settings,s=this._core.items().length<=e.items,i=this._core.relative(this._core.current()),o=e.loop||e.rewind;this._controls.$relative.toggleClass("disabled",!e.nav||s),e.nav&&(this._controls.$previous.toggleClass("disabled",!o&&i<=this._core.minimum(!0)),this._controls.$next.toggleClass("disabled",!o&&i>=this._core.maximum(!0))),this._controls.$absolute.toggleClass("disabled",!e.dots||s),e.dots&&(t=this._pages.length-this._controls.$absolute.children().length,e.dotsData&&0!=t?this._controls.$absolute.html(this._templates.join("")):0<t?this._controls.$absolute.append(new Array(1+t).join(this._templates[0])):t<0&&this._controls.$absolute.children().slice(t).remove(),this._controls.$absolute.find(".active").removeClass("active"),this._controls.$absolute.children().eq(n.inArray(this.current(),this._pages)).addClass("active"))},e.prototype.onTrigger=function(t){var e=this._core.settings;t.page={index:n.inArray(this.current(),this._pages),count:this._pages.length,size:e&&(e.center||e.autoWidth||e.dotsData?1:e.dotsEach||e.items)}},e.prototype.current=function(){var s=this._core.relative(this._core.current());return n.grep(this._pages,n.proxy(function(t,e){return t.start<=s&&t.end>=s},this)).pop()},e.prototype.getPosition=function(t){var e,s,i=this._core.settings;return"page"==i.slideBy?(e=n.inArray(this.current(),this._pages),s=this._pages.length,t?++e:--e,e=this._pages[(e%s+s)%s].start):(e=this._core.relative(this._core.current()),s=this._core.items().length,t?e+=i.slideBy:e-=i.slideBy),e},e.prototype.next=function(t){n.proxy(this._overrides.to,this._core)(this.getPosition(!0),t)},e.prototype.prev=function(t){n.proxy(this._overrides.to,this._core)(this.getPosition(!1),t)},e.prototype.to=function(t,e,s){var i;!s&&this._pages.length?(i=this._pages.length,n.proxy(this._overrides.to,this._core)(this._pages[(t%i+i)%i].start,e)):n.proxy(this._overrides.to,this._core)(t,e)},n.fn.owlCarousel.Constructor.Plugins.Navigation=e}(window.Zepto||window.jQuery,(window,document));