<template>
	<div>
		<v-card>
			<v-card-text class="px-16 py-10d-flex justify-center mb-6">
				<v-row>
					<v-col md="3" offset-md="1">
						<v-select class="pa-2" :items="klassen" label="Klassen" outlined></v-select>
					</v-col>
					<v-col md="7">
						<v-text-field class="pa-2" label="Suche" outlined></v-text-field>
					</v-col>
				</v-row>
			</v-card-text>
		</v-card>
		<!-- TODO -->
		<v-data-table
			class="mx-10"
			:headers="schuelerHeader"
			:items="schueler"
			fixed-header
			:heigth="200"
			:disable-pagination="true"
			:hide-default-footer="true"
			height="725px"
			:items-per-page="-1"
		>
			<template v-slot:item.einverstaendnis="{ item }">
				<v-chip class="ma-2" :color="chipColor(item.einverstaendnis[1])">
					Fotos (intern)
				</v-chip>
				<v-chip class="ma-2" :color="chipColor(item.einverstaendnis[2])">
					Website
				</v-chip>
				<v-chip class="ma-2" :color="chipColor(item.einverstaendnis[3])">
					Tagespresse (extern)
				</v-chip>
				<v-chip class="ma-2" :color="chipColor(item.einverstaendnis[4])">
					Video/Tonaufnahmen
				</v-chip>
			</template>
			<template v-slot:item.actions="{ item }">
				<v-btn plain @click="show(item._id)">Anzeigen</v-btn>
			</template>
		</v-data-table>
	</div>
</template>

<script>
export default {
	name: 'Schueler',
	data() {
		return {
			klassen: [],
			schuelerHeader: [
				{ text: 'Klasse', value: 'klasse' },
				{ text: 'Nachname', value: 'nachname' },
				{ text: 'Vorname', value: 'vorname' },
				{ text: 'Einverständniserklärungen', value: 'einverstaendnis', sortable: false },
				{ text: 'Actions', value: 'actions', sortable: false }
			],
			schueler: [
				{
					_id: '614e33288475090540cd6307',
					vorname: 'hansina',
					nachname: 'müller',
					klasse: 'test',
					einverstaendnis: {
						1: undefined,
						2: false,
						3: true,
						4: false
					}
				},
				{
					_id: '614e33288475090540cd6307',
					vorname: 'hansina',
					nachname: 'müller',
					klasse: 'test',
					einverstaendnis: {
						1: undefined,
						2: false,
						3: true,
						4: false
					}
				},
				{
					_id: '614e33288475090540cd6307',
					vorname: 'hansina',
					nachname: 'müller',
					klasse: 'test',
					einverstaendnis: {
						1: undefined,
						2: false,
						3: true,
						4: false
					}
				},
				{
					_id: '614e33288475090540cd6307',
					vorname: 'hansina',
					nachname: 'müller',
					klasse: 'test',
					einverstaendnis: {
						1: undefined,
						2: false,
						3: true,
						4: false
					}
				},
				{
					_id: '614e33288475090540cd6307',
					vorname: 'hansina',
					nachname: 'müller',
					klasse: 'test',
					einverstaendnis: {
						1: undefined,
						2: false,
						3: true,
						4: false
					}
				},
				{
					_id: '614e33288475090540cd6307',
					vorname: 'hansina',
					nachname: 'müller',
					klasse: 'test',
					einverstaendnis: {
						1: undefined,
						2: false,
						3: true,
						4: false
					}
				},
				{
					_id: '614e33288475090540cd6307',
					vorname: 'hansina',
					nachname: 'müller',
					klasse: 'test',
					einverstaendnis: {
						1: undefined,
						2: false,
						3: true,
						4: false
					}
				},
				{
					_id: '614e33288475090540cd6307',
					vorname: 'hansina',
					nachname: 'müller',
					klasse: 'test',
					einverstaendnis: {
						1: undefined,
						2: false,
						3: true,
						4: false
					}
				},
				{
					_id: '614e33288475090540cd6307',
					vorname: 'hansina',
					nachname: 'müller',
					klasse: 'test',
					einverstaendnis: {
						1: undefined,
						2: false,
						3: true,
						4: false
					}
				},
				{
					_id: '614e33288475090540cd6307',
					vorname: 'hansina',
					nachname: 'müller',
					klasse: 'test',
					einverstaendnis: {
						1: undefined,
						2: false,
						3: true,
						4: false
					}
				},
				{
					_id: '614e33288475090540cd6307',
					vorname: 'hansina',
					nachname: 'müller',
					klasse: 'test',
					einverstaendnis: {
						1: undefined,
						2: false,
						3: true,
						4: false
					}
				},
				{
					_id: '614e33288475090540cd6307',
					vorname: 'hansina',
					nachname: 'müller',
					klasse: 'test',
					einverstaendnis: {
						1: undefined,
						2: false,
						3: true,
						4: false
					}
				},
				{
					_id: '614e33288475090540cd6307',
					vorname: 'hansina',
					nachname: 'müller',
					klasse: 'test',
					einverstaendnis: {
						1: undefined,
						2: false,
						3: true,
						4: false
					}
				},
				{
					_id: '614e33288475090540cd6307',
					vorname: '231z264376126476263471264763247zehjfsgdhjfgsdhjfg231z2',
					nachname: '231z264376126476263471264763247zehjfsgdhjfgsdhjfg',
					klasse: 'test',
					einverstaendnis: {
						1: undefined,
						2: false,
						3: true,
						4: false
					}
				}
			]
		};
	},
	methods: {
		show() {},
		chipColor(value) {
			if (value === true) {
				return '#32a852';
			}
			if (value === false) {
				return '#ab4124';
			}
			return '#bd6f26';
		}
	}
};
</script>
