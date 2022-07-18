<template>
  <div class="container">
    <div class="main">
      <div class="card-main">
        <div class="card-all">
          <div class="card-menubar card-menu-mobile">
            <menubar></menubar>
            <Footer></Footer>
          </div>
          <div class="card-content">
            <RouterView />
          </div>
        </div>
      </div>
    </div>
  </div>
    <popUp></popUp>

</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import Menubar from "./components/app/menubar.vue";
import Footer from "./components/app/footer.vue";
import popUp from "./components/app/_popup-modal.vue";


export default {
  components: { Menubar, Footer, RouterLink, RouterView, popUp },
};
</script>

<style scoped>
.card-all {
  display: flex;
  width: auto;
  align-items: flex-start;
}

.card-content {
  background: #ffffff;
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  flex-direction: column;
  box-shadow: 0 0 15px 0 #00000030;
  height: auto;
}
</style>
