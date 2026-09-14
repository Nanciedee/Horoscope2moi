// =========================================================================
// GÉNÉRATION AUTO DES ÉTOILES DU BACKGROUND & LOGIQUE DU THÈME
// =========================================================================

// Crée les petites étoiles scintillantes au chargement de la page
window.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('starsBg');
    if (!container) return; // Sécurité si l'élément n'existe pas encore
    
    const totalStars = 100; // Nombre de petites étoiles en arrière-plan

    for (let i = 0; i < totalStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Coordonnées aléatoires
        star.style.top = Math.random() * 100 + '%';
        star.style.left = Math.random() * 100 + '%';
        
        // Tailles variables (entre 1px et 3px)
        const size = Math.random() * 2 + 1;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        
        // Vitesse de clignotement aléatoire
        star.style.animationDuration = (Math.random() * 3 + 2) + 's';
        
        container.appendChild(star);
    }
});

function obtenirSigneEtPlanete(jour, mois) {
    if ((mois == 3 && jour >= 21) || (mois == 4 && jour <= 19)) return ["Bélier", "Mars"];
    if ((mois == 4 && jour >= 20) || (mois == 5 && jour <= 20)) return ["Taureau", "Vénus"];
    if ((mois == 5 && jour >= 21) || (mois == 6 && jour <= 20)) return ["Gémeaux", "Mercure"];
    if ((mois == 6 && jour >= 21) || (mois == 7 && jour <= 22)) return ["Cancer", "Lune"];
    if ((mois == 7 && jour >= 23) || (mois == 8 && jour <= 22)) return ["Lion", "Soleil"];
    if ((mois == 8 && jour >= 23) || (mois == 9 && jour <= 22)) return ["Vierge", "Mercure"];
    if ((mois == 9 && jour >= 23) || (mois == 10 && jour <= 22)) return ["Balance", "Vénus"];
    if ((mois == 10 && jour >= 23) || (mois == 11 && jour <= 21)) return ["Scorpion", "Pluton / Mars"];
    if ((mois == 11 && jour >= 22) || (mois == 12 && jour <= 21)) return ["Sagittaire", "Jupiter"];
    if ((mois == 12 && jour >= 22) || (mois == 1 && jour <= 19)) return ["Capricorne", "Saturne"];
    if ((mois == 1 && jour >= 20) || (mois == 2 && jour <= 18)) return ["Verseau", "Uranus"];
    return ["Poissons", "Neptune"];
}

function genererTheme() {
    const nom = document.getElementById('idNom').value || "Aventurier";
    const dateInput = document.getElementById('dateNaissance').value;
    const heureInput = document.getElementById('heureNaissance').value;
    const villeInput = document.getElementById('villeNaissance').value;

    if (!dateInput || !heureInput || !villeInput) {
        alert("Veuillez remplir toutes les informations (y compris la ville et le pays).");
        return;
    }

    const date = new Date(dateInput);
    const jour = date.getUTCDate();
    const mois = date.getUTCMonth() + 1;
    const annee = date.getUTCFullYear();

    const [heures, minutes] = heureInput.split(':').map(Number);

    // 1. CALCUL DU SIGNE SOLAIRE
    const [signeSolaire, planeteMaitresse] = obtenirSigneEtPlanete(jour, mois);

    // 2. ALGORITHME DE L'ASCENDANT
    const noeudsSideraux = [18.2, 20.2, 22.2, 0.2, 2.2, 4.3, 6.3, 8.3, 10.4, 12.4, 14.4, 16.3];
    let heureDecimale = heures + (minutes / 60);
    
    let decalageGeographique = (villeInput.length * 0.15) % 2.5; 
    let RAMC = (heureDecimale + noeudsSideraux[mois - 1] + (jour * 0.066) + decalageGeographique) % 24;
    let indexAsc = Math.floor((RAMC / 24) * 12);
    let signeAscendant = LISTE_SIGNES[indexAsc];

    // 3. ALGORITHME LUNAIRE (Correction apportée sur les valeurs du tableau de décalage)
    let C = annee - 1900;
    let G = (C % 19) + 1;
    let epacte = ((11 * G) - 11) % 30;
    const joursMoisAstro =; // Tableau de correction corrigé
    let ageLunaire = (epacte + jour + joursMoisAstro[mois - 1]) % 30;
    let positionLongLunaire = ((ageLunaire * 12.2) + (mois * 30) + (jour * 1)) % 360;
    let indexLune = Math.floor(positionLongLunaire / 30);
    let signeLunaire = LISTE_SIGNES[indexLune];

    // 4. CALCUL DU SIGNE CHINOIS
    const animauxChinois = ["Rat", "Bœuf", "Tigre", "Lièvre (Lapin)", "Dragon", "Serpent", "Cheval", "Chèvre", "Singe", "Coq", "Chien", "Cochon"];
    const elementsChinois = ["Métal", "Eau", "Bois", "Feu", "Terre"];
    let indexAnimal = (annee - 4) % 12;
    if (indexAnimal < 0) indexAnimal += 12;
    let indexElement = Math.floor((annee - 4) / 2) % 5;
    if (indexElement < 0) indexElement += 5;
    let animalChinois = animauxChinois[indexAnimal];
    let elementChinois = elementsChinois[indexElement];

    // 5. CALCUL NUMÉROLOGIE (Chemin de vie)
    let chaineDate = dateInput.replace(/-/g, "");
    let totalNum = 0;
    for (let char of chaineDate) { totalNum += parseInt(char); }
    while (totalNum > 9 && totalNum !== 11 && totalNum !== 22 && totalNum !== 33) {
        totalNum = totalNum.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b), 0);
    }

    // =========================================================================
    // INJECTION DES DONNÉES ET DES TEXTES DANS L'INTERFACE HTML
    // =========================================================================
    document.getElementById('resBonjour').innerText = `✨ Carte du Ciel de : ${nom} ✨`;
    
    // Solaire
    document.getElementById('resOccidental').innerText = signeSolaire;
    document.getElementById('resPlanete').innerText = planeteMaitresse;
    document.getElementById('descSolaire').innerText = INTERPRETATIONS[signeSolaire];
    
    // Ascendant
    document.getElementById('resVille').innerText = villeInput;
    document.getElementById('resAscendant').innerText = signeAscendant;
    document.getElementById('descAscendant').innerText = INTERPRETATIONS[signeAscendant] + COMPORTEMENT_ASCENDANT;
    
    // Lunaire
    document.getElementById('resLunaire').innerText = signeLunaire;
    document.getElementById('descLunaire').innerText = INTERPRETATIONS[signeLunaire] + COMPORTEMENT_LUNAIRE;
    
    // Chinois
    document.getElementById('resChinois').innerText = `${animalChinois} de ${elementChinois}`;
    document.getElementById('descChinois').innerText = INTERPRETATIONS_CHINOIS[animalChinois];
    
    // Numérologie
    document.getElementById('resNumerologie').innerText = `Chemin de Vie ${totalNum}`;
    document.getElementById('descNumerologie').innerText = INTERPRETATIONS_NUMERO[totalNum];

    // Affichage de la boîte de résultats et défilement
    document.getElementById('resultatBox').style.display = "block";
    document.getElementById('resultatBox').scrollIntoView({ behavior: 'smooth' });
}
