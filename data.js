// =========================================================================
// BANQUE DE DONNÉES ET TEXTES D'INTERPRÉTATION
// =========================================================================
const INTERPRETATIONS = {
    "Bélier": "Fonceur et dynamique, vous possédez une énergie de pionnier. Vous agissez avec courage mais devez parfois dompter une certaine impatience.",
    "Taureau": "Stable, loyal et pragmatique, vous appréciez les plaisirs concrets de la vie. Vous bâtissez sur le long terme mais détestez qu'on vous bouscule.",
    "Gémeaux": "Curieux, communicatif et adaptable, votre esprit est en mouvement perpétuel. Vous aimez apprendre et échanger, quitte à parfois vous éparpiller.",
    "Cancer": "Sensible, protecteur et très intuitif, vous êtes profondément attaché à votre foyer et à vos proches. Vous agissez au ressenti et à l'instinct.",
    "Lion": "Généreux, fier et charismatique, vous aimez briller et inspirer les autres. Vous possédez un grand cœur, bien que votre orgueil soit parfois susceptible.",
    "Vierge": "Méthodique, analytique et serviable, vous avez le sens du détail et de l'organisation. Vous cherchez constamment à vous améliorer et à aider.",
    "Balance": "Diplomate, sociologue dans l'âme et épris de justice, vous recherchez l'harmonie dans vos relations. Le choix est parfois votre plus grand défi.",
    "Scorpion": "Intense, passionné et magnétique, vous possédez une grande force de régénération. Vous lisez entre les lignes et ne faites jamais les choses à moitié.",
    "Sagittaire": "Optimiste, aventurier et philosophe, vous avez soif de liberté et de grands espaces. Vous croyez en la vie, quitte à vous montrer parfois trop idéaliste.",
    "Capricorne": "Ambitieux, discipliné et d'une grande patience, vous gravissez les sommets marche après marche. Votre rigueur cache une immense fiabilité.",
    "Verseau": "Indépendant, original et visionnaire, vous pensez en dehors des sentiers battus. Très idéaliste, vous valorisez l'amitié et les causes collectives.",
    "Poissons": "Empathique, rêveur et profondément spirituel, vous êtes une véritable éponge émotionnelle. Votre imagination et votre intuition sont vos plus grands atouts."
};

const INTERPRETATIONS_CHINOIS = {
    "Rat": "Esprit vif, charmant et astucieux. Vous savez saisir les opportunités financières et vous adapter à toutes les situations.",
    "Bœuf": "Travailleur, persévérant et d'une patience exemplaire. Vous êtes le pilier sur lequel vos proches peuvent toujours compter.",
    "Tigre": "Courageux, magnétique et imprévisible. Vous aimez l'aventure, l'indépendance et vous menez vos projets avec passion.",
    "Lièvre (Lapin)": "Pacifique, discret et raffiné. Vous fuyez les conflits et recherchez la tranquillité ainsi qu'un cadre de vie harmonieux.",
    "Dragon": "Flamboyant, audacieux et plein d'assurance. Vous êtes né pour diriger, entreprendre de grandes choses et marquer les esprits.",
    "Serpent": "Sage, intuitif et mystérieux. Vous réfléchissez profondément avant d'agir et possédez un sens inné des affaires.",
    "Cheval": "Libre, enthousiaste et dynamique. Vous aimez voyager, bouger et votre sociabilité fait de vous une personne très entourée.",
    "Chèvre": "Artiste, tendre et sensible. Vous avez besoin d'un environnement bienveillant pour exprimer votre immense créativité.",
    "Singe": "Malin, inventif et plein d'humour. Vous adorez résoudre les problèmes complexes et apprendre de nouvelles compétences en vous amusant.",
    "Coq": "Méthodique, franc et fier. Vous aimez la précision, le travail bien fait et vous n'avez pas peur de dire tout haut ce que vous pensez.",
    "Chien": "Loyal, juste et protecteur. Doté d'un sens moral très fort, vous êtes un ami d'une fidélité absolue, toujours prêt à défendre les opprimés.",
    "Cochon": "Généreux, hédoniste et honnête. Vous croyez en la bonté humaine et croquez la vie à pleines dents dans la simplicité."
};

const INTERPRETATIONS_NUMERO = {
    1: "Le Leader : Vous êtes fait pour l'indépendance, l'innovation et la création de votre propre chemin.",
    2: "Le Partenaire : Votre voie est celle de la coopération, de la diplomatie, de l'écoute et de la recherche d'union.",
    3: "Le Communicant : Expression créative, art, joie de vivre et communication écrite ou orale guident vos pas.",
    4: "Le Bâtisseur : Organisation, rigueur, travail et création de bases solides et concrètes sont vos forces.",
    5: "L'Épicurien : Changement, voyage, liberté et adaptabilité. Votre vie est une suite d'expériences variées.",
    6: "Le Protecteur : Responsabilités familiales, harmonie, sens du service, de l'amour et de l'esthétique.",
    7: "Le Chercheur : Analyse, spiritualité, indépendance d'esprit et quête de vérité intérieure et de connaissances.",
    8: "Le Stratège : Réussite matérielle, pouvoir, ambition, gestion de l'énergie et loi du juste retour (karma).",
    9: "L'Humanitaire : Altruisme, idéal global, fin de cycle et ouverture sur le monde ou l'artistique.",
    11: "Le Guide Spirituel (Maître Nombre) : Intuition surdéveloppée, inspiration et destin tourné vers l'éveil des autres.",
    22: "Le Grand Bâtisseur (Maître Nombre) : Capacité à réaliser des projets d'envergure humanitaire ou mondiale.",
    33: "Le Guide Universel (Maître Nombre) : Destin axé sur l'amour inconditionnel et le sacrifice bienveillant pour autrui."
};

const COMPORTEMENT_LUNAIRE = " Indique comment vous réagissez émotionnellement en privé lorsque vous êtes en confiance.";
const COMPORTEMENT_ASCENDANT = " Représente la première impression que vous donnez et votre attitude face au monde extérieur.";

const LISTE_SIGNES = ["Capricorne", "Verseau", "Poissons", "Bélier", "Taureau", "Gémeaux", "Cancer", "Lion", "Vierge", "Balance", "Scorpion", "Sagittaire"];
