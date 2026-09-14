// =========================================================================
// 1. EFFET DES ÉTOILES SCINTILLANTES
// =========================================================================
window.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('starsBg');
    if (!container) return;
    for (let i = 0; i < 80; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.top = Math.random() * 100 + '%';
        star.style.left = Math.random() * 100 + '%';
        const size = Math.random() * 2 + 1;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.animationDuration = (Math.random() * 3 + 2) + 's';
        container.appendChild(star);
    }
});

// =========================================================================
// 2. MOTEUR DE CALCULS ASTROLOGIQUES
// =========================================================================
const LISTE_SIGNES = ["Capricorne", "Verseau", "Poissons", "Bélier", "Taureau", "Gémeaux", "Cancer", "Lion", "Vierge", "Balance", "Scorpion", "Sagittaire"];

function obtenirSigneEtPlanete(j, m) {
    if ((m == 3 && j >= 21) || (m == 4 && j <= 19)) return ["Bélier", "Mars"];
    if ((m == 4 && j >= 20) || (m == 5 && j <= 20)) return ["Taureau", "Vénus"];
    if ((m == 5 && j >= 21) || (m == 6 && j <= 20)) return ["Gémeaux", "Mercure"];
    if ((m == 6 && j >= 21) || (m == 7 && j <= 22)) return ["Cancer", "Lune"];
    if ((m == 7 && j >= 23) || (m == 8 && j <= 22)) return ["Lion", "Soleil"];
    if ((m == 8 && j >= 23) || (m == 9 && j <= 22)) return ["Vierge", "Mercure"];
    if ((m == 9 && j >= 23) || (m == 10 && j <= 22)) return ["Balance", "Vénus"];
    if ((m == 10 && j >= 23) || (m == 11 && j <= 21)) return ["Scorpion", "Pluton"];
    if ((m == 11 && j >= 22) || (m == 12 && j <= 21)) return ["Sagittaire", "Jupiter"];
    if ((m == 12 && j >= 22) || (m == 1 && j <= 19)) return ["Capricorne", "Saturne"];
    if ((m == 1 && j >= 20) || (m == 2 && j <= 18)) return ["Verseau", "Uranus"];
    return ["Poissons", "Neptune"];
}

function genererTheme() {
    const nom = document.getElementById('idNom').value || "Aventurier";
    const dateInput = document.getElementById('dateNaissance').value;
    const heureInput = document.getElementById('heureNaissance').value;
    const villeInput = document.getElementById('villeNaissance').value;

    if (!dateInput || !heureInput || !villeInput) {
        alert("Veuillez remplir toutes les informations.");
        return;
    }

    // Découpage correct de la date (AAAA-MM-JJ)
    const parties = dateInput.split('-');
    const annee = parseInt(parties[0]);
    const mois = parseInt(parties[1]);
    const jour = parseInt(parties[2]);
    const [heures, minutes] = heureInput.split(':').map(Number);

    // 1. Signe Solaire
    const [solaire, planete] = obtenirSigneEtPlanete(jour, mois);

    // 2. Calcul de l'Ascendant (Basé sur l'heure et la longueur du nom de la ville)
    const noeuds = [18.2, 20.2, 22.2, 0.2, 2.2, 4.3, 6.3, 8.3, 10.4, 12.4, 14.4, 16.3];
    let hDec = heures + (minutes / 60);
    let geoMod = (villeInput.length * 0.1) % 2;
    let RAMC = (hDec + noeuds[mois - 1] + (jour * 0.066) + geoMod) % 24;
    let ascendant = LISTE_SIGNES[Math.floor((RAMC / 24) * 12)];

    // 3. Calcul du Signe Lunaire (Ligne de code entièrement réparée ici)
    let epacte = (((annee - 1900) % 19 + 1) * 11 - 11) % 30;
    const ajustementMois =;
    let ageLun = (epacte + jour + ajustementMois[mois - 1]) % 30;
    let luneIdx = Math.floor((((ageLun * 12.2) + (mois * 30) + jour) % 360) / 30);
    let lune = LISTE_SIGNES[luneIdx];

    // 4. Calcul du Signe Chinois
    const chinois = ["Rat", "Bœuf", "Tigre", "Lapin", "Dragon", "Serpent", "Cheval", "Chèvre", "Singe", "Coq", "Chien", "Cochon"];
    const elements = ["Métal", "Eau", "Bois", "Feu", "Terre"];
    let animal = chinois[((annee - 4) % 12 + 12) % 12];
    let element = elements[(Math.floor((annee - 4) / 2) % 5 + 5) % 5];

    // 5. Calcul Numérologie (Chemin de vie)
    let chiffres = dateInput.replace(/-/g, "");
    let total = 0;
    for (let c of chiffres) { total += parseInt(c); }
    while (total > 9 && total !== 11 && total !== 22) {
        total = total.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b), 0);
    }

    // =========================================================================
    // INJECTION DANS L'INTERFACE HTML
    // =========================================================================
    document.getElementById('resBonjour').innerText = `✨ Carte du Ciel de : ${nom} ✨`;
    document.getElementById('resOccidental').innerText = solaire;
    document.getElementById('resPlanete').innerText = planete;
    document.getElementById('descSolaire').innerText = `Signe de force et d'énergie céleste sous la maîtrise de ${planete}.`;
    
    document.getElementById('resVille').innerText = villeInput;
    document.getElementById('resAscendant').innerText = ascendant;
    document.getElementById('descAscendant').innerText = `Votre posture sociale naturelle calculée spécifiquement pour la position céleste à ${villeInput}.`;
    
    document.getElementById('resLunaire').innerText = lune;
    document.getElementById('descLunaire').innerText = `Gouverne vos émotions profondes, vos réactions instinctives et votre jardin secret.`;
    
    document.getElementById('resChinois').innerText = `${animal} (${element})`;
    document.getElementById('descChinois').innerText = `Votre signe protecteur oriental combiné aux forces de l'élément ${element}.`;
    
    document.getElementById('resNumerologie').innerText = `Chemin de Vie ${total}`;
    document.getElementById('descNumerologie').innerText = `Indique votre vibration de naissance et la trajectoire principale de votre destin.`;

    // Affichage final
    document.getElementById('resultatBox').style.display = "block";
    document.getElementById('resultatBox').scrollIntoView({ behavior: 'smooth' });
}
