<template>
  <div class="team-member mx-auto d-flex flex-column">
    <a class="mx-auto"
      :href="'/speltak/'+branch.branchName"
    >
    <img
        class="rounded-circle mx-auto"
        :src="branch.branchImage"
      />
    </a>
    <h4 class="mx-auto mt-3" style="color: #28a745;">{{ branch.branchName }}</h4>
    <ul  class="list-inline social-buttons mx-auto">
      <li v-if="branch.instaUsername != ''" class="list-inline-item">
        <a class="social-link" :href="'https://www.instagram.com/' + branch.instaUsername">
          <i class="fab fa-instagram fa-2x"></i>
        </a>
      </li>
      <li v-if="branch.facebookUsername != ''" class="list-inline-item">
        <a class="social-link" :href="'https://www.facebook.com/' + branch.facebookUsername">
          <i class="fab fa-facebook fa-2x"></i>
        </a>
      </li>
      <li class="list-inline-item">
        <a class="social-link" :href="`mailto: ${branch.branchAdmin}`">
          <i class="fa fa-envelope fa-2x"></i>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: "teammember",
  props: ["branch"],
};
</script>

<style scoped>
.team-member img {
  width: 225px;
  height: 225px;
  border: 7px solid #fff !important;
}

.team-member a{
  transition: all 0.1s ease-in-out;
}

.team-member a:hover{
  transform: scale(1.1);
}

.social-link{
  transition: all 0.5 ease;
  color: #6c757d;
}

.social-link:hover{
  color: rgb(40, 167, 69);
}

</style>



