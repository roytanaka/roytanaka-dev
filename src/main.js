import Vuetify from "vuetify";
import DefaultLayout from "~/layouts/Default.vue";

import "vuetify/dist/vuetify.min.css";
// import colors from "vuetify/lib/util/colors";

export default function(Vue, { appOptions, head }) {
  
  head.link.push({
    rel: "preconnect",
    href: "https://fonts.gstatic.com"
  });

  head.link.push({
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap"
  });

  head.link.push({
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/icon?family=Material+Icons"
  });
  head.link.push({
    rel: "stylesheet",
    href: "https://use.fontawesome.com/releases/v5.10.2/css/all.css"
  });

  const opts = {
    icons: {
      iconfont: "fa" // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4'
    },
    // adjust the theme if you would like to
    theme: {
      themes: {
        light: {
          primary: '#7298c1',
          primaryLight: '#a3c9f4',
          primaryDark: '#426a91',
          secondary: "#9e9e9e",
          secondaryLight: '#cfcfcf',
          secondaryDark: '#707070',
          accent: "#82B1FF",
          error: "#FF5252",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FFC107"
        }
      }
    }
  };
  Vue.use(Vuetify);

  appOptions.vuetify = new Vuetify(opts);

  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
}
