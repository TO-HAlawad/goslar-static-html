<template>
  <div class="footer">
    <div class="content-footer">
      <div>
        Ferienwohnung Guischard <br />
        Astfelder Straße 2 <br />
        38640 Goslar
      </div>
      <br/>
      <a href="mailto:info@ferienwohnung-goslar.eu" style="font-weight:400;">info@ferienwohnung-goslar.eu</a>
      <br/>
      <RouterLink class="menu-item" to="/impressum" style="text-transform:uppercase; font-weight:700;">Impressum</RouterLink>
    </div>
  </div>
</template>

<script>
export default {
  name: "app-footer",
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>
