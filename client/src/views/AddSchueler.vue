<template>
	<v-form @submit.prevent="submit()">
		<v-container>
			<h1 class="py-5">Schüler hinzufügen</h1>
			<v-row>
				<v-col cols="12" md="4">
					<h3>Vorname</h3>
					<v-text-field outlined v-model="firstnameModel" label="Vorname" required></v-text-field>
				</v-col>

				<v-col cols="12" md="4">
					<h3>Nachname</h3>
					<v-text-field outlined v-model="lastnameModel" label="Nachname" required></v-text-field>
				</v-col>

				<v-col cols="12" md="4">
					<h3>Klasse</h3>
					<v-select outlined :items="klassenOptionen" v-model="klassenModel" label="Klasse"></v-select>
				</v-col>
				<v-col cols="12" md="3">
					<h3>Fotos (intern)</h3>
					<v-radio-group v-model="einwilligungen[0]">
						<v-radio
							v-for="(n, i) in possibleEinwilligung"
							:color="einwilligungFarben[i]"
							:key="n"
							:label="n"
							:value="n"
						></v-radio>
					</v-radio-group>
				</v-col>
				<v-col cols="12" md="3">
					<h3>Website</h3>
					<v-radio-group v-model="einwilligungen[1]">
						<v-radio
							v-for="(n, i) in possibleEinwilligung"
							:color="einwilligungFarben[i]"
							:key="n"
							:label="n"
							:value="n"
						></v-radio>
					</v-radio-group>
				</v-col>
				<v-col cols="12" md="3">
					<h3>Tagespresse (extern)</h3>
					<v-radio-group v-model="einwilligungen[2]">
						<v-radio
							v-for="(n, i) in possibleEinwilligung"
							:color="einwilligungFarben[i]"
							:key="n"
							:label="n"
							:value="n"
						></v-radio>
					</v-radio-group>
				</v-col>
				<v-col cols="12" md="3">
					<h3>Video/Tonaufnahmen</h3>
					<v-radio-group v-model="einwilligungen[3]">
						<v-radio
							v-for="(n, i) in possibleEinwilligung"
							:color="einwilligungFarben[i]"
							:key="n"
							:label="n"
							:value="n"
						></v-radio>
					</v-radio-group>
				</v-col>
				<v-btn class="mr-4" type="submit" outlined :disabled="!valid">
					speichern
				</v-btn>
				<v-btn outlined @click="clear()">
					zurücksetzen
				</v-btn>
			</v-row>
			<v-alert class="mt-10" outlined text type="success" v-if="showSuccess">
				Schüler erfolgreich hinzugefügt!
			</v-alert>
		</v-container>
	</v-form>
</template>

<script>
import { getKlassen } from '../utils/klassen.js';
const possibleEinwilligung = ['Ja', 'Nein', 'Individuell'];
export default {
	data() {
		return {
			firstnameModel: '',
			lastnameModel: '',
			klassenOptionen: getKlassen(),
			klassenModel: null,
			einwilligungen: [null, null, null, null],
			possibleEinwilligung: possibleEinwilligung,
			einwilligungFarben: ['green', 'red', 'yellow'],
			showSuccess: false
		};
	},

	computed: {
		valid() {
			if (this.firstnameModel.length < 2) return false;
			if (this.lastnameModel.length < 2) return false;
			if (this.klassenModel === null) return false;
			if (this.einwilligungen.includes(null)) return false;
			return true;
		}
	},

	methods: {
		async submit() {
			if (!this.valid) return;
			try {
				const response = await fetch('http://localhost:12345/schueler/', {
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						nachname: this.lastnameModel,
						vorname: this.firstnameModel,
						klasse: this.klassenModel,
						einverstaendnis1: this.einwilligungen[0],
						einverstaendnis2: this.einwilligungen[1],
						einverstaendnis3: this.einwilligungen[2],
						einverstaendnis4: this.einwilligungen[3]
					})
				});
				if (response.ok) {
					this.clear();
					this.showSuccess = true;
					setTimeout(() => {
						this.showSuccess = false;
					}, 5000);
				} else {
				}
			} catch (e) {
				console.log(e);
			}
		},
		clear() {
			this.firstnameModel = '';
			this.lastnameModel = '';
			this.klassenModel = null;
			this.einwilligungen = [null, null, null, null];
		}
	}
};
</script>
