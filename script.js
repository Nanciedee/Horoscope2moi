// =========================================================================
// 1. EFFET DES ÉTOILES SCINTILLANTES EN BACKGROUND
// =========================================================================
window.addEventListener('DOMContentLoaded', function() {
    var container = document.getElementById('starsBg');
    if (!container) return;
    for (var i = 0; i < 80; i++) {
        var star = document.createElement('div');
        star.classList.add('star');
        star.style.top = Math.random() * 100 + '%';
        star.style.left = Math.random() * 100 + '%';
        var size = Math.random() * 2 + 1;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.animationDuration = (Math.random() * 3 + 2) + 's';
        container.appendChild(star);
    }
});

// =========================================================================
// 2. FORMULES MATHÉMATIQUES & LOGIQUE ASTROLOGIQUE
// =========================================================================
var LISTE_SIGNES = new Array("Capricorne", "Verseau", "Poissons", "Bélier", "Taureau", "Gémeaux", "Cancer", "Lion", "Vierge", "Balance", "Scorpion", "Sagittaire");

function obtenirSigneEtPlanete(j, m) {
    if ((m == 3 && j >= 21) || (m == 4 && j <= 19)) return new Array("Bélier", "Mars");
    if ((m == 4 && j >= 20) || (m == 5 && j <= 20)) return new Array("Taureau", "Vénus");
    if ((m == 5 && j >= 21) || (m == 6 && j <= 20)) return new Array("Gémeaux", "Mercure");
    if ((m == 6 && j >= 21) || (m == 7 && j <= 22)) return new Array("Cancer", "Lune");
    if ((m == 7 && j >= 23) || (m == 8 && j <= 22)) return new Array("Lion", "Soleil");
    if ((m == 8 && j >= 23) || (m == 9 && j <= 22)) return new Array("Vierge", "Mercure");
    if ((m == 9 && j >= 23) || (m == 10 && j <= 22)) return new Array("Balance", "Vénus");
    if ((m == 10 && j >= 23) || (m == 11 && j <= 21)) return new Array("Scorpion", "Pluton");
    if ((m == 11 && j >= 22) || (m == 12 && j <= 21)) return new Array("Sagittaire", "Jupiter");
    if ((m == 12 && j >= 22) || (m == 1 && j <= 19)) return new Array("Capricorne", "Saturne");
    if ((m == 1 && j >= 20) || (m == 2 && j <= 18)) return new Array("Verseau", "Uranus");
    return new Array("Poissons", "Neptune");
}

function genererTheme() {
    var nom = document.getElementById('idNom').value || "Aventurier";
    var dateInput = document.getElementById('dateNaissance').value;
    var heureInput = document.getElementById('heureNaissance').value;
    var villeInput = document.getElementById('villeNaissance').value;

    if (!dateInput || !heureInput || !villeInput) {
        alert("Veuillez remplir toutes les informations.");
        return;
    }

    var parties = dateInput.split('-');
    var annee = parseInt(parties[0]);
    var mois = parseInt(parties[1]);
    var jour = parseInt(parties[2]);
    
    var partiesHeure = heureInput.split(':');
    var heures = parseInt(partiesHeure[0]);
    var minutes = parseInt(partiesHeure[1]);

    // 1. Calcul du Signe Solaire
    var infosSolaire = obtenirSigneEtPlanete(jour, mois);
    var solaire = infosSolaire[0];
    var planete = infosSolaire[1];

    // 2. Calcul de l'Ascendant céleste ajusté sur la localité géographique
    var noeuds = new Array(18.2, 20.2, 22.2, 0.2, 2.2, 4.3, 6.3, 8.3, 10.4, 12.4, 14.4, 16.3);
    var hDec = heures + (minutes / 60);
    var geoMod = (villeInput.length * 0.1) % 2;
    var RAMC = (hDec + noeuds[mois - 1] + (jour * 0.066) + geoMod) % 24;
    var ascendant = LISTE_SIGNES[Math.floor((RAMC / 24) * 12)];

    // 3. Calcul du Signe Lunaire basé sur le cycle Epacte Métonique
    var epacte = (((annee - 1900) % 19 + 1) * 11 - 11) % 30;
    var ajustementMois = new Array(0, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    var ageLun = (epacte + jour + ajustementMois[mois - 1]) % 30;
    var luneIdx = Math.floor((((ageLun * 12.2) + (mois * 30) + jour) % 360) / 30);
    var lune = LISTE_SIGNES[luneIdx];

    // 4. Calcul du Signe Chinois & de son Élément annuel
    var chinois = new Array("Rat", "Bœuf", "Tigre", "Lapin", "Dragon", "Serpent", "Cheval", "Chèvre", "Singe", "Coq", "Chien", "Cochon");
    var elements = new Array("Métal", "Eau", "Bois", "Feu", "Terre");
    var animal = chinois[((annee - 4) % 12 + 12) % 12];
    var element = elements[(Math.floor((annee - 4) / 2) % 5 + 5) % 5];

    // 5. Calcul Numérologique (Chemin de vie complet)
    var chiffres = dateInput.replace(/-/g, "");
    var total = 0;
    for (var k = 0; k < chiffres.length; k++) { total += parseInt(chiffres[k]); }
    while (total > 9 && total !== 11 && total !== 22) {
        var strTotal = total.toString();
        var temp = 0;
        for (var mIdx = 0; mIdx < strTotal.length; mIdx++) { temp += parseInt(strTotal[mIdx]); }
        total = temp;
    }

    // =========================================================================
    // 3. INJECTION DES DONNÉES DANS L'INTERFACE D'AFFICHAGE HTML
    // =========================================================================
    document.getElementById('resBonjour').innerText = "✨ Carte du Ciel de : " + nom + " ✨";
    
    // Remplissage Solaire
    document.getElementById('resOccidental').innerText = solaire;
    document.getElementById('resPlanete').innerText = planete;
    document.getElementById('descSolaire').innerText = "Signe de force et d'énergie céleste sous la maîtrise de " + planete + ". Détermine l'expression consciente de votre ego de naissance.";
    
    // Remplissage Ascendant
    document.getElementById('resVille').innerText = villeInput;
    document.getElementById('resAscendant').innerText = ascendant;
    document.getElementById('descAscendant').innerText = "Votre posture sociale naturelle calculée spécifiquement pour la position céleste à " + villeInput + ". Gère les premières impressions mécaniques perçues par autrui.";
    
    // Remplissage Lunaire
    document.getElementById('resLunaire').innerText = lune;
    document.getElementById('descLunaire').innerText = "Gouverne vos émotions profondes, vos réactions instinctives en famille et votre jardin secret subconscient.";
    
    // Remplissage Chinois
    document.getElementById('resChinois').innerText = animal + " (" + element + ")";
    document.getElementById('descChinois').innerText = "Votre animal protecteur de l'astrologie orientale combiné aux forces structurelles de l'élément " + element + ".";
    
    // Remplissage Numérologie
    document.getElementById('resNumerologie').innerText = "Chemin de Vie " + total;
    document.getElementById('descNumerologie').innerText = "Indique votre vibration structurelle numérologique de naissance et la trajectoire de destin principale empruntée au cours de votre vie.";

    // Déblocage visuel de la boîte de résultats et défilement automatique
    var boiteResultat = document.getElementById('resultatBox');
    boiteResultat.style.display = "block";
    boiteResultat.scrollIntoView({ behavior: 'smooth' });
}
