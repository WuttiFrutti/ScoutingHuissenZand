<template>
  <section v-if="returned && !who" class="clean-block p-0 py-5 dark">
    <b-container>
      <b-tabs content-class="mt-3">
        <b-tab title="Mijn Account" active>
          <account
            @editBranch="editBranch"
            v-bind:user="user"
            v-bind:branches="user.branches"
          ></account>
          <div v-if="currentBranch ">
            <editBranch v-bind:branch="currentBranch"></editBranch>
            <imageEditor
              :key="currentBranch.branchName"
              v-bind:user="user"
              v-bind:branch="currentBranch"
            ></imageEditor>
            <events
              v-bind:user="user"
              v-bind:branchName="currentBranch.branchName"
            ></events>
          </div>
        </b-tab>
        <b-tab title="Tabbladen" v-if="user.admin">
          <tabInsert ref="tabInsert" v-bind:tabs="tabs"></tabInsert>
          <tabDelete @editTab="editTab" v-bind:tabs="tabs"></tabDelete>
        </b-tab>
        <b-tab title="Speltakken" v-if="user.admin">
          <assignBranch
            v-bind:users="users"
            v-bind:user="user"
            v-bind:branches="branches"
          ></assignBranch>
        </b-tab>
        <b-tab title="Accounts beheren" v-if="user.admin">
          <accountManager
            v-bind:users="users"
            v-bind:user="user"
            v-bind:branches="branches"
          ></accountManager>
        </b-tab>
      </b-tabs>
    </b-container>
  </section>
  <section
    v-else-if="returned && user.admin && who"
    class="clean-block p-0 py-5 dark"
  >
    <b-container>
      <assignBranch
        v-bind:users="users"
        v-bind:user="user"
        v-bind:branches="branches"
        v-bind:who="who"
      ></assignBranch>
    </b-container>
  </section>
  <section v-else-if="!returned" class="clean-block p-0 py-5 dark">
    <b-container class="d-flex justify-content-center">
      <span class="my-auto">
        <b-spinner variant="primary" label="Spinning"></b-spinner>
      </span>
    </b-container>
  </section>
</template>



<script>
import tabInsert from "@/components/content/tabs/tabInsert.vue";
import tabDelete from "@/components/content/tabs/tabDelete.vue";
import assignBranch from "@/components/content/branches/assignBranch";

import editBranch from "@/components/content/branches/editBranch";
import account from "@/components/account/account.vue";
import accountManager from "@/components/account/accountManager.vue";
import axios from "@/plugins/axios.js";
import events from "@/components/content/events/events.vue";
import imageEditor from "@/components/content/branches/imageEditor.vue";
import setCookie from "@/plugins/setCookie.js";
import VueMixin from "@/main.js";

export default {
  name: "staff",
  components: {
    editBranch,
    assignBranch,
    tabInsert,
    tabDelete,
    account,
    accountManager,
    events,
    imageEditor,
  },
  props: ["branches", "tabs", "who"],
  data() {
    return {
      user: null,
      returned: false,
      currentBranch: null,
      users: null,
    };
  },
  methods: {
    editTab(tab) {
      this.$refs.tabInsert.setEditTab(tab.tabName, tab.tabDescription);
    },
    editBranch(branch) {
      this.currentBranch = branch;
    },
  },
  created() {
    axios
      .get("/user")
      .then((response) => {
        if (response.status === 200) {
          this.user = response.data;
          setCookie("loggedIn", "true");
          if (this.who && !this.user.admin) {
            window.location.href = "/error/401";
          }
          this.user.admin = this.user.admin == 1;
          this.user.validated = this.user.validated == 1;
          if (this.user.admin) {
            axios
              .get("/user/all")
              .then((response) => {
                VueMixin.throwResponse(
                  response,
                  () => (this.returned = true),
                  () => {
                    this.users = response.data;
                    this.returned = true;
                  }
                );
              })
              .catch((error) => {
                VueMixin.throwError(error, () => (this.returned = true));
              });
          }else{
            this.returned = true;
          }
        } else {
          this.$bvToast.toast("Unknown", VueMixin.toastObject("Error"));
        }
      })
      .catch((error) => {
        this.returned = true;
        this.$bvToast.toast(error + "", VueMixin.toastObject("Error"));
        setCookie("loggedIn", "false");
        window.location.href = "/staf";
      });
  },
};
</script>