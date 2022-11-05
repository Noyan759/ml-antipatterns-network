import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(router);

// Add v-network-graph plugin
import VNetworkGraph from "v-network-graph"
import "v-network-graph/lib/style.css"
app.use(VNetworkGraph)

// Add vuetify
import vuetify from '@/plugins/vuetify'
app.use(vuetify);

app.mount("#app");
