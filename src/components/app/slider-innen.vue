<template>
  <div class="slider-container">
    <span id="indicators" class="indicators"></span>

    <img
      v-for="slides in slide"
      :key="slides.title"
      :src="slides.link"
      :alt="slides.title"
      @click="popUp(slides.title, slides.link)"
    />

    <div class="slider-controls">
      <span id="prev" class="prev">
        <span class="material-symbols-outlined"> chevron_left </span>
      </span>
      <span id="next" class="next">
        <span class="material-symbols-outlined"> chevron_right </span>
      </span>
    </div>
  </div>
</template>

<script>
import _popupModalVue from "./_popup-modal.vue";
import isMobile from "ismobilejs";

export default {
  name: "app-slider-innen",
  data() {
    return {
      slide: [
        {
          title: "Wohnraum #1",
          link: "@/components/imgs/sstb01_Wohnraum.jpg",
        },
        {
          title: "Wohnraum #2",
          link: "@/components/imgs/sstb02_Wohnraum.jpg",
        },
        {
          title: "Wohnraum #3",
          link: "@/components/imgs/sstb03_Wohnraum.jpg",
        },
        {
          title: "Wohnraum #4",
          link: "@/components/imgs/sstb04_Wohnraum.jpg",
        },
        {
          title: "Wohnraum #5",
          link: "@/components/imgs/sstb05_Wohnraum.jpg",
        },
        {
          title: "Küche #6",
          link: "@/components/imgs/sstb06_Kueche.jpg",
        },
        {
          title: "Küche #7",
          link: "@/components/imgs/sstb07_Kueche.jpg",
        },
        {
          title: "Schlafzimmer #8",
          link: "@/components/imgs/sstb08_Schlafzimmer.jpg",
        },
        {
          title: "Bad #9",
          link: "@/components/imgs/sstb09_WC.jpg",
        },
        {
          title: "Bad #10",
          link: "@/components/imgs/sstb10_Bad.jpg",
        },
        {
          title: "Bad #11",
          link: "@/components/imgs/sstb11_Bad.jpg",
        },
        {
          title: "Eingang-Flur #12",
          link: "@/components/imgs/sstb12_Eingang-Flur.jpg",
        },
        {
          title: "Eingang-Flur #13",
          link: "@/components/imgs/sstb13_Eingang-Flur.jpg",
        },
        {
          title: "Blick #14",
          link: "@/components/imgs/sstb14_Blick.jpg",
        },
        {
          title: "Blick #15",
          link: "@/components/imgs/sstb15_Blick.jpg",
        },
        {
          title: "Aussen #16",
          link: "@/components/imgs/sstb16_Aussen.jpg",
        },
        {
          title: "Aussen #17",
          link: "@/components/imgs/sstb17_Aussen.jpg",
        },
      ],
    };
  },
  methods: {
    popUp(title, img) {
      _popupModalVue.methods.open(title, img);
    },
  },
  mounted() {
    let sliderImages = Array.from(
      document.querySelectorAll(".slider-container img")
    );
    let slidesCount = sliderImages.length;
    let currentSlide = Math.floor(Math.random() * slidesCount) + 1;
    let nextBtn = document.getElementById("next");
    let prevBtn = document.getElementById("prev");
    nextBtn.onclick = nextSlide;
    prevBtn.onclick = prevSlide;
    let paginationElement = document.createElement("ul");

    paginationElement.setAttribute("id", "pagination-ul");
    for (let i = 1; i <= slidesCount; i++) {
      let paginationItem = document.createElement("li");
      paginationItem.setAttribute("data-slide", i);
      paginationItem.appendChild(document.createTextNode(i));
      paginationElement.appendChild(paginationItem);
    }
    document.getElementById("indicators").appendChild(paginationElement);

    let paginationCreatedUl = document.getElementById("pagination-ul");
    let paginationBullets = Array.from(
      document.querySelectorAll("#pagination-ul li")
    );

    for (let i = 0; i < paginationBullets.length; i++) {
      paginationBullets[i].onclick = function () {
        currentSlide = parseInt(this.getAttribute("data-slide"));
        theChecker();
      };
    }

    theChecker();

    function nextSlide() {
      if (nextBtn.classList.contains("disabled")) {
        currentSlide = 1;
        theChecker();
      } else {
        currentSlide++;
        theChecker();
      }
    }

    function prevSlide() {
      currentSlide--;
      theChecker();
    }

    function theChecker() {
      removeAllActive();
      sliderImages[currentSlide - 1].classList.add("active");
      paginationCreatedUl.children[currentSlide - 1].classList.add("active");

      if (currentSlide == 1) {
        prevBtn.classList.add("disabled");
      } else {
        prevBtn.classList.remove("disabled");
      }

      if (currentSlide == slidesCount) {
        nextBtn.classList.add("disabled");
      } else {
        nextBtn.classList.remove("disabled");
      }
    }

    function removeAllActive() {
      sliderImages.forEach(function (img) {
        img.classList.remove("active");
      });

      paginationBullets.forEach(function (bullet) {
        bullet.classList.remove("active");
      });
    }

    let loopSlideShow;
    if (!loopSlideShow) {
      loopSlideShow = setInterval(nextSlide, 5000);
    }

    if (isMobile().phone) {
      clearInterval(loopSlideShow);
    }
  },
};
</script>

<style lang="less">
</style>
