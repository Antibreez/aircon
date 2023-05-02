import "./vendor";
import vars from "./helpers";
import "sticky-kit/dist/sticky-kit";
import "jquery-validation";
import "../../node_modules/jquery-validation/dist/additional-methods.js";
import "../../node_modules/jquery-validation/dist/localization/messages_ru.js";
import inputmask from "inputmask/dist/jquery.inputmask";
import select2 from "select2";
import datetimepicker from "jquery-datetimepicker";
import Swiper, { Navigation, Pagination, EffectFade } from "swiper";
import { fancybox } from "@fancyapps/fancybox";
import nanoScroller from "nanoscroller";

Swiper.use([Navigation, Pagination, EffectFade]);

const $document = $(document);

const $window = $(window);

const $html = $("html");

const $body = $("body");

$.datetimepicker.setLocale("ru");

$.validator.addMethod(
	"regex",
	function (value, element, regexp) {
		if (regexp && regexp.constructor != RegExp) {
			regexp = new RegExp(regexp[0], regexp[1]);
		} else if (regexp.global) {
			regexp.lastIndex = 0;
		}

		return this.optional(element) || regexp.test(value);
	},
	"Неверный формат"
);

let app = {
	global: {
		init() {
			$(".js-goto").on("click", (e) => {
				let $target = $(
					$(e.currentTarget).data("target") ||
						$(e.currentTarget).attr("href")
				);

				if ($target.length) {
					e.preventDefault();
					window.scrollTo(0, $target.offset().top - 125);
				}
			});

			$document.on("click", ".js-toggle-class", (e) => {
				e.preventDefault();

				let options = $(e.currentTarget).data();

				switch (options.type) {
					case "add":
						$html.addClass(options.class);
						break;
					case "remove":
						$html.removeClass(options.class);
						break;
					case "toggle":
						$html.toggleClass(options.class);
						break;
					default:
						$html.toggleClass(options.class);
						break;
				}
			});

			$("[data-fancybox]").fancybox({
				touch: false,
				autoFocus: false,
				backFocus: false,
			});

			$("head").append(`<style type="text/css">
				html {
					--compensate-scrollbar:${
						(window.innerWidth -
							document.documentElement.clientWidth) /
						-2
					}px;
				}
				</style>`);

			$body.css({
				"--width": $window.outerWidth(),
			});
			$window.on("resize", () => {
				$body.css({
					"--width": $window.outerWidth(),
				});
			});

			app.anime.init();
			app.loadMore.init();

			if (app.getURLParam($(".header__location").data("param"))) {
				localStorage.confirmLocation = "yes";
			}

			if (localStorage.confirmLocation !== "yes") {
				setTimeout(() => {
					$html.addClass("is-location-confirm");
				}, 2000);
			}

			$(".header__location__confirm").on("click", (e) => {
				e.preventDefault();
				localStorage.confirmLocation = "yes";
				$html.removeClass("is-location-confirm");
			});

			$(".js-show-hide").on("click", (e) => {
				const $this = $(e.currentTarget);

				const $target = $($this.data("target"));

				e.preventDefault();
				$this.toggleClass("is-active");
				if ($this.hasClass("is-active")) {
					$this.text($this.data("on"));
					$target.removeClass("is-hidden");
				} else {
					$this.text($this.data("off"));
					$target.addClass("is-hidden");
					if (vars.isMobile()) {
						window.scrollTo(
							0,
							$this.offset().top - $window.outerHeight() / 2
						);
					}
				}
			});

			$document.on("click", ".js-set-value", (e) => {
				$(`input[value="${$(e.currentTarget).data("value")}"]`).prop(
					"checked",
					true
				);
			});

			app.analytics();
		},
	},
	getURLParam(param, url) {
		if (url) {
			return new URL(url).searchParams.get(param);
		}

		return new URL(window.location.href).searchParams.get(param);
	},
	header: {
		init($header) {
			$header.find(".header__search-open").on("click", (e) => {
				e.preventDefault();
				e.stopPropagation();

				$html.addClass("is-show-search");
				setTimeout(() => {
					$header.find(".header__search__field").trigger("focus");
				}, 400);
			});

			$document.on("click", (e) => {
				let $target = $(e.target);

				if (!$target.closest(".header__search").length) {
					$html.removeClass("is-show-search");
				}
			});

			$header.find(".header__burger").on("click", () => {
				$html.toggleClass("is-show-mobile-menu");
			});

			$window.on("scroll", () => {
				if ($window.scrollTop() > 0) {
					$header.addClass("is-fixed");
				} else {
					$header.removeClass("is-fixed");
				}
			});
		},
	},
	vw(px) {
		const base = 1440;
		const baseMobile = 375;

		let output = px;

		if ($window.outerWidth() < 1440) {
			output = (px / base) * $window.outerWidth();
		}

		if ($window.outerWidth() < 1024) {
			output = (px / baseMobile) * $window.outerWidth();
		}

		return output;
	},
	scriptLoading(src, callback) {
		let script = document.createElement("script");
		let loaded;

		script.setAttribute("src", src);
		if (callback) {
			script.onreadystatechange = script.onload = () => {
				if (!loaded) {
					callback();
				}
				loaded = true;
			};
		}
		document.getElementsByTagName("head")[0].appendChild(script);
	},
	intro: {
		init($module) {
			const $video = $module.find(".intro__video");

			const video = $video.find("video")[0];

			if ($video.find("video").length) {
				video.addEventListener("playing", () => {
					$video.addClass("is-playing");
					$video.removeClass("is-paused");

					if (!$video.find("video").is("[autoplay]")) {
						$video.find("video").prop("controls", true);
					}
				});

				video.addEventListener("pause", () => {
					$video.addClass("is-paused");
				});

				video.addEventListener("ended", () => {
					$video.removeClass("is-playing");

					if (!$video.find("video").is("[autoplay]")) {
						const src = video.currentSrc;
						const poster = video.poster;

						video.src = "";
						video.src = src;
						video.poster = "";
						video.poster = poster;
						$video.find("video").prop("controls", false);
					}
				});
			}

			$module.find(".intro__video__play").on("click", (e) => {
				e.preventDefault();
				video.play();
			});

			$module.find(".intro__video__pause").on("click", (e) => {
				e.preventDefault();
				video.pause();
			});
		},
	},
	technologies: {
		init($module) {
			new Swiper($module.find(".swiper-container")[0], {
				slidesPerView: "auto",
				spaceBetween: app.vw(24),
				pagination: {
					el: $module.find(".progress")[0],
					type: "progressbar",
				},
			});
		},
	},
	seriesComfortGallery: {
		init($module) {
			new Swiper($module.find(".swiper-container")[0], {
				slidesPerView: 1,
				spaceBetween: app.vw(24),
				breakpoints: {
					1024: {
						slidesPerView: "auto",
					},
				},
				pagination: {
					el: $module.find(".progress")[0],
					type: "progressbar",
				},
			});
		},
	},
	equipment: {
		init($module) {
			const $slides = $module.find(".swiper-slide");

			const $items = $module.find(".equipment__list__item");

			const slider = new Swiper($module.find(".swiper-container")[0], {
				slidesPerView: 1,
				effect: "fade",
				speed: 0,
			});

			$items.hover(
				(e) => {
					const $this = $(e.currentTarget);

					const index = $this
						.closest(".equipment__list__col")
						.index();

					const $active = $slides.filter(".swiper-slide-active");

					if ($slides.eq(index).hasClass("is-animate")) {
						$slides.eq(index).removeClass("is-animate");
					}
					setTimeout(() => {
						slider.slideTo(index, 0);
						$slides.removeClass("is-prev is-animate");
						$active.addClass("is-prev is-animate");
					}, 10);
				},
				() => {}
			);

			$window.on("load", () => {
				$module.find(".equipment__side__fixed").stick_in_parent({
					offset_top: 100,
				});
			});
		},
	},
	catalog: {
		init($module) {
			const $slides = $module.find(".swiper-slide");

			const slider = new Swiper($module.find(".swiper-container")[0], {
				slidesPerView: 1,
				navigation: {
					prevEl: $module.find(".catalog__slider__prev")[0],
					nextEl: $module.find(".catalog__slider__next")[0],
				},
				pagination: {
					el: $module.find(".progress")[0],
					type: "progressbar",
				},
				breakpoints: {
					1024: {
						slidesPerView: 3,
						allowTouchMove: $slides.length > 3,
					},
				},
			});

			$window
				.on("scroll.catalog", () => {
					if ($window.outerWidth() > 1023 && $slides.length < 4) {
						$module.find(".progress").hide();
						$module.find(".catalog__slider__prev").hide();
						$module.find(".catalog__slider__next").hide();
					} else {
						$module.find(".progress").show();
						$module.find(".catalog__slider__prev").show();
						$module.find(".catalog__slider__next").show();
					}
				})
				.trigger("scroll.catalog");
		},
	},
	index: {
		init($index) {
			let controller = new ScrollMagic.Controller({
				refreshInterval: 0,
			});

			// app-subscribe

			$index.find(".app-subscribe__container").css({
				opacity: 0,
			});

			new ScrollMagic.Scene({
				triggerElement: $index.find(".app-subscribe-trigger")[0],
				duration: window.outerHeight / 4 + 100,
				// offset: app.vh(540),
				triggerHook: 0.15,
			})
				.setPin($index.find(".app-subscribe")[0])
				.addTo(controller);

			new ScrollMagic.Scene({
				triggerElement: $index.find(".app-subscribe-trigger")[0],
				duration: window.outerHeight / 2,
				offset: (window.outerHeight + window.outerHeight / 2) * -1,
				triggerHook: 0,
			})
				.setTween(
					new TimelineMax().from(
						$index.find(".app-subscribe__cloud")[0],
						1,
						{
							autoAlpha: 0,
							ease: Linear.easeNone,
						},
						0
					)
				)
				.addTo(controller);

			new ScrollMagic.Scene({
				triggerElement: $index.find(".app-subscribe-trigger")[0],
				duration: window.outerHeight / 4,
				offset: (window.outerHeight / 5) * -1,
				triggerHook: 0,
			})
				.setTween(
					new TimelineMax().to(
						$index.find(".app-subscribe__cloud")[0],
						1,
						{
							width: $(
								".app-subscribe__logo__o svg"
							).outerWidth(),
							height: $(
								".app-subscribe__logo__o svg"
							).outerWidth(),
							borderRadius: 500,
							ease: Linear.easeNone,
						},
						0
					)
				)
				.addTo(controller)
				.on("enter", () => {
					$index.find(".app-subscribe__container").css({
						opacity: "",
					});
				})
				.on("leave", (event) => {
					if (event.state === "BEFORE") {
						$index.find(".app-subscribe__container").css({
							opacity: 0,
						});
					}
				});

			new ScrollMagic.Scene({
				triggerElement: $index.find(".app-subscribe-trigger")[0],
				duration: 100,
				offset: (window.outerHeight / 5) * -1 + window.outerHeight / 4,
				triggerHook: 0,
			})
				.setTween(
					new TimelineMax().to(
						$index.find(".app-subscribe__cloud")[0],
						1,
						{
							autoAlpha: 0,
							ease: Linear.easeNone,
						},
						0
					)
				)
				.addTo(controller);

			// comfort app

			let needIndex = 0;

			const slider = {
				canvas: $index.find(".comfort-app__progress")[0],
				ctx: null,
				imageFrom: 0,
				imageTo: 141,
				imageLoaded: 0,
				images: [],
				width: 500,
				height: 500,
				canvasVisible: false,
				setupImages() {
					const path = slider.canvas.dataset.path;

					for (let i = slider.imageTo; i >= slider.imageFrom; i--) {
						let image = new Image();

						image.src = `${path}${i}.png`;

						slider.images[slider.imageTo - i] = image;

						image.onload = () => {
							if (slider.imageLoaded === needIndex) {
								slider.drawBG(needIndex);
							}
							slider.imageLoaded++;
						};
					}
				},
				drawBG(index) {
					if (index > slider.imageTo) {
						index = slider.imageTo;
					}

					slider.ctx.clearRect(
						0,
						0,
						slider.canvas.width,
						slider.canvas.height
					);

					slider.ctx.drawImage(
						slider.images[index],
						0,
						0,
						slider.canvas.width,
						slider.canvas.height
					);
				},
				init() {
					slider.ctx = slider.canvas.getContext("2d");

					slider.canvas.width = slider.width;
					slider.canvas.height = slider.height;

					slider.setupImages();
				},
			};

			slider.init();

			let comfortAppScrollTextOffset = $index
				.find(".comfort-app__scroll-text__text")
				.outerWidth();

			if (!vars.isMobile()) {
				new ScrollMagic.Scene({
					triggerElement: $index.find(".comfort-app-trigger")[0],
					duration: window.outerHeight * 4,
					// offset: app.vh(540),
					triggerHook: 0,
				})
					.setPin($index.find(".comfort-app")[0])
					.addTo(controller)
					.on("progress", (event) => {
						let progress = event.progress * 2;

						if (progress >= 1) {
							progress = 1;
						}
						needIndex = parseInt(141 * progress, 10);
						slider.drawBG(needIndex);
					})
					.on("enter", () => {
						$index.find(".comfort-app-wrapper").css({
							visibility: "",
						});
					})
					.on("leave", (event) => {
						if (event.state === "AFTER") {
							$index.find(".comfort-app-wrapper").css({
								visibility: "hidden",
							});
						}
					});
			} else {
				new ScrollMagic.Scene({
					triggerElement: $index.find(".comfort-app-trigger")[0],
					duration: window.outerHeight * 2,
					// offset: app.vh(540),
					triggerHook: 0,
				})
					.setPin($index.find(".comfort-app")[0])
					.addTo(controller)
					.on("progress", (event) => {
						let progress = event.progress * 2;

						if (progress >= 1) {
							progress = 1;
						}
						needIndex = parseInt(141 * progress, 10);
						slider.drawBG(needIndex);
					});
			}

			new ScrollMagic.Scene({
				triggerElement: $index.find(".comfort-app-trigger")[0],
				duration: window.outerHeight * 2,
				offset: window.outerHeight / -2,
				triggerHook: 0,
			})
				.setTween(
					new TimelineMax().to(
						$index.find(".comfort-app__scroll-text__text")[0],
						1,
						{
							x: comfortAppScrollTextOffset * -1,
							ease: Linear.easeNone,
						},
						0
					)
				)
				.addTo(controller);

			if (!vars.isMobile()) {
				new ScrollMagic.Scene({
					triggerElement: $index.find(".comfort-app-trigger")[0],
					duration: window.outerHeight / 5,
					offset: window.outerHeight * 1.8,
					triggerHook: 0,
				})
					.setTween(
						new TimelineMax().to(
							$index.find(".comfort-app__scroll-text__text")[0],
							1,
							{
								autoAlpha: 0,
								ease: Linear.easeNone,
							},
							0
						)
					)
					.addTo(controller);

				new ScrollMagic.Scene({
					triggerElement: $index.find(".comfort-app-trigger")[0],
					duration: window.outerHeight / 2,
					offset: window.outerHeight * 2,
					triggerHook: 0,
				})
					.setTween(
						new TimelineMax()
							.from(
								$index.find(".comfort-app__image__1")[0],
								1,
								{
									x:
										$index
											.find(".comfort-app__image__1")
											.offset().left -
										$window.outerWidth() / 2 -
										$index
											.find(".comfort-app__image__1")
											.outerWidth() /
											2,
									ease: Linear.easeNone,
								},
								0
							)
							.from(
								$index.find(".comfort-app__content")[0],
								1,
								{
									autoAlpha: 0,
									ease: Linear.easeNone,
								},
								0
							)
							.from(
								$index.find(".comfort-app__image__2")[0],
								1,
								{
									autoAlpha: 0,
									y: 50,
									ease: Linear.easeNone,
								},
								0
							)
					)
					.addTo(controller);

				new ScrollMagic.Scene({
					triggerElement: $index.find(".climate-online-trigger")[0],
					duration: window.outerHeight * (2 / 5),
					triggerHook: 0,
				})
					.setTween(
						new TimelineMax()
							.to(
								$index.find(".comfort-app .container")[0],
								1,
								{
									autoAlpha: 0,
									ease: Linear.easeNone,
								},
								0
							)
							.to(
								$index.find(".comfort-app__image__2")[0],
								1,
								{
									y: 50,
									ease: Linear.easeNone,
								},
								0
							)
					)
					.addTo(controller);

				new ScrollMagic.Scene({
					triggerElement: $index.find(".climate-online-trigger")[0],
					duration: window.outerHeight / 2,
					triggerHook: 0,
				})
					.setTween(
						new TimelineMax().to(
							$index.find(".comfort-app__bg")[0],
							1,
							{
								width: $index
									.find(".climate-online__container")
									.outerWidth(),
								height: $index
									.find(".climate-online__container")
									.outerHeight(),
								ease: Linear.easeNone,
							},
							0
						)
					)
					.addTo(controller);

				new ScrollMagic.Scene({
					triggerElement: $index.find(".climate-online-trigger")[0],
					duration: window.outerHeight * (1 / 3),
					offset: window.outerHeight * (2 / 5),
					triggerHook: 0,
				})
					.setTween(
						new TimelineMax().to(
							$index.find(".comfort-app__bg")[0],
							1,
							{
								autoAlpha: 0,
								ease: Linear.easeNone,
							},
							0
						)
					)
					.addTo(controller);
			} else {
				new ScrollMagic.Scene({
					triggerElement: $index.find(".comfort-app-trigger")[0],
					duration: window.outerHeight / 4,
					offset: window.outerHeight * 1.5,
					triggerHook: 0,
				})
					.setTween(
						new TimelineMax().from(
							$index.find(".comfort-app__content")[0],
							1,
							{
								autoAlpha: 0,
								ease: Linear.easeNone,
							},
							0
						)
					)
					.addTo(controller);
			}

			// climate online

			if (!vars.isMobile()) {
				new ScrollMagic.Scene({
					triggerElement: $index.find(".climate-online-trigger")[0],
					duration: window.outerHeight * 2.5,
					// offset: app.vh(540),
					triggerHook: 0,
				})
					.setPin($index.find(".climate-online")[0])
					.addTo(controller);

				new ScrollMagic.Scene({
					triggerElement: $index.find(".climate-online-trigger")[0],
					duration: window.outerHeight * 0.25,
					offset: window.outerHeight * 1.5,
					triggerHook: 0,
				})
					.setTween(
						new TimelineMax().to(
							$index.find(
								".climate-online__conditioner__image"
							)[0],
							1,
							{
								scale: 1.2,
								autoAlpha: 0,
								ease: Linear.easeNone,
							},
							0
						)
					)
					.addTo(controller);

				new ScrollMagic.Scene({
					triggerElement: $index.find(".climate-online-trigger")[0],
					duration: window.outerHeight * 0.5,
					offset: window.outerHeight * 1.5,
					triggerHook: 0,
				})
					.setTween(
						new TimelineMax().from(
							$index.find(
								".climate-online__conditioner__pulse"
							)[0],
							1,
							{
								scale: 0.4,
								autoAlpha: 0,
								ease: Linear.easeNone,
							},
							0
						)
					)
					.addTo(controller);
			}
		},
	},
	pageCloud: {
		init($module) {
			let controller = new ScrollMagic.Controller({
				refreshInterval: 0,
			});

			new ScrollMagic.Scene({
				triggerElement: $module.find(".page-cloud__intro__trigger")[0],
				duration: window.outerHeight,
				offset:
					$module.find(".page-cloud__intro__trigger").offset().top *
					-1,
				triggerHook: 0,
			})
				.setTween(
					new TimelineMax().to(
						$module.find(".page-cloud__intro__image__scroll")[0],
						1,
						{
							x:
								($module
									.find(".page-cloud__intro__image__scroll")
									.outerWidth() -
									$module
										.find(".page-cloud__intro__image")
										.outerWidth()) *
								1.5,
							ease: Linear.easeNone,
						},
						0
					)
				)
				.addTo(controller);

			$module
				.find(".page-cloud__mobile__tabs__list a")
				.on("click", (e) => {
					let $this = $(e.currentTarget);

					e.preventDefault();
					$module
						.find(".page-cloud__mobile__tabs__list a")
						.removeClass("is-active");
					$module
						.find(".page-cloud__mobile__tabs__item")
						.removeClass("is-active");
					$this.addClass("is-active");
					$module
						.find(
							`.page-cloud__mobile__tabs__item[data-tab="${$this.data(
								"tab"
							)}"]`
						)
						.addClass("is-active");
				});
		},
	},
	anime: {
		init() {
			$(".anime").each((index, item) => {
				const $item = $(item);

				$item.on("inview", (event, isInView) => {
					if (isInView) {
						$item.addClass("animated");
						$item.off("inview");
					}
				});
			});
		},
	},
	slider: {
		init($slider) {
			new Swiper($slider.find(".swiper-container")[0], {
				slidesPerView: 1,
				pagination: {
					el: $slider.find(".progress")[0],
					type: "progressbar",
				},
			});
		},
	},
	articles: {
		init($slider) {
			new Swiper($slider.find(".swiper-container")[0], {
				slidesPerView: 1,
				spaceBetween: app.vw(24),
				breakpoints: {
					1024: {
						slidesPerView: 3,
					},
				},
				pagination: {
					el: $slider.find(".progress")[0],
					type: "progressbar",
				},
			});
		},
	},
	accordion: {
		init($module) {
			const $items = $module.find(".accordion__item");

			$module.find(".accordion__item__header").on("click", (e) => {
				const $this = $(e.currentTarget);

				const $item = $this.closest(".accordion__item");

				const $content = $item.find(".accordion__item__content");

				e.preventDefault();

				if ($item.hasClass("is-active")) {
					$item.removeClass("is-active");
					$content.slideUp(400);
				} else {
					const $activeItems = $items.filter(".is-active");

					$activeItems.removeClass("is-active");

					if (vars.isMobile()) {
						$activeItems.find(".accordion__item__content").hide();
					} else {
						$activeItems
							.find(".accordion__item__content")
							.slideUp(400);
					}

					$item.addClass("is-active");
					$content.slideDown(400, () => {
						$("html, body").animate(
							{
								scrollTop: $this.offset().top - 100,
							},
							100
						);
					});
				}
			});
		},
	},
	catalogItem: {
		init($module) {
			if (!vars.isMobile()) {
				const $imageItem = $module.find(".catalog__item__image__item");

				const slideTo = (index) => {
					$imageItem.removeClass("is-active");
					$module
						.find(".catalog__item__image__hover__item")
						.removeClass("is-active");
					$imageItem.eq(index).addClass("is-active");
					$module
						.find(".catalog__item__image__hover__col")
						.eq(index)
						.find(".catalog__item__image__hover__item")
						.addClass("is-active");
				};

				if ($imageItem.length > 1) {
					let slideToLast = false;

					$module.hover(
						() => {
							if (!slideToLast) {
								slideTo($imageItem.length - 1);
								slideToLast = true;
							}
						},
						() => {}
					);

					$module.find(".catalog__item__image__hover__item").hover(
						(e) => {
							slideTo(
								$(e.currentTarget)
									.closest(
										".catalog__item__image__hover__col"
									)
									.index()
							);
						},
						() => {}
					);
				}
			}
		},
	},
	mask: {
		init($mask) {
			$mask.inputmask($mask.data("mask").toString(), {
				showMaskOnHover: false,
				clearIncomplete: true,
			});
		},
	},
	calendar: {
		init($input) {
			$input.attr("type", "text");
			$input.inputmask("99.99.9999", {
				showMaskOnHover: false,
				clearIncomplete: true,
			});
			$input.datetimepicker({
				minDate: parseInt($input.data("limit"), 10) === -1 ? 0 : false,
				maxDate: parseInt($input.data("limit"), 10) === 1 ? 0 : false,
				timepicker: false,
				format: "d.m.Y",
				scrollInput: false,
				dayOfWeekStart: 1,
			});
			$input.on("change", () => {
				try {
					$input.valid();
				} catch {}
			});
		},
	},
	select: {
		init($select) {
			$select.find("select").select2({
				minimumResultsForSearch: $select.data("search") ? 5 : Infinity,
				dropdownParent:
					$select.data("type") === "outside"
						? $body
						: $select.find(".input__field"),
				language: {
					noResults() {
						return "Ничего не найдено";
					},
					searching() {
						return "Поиск...";
					},
				},
			});

			$select.find("select").on("change", () => {
				try {
					$select.find("select").valid();
				} catch {}
			});
		},
	},
	selectLocation: {
		init($select) {
			$select.find("select").select2({
				dropdownParent: $select.find(".input__field"),
				minimumInputLength: 3,
				language: {
					noResults() {
						return "Ничего не найдено";
					},
					inputTooShort(e) {
						return `Нужно ввести минимум ${e.minimum} буквы`;
					},
					searching() {
						return "Поиск...";
					},
				},
				ajax: {
					url: $select.data("ajax"),
					dataType: "json",
				},
			});

			$select.find("select").on("change", (e) => {
				window.location.href = $(e.currentTarget).val();
			});
		},
	},
	multipleFile: {
		init($multiple) {
			const $list = $multiple.find(".multiple-file__list");
			const $template = $multiple.find(".multiple-file__template");
			const max = parseInt($multiple.data("max"), 10);

			const addField = () => {
				if ($list.find(".multiple-file__item").length < max) {
					$list.prepend($template.html());
				}
			};

			$multiple.on(
				"change",
				".multiple-file__item__upload input",
				(e) => {
					let $this = $(e.currentTarget);
					let $item = $this.closest(".multiple-file__item");
					let $error = $item.find(
						".multiple-file__item__upload__error"
					);
					let validate = $this.data("validate");

					$item.removeClass("is-error");
					if (e.target.files.length) {
						let sum = 0;

						for (
							let index = 0;
							index < e.target.files.length;
							index++
						) {
							sum += e.target.files[index].size;
						}

						if (sum <= validate.size * 1000000) {
							$item
								.find(".multiple-file__item__file__name")
								.text(e.target.files[0].name);
							$item.addClass("is-active");
							addField();
						} else {
							$error.text(validate.messages.size);
							$item.addClass("is-error");
							$this.val("");
						}
					} else {
						$item.removeClass("is-active");
					}
				}
			);

			$multiple.on("click", ".multiple-file__item__file__remove", (e) => {
				let count = $list.find(".multiple-file__item").length;
				let countActive = $list.find(
					".multiple-file__item.is-active"
				).length;

				e.preventDefault();
				$(e.currentTarget).closest(".multiple-file__item").remove();

				if (countActive === max || count === 1) {
					addField();
				}
			});

			addField();
		},
	},
	form: {
		init($form) {
			$form.find(".input__field__eye").on("click", (e) => {
				let $this = $(e.currentTarget);
				let $input = $this.closest(".input__field").find("input");

				e.preventDefault();

				if ($input.attr("type") === "password") {
					$this.addClass("is-eye-view");
					$input.attr("type", "text");
				} else {
					$this.removeClass("is-eye-view");
					$input.attr("type", "password");
				}
			});

			let validator = $form.validate({
				lang: "ru",
				rules: {},

				highlight(element, errorClass, validClass) {
					if (
						element.type === "radio" ||
						element.type === "checkbox"
					) {
						this.findByName(element.name)
							.addClass(errorClass)
							.removeClass(validClass);
					} else {
						$(element).addClass(errorClass).removeClass(validClass);
					}
				},

				unhighlight(element, errorClass, validClass) {
					if (
						element.type === "radio" ||
						element.type === "checkbox"
					) {
						this.findByName(element.name)
							.removeClass(errorClass)
							.addClass(validClass);
					} else {
						$(element).removeClass(errorClass).addClass(validClass);
					}
				},

				submitHandler(form) {
					if ($form.data("type") === "submit") {
						form.submit();
						console.log($form.attr("event"));
						if (
							typeof dataLayer !== "undefined" &&
							$form.data("event")
						) {
							dataLayer.push({
								event: $form.data("event"),
								eventCategory: $form.data("event"),
								eventAction: "send",
							});
						}
					} else {
						let preparedData;
						let processData;
						let contentType;

						$form.removeClass("is-sended is-error");

						$form
							.find(".form__button .button")
							.addClass("is-loading");
						console.log($form.attr("event"));
						$.ajax({
							type: $form.attr("method"),
							url: $form.attr("action"),
							data: preparedData
								? preparedData
								: $form.serialize(),
							dataType: "json",
							processData,
							contentType,
							success(result) {
								var event = $form.attr("event");
								eventMake($form.attr("event"));

								if (result.result === true) {
									$form[0].reset();
									$.fancybox.close();
									if (
										typeof dataLayer !== "undefined" &&
										$form.data("event")
									) {
										dataLayer.push({
											event: $form.data("event"),
											eventCategory: $form.data("event"),
											eventAction: "send",
										});
									}
								}
								$.fancybox.open(
									`<div class="modal modal--alert">
									<div class="h3 form__title">${result.title}</div>
									<div class="form__text">${result.message}</div>
								</div>`,
									{
										touch: false,
										autoFocus: false,
									}
								);
								$form
									.find(".form__button .button")
									.removeClass("is-loading");
							},
						});
					}
				},
			});

			setTimeout(() => {
				$form.find("[data-validation]").each((index, item) => {
					$(item).rules("add", $(item).data("validation"));
				});
			}, 1000);
		},
	},
	tab: {
		init($tab) {
			let $tabLinks = $tab.find("> .tab-list > ul a");
			let $tabItems = $tab.find("> .tab__content > .tab__item");

			if ($tabLinks.length === 0) {
				$tabLinks = $tab.find(".tab-list > ul a");
				$tabItems = $tab.find(".tab__item");
			}

			if ($tab.data("type") === "hash") {
				let $active = $tabLinks.filter(
					`[data-tab="${window.location.hash.replace("#", "")}"]`
				);

				if ($active.length) {
					$tabLinks.removeClass("is-active");
					$tabItems.removeClass("is-active");
					$active.addClass("is-active");
					$tabItems
						.filter(`[data-tab="${$active.data("tab")}"]`)
						.addClass("is-active");
				}
			}

			let $tabLinksActive = $tabLinks.filter(".is-active");

			$tabLinks.on("click", (e) => {
				let $this = $(e.currentTarget);

				let $target = $tabItems.filter(
					`[data-tab="${$this.data("tab")}"]`
				);

				e.preventDefault();
				$tabLinks.removeClass("is-active");
				$tabItems.removeClass("is-active");
				$this.addClass("is-active");
				$target.addClass("is-active");

				if ($tab.data("type") === "hash") {
					window.location.hash = $this.data("tab");
				}

				if (vars.isMobile()) {
					$tab.find(".nano").nanoScroller();
					$tab.find(".tab-list ul").animate(
						{
							scrollLeft:
								$this.offset().left -
								($window.outerWidth() / 2 -
									$this.outerWidth() / 2) +
								$tab.find(".tab-list ul").scrollLeft(),
						},
						400
					);
				}
			});

			if (vars.isMobile()) {
				$tab.find(".tab-list ul").animate(
					{
						scrollLeft:
							$tabLinksActive.offset().left -
							($window.outerWidth() / 2 -
								$tabLinksActive.outerWidth() / 2),
					},
					400
				);
			}

			if ($tabLinks.filter(".is-active").length === 0) {
				$tabLinks.eq(0).trigger("click");
			}
		},
	},
	contactsMap: {
		init($map) {
			let options = $map.data();

			app.scriptLoading("//api-maps.yandex.ru/2.1/?lang=ru_RU", () => {
				ymaps.ready(() => {
					let map = new ymaps.Map(
						$map[0],
						{
							center: [options.lat, options.lng],
							zoom: options.zoom,
							controls: ["zoomControl"],
						},
						{}
					);

					map.geoObjects.add(
						new ymaps.Placemark(
							[options.lat, options.lng],
							{},
							{
								iconLayout: "default#image",
								iconImageHref: options.icon,
								iconImageSize: [40, 60],
								iconImageOffset: [-20, -60],
							}
						)
					);
				});
			});
		},
	},
	productSlider: {
		init($slider) {
			const slider = new Swiper($slider.find(".swiper-container")[0], {
				slidesPerView: 1,
				breakpoints: {
					1024: {
						slidesPerView: "auto",
					},
				},
				pagination: {
					el: $slider.find(".progress")[0],
					type: "progressbar",
				},
			});
		},
	},
	productMap: {
		init($map) {
			let options = $map.data();

			app.scriptLoading("//api-maps.yandex.ru/2.1/?lang=ru_RU", () => {
				ymaps.ready(() => {
					let MyBalloonLayout =
						ymaps.templateLayoutFactory.createClass(
							'<div class="popover top">' +
								'<div class="arrow"></div>' +
								'<div class="popover-inner">' +
								"$[[options.contentLayout observeSize minWidth=235 maxWidth=235 maxHeight=350]]" +
								"</div>" +
								"</div>",
							{
								/**
								 * Строит экземпляр макета на основе шаблона и добавляет его в родительский HTML-элемент.
								 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#build
								 * @function
								 * @name build
								 */
								build: function () {
									this.constructor.superclass.build.call(
										this
									);

									this._$element = $(
										".popover",
										this.getParentElement()
									);

									this.applyElementOffset();

									this._$element
										.find(".close")
										.on(
											"click",
											$.proxy(this.onCloseClick, this)
										);
								},

								/**
								 * Удаляет содержимое макета из DOM.
								 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#clear
								 * @function
								 * @name clear
								 */
								clear: function () {
									this._$element.find(".close").off("click");

									this.constructor.superclass.clear.call(
										this
									);
								},

								/**
								 * Метод будет вызван системой шаблонов АПИ при изменении размеров вложенного макета.
								 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
								 * @function
								 * @name onSublayoutSizeChange
								 */
								onSublayoutSizeChange: function () {
									MyBalloonLayout.superclass.onSublayoutSizeChange.apply(
										this,
										arguments
									);

									if (!this._isElement(this._$element)) {
										return;
									}

									this.applyElementOffset();

									this.events.fire("shapechange");
								},

								/**
								 * Сдвигаем балун, чтобы "хвостик" указывал на точку привязки.
								 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
								 * @function
								 * @name applyElementOffset
								 */
								applyElementOffset: function () {
									this._$element.css({
										left: -(
											this._$element[0].offsetWidth / 2
										),
										top: -(
											this._$element[0].offsetHeight +
											this._$element.find(".arrow")[0]
												.offsetHeight
										),
									});
								},

								/**
								 * Закрывает балун при клике на крестик, кидая событие "userclose" на макете.
								 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
								 * @function
								 * @name onCloseClick
								 */
								onCloseClick: function (e) {
									e.preventDefault();

									this.events.fire("userclose");
								},

								/**
								 * Используется для автопозиционирования (balloonAutoPan).
								 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/ILayout.xml#getClientBounds
								 * @function
								 * @name getClientBounds
								 * @returns {Number[][]} Координаты левого верхнего и правого нижнего углов шаблона относительно точки привязки.
								 */
								getShape: function () {
									if (!this._isElement(this._$element)) {
										return MyBalloonLayout.superclass.getShape.call(
											this
										);
									}

									var position = this._$element.position();

									return new ymaps.shape.Rectangle(
										new ymaps.geometry.pixel.Rectangle([
											[position.left, position.top],
											[
												position.left +
													this._$element[0]
														.offsetWidth,
												position.top +
													this._$element[0]
														.offsetHeight +
													this._$element.find(
														".arrow"
													)[0].offsetHeight,
											],
										])
									);
								},

								/**
								 * Проверяем наличие элемента (в ИЕ и Опере его еще может не быть).
								 * @function
								 * @private
								 * @name _isElement
								 * @param {jQuery} [element] Элемент.
								 * @returns {Boolean} Флаг наличия.
								 */
								_isElement: function (element) {
									return (
										element &&
										element[0] &&
										element.find(".arrow")[0]
									);
								},
							}
						);

					let MyBalloonContentLayout =
						ymaps.templateLayoutFactory.createClass(
							`<div class="map-pane">
							<h3 class="popover-title map-pane__name">$[properties.balloonHeader]</h3>
							<div class="popover-content">$[properties.balloonContent]</div>
						</div>`
						);

					let map = new ymaps.Map(
						$map[0],
						{
							center: [options.lat, options.lng],
							zoom: 13,
							controls: ["zoomControl"],
						},
						{}
					);

					options.points.forEach((point) => {
						map.geoObjects.add(
							new ymaps.Placemark(
								[point.lat, point.lng],
								{
									balloonHeader: point.name,
									balloonContent: `
								<ul class="map-pane__list">
									<li>${point.address}</li>
									<li><a href="tel:${point.tel}">${point.tel}</a></li>
									<li><a href="https://${point.site}" target="_blank">${point.site}</a></li>
								</ul>
							`,
								},
								{
									balloonShadow: false,
									balloonLayout: MyBalloonLayout,
									balloonContentLayout:
										MyBalloonContentLayout,
									balloonPanelMaxMapArea: 0,
									hideIconOnBalloonOpen: false,
									iconLayout: "default#image",
									iconImageHref: options.icon,
									iconImageSize: [22, 32],
									iconImageOffset: [-11, -32],
								}
							)
						);
					});

					if (map.geoObjects.getBounds()) {
						map.setBounds(map.geoObjects.getBounds(), {
							zoomMargin: 30,
						});
					}

					$map.data("map", map);
				});
			});
		},
	},
	offices: {
		init($module) {
			$module.find(".page-about__offices__toggle a").on("click", (e) => {
				e.preventDefault();

				$module.toggleClass("is-show-list");
				if ($module.hasClass("is-show-list")) {
					$module
						.find(".page-about__offices__toggle a")
						.text(
							$module
								.find(".page-about__offices__map")
								.data("label")
						);
				} else {
					$module
						.find(".page-about__offices__toggle a")
						.text(
							$module
								.find(".page-about__offices__list")
								.data("label")
						);
				}
			});
		},
	},
	animateNumber(obj, initVal, lastVal, duration) {
		let startTime = null;
		let currentTime = Date.now();

		const step = (currentTime) => {
			if (!startTime) {
				startTime = currentTime;
			}

			const progress = Math.min((currentTime - startTime) / duration, 1);

			obj.innerHTML = Math.floor(
				progress * (lastVal - initVal) + initVal
			);

			if (progress < 1) {
				window.requestAnimationFrame(step);
			} else {
				window.cancelAnimationFrame(window.requestAnimationFrame(step));
			}
		};

		window.requestAnimationFrame(step);
	},
	aboutHistory: {
		init($module) {
			let controller = new ScrollMagic.Controller({
				refreshInterval: 0,
			});

			let $year = $module.find(".page-about__history__year");

			let $yearValue = $year.find(".js-year");

			$window.on("load", () => {
				setTimeout(() => {
					if (!vars.isMobile()) {
						$module
							.find(".page-about__history__item-scroll")
							.each((index, item) => {
								let $scroll = $(item);
								let $trigger = $scroll.find(
									".page-about__history__item-scroll__trigger"
								);
								let $item = $scroll.find(
									".page-about__history__item"
								);

								new ScrollMagic.Scene({
									triggerElement: $trigger[0],
									duration: window.outerHeight,
									triggerHook: 0.35,
								})
									.setPin($item[0])
									.addTo(controller)
									.on("leave", (event) => {
										if (
											event.scrollDirection === "REVERSE"
										) {
											if (index !== 0) {
												app.animateNumber(
													$yearValue[0],
													parseInt(
														$yearValue.text(),
														10
													),
													parseInt(
														$module
															.find(
																".page-about__history__item-scroll"
															)
															.eq(index - 1)
															.find(
																".page-about__history__item"
															)
															.data("year"),
														10
													),
													500
												);
											}
										} else if (
											event.scrollDirection === "FORWARD"
										) {
											if (
												$module
													.find(
														".page-about__history__item-scroll"
													)
													.eq(index + 1).length
											) {
												app.animateNumber(
													$yearValue[0],
													parseInt(
														$yearValue.text(),
														10
													),
													parseInt(
														$module
															.find(
																".page-about__history__item-scroll"
															)
															.eq(index + 1)
															.find(
																".page-about__history__item"
															)
															.data("year"),
														10
													),
													500
												);
											}
										}
									});

								if (index !== 0) {
									new ScrollMagic.Scene({
										triggerElement: $trigger[0],
										duration: window.outerHeight * 0.075,
										triggerHook: 0.35,
									})
										.setTween(
											new TimelineMax().from(
												$item[0],
												1,
												{
													autoAlpha: 0,
													ease: Linear.easeNone,
												},
												0
											)
										)
										.addTo(controller);
								}

								if (
									index !==
									$module.find(
										".page-about__history__item-scroll"
									).length -
										1
								) {
									new ScrollMagic.Scene({
										triggerElement: $trigger[0],
										duration: window.outerHeight * 0.075,
										offset:
											window.outerHeight -
											window.outerHeight * 0.25,
										triggerHook: 0.35,
									})
										.setTween(
											new TimelineMax().to(
												$item[0],
												1,
												{
													autoAlpha: 0,
													ease: Linear.easeNone,
												},
												0
											)
										)
										.addTo(controller);
								}
							});

						new ScrollMagic.Scene({
							triggerElement: $module.find(
								".page-about__history__item-scroll:first-child .page-about__history__item-scroll__trigger"
							)[0],
							duration:
								$module
									.find(".page-about__history__list")
									.outerHeight() -
								$module
									.find(".page-about__history__year-scroll")
									.outerHeight(),
							triggerHook: 0.35,
						})
							.setPin(
								$module.find(
									".page-about__history__year-scroll"
								)[0]
							)
							.addTo(controller);
					} else {
						let found = $module
							.find(".page-about__history__item-scroll")
							.eq(0)
							.find(".page-about__history__item")
							.data("year");

						$window.on("scroll", () => {
							$module
								.find(".page-about__history__item-scroll")
								.each((index, item) => {
									let $item = $(item);

									if (
										$yearValue.offset().top >=
										$item.offset().top
									) {
										found = $item
											.find(".page-about__history__item")
											.data("year");
										if (
											index ===
											$module.find(
												".page-about__history__item-scroll"
											).length -
												1
										) {
											app.animateNumber(
												$yearValue[0],
												parseInt($yearValue.text(), 10),
												parseInt(
													$item
														.find(
															".page-about__history__item"
														)
														.data("year"),
													10
												),
												500
											);
										}
									} else {
										app.animateNumber(
											$yearValue[0],
											parseInt($yearValue.text(), 10),
											parseInt(found, 10),
											500
										);

										return false;
									}
								});
						});

						new ScrollMagic.Scene({
							triggerElement: $module.find(
								".page-about__history__item-scroll:first-child .page-about__history__item-scroll__trigger"
							)[0],
							duration:
								$module
									.find(".page-about__history__list")
									.outerHeight() - $year.outerHeight(),
							triggerHook: 0.35,
						})
							.setPin(
								$module.find(
									".page-about__history__year-scroll"
								)[0]
							)
							.addTo(controller);
					}
				}, 250);
			});
		},
	},
	table: {
		init($module) {
			let $tr = $module.find("tr");

			$tr.hover(
				(e) => {
					let $thisTr = $(e.currentTarget);

					let $thisTd = $thisTr.find("td");

					let rowspan = parseInt($thisTd.attr("rowspan"), 10);

					for (let i = $thisTr.index() - 1; i >= 0; i--) {
						let $findTd = $tr.eq(i).find("td[rowspan]");
						let findRowspan = parseInt($findTd.attr("rowspan"), 10);

						if (
							$findTd.length &&
							i + findRowspan > $thisTr.index()
						) {
							$thisTr = $findTd.closest("tr");
							rowspan = findRowspan;

							break;
						}
					}

					if (rowspan > 1) {
						for (
							let i = $thisTr.index();
							i < $thisTr.index() + rowspan;
							i++
						) {
							$tr.eq(i).addClass("is-hover");
						}
					}
				},
				() => {
					$tr.removeClass("is-hover");
				}
			);
		},
	},
	nano: {
		init($nano) {
			$nano.find(".nano").nanoScroller();
		},
	},
	dealers: {
		init($module) {
			let $map = $module.find(".page-dealers__map");

			let options = $map.data();

			let $filter = $module.find(".page-dealers__filter");

			let $mapList = $module.find(".page-dealers__map-list");

			let $list = $module.find(".page-dealers__list__row");

			let map = null;

			let markers = [];

			let setMarker = (marker, active = false) => {
				if (marker.options.pin) {
					marker.options.set(
						"iconImageHref",
						marker.options.pin.image
					);
					marker.options.set("iconImageSize", [
						marker.options.pin.w,
						marker.options.pin.h,
					]);
					marker.options.set("iconImageOffset", [
						-marker.options.pin.w / 2,
						-marker.options.pin.h,
					]);
				} else if (active) {
					marker.options.set("iconImageHref", options.pinActive);
					marker.options.set("iconImageSize", [64, 64]);
					marker.options.set("iconImageOffset", [-32, -32]);
				} else {
					marker.options.set("iconImageHref", options.pin);
					marker.options.set("iconImageSize", [32, 32]);
					marker.options.set("iconImageOffset", [-16, -16]);
				}
			};

			let setMarkers = () => {
				map.geoObjects.removeAll();

				markers = [];

				$module.find(".page-dealers__map-item").each((index, item) => {
					let $item = $(item);

					// console.log($item.data('type') === 'main' ? options.pinMain : options.pin)

					let marker = new ymaps.Placemark(
						[
							parseFloat($item.data("lat")),
							parseFloat($item.data("lng")),
						],
						{},
						{
							iconLayout: "default#image",
							iconImageHref: options.pin,
							iconImageSize: [32, 32],
							iconImageOffset: [-16, -16],
						}
					);

					if ($item.data("type") === "main") {
						marker.options.pin = {
							image: options.pinMain,
							w: 120,
							h: 57,
						};
						marker.options.set(
							"iconImageHref",
							marker.options.pin.image
						);
						marker.options.set("iconImageSize", [
							marker.options.pin.w,
							marker.options.pin.h,
						]);
						marker.options.set("iconImageOffset", [
							-marker.options.pin.w / 2,
							-marker.options.pin.h,
						]);
					}

					markers.push(marker);

					marker.events.add("click", () => {
						markers.forEach((markerItem) => {
							if ($item.data("type") !== "main") {
								setMarker(markerItem);
							}
						});
						$module
							.find(".page-dealers__map-item")
							.removeClass("is-active");
						$item.addClass("is-active");
						if ($item.data("type") !== "main") {
							setMarker(marker, true);
						}
					});

					marker.events.add("mouseenter", () => {
						if ($item.data("type") !== "main") {
							setMarker(marker, true);
						}
					});

					marker.events.add("mouseleave", () => {
						if (
							!$item.hasClass("is-active") &&
							$item.data("type") !== "main"
						) {
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

			app.scriptLoading("//api-maps.yandex.ru/2.1/?lang=ru_RU", () => {
				ymaps.ready(() => {
					map = new ymaps.Map(
						$map[0],
						{
							center: [55.755829, 37.617627],
							zoom: 6,
							controls: ["zoomControl"],
						},
						{}
					);

					setMarkers();

					$map.data("map", map);
				});
			});

			$module.on("click", ".page-dealers__map-item__close", (e) => {
				e.preventDefault();
				$(e.currentTarget)
					.closest(".page-dealers__map-item")
					.removeClass("is-active");
				markers.forEach((markerItem) => {
					setMarker(markerItem);
				});
			});

			$module.find(".page-dealers__filter__type a").on("click", (e) => {
				let $this = $(e.currentTarget);

				e.preventDefault();
				$this.toggleClass("is-active");
				$module
					.find(".page-dealers__map-item")
					.removeClass("is-active");
				markers.forEach((markerItem) => {
					setMarker(markerItem);
				});
				if ($this.hasClass("is-active")) {
					$module.addClass("is-show-list");
					$this.text($this.data("on"));
				} else {
					$module.removeClass("is-show-list");
					$this.text($this.data("off"));
					setTimeout(() => {
						if (map.geoObjects.getBounds()) {
							map.setBounds(map.geoObjects.getBounds());
						}
					}, 250);
				}
			});

			$module.find(".page-dealers__filter__tab").on("click", (e) => {
				let $this = $(e.currentTarget);

				e.preventDefault();
				if (!$this.hasClass("is-active")) {
					const $input = $this.find("input");

					$module
						.find(".page-dealers__filter__tab")
						.removeClass("is-active");
					$this.addClass("is-active");
					$input.prop("checked", true).trigger("change");
					if ($input.val() === "regions") {
						$module
							.find(".page-dealers__filter__item--city")
							.addClass("is-hidden");
					} else {
						$module
							.find(".page-dealers__filter__item--city")
							.removeClass("is-hidden");
					}
				}
			});

			$filter
				.on("change", () => {
					if (!$module.hasClass("is-loading")) {
						$module.addClass("is-loading");
						$.ajax({
							type: $filter.attr("method"),
							url: $filter.attr("action"),
							data: $filter.serialize(),
							dataType: "json",
							success(response) {
								$mapList.html(response["map-list"]);
								$list.html(response.list);
								if (map) {
									setMarkers();
								}
								$module.removeClass("is-loading");
							},
						});
					}
				})
				.trigger("change");
		},
	},
	becomeDealer: {
		init($module) {
			let form = new Swiper(
				$module.find(".page-become-dealer__form .swiper-container")[0],
				{
					allowTouchMove: false,
					autoHeight: true,
					breakpoints: {
						1024: {
							autoHeight: false,
						},
					},
				}
			);

			if (!form.el) {
				return;
			}

			form.on("slideChange", () => {
				if (form.activeIndex > 0) {
					$module
						.find(".page-become-dealer__order__text__hidden")
						.removeClass("is-hidden");
				}
			});

			$module
				.find(".page-become-dealer__form__item__next")
				.on("click", (e) => {
					let $required = $(e.currentTarget)
						.closest(".page-become-dealer__form__item")
						.find("[required]");

					e.preventDefault();
					if (
						$required.length === 0 ||
						$(e.currentTarget)
							.closest(".page-become-dealer__form__item")
							.find("[required]")
							.valid()
					) {
						form.slideNext();
					}
				});

			$module
				.find(".page-become-dealer__form__item__back")
				.on("click", (e) => {
					e.preventDefault();
					form.slidePrev();
				});

			$window.on("load", () => {
				form.update();
			});
		},
	},
	loadMore: {
		init() {
			if (window.loadMore === "inited") {
				return false;
			}

			$("[data-list]").each((index, list) => {
				const $list = $(list);

				if ($list.data("ajax")) {
					$.ajax({
						type: "get",
						url: $list.data("ajax"),
						success(response) {
							$list.append(response);
						},
					});
				}
			});

			$document.on("click", ".js-load-more a", (e) => {
				const $this = $(e.currentTarget);
				const $parent = $this.closest(".js-load-more");
				const $list = $(`[data-list="${$parent.data("target")}"]`);
				const offsetTop = $parent.offset().top;

				e.preventDefault();
				console.log($list.data("ajax"));
				if (!$this.hasClass("is-loading")) {
					$this.addClass("is-loading");
					$.ajax({
						type: "get",
						url: $list.data("ajax"),
						data: {
							page: $this.data("page"),
						},
						success(response) {
							$parent.remove();
							$list.append(response);
							window.scrollTo(0, offsetTop - 125);
						},
					});
				}
			});

			window.loadMore = "inited";
		},
	},
	pageSearch: {
		init($module) {
			const $field = $module.find(".page-search__field");

			const $fieldInput = $module.find(".page-search__field input");

			$fieldInput.on("keyup change", () => {
				if ($fieldInput.val().trim()) {
					$field.addClass("is-filled");
				} else {
					$field.removeClass("is-filled");
				}
			});

			$module.find(".page-search__field__reset").on("click", (e) => {
				e.preventDefault();
				$fieldInput.val("").trigger("change");
			});
		},
	},
	up: {
		init($up) {
			$window
				.on("scroll.up", () => {
					if ($window.scrollTop() > $window.outerHeight()) {
						$up.addClass("is-show");
					} else {
						$up.removeClass("is-show");
					}
				})
				.trigger("scroll.up");

			$up.on("click", (e) => {
				e.preventDefault();
				window.scrollTo(0, 0);
			});
		},
	},
	analytics() {
		$document.on("click", 'a[href^="tel:"]', (e) => {
			dataLayer.push({
				event: "Phone",
				eventCategory: "Phone",
				eventAction: "click",
				eventLabel: $(e.currentTarget).text().trim(),
			});
		});

		$document.on("click", 'a[href^="mailto:"]', (e) => {
			dataLayer.push({
				event: "Email",
				eventCategory: "Email",
				eventAction: "click",
				eventLabel: $(e.currentTarget).text().trim(),
			});
		});

		$document.on("click", ".page-partners__button a", (e) => {
			dataLayer.push({
				event: "Registration",
				eventCategory: "Registration",
				eventAction: "click",
				eventLabel: $(e.currentTarget).attr("href"),
			});
		});
	},
};

app.global.init();

window.initApps = () => {
	$("[data-app]").each((index, item) => {
		let $this = $(item);
		let split = $this.data("app").split("||");

		$.each(split, (appIndex, appName) => {
			let appNameCamel = false;

			if (appName.indexOf("-") !== -1) {
				appNameCamel = appName
					.replace(/(-|\s)(\S)/gu, (m) => m.toUpperCase())
					.replace(/-/gu, "");
			}

			if (app[appName] && $this.data(`${appName}-init`) !== true) {
				app[appName].init($this);
				$this.data(`${appName}-init`, true);
			} else if (
				app[appNameCamel] &&
				$this.data(`${appName}-init`) !== true
			) {
				app[appNameCamel].init($this);
				$this.data(`${appName}-init`, true);
			}
		});
	});
};

initApps();
