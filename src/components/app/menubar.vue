<template>
	<div class="nav-bar nav-mobile">
		<nav>
			<RouterLink class="menu-logo" to="/">
				<img src="/img/logo.png" alt="my logo" />
			</RouterLink>

			<ul id="menu-list">
				<RouterLink class="menu-item group-item" to="/">
					<div class="material-symbols-outlined hide">home</div>
					Home
				</RouterLink>
				<RouterLink class="menu-item group-item" to="/ausstattung-preise">
					<span class="material-symbols-outlined hide">airline_seat_individual_suite</span>
					Ausstattung & Preise
				</RouterLink>
				<RouterLink class="menu-item group-item" to="/online-buchen">
					<span class="material-symbols-outlined hide">book_online</span>
					Onlinebuchen
				</RouterLink>
				<RouterLink class="menu-item group-item" to="/goslar">
					<span class="material-symbols-outlined hide">forest</span>
					Goslar
				</RouterLink>
				<RouterLink class="menu-item group-item" to="/anreise">
					<span class="material-symbols-outlined hide">my_location</span>
					Anreise
				</RouterLink>
				<RouterLink class="menu-item group-item" to="/kontakt">
					<span class="material-symbols-outlined hide">contact_support</span>
					Kontakt
				</RouterLink>
			</ul>
		</nav>
	</div>
</template>

<script>
import {RouterLink } from "vue-router";
export default {
  components: { RouterLink },
};
</script>

<style>
.material-symbols-outlined.hide {
	display: none;
}
</style>
