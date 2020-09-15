import vuejsStorage from "vuejs-storage";
import Vue from "vue";

Vue.use(vuejsStorage);

new Vue({
  el: "#app",
  render(h) {
    var self = this;
    return h("input", {
      domProps: {
        value: self.text
      },
      on: {
        input(event) {
          self.text = event.target.value;
        }
      }
    });
  },
  data() {
    return {
      text: ""
    };
  },
  storage: {
    keys: ["text"]
  }
});
