<template>
	<div class="content-page">
		<slider></slider>
		<div class="content">

			<div class="content--title">
				<h1>
					<span>Sehenswürdigkeiten in Goslar</span>
				</h1>
			</div>

			<div class="content--main-content">
				<article>
					<p>in Bearbeitung</p>
				</article>
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
	background: url("/img/fewo-goslar-6.jpg");
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

	&--title h1 {
		margin: 10px 50px 17px 0;
		font-family: Arial;
		font-size: 18px;
		color: #af0c1f !important;
		font-weight: 400;
	}

	&--main-content {
		color: #000;
		margin-bottom: 1em;
		font-family: Arial, Helvetica, sans-serif !important;
		font-size: 12px;
		line-height: 1.4em;
	}
}
</style>
