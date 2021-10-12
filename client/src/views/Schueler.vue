<template>
	<div>
		<v-card>
			<v-card-text class="px-16 py-10d-flex justify-center mb-6">
				<v-row>
					<v-col md="3" offset-md="1">
						<v-select
							class="pa-2"
							:items="klassen"
							v-model="klassenModel"
							label="Klassen"
							outlined
						></v-select>
					</v-col>
					<v-col md="7">
						<v-text-field class="pa-2" v-model="suchModel" label="Suche" outlined></v-text-field>
					</v-col>
				</v-row>
			</v-card-text>
		</v-card>
		<!-- TODO -->
		<v-data-table
			class="mx-10"
			:headers="schuelerHeader"
			:items="visibleSchueler"
			fixed-header
			:heigth="200"
			:disable-pagination="true"
			:hide-default-footer="true"
			height="725px"
			:items-per-page="-1"
		>
			<template v-slot:item.einverstaendnis="{ item }">
				<v-chip class="ma-2" :color="chipColor(item.einverstaendnis1)">
					Fotos (intern)
				</v-chip>
				<v-chip class="ma-2" :color="chipColor(item.einverstaendnis2)">
					Website
				</v-chip>
				<v-chip class="ma-2" :color="chipColor(item.einverstaendnis3)">
					Tagespresse (extern)
				</v-chip>
				<v-chip class="ma-2" :color="chipColor(item.einverstaendnis4)">
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
import { getKlassen } from '../utils/klassen';
export default {
	name: 'Schueler',
	data() {
		return {
			klassen: ['Alle Klassen', ...getKlassen()],
			klassenModel: 'Alle Klassen',
			schuelerHeader: [
				{ text: 'Klasse', value: 'klasse' },
				{ text: 'Nachname', value: 'nachname' },
				{ text: 'Vorname', value: 'vorname' },
				{ text: 'Einverständniserklärungen', value: 'einverstaendnis', sortable: false },
				{ text: 'Actions', value: 'actions', sortable: false }
			],
			schueler: [],
			visibleSchueler: [],
			suchModel: ''
		};
	},

	async mounted() {
		try {
			const response = await fetch('http://localhost:12345/schueler/');
			if (response.ok) {
				const schuelerArray = await response.json();
				console.log(schuelerArray);
				this.schueler = schuelerArray;
				this.visibleSchueler = schuelerArray;
			} else {
			}
		} catch (e) {
			console.log(e);
		}
	},

	methods: {
		show() {},
		chipColor(value) {
			if (value === 'Ja') {
				return '#32a852';
			}
			if (value === 'Nein') {
				return '#ab4124';
			}
			return '#bd6f26';
		},

		filterSchueler(klasse, suche) {
			if (klasse === 'Alle Klassen') {
				this.visibleSchueler = this.schueler.filter((schueler) => {
					if (suche === '') return true;
					if (schueler.vorname.toLowerCase().indexOf(suche.toLowerCase()) >= 0) return true;
					if (schueler.nachname.toLowerCase().indexOf(suche.toLowerCase()) >= 0) return true;
					return false;
				});
			} else {
				this.visibleSchueler = this.schueler.filter((schueler) => {
					if (schueler.klasse === klasse) {
						if (suche === '') return true;
						if (schueler.vorname.toLowerCase().indexOf(suche.toLowerCase()) >= 0) return true;
						if (schueler.nachname.toLowerCase().indexOf(suche.toLowerCase()) >= 0) return true;
					}

					return false;
				});
			}
		}
	},

	watch: {
		klassenModel(value) {
			this.filterSchueler(value, this.suchModel);
		},

		suchModel(value) {
			this.filterSchueler(this.klassenModel, value);
		}
	}
};
</script>
