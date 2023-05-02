/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/main.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/helpers.js":
/*!***************************!*\
  !*** ./src/js/helpers.js ***!
  \***************************/
/*! exports provided: lastPageYOffset, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lastPageYOffset", function() { return lastPageYOffset; });
var vars = {};
var lastPageYOffset = null;
vars.$document = $(document);
vars.$window = $(window);
vars.$body = $(document.body);
vars.$html = $(document.documentElement);
vars.$siteContainer = $('.site-container');
vars.$preloader = $('.preloader');
vars.$header = $('.header');
vars.isMobile = function () {
  return innerWidth <= 1023;
};
vars.isIE = function () {
  return vars.$html.hasClass('is-browser-ie');
};
vars.winWidth = window.innerWidth;
var debounced = [];
var cancelFunc = function cancelFunc(timeout) {
  return function () {
    clearTimeout(timeout);
  };
};
vars.debounce = function (fn, wait) {
  var d = debounced.find(function (_ref) {
    var funcString = _ref.funcString;
    return funcString === fn.toString();
  });
  if (d) {
    d.cancel();
  } else {
    d = {};
    debounced.push(d);
  }
  d.func = fn;
  d.funcString = fn.toString();
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }
  d.timeout = setTimeout.apply(void 0, [fn, wait].concat(args));
  d.cancel = cancelFunc(d.timeout);
};
vars.saveScrollPosition = function () {
  vars.$html.css('scroll-behavior', 'initial');
  lastPageYOffset = window.pageYOffset || document.documentElement.scrollTop;
};
vars.restoreScrollPosition = function () {
  if (lastPageYOffset !== null) {
    window.scrollTo(window.pageXOffset, lastPageYOffset);
    lastPageYOffset = null;
    vars.$html.css('scroll-behavior', '');
  }
};

// smooth scrolling
vars.scrollTo = function ($container) {
  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  vars.$html.css('scroll-behavior', 'initial');
  $('html, body').animate({
    scrollTop: "".concat($container.offset().top + offset)
  }, time);
  setTimeout(function () {
    vars.$html.css('scroll-behavior', '');
  }, time + 100);
};
var scrollDiv;
vars.getScrollbarWidth = function () {
  var width = window.innerWidth - vars.$html.clientWidth;
  if (width) {
    return width;
  }

  // Document doesn't have a scrollbar, possibly because there is not enough content so browser doesn't show it
  if (!scrollDiv) {
    scrollDiv = document.createElement('div');
    scrollDiv.style.cssText = 'width:100px;height:100px;overflow:scroll !important;position:absolute;top:-9999px';
    document.body.appendChild(scrollDiv);
  }
  return scrollDiv.offsetWidth - scrollDiv.clientWidth;
};
function hasHoverSupport() {
  var hoverSupport;
  if (vars.isIE && vars.getScrollbarWidth()) {
    // On touch devices scrollbar width is usually 0
    hoverSupport = true;
  } else if (vars.isMobile()) {
    hoverSupport = false;
  } else if (window.matchMedia('(any-hover: hover)').matches || window.matchMedia('(hover: hover)').matches) {
    hoverSupport = true;
  } else if (window.matchMedia('(hover: none)').matches) {
    hoverSupport = false;
  } else {
    hoverSupport = typeof vars.$html.ontouchstart === 'undefined';
  }
  return hoverSupport;
}
if (!hasHoverSupport()) {
  vars.$html.removeClass('has-hover').addClass('no-hover');
} else {
  vars.$html.removeClass('no-hover').addClass('has-hover');
}
function resize() {
  vars.debounce(function () {
    if (vars.winWidth !== window.innerWidth) {
      if (!hasHoverSupport()) {
        vars.$html.removeClass('has-hover').addClass('no-hover');
      } else {
        vars.$html.removeClass('no-hover').addClass('has-hover');
      }
      vars.winWidth = window.innerWidth;
    }
  }, 300);
}
vars.$window.on('resize', resize);
/* harmony default export */ __webpack_exports__["default"] = (vars);

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor */ "./src/js/vendor.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./src/js/helpers.js");
/* harmony import */ var sticky_kit_dist_sticky_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sticky-kit/dist/sticky-kit */ "./node_modules/sticky-kit/dist/sticky-kit.js");
/* harmony import */ var sticky_kit_dist_sticky_kit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sticky_kit_dist_sticky_kit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery-validation */ "./node_modules/jquery-validation/dist/jquery.validate.js");
/* harmony import */ var jquery_validation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery_validation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_jquery_validation_dist_additional_methods_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/jquery-validation/dist/additional-methods.js */ "./node_modules/jquery-validation/dist/additional-methods.js");
/* harmony import */ var _node_modules_jquery_validation_dist_additional_methods_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_jquery_validation_dist_additional_methods_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_jquery_validation_dist_localization_messages_ru_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../node_modules/jquery-validation/dist/localization/messages_ru.js */ "./node_modules/jquery-validation/dist/localization/messages_ru.js");
/* harmony import */ var _node_modules_jquery_validation_dist_localization_messages_ru_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_jquery_validation_dist_localization_messages_ru_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var inputmask_dist_jquery_inputmask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! inputmask/dist/jquery.inputmask */ "./node_modules/inputmask/dist/jquery.inputmask.js");
/* harmony import */ var inputmask_dist_jquery_inputmask__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(inputmask_dist_jquery_inputmask__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var select2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! select2 */ "./node_modules/select2/dist/js/select2.js");
/* harmony import */ var select2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(select2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var jquery_datetimepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jquery-datetimepicker */ "./node_modules/jquery-datetimepicker/build/jquery.datetimepicker.full.min.js");
/* harmony import */ var jquery_datetimepicker__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jquery_datetimepicker__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var _fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fancyapps/fancybox */ "./node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js");
/* harmony import */ var _fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var nanoscroller__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! nanoscroller */ "./node_modules/nanoscroller/bin/javascripts/jquery.nanoscroller.js");
/* harmony import */ var nanoscroller__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(nanoscroller__WEBPACK_IMPORTED_MODULE_11__);












