import '@babel/polyfill';
import 'url-polyfill';
import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import 'gsap';

svg4everybody();

window.$ = $;
window.jQuery = $;

require('ninelines-ua-parser');
require('./vendor/jquery.inview');
require('./vendor/scrollmagic');
require('./vendor/animation.gsap');
