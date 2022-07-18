
<template>
  <div class="container-popup">
    <div class="popup">
      <div class="close-popup" @click="close">&times;</div>
      <h2 class="title-popup"></h2>
      <img src="" class="content-popup"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "popupModal",
  data() {
    return {};
  },
  methods: {
    open(title, img) {
      let showPopup = document.querySelector(".container-popup");
      let animationOpen = document.querySelector('.popup');
      document.querySelector(".title-popup").innerHTML = title;
      document.querySelector(".content-popup").src = img;
      showPopup.classList.add("show");
      animationOpen.classList.add("animated");
      if (showPopup.classList.contains("show")) document.body.style.overflow = "hidden";
    },
    close() {
      let showPopup = document.querySelector(".container-popup");
      let animationOpen = document.querySelector('.popup');
      showPopup.classList.remove("show");
      animationOpen.classList.remove("animated");
      document.body.style.overflow = "auto";
    },
  },
  created() { },
};
</script>