swiper__WEBPACK_IMPORTED_MODULE_9__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_9__["Navigation"], swiper__WEBPACK_IMPORTED_MODULE_9__["Pagination"], swiper__WEBPACK_IMPORTED_MODULE_9__["EffectFade"]]);
var $document = $(document);
var $window = $(window);
var $html = $('html');
var $body = $('body');
$.datetimepicker.setLocale('ru');
$.validator.addMethod('regex', function (value, element, regexp) {
  if (regexp && regexp.constructor != RegExp) {
    regexp = new RegExp(regexp[0], regexp[1]);
  } else if (regexp.global) {
    regexp.lastIndex = 0;
  }
  return this.optional(element) || regexp.test(value);
}, 'Неверный формат');
var app = {
  global: {
    init: function init() {
      $('.js-goto').on('click', function (e) {
        var $target = $($(e.currentTarget).data('target') || $(e.currentTarget).attr('href'));
        if ($target.length) {
          e.preventDefault();
          window.scrollTo(0, $target.offset().top - 125);
        }
      });
      $document.on('click', '.js-toggle-class', function (e) {
        e.preventDefault();
        var options = $(e.currentTarget).data();
        switch (options.type) {
          case 'add':
            $html.addClass(options["class"]);
            break;
          case 'remove':
            $html.removeClass(options["class"]);
            break;
          case 'toggle':
            $html.toggleClass(options["class"]);
            break;
          default:
            $html.toggleClass(options["class"]);
            break;
        }
      });
      $('[data-fancybox]').fancybox({
        touch: false,
        autoFocus: false,
        backFocus: false
      });
      $('head').append("<style type=\"text/css\">\n\t\t\t\thtml {\n\t\t\t\t\t--compensate-scrollbar:".concat((window.innerWidth - document.documentElement.clientWidth) / -2, "px;\n\t\t\t\t}\n\t\t\t\t</style>"));
      $body.css({
        '--width': $window.outerWidth()
      });
      $window.on('resize', function () {
        $body.css({
          '--width': $window.outerWidth()
        });
      });
      app.anime.init();
      app.loadMore.init();
      if (app.getURLParam($('.header__location').data('param'))) {
        localStorage.confirmLocation = 'yes';
      }
      if (localStorage.confirmLocation !== 'yes') {
        setTimeout(function () {
          $html.addClass('is-location-confirm');
        }, 2000);
      }
      $('.header__location__confirm').on('click', function (e) {
        e.preventDefault();
        localStorage.confirmLocation = 'yes';
        $html.removeClass('is-location-confirm');
      });
      $('.js-show-hide').on('click', function (e) {
        var $this = $(e.currentTarget);
        var $target = $($this.data('target'));
        e.preventDefault();
        $this.toggleClass('is-active');
        if ($this.hasClass('is-active')) {
          $this.text($this.data('on'));
          $target.removeClass('is-hidden');
        } else {
          $this.text($this.data('off'));
          $target.addClass('is-hidden');
          if (_helpers__WEBPACK_IMPORTED_MODULE_1__["default"].isMobile()) {
            window.scrollTo(0, $this.offset().top - $window.outerHeight() / 2);
          }
        }
      });
      $document.on('click', '.js-set-value', function (e) {
        $("input[value=\"".concat($(e.currentTarget).data('value'), "\"]")).prop('checked', true);
      });
      app.analytics();
    }
  },
  getURLParam: function getURLParam(param, url) {
    if (url) {
      return new URL(url).searchParams.get(param);
    }
    return new URL(window.location.href).searchParams.get(param);
  },
  header: {
    init: function init($header) {
      $header.find('.header__search-open').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        $html.addClass('is-show-search');
        setTimeout(function () {
          $header.find('.header__search__field').trigger('focus');
        }, 400);
      });
      $document.on('click', function (e) {
        var $target = $(e.target);
        if (!$target.closest('.header__search').length) {
          $html.removeClass('is-show-search');
        }
      });
      $header.find('.header__burger').on('click', function () {
        $html.toggleClass('is-show-mobile-menu');
      });
      $window.on('scroll', function () {
        if ($window.scrollTop() > 0) {
          $header.addClass('is-fixed');
        } else {
          $header.removeClass('is-fixed');
        }
      });
    }
  },
  vw: function vw(px) {
    var base = 1440;
    var baseMobile = 375;
    var output = px;
    if ($window.outerWidth() < 1440) {
      output = px / base * $window.outerWidth();
    }
    if ($window.outerWidth() < 1024) {
      output = px / baseMobile * $window.outerWidth();
    }
    return output;
  },
  scriptLoading: function scriptLoading(src, callback) {
    var script = document.createElement('script');
    var loaded;
    script.setAttribute('src', src);
    if (callback) {
      script.onreadystatechange = script.onload = function () {
        if (!loaded) {
          callback();
        }
        loaded = true;
      };
    }
    document.getElementsByTagName('head')[0].appendChild(script);
  },
  intro: {
    init: function init($module) {
      var $video = $module.find('.intro__video');
      var video = $video.find('video')[0];
      if ($video.find('video').length) {
        video.addEventListener('playing', function () {
          $video.addClass('is-playing');
          $video.removeClass('is-paused');
          if (!$video.find('video').is('[autoplay]')) {
            $video.find('video').prop('controls', true);
          }
        });
        video.addEventListener('pause', function () {
          $video.addClass('is-paused');
        });
        video.addEventListener('ended', function () {
          $video.removeClass('is-playing');
          if (!$video.find('video').is('[autoplay]')) {
            var src = video.currentSrc;
            var poster = video.poster;
            video.src = '';
            video.src = src;
            video.poster = '';
            video.poster = poster;
            $video.find('video').prop('controls', false);
          }
        });
      }
      $module.find('.intro__video__play').on('click', function (e) {
        e.preventDefault();
        video.play();
      });
      $module.find('.intro__video__pause').on('click', function (e) {
        e.preventDefault();
        video.pause();
      });
    }
  },
  technologies: {
    init: function init($module) {
      new swiper__WEBPACK_IMPORTED_MODULE_9__["default"]($module.find('.swiper-container')[0], {
        slidesPerView: 'auto',
        spaceBetween: app.vw(24),
        pagination: {
          el: $module.find('.progress')[0],
          type: 'progressbar'
        }
      });
    }
  },
  seriesComfortGallery: {
    init: function init($module) {
      new swiper__WEBPACK_IMPORTED_MODULE_9__["default"]($module.find('.swiper-container')[0], {
        slidesPerView: 1,
        spaceBetween: app.vw(24),
        breakpoints: {
          1024: {
            slidesPerView: 'auto'
          }
        },
        pagination: {
          el: $module.find('.progress')[0],
          type: 'progressbar'
        }
      });
    }
  },
  equipment: {
    init: function init($module) {
      var $slides = $module.find('.swiper-slide');
      var $items = $module.find('.equipment__list__item');
      var slider = new swiper__WEBPACK_IMPORTED_MODULE_9__["default"]($module.find('.swiper-container')[0], {
        slidesPerView: 1,
        effect: 'fade',
        speed: 0
      });
      $items.hover(function (e) {
        var $this = $(e.currentTarget);
        var index = $this.closest('.equipment__list__col').index();
        var $active = $slides.filter('.swiper-slide-active');
        if ($slides.eq(index).hasClass('is-animate')) {
          $slides.eq(index).removeClass('is-animate');
        }
        setTimeout(function () {
          slider.slideTo(index, 0);
          $slides.removeClass('is-prev is-animate');
          $active.addClass('is-prev is-animate');
        }, 10);
      }, function () {});
      $window.on('load', function () {
        $module.find('.equipment__side__fixed').stick_in_parent({
          offset_top: 100
        });
      });
    }
  },
  catalog: {
    init: function init($module) {
      var $slides = $module.find('.swiper-slide');
      var slider = new swiper__WEBPACK_IMPORTED_MODULE_9__["default"]($module.find('.swiper-container')[0], {
        slidesPerView: 1,
        navigation: {
          prevEl: $module.find('.catalog__slider__prev')[0],
          nextEl: $module.find('.catalog__slider__next')[0]
        },
        pagination: {
          el: $module.find('.progress')[0],
          type: 'progressbar'
        },
        breakpoints: {
          1024: {
            slidesPerView: 3,
            allowTouchMove: $slides.length > 3
          }
        }
      });
      $window.on('scroll.catalog', function () {
        if ($window.outerWidth() > 1023 && $slides.length < 4) {
          $module.find('.progress').hide();
          $module.find('.catalog__slider__prev').hide();
          $module.find('.catalog__slider__next').hide();
        } else {
          $module.find('.progress').show();
          $module.find('.catalog__slider__prev').show();
          $module.find('.catalog__slider__next').show();
        }
      }).trigger('scroll.catalog');
    }
  },
  index: {
    init: function init($index) {
      var controller = new ScrollMagic.Controller({
        refreshInterval: 0
      });

      // app-subscribe

      $index.find('.app-subscribe__container').css({
        opacity: 0
      });
      new ScrollMagic.Scene({
        triggerElement: $index.find('.app-subscribe-trigger')[0],
        duration: window.outerHeight / 4 + 100,
        // offset: app.vh(540),
        triggerHook: 0.15
      }).setPin($index.find('.app-subscribe')[0]).addTo(controller);
      new ScrollMagic.Scene({
        triggerElement: $index.find('.app-subscribe-trigger')[0],
        duration: window.outerHeight / 2,
        offset: (window.outerHeight + window.outerHeight / 2) * -1,
        triggerHook: 0
      }).setTween(new TimelineMax().from($index.find('.app-subscribe__cloud')[0], 1, {
        autoAlpha: 0,
        ease: Linear.easeNone
      }, 0)).addTo(controller);
      new ScrollMagic.Scene({
        triggerElement: $index.find('.app-subscribe-trigger')[0],
        duration: window.outerHeight / 4,
        offset: window.outerHeight / 5 * -1,
        triggerHook: 0
      }).setTween(new TimelineMax().to($index.find('.app-subscribe__cloud')[0], 1, {
        width: $('.app-subscribe__logo__o svg').outerWidth(),
        height: $('.app-subscribe__logo__o svg').outerWidth(),
        borderRadius: 500,
        ease: Linear.easeNone
      }, 0)).addTo(controller).on('enter', function () {
        $index.find('.app-subscribe__container').css({
          opacity: ''
        });
      }).on('leave', function (event) {
        if (event.state === 'BEFORE') {
          $index.find('.app-subscribe__container').css({
            opacity: 0
          });
        }
      });
      new ScrollMagic.Scene({
        triggerElement: $index.find('.app-subscribe-trigger')[0],
        duration: 100,
        offset: window.outerHeight / 5 * -1 + window.outerHeight / 4,
        triggerHook: 0
      }).setTween(new TimelineMax().to($index.find('.app-subscribe__cloud')[0], 1, {
        autoAlpha: 0,
        ease: Linear.easeNone
      }, 0)).addTo(controller);

      // comfort app

      var needIndex = 0;
      var slider = {
        canvas: $index.find('.comfort-app__progress')[0],
        ctx: null,
        imageFrom: 0,
        imageTo: 141,
        imageLoaded: 0,
        images: [],
        width: 500,
        height: 500,
        canvasVisible: false,
        setupImages: function setupImages() {
          var path = slider.canvas.dataset.path;
          for (var i = slider.imageTo; i >= slider.imageFrom; i--) {
            var image = new Image();
            image.src = "".concat(path).concat(i, ".png");
            slider.images[slider.imageTo - i] = image;
            image.onload = function () {
              if (slider.imageLoaded === needIndex) {
                slider.drawBG(needIndex);
              }
              slider.imageLoaded++;
            };
          }
        },
        drawBG: function drawBG(index) {
          if (index > slider.imageTo) {
            index = slider.imageTo;
          }
          slider.ctx.clearRect(0, 0, slider.canvas.width, slider.canvas.height);
          slider.ctx.drawImage(slider.images[index], 0, 0, slider.canvas.width, slider.canvas.height);
        },
        init: function init() {
          slider.ctx = slider.canvas.getContext('2d');
          slider.canvas.width = slider.width;
          slider.canvas.height = slider.height;
          slider.setupImages();
        }
      };
      slider.init();
      var comfortAppScrollTextOffset = $index.find('.comfort-app__scroll-text__text').outerWidth();
      if (!_helpers__WEBPACK_IMPORTED_MODULE_1__["default"].isMobile()) {
        new ScrollMagic.Scene({
          triggerElement: $index.find('.comfort-app-trigger')[0],
          duration: window.outerHeight * 4,
          // offset: app.vh(540),
          triggerHook: 0
        }).setPin($index.find('.comfort-app')[0]).addTo(controller).on('progress', function (event) {
          var progress = event.progress * 2;
          if (progress >= 1) {
            progress = 1;
          }
          needIndex = parseInt(141 * progress, 10);
          slider.drawBG(needIndex);
        }).on('enter', function () {
          $index.find('.comfort-app-wrapper').css({
            visibility: ''
          });
        }).on('leave', function (event) {
          if (event.state === 'AFTER') {
            $index.find('.comfort-app-wrapper').css({
              visibility: 'hidden'
            });
          }
        });
      } else {
        new ScrollMagic.Scene({
          triggerElement: $index.find('.comfort-app-trigger')[0],
          duration: window.outerHeight * 2,
          // offset: app.vh(540),
          triggerHook: 0
        }).setPin($index.find('.comfort-app')[0]).addTo(controller).on('progress', function (event) {
          var progress = event.progress * 2;
          if (progress >= 1) {
            progress = 1;
          }
          needIndex = parseInt(141 * progress, 10);
          slider.drawBG(needIndex);
        });
      }
      new ScrollMagic.Scene({
        triggerElement: $index.find('.comfort-app-trigger')[0],
        duration: window.outerHeight * 2,
        offset: window.outerHeight / -2,
        triggerHook: 0
      }).setTween(new TimelineMax().to($index.find('.comfort-app__scroll-text__text')[0], 1, {
        x: comfortAppScrollTextOffset * -1,
        ease: Linear.easeNone
      }, 0)).addTo(controller);
      if (!_helpers__WEBPACK_IMPORTED_MODULE_1__["default"].isMobile()) {
        new ScrollMagic.Scene({
          triggerElement: $index.find('.comfort-app-trigger')[0],
          duration: window.outerHeight / 5,
          offset: window.outerHeight * 1.8,
          triggerHook: 0
        }).setTween(new TimelineMax().to($index.find('.comfort-app__scroll-text__text')[0], 1, {
          autoAlpha: 0,
          ease: Linear.easeNone
        }, 0)).addTo(controller);
        new ScrollMagic.Scene({
          triggerElement: $index.find('.comfort-app-trigger')[0],
          duration: window.outerHeight / 2,
          offset: window.outerHeight * 2,
          triggerHook: 0
        }).setTween(new TimelineMax().from($index.find('.comfort-app__image__1')[0], 1, {
          x: $index.find('.comfort-app__image__1').offset().left - $window.outerWidth() / 2 - $index.find('.comfort-app__image__1').outerWidth() / 2,
          ease: Linear.easeNone
        }, 0).from($index.find('.comfort-app__content')[0], 1, {
          autoAlpha: 0,
          ease: Linear.easeNone
        }, 0).from($index.find('.comfort-app__image__2')[0], 1, {
          autoAlpha: 0,
          y: 50,
          ease: Linear.easeNone
        }, 0)).addTo(controller);
        new ScrollMagic.Scene({
          triggerElement: $index.find('.climate-online-trigger')[0],
          duration: window.outerHeight * (2 / 5),
          triggerHook: 0
        }).setTween(new TimelineMax().to($index.find('.comfort-app .container')[0], 1, {
          autoAlpha: 0,
          ease: Linear.easeNone
        }, 0).to($index.find('.comfort-app__image__2')[0], 1, {
          y: 50,
          ease: Linear.easeNone
        }, 0)).addTo(controller);
        new ScrollMagic.Scene({
          triggerElement: $index.find('.climate-online-trigger')[0],
          duration: window.outerHeight / 2,
          triggerHook: 0
        }).setTween(new TimelineMax().to($index.find('.comfort-app__bg')[0], 1, {
          width: $index.find('.climate-online__container').outerWidth(),
          height: $index.find('.climate-online__container').outerHeight(),
          ease: Linear.easeNone
        }, 0)).addTo(controller);
        new ScrollMagic.Scene({
          triggerElement: $index.find('.climate-online-trigger')[0],
          duration: window.outerHeight * (1 / 3),
          offset: window.outerHeight * (2 / 5),
          triggerHook: 0
        }).setTween(new TimelineMax().to($index.find('.comfort-app__bg')[0], 1, {
          autoAlpha: 0,
          ease: Linear.easeNone
        }, 0)).addTo(controller);
      } else {
        new ScrollMagic.Scene({
          triggerElement: $index.find('.comfort-app-trigger')[0],
          duration: window.outerHeight / 4,
          offset: window.outerHeight * 1.5,
          triggerHook: 0
        }).setTween(new TimelineMax().from($index.find('.comfort-app__content')[0], 1, {
          autoAlpha: 0,
          ease: Linear.easeNone
        }, 0)).addTo(controller);
      }

      // climate online

      if (!_helpers__WEBPACK_IMPORTED_MODULE_1__["default"].isMobile()) {
        new ScrollMagic.Scene({
          triggerElement: $index.find('.climate-online-trigger')[0],
          duration: window.outerHeight * 2.5,
          // offset: app.vh(540),
          triggerHook: 0
        }).setPin($index.find('.climate-online')[0]).addTo(controller);
        new ScrollMagic.Scene({
          triggerElement: $index.find('.climate-online-trigger')[0],
          duration: window.outerHeight * 0.25,
          offset: window.outerHeight * 1.5,
          triggerHook: 0
        }).setTween(new TimelineMax().to($index.find('.climate-online__conditioner__image')[0], 1, {
          scale: 1.2,
          autoAlpha: 0,
          ease: Linear.easeNone
        }, 0)).addTo(controller);
        new ScrollMagic.Scene({
          triggerElement: $index.find('.climate-online-trigger')[0],
          duration: window.outerHeight * 0.5,
          offset: window.outerHeight * 1.5,
          triggerHook: 0
        }).setTween(new TimelineMax().from($index.find('.climate-online__conditioner__pulse')[0], 1, {
          scale: 0.4,
          autoAlpha: 0,
          ease: Linear.easeNone
        }, 0)).addTo(controller);
      }
    }
  },
  pageCloud: {
    init: function init($module) {
      var controller = new ScrollMagic.Controller({
        refreshInterval: 0
      });
      new ScrollMagic.Scene({
        triggerElement: $module.find('.page-cloud__intro__trigger')[0],
        duration: window.outerHeight,
        offset: $module.find('.page-cloud__intro__trigger').offset().top * -1,
        triggerHook: 0
      }).setTween(new TimelineMax().to($module.find('.page-cloud__intro__image__scroll')[0], 1, {
        x: ($module.find('.page-cloud__intro__image__scroll').outerWidth() - $module.find('.page-cloud__intro__image').outerWidth()) * 1.5,
        ease: Linear.easeNone
      }, 0)).addTo(controller);
      $module.find('.page-cloud__mobile__tabs__list a').on('click', function (e) {
        var $this = $(e.currentTarget);
        e.preventDefault();
        $module.find('.page-cloud__mobile__tabs__list a').removeClass('is-active');
        $module.find('.page-cloud__mobile__tabs__item').removeClass('is-active');
        $this.addClass('is-active');
        $module.find(".page-cloud__mobile__tabs__item[data-tab=\"".concat($this.data('tab'), "\"]")).addClass('is-active');
      });
    }
  },
  anime: {
    init: function init() {
      $('.anime').each(function (index, item) {
        var $item = $(item);
        $item.on('inview', function (event, isInView) {
          if (isInView) {
            $item.addClass('animated');
            $item.off('inview');
          }
        });
      });
    }
  },
  slider: {
    init: function init($slider) {
      new swiper__WEBPACK_IMPORTED_MODULE_9__["default"]($slider.find('.swiper-container')[0], {
        slidesPerView: 1,
        pagination: {
          el: $slider.find('.progress')[0],
          type: 'progressbar'
        }
      });
    }
  },
  articles: {
    init: function init($slider) {
      new swiper__WEBPACK_IMPORTED_MODULE_9__["default"]($slider.find('.swiper-container')[0], {
        slidesPerView: 1,
        spaceBetween: app.vw(24),
        breakpoints: {
          1024: {
            slidesPerView: 3
          }
        },
        pagination: {
          el: $slider.find('.progress')[0],
          type: 'progressbar'
        }
      });
    }
  },
  accordion: {
    init: function init($module) {
      var $items = $module.find('.accordion__item');
      $module.find('.accordion__item__header').on('click', function (e) {
        var $this = $(e.currentTarget);
        var $item = $this.closest('.accordion__item');
        var $content = $item.find('.accordion__item__content');
        e.preventDefault();
        if ($item.hasClass('is-active')) {
          $item.removeClass('is-active');
          $content.slideUp(400);
        } else {
          var $activeItems = $items.filter('.is-active');
          $activeItems.removeClass('is-active');
          if (_helpers__WEBPACK_IMPORTED_MODULE_1__["default"].isMobile()) {
            $activeItems.find('.accordion__item__content').hide();
          } else {
            $activeItems.find('.accordion__item__content').slideUp(400);
          }
          $item.addClass('is-active');
          $content.slideDown(400, function () {
            $('html, body').animate({
              scrollTop: $this.offset().top - 100
            }, 100);
          });
        }
      });
    }
  },
  catalogItem: {
    init: function init($module) {
      if (!_helpers__WEBPACK_IMPORTED_MODULE_1__["default"].isMobile()) {
        var $imageItem = $module.find('.catalog__item__image__item');
        var slideTo = function slideTo(index) {
          $imageItem.removeClass('is-active');
          $module.find('.catalog__item__image__hover__item').removeClass('is-active');
          $imageItem.eq(index).addClass('is-active');
          $module.find('.catalog__item__image__hover__col').eq(index).find('.catalog__item__image__hover__item').addClass('is-active');
        };
        if ($imageItem.length > 1) {
          var slideToLast = false;
          $module.hover(function () {
            if (!slideToLast) {
              slideTo($imageItem.length - 1);
              slideToLast = true;
            }
          }, function () {});
          $module.find('.catalog__item__image__hover__item').hover(function (e) {
            slideTo($(e.currentTarget).closest('.catalog__item__image__hover__col').index());
          }, function () {});
        }
      }
    }
  },
  mask: {
    init: function init($mask) {
      $mask.inputmask($mask.data('mask').toString(), {
        showMaskOnHover: false,
        clearIncomplete: true
      });
    }
  },
  calendar: {
    init: function init($input) {
      $input.attr('type', 'text');
      $input.inputmask('99.99.9999', {
        showMaskOnHover: false,
        clearIncomplete: true
      });
      $input.datetimepicker({
        minDate: parseInt($input.data('limit'), 10) === -1 ? 0 : false,
        maxDate: parseInt($input.data('limit'), 10) === 1 ? 0 : false,
        timepicker: false,
        format: 'd.m.Y',
        scrollInput: false,
        dayOfWeekStart: 1
      });
      $input.on('change', function () {
        try {
          $input.valid();
        } catch (_unused) {}
      });
    }
  },
  select: {
    init: function init($select) {
      $select.find('select').select2({
        minimumResultsForSearch: $select.data('search') ? 5 : Infinity,
        dropdownParent: $select.data('type') === 'outside' ? $body : $select.find('.input__field'),
        language: {
          noResults: function noResults() {
            return 'Ничего не найдено';
          },
          searching: function searching() {
            return 'Поиск...';
          }
        }
      });
      $select.find('select').on('change', function () {
        try {
          $select.find('select').valid();
        } catch (_unused2) {}
      });
    }
  },
  selectLocation: {
    init: function init($select) {
      $select.find('select').select2({
        dropdownParent: $select.find('.input__field'),
        minimumInputLength: 3,
        language: {
          noResults: function noResults() {
            return 'Ничего не найдено';
          },
          inputTooShort: function inputTooShort(e) {
            return "\u041D\u0443\u0436\u043D\u043E \u0432\u0432\u0435\u0441\u0442\u0438 \u043C\u0438\u043D\u0438\u043C\u0443\u043C ".concat(e.minimum, " \u0431\u0443\u043A\u0432\u044B");
          },
          searching: function searching() {
            return 'Поиск...';
          }
        },
        ajax: {
          url: $select.data('ajax'),
          dataType: 'json'
        }
      });
      $select.find('select').on('change', function (e) {
        window.location.href = $(e.currentTarget).val();
      });
    }
  },
  multipleFile: {
    init: function init($multiple) {
      var $list = $multiple.find('.multiple-file__list');
      var $template = $multiple.find('.multiple-file__template');
      var max = parseInt($multiple.data('max'), 10);
      var addField = function addField() {
        if ($list.find('.multiple-file__item').length < max) {
          $list.prepend($template.html());
        }
      };
      $multiple.on('change', '.multiple-file__item__upload input', function (e) {
        var $this = $(e.currentTarget);
        var $item = $this.closest('.multiple-file__item');
        var $error = $item.find('.multiple-file__item__upload__error');
        var validate = $this.data('validate');
        $item.removeClass('is-error');
        if (e.target.files.length) {
          var sum = 0;
          for (var index = 0; index < e.target.files.length; index++) {
            sum += e.target.files[index].size;
          }
          if (sum <= validate.size * 1000000) {
            $item.find('.multiple-file__item__file__name').text(e.target.files[0].name);
            $item.addClass('is-active');
            addField();
          } else {
            $error.text(validate.messages.size);
            $item.addClass('is-error');
            $this.val('');
          }
        } else {
          $item.removeClass('is-active');
        }
      });
      $multiple.on('click', '.multiple-file__item__file__remove', function (e) {
        var count = $list.find('.multiple-file__item').length;
        var countActive = $list.find('.multiple-file__item.is-active').length;
        e.preventDefault();
        $(e.currentTarget).closest('.multiple-file__item').remove();
        if (countActive === max || count === 1) {
          addField();
        }
      });
      addField();
    }
  },
  form: {
    init: function init($form) {
      $form.find('.input__field__eye').on('click', function (e) {
        var $this = $(e.currentTarget);
        var $input = $this.closest('.input__field').find('input');
        e.preventDefault();
        if ($input.attr('type') === 'password') {
          $this.addClass('is-eye-view');
          $input.attr('type', 'text');
        } else {
          $this.removeClass('is-eye-view');
          $input.attr('type', 'password');
        }
      });
      var validator = $form.validate({
        lang: 'ru',
        rules: {},
        highlight: function highlight(element, errorClass, validClass) {
          if (element.type === 'radio' || element.type === 'checkbox') {
            this.findByName(element.name).addClass(errorClass).removeClass(validClass);
          } else {
            $(element).addClass(errorClass).removeClass(validClass);
          }
        },
        unhighlight: function unhighlight(element, errorClass, validClass) {
          if (element.type === 'radio' || element.type === 'checkbox') {
            this.findByName(element.name).removeClass(errorClass).addClass(validClass);
          } else {
            $(element).removeClass(errorClass).addClass(validClass);
          }
        },
        submitHandler: function submitHandler(form) {
          if ($form.data('type') === 'submit') {
            form.submit();
            console.log($form.attr('event'));
            if (typeof dataLayer !== 'undefined' && $form.data('event')) {
              dataLayer.push({
                'event': $form.data('event'),
                'eventCategory': $form.data('event'),
                'eventAction': 'send'
              });
            }
          } else {
            var preparedData;
            var processData;
            var contentType;
            $form.removeClass('is-sended is-error');
            $form.find('.form__button .button').addClass('is-loading');
            console.log($form.attr('event'));
            $.ajax({
              type: $form.attr('method'),
              url: $form.attr('action'),
              data: preparedData ? preparedData : $form.serialize(),
              dataType: 'json',
              processData: processData,
              contentType: contentType,
              success: function success(result) {
                var event = $form.attr('event');
                eventMake($form.attr('event'));
                if (result.result === true) {
                  $form[0].reset();
                  $.fancybox.close();
                  if (typeof dataLayer !== 'undefined' && $form.data('event')) {
                    dataLayer.push({
                      'event': $form.data('event'),
                      'eventCategory': $form.data('event'),
                      'eventAction': 'send'
                    });
                  }
                }
                $.fancybox.open("<div class=\"modal modal--alert\">\n\t\t\t\t\t\t\t\t\t<div class=\"h3 form__title\">".concat(result.title, "</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form__text\">").concat(result.message, "</div>\n\t\t\t\t\t\t\t\t</div>"), {
                  touch: false,
                  autoFocus: false
                });
                $form.find('.form__button .button').removeClass('is-loading');
              }
            });
          }
        }
      });
      setTimeout(function () {
        $form.find('[data-validation]').each(function (index, item) {
          $(item).rules('add', $(item).data('validation'));
        });
      }, 1000);
    }
  },
  tab: {
    init: function init($tab) {
      var $tabLinks = $tab.find('> .tab-list > ul a');
      var $tabItems = $tab.find('> .tab__content > .tab__item');
      if ($tabLinks.length === 0) {
        $tabLinks = $tab.find('.tab-list > ul a');
        $tabItems = $tab.find('.tab__item');
      }
      if ($tab.data('type') === 'hash') {
        var $active = $tabLinks.filter("[data-tab=\"".concat(window.location.hash.replace('#', ''), "\"]"));
        if ($active.length) {
          $tabLinks.removeClass('is-active');
          $tabItems.removeClass('is-active');
          $active.addClass('is-active');
          $tabItems.filter("[data-tab=\"".concat($active.data('tab'), "\"]")).addClass('is-active');
        }
      }
      var $tabLinksActive = $tabLinks.filter('.is-active');
      $tabLinks.on('click', function (e) {
        var $this = $(e.currentTarget);
        var $target = $tabItems.filter("[data-tab=\"".concat($this.data('tab'), "\"]"));
        e.preventDefault();
        $tabLinks.removeClass('is-active');
        $tabItems.removeClass('is-active');
        $this.addClass('is-active');
        $target.addClass('is-active');
        if ($tab.data('type') === 'hash') {
          window.location.hash = $this.data('tab');
        }
        if (_helpers__WEBPACK_IMPORTED_MODULE_1__["default"].isMobile()) {
          $tab.find('.nano').nanoScroller();
          $tab.find('.tab-list ul').animate({
            scrollLeft: $this.offset().left - ($window.outerWidth() / 2 - $this.outerWidth() / 2) + $tab.find('.tab-list ul').scrollLeft()
          }, 400);
        }
      });
      if (_helpers__WEBPACK_IMPORTED_MODULE_1__["default"].isMobile()) {
        $tab.find('.tab-list ul').animate({
          scrollLeft: $tabLinksActive.offset().left - ($window.outerWidth() / 2 - $tabLinksActive.outerWidth() / 2)
        }, 400);
      }
      if ($tabLinks.filter('.is-active').length === 0) {
        $tabLinks.eq(0).trigger('click');
      }
    }
  },
  contactsMap: {
    init: function init($map) {
      var options = $map.data();
      app.scriptLoading('//api-maps.yandex.ru/2.1/?lang=ru_RU', function () {
        ymaps.ready(function () {
          var map = new ymaps.Map($map[0], {
            center: [options.lat, options.lng],
            zoom: options.zoom,
            controls: ['zoomControl']
          }, {});
          map.geoObjects.add(new ymaps.Placemark([options.lat, options.lng], {}, {
            iconLayout: 'default#image',
            iconImageHref: options.icon,
            iconImageSize: [40, 60],
            iconImageOffset: [-20, -60]
          }));
        });
      });
    }
  },
  productSlider: {
    init: function init($slider) {
      var slider = new swiper__WEBPACK_IMPORTED_MODULE_9__["default"]($slider.find('.swiper-container')[0], {
        slidesPerView: 1,
        breakpoints: {
          1024: {
            slidesPerView: 'auto'
          }
        },
        pagination: {
          el: $slider.find('.progress')[0],
          type: 'progressbar'
        }
      });
    }
  },
  productMap: {
    init: function init($map) {
      var options = $map.data();
      app.scriptLoading('//api-maps.yandex.ru/2.1/?lang=ru_RU', function () {
        ymaps.ready(function () {
          var MyBalloonLayout = ymaps.templateLayoutFactory.createClass('<div class="popover top">' + '<div class="arrow"></div>' + '<div class="popover-inner">' + '$[[options.contentLayout observeSize minWidth=235 maxWidth=235 maxHeight=350]]' + '</div>' + '</div>', {
            /**
             * Строит экземпляр макета на основе шаблона и добавляет его в родительский HTML-элемент.
             * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#build
             * @function
             * @name build
             */
            build: function build() {
              this.constructor.superclass.build.call(this);
              this._$element = $('.popover', this.getParentElement());
              this.applyElementOffset();
              this._$element.find('.close').on('click', $.proxy(this.onCloseClick, this));
            },
            /**
             * Удаляет содержимое макета из DOM.
             * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#clear
             * @function
             * @name clear
             */
            clear: function clear() {
              this._$element.find('.close').off('click');
              this.constructor.superclass.clear.call(this);
            },
            /**
             * Метод будет вызван системой шаблонов АПИ при изменении размеров вложенного макета.
             * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
             * @function
             * @name onSublayoutSizeChange
             */
            onSublayoutSizeChange: function onSublayoutSizeChange() {
              MyBalloonLayout.superclass.onSublayoutSizeChange.apply(this, arguments);
              if (!this._isElement(this._$element)) {
                return;
              }
              this.applyElementOffset();
              this.events.fire('shapechange');
            },
            /**
             * Сдвигаем балун, чтобы "хвостик" указывал на точку привязки.
             * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
             * @function
             * @name applyElementOffset
             */
            applyElementOffset: function applyElementOffset() {
              this._$element.css({
                left: -(this._$element[0].offsetWidth / 2),
                top: -(this._$element[0].offsetHeight + this._$element.find('.arrow')[0].offsetHeight)
              });
            },
            /**
             * Закрывает балун при клике на крестик, кидая событие "userclose" на макете.
             * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
             * @function
             * @name onCloseClick
             */
            onCloseClick: function onCloseClick(e) {
              e.preventDefault();
              this.events.fire('userclose');
            },
            /**
             * Используется для автопозиционирования (balloonAutoPan).
             * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/ILayout.xml#getClientBounds
             * @function
             * @name getClientBounds
             * @returns {Number[][]} Координаты левого верхнего и правого нижнего углов шаблона относительно точки привязки.
             */
            getShape: function getShape() {
              if (!this._isElement(this._$element)) {
                return MyBalloonLayout.superclass.getShape.call(this);
              }
              var position = this._$element.position();
              return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([[position.left, position.top], [position.left + this._$element[0].offsetWidth, position.top + this._$element[0].offsetHeight + this._$element.find('.arrow')[0].offsetHeight]]));
            },
            /**
             * Проверяем наличие элемента (в ИЕ и Опере его еще может не быть).
             * @function
             * @private
             * @name _isElement
             * @param {jQuery} [element] Элемент.
             * @returns {Boolean} Флаг наличия.
             */
            _isElement: function _isElement(element) {
              return element && element[0] && element.find('.arrow')[0];
            }
          });
          var MyBalloonContentLayout = ymaps.templateLayoutFactory.createClass("<div class=\"map-pane\">\n\t\t\t\t\t\t\t<h3 class=\"popover-title map-pane__name\">$[properties.balloonHeader]</h3>\n\t\t\t\t\t\t\t<div class=\"popover-content\">$[properties.balloonContent]</div>\n\t\t\t\t\t\t</div>");
          var map = new ymaps.Map($map[0], {
            center: [options.lat, options.lng],
            zoom: 13,
            controls: ['zoomControl']
          }, {});
          options.points.forEach(function (point) {
            map.geoObjects.add(new ymaps.Placemark([point.lat, point.lng], {
              balloonHeader: point.name,
              balloonContent: "\n\t\t\t\t\t\t\t\t<ul class=\"map-pane__list\">\n\t\t\t\t\t\t\t\t\t<li>".concat(point.address, "</li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"tel:").concat(point.tel, "\">").concat(point.tel, "</a></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"https://").concat(point.site, "\" target=\"_blank\">").concat(point.site, "</a></li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t")
            }, {
              balloonShadow: false,
              balloonLayout: MyBalloonLayout,
              balloonContentLayout: MyBalloonContentLayout,
              balloonPanelMaxMapArea: 0,
              hideIconOnBalloonOpen: false,
              iconLayout: 'default#image',
              iconImageHref: options.icon,
              iconImageSize: [22, 32],
              iconImageOffset: [-11, -32]
            }));
          });
          if (map.geoObjects.getBounds()) {
            map.setBounds(map.geoObjects.getBounds(), {
              zoomMargin: 30
            });
          }
          $map.data('map', map);
        });
      });
    }
  },
  offices: {
    init: function init($module) {
      $module.find('.page-about__offices__toggle a').on('click', function (e) {
        e.preventDefault();
        $module.toggleClass('is-show-list');
        if ($module.hasClass('is-show-list')) {
          $module.find('.page-about__offices__toggle a').text($module.find('.page-about__offices__map').data('label'));
        } else {
          $module.find('.page-about__offices__toggle a').text($module.find('.page-about__offices__list').data('label'));
        }
      });
    }
  },
  animateNumber: function animateNumber(obj, initVal, lastVal, duration) {
    var startTime = null;
    var currentTime = Date.now();
    var step = function step(currentTime) {
      if (!startTime) {
        startTime = currentTime;
      }
      var progress = Math.min((currentTime - startTime) / duration, 1);
      obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        window.cancelAnimationFrame(window.requestAnimationFrame(step));
      }
    };
    window.requestAnimationFrame(step);
  },
  aboutHistory: {
    init: function init($module) {
      var controller = new ScrollMagic.Controller({
        refreshInterval: 0
      });
      var $year = $module.find('.page-about__history__year');
      var $yearValue = $year.find('.js-year');
      $window.on('load', function () {
        setTimeout(function () {
          if (!_helpers__WEBPACK_IMPORTED_MODULE_1__["default"].isMobile()) {
            $module.find('.page-about__history__item-scroll').each(function (index, item) {
              var $scroll = $(item);
              var $trigger = $scroll.find('.page-about__history__item-scroll__trigger');
              var $item = $scroll.find('.page-about__history__item');
              new ScrollMagic.Scene({
                triggerElement: $trigger[0],
                duration: window.outerHeight,
                triggerHook: 0.35
              }).setPin($item[0]).addTo(controller).on('leave', function (event) {
                if (event.scrollDirection === 'REVERSE') {
                  if (index !== 0) {
                    app.animateNumber($yearValue[0], parseInt($yearValue.text(), 10), parseInt($module.find('.page-about__history__item-scroll').eq(index - 1).find('.page-about__history__item').data('year'), 10), 500);
                  }
                } else if (event.scrollDirection === 'FORWARD') {
                  if ($module.find('.page-about__history__item-scroll').eq(index + 1).length) {
                    app.animateNumber($yearValue[0], parseInt($yearValue.text(), 10), parseInt($module.find('.page-about__history__item-scroll').eq(index + 1).find('.page-about__history__item').data('year'), 10), 500);
                  }
                }
              });
              if (index !== 0) {
                new ScrollMagic.Scene({
                  triggerElement: $trigger[0],
                  duration: window.outerHeight * 0.075,
                  triggerHook: 0.35
                }).setTween(new TimelineMax().from($item[0], 1, {
                  autoAlpha: 0,
                  ease: Linear.easeNone
                }, 0)).addTo(controller);
              }
              if (index !== $module.find('.page-about__history__item-scroll').length - 1) {
                new ScrollMagic.Scene({
                  triggerElement: $trigger[0],
                  duration: window.outerHeight * 0.075,
                  offset: window.outerHeight - window.outerHeight * 0.25,
                  triggerHook: 0.35
                }).setTween(new TimelineMax().to($item[0], 1, {
                  autoAlpha: 0,
                  ease: Linear.easeNone
                }, 0)).addTo(controller);
              }
            });
            new ScrollMagic.Scene({
              triggerElement: $module.find('.page-about__history__item-scroll:first-child .page-about__history__item-scroll__trigger')[0],
              duration: $module.find('.page-about__history__list').outerHeight() - $module.find('.page-about__history__year-scroll').outerHeight(),
              triggerHook: 0.35
            }).setPin($module.find('.page-about__history__year-scroll')[0]).addTo(controller);
          } else {
            var found = $module.find('.page-about__history__item-scroll').eq(0).find('.page-about__history__item').data('year');
            $window.on('scroll', function () {
              $module.find('.page-about__history__item-scroll').each(function (index, item) {
                var $item = $(item);
                if ($yearValue.offset().top >= $item.offset().top) {
                  found = $item.find('.page-about__history__item').data('year');
                  if (index === $module.find('.page-about__history__item-scroll').length - 1) {
                    app.animateNumber($yearValue[0], parseInt($yearValue.text(), 10), parseInt($item.find('.page-about__history__item').data('year'), 10), 500);
                  }
                } else {
                  app.animateNumber($yearValue[0], parseInt($yearValue.text(), 10), parseInt(found, 10), 500);
                  return false;
                }
              });
            });
            new ScrollMagic.Scene({
              triggerElement: $module.find('.page-about__history__item-scroll:first-child .page-about__history__item-scroll__trigger')[0],
              duration: $module.find('.page-about__history__list').outerHeight() - $year.outerHeight(),
              triggerHook: 0.35
            }).setPin($module.find('.page-about__history__year-scroll')[0]).addTo(controller);
          }
        }, 250);
      });
    }
  },
  table: {
    init: function init($module) {
      var $tr = $module.find('tr');
      $tr.hover(function (e) {
        var $thisTr = $(e.currentTarget);
        var $thisTd = $thisTr.find('td');
        var rowspan = parseInt($thisTd.attr('rowspan'), 10);
        for (var i = $thisTr.index() - 1; i >= 0; i--) {
          var $findTd = $tr.eq(i).find('td[rowspan]');
          var findRowspan = parseInt($findTd.attr('rowspan'), 10);
          if ($findTd.length && i + findRowspan > $thisTr.index()) {
            $thisTr = $findTd.closest('tr');
            rowspan = findRowspan;
            break;
          }
        }
        if (rowspan > 1) {
          for (var _i = $thisTr.index(); _i < $thisTr.index() + rowspan; _i++) {
            $tr.eq(_i).addClass('is-hover');
          }
        }
      }, function () {
        $tr.removeClass('is-hover');
      });
    }
  },
  nano: {
    init: function init($nano) {
      $nano.find('.nano').nanoScroller();
    }
  },
  dealers: {
    init: function init($module) {
      var $map = $module.find('.page-dealers__map');
      var options = $map.data();
      var $filter = $module.find('.page-dealers__filter');
      var $mapList = $module.find('.page-dealers__map-list');
      var $list = $module.find('.page-dealers__list__row');
      var map = null;
      var markers = [];
      var setMarker = function setMarker(marker) {
        var active = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        if (marker.options.pin) {
          marker.options.set('iconImageHref', marker.options.pin.image);
          marker.options.set('iconImageSize', [marker.options.pin.w, marker.options.pin.h]);
          marker.options.set('iconImageOffset', [-marker.options.pin.w / 2, -marker.options.pin.h]);
        } else if (active) {
          marker.options.set('iconImageHref', options.pinActive);
          marker.options.set('iconImageSize', [64, 64]);
          marker.options.set('iconImageOffset', [-32, -32]);
        } else {
          marker.options.set('iconImageHref', options.pin);
          marker.options.set('iconImageSize', [32, 32]);
          marker.options.set('iconImageOffset', [-16, -16]);
        }
      };
      var setMarkers = function setMarkers() {
        map.geoObjects.removeAll();
        markers = [];
        $module.find('.page-dealers__map-item').each(function (index, item) {
          var $item = $(item);

          // console.log($item.data('type') === 'main' ? options.pinMain : options.pin)

          var marker = new ymaps.Placemark([parseFloat($item.data('lat')), parseFloat($item.data('lng'))], {}, {
            iconLayout: 'default#image',
            iconImageHref: options.pin,
            iconImageSize: [32, 32],
            iconImageOffset: [-16, -16]
          });
          if ($item.data('type') === 'main') {
            marker.options.pin = {
              image: options.pinMain,
              w: 120,
              h: 57
            };
            marker.options.set('iconImageHref', marker.options.pin.image);
            marker.options.set('iconImageSize', [marker.options.pin.w, marker.options.pin.h]);
            marker.options.set('iconImageOffset', [-marker.options.pin.w / 2, -marker.options.pin.h]);
          }
          markers.push(marker);
          marker.events.add('click', function () {
            markers.forEach(function (markerItem) {
              if ($item.data('type') !== 'main') {
                setMarker(markerItem);
              }
            });
            $module.find('.page-dealers__map-item').removeClass('is-active');
            $item.addClass('is-active');
            if ($item.data('type') !== 'main') {
              setMarker(marker, true);
            }
          });
          marker.events.add('mouseenter', function () {
            if ($item.data('type') !== 'main') {
              setMarker(marker, true);
            }
          });
          marker.events.add('mouseleave', function () {
            if (!$item.hasClass('is-active') && $item.data('type') !== 'main') {
              setMarker(marker);
            }
          });
          map.geoObjects.add(marker);
        });
        if (map.geoObjects.getBounds()) {
          map.setBounds(map.geoObjects.getBounds());
        }
        if (map.getZoom() > 16) {
          map.setZoom(16);
        }
      };
      app.scriptLoading('//api-maps.yandex.ru/2.1/?lang=ru_RU', function () {
        ymaps.ready(function () {
          map = new ymaps.Map($map[0], {
            center: [55.755829, 37.617627],
            zoom: 6,
            controls: ['zoomControl']
          }, {});
          setMarkers();
          $map.data('map', map);
        });
      });
      $module.on('click', '.page-dealers__map-item__close', function (e) {
        e.preventDefault();
        $(e.currentTarget).closest('.page-dealers__map-item').removeClass('is-active');
        markers.forEach(function (markerItem) {
          setMarker(markerItem);
        });
      });
      $module.find('.page-dealers__filter__type a').on('click', function (e) {
        var $this = $(e.currentTarget);
        e.preventDefault();
        $this.toggleClass('is-active');
        $module.find('.page-dealers__map-item').removeClass('is-active');
        markers.forEach(function (markerItem) {
          setMarker(markerItem);
        });
        if ($this.hasClass('is-active')) {
          $module.addClass('is-show-list');
          $this.text($this.data('on'));
        } else {
          $module.removeClass('is-show-list');
          $this.text($this.data('off'));
          setTimeout(function () {
            if (map.geoObjects.getBounds()) {
              map.setBounds(map.geoObjects.getBounds());
            }
          }, 250);
        }
      });
      $module.find('.page-dealers__filter__tab').on('click', function (e) {
        var $this = $(e.currentTarget);
        e.preventDefault();
        if (!$this.hasClass('is-active')) {
          var $input = $this.find('input');
          $module.find('.page-dealers__filter__tab').removeClass('is-active');
          $this.addClass('is-active');
          $input.prop('checked', true).trigger('change');
          if ($input.val() === 'regions') {
            $module.find('.page-dealers__filter__item--city').addClass('is-hidden');
          } else {
            $module.find('.page-dealers__filter__item--city').removeClass('is-hidden');
          }
        }
      });
      $filter.on('change', function () {
        if (!$module.hasClass('is-loading')) {
          $module.addClass('is-loading');
          $.ajax({
            type: $filter.attr('method'),
            url: $filter.attr('action'),
            data: $filter.serialize(),
            dataType: 'json',
            success: function success(response) {
              $mapList.html(response['map-list']);
              $list.html(response.list);
              if (map) {
                setMarkers();
              }
              $module.removeClass('is-loading');
            }
          });
        }
      }).trigger('change');
    }
  },
  becomeDealer: {
    init: function init($module) {
      var form = new swiper__WEBPACK_IMPORTED_MODULE_9__["default"]($module.find('.page-become-dealer__form .swiper-container')[0], {
        allowTouchMove: false,
        autoHeight: true,
        breakpoints: {
          1024: {
            autoHeight: false
          }
        }
      });
      if (!form.el) {
        return;
      }
      form.on('slideChange', function () {
        if (form.activeIndex > 0) {
          $module.find('.page-become-dealer__order__text__hidden').removeClass('is-hidden');
        }
      });
      $module.find('.page-become-dealer__form__item__next').on('click', function (e) {
        var $required = $(e.currentTarget).closest('.page-become-dealer__form__item').find('[required]');
        e.preventDefault();
        if ($required.length === 0 || $(e.currentTarget).closest('.page-become-dealer__form__item').find('[required]').valid()) {
          form.slideNext();
        }
      });
      $module.find('.page-become-dealer__form__item__back').on('click', function (e) {
        e.preventDefault();
        form.slidePrev();
      });
      $window.on('load', function () {
        form.update();
      });
    }
  },
  loadMore: {
    init: function init() {
      if (window.loadMore === 'inited') {
        return false;
      }
      $('[data-list]').each(function (index, list) {
        var $list = $(list);
        if ($list.data('ajax')) {
          $.ajax({
            type: 'get',
            url: $list.data('ajax'),
            success: function success(response) {
              $list.append(response);
            }
          });
        }
      });
      $document.on('click', '.js-load-more a', function (e) {
        var $this = $(e.currentTarget);
        var $parent = $this.closest('.js-load-more');
        var $list = $("[data-list=\"".concat($parent.data('target'), "\"]"));
        var offsetTop = $parent.offset().top;
        e.preventDefault();
        console.log($list.data('ajax'));
        if (!$this.hasClass('is-loading')) {
          $this.addClass('is-loading');
          $.ajax({
            type: 'get',
            url: $list.data('ajax'),
            data: {
              page: $this.data('page')
            },
            success: function success(response) {
              $parent.remove();
              $list.append(response);
              window.scrollTo(0, offsetTop - 125);
            }
          });
        }
      });
      window.loadMore = 'inited';
    }
  },
  pageSearch: {
    init: function init($module) {
      var $field = $module.find('.page-search__field');
      var $fieldInput = $module.find('.page-search__field input');
      $fieldInput.on('keyup change', function () {
        if ($fieldInput.val().trim()) {
          $field.addClass('is-filled');
        } else {
          $field.removeClass('is-filled');
        }
      });
      $module.find('.page-search__field__reset').on('click', function (e) {
        e.preventDefault();
        $fieldInput.val('').trigger('change');
      });
    }
  },
  up: {
    init: function init($up) {
      $window.on('scroll.up', function () {
        if ($window.scrollTop() > $window.outerHeight()) {
          $up.addClass('is-show');
        } else {
          $up.removeClass('is-show');
        }
      }).trigger('scroll.up');
      $up.on('click', function (e) {
        e.preventDefault();
        window.scrollTo(0, 0);
      });
    }
  },
  analytics: function analytics() {
    $document.on('click', 'a[href^="tel:"]', function (e) {
      dataLayer.push({
        'event': 'Phone',
        'eventCategory': 'Phone',
        'eventAction': 'click',
        'eventLabel': $(e.currentTarget).text().trim()
      });
    });
    $document.on('click', 'a[href^="mailto:"]', function (e) {
      dataLayer.push({
        'event': 'Email',
        'eventCategory': 'Email',
        'eventAction': 'click',
        'eventLabel': $(e.currentTarget).text().trim()
      });
    });
    $document.on('click', '.page-partners__button a', function (e) {
      dataLayer.push({
        'event': 'Registration',
        'eventCategory': 'Registration',
        'eventAction': 'click',
        'eventLabel': $(e.currentTarget).attr('href')
      });
    });
  }
};
app.global.init();
window.initApps = function () {
  $('[data-app]').each(function (index, item) {
    var $this = $(item);
    var split = $this.data('app').split('||');
    $.each(split, function (appIndex, appName) {
      var appNameCamel = false;
      if (appName.indexOf('-') !== -1) {
        appNameCamel = appName.replace(/(\x2D|[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF])((?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]))/g, function (m) {
          return m.toUpperCase();
        }).replace(/\x2D/g, '');
      }
      if (app[appName] && $this.data("".concat(appName, "-init")) !== true) {
        app[appName].init($this);
        $this.data("".concat(appName, "-init"), true);
      } else if (app[appNameCamel] && $this.data("".concat(appName, "-init")) !== true) {
        app[appNameCamel].init($this);
        $this.data("".concat(appName, "-init"), true);
      }
    });
  });
};
initApps();

