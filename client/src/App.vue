<template>
	<v-app>
		<v-app-bar app color="#990000" dark dense height="90px">
			<v-img contain max-height="110" max-width="550" src="./assets/Schriftzug_und_Logo_fertig.png"></v-img>
			<v-spacer></v-spacer>
			<v-btn x-large :to="{ name: 'Home' }" plain>Home</v-btn>
			<v-btn x-large :to="{ name: 'Schueler' }" plain>Schüler</v-btn>
			<v-btn x-large :to="{ name: 'Photos' }" plain>Fotos</v-btn>
			<v-btn x-large :to="{ name: 'AddSchueler' }" plain>Schüler hinzufügen</v-btn>
			<v-btn x-large :to="{ name: 'AddPhoto' }" plain>Foto hinzufügen</v-btn>
		</v-app-bar>
		<v-navigation-drawer v-model="drawer" absolute temporary>
			<v-list nav dense> </v-list>
		</v-navigation-drawer>

		<v-main>
			<router-view />
		</v-main>
	</v-app>
</template>

<script>
export default {
	name: 'App',

	data: () => ({
		drawer: false
	})
};
</script>

<style>
* {
	font-family: 'News Cycle', sans-serif !important;
}
</style>
