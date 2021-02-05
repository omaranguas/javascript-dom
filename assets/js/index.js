import hamburgerMenu from './hamburger_menu.js';
import { alarm, digitalClock } from './clock.js';
import { moveBall, shortcuts } from './keyboard.js';
import countdown from './countdown.js';
import scrollButton from './scrollButton.js';
import darkTheme from './dark_theme.js';
import responsiveMedia from './responsive_media.js';
import responsiveTester from './responsive_test.js';
import userDetectionInfo from './detect_devices.js';
import detectNetwork from './detect_network.js';
import webcam from './detect_webcam.js';
import getGeolocation from './geolocation.js';
import searchFilters from './search_filters.js';
import draw from './giveaway.js';
import slider from './carousel.js';
import scrollSpy from './scroll_spy.js';
import smartVideo from './video.js';
import validateForm from './validate_form.js';
import speechReader from './storyteller.js';

const d = document;

d.addEventListener('DOMContentLoaded', (e) => {
    hamburgerMenu('.panel-btn', '.panel', '.menu a');
    digitalClock('#clock', '#activate-clock', '#disable-clock');
    alarm('assets/sound/sound.mp3', '#activate-alarm', '#disable-alarm');
    countdown('.countdown', '12/25/2021 0:00 AM', 'Proxima Navidad', 'Feliz Navidad');
    scrollButton('.scroll');
    responsiveMedia('youtube', '(min-width: 1024px)', `<a href="https://www.youtube.com/watch?v=j5-yKhDd64s" rel="noopener" target="_blank">Ver video</a>`, `<iframe width="560" height="315" src="https://www.youtube.com/embed/j5-yKhDd64s" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
    responsiveMedia('gmaps', '(min-width: 1024px)', `<a href="https://goo.gl/maps/gcu8QbhxrYVSpNDn6" rel="noopener" target="_blank">Ver mapa</a>`, `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d931.2810140560604!2d-89.57339549956815!3d20.98766371707418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDU5JzE0LjYiTiA4OcKwMzQnMjIuNyJX!5e0!3m2!1ses-419!2smx!4v1607347803204!5m2!1ses-419!2smx" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`);
    responsiveTester('responsive-tester');
    userDetectionInfo('user-device');
    webcam('webcam');
    getGeolocation('geolocation');
    searchFilters('.card-filter', '.card');
    draw('#winner-btn', '.player');
    slider();
    scrollSpy();
    smartVideo();
    validateForm();
});

d.addEventListener('keydown', (e) => {
    shortcuts(e);
    moveBall(e, '.ball', '.stage');
});

darkTheme('.dark-theme-btn', 'dark-mode');
detectNetwork();
speechReader();