/***/ }),

/***/ "./src/js/vendor.js":
/*!**************************!*\
  !*** ./src/js/vendor.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ "./node_modules/@babel/polyfill/lib/index.js");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var url_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! url-polyfill */ "./node_modules/url-polyfill/url-polyfill.js");
/* harmony import */ var url_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(url_polyfill__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! svg4everybody */ "./node_modules/svg4everybody/dist/svg4everybody.js");
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(svg4everybody__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");





svg4everybody__WEBPACK_IMPORTED_MODULE_2___default()();
window.$ = jquery__WEBPACK_IMPORTED_MODULE_3___default.a;
window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_3___default.a;
__webpack_require__(/*! ninelines-ua-parser */ "./node_modules/ninelines-ua-parser/dist/ninelines-ua-parser.js");
__webpack_require__(/*! ./vendor/jquery.inview */ "./src/js/vendor/jquery.inview.js");
__webpack_require__(/*! ./vendor/scrollmagic */ "./src/js/vendor/scrollmagic.js");
__webpack_require__(/*! ./vendor/animation.gsap */ "./src/js/vendor/animation.gsap.js");

/***/ }),

/***/ "./src/js/vendor/animation.gsap.js":
/*!*****************************************!*\
  !*** ./src/js/vendor/animation.gsap.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);

/*!
 * ScrollMagic v2.0.6 (2018-10-08)
 * The javascript library for magical scroll interactions.
 * (c) 2018 Jan Paepke (@janpaepke)
 * Project Website: http://scrollmagic.io
 * 
 * @version 2.0.6
 * @license Dual licensed under MIT license and GPL.
 * @author Jan Paepke - e-mail@janpaepke.de
 *
 * @file ScrollMagic GSAP Animation Plugin.
 *
 * requires: GSAP ~1.14
 * Powered by the Greensock Animation Platform (GSAP): http://www.greensock.com/js
 * Greensock License info at http://www.greensock.com/licensing/
 */
/**
 * This plugin is meant to be used in conjunction with the Greensock Animation Plattform.  
 * It offers an easy API to trigger Tweens or synchronize them to the scrollbar movement.
 *
 * Both the `lite` and the `max` versions of the GSAP library are supported.  
 * The most basic requirement is `TweenLite`.
 * 
 * To have access to this extension, please include `plugins/animation.gsap.js`.
 * @requires {@link http://greensock.com/gsap|GSAP ~1.14.x}
 * @mixin animation.GSAP
 */
