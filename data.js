// =========================================================================
// BANQUE DE DONNÉES ASTROLOGIQUES DÉTAILLÉES
// =========================================================================
var ASTRO_DATA = {
    solaire: {
        "Bélier": "Le Bélier incarne l'étincelle initiale, le feu primordial. Porté par une énergie pionnière et courageuse, vous abordez la vie de front. Votre force réside dans votre capacité à initier, à surmonter les obstacles et à agir sans crainte. Attention cependant à canaliser votre impatience naturelle pour ne pas consumer vos forces trop rapidement.",
        "Taureau": "Le Taureau représente la stabilité, la persévérance et le lien sacré à la Terre. Bâtisseur dans l'âme, vous appréciez les plaisirs concrets et la sécurité. Votre force est une loyauté indéfectible et une patience tranquille. Votre défi est d'apprendre à accepter les changements indispensables sans vous arc-bouter sur vos acquis.",
        "Gémeaux": "Le Gémeaux insuffle une curiosité insatiable et une agilité intellectuelle remarquable. Papillon social du zodiaque, votre esprit aime explorer, tisser des liens et communiquer. Votre nature double vous rend incroyablement adaptable, même si vous devez veiller à ne pas disperser votre précieuse énergie dans trop de directions.",
        "Cancer": "Le Cancer est intimement lié à la Lune, aux marées de l'âme et à la protection du foyer. Profondément intuitif et sensible, vous ressentez le monde avant de l'analyser. Votre force réside dans votre immense compassion et votre capacité à couver vos projets ou vos proches. Protégez votre carapace sans pour autant vous murer au monde.",
        "Lion": "Le Lion rayonne de la lumière pure du Soleil. Généreux, charismatique et noble de cœur, vous êtes né pour inspirer, créer et guider. Votre sens de la loyauté est immense, tout comme votre besoin d'être reconnu à votre juste valeur. Veillez simplement à ce que votre orgueil légitime ne se transforme pas en rigidité.",
        "Vierge": "La Vierge cherche constamment l'harmonie par la clarté, la méthode et le dévouement. Doté d'un esprit analytique hors pair, vous excellez dans l'art d'organiser, de soigner et de rendre service. Votre quête de perfection est une force créatrice, tant que vous ne la laissez pas se muer en autocritique paralysante.",
        "Balance": "La Balance vibre sous la quête perpétuelle d'équilibre, de justice et de beauté relationnelle. Diplomate inné, vous possédez le don précieux de comprendre tous les points de vue. Vous vous épanouissez dans l'harmonie esthétique et humaine, même si trancher et faire des choix fermes reste votre plus grand parcours initiatique.",
        "Scorpion": "Le Scorpion plonge ses racines dans les mystères profonds de la métamorphose et des émotions intenses. Magnétique et d'une lucidité perçante, vous ne faites jamais les choses à moitié. Votre résilience est légendaire : vous savez mourir à vous-même pour renaître plus fort. Apprivoisez la confiance pour adoucir votre garde.",
        "Sagittaire": "Le Sagittaire est l'éternel chercheur de vérité, guidé par la flèche de l'optimisme et de la philosophie. Soif d'espaces, de voyages et de connaissances spirituelles, vous voyez la vie comme une grande aventure. Votre foi dans le destin est contagieuse, veillez simplement à garder un ancrage solide dans la réalité concrète.",
        "Capricorne": "Le Capricorne gravit patiemment les montagnes du destin sous l'œil exigeant de Saturne. Discipliné, intègre et d'une persévérance à toute épreuve, vous bâtissez sur le roc durable du temps. Derrière votre apparente réserve se cache une ambition noble et une fiabilité absolue. Apprenez à célébrer vos succès en cours de route.",
        "Verseau": "Le Verseau regarde fixement l'horizon futur, porté par des idéaux de liberté, de fraternité et d'originalité. Esprit libre et anticonformiste, vous aimez bousculer les structures établies pour faire infuser le progrès. Vous accordez une importance capitale à l'amitié sincère et aux élans humanitaires ou collectifs.",
        "Poissons": "Le Poissons ferme le cycle zodiacal dans un élan de communion mystique et d'empathie universelle. Véritable éponge psychique, vos frontières sont poreuses et votre intuition, divine. Votre imagination est un océan sans limites. Apprenez à ancrer vos rêves dans la matière pour ne pas vous laisser dériver dans les illusions."
    },
    ascendant: {
        "Bélier": "Au premier regard, vous projetez une image dynamique, directe et percutante. Les autres perçoivent instantanément votre vitalité et votre spontanéité. C'est l'armure du guerrier pacifique qui fonce vers ses buts.",
        "Taureau": "Vous dégagez une première impression de calme olympien, de force tranquille et d'élégance naturelle. On sent que vous avez les pieds sur terre et qu'on peut s'appuyer sur votre rassurante présence.",
        "Gémeaux": "Votre masque social est pétillant, expressif et curieux. Vous donnez l'image d'une personne jeune d'esprit, facile d'accès, toujours prête à entamer une conversation ou à partager une idée originale.",
        "Cancer": "Le monde extérieur perçoit chez vous une douceur protectrice, une réserve timide mais profondément chaleureuse. Vous projetez une aura de bienveillance qui invite instantanément les autres à la confidence.",
        "Lion": "Votre démarche et votre attitude irradient une assurance naturelle et une fierté lumineuse. Vous captez les regards sans effort apparent et dégagez un magnétisme théâtral et chaleureux unique.",
        "Vierge": "Vous présentez au monde un visage soigné, discret, poli et hautement observateur. On remarque tout de suite votre rigueur, votre sens de l'analyse et votre approche mesurée des situations.",
        "Balance": "Votre premier contact est marqué du sceau de la grâce, de la courtoisie et d'une recherche immédiate d'harmonie. Vous projetez une image de conciliation et un sens esthétique très développé.",
        "Scorpion": "Votre présence externe est enveloppée d'un voile de mystère et d'intensité. Intense et pénétrant, votre regard donne l'impression que vous lisez dans les âmes tout en protégeant farouchement la vôtre.",
        "Sagittaire": "Vous rayonnez d'une joie de vivre, d'une bonhomie et d'un enthousiasme communicatifs. Votre attitude physique exprime la liberté, le mouvement, l'ouverture d'esprit et un amour évident de la vie.",
        "Capricorne": "Le monde vous perçoit initialement comme quelqu'un de sérieux, de posé, de digne et de hautement responsable. Votre froideur apparente est en réalité le gage d'une maîtrise et d'une maturité précoces.",
        "Verseau": "Votre style ou votre attitude se démarquent immédiatement par leur originalité ou une pointe d'excentricité. On vous sent amical mais indépendant, détaché des conventions sociales restrictives.",
        "Poissons": "Vous entrez dans le monde avec une aura poétique, éthérée et parfois un peu distraite. Doux et insaisissable, vous donnez l'impression de flotter à la lisière des mondes visibles et invisibles."
    },
    chinois: {
        "Rat": "Esprit vif, charmeur et redoutablement astucieux. Vous brillez par votre capacité à naviguer les crises et accumuler les ressources.",
        "Bœuf": "Le roc de persévérance. Silencieux mais inflexible, vous bâtissez votre réussite brique par brique avec une intégrité totale.",
        "Tigre": "Le souverain passionné. Courageux et magnétique, vous vivez vos élans de manière absolue, quitte à créer des vagues.",
        "Lapin": "L'esthète pacifique. Votre diplomatie naturelle et votre intuition fine vous permettent d'éviter les pièges de l'existence.",
        "Dragon": "L'énergie impériale en mouvement. Flamboyant et visionnaire, vous possédez une puissance innée pour matérialiser de grands destins.",
        "Serpent": "Le sage mystique. Réfléchi, énigmatique et doté d'un sens inné de la stratégie, vous frappez toujours au bon moment.",
        "Cheval": "L'esprit des grands espaces. Votre enthousiasme, votre dynamisme et votre besoin de liberté absolue dictent vos choix.",
        "Chèvre": "L'âme de l'artiste. Empathique, sensible et rêveur, vous avez besoin de beauté et d'amour pour faire éclore votre génie.",
        "Singe": "L'alchimiste ingénieux. D'une intelligence espiègle, aucun problème ne vous résiste car vous savez réinventer les règles.",
        "Coq": "L'administrateur précis. Franc, fier et courageux, votre sens du détail et de la justice fait de vous un guide remarquable.",
        "Chien": "Le gardien de la justice. D'une loyauté absolue et doté d'une conscience morale pure, vous défendez infatigablement le juste.",
        "Cochon": "Le sage épicurien. Généreux, bienveillant et pur de cœur, vous cultivez le bonheur authentique et la joie partagée."
    },
    chiffres: {
        "1": "Le Sentier du Pionnier : Votre âme est venue expérimenter l'autonomie, l'affirmation de soi et le courage d'ouvrir de nouvelles voies solitaires.",
        "2": "Le Sentier de la Synergie : Votre incarnation est dédiée à l'art de l'écoute, de la médiation, de la sensibilité et de l'union sacrée.",
        "3": "Le Sentier du Créateur : Votre destin vibre sur les fréquences de la joie, de l'expression artistique, de la parole d'or et du partage.",
        "4": "Le Sentier de l'Architecte : Vous êtes ici pour ancrer les structures, honorer la patience, le travail méthodique et stabiliser la matière.",
        "5": "Le Sentier de l'Explorateur : Votre boussole pointe vers la métamorphose perpétuelle, les voyages initiatiques, la liberté et l'adaptation.",
        "6": "Le Sentier du Guérisseur : Votre vibration s'accomplit à travers le sens des responsabilités, l'amour familial, le dévouement et l'harmonie.",
        "7": "Le Sentier du Sage : Une quête mystique d'analyse, d'introspection, de solitude féconde et de compréhension profonde des lois de l'univers.",
        "8": "Le Sentier du Maître : La gestion de l'énergie, le grand retour karmique, l'ambition matérielle alignée sur la justice divine.",
        "9": "Le Sentier de l'Universel : Le cycle des grands bilans, l'altruisme sans frontières, la compassion humanitaire et l'éveil spirituel terminal.",
        "11": "La Voie de l'Inspirateur : Maître Nombre canalisant une lumière spirituelle intense. Votre vie est une antenne tendue vers le cosmos.",
        "22": "La Voie du Bâtisseur Cosmique : Maître Nombre capable de transmuter les utopies idéalistes en réalisations concrètes majeures pour l'humanité."
    }
};
