<template>
	<div class="content-page">
		<slider></slider>
		<div class="content">
			<div class="content--title">
				<h1>
					<span>Kontakt zur Ferienwohnung Guischard</span>
				</h1>
			</div>

			<div class="main-content">
				<p class="main-content--title">Fragen & Buchungen</p>
				<div class="main-content--address">
					<p class="main-content--address main-content--address--title">
						Ferienwohnung Guischard
					</p>
					<p class="address address--body">
						Astfelder Straße 2 38640 Goslar Tel +49 (0) 5321 /
					</p>

					<p class="main-content--address main-content--address--mail">
						<a href="mailto:info@ferienwohnung-goslar.eu">info@ferienwohnung-goslar.eu</a>
						<a href="/">www.ferienwohnung-goslar.eu</a>
					</p>
				</div>

				<div class="form-group">
					<form action="#" method="post">
						<div class="title"> <label for="title">Anrede:</label>
							<select name="title" id="title">
								<option value="Herr">Herr</option>
								<option value="Frau">Frau</option>
								<option value="Firma">Firma</option>
							</select>
						</div>
						<div class="fName">
							<label for="fName">Vorname: *</label>
							<input type="text" name="fName" class="first-name" required>

						</div>
						<div class="lName">
							<label for="lName">Nachname: *</label>
							<input type="text" name="lName" class="last-name" required>
						</div>
						<div class="street">
							<label for="street">Straße:</label>
							<input type="text" name="street" class="street">
						</div>
							<div class="plz">
								<label for="plz">PLZ:</label>
								<input type="text" name="plz" class="plz">
							</div>
							<div class="ort">
								<label for="ort">Ort:</label>
								<input type="text" name="ort" class="ort">
							</div>
						<div class="tel">
							<label for="tel">Telefon:</label>
							<input type="text" name="tel" class="tel">
						</div>
						<div class="mail">
							<label for="mail">E-Mail: *</label>
							<input type="text" name="mail" class="mail" required>
						</div>
						<label for="yourMsg">Ihre Nachricht:</label>
						<textarea name="yourMsg" cols="30" rows="8"></textarea>

						<button type="submit" class="btn-send">Absenden</button>
					</form>
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
	background: url("../components/imgs/fewo-goslar-2.jpg");
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
  padding: 0 20px 35px 20px;
	width: 100%;

	&--title h1 {
		margin: 10px 50px 17px 0;
		font-family: Arial;
		font-size: 18px;
		color: #af0c1f !important;
		font-weight: 400;
	}
}

.main-content {
	color: #000;
	font-family: Arial;
	font-size: 12px;
	margin-bottom: 12px;
	line-height: 18px;

	&--title {
		font-weight: 600;
	}

	&--address {
		display: flex;
		align-items: flex-start;
		flex-direction: column;
		flex-wrap: nowrap;

		&--mail {
			flex-direction: column;
			margin-top: 25px;

			a {
				text-decoration: underline;
				color: #000;
				font-style: italic;
			}

			a:hover {
				color: #af0c1f;
			}
		}
	}
}

.form-group form {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 50px;
}

.form-group form div {
	justify-content: space-between;
	display: flex;
	width: 100%;
	margin: 5px 0;
}

select#title,
input {
	width: 46%;
}
.form-group form .mail {
    margin-bottom: 20px;
}

textarea {
	resize: none;
	width: 100%;
}

.btn-send {
	margin-top: 20px;
	padding: 10px;
	font-size: 16px;
	border: solid 1px #af0c1f;
	color: #fff;
	background-color: rgba(175, 12, 31, 1);
	transition: all .3s ease-in-out;
	cursor: pointer;
}

.btn-send:hover {
	background-color: rgba(175, 12, 31, .80);
	transform: scale(0.9)
}
</style>