(function (root, factory) {
  if (typeof define === 'function' && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) {
    // AMD. Register as an anonymous module.
    define(['ScrollMagic', 'TweenMax', 'TimelineMax'], factory);
  } else if ((typeof exports === "undefined" ? "undefined" : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(exports)) === 'object') {
    // CommonJS
    // Loads whole gsap package onto global scope.
    __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
    factory(__webpack_require__(/*! scrollmagic */ "./node_modules/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js"), TweenMax, TimelineMax);
  } else {
    // Browser globals
    factory(root.ScrollMagic || root.jQuery && root.jQuery.ScrollMagic, root.TweenMax || root.TweenLite, root.TimelineMax || root.TimelineLite);
  }
})(window, function (ScrollMagic, Tween, Timeline) {
  "use strict";

  var NAMESPACE = "animation.gsap";
  var console = window.console || {},
    err = Function.prototype.bind.call(console.error || console.log || function () {}, console);
  if (!ScrollMagic) {
    err("(" + NAMESPACE + ") -> ERROR: The ScrollMagic main module could not be found. Please make sure it's loaded before this plugin or use an asynchronous loader like requirejs.");
  }
  if (!Tween) {
    err("(" + NAMESPACE + ") -> ERROR: TweenLite or TweenMax could not be found. Please make sure GSAP is loaded before ScrollMagic or use an asynchronous loader like requirejs.");
  }

  /*
  	 * ----------------------------------------------------------------
  	 * Extensions for Scene
  	 * ----------------------------------------------------------------
  	 */
  /**
   * Every instance of ScrollMagic.Scene now accepts an additional option.  
   * See {@link ScrollMagic.Scene} for a complete list of the standard options.
   * @memberof! animation.GSAP#
   * @method new ScrollMagic.Scene(options)
   * @example
   * var scene = new ScrollMagic.Scene({tweenChanges: true});
   *
   * @param {object} [options] - Options for the Scene. The options can be updated at any time.
   * @param {boolean} [options.tweenChanges=false] - Tweens Animation to the progress target instead of setting it.  
   Does not affect animations where duration is `0`.
   */
  /**
   * **Get** or **Set** the tweenChanges option value.  
   * This only affects scenes with a duration. If `tweenChanges` is `true`, the progress update when scrolling will not be immediate, but instead the animation will smoothly animate to the target state.  
   * For a better understanding, try enabling and disabling this option in the [Scene Manipulation Example](../examples/basic/scene_manipulation.html).
   * @memberof! animation.GSAP#
   * @method Scene.tweenChanges
   * 
   * @example
   * // get the current tweenChanges option
   * var tweenChanges = scene.tweenChanges();
   *
   * // set new tweenChanges option
   * scene.tweenChanges(true);
   *
   * @fires {@link Scene.change}, when used as setter
   * @param {boolean} [newTweenChanges] - The new tweenChanges setting of the scene.
   * @returns {boolean} `get` -  Current tweenChanges option value.
   * @returns {Scene} `set` -  Parent object for chaining.
   */
  // add option (TODO: DOC (private for dev))
  ScrollMagic.Scene.addOption("tweenChanges",
  // name
  false,
  // default

  function (val) {
    // validation callback
    return !!val;
  });
  // extend scene
  ScrollMagic.Scene.extend(function () {
    var Scene = this,
      _tween;
    var log = function log() {
      if (Scene._log) {
        // not available, when main source minified
        Array.prototype.splice.call(arguments, 1, 0, "(" + NAMESPACE + ")", "->");
        Scene._log.apply(this, arguments);
      }
    };

    // set listeners
    Scene.on("progress.plugin_gsap", function () {
      updateTweenProgress();
    });
    Scene.on("destroy.plugin_gsap", function (e) {
      Scene.removeTween(e.reset);
    });

    /**
     * Update the tween progress to current position.
     * @private
     */
    var updateTweenProgress = function updateTweenProgress() {
      if (_tween) {
        var progress = Scene.progress(),
          state = Scene.state();
        if (_tween.repeat && _tween.repeat() === -1) {
          // infinite loop, so not in relation to progress
          if (state === 'DURING' && _tween.paused()) {
            _tween.play();
          } else if (state !== 'DURING' && !_tween.paused()) {
            _tween.pause();
          }
        } else if (progress != _tween.progress()) {
          // do we even need to update the progress?
          // no infinite loop - so should we just play or go to a specific point in time?
          if (Scene.duration() === 0) {
            // play the animation
            if (progress > 0) {
              // play from 0 to 1
              _tween.play();
            } else {
              // play from 1 to 0
              _tween.reverse();
            }
          } else {
            // go to a specific point in time
            if (Scene.tweenChanges() && _tween.tweenTo) {
              // go smooth
              _tween.tweenTo(progress * _tween.duration());
            } else {
              // just hard set it
              _tween.progress(progress).pause();
            }
          }
        }
      }
    };

    /**
     * Add a tween to the scene.  
     * If you want to add multiple tweens, add them into a GSAP Timeline object and supply it instead (see example below).  
     * 
     * If the scene has a duration, the tween's duration will be projected to the scroll distance of the scene, meaning its progress will be synced to scrollbar movement.  
     * For a scene with a duration of `0`, the tween will be triggered when scrolling forward past the scene's trigger position and reversed, when scrolling back.  
     * To gain better understanding, check out the [Simple Tweening example](../examples/basic/simple_tweening.html).
     *
     * Instead of supplying a tween this method can also be used as a shorthand for `TweenMax.to()` (see example below).
     * @memberof! animation.GSAP#
     *
     * @example
     * // add a single tween directly
     * scene.setTween(TweenMax.to("obj"), 1, {x: 100});
     *
     * // add a single tween via variable
     * var tween = TweenMax.to("obj"), 1, {x: 100};
     * scene.setTween(tween);
     *
     * // add multiple tweens, wrapped in a timeline.
     * var timeline = new TimelineMax();
     * var tween1 = TweenMax.from("obj1", 1, {x: 100});
     * var tween2 = TweenMax.to("obj2", 1, {y: 100});
     * timeline
     *		.add(tween1)
     *		.add(tween2);
     * scene.addTween(timeline);
     *
     * // short hand to add a TweenMax.to() tween
     * scene.setTween("obj3", 0.5, {y: 100});
     *
     * // short hand to add a TweenMax.to() tween for 1 second
     * // this is useful, when the scene has a duration and the tween duration isn't important anyway
     * scene.setTween("obj3", {y: 100});
     *
     * @param {(object|string)} TweenObject - A TweenMax, TweenLite, TimelineMax or TimelineLite object that should be animated in the scene. Can also be a Dom Element or Selector, when using direct tween definition (see examples).
     * @param {(number|object)} duration - A duration for the tween, or tween parameters. If an object containing parameters are supplied, a default duration of 1 will be used.
     * @param {object} params - The parameters for the tween
     * @returns {Scene} Parent object for chaining.
     */
    Scene.setTween = function (TweenObject, duration, params) {
      var newTween;
      if (arguments.length > 1) {
        if (arguments.length < 3) {
          params = duration;
          duration = 1;
        }
        TweenObject = Tween.to(TweenObject, duration, params);
      }
      try {
        // wrap Tween into a Timeline Object if available to include delay and repeats in the duration and standardize methods.
        if (Timeline) {
          newTween = new Timeline({
            smoothChildTiming: true
          }).add(TweenObject);
        } else {
          newTween = TweenObject;
        }
        newTween.pause();
      } catch (e) {
        log(1, "ERROR calling method 'setTween()': Supplied argument is not a valid TweenObject");
        return Scene;
      }
      if (_tween) {
        // kill old tween?
        Scene.removeTween();
      }
      _tween = newTween;

      // some properties need to be transferred it to the wrapper, otherwise they would get lost.
      if (TweenObject.repeat && TweenObject.repeat() === -1) {
        // TweenMax or TimelineMax Object?
        _tween.repeat(-1);
        _tween.yoyo(TweenObject.yoyo());
      }
      // Some tween validations and debugging helpers
      if (Scene.tweenChanges() && !_tween.tweenTo) {
        log(2, "WARNING: tweenChanges will only work if the TimelineMax object is available for ScrollMagic.");
      }

      // check if there are position tweens defined for the trigger and warn about it :)
      if (_tween && Scene.controller() && Scene.triggerElement() && Scene.loglevel() >= 2) {
        // controller is needed to know scroll direction.
        var triggerTweens = Tween.getTweensOf(Scene.triggerElement()),
          vertical = Scene.controller().info("vertical");
        triggerTweens.forEach(function (value, index) {
          var tweenvars = value.vars.css || value.vars,
            condition = vertical ? tweenvars.top !== undefined || tweenvars.bottom !== undefined : tweenvars.left !== undefined || tweenvars.right !== undefined;
          if (condition) {
            log(2, "WARNING: Tweening the position of the trigger element affects the scene timing and should be avoided!");
            return false;
          }
        });
      }

      // warn about tween overwrites, when an element is tweened multiple times
      if (parseFloat(TweenLite.version) >= 1.14) {
        // onOverwrite only present since GSAP v1.14.0
        var list = _tween.getChildren ? _tween.getChildren(true, true, false) : [_tween],
          // get all nested tween objects
          newCallback = function newCallback() {
            log(2, "WARNING: tween was overwritten by another. To learn how to avoid this issue see here: https://github.com/janpaepke/ScrollMagic/wiki/WARNING:-tween-was-overwritten-by-another");
          };
        for (var i = 0, thisTween, oldCallback; i < list.length; i++) {
          /*jshint loopfunc: true */
          thisTween = list[i];
          if (oldCallback !== newCallback) {
            // if tweens is added more than once
            oldCallback = thisTween.vars.onOverwrite;
            thisTween.vars.onOverwrite = function () {
              if (oldCallback) {
                oldCallback.apply(this, arguments);
              }
              newCallback.apply(this, arguments);
            };
          }
        }
      }
      log(3, "added tween");
      updateTweenProgress();
      return Scene;
    };

    /**
     * Remove the tween from the scene.  
     * This will terminate the control of the Scene over the tween.
     *
     * Using the reset option you can decide if the tween should remain in the current state or be rewound to set the target elements back to the state they were in before the tween was added to the scene.
     * @memberof! animation.GSAP#
     *
     * @example
     * // remove the tween from the scene without resetting it
     * scene.removeTween();
     *
     * // remove the tween from the scene and reset it to initial position
     * scene.removeTween(true);
     *
     * @param {boolean} [reset=false] - If `true` the tween will be reset to its initial values.
     * @returns {Scene} Parent object for chaining.
     */
    Scene.removeTween = function (reset) {
      if (_tween) {
        if (reset) {
          _tween.progress(0).pause();
        }
        _tween.kill();
        _tween = undefined;
        log(3, "removed tween (reset: " + (reset ? "true" : "false") + ")");
      }
      return Scene;
    };
  });
});

/***/ }),

/***/ "./src/js/vendor/jquery.inview.js":
/*!****************************************!*\
  !*** ./src/js/vendor/jquery.inview.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);

/**
 * author Christopher Blum
 *    - based on the idea of Remy Sharp, http://remysharp.com/2009/01/26/element-in-view-event-plugin/
 *    - forked from http://github.com/zuk/jquery.inview/
 */
