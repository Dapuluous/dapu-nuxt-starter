// ~/plugins/fontawesome.ts
import { defineNuxtPlugin } from '#app';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faLinkedinIn, faInstagram, faDiscord, faSteam } from '@fortawesome/free-brands-svg-icons';

library.add(faLinkedinIn, faInstagram, faDiscord, faSteam);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon);
});
