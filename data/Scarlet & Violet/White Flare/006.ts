import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	set: Set,

	name: {
		en: "Deerling",
		fr: "Vivaldaim",
		de: "Sesokitz",
		it: "Deerling",
		pt: "Deerling",
		es: "Deerling",
		'es-mx': "Deerling"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Rear Kick",
			fr: "Ruade",
			de: "Rückwärtskick",
			it: "Retrocalcio",
			pt: "Chute Traseiro",
			es: "Patada Trasera",
			'es-mx': "Patada Trasera"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card