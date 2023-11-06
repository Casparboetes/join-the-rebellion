import { createApp } from 'vue';
import '@/sass/main.scss';
import App from '@/App.vue';
import router from '@/router';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faArrowLeftLong,
  faHeart as fasHeart,
  faPlus,
  faXmark
} from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';

library.add(fasHeart, farHeart, faPlus, faXmark, faArrowLeftLong);
const app = createApp(App);

app.use(router);
app.component('FontAwesomeIcon', FontAwesomeIcon);
app.mount('#app');
