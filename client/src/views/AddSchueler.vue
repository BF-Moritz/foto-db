<template>
	<v-form>
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
			</v-row>
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
			einwilligungFarben: ['green', 'red', 'yellow']
		};
	}
};
</script>
