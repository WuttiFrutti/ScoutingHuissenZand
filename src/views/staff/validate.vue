<template>
  <section class="clean-block p-0 py-5 dark">
    <b-container>
      <b-card v-if="returned">
        <h1>Valideren</h1>
        <p>{{ validated ? "Uw account is gevalideerd en er is een email naar de admin gestuurd" : "Er is iets mis gegaan" }}</p>
      </b-card>
    </b-container>
  </section>
</template>



<script>
import axios from "@/plugins/axios.js";
import Vue from "@/main.js"
 
export default {
  name: "validate",
  props: ["who", "token"],
  data() {
    return {
      validated: null,
      returned: false,
    };
  },
  methods: {
    editTab(tab) {
      this.tab = tab;
    },
  },
  created() {
    axios
      .put("/user/validate/" + this.who + "/" + this.token)
      .then((response) => {
        this.returned = true;
        if (response.status === 200) {
          this.validated = true;
        } else {
          this.validated = false;
          this.$bvToast.toast("Unknown", Vue.toastObject("Error"));
        }
      })
      .catch((error) => {
        this.validated = false;
        this.returned = true;
        this.$bvToast.toast(error + "", Vue.toastObject("Error"));
      });
  },
};
</script>