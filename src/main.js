import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { faHouseChimney, faUser, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
{/* <i class="fa-light fa-user"></i> */ }
{/* <font-awesome-icon icon="fa-solid fa-house-chimney" /> */}

/* add icons to the library */
library.add(faUserSecret, faUser, faHouseChimney)


createApp(App).
    component('font-awesome-icon', FontAwesomeIcon).
    mount('#app')