(function (factory) {
  if (typeof define == 'function' && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) {
    // AMD
    define(['jquery'], factory);
  } else if ((typeof exports === "undefined" ? "undefined" : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(exports)) === 'object') {
    // Node, CommonJS
    module.exports = factory(__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"));
  } else {
    // Browser globals
    factory(jQuery);
  }
})(function ($) {
  var inviewObjects = [],
    viewportSize,
    viewportOffset,
    d = document,
    w = window,
    documentElement = d.documentElement,
    timer;
  $.event.special.inview = {
    add: function add(data) {
      inviewObjects.push({
        data: data,
        $element: $(this),
        element: this
      });
      // Use setInterval in order to also make sure this captures elements within
      // "overflow:scroll" elements or elements that appeared in the dom tree due to
      // dom manipulation and reflow
      // old: $(window).scroll(checkInView);
      //
      // By the way, iOS (iPad, iPhone, ...) seems to not execute, or at least delays
      // intervals while the user scrolls. Therefore the inview event might fire a bit late there
      //
      // Don't waste cycles with an interval until we get at least one element that
      // has bound to the inview event.
      if (!timer && inviewObjects.length) {
        timer = setInterval(checkInView, 250);
      }
    },
    remove: function remove(data) {
      for (var i = 0; i < inviewObjects.length; i++) {
        var inviewObject = inviewObjects[i];
        if (inviewObject.element === this && inviewObject.data.guid === data.guid) {
          inviewObjects.splice(i, 1);
          break;
        }
      }

      // Clear interval when we no longer have any elements listening
      if (!inviewObjects.length) {
        clearInterval(timer);
        timer = null;
      }
    }
  };
  function getViewportSize() {
    var mode,
      domObject,
      size = {
        height: w.innerHeight,
        width: w.innerWidth
      };

    // if this is correct then return it. iPad has compat Mode, so will
    // go into check clientHeight/clientWidth (which has the wrong value).
    if (!size.height) {
      mode = d.compatMode;
      if (mode || !$.support.boxModel) {
        // IE, Gecko
        domObject = mode === 'CSS1Compat' ? documentElement :
        // Standards
        d.body; // Quirks
        size = {
          height: domObject.clientHeight,
          width: domObject.clientWidth
        };
      }
    }
    return size;
  }
  function getViewportOffset() {
    return {
      top: w.pageYOffset || documentElement.scrollTop || d.body.scrollTop,
      left: w.pageXOffset || documentElement.scrollLeft || d.body.scrollLeft
    };
  }
  function checkInView() {
    if (!inviewObjects.length) {
      return;
    }
    var i = 0,
      $elements = $.map(inviewObjects, function (inviewObject) {
        var selector = inviewObject.data.selector,
          $element = inviewObject.$element;
        return selector ? $element.find(selector) : $element;
      });
    viewportSize = viewportSize || getViewportSize();
    viewportOffset = viewportOffset || getViewportOffset();
    for (; i < inviewObjects.length; i++) {
      // Ignore elements that are not in the DOM tree
      if (!$.contains(documentElement, $elements[i][0])) {
        continue;
      }
      var $element = $($elements[i]),
        elementSize = {
          height: $element[0].offsetHeight,
          width: $element[0].offsetWidth
        },
        elementOffset = $element.offset(),
        inView = $element.data('inview'),
        offset = parseInt($element.data('offset'), 10) || 0;

      // Don't ask me why because I haven't figured out yet:
      // viewportOffset and viewportSize are sometimes suddenly null in Firefox 5.
      // Even though it sounds weird:
      // It seems that the execution of this function is interferred by the onresize/onscroll event
      // where viewportOffset and viewportSize are unset
      if (!viewportOffset || !viewportSize) {
        return;
      }
      if (elementOffset.top + elementSize.height > viewportOffset.top && elementOffset.top + viewportSize.height * offset / 100 < viewportOffset.top + viewportSize.height && elementOffset.left + elementSize.width > viewportOffset.left && elementOffset.left < viewportOffset.left + viewportSize.width) {
        if (!inView) {
          $element.data('inview', true).trigger('inview', [true]);
        }
      } else if (inView) {
        $element.data('inview', false).trigger('inview', [false]);
      }
    }
  }
  $(w).bind("scroll resize scrollstop", function () {
    viewportSize = viewportOffset = null;
  });

  // IE < 9 scrolls to focused elements without firing the "scroll" event
  if (!documentElement.addEventListener && documentElement.attachEvent) {
    documentElement.attachEvent("onfocusin", function () {
      viewportOffset = null;
    });
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/js/vendor/scrollmagic.js":
/*!**************************************!*\
  !*** ./src/js/vendor/scrollmagic.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);

/*!
 * ScrollMagic v2.0.5 (2015-04-29)
 * The javascript library for magical scroll interactions.
 * (c) 2015 Jan Paepke (@janpaepke)
 * Project Website: http://scrollmagic.io
 * 
 * @version 2.0.5
 * @license Dual licensed under MIT license and GPL.
 * @author Jan Paepke - e-mail@janpaepke.de
 *
 * @file ScrollMagic main library.
 */
/**
 * @namespace ScrollMagic
 */
(function (root, factory) {
  if (typeof define === 'function' && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) {
    // AMD. Register as an anonymous module.
    define(factory);
  } else if ((typeof exports === "undefined" ? "undefined" : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(exports)) === 'object') {
    // CommonJS
    module.exports = factory();
  } else {
    // Browser global
    root.ScrollMagic = factory();
  }
})(window, function () {
  "use strict";

  var ScrollMagic = function ScrollMagic() {
    _util.log(2, '(COMPATIBILITY NOTICE) -> As of ScrollMagic 2.0.0 you need to use \'new ScrollMagic.Controller()\' to create a new controller instance. Use \'new ScrollMagic.Scene()\' to instance a scene.');
  };
  ScrollMagic.version = "2.0.5";

  // TODO: temporary workaround for chrome's scroll jitter bug
  window.addEventListener("mousewheel", function () {});

  // global const
  var PIN_SPACER_ATTRIBUTE = "data-scrollmagic-pin-spacer";

  /**
   * The main class that is needed once per scroll container.
   *
   * @class
   *
   * @example
   * // basic initialization
   * var controller = new ScrollMagic.Controller();
   *
   * // passing options
   * var controller = new ScrollMagic.Controller({container: "#myContainer", loglevel: 3});
   *
   * @param {object} [options] - An object containing one or more options for the controller.
   * @param {(string|object)} [options.container=window] - A selector, DOM object that references the main container for scrolling.
   * @param {boolean} [options.vertical=true] - Sets the scroll mode to vertical (`true`) or horizontal (`false`) scrolling.
   * @param {object} [options.globalSceneOptions={}] - These options will be passed to every Scene that is added to the controller using the addScene method. For more information on Scene options see {@link ScrollMagic.Scene}.
   * @param {number} [options.loglevel=2] Loglevel for debugging. Note that logging is disabled in the minified version of ScrollMagic.
   ** `0` => silent
   ** `1` => errors
   ** `2` => errors, warnings
   ** `3` => errors, warnings, debuginfo
   * @param {boolean} [options.refreshInterval=100] - Some changes don't call events by default, like changing the container size or moving a scene trigger element.  
   This interval polls these parameters to fire the necessary events.  
   If you don't use custom containers, trigger elements or have static layouts, where the positions of the trigger elements don't change, you can set this to 0 disable interval checking and improve performance.
   *
   */
  ScrollMagic.Controller = function (options) {
    /*
    	 * ----------------------------------------------------------------
    	 * settings
    	 * ----------------------------------------------------------------
    	 */
    var NAMESPACE = 'ScrollMagic.Controller',
      SCROLL_DIRECTION_FORWARD = 'FORWARD',
      SCROLL_DIRECTION_REVERSE = 'REVERSE',
      SCROLL_DIRECTION_PAUSED = 'PAUSED',
      DEFAULT_OPTIONS = CONTROLLER_OPTIONS.defaults;

    /*
    	 * ----------------------------------------------------------------
    	 * private vars
    	 * ----------------------------------------------------------------
    	 */
    var Controller = this,
      _options = _util.extend({}, DEFAULT_OPTIONS, options),
      _sceneObjects = [],
      _updateScenesOnNextCycle = false,
      // can be boolean (true => all scenes) or an array of scenes to be updated
      _scrollPos = 0,
      _scrollDirection = SCROLL_DIRECTION_PAUSED,
      _isDocument = true,
      _viewPortSize = 0,
      _enabled = true,
      _updateTimeout,
      _refreshTimeout;

    /*
    	 * ----------------------------------------------------------------
    	 * private functions
    	 * ----------------------------------------------------------------
    	 */

    /**
     * Internal constructor function of the ScrollMagic Controller
     * @private
     */
    var construct = function construct() {
      for (var key in _options) {
        if (!DEFAULT_OPTIONS.hasOwnProperty(key)) {
          log(2, "WARNING: Unknown option \"" + key + "\"");
          delete _options[key];
        }
      }
      _options.container = _util.get.elements(_options.container)[0];
      // check ScrollContainer
      if (!_options.container) {
        log(1, "ERROR creating object " + NAMESPACE + ": No valid scroll container supplied");
        throw NAMESPACE + " init failed."; // cancel
      }

      _isDocument = _options.container === window || _options.container === document.body || !document.body.contains(_options.container);
      // normalize to window
      if (_isDocument) {
        _options.container = window;
      }
      // update container size immediately
      _viewPortSize = getViewportSize();
      // set event handlers
      _options.container.addEventListener("resize", onChange);
      _options.container.addEventListener("scroll", onChange);
      _options.refreshInterval = parseInt(_options.refreshInterval) || DEFAULT_OPTIONS.refreshInterval;
      scheduleRefresh();
      log(3, "added new " + NAMESPACE + " controller (v" + ScrollMagic.version + ")");
    };

    /**
     * Schedule the next execution of the refresh function
     * @private
     */
    var scheduleRefresh = function scheduleRefresh() {
      if (_options.refreshInterval > 0) {
        _refreshTimeout = window.setTimeout(refresh, _options.refreshInterval);
      }
    };

    /**
     * Default function to get scroll pos - overwriteable using `Controller.scrollPos(newFunction)`
     * @private
     */
    var getScrollPos = function getScrollPos() {
      return _options.vertical ? _util.get.scrollTop(_options.container) : _util.get.scrollLeft(_options.container);
    };

    /**
     * Returns the current viewport Size (width vor horizontal, height for vertical)
     * @private
     */
    var getViewportSize = function getViewportSize() {
      return _options.vertical ? _util.get.height(_options.container) : _util.get.width(_options.container);
    };

    /**
     * Default function to set scroll pos - overwriteable using `Controller.scrollTo(newFunction)`
     * Make available publicly for pinned mousewheel workaround.
     * @private
     */
    var setScrollPos = this._setScrollPos = function (pos) {
      if (_options.vertical) {
        if (_isDocument) {
          window.scrollTo(_util.get.scrollLeft(), pos);
        } else {
          _options.container.scrollTop = pos;
        }
      } else {
        if (_isDocument) {
          window.scrollTo(pos, _util.get.scrollTop());
        } else {
          _options.container.scrollLeft = pos;
        }
      }
    };

    /**
     * Handle updates in cycles instead of on scroll (performance)
     * @private
     */
    var updateScenes = function updateScenes() {
      if (_enabled && _updateScenesOnNextCycle) {
        // determine scenes to update
        var scenesToUpdate = _util.type.Array(_updateScenesOnNextCycle) ? _updateScenesOnNextCycle : _sceneObjects.slice(0);
        // reset scenes
        _updateScenesOnNextCycle = false;
        var oldScrollPos = _scrollPos;
        // update scroll pos now instead of onChange, as it might have changed since scheduling (i.e. in-browser smooth scroll)
        _scrollPos = Controller.scrollPos();
        var deltaScroll = _scrollPos - oldScrollPos;
        if (deltaScroll !== 0) {
          // scroll position changed?
          _scrollDirection = deltaScroll > 0 ? SCROLL_DIRECTION_FORWARD : SCROLL_DIRECTION_REVERSE;
        }
        // reverse order of scenes if scrolling reverse
        if (_scrollDirection === SCROLL_DIRECTION_REVERSE) {
          scenesToUpdate.reverse();
        }
        // update scenes
        scenesToUpdate.forEach(function (scene, index) {
          log(3, "updating Scene " + (index + 1) + "/" + scenesToUpdate.length + " (" + _sceneObjects.length + " total)");
          scene.update(true);
        });
        if (scenesToUpdate.length === 0 && _options.loglevel >= 3) {
          log(3, "updating 0 Scenes (nothing added to controller)");
        }
      }
    };

    /**
     * Initializes rAF callback
     * @private
     */
    var debounceUpdate = function debounceUpdate() {
      _updateTimeout = _util.rAF(updateScenes);
    };

    /**
     * Handles Container changes
     * @private
     */
    var onChange = function onChange(e) {
      log(3, "event fired causing an update:", e.type);
      if (e.type == "resize") {
        // resize
        _viewPortSize = getViewportSize();
        _scrollDirection = SCROLL_DIRECTION_PAUSED;
      }
      // schedule update
      if (_updateScenesOnNextCycle !== true) {
        _updateScenesOnNextCycle = true;
        debounceUpdate();
      }
    };
    var refresh = function refresh() {
      if (!_isDocument) {
        // simulate resize event. Only works for viewport relevant param (performance)
        if (_viewPortSize != getViewportSize()) {
          var resizeEvent;
          try {
            resizeEvent = new Event('resize', {
              bubbles: false,
              cancelable: false
            });
          } catch (e) {
            // stupid IE
            resizeEvent = document.createEvent("Event");
            resizeEvent.initEvent("resize", false, false);
          }
          _options.container.dispatchEvent(resizeEvent);
        }
      }
      _sceneObjects.forEach(function (scene, index) {
        // refresh all scenes
        scene.refresh();
      });
      scheduleRefresh();
    };

    /**
     * Send a debug message to the console.
     * provided publicly with _log for plugins
     * @private
     *
     * @param {number} loglevel - The loglevel required to initiate output for the message.
     * @param {...mixed} output - One or more variables that should be passed to the console.
     */
    var log = this._log = function (loglevel, output) {
      if (_options.loglevel >= loglevel) {
        Array.prototype.splice.call(arguments, 1, 0, "(" + NAMESPACE + ") ->");
        _util.log.apply(window, arguments);
      }
    };
    // for scenes we have getters for each option, but for the controller we don't, so we need to make it available externally for plugins
    this._options = _options;

    /**
     * Sort scenes in ascending order of their start offset.
     * @private
     *
     * @param {array} ScenesArray - an array of ScrollMagic Scenes that should be sorted
     * @return {array} The sorted array of Scenes.
     */
    var sortScenes = function sortScenes(ScenesArray) {
      if (ScenesArray.length <= 1) {
        return ScenesArray;
      } else {
        var scenes = ScenesArray.slice(0);
        scenes.sort(function (a, b) {
          return a.scrollOffset() > b.scrollOffset() ? 1 : -1;
        });
        return scenes;
      }
    };

    /**
     * ----------------------------------------------------------------
     * public functions
     * ----------------------------------------------------------------
     */

    /**
     * Add one ore more scene(s) to the controller.  
     * This is the equivalent to `Scene.addTo(controller)`.
     * @public
     * @example
     * // with a previously defined scene
     * controller.addScene(scene);
     *
     * // with a newly created scene.
     * controller.addScene(new ScrollMagic.Scene({duration : 0}));
     *
     * // adding multiple scenes
     * controller.addScene([scene, scene2, new ScrollMagic.Scene({duration : 0})]);
     *
     * @param {(ScrollMagic.Scene|array)} newScene - ScrollMagic Scene or Array of Scenes to be added to the controller.
     * @return {Controller} Parent object for chaining.
     */
    this.addScene = function (newScene) {
      if (_util.type.Array(newScene)) {
        newScene.forEach(function (scene, index) {
          Controller.addScene(scene);
        });
      } else if (newScene instanceof ScrollMagic.Scene) {
        if (newScene.controller() !== Controller) {
          newScene.addTo(Controller);
        } else if (_sceneObjects.indexOf(newScene) < 0) {
          // new scene
          _sceneObjects.push(newScene); // add to array
          _sceneObjects = sortScenes(_sceneObjects); // sort
          newScene.on("shift.controller_sort", function () {
            // resort whenever scene moves
            _sceneObjects = sortScenes(_sceneObjects);
          });
          // insert Global defaults.
          for (var key in _options.globalSceneOptions) {
            if (newScene[key]) {
              newScene[key].call(newScene, _options.globalSceneOptions[key]);
            }
          }
          log(3, "adding Scene (now " + _sceneObjects.length + " total)");
        }
      } else {
        log(1, "ERROR: invalid argument supplied for '.addScene()'");
      }
      return Controller;
    };

    /**
     * Remove one ore more scene(s) from the controller.  
     * This is the equivalent to `Scene.remove()`.
     * @public
     * @example
     * // remove a scene from the controller
     * controller.removeScene(scene);
     *
     * // remove multiple scenes from the controller
     * controller.removeScene([scene, scene2, scene3]);
     *
     * @param {(ScrollMagic.Scene|array)} Scene - ScrollMagic Scene or Array of Scenes to be removed from the controller.
     * @returns {Controller} Parent object for chaining.
     */
    this.removeScene = function (Scene) {
      if (_util.type.Array(Scene)) {
        Scene.forEach(function (scene, index) {
          Controller.removeScene(scene);
        });
      } else {
        var index = _sceneObjects.indexOf(Scene);
        if (index > -1) {
          Scene.off("shift.controller_sort");
          _sceneObjects.splice(index, 1);
          log(3, "removing Scene (now " + _sceneObjects.length + " left)");
          Scene.remove();
        }
      }
      return Controller;
    };

    /**
     * Update one ore more scene(s) according to the scroll position of the container.  
     * This is the equivalent to `Scene.update()`.  
     * The update method calculates the scene's start and end position (based on the trigger element, trigger hook, duration and offset) and checks it against the current scroll position of the container.  
     * It then updates the current scene state accordingly (or does nothing, if the state is already correct) – Pins will be set to their correct position and tweens will be updated to their correct progress.  
     * _**Note:** This method gets called constantly whenever Controller detects a change. The only application for you is if you change something outside of the realm of ScrollMagic, like moving the trigger or changing tween parameters._
     * @public
     * @example
     * // update a specific scene on next cycle
     * controller.updateScene(scene);
     *
     * // update a specific scene immediately
     * controller.updateScene(scene, true);
     *
     * // update multiple scenes scene on next cycle
     * controller.updateScene([scene1, scene2, scene3]);
     *
     * @param {ScrollMagic.Scene} Scene - ScrollMagic Scene or Array of Scenes that is/are supposed to be updated.
     * @param {boolean} [immediately=false] - If `true` the update will be instant, if `false` it will wait until next update cycle.  
     This is useful when changing multiple properties of the scene - this way it will only be updated once all new properties are set (updateScenes).
     * @return {Controller} Parent object for chaining.
     */
    this.updateScene = function (Scene, immediately) {
      if (_util.type.Array(Scene)) {
        Scene.forEach(function (scene, index) {
          Controller.updateScene(scene, immediately);
        });
      } else {
        if (immediately) {
          Scene.update(true);
        } else if (_updateScenesOnNextCycle !== true && Scene instanceof ScrollMagic.Scene) {
          // if _updateScenesOnNextCycle is true, all connected scenes are already scheduled for update
          // prep array for next update cycle
          _updateScenesOnNextCycle = _updateScenesOnNextCycle || [];
          if (_updateScenesOnNextCycle.indexOf(Scene) == -1) {
            _updateScenesOnNextCycle.push(Scene);
          }
          _updateScenesOnNextCycle = sortScenes(_updateScenesOnNextCycle); // sort
          debounceUpdate();
        }
      }
      return Controller;
    };

    /**
     * Updates the controller params and calls updateScene on every scene, that is attached to the controller.  
     * See `Controller.updateScene()` for more information about what this means.  
     * In most cases you will not need this function, as it is called constantly, whenever ScrollMagic detects a state change event, like resize or scroll.  
     * The only application for this method is when ScrollMagic fails to detect these events.  
     * One application is with some external scroll libraries (like iScroll) that move an internal container to a negative offset instead of actually scrolling. In this case the update on the controller needs to be called whenever the child container's position changes.
     * For this case there will also be the need to provide a custom function to calculate the correct scroll position. See `Controller.scrollPos()` for details.
     * @public
     * @example
     * // update the controller on next cycle (saves performance due to elimination of redundant updates)
     * controller.update();
     *
     * // update the controller immediately
     * controller.update(true);
     *
     * @param {boolean} [immediately=false] - If `true` the update will be instant, if `false` it will wait until next update cycle (better performance)
     * @return {Controller} Parent object for chaining.
     */
    this.update = function (immediately) {
      onChange({
        type: "resize"
      }); // will update size and set _updateScenesOnNextCycle to true
      if (immediately) {
        updateScenes();
      }
      return Controller;
    };
    this.updateScrollPos = function (newScrollPos) {
      _scrollPos = newScrollPos;
    };

    /**
     * Scroll to a numeric scroll offset, a DOM element, the start of a scene or provide an alternate method for scrolling.  
     * For vertical controllers it will change the top scroll offset and for horizontal applications it will change the left offset.
     * @public
     *
     * @since 1.1.0
     * @example
     * // scroll to an offset of 100
     * controller.scrollTo(100);
     *
     * // scroll to a DOM element
     * controller.scrollTo("#anchor");
     *
     * // scroll to the beginning of a scene
     * var scene = new ScrollMagic.Scene({offset: 200});
     * controller.scrollTo(scene);
     *
     * // define a new scroll position modification function (jQuery animate instead of jump)
     * controller.scrollTo(function (newScrollPos) {
     *	$("html, body").animate({scrollTop: newScrollPos});
     * });
     * controller.scrollTo(100); // call as usual, but the new function will be used instead
     *
     * // define a new scroll function with an additional parameter
     * controller.scrollTo(function (newScrollPos, message) {
     *  console.log(message);
     *	$(this).animate({scrollTop: newScrollPos});
     * });
     * // call as usual, but supply an extra parameter to the defined custom function
     * controller.scrollTo(100, "my message");
     *
     * // define a new scroll function with an additional parameter containing multiple variables
     * controller.scrollTo(function (newScrollPos, options) {
     *  someGlobalVar = options.a + options.b;
     *	$(this).animate({scrollTop: newScrollPos});
     * });
     * // call as usual, but supply an extra parameter containing multiple options
     * controller.scrollTo(100, {a: 1, b: 2});
     *
     * // define a new scroll function with a callback supplied as an additional parameter
     * controller.scrollTo(function (newScrollPos, callback) {
     *	$(this).animate({scrollTop: newScrollPos}, 400, "swing", callback);
     * });
     * // call as usual, but supply an extra parameter, which is used as a callback in the previously defined custom scroll function
     * controller.scrollTo(100, function() {
     *	console.log("scroll has finished.");
     * });
     *
     * @param {mixed} scrollTarget - The supplied argument can be one of these types:
     * 1. `number` -> The container will scroll to this new scroll offset.
     * 2. `string` or `object` -> Can be a selector or a DOM object.  
     *  The container will scroll to the position of this element.
     * 3. `ScrollMagic Scene` -> The container will scroll to the start of this scene.
     * 4. `function` -> This function will be used for future scroll position modifications.  
     *  This provides a way for you to change the behaviour of scrolling and adding new behaviour like animation. The function receives the new scroll position as a parameter and a reference to the container element using `this`.  
     *  It may also optionally receive an optional additional parameter (see below)  
     *  _**NOTE:**  
     *  All other options will still work as expected, using the new function to scroll._
     * @param {mixed} [additionalParameter] - If a custom scroll function was defined (see above 4.), you may want to supply additional parameters to it, when calling it. You can do this using this parameter – see examples for details. Please note, that this parameter will have no effect, if you use the default scrolling function.
     * @returns {Controller} Parent object for chaining.
     */
    this.scrollTo = function (scrollTarget, additionalParameter) {
      if (_util.type.Number(scrollTarget)) {
        // excecute
        setScrollPos.call(_options.container, scrollTarget, additionalParameter);
      } else if (scrollTarget instanceof ScrollMagic.Scene) {
        // scroll to scene
        if (scrollTarget.controller() === Controller) {
          // check if the controller is associated with this scene
          Controller.scrollTo(scrollTarget.scrollOffset(), additionalParameter);
        } else {
          log(2, "scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.", scrollTarget);
        }
      } else if (_util.type.Function(scrollTarget)) {
        // assign new scroll function
        setScrollPos = scrollTarget;
      } else {
        // scroll to element
        var elem = _util.get.elements(scrollTarget)[0];
        if (elem) {
          // if parent is pin spacer, use spacer position instead so correct start position is returned for pinned elements.
          while (elem.parentNode.hasAttribute(PIN_SPACER_ATTRIBUTE)) {
            elem = elem.parentNode;
          }
          var param = _options.vertical ? "top" : "left",
            // which param is of interest ?
            containerOffset = _util.get.offset(_options.container),
            // container position is needed because element offset is returned in relation to document, not in relation to container.
            elementOffset = _util.get.offset(elem);
          if (!_isDocument) {
            // container is not the document root, so substract scroll Position to get correct trigger element position relative to scrollcontent
            containerOffset[param] -= Controller.scrollPos();
          }
          Controller.scrollTo(elementOffset[param] - containerOffset[param], additionalParameter);
        } else {
          log(2, "scrollTo(): The supplied argument is invalid. Scroll cancelled.", scrollTarget);
        }
      }
      return Controller;
    };

    /**
     * **Get** the current scrollPosition or **Set** a new method to calculate it.  
     * -> **GET**:
     * When used as a getter this function will return the current scroll position.  
     * To get a cached value use Controller.info("scrollPos"), which will be updated in the update cycle.  
     * For vertical controllers it will return the top scroll offset and for horizontal applications it will return the left offset.
     *
     * -> **SET**:
     * When used as a setter this method prodes a way to permanently overwrite the controller's scroll position calculation.  
     * A typical usecase is when the scroll position is not reflected by the containers scrollTop or scrollLeft values, but for example by the inner offset of a child container.  
     * Moving a child container inside a parent is a commonly used method for several scrolling frameworks, including iScroll.  
     * By providing an alternate calculation function you can make sure ScrollMagic receives the correct scroll position.  
     * Please also bear in mind that your function should return y values for vertical scrolls an x for horizontals.
     *
     * To change the current scroll position please use `Controller.scrollTo()`.
     * @public
     *
     * @example
     * // get the current scroll Position
     * var scrollPos = controller.scrollPos();
     *
     * // set a new scroll position calculation method
     * controller.scrollPos(function () {
     *	return this.info("vertical") ? -mychildcontainer.y : -mychildcontainer.x
     * });
     *
     * @param {function} [scrollPosMethod] - The function to be used for the scroll position calculation of the container.
     * @returns {(number|Controller)} Current scroll position or parent object for chaining.
     */
    this.scrollPos = function (scrollPosMethod) {
      if (!arguments.length) {
        // get
        return getScrollPos.call(Controller);
      } else {
        // set
        if (_util.type.Function(scrollPosMethod)) {
          getScrollPos = scrollPosMethod;
        } else {
          log(2, "Provided value for method 'scrollPos' is not a function. To change the current scroll position use 'scrollTo()'.");
        }
      }
      return Controller;
    };

    /**
     * **Get** all infos or one in particular about the controller.
     * @public
     * @example
     * // returns the current scroll position (number)
     * var scrollPos = controller.info("scrollPos");
     *
     * // returns all infos as an object
     * var infos = controller.info();
     *
     * @param {string} [about] - If passed only this info will be returned instead of an object containing all.  
     Valid options are:
     ** `"size"` => the current viewport size of the container
     ** `"vertical"` => true if vertical scrolling, otherwise false
     ** `"scrollPos"` => the current scroll position
     ** `"scrollDirection"` => the last known direction of the scroll
     ** `"container"` => the container element
     ** `"isDocument"` => true if container element is the document.
     * @returns {(mixed|object)} The requested info(s).
     */
    this.info = function (about) {
      var values = {
        size: _viewPortSize,
        // contains height or width (in regard to orientation);
        vertical: _options.vertical,
        scrollPos: _scrollPos,
        scrollDirection: _scrollDirection,
        container: _options.container,
        isDocument: _isDocument
      };
      if (!arguments.length) {
        // get all as an object
        return values;
      } else if (values[about] !== undefined) {
        return values[about];
      } else {
        log(1, "ERROR: option \"" + about + "\" is not available");
        return;
      }
    };

    /**
     * **Get** or **Set** the current loglevel option value.
     * @public
     *
     * @example
     * // get the current value
     * var loglevel = controller.loglevel();
     *
     * // set a new value
     * controller.loglevel(3);
     *
     * @param {number} [newLoglevel] - The new loglevel setting of the Controller. `[0-3]`
     * @returns {(number|Controller)} Current loglevel or parent object for chaining.
     */
    this.loglevel = function (newLoglevel) {
      if (!arguments.length) {
        // get
        return _options.loglevel;
      } else if (_options.loglevel != newLoglevel) {
        // set
        _options.loglevel = newLoglevel;
      }
      return Controller;
    };

    /**
     * **Get** or **Set** the current enabled state of the controller.  
     * This can be used to disable all Scenes connected to the controller without destroying or removing them.
     * @public
     *
     * @example
     * // get the current value
     * var enabled = controller.enabled();
     *
     * // disable the controller
     * controller.enabled(false);
     *
     * @param {boolean} [newState] - The new enabled state of the controller `true` or `false`.
     * @returns {(boolean|Controller)} Current enabled state or parent object for chaining.
     */
    this.enabled = function (newState) {
      if (!arguments.length) {
        // get
        return _enabled;
      } else if (_enabled != newState) {
        // set
        _enabled = !!newState;
        Controller.updateScene(_sceneObjects, true);
      }
      return Controller;
    };

    /**
     * Destroy the Controller, all Scenes and everything.
     * @public
     *
     * @example
     * // without resetting the scenes
     * controller = controller.destroy();
     *
     * // with scene reset
     * controller = controller.destroy(true);
     *
     * @param {boolean} [resetScenes=false] - If `true` the pins and tweens (if existent) of all scenes will be reset.
     * @returns {null} Null to unset handler variables.
     */
    this.destroy = function (resetScenes) {
      window.clearTimeout(_refreshTimeout);
      var i = _sceneObjects.length;
      while (i--) {
        _sceneObjects[i].destroy(resetScenes);
      }
      _options.container.removeEventListener("resize", onChange);
      _options.container.removeEventListener("scroll", onChange);
      _util.cAF(_updateTimeout);
      log(3, "destroyed " + NAMESPACE + " (reset: " + (resetScenes ? "true" : "false") + ")");
      return null;
    };

    // INIT
    construct();
    return Controller;
  };

  // store pagewide controller options
  var CONTROLLER_OPTIONS = {
    defaults: {
      container: window,
      vertical: true,
      globalSceneOptions: {},
      loglevel: 2,
      refreshInterval: 100
    }
  };
  /*
   * method used to add an option to ScrollMagic Scenes.
   */
  ScrollMagic.Controller.addOption = function (name, defaultValue) {
    CONTROLLER_OPTIONS.defaults[name] = defaultValue;
  };
  // instance extension function for plugins
  ScrollMagic.Controller.extend = function (extension) {
    var oldClass = this;
    ScrollMagic.Controller = function () {
      oldClass.apply(this, arguments);
      this.$super = _util.extend({}, this); // copy parent state
      return extension.apply(this, arguments) || this;
    };
    _util.extend(ScrollMagic.Controller, oldClass); // copy properties
    ScrollMagic.Controller.prototype = oldClass.prototype; // copy prototype
    ScrollMagic.Controller.prototype.constructor = ScrollMagic.Controller; // restore constructor
  };

  /**
   * A Scene defines where the controller should react and how.
   *
   * @class
   *
   * @example
   * // create a standard scene and add it to a controller
   * new ScrollMagic.Scene()
   *		.addTo(controller);
   *
   * // create a scene with custom options and assign a handler to it.
   * var scene = new ScrollMagic.Scene({
   * 		duration: 100,
   *		offset: 200,
   *		triggerHook: "onEnter",
   *		reverse: false
   * });
   *
   * @param {object} [options] - Options for the Scene. The options can be updated at any time.  
   Instead of setting the options for each scene individually you can also set them globally in the controller as the controllers `globalSceneOptions` option. The object accepts the same properties as the ones below.  
   When a scene is added to the controller the options defined using the Scene constructor will be overwritten by those set in `globalSceneOptions`.
   * @param {(number|function)} [options.duration=0] - The duration of the scene. 
   If `0` tweens will auto-play when reaching the scene start point, pins will be pinned indefinetly starting at the start position.  
   A function retuning the duration value is also supported. Please see `Scene.duration()` for details.
   * @param {number} [options.offset=0] - Offset Value for the Trigger Position. If no triggerElement is defined this will be the scroll distance from the start of the page, after which the scene will start.
   * @param {(string|object)} [options.triggerElement=null] - Selector or DOM object that defines the start of the scene. If undefined the scene will start right at the start of the page (unless an offset is set).
   * @param {(number|string)} [options.triggerHook="onCenter"] - Can be a number between 0 and 1 defining the position of the trigger Hook in relation to the viewport.  
   Can also be defined using a string:
   ** `"onEnter"` => `1`
   ** `"onCenter"` => `0.5`
   ** `"onLeave"` => `0`
   * @param {boolean} [options.reverse=true] - Should the scene reverse, when scrolling up?
   * @param {number} [options.loglevel=2] - Loglevel for debugging. Note that logging is disabled in the minified version of ScrollMagic.
   ** `0` => silent
   ** `1` => errors
   ** `2` => errors, warnings
   ** `3` => errors, warnings, debuginfo
   * 
   */
  ScrollMagic.Scene = function (options) {
    /*
    	 * ----------------------------------------------------------------
    	 * settings
    	 * ----------------------------------------------------------------
    	 */

    var NAMESPACE = 'ScrollMagic.Scene',
      SCENE_STATE_BEFORE = 'BEFORE',
      SCENE_STATE_DURING = 'DURING',
      SCENE_STATE_AFTER = 'AFTER',
      DEFAULT_OPTIONS = SCENE_OPTIONS.defaults;

    /*
    	 * ----------------------------------------------------------------
    	 * private vars
    	 * ----------------------------------------------------------------
    	 */

    var Scene = this,
      _options = _util.extend({}, DEFAULT_OPTIONS, options),
      _state = SCENE_STATE_BEFORE,
      _progress = 0,
      _scrollOffset = {
        start: 0,
        end: 0
      },
      // reflects the controllers's scroll position for the start and end of the scene respectively
      _triggerPos = 0,
      _enabled = true,
      _durationUpdateMethod,
      _controller;

    /**
     * Internal constructor function of the ScrollMagic Scene
     * @private
     */
    var construct = function construct() {
      for (var key in _options) {
        // check supplied options
        if (!DEFAULT_OPTIONS.hasOwnProperty(key)) {
          log(2, "WARNING: Unknown option \"" + key + "\"");
          delete _options[key];
        }
      }
      // add getters/setters for all possible options
      for (var optionName in DEFAULT_OPTIONS) {
        addSceneOption(optionName);
      }
      // validate all options
      validateOption();
    };

    /*
     * ----------------------------------------------------------------
     * Event Management
     * ----------------------------------------------------------------
     */

    var _listeners = {};
    /**
     * Scene start event.  
     * Fires whenever the scroll position its the starting point of the scene.  
     * It will also fire when scrolling back up going over the start position of the scene. If you want something to happen only when scrolling down/right, use the scrollDirection parameter passed to the callback.
     *
     * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
     *
     * @event ScrollMagic.Scene#start
     *
     * @example
     * scene.on("start", function (event) {
     * 	console.log("Hit start point of scene.");
     * });
     *
     * @property {object} event - The event Object passed to each callback
     * @property {string} event.type - The name of the event
     * @property {Scene} event.target - The Scene object that triggered this event
     * @property {number} event.progress - Reflects the current progress of the scene
     * @property {string} event.state - The current state of the scene `"BEFORE"` or `"DURING"`
     * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
     */
    /**
     * Scene end event.  
     * Fires whenever the scroll position its the ending point of the scene.  
     * It will also fire when scrolling back up from after the scene and going over its end position. If you want something to happen only when scrolling down/right, use the scrollDirection parameter passed to the callback.
     *
     * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
     *
     * @event ScrollMagic.Scene#end
     *
     * @example
     * scene.on("end", function (event) {
     * 	console.log("Hit end point of scene.");
     * });
     *
     * @property {object} event - The event Object passed to each callback
     * @property {string} event.type - The name of the event
     * @property {Scene} event.target - The Scene object that triggered this event
     * @property {number} event.progress - Reflects the current progress of the scene
     * @property {string} event.state - The current state of the scene `"DURING"` or `"AFTER"`
     * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
     */
    /**
     * Scene enter event.  
     * Fires whenever the scene enters the "DURING" state.  
     * Keep in mind that it doesn't matter if the scene plays forward or backward: This event always fires when the scene enters its active scroll timeframe, regardless of the scroll-direction.
     *
     * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
     *
     * @event ScrollMagic.Scene#enter
     *
     * @example
     * scene.on("enter", function (event) {
     * 	console.log("Scene entered.");
     * });
     *
     * @property {object} event - The event Object passed to each callback
     * @property {string} event.type - The name of the event
     * @property {Scene} event.target - The Scene object that triggered this event
     * @property {number} event.progress - Reflects the current progress of the scene
     * @property {string} event.state - The current state of the scene - always `"DURING"`
     * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
     */
    /**
     * Scene leave event.  
     * Fires whenever the scene's state goes from "DURING" to either "BEFORE" or "AFTER".  
     * Keep in mind that it doesn't matter if the scene plays forward or backward: This event always fires when the scene leaves its active scroll timeframe, regardless of the scroll-direction.
     *
     * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
     *
     * @event ScrollMagic.Scene#leave
     *
     * @example
     * scene.on("leave", function (event) {
     * 	console.log("Scene left.");
     * });
     *
     * @property {object} event - The event Object passed to each callback
     * @property {string} event.type - The name of the event
     * @property {Scene} event.target - The Scene object that triggered this event
     * @property {number} event.progress - Reflects the current progress of the scene
     * @property {string} event.state - The current state of the scene `"BEFORE"` or `"AFTER"`
     * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
     */
    /**
     * Scene update event.  
     * Fires whenever the scene is updated (but not necessarily changes the progress).
     *
     * @event ScrollMagic.Scene#update
     *
     * @example
     * scene.on("update", function (event) {
     * 	console.log("Scene updated.");
     * });
     *
     * @property {object} event - The event Object passed to each callback
     * @property {string} event.type - The name of the event
     * @property {Scene} event.target - The Scene object that triggered this event
     * @property {number} event.startPos - The starting position of the scene (in relation to the conainer)
     * @property {number} event.endPos - The ending position of the scene (in relation to the conainer)
     * @property {number} event.scrollPos - The current scroll position of the container
     */
    /**
     * Scene progress event.  
     * Fires whenever the progress of the scene changes.
     *
     * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
     *
     * @event ScrollMagic.Scene#progress
     *
     * @example
     * scene.on("progress", function (event) {
     * 	console.log("Scene progress changed to " + event.progress);
     * });
     *
     * @property {object} event - The event Object passed to each callback
     * @property {string} event.type - The name of the event
     * @property {Scene} event.target - The Scene object that triggered this event
     * @property {number} event.progress - Reflects the current progress of the scene
     * @property {string} event.state - The current state of the scene `"BEFORE"`, `"DURING"` or `"AFTER"`
     * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
     */
    /**
     * Scene change event.  
     * Fires whenvever a property of the scene is changed.
     *
     * @event ScrollMagic.Scene#change
     *
     * @example
     * scene.on("change", function (event) {
     * 	console.log("Scene Property \"" + event.what + "\" changed to " + event.newval);
     * });
     *
     * @property {object} event - The event Object passed to each callback
     * @property {string} event.type - The name of the event
     * @property {Scene} event.target - The Scene object that triggered this event
     * @property {string} event.what - Indicates what value has been changed
     * @property {mixed} event.newval - The new value of the changed property
     */
    /**
     * Scene shift event.  
     * Fires whenvever the start or end **scroll offset** of the scene change.
     * This happens explicitely, when one of these values change: `offset`, `duration` or `triggerHook`.
     * It will fire implicitly when the `triggerElement` changes, if the new element has a different position (most cases).
     * It will also fire implicitly when the size of the container changes and the triggerHook is anything other than `onLeave`.
     *
     * @event ScrollMagic.Scene#shift
     * @since 1.1.0
     *
     * @example
     * scene.on("shift", function (event) {
     * 	console.log("Scene moved, because the " + event.reason + " has changed.)");
     * });
     *
     * @property {object} event - The event Object passed to each callback
     * @property {string} event.type - The name of the event
     * @property {Scene} event.target - The Scene object that triggered this event
     * @property {string} event.reason - Indicates why the scene has shifted
     */
    /**
     * Scene destroy event.  
     * Fires whenvever the scene is destroyed.
     * This can be used to tidy up custom behaviour used in events.
     *
     * @event ScrollMagic.Scene#destroy
     * @since 1.1.0
     *
     * @example
     * scene.on("enter", function (event) {
     *        // add custom action
     *        $("#my-elem").left("200");
     *      })
     *      .on("destroy", function (event) {
     *        // reset my element to start position
     *        if (event.reset) {
     *          $("#my-elem").left("0");
     *        }
     *      });
     *
     * @property {object} event - The event Object passed to each callback
     * @property {string} event.type - The name of the event
     * @property {Scene} event.target - The Scene object that triggered this event
     * @property {boolean} event.reset - Indicates if the destroy method was called with reset `true` or `false`.
     */
    /**
     * Scene add event.  
     * Fires when the scene is added to a controller.
     * This is mostly used by plugins to know that change might be due.
     *
     * @event ScrollMagic.Scene#add
     * @since 2.0.0
     *
     * @example
     * scene.on("add", function (event) {
     * 	console.log('Scene was added to a new controller.');
     * });
     *
     * @property {object} event - The event Object passed to each callback
     * @property {string} event.type - The name of the event
     * @property {Scene} event.target - The Scene object that triggered this event
     * @property {boolean} event.controller - The controller object the scene was added to.
     */
    /**
     * Scene remove event.  
     * Fires when the scene is removed from a controller.
     * This is mostly used by plugins to know that change might be due.
     *
     * @event ScrollMagic.Scene#remove
     * @since 2.0.0
     *
     * @example
     * scene.on("remove", function (event) {
     * 	console.log('Scene was removed from its controller.');
     * });
     *
     * @property {object} event - The event Object passed to each callback
     * @property {string} event.type - The name of the event
     * @property {Scene} event.target - The Scene object that triggered this event
     */

    /**
     * Add one ore more event listener.  
     * The callback function will be fired at the respective event, and an object containing relevant data will be passed to the callback.
     * @method ScrollMagic.Scene#on
     *
     * @example
     * function callback (event) {
     * 		console.log("Event fired! (" + event.type + ")");
     * }
     * // add listeners
     * scene.on("change update progress start end enter leave", callback);
     *
     * @param {string} names - The name or names of the event the callback should be attached to.
     * @param {function} callback - A function that should be executed, when the event is dispatched. An event object will be passed to the callback.
     * @returns {Scene} Parent object for chaining.
     */
    this.on = function (names, callback) {
      if (_util.type.Function(callback)) {
        names = names.trim().split(' ');
        names.forEach(function (fullname) {
          var nameparts = fullname.split('.'),
            eventname = nameparts[0],
            namespace = nameparts[1];
          if (eventname != "*") {
            // disallow wildcards
            if (!_listeners[eventname]) {
              _listeners[eventname] = [];
            }
            _listeners[eventname].push({
              namespace: namespace || '',
              callback: callback
            });
          }
        });
      } else {
        log(1, "ERROR when calling '.on()': Supplied callback for '" + names + "' is not a valid function!");
      }
      return Scene;
    };

    /**
     * Remove one or more event listener.
     * @method ScrollMagic.Scene#off
     *
     * @example
     * function callback (event) {
     * 		console.log("Event fired! (" + event.type + ")");
     * }
     * // add listeners
     * scene.on("change update", callback);
     * // remove listeners
     * scene.off("change update", callback);
     *
     * @param {string} names - The name or names of the event that should be removed.
     * @param {function} [callback] - A specific callback function that should be removed. If none is passed all callbacks to the event listener will be removed.
     * @returns {Scene} Parent object for chaining.
     */
    this.off = function (names, callback) {
      if (!names) {
        log(1, "ERROR: Invalid event name supplied.");
        return Scene;
      }
      names = names.trim().split(' ');
      names.forEach(function (fullname, key) {
        var nameparts = fullname.split('.'),
          eventname = nameparts[0],
          namespace = nameparts[1] || '',
          removeList = eventname === '*' ? Object.keys(_listeners) : [eventname];
        removeList.forEach(function (remove) {
          var list = _listeners[remove] || [],
            i = list.length;
          while (i--) {
            var listener = list[i];
            if (listener && (namespace === listener.namespace || namespace === '*') && (!callback || callback == listener.callback)) {
              list.splice(i, 1);
            }
          }
          if (!list.length) {
            delete _listeners[remove];
          }
        });
      });
      return Scene;
    };

    /**
     * Trigger an event.
     * @method ScrollMagic.Scene#trigger
     *
     * @example
     * this.trigger("change");
     *
     * @param {string} name - The name of the event that should be triggered.
     * @param {object} [vars] - An object containing info that should be passed to the callback.
     * @returns {Scene} Parent object for chaining.
     */
    this.trigger = function (name, vars) {
      if (name) {
        var nameparts = name.trim().split('.'),
          eventname = nameparts[0],
          namespace = nameparts[1],
          listeners = _listeners[eventname];
        log(3, 'event fired:', eventname, vars ? "->" : '', vars || '');
        if (listeners) {
          listeners.forEach(function (listener, key) {
            if (!namespace || namespace === listener.namespace) {
              listener.callback.call(Scene, new ScrollMagic.Event(eventname, listener.namespace, Scene, vars));
            }
          });
        }
      } else {
        log(1, "ERROR: Invalid event name supplied.");
      }
      return Scene;
    };

    // set event listeners
    Scene.on("change.internal", function (e) {
      if (e.what !== "loglevel" && e.what !== "tweenChanges") {
        // no need for a scene update scene with these options...
        if (e.what === "triggerElement") {
          updateTriggerElementPosition();
        } else if (e.what === "reverse") {
          // the only property left that may have an impact on the current scene state. Everything else is handled by the shift event.
          Scene.update();
        }
      }
    }).on("shift.internal", function (e) {
      updateScrollOffset();
      Scene.update(); // update scene to reflect new position
    });

    /**
     * Send a debug message to the console.
     * @private
     * but provided publicly with _log for plugins
     *
     * @param {number} loglevel - The loglevel required to initiate output for the message.
     * @param {...mixed} output - One or more variables that should be passed to the console.
     */
    var log = this._log = function (loglevel, output) {
      if (_options.loglevel >= loglevel) {
        Array.prototype.splice.call(arguments, 1, 0, "(" + NAMESPACE + ") ->");
        _util.log.apply(window, arguments);
      }
    };

    /**
     * Add the scene to a controller.  
     * This is the equivalent to `Controller.addScene(scene)`.
     * @method ScrollMagic.Scene#addTo
     *
     * @example
     * // add a scene to a ScrollMagic Controller
     * scene.addTo(controller);
     *
     * @param {ScrollMagic.Controller} controller - The controller to which the scene should be added.
     * @returns {Scene} Parent object for chaining.
     */
    this.addTo = function (controller) {
      if (!(controller instanceof ScrollMagic.Controller)) {
        log(1, "ERROR: supplied argument of 'addTo()' is not a valid ScrollMagic Controller");
      } else if (_controller != controller) {
        // new controller
        if (_controller) {
          // was associated to a different controller before, so remove it...
          _controller.removeScene(Scene);
        }
        _controller = controller;
        validateOption();
        updateDuration(true);
        updateTriggerElementPosition(true);
        updateScrollOffset();
        _controller.info("container").addEventListener('resize', onContainerResize);
        controller.addScene(Scene);
        Scene.trigger("add", {
          controller: _controller
        });
        log(3, "added " + NAMESPACE + " to controller");
        Scene.update();
      }
      return Scene;
    };

    /**
     * **Get** or **Set** the current enabled state of the scene.  
     * This can be used to disable this scene without removing or destroying it.
     * @method ScrollMagic.Scene#enabled
     *
     * @example
     * // get the current value
     * var enabled = scene.enabled();
     *
     * // disable the scene
     * scene.enabled(false);
     *
     * @param {boolean} [newState] - The new enabled state of the scene `true` or `false`.
     * @returns {(boolean|Scene)} Current enabled state or parent object for chaining.
     */
    this.enabled = function (newState) {
      if (!arguments.length) {
        // get
        return _enabled;
      } else if (_enabled != newState) {
        // set
        _enabled = !!newState;
        Scene.update(true);
      }
      return Scene;
    };

    /**
     * Remove the scene from the controller.  
     * This is the equivalent to `Controller.removeScene(scene)`.
     * The scene will not be updated anymore until you readd it to a controller.
     * To remove the pin or the tween you need to call removeTween() or removePin() respectively.
     * @method ScrollMagic.Scene#remove
     * @example
     * // remove the scene from its controller
     * scene.remove();
     *
     * @returns {Scene} Parent object for chaining.
     */
    this.remove = function () {
      if (_controller) {
        _controller.info("container").removeEventListener('resize', onContainerResize);
        var tmpParent = _controller;
        _controller = undefined;
        tmpParent.removeScene(Scene);
        Scene.trigger("remove");
        log(3, "removed " + NAMESPACE + " from controller");
      }
      return Scene;
    };

    /**
     * Destroy the scene and everything.
     * @method ScrollMagic.Scene#destroy
     * @example
     * // destroy the scene without resetting the pin and tween to their initial positions
     * scene = scene.destroy();
     *
     * // destroy the scene and reset the pin and tween
     * scene = scene.destroy(true);
     *
     * @param {boolean} [reset=false] - If `true` the pin and tween (if existent) will be reset.
     * @returns {null} Null to unset handler variables.
     */
    this.destroy = function (reset) {
      Scene.trigger("destroy", {
        reset: reset
      });
      Scene.remove();
      Scene.off("*.*");
      log(3, "destroyed " + NAMESPACE + " (reset: " + (reset ? "true" : "false") + ")");
      return null;
    };

    /**
     * Updates the Scene to reflect the current state.  
     * This is the equivalent to `Controller.updateScene(scene, immediately)`.  
     * The update method calculates the scene's start and end position (based on the trigger element, trigger hook, duration and offset) and checks it against the current scroll position of the container.  
     * It then updates the current scene state accordingly (or does nothing, if the state is already correct) – Pins will be set to their correct position and tweens will be updated to their correct progress.
     * This means an update doesn't necessarily result in a progress change. The `progress` event will be fired if the progress has indeed changed between this update and the last.  
     * _**NOTE:** This method gets called constantly whenever ScrollMagic detects a change. The only application for you is if you change something outside of the realm of ScrollMagic, like moving the trigger or changing tween parameters._
     * @method ScrollMagic.Scene#update
     * @example
     * // update the scene on next tick
     * scene.update();
     *
     * // update the scene immediately
     * scene.update(true);
     *
     * @fires Scene.update
     *
     * @param {boolean} [immediately=false] - If `true` the update will be instant, if `false` it will wait until next update cycle (better performance).
     * @returns {Scene} Parent object for chaining.
     */
    this.update = function (immediately) {
      if (_controller) {
        if (immediately) {
          if (_controller.enabled() && _enabled) {
            var scrollPos = _controller.info("scrollPos"),
              newProgress;
            if (_options.duration > 0) {
              newProgress = (scrollPos - _scrollOffset.start) / (_scrollOffset.end - _scrollOffset.start);
            } else {
              newProgress = scrollPos >= _scrollOffset.start ? 1 : 0;
            }
            Scene.trigger("update", {
              startPos: _scrollOffset.start,
              endPos: _scrollOffset.end,
              scrollPos: scrollPos
            });
            Scene.progress(newProgress);
          } else if (_pin && _state === SCENE_STATE_DURING) {
            updatePinState(true); // unpin in position
          }
        } else {
          _controller.updateScene(Scene, false);
        }
      }
      return Scene;
    };

    /**
     * Updates dynamic scene variables like the trigger element position or the duration.
     * This method is automatically called in regular intervals from the controller. See {@link ScrollMagic.Controller} option `refreshInterval`.
     * 
     * You can call it to minimize lag, for example when you intentionally change the position of the triggerElement.
     * If you don't it will simply be updated in the next refresh interval of the container, which is usually sufficient.
     *
     * @method ScrollMagic.Scene#refresh
     * @since 1.1.0
     * @example
     * scene = new ScrollMagic.Scene({triggerElement: "#trigger"});
     * 
     * // change the position of the trigger
     * $("#trigger").css("top", 500);
     * // immediately let the scene know of this change
     * scene.refresh();
     *
     * @fires {@link Scene.shift}, if the trigger element position or the duration changed
     * @fires {@link Scene.change}, if the duration changed
     *
     * @returns {Scene} Parent object for chaining.
     */
    this.refresh = function () {
      updateDuration();
      updateTriggerElementPosition();
      // update trigger element position
      return Scene;
    };

    /**
     * **Get** or **Set** the scene's progress.  
     * Usually it shouldn't be necessary to use this as a setter, as it is set automatically by scene.update().  
     * The order in which the events are fired depends on the duration of the scene:
     *  1. Scenes with `duration == 0`:  
     *  Scenes that have no duration by definition have no ending. Thus the `end` event will never be fired.  
     *  When the trigger position of the scene is passed the events are always fired in this order:  
     *  `enter`, `start`, `progress` when scrolling forward  
     *  and  
     *  `progress`, `start`, `leave` when scrolling in reverse
     *  2. Scenes with `duration > 0`:  
     *  Scenes with a set duration have a defined start and end point.  
     *  When scrolling past the start position of the scene it will fire these events in this order:  
     *  `enter`, `start`, `progress`  
     *  When continuing to scroll and passing the end point it will fire these events:  
     *  `progress`, `end`, `leave`  
     *  When reversing through the end point these events are fired:  
     *  `enter`, `end`, `progress`  
     *  And when continuing to scroll past the start position in reverse it will fire:  
     *  `progress`, `start`, `leave`  
     *  In between start and end the `progress` event will be called constantly, whenever the progress changes.
     * 
     * In short:  
     * `enter` events will always trigger **before** the progress update and `leave` envents will trigger **after** the progress update.  
     * `start` and `end` will always trigger at their respective position.
     * 
     * Please review the event descriptions for details on the events and the event object that is passed to the callback.
     * 
     * @method ScrollMagic.Scene#progress
     * @example
     * // get the current scene progress
     * var progress = scene.progress();
     *
     * // set new scene progress
     * scene.progress(0.3);
     *
     * @fires {@link Scene.enter}, when used as setter
     * @fires {@link Scene.start}, when used as setter
     * @fires {@link Scene.progress}, when used as setter
     * @fires {@link Scene.end}, when used as setter
     * @fires {@link Scene.leave}, when used as setter
     *
     * @param {number} [progress] - The new progress value of the scene `[0-1]`.
     * @returns {number} `get` -  Current scene progress.
     * @returns {Scene} `set` -  Parent object for chaining.
     */
    this.progress = function (progress) {
      if (!arguments.length) {
        // get
        return _progress;
      } else {
        // set
        var doUpdate = false,
          oldState = _state,
          scrollDirection = _controller ? _controller.info("scrollDirection") : 'PAUSED',
          reverseOrForward = _options.reverse || progress >= _progress;
        if (_options.duration === 0) {
          // zero duration scenes
          doUpdate = _progress != progress;
          _progress = progress < 1 && reverseOrForward ? 0 : 1;
          _state = _progress === 0 ? SCENE_STATE_BEFORE : SCENE_STATE_DURING;
        } else {
          // scenes with start and end
          if (progress < 0 && _state !== SCENE_STATE_BEFORE && reverseOrForward) {
            // go back to initial state
            _progress = 0;
            _state = SCENE_STATE_BEFORE;
            doUpdate = true;
          } else if (progress >= 0 && progress < 1 && reverseOrForward) {
            _progress = progress;
            _state = SCENE_STATE_DURING;
            doUpdate = true;
          } else if (progress >= 1 && _state !== SCENE_STATE_AFTER) {
            _progress = 1;
            _state = SCENE_STATE_AFTER;
            doUpdate = true;
          } else if (_state === SCENE_STATE_DURING && !reverseOrForward) {
            updatePinState(); // in case we scrolled backwards mid-scene and reverse is disabled => update the pin position, so it doesn't move back as well.
          }
        }

        if (doUpdate) {
          // fire events
          var eventVars = {
              progress: _progress,
              state: _state,
              scrollDirection: scrollDirection
            },
            stateChanged = _state != oldState;
          var trigger = function trigger(eventName) {
            // tmp helper to simplify code
            Scene.trigger(eventName, eventVars);
          };
          if (stateChanged) {
            // enter events
            if (oldState !== SCENE_STATE_DURING) {
              trigger("enter");
              trigger(oldState === SCENE_STATE_BEFORE ? "start" : "end");
            }
          }
          trigger("progress");
          if (stateChanged) {
            // leave events
            if (_state !== SCENE_STATE_DURING) {
              trigger(_state === SCENE_STATE_BEFORE ? "start" : "end");
              trigger("leave");
            }
          }
        }
        return Scene;
      }
    };

    /**
     * Update the start and end scrollOffset of the container.
     * The positions reflect what the controller's scroll position will be at the start and end respectively.
     * Is called, when:
     *   - Scene event "change" is called with: offset, triggerHook, duration 
     *   - scroll container event "resize" is called
     *   - the position of the triggerElement changes
     *   - the controller changes -> addTo()
     * @private
     */
    var updateScrollOffset = function updateScrollOffset() {
      _scrollOffset = {
        start: _triggerPos + _options.offset
      };
      if (_controller && _options.triggerElement) {
        // take away triggerHook portion to get relative to top
        _scrollOffset.start -= _controller.info("size") * _options.triggerHook;
      }
      _scrollOffset.end = _scrollOffset.start + _options.duration;
    };

    /**
     * Updates the duration if set to a dynamic function.
     * This method is called when the scene is added to a controller and in regular intervals from the controller through scene.refresh().
     * 
     * @fires {@link Scene.change}, if the duration changed
     * @fires {@link Scene.shift}, if the duration changed
     *
     * @param {boolean} [suppressEvents=false] - If true the shift event will be suppressed.
     * @private
     */
    var updateDuration = function updateDuration(suppressEvents) {
      // update duration
      if (_durationUpdateMethod) {
        var varname = "duration";
        if (changeOption(varname, _durationUpdateMethod.call(Scene)) && !suppressEvents) {
          // set
          Scene.trigger("change", {
            what: varname,
            newval: _options[varname]
          });
          Scene.trigger("shift", {
            reason: varname
          });
        }
      }
    };

    /**
     * Updates the position of the triggerElement, if present.
     * This method is called ...
     *  - ... when the triggerElement is changed
     *  - ... when the scene is added to a (new) controller
     *  - ... in regular intervals from the controller through scene.refresh().
     * 
     * @fires {@link Scene.shift}, if the position changed
     *
     * @param {boolean} [suppressEvents=false] - If true the shift event will be suppressed.
     * @private
     */
    var updateTriggerElementPosition = function updateTriggerElementPosition(suppressEvents) {
      var elementPos = 0,
        telem = _options.triggerElement;
      if (_controller && telem) {
        var controllerInfo = _controller.info(),
          containerOffset = _util.get.offset(controllerInfo.container),
          // container position is needed because element offset is returned in relation to document, not in relation to container.
          param = controllerInfo.vertical ? "top" : "left"; // which param is of interest ?
        // if parent is spacer, use spacer position instead so correct start position is returned for pinned elements.
        while (telem.parentNode.hasAttribute(PIN_SPACER_ATTRIBUTE)) {
          telem = telem.parentNode;
        }
        var elementOffset = _util.get.offset(telem);
        if (!controllerInfo.isDocument) {
          // container is not the document root, so substract scroll Position to get correct trigger element position relative to scrollcontent
          containerOffset[param] -= _controller.scrollPos();
        }
        elementPos = elementOffset[param] - containerOffset[param];
      }
      var changed = elementPos != _triggerPos;
      _triggerPos = elementPos;
      if (changed && !suppressEvents) {
        Scene.trigger("shift", {
          reason: "triggerElementPosition"
        });
      }
    };

    /**
     * Trigger a shift event, when the container is resized and the triggerHook is > 1.
     * @private
     */
    var onContainerResize = function onContainerResize(e) {
      if (_options.triggerHook > 0) {
        Scene.trigger("shift", {
          reason: "containerResize"
        });
      }
    };
    var _validate = _util.extend(SCENE_OPTIONS.validate, {
      // validation for duration handled internally for reference to private var _durationMethod
      duration: function duration(val) {
        if (_util.type.String(val) && val.match(/^(\.|\d)*\d+%$/)) {
          // percentage value
          var perc = parseFloat(val) / 100;
          val = function val() {
            return _controller ? _controller.info("size") * perc : 0;
          };
        }
        if (_util.type.Function(val)) {
          // function
          _durationUpdateMethod = val;
          try {
            val = parseFloat(_durationUpdateMethod());
          } catch (e) {
            val = -1; // will cause error below
          }
        }
        // val has to be float
        val = parseFloat(val);
        if (!_util.type.Number(val) || val < 0) {
          if (_durationUpdateMethod) {
            _durationUpdateMethod = undefined;
            throw ["Invalid return value of supplied function for option \"duration\":", val];
          } else {
            throw ["Invalid value for option \"duration\":", val];
          }
        }
        return val;
      }
    });

    /**
     * Checks the validity of a specific or all options and reset to default if neccessary.
     * @private
     */
    var validateOption = function validateOption(check) {
      check = arguments.length ? [check] : Object.keys(_validate);
      check.forEach(function (optionName, key) {
        var value;
        if (_validate[optionName]) {
          // there is a validation method for this option
          try {
            // validate value
            value = _validate[optionName](_options[optionName]);
          } catch (e) {
            // validation failed -> reset to default
            value = DEFAULT_OPTIONS[optionName];
            var logMSG = _util.type.String(e) ? [e] : e;
            if (_util.type.Array(logMSG)) {
              logMSG[0] = "ERROR: " + logMSG[0];
              logMSG.unshift(1); // loglevel 1 for error msg
              log.apply(this, logMSG);
            } else {
              log(1, "ERROR: Problem executing validation callback for option '" + optionName + "':", e.message);
            }
          } finally {
            _options[optionName] = value;
          }
        }
      });
    };

    /**
     * Helper used by the setter/getters for scene options
     * @private
     */
    var changeOption = function changeOption(varname, newval) {
      var changed = false,
        oldval = _options[varname];
      if (_options[varname] != newval) {
        _options[varname] = newval;
        validateOption(varname); // resets to default if necessary
        changed = oldval != _options[varname];
      }
      return changed;
    };

    // generate getters/setters for all options
    var addSceneOption = function addSceneOption(optionName) {
      if (!Scene[optionName]) {
        Scene[optionName] = function (newVal) {
          if (!arguments.length) {
            // get
            return _options[optionName];
          } else {
            if (optionName === "duration") {
              // new duration is set, so any previously set function must be unset
              _durationUpdateMethod = undefined;
            }
            if (changeOption(optionName, newVal)) {
              // set
              Scene.trigger("change", {
                what: optionName,
                newval: _options[optionName]
              });
              if (SCENE_OPTIONS.shifts.indexOf(optionName) > -1) {
                Scene.trigger("shift", {
                  reason: optionName
                });
              }
            }
          }
          return Scene;
        };
      }
    };

    /**
     * **Get** or **Set** the duration option value.
     * As a setter it also accepts a function returning a numeric value.  
     * This is particularly useful for responsive setups.
     *
     * The duration is updated using the supplied function every time `Scene.refresh()` is called, which happens periodically from the controller (see ScrollMagic.Controller option `refreshInterval`).  
     * _**NOTE:** Be aware that it's an easy way to kill performance, if you supply a function that has high CPU demand.  
     * Even for size and position calculations it is recommended to use a variable to cache the value. (see example)  
     * This counts double if you use the same function for multiple scenes._
     *
     * @method ScrollMagic.Scene#duration
     * @example
     * // get the current duration value
     * var duration = scene.duration();
     *
     * // set a new duration
     * scene.duration(300);
     *
     * // use a function to automatically adjust the duration to the window height.
     * var durationValueCache;
     * function getDuration () {
     *   return durationValueCache;
     * }
     * function updateDuration (e) {
     *   durationValueCache = window.innerHeight;
     * }
     * $(window).on("resize", updateDuration); // update the duration when the window size changes
     * $(window).triggerHandler("resize"); // set to initial value
     * scene.duration(getDuration); // supply duration method
     *
     * @fires {@link Scene.change}, when used as setter
     * @fires {@link Scene.shift}, when used as setter
     * @param {(number|function)} [newDuration] - The new duration of the scene.
     * @returns {number} `get` -  Current scene duration.
     * @returns {Scene} `set` -  Parent object for chaining.
     */

    /**
     * **Get** or **Set** the offset option value.
     * @method ScrollMagic.Scene#offset
     * @example
     * // get the current offset
     * var offset = scene.offset();
     *
     * // set a new offset
     * scene.offset(100);
     *
     * @fires {@link Scene.change}, when used as setter
     * @fires {@link Scene.shift}, when used as setter
     * @param {number} [newOffset] - The new offset of the scene.
     * @returns {number} `get` -  Current scene offset.
     * @returns {Scene} `set` -  Parent object for chaining.
     */

    /**
     * **Get** or **Set** the triggerElement option value.
     * Does **not** fire `Scene.shift`, because changing the trigger Element doesn't necessarily mean the start position changes. This will be determined in `Scene.refresh()`, which is automatically triggered.
     * @method ScrollMagic.Scene#triggerElement
     * @example
     * // get the current triggerElement
     * var triggerElement = scene.triggerElement();
     *
     * // set a new triggerElement using a selector
     * scene.triggerElement("#trigger");
     * // set a new triggerElement using a DOM object
     * scene.triggerElement(document.getElementById("trigger"));
     *
     * @fires {@link Scene.change}, when used as setter
     * @param {(string|object)} [newTriggerElement] - The new trigger element for the scene.
     * @returns {(string|object)} `get` -  Current triggerElement.
     * @returns {Scene} `set` -  Parent object for chaining.
     */

    /**
     * **Get** or **Set** the triggerHook option value.
     * @method ScrollMagic.Scene#triggerHook
     * @example
     * // get the current triggerHook value
     * var triggerHook = scene.triggerHook();
     *
     * // set a new triggerHook using a string
     * scene.triggerHook("onLeave");
     * // set a new triggerHook using a number
     * scene.triggerHook(0.7);
     *
     * @fires {@link Scene.change}, when used as setter
     * @fires {@link Scene.shift}, when used as setter
     * @param {(number|string)} [newTriggerHook] - The new triggerHook of the scene. See {@link Scene} parameter description for value options.
     * @returns {number} `get` -  Current triggerHook (ALWAYS numerical).
     * @returns {Scene} `set` -  Parent object for chaining.
     */

    /**
     * **Get** or **Set** the reverse option value.
     * @method ScrollMagic.Scene#reverse
     * @example
     * // get the current reverse option
     * var reverse = scene.reverse();
     *
     * // set new reverse option
     * scene.reverse(false);
     *
     * @fires {@link Scene.change}, when used as setter
     * @param {boolean} [newReverse] - The new reverse setting of the scene.
     * @returns {boolean} `get` -  Current reverse option value.
     * @returns {Scene} `set` -  Parent object for chaining.
     */

    /**
     * **Get** or **Set** the loglevel option value.
     * @method ScrollMagic.Scene#loglevel
     * @example
     * // get the current loglevel
     * var loglevel = scene.loglevel();
     *
     * // set new loglevel
     * scene.loglevel(3);
     *
     * @fires {@link Scene.change}, when used as setter
     * @param {number} [newLoglevel] - The new loglevel setting of the scene. `[0-3]`
     * @returns {number} `get` -  Current loglevel.
     * @returns {Scene} `set` -  Parent object for chaining.
     */

    /**
     * **Get** the associated controller.
     * @method ScrollMagic.Scene#controller
     * @example
     * // get the controller of a scene
     * var controller = scene.controller();
     *
     * @returns {ScrollMagic.Controller} Parent controller or `undefined`
     */
    this.controller = function () {
      return _controller;
    };

    /**
     * **Get** the current state.
     * @method ScrollMagic.Scene#state
     * @example
     * // get the current state
     * var state = scene.state();
     *
     * @returns {string} `"BEFORE"`, `"DURING"` or `"AFTER"`
     */
    this.state = function () {
      return _state;
    };

    /**
     * **Get** the current scroll offset for the start of the scene.  
     * Mind, that the scrollOffset is related to the size of the container, if `triggerHook` is bigger than `0` (or `"onLeave"`).  
     * This means, that resizing the container or changing the `triggerHook` will influence the scene's start offset.
     * @method ScrollMagic.Scene#scrollOffset
     * @example
     * // get the current scroll offset for the start and end of the scene.
     * var start = scene.scrollOffset();
     * var end = scene.scrollOffset() + scene.duration();
     * console.log("the scene starts at", start, "and ends at", end);
     *
     * @returns {number} The scroll offset (of the container) at which the scene will trigger. Y value for vertical and X value for horizontal scrolls.
     */
    this.scrollOffset = function () {
      return _scrollOffset.start;
    };

    /**
     * **Get** the trigger position of the scene (including the value of the `offset` option).  
     * @method ScrollMagic.Scene#triggerPosition
     * @example
     * // get the scene's trigger position
     * var triggerPosition = scene.triggerPosition();
     *
     * @returns {number} Start position of the scene. Top position value for vertical and left position value for horizontal scrolls.
     */
    this.triggerPosition = function () {
      var pos = _options.offset; // the offset is the basis
      if (_controller) {
        // get the trigger position
        if (_options.triggerElement) {
          // Element as trigger
          pos += _triggerPos;
        } else {
          // return the height of the triggerHook to start at the beginning
          pos += _controller.info("size") * Scene.triggerHook();
        }
      }
      return pos;
    };
    var _pin, _pinOptions;
    Scene.on("shift.internal", function (e) {
      var durationChanged = e.reason === "duration";
      if (_state === SCENE_STATE_AFTER && durationChanged || _state === SCENE_STATE_DURING && _options.duration === 0) {
        // if [duration changed after a scene (inside scene progress updates pin position)] or [duration is 0, we are in pin phase and some other value changed].
        updatePinState();
      }
      if (durationChanged) {
        updatePinDimensions();
      }
    }).on("progress.internal", function (e) {
      updatePinState();
    }).on("add.internal", function (e) {
      updatePinDimensions();
    }).on("destroy.internal", function (e) {
      Scene.removePin(e.reset);
    });
    /**
     * Update the pin state.
     * @private
     */
    var updatePinState = function updatePinState(forceUnpin) {
      if (_pin && _controller) {
        var containerInfo = _controller.info(),
          pinTarget = _pinOptions.spacer.firstChild; // may be pin element or another spacer, if cascading pins
        if (!forceUnpin && _state === SCENE_STATE_DURING) {
          // during scene or if duration is 0 and we are past the trigger
          // pinned state
          if (_util.css(pinTarget, "position") != "fixed") {
            // change state before updating pin spacer (position changes due to fixed collapsing might occur.)
            _util.css(pinTarget, {
              "position": "fixed"
            });
            // update pin spacer
            updatePinDimensions();
          }
          var fixedPos = _util.get.offset(_pinOptions.spacer, true),
            // get viewport position of spacer
            scrollDistance = _options.reverse || _options.duration === 0 ? containerInfo.scrollPos - _scrollOffset.start // quicker
            : Math.round(_progress * _options.duration * 10) / 10; // if no reverse and during pin the position needs to be recalculated using the progress
          // add scrollDistance
          fixedPos[containerInfo.vertical ? "top" : "left"] += scrollDistance;

          // set new values
          _util.css(_pinOptions.spacer.firstChild, {
            top: fixedPos.top,
            left: fixedPos.left
          });
        } else {
          // unpinned state
          var newCSS = {
              position: _pinOptions.inFlow ? "relative" : "absolute",
              top: 0,
              left: 0
            },
            change = _util.css(pinTarget, "position") != newCSS.position;
          if (!_pinOptions.pushFollowers) {
            newCSS[containerInfo.vertical ? "top" : "left"] = _options.duration * _progress;
          } else if (_options.duration > 0) {
            // only concerns scenes with duration
            if (_state === SCENE_STATE_AFTER && parseFloat(_util.css(_pinOptions.spacer, "padding-top")) === 0) {
              change = true; // if in after state but havent updated spacer yet (jumped past pin)
            } else if (_state === SCENE_STATE_BEFORE && parseFloat(_util.css(_pinOptions.spacer, "padding-bottom")) === 0) {
              // before
              change = true; // jumped past fixed state upward direction
            }
          }
          // set new values
          _util.css(pinTarget, newCSS);
          if (change) {
            // update pin spacer if state changed
            updatePinDimensions();
          }
        }
      }
    };

    /**
     * Update the pin spacer and/or element size.
     * The size of the spacer needs to be updated whenever the duration of the scene changes, if it is to push down following elements.
     * @private
     */
    var updatePinDimensions = function updatePinDimensions() {
      if (_pin && _controller && _pinOptions.inFlow) {
        // no spacerresize, if original position is absolute
        var after = _state === SCENE_STATE_AFTER,
          before = _state === SCENE_STATE_BEFORE,
          during = _state === SCENE_STATE_DURING,
          vertical = _controller.info("vertical"),
          pinTarget = _pinOptions.spacer.firstChild,
          // usually the pined element but can also be another spacer (cascaded pins)
          marginCollapse = _util.isMarginCollapseType(_util.css(_pinOptions.spacer, "display")),
          css = {};

        // set new size
        // if relsize: spacer -> pin | else: pin -> spacer
        if (_pinOptions.relSize.width || _pinOptions.relSize.autoFullWidth) {
          if (during) {
            _util.css(_pin, {
              "width": _util.get.width(_pinOptions.spacer)
            });
          } else {
            _util.css(_pin, {
              "width": "100%"
            });
          }
        } else {
          // minwidth is needed for cascaded pins.
          css["min-width"] = _util.get.width(vertical ? _pin : pinTarget, true, true);
          css.width = during ? css["min-width"] : "auto";
        }
        if (_pinOptions.relSize.height) {
          if (during) {
            // the only padding the spacer should ever include is the duration (if pushFollowers = true), so we need to substract that.
            _util.css(_pin, {
              "height": _util.get.height(_pinOptions.spacer) - (_pinOptions.pushFollowers ? _options.duration : 0)
            });
          } else {
            _util.css(_pin, {
              "height": "100%"
            });
          }
        } else {
          // margin is only included if it's a cascaded pin to resolve an IE9 bug
          css["min-height"] = _util.get.height(vertical ? pinTarget : _pin, true, !marginCollapse); // needed for cascading pins
          css.height = during ? css["min-height"] : "auto";
        }

        // add space for duration if pushFollowers is true
        if (_pinOptions.pushFollowers) {
          css["padding" + (vertical ? "Top" : "Left")] = _options.duration * _progress;
          css["padding" + (vertical ? "Bottom" : "Right")] = _options.duration * (1 - _progress);
        }
        _util.css(_pinOptions.spacer, css);
      }
    };

    /**
     * Updates the Pin state (in certain scenarios)
     * If the controller container is not the document and we are mid-pin-phase scrolling or resizing the main document can result to wrong pin positions.
     * So this function is called on resize and scroll of the document.
     * @private
     */
    var updatePinInContainer = function updatePinInContainer() {
      if (_controller && _pin && _state === SCENE_STATE_DURING && !_controller.info("isDocument")) {
        updatePinState();
      }
    };

    /**
     * Updates the Pin spacer size state (in certain scenarios)
     * If container is resized during pin and relatively sized the size of the pin might need to be updated...
     * So this function is called on resize of the container.
     * @private
     */
    var updateRelativePinSpacer = function updateRelativePinSpacer() {
      if (_controller && _pin &&
      // well, duh
      _state === SCENE_STATE_DURING && (
      // element in pinned state?
      // is width or height relatively sized, but not in relation to body? then we need to recalc.
      (_pinOptions.relSize.width || _pinOptions.relSize.autoFullWidth) && _util.get.width(window) != _util.get.width(_pinOptions.spacer.parentNode) || _pinOptions.relSize.height && _util.get.height(window) != _util.get.height(_pinOptions.spacer.parentNode))) {
        updatePinDimensions();
      }
    };

    /**
     * Is called, when the mousewhel is used while over a pinned element inside a div container.
     * If the scene is in fixed state scroll events would be counted towards the body. This forwards the event to the scroll container.
     * @private
     */
    var onMousewheelOverPin = function onMousewheelOverPin(e) {
      if (_controller && _pin && _state === SCENE_STATE_DURING && !_controller.info("isDocument")) {
        // in pin state
        e.preventDefault();
        _controller._setScrollPos(_controller.info("scrollPos") - ((e.wheelDelta || e[_controller.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || -e.detail * 30));
      }
    };

    /**
     * Pin an element for the duration of the tween.  
     * If the scene duration is 0 the element will only be unpinned, if the user scrolls back past the start position.  
     * Make sure only one pin is applied to an element at the same time.
     * An element can be pinned multiple times, but only successively.
     * _**NOTE:** The option `pushFollowers` has no effect, when the scene duration is 0._
     * @method ScrollMagic.Scene#setPin
     * @example
     * // pin element and push all following elements down by the amount of the pin duration.
     * scene.setPin("#pin");
     *
     * // pin element and keeping all following elements in their place. The pinned element will move past them.
     * scene.setPin("#pin", {pushFollowers: false});
     *
     * @param {(string|object)} element - A Selector targeting an element or a DOM object that is supposed to be pinned.
     * @param {object} [settings] - settings for the pin
     * @param {boolean} [settings.pushFollowers=true] - If `true` following elements will be "pushed" down for the duration of the pin, if `false` the pinned element will just scroll past them.  
     Ignored, when duration is `0`.
     * @param {string} [settings.spacerClass="scrollmagic-pin-spacer"] - Classname of the pin spacer element, which is used to replace the element.
     *
     * @returns {Scene} Parent object for chaining.
     */
    this.setPin = function (element, settings) {
      var defaultSettings = {
        pushFollowers: true,
        spacerClass: "scrollmagic-pin-spacer"
      };
      settings = _util.extend({}, defaultSettings, settings);

      // validate Element
      element = _util.get.elements(element)[0];
      if (!element) {
        log(1, "ERROR calling method 'setPin()': Invalid pin element supplied.");
        return Scene; // cancel
      } else if (_util.css(element, "position") === "fixed") {
        log(1, "ERROR calling method 'setPin()': Pin does not work with elements that are positioned 'fixed'.");
        return Scene; // cancel
      }

      if (_pin) {
        // preexisting pin?
        if (_pin === element) {
          // same pin we already have -> do nothing
          return Scene; // cancel
        } else {
          // kill old pin
          Scene.removePin();
        }
      }
      _pin = element;
      var parentDisplay = _pin.parentNode.style.display,
        boundsParams = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
      _pin.parentNode.style.display = 'none'; // hack start to force css to return stylesheet values instead of calculated px values.
      var inFlow = _util.css(_pin, "position") != "absolute",
        pinCSS = _util.css(_pin, boundsParams.concat(["display"])),
        sizeCSS = _util.css(_pin, ["width", "height"]);
      _pin.parentNode.style.display = parentDisplay; // hack end.
      if (!inFlow && settings.pushFollowers) {
        log(2, "WARNING: If the pinned element is positioned absolutely pushFollowers will be disabled.");
        settings.pushFollowers = false;
      }
      window.setTimeout(function () {
        // wait until all finished, because with responsive duration it will only be set after scene is added to controller
        if (_pin && _options.duration === 0 && settings.pushFollowers) {
          log(2, "WARNING: pushFollowers =", true, "has no effect, when scene duration is 0.");
        }
      }, 0);

      // create spacer and insert
      var spacer = _pin.parentNode.insertBefore(document.createElement('div'), _pin),
        spacerCSS = _util.extend(pinCSS, {
          position: inFlow ? "relative" : "absolute",
          boxSizing: "content-box",
          mozBoxSizing: "content-box",
          webkitBoxSizing: "content-box"
        });
      if (!inFlow) {
        // copy size if positioned absolutely, to work for bottom/right positioned elements.
        _util.extend(spacerCSS, _util.css(_pin, ["width", "height"]));
      }
      _util.css(spacer, spacerCSS);
      spacer.setAttribute(PIN_SPACER_ATTRIBUTE, "");
      _util.addClass(spacer, settings.spacerClass);

      // set the pin Options
      _pinOptions = {
        spacer: spacer,
        relSize: {
          // save if size is defined using % values. if so, handle spacer resize differently...
          width: sizeCSS.width.slice(-1) === "%",
          height: sizeCSS.height.slice(-1) === "%",
          autoFullWidth: sizeCSS.width === "auto" && inFlow && _util.isMarginCollapseType(pinCSS.display)
        },
        pushFollowers: settings.pushFollowers,
        inFlow: inFlow
        // stores if the element takes up space in the document flow
      };

      if (!_pin.___origStyle) {
        _pin.___origStyle = {};
        var pinInlineCSS = _pin.style,
          copyStyles = boundsParams.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]);
        copyStyles.forEach(function (val) {
          _pin.___origStyle[val] = pinInlineCSS[val] || "";
        });
      }

      // if relative size, transfer it to spacer and make pin calculate it...
      if (_pinOptions.relSize.width) {
        _util.css(spacer, {
          width: sizeCSS.width
        });
      }
      if (_pinOptions.relSize.height) {
        _util.css(spacer, {
          height: sizeCSS.height
        });
      }

      // now place the pin element inside the spacer	
      spacer.appendChild(_pin);
      // and set new css
      _util.css(_pin, {
        position: inFlow ? "relative" : "absolute",
        margin: "auto",
        top: "auto",
        left: "auto",
        bottom: "auto",
        right: "auto"
      });
      if (_pinOptions.relSize.width || _pinOptions.relSize.autoFullWidth) {
        _util.css(_pin, {
          boxSizing: "border-box",
          mozBoxSizing: "border-box",
          webkitBoxSizing: "border-box"
        });
      }

      // add listener to document to update pin position in case controller is not the document.
      window.addEventListener('scroll', updatePinInContainer);
      window.addEventListener('resize', updatePinInContainer);
      window.addEventListener('resize', updateRelativePinSpacer);
      // add mousewheel listener to catch scrolls over fixed elements
      _pin.addEventListener("mousewheel", onMousewheelOverPin);
      _pin.addEventListener("DOMMouseScroll", onMousewheelOverPin);
      log(3, "added pin");

      // finally update the pin to init
      updatePinState();
      return Scene;
    };

    /**
     * Remove the pin from the scene.
     * @method ScrollMagic.Scene#removePin
     * @example
     * // remove the pin from the scene without resetting it (the spacer is not removed)
     * scene.removePin();
     *
     * // remove the pin from the scene and reset the pin element to its initial position (spacer is removed)
     * scene.removePin(true);
     *
     * @param {boolean} [reset=false] - If `false` the spacer will not be removed and the element's position will not be reset.
     * @returns {Scene} Parent object for chaining.
     */
    this.removePin = function (reset) {
      if (_pin) {
        if (_state === SCENE_STATE_DURING) {
          updatePinState(true); // force unpin at position
        }

        if (reset || !_controller) {
          // if there's no controller no progress was made anyway...
          var pinTarget = _pinOptions.spacer.firstChild; // usually the pin element, but may be another spacer (cascaded pins)...
          if (pinTarget.hasAttribute(PIN_SPACER_ATTRIBUTE)) {
            // copy margins to child spacer
            var style = _pinOptions.spacer.style,
              values = ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
            margins = {};
            values.forEach(function (val) {
              margins[val] = style[val] || "";
            });
            _util.css(pinTarget, margins);
          }
          _pinOptions.spacer.parentNode.insertBefore(pinTarget, _pinOptions.spacer);
          _pinOptions.spacer.parentNode.removeChild(_pinOptions.spacer);
          if (!_pin.parentNode.hasAttribute(PIN_SPACER_ATTRIBUTE)) {
            // if it's the last pin for this element -> restore inline styles
            // TODO: only correctly set for first pin (when cascading) - how to fix?
            _util.css(_pin, _pin.___origStyle);
            delete _pin.___origStyle;
          }
        }
        window.removeEventListener('scroll', updatePinInContainer);
        window.removeEventListener('resize', updatePinInContainer);
        window.removeEventListener('resize', updateRelativePinSpacer);
        _pin.removeEventListener("mousewheel", onMousewheelOverPin);
        _pin.removeEventListener("DOMMouseScroll", onMousewheelOverPin);
        _pin = undefined;
        log(3, "removed pin (reset: " + (reset ? "true" : "false") + ")");
      }
      return Scene;
    };
    var _cssClasses,
      _cssClassElems = [];
    Scene.on("destroy.internal", function (e) {
      Scene.removeClassToggle(e.reset);
    });
    /**
     * Define a css class modification while the scene is active.  
     * When the scene triggers the classes will be added to the supplied element and removed, when the scene is over.
     * If the scene duration is 0 the classes will only be removed if the user scrolls back past the start position.
     * @method ScrollMagic.Scene#setClassToggle
     * @example
     * // add the class 'myclass' to the element with the id 'my-elem' for the duration of the scene
     * scene.setClassToggle("#my-elem", "myclass");
     *
     * // add multiple classes to multiple elements defined by the selector '.classChange'
     * scene.setClassToggle(".classChange", "class1 class2 class3");
     *
     * @param {(string|object)} element - A Selector targeting one or more elements or a DOM object that is supposed to be modified.
     * @param {string} classes - One or more Classnames (separated by space) that should be added to the element during the scene.
     *
     * @returns {Scene} Parent object for chaining.
     */
    this.setClassToggle = function (element, classes) {
      var elems = _util.get.elements(element);
      if (elems.length === 0 || !_util.type.String(classes)) {
        log(1, "ERROR calling method 'setClassToggle()': Invalid " + (elems.length === 0 ? "element" : "classes") + " supplied.");
        return Scene;
      }
      if (_cssClassElems.length > 0) {
        // remove old ones
        Scene.removeClassToggle();
      }
      _cssClasses = classes;
      _cssClassElems = elems;
      Scene.on("enter.internal_class leave.internal_class", function (e) {
        var toggle = e.type === "enter" ? _util.addClass : _util.removeClass;
        _cssClassElems.forEach(function (elem, key) {
          toggle(elem, _cssClasses);
        });
      });
      return Scene;
    };

    /**
     * Remove the class binding from the scene.
     * @method ScrollMagic.Scene#removeClassToggle
     * @example
     * // remove class binding from the scene without reset
     * scene.removeClassToggle();
     *
     * // remove class binding and remove the changes it caused
     * scene.removeClassToggle(true);
     *
     * @param {boolean} [reset=false] - If `false` and the classes are currently active, they will remain on the element. If `true` they will be removed.
     * @returns {Scene} Parent object for chaining.
     */
    this.removeClassToggle = function (reset) {
      if (reset) {
        _cssClassElems.forEach(function (elem, key) {
          _util.removeClass(elem, _cssClasses);
        });
      }
      Scene.off("start.internal_class end.internal_class");
      _cssClasses = undefined;
      _cssClassElems = [];
      return Scene;
    };

    // INIT
    construct();
    return Scene;
  };

  // store pagewide scene options
  var SCENE_OPTIONS = {
    defaults: {
      duration: 0,
      offset: 0,
      triggerElement: undefined,
      triggerHook: 0.5,
      reverse: true,
      loglevel: 2
    },
    validate: {
      offset: function offset(val) {
        val = parseFloat(val);
        if (!_util.type.Number(val)) {
          throw ["Invalid value for option \"offset\":", val];
        }
        return val;
      },
      triggerElement: function triggerElement(val) {
        val = val || undefined;
        if (val) {
          var elem = _util.get.elements(val)[0];
          if (elem) {
            val = elem;
          } else {
            throw ["Element defined in option \"triggerElement\" was not found:", val];
          }
        }
        return val;
      },
      triggerHook: function triggerHook(val) {
        var translate = {
          "onCenter": 0.5,
          "onEnter": 1,
          "onLeave": 0
        };
        if (_util.type.Number(val)) {
          val = Math.max(0, Math.min(parseFloat(val), 1)); //  make sure its betweeen 0 and 1
        } else if (val in translate) {
          val = translate[val];
        } else {
          throw ["Invalid value for option \"triggerHook\": ", val];
        }
        return val;
      },
      reverse: function reverse(val) {
        return !!val; // force boolean
      },

      loglevel: function loglevel(val) {
        val = parseInt(val);
        if (!_util.type.Number(val) || val < 0 || val > 3) {
          throw ["Invalid value for option \"loglevel\":", val];
        }
        return val;
      }
    },
    // holder for  validation methods. duration validation is handled in 'getters-setters.js'
    shifts: ["duration", "offset", "triggerHook"]
    // list of options that trigger a `shift` event
  };
  /*
   * method used to add an option to ScrollMagic Scenes.
   * TODO: DOC (private for dev)
   */
  ScrollMagic.Scene.addOption = function (name, defaultValue, validationCallback, shifts) {
    if (!(name in SCENE_OPTIONS.defaults)) {
      SCENE_OPTIONS.defaults[name] = defaultValue;
      SCENE_OPTIONS.validate[name] = validationCallback;
      if (shifts) {
        SCENE_OPTIONS.shifts.push(name);
      }
    } else {
      ScrollMagic._util.log(1, "[static] ScrollMagic.Scene -> Cannot add Scene option '" + name + "', because it already exists.");
    }
  };
  // instance extension function for plugins
  // TODO: DOC (private for dev)
  ScrollMagic.Scene.extend = function (extension) {
    var oldClass = this;
    ScrollMagic.Scene = function () {
      oldClass.apply(this, arguments);
      this.$super = _util.extend({}, this); // copy parent state
      return extension.apply(this, arguments) || this;
    };
    _util.extend(ScrollMagic.Scene, oldClass); // copy properties
    ScrollMagic.Scene.prototype = oldClass.prototype; // copy prototype
    ScrollMagic.Scene.prototype.constructor = ScrollMagic.Scene; // restore constructor
  };

  /**
   * TODO: DOCS (private for dev)
   * @class
   * @private
   */

  ScrollMagic.Event = function (type, namespace, target, vars) {
    vars = vars || {};
    for (var key in vars) {
      this[key] = vars[key];
    }
    this.type = type;
    this.target = this.currentTarget = target;
    this.namespace = namespace || '';
    this.timeStamp = this.timestamp = Date.now();
    return this;
  };

  /*
   * TODO: DOCS (private for dev)
   */

  window._util = ScrollMagic._util = function (window) {
    var U = {},
      i;

    /**
     * ------------------------------
     * internal helpers
     * ------------------------------
     */

    // parse float and fall back to 0.
    var floatval = function floatval(number) {
      return parseFloat(number) || 0;
    };
    // get current style IE safe (otherwise IE would return calculated values for 'auto')
    var _getComputedStyle = function _getComputedStyle(elem) {
      return elem.currentStyle ? elem.currentStyle : window.getComputedStyle(elem);
    };

    // get element dimension (width or height)
    var _dimension = function _dimension(which, elem, outer, includeMargin) {
      elem = elem === document ? window : elem;
      if (elem === window) {
        includeMargin = false;
      } else if (!_type.DomElement(elem)) {
        return 0;
      }
      which = which.charAt(0).toUpperCase() + which.substr(1).toLowerCase();
      var dimension = (outer ? elem['offset' + which] || elem['outer' + which] : elem['client' + which] || elem['inner' + which]) || 0;
      if (outer && includeMargin) {
        var style = _getComputedStyle(elem);
        dimension += which === 'Height' ? floatval(style.marginTop) + floatval(style.marginBottom) : floatval(style.marginLeft) + floatval(style.marginRight);
      }
      return dimension;
    };
    // converts 'margin-top' into 'marginTop'
    var _camelCase = function _camelCase(str) {
      return str.replace(/^[^a-z]+([a-z])/g, '$1').replace(/-([a-z])/g, function (g) {
        return g[1].toUpperCase();
      });
    };

    /**
     * ------------------------------
     * external helpers
     * ------------------------------
     */

    // extend obj – same as jQuery.extend({}, objA, objB)
    U.extend = function (obj) {
      obj = obj || {};
      for (i = 1; i < arguments.length; i++) {
        if (!arguments[i]) {
          continue;
        }
        for (var key in arguments[i]) {
          if (arguments[i].hasOwnProperty(key)) {
            obj[key] = arguments[i][key];
          }
        }
      }
      return obj;
    };

    // check if a css display type results in margin-collapse or not
    U.isMarginCollapseType = function (str) {
      return ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(str) > -1;
    };

    // implementation of requestAnimationFrame
    // based on https://gist.github.com/paulirish/1579671
    var lastTime = 0,
      vendors = ['ms', 'moz', 'webkit', 'o'];
    var _requestAnimationFrame = window.requestAnimationFrame;
    var _cancelAnimationFrame = window.cancelAnimationFrame;
    // try vendor prefixes if the above doesn't work
    for (i = 0; !_requestAnimationFrame && i < vendors.length; ++i) {
      _requestAnimationFrame = window[vendors[i] + 'RequestAnimationFrame'];
      _cancelAnimationFrame = window[vendors[i] + 'CancelAnimationFrame'] || window[vendors[i] + 'CancelRequestAnimationFrame'];
    }

    // fallbacks
    if (!_requestAnimationFrame) {
      _requestAnimationFrame = function _requestAnimationFrame(callback) {
        var currTime = new Date().getTime(),
          timeToCall = Math.max(0, 16 - (currTime - lastTime)),
          id = window.setTimeout(function () {
            callback(currTime + timeToCall);
          }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
      };
    }
    if (!_cancelAnimationFrame) {
      _cancelAnimationFrame = function _cancelAnimationFrame(id) {
        window.clearTimeout(id);
      };
    }
    U.rAF = _requestAnimationFrame.bind(window);
    U.cAF = _cancelAnimationFrame.bind(window);
    var loglevels = ["error", "warn", "log"],
      console = window.console || {};
    console.log = console.log || function () {}; // no console log, well - do nothing then...
    // make sure methods for all levels exist.
    for (i = 0; i < loglevels.length; i++) {
      var method = loglevels[i];
      if (!console[method]) {
        console[method] = console.log; // prefer .log over nothing
      }
    }

    U.log = function (loglevel) {
      if (loglevel > loglevels.length || loglevel <= 0) loglevel = loglevels.length;
      var now = new Date(),
        time = ("0" + now.getHours()).slice(-2) + ":" + ("0" + now.getMinutes()).slice(-2) + ":" + ("0" + now.getSeconds()).slice(-2) + ":" + ("00" + now.getMilliseconds()).slice(-3),
        method = loglevels[loglevel - 1],
        args = Array.prototype.splice.call(arguments, 1),
        func = Function.prototype.bind.call(console[method], console);
      args.unshift(time);
      func.apply(console, args);
    };

    /**
     * ------------------------------
     * type testing
     * ------------------------------
     */

    var _type = U.type = function (v) {
      return Object.prototype.toString.call(v).replace(/^\[object (.+)\]$/, "$1").toLowerCase();
    };
    _type.String = function (v) {
      return _type(v) === 'string';
    };
    _type.Function = function (v) {
      return _type(v) === 'function';
    };
    _type.Array = function (v) {
      return Array.isArray(v);
    };
    _type.Number = function (v) {
      return !_type.Array(v) && v - parseFloat(v) + 1 >= 0;
    };
    _type.DomElement = function (o) {
      return (typeof HTMLElement === "undefined" ? "undefined" : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(HTMLElement)) === "object" ? o instanceof HTMLElement :
      //DOM2
      o && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(o) === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName === "string";
    };

    /**
     * ------------------------------
     * DOM Element info
     * ------------------------------
     */
    // always returns a list of matching DOM elements, from a selector, a DOM element or an list of elements or even an array of selectors
    var _get = U.get = {};
    _get.elements = function (selector) {
      var arr = [];
      if (_type.String(selector)) {
        try {
          selector = document.querySelectorAll(selector);
        } catch (e) {
          // invalid selector
          return arr;
        }
      }
      if (_type(selector) === 'nodelist' || _type.Array(selector)) {
        for (var i = 0, ref = arr.length = selector.length; i < ref; i++) {
          // list of elements
          var elem = selector[i];
          arr[i] = _type.DomElement(elem) ? elem : _get.elements(elem); // if not an element, try to resolve recursively
        }
      } else if (_type.DomElement(selector) || selector === document || selector === window) {
        arr = [selector]; // only the element
      }

      return arr;
    };
    // get scroll top value
    _get.scrollTop = function (elem) {
      if (window._autoscroll_) {
        if (elem && elem === vars.$slider[0]) {
          return parseInt((elem.style || {}).top) * -1 || 0;
        }
      } else {
        if (elem && (elem === _get.mCSB_container || elem.classList && elem.classList.contains('mCSB_container'))) {
          return parseInt(elem.style.top) * -1 || 0;
        }
      }
      if (elem && typeof elem.scrollTop === 'number') {
        return elem.scrollTop;
      }
      if (window._autoscroll_) {
        if (vars.$slider[0]) {
          return parseInt((vars.$slider[0].style || {}).top) * -1 || 0;
        }
      } else {
        if (_get.mCSB_container) {
          return parseInt(_get.mCSB_container.style.top) * -1 || 0;
        }
      }
      return window.pageYOffset || 0;
    };
    // get scroll left value
    _get.scrollLeft = function (elem) {
      if (window._autoscroll_) {
        if (elem && elem === vars.$slider[0]) {
          return parseInt((elem.style || {}).left) * -1 || 0;
        }
      } else {
        if (elem && (elem === _get.mCSB_container || elem.classList.contains('mCSB_container'))) {
          return parseInt(elem.style.left) * -1 || 0;
        }
      }
      if (elem && typeof elem.scrollLeft === 'number') {
        return elem.scrollLeft;
      }
      if (window._autoscroll_) {
        if (vars.$slider[0]) {
          return parseInt((vars.$slider[0].style || {}).left) * -1 || 0;
        }
      } else {
        if (_get.mCSB_container) {
          return parseInt(_get.mCSB_container.style.left) * -1 || 0;
        }
      }
      return window.pageXOffset || 0;
    };
    // get element height
    _get.width = function (elem, outer, includeMargin) {
      return _dimension('width', elem, outer, includeMargin);
    };
    // get element width
    _get.height = function (elem, outer, includeMargin) {
      return _dimension('height', elem, outer, includeMargin);
    };

    // get element position (optionally relative to viewport)
    _get.offset = function (elem, relativeToViewport) {
      var offset = {
        top: 0,
        left: 0
      };
      if (elem && elem.getBoundingClientRect) {
        // check if available
        var rect = elem.getBoundingClientRect();
        offset.top = rect.top;
        offset.left = rect.left;
        if (!relativeToViewport) {
          // clientRect is by default relative to viewport...
          offset.top += _get.scrollTop();
          offset.left += _get.scrollLeft();
        }
      }
      return offset;
    };

    /**
     * ------------------------------
     * DOM Element manipulation
     * ------------------------------
     */

    U.addClass = function (elem, classname) {
      if (classname) {
        if (elem.classList) elem.classList.add(classname);else elem.className += ' ' + classname;
      }
    };
    U.removeClass = function (elem, classname) {
      if (classname) {
        if (elem.classList) elem.classList.remove(classname);else elem.className = elem.className.replace(new RegExp('(^|\\b)' + classname.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
      }
    };
    // if options is string -> returns css value
    // if options is array -> returns object with css value pairs
    // if options is object -> set new css values
    U.css = function (elem, options) {
      if (_type.String(options)) {
        return _getComputedStyle(elem)[_camelCase(options)];
      } else if (_type.Array(options)) {
        var obj = {},
          style = _getComputedStyle(elem);
        options.forEach(function (option, key) {
          obj[option] = style[_camelCase(option)];
        });
        return obj;
      } else {
        for (var option in options) {
          var val = options[option];
          if (val == parseFloat(val)) {
            // assume pixel for seemingly numerical values
            val += 'px';
          }
          elem.style[_camelCase(option)] = val;
        }
      }
    };
    return U;
  }(window || {});
  ScrollMagic.Scene.prototype.addIndicators = function () {
    ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling addIndicators() due to missing Plugin \'debug.addIndicators\'. Please make sure to include plugins/debug.addIndicators.js');
    return this;
  };
  ScrollMagic.Scene.prototype.removeIndicators = function () {
    ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling removeIndicators() due to missing Plugin \'debug.addIndicators\'. Please make sure to include plugins/debug.addIndicators.js');
    return this;
  };
  ScrollMagic.Scene.prototype.setTween = function () {
    ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling setTween() due to missing Plugin \'animation.gsap\'. Please make sure to include plugins/animation.gsap.js');
    return this;
  };
  ScrollMagic.Scene.prototype.removeTween = function () {
    ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling removeTween() due to missing Plugin \'animation.gsap\'. Please make sure to include plugins/animation.gsap.js');
    return this;
  };
  ScrollMagic.Scene.prototype.setVelocity = function () {
    ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling setVelocity() due to missing Plugin \'animation.velocity\'. Please make sure to include plugins/animation.velocity.js');
    return this;
  };
  ScrollMagic.Scene.prototype.removeVelocity = function () {
    ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling removeVelocity() due to missing Plugin \'animation.velocity\'. Please make sure to include plugins/animation.velocity.js');
    return this;
  };
  return ScrollMagic;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

/******/ });
//# sourceMappingURL=main.js.map