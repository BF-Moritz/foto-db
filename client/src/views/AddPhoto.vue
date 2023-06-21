<template>
	<v-form @submit.prevent="submit()">
		<v-container>
			<h1 class="py-5">Schüler hinzufügen</h1>
			<v-row>
				<v-file-input accept="image/*" show-size label="File input"></v-file-input>

				<v-btn class="mr-4" type="submit" outlined :disabled="!valid">
					speichern
				</v-btn>
				<v-btn outlined @click="clear()">
					zurücksetzen
				</v-btn>
			</v-row>
			<v-alert class="mt-10" outlined text type="success" v-if="showSuccess">
				Foto erfolgreich hinzugefügt!
			</v-alert>
		</v-container>
	</v-form>
</template>

<script>
export default {};
</script>
