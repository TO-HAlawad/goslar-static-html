<template>

	<div class="content-page">
		<iframe width="100%" scrolling="no" height="395" frameborder="0" marginheight="0" marginwidth="0" src="http://maps.google.de/maps?f=q&source=s_q&hl=de&geocode=&q=goslar+astfelder+stra%C3%9Fe+2&aq=&sll=48.661847,9.003665&sspn=4.767562,11.634521&ie=UTF8&hq=&hnear=Astfelder+Stra%C3%9Fe+2,+38640+Goslar,+Niedersachsen&t=m&ll=51.915103,10.41976&spn=0.020912,0.054159&z=14&iwloc=A&output=embed">
		</iframe>

		<div class="content">

			<div class="content--title">
				<h1>
					<span>Anreise nach Goslar</span>
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
export default {
	components: {},
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
