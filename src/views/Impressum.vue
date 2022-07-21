<template>
  <div class="content-page">
    <slider></slider>
    <div class="content">
      <div class="content--main-content">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="content--title">IMPRESSUM</div>

              <div class="content--part">
                <p>Ferienwohnung Guischard</p>
                <p>Reinhard & Mette Guischard</p>
                <p>Astfelder Straße 2</p>
                <p>38640 Goslar</p>
              </div>
              <div class="content--part">
                <p>Tel +49 (0) 5321 /</p>
                <p>E-Mail: <a href="mailto:info@ferienwohnung-goslar.eu">info@ferienwohnung-goslar.eu</a></p>
                <p><a href="/">www.ferienwohnung-goslar.eu</a></p>
              </div>
              <div class="content--part">
                <p>Inhaltlich Verantwortlicher gemäß § 10</p>
                <p>Absatz 3 MDStV: Reinhard & Mette</p>
                <p>Guischard (Anschrift wie oben)</p>
              </div>
              <div class="content--part">
                <p>Alle Rechte sind vorbehalten. Reproduktion</p>
                <p>von Bildern und/ oder</p>
                <p>Texten (auch auszugsweise) sind nur</p>
                <p>mit vorheriger schriftlicher</p>
                <p>Genehmigung möglich (Kontakt siehe oben).</p>
              </div>
              <div class="content--part">
                <p>Webdesign und Programmierung</p>
                <p>
                  <a href="https://www.dirs21.de" target="_blank"
                    >www.dirs21.de</a
                  >
                </p>
              </div>
              <div class="content--part">
				<p>Bildrechte der Goslar Impressionen:</p>
				<p>© travelpeter - Fotolia.com</p>
				<p>© Joachim Opelka - Fotolia.com</p>
				<p>© JS - Fotolia.com</p>
				<p>© SchneiderStockImages - Fotolia.com</p>
				<p>© Klaus Rose - Fotolia.com</p>
				<p>© Christian Bitter - Fotolia.com</p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="content--title">DATENSCHUTZHINWEISE</div>

              <div class="content--part">
                Bei der Nutzung dieser Website werden lediglich statistische
                Daten über Zugriffe auf dieser Website ohne konkreten
                Personenbezug erhoben und gespeichert. Dies geschieht in
                Übereinstimmung mit den geltenden Datenschutzgesetzen und zu
                rein internen Zwecken.
              </div>
              <div class="content--part">
                Wir widersprechen hiermit jeder kommerziellen Verwendung und
                Weitergabe ihrer Daten (vgl. § 28 BDSG).
              </div>
              <div class="content--part">
                Persönliche und Kommunikationsdaten
              </div>
              <div class="content--part">
                Personenbezogene Daten werden nur dann erhoben, wenn Sie uns
                diese von sich aus zur Verfügung stellen. Mit der Eingabe von
                personenbezogenen Daten erklären Sie zugleich Ihr Einverständnis
                damit, dass diese von uns erfasst, gespeichert und verarbeitet
                werden.Sollten wir eine E-Mail von Ihnen erhalten, so wird davon
                ausgegangen, dass wir explizit zu einer Beantwortung per E-Mail
                berechtigt sind. Ansonsten bitten wir Sie, einen unserer anderen
                Kontaktwege zu uns zu wählen.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-container"></div>
</template>

<script>
import Slider from "../components/app/slider-out.vue";

export default {
  components: { Slider },
};
</script>

<style lang="less" scoped>
.bg-container {
  background: url("/img/fewo-goslar-4.jpg");
  min-height: 100%;
  min-width: 1024px;
  width: 100%;
  height: auto;
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}

.content {
  margin: 2% 0;
  padding: 0 20px 25%;
  width: 100%;

  &--title {
    margin: 10px 50px 17px 0;
    font-family: Arial;
    font-size: 14px;
    color: #af0c1f !important;
    font-weight: 400;
  }

  &--main-content {
    color: #000;
    margin-bottom: 1em;
    font-family: Arial, Helvetica, sans-serif !important;
    font-size: 12px;
    line-height: 1.4em;
    display: flex;
    gap: 10%;
  }

  &--part {
    margin: 5% 0;
  }
  &--part p {
    margin: 0 !important;
  }
}
</style>
