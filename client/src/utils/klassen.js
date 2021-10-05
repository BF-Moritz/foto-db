export function getKlassen() {
	const klassen = [];
	const unterklassen = ['a', 'b/c'];
	for (let i = 1; i <= 12; i++) {
		for (let j = 0; j < unterklassen.length; j++) {
			klassen.push(`Klasse ${i}${unterklassen[j]}`);
		}
	}
	klassen.push('Klasse 13');
	return klassen;
}
