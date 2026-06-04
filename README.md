# Noah Labs - Proposition Commerciale Dermacadémie

**Première version de la solution Lead-Gen Data-Driven pour Dermacadémie**

Une application d'accompagnement intelligente conçue pour optimiser le remplissage des sessions de formation de Dermacadémie grâce à la technologie d'IA générative Google Gemini et une stratégie data-driven éprouvée.

---

## 📋 Table des matières

- [🎯 Objectif](#-objectif)
- [📊 Contexte & Client](#-contexte--client)
- [🚀 Démarrage Rapide](#-démarrage-rapide)
- [📦 Scripts disponibles](#-scripts-disponibles)
- [🛠️ Stack Technique](#️-stack-technique)
- [📁 Structure du Projet](#-structure-du-projet)
- [🔐 Variables d'Environnement](#-variables-denvironnement)
- [💡 Cas d'Usage Prioritaires](#-cas-dusage-prioritaires)
- [📈 Architecture de l'Offre](#-architecture-de-loffre)
- [✅ Critères de Succès](#-critères-de-succès)
- [🔄 Prochaines Étapes](#-prochaines-étapes)
- [🌐 Ressources Utiles](#-ressources-utiles)

---

## 🎯 Objectif

Ce projet propose une solution pilote de **génération de prospects (Lead Gen) basée sur les données** pour identifier et convertir les meilleurs candidats pour les formations Dermacadémie. L'application utilise l'API Gemini pour analyser et qualifier automatiquement les prospects issus d'une base enrichie de ~90 000 entreprises du secteur esthétique, tatouage et piercing.

**Objectif Métier :** 
- Remplir les sessions de formation de septembre et décembre 2026 (4-6 stagiaires/session à 1 500 €)
- Réduire la dépendance aux Meta Ads en activant un canal de prospection "always-on"
- Construire un actif méthodologique réutilisable via Lab Digital

---

## 📊 Contexte & Client

### Profil d'Opérationnel : Yann PLANCHENAULT

Yann PLANCHENAULT est fondateur d'un écosystème de micro-entreprises dans la formation professionnelle et services digitaux :

- **Lab Académie** (OF Qualiopi actif)
- **Dermacadémie** (OF en création, co-fondé avec Noémie et Estelle CARRASCO, Bordeaux)
- **Dermosolution** (institut)
- **SMP Solutions** (tricopigmentation capillaire)
- **Lab Digital** (entité digitale en refonte)

**Profil Dominant :** Commercial (ancien agencier communication, présent BNI Bordeaux)  
**Zone Aveugle :** Totalement junior sur Data/IA - cherche une compétence complémentaire

### Environnement Sectoriel

- Marché fragmenté dominé par des TPE/micro-entreprises peu digitalisées
- Pression réglementaire croissante (Qualiopi depuis 2021, certibiocides depuis 2025)
- Fenêtre first-mover pour la génération de leads data-driven dans ce secteur
- Concurrence peu structurée (ex. Scalesia à 4 500 € trop coûteux pour TPE)

### Contraintes Structurelles

1. Gestion simultanée de 5 entités à stades de maturité différents
2. Sessions à dates fixes avec petites jauges (4-6 stagiaires, présentiel Bordeaux)
3. Dépendance à Estelle CARRASCO (formatrice unique)
4. Représentation BNI limitée à une activité par entité
5. Absence de budget pré-établi (WTP conditionnel au ROI)
6. Zéro matériel tech actuel (Meta Ads + BNI/bouche-à-oreille uniquement)

---

## 🚀 Démarrage Rapide

### Prérequis

- **Node.js** (v18+)
- Clé API **Google Gemini** ([obtenir ici](https://ai.google.dev))
- Environnement avec support TypeScript

### Installation

1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/Noah-Consultant/noah-labs-leadGen-proposal.git
   cd noah-labs-leadGen-proposal
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```
   
   Cette commande :
   - Lit le fichier `package.json`
   - Télécharge tous les packages/bibliothèques nécessaires
   - Crée un dossier `node_modules/` contenant toutes les dépendances
   - Génère/met à jour `package-lock.json` avec les versions exactes
   
   **C'est une étape obligatoire** - sans elle, l'application ne peut pas démarrer.

3. **Configurer les variables d'environnement**
   ```bash
   cp .env.example .env.local
   ```
   
   Remplissez votre clé API Gemini dans `.env.local` :
   ```
   GEMINI_API_KEY=your_api_key_here
   APP_URL=http://localhost:3000
   ```

4. **Lancer l'application en développement**
   ```bash
   npm run dev
   ```
   L'app sera accessible sur `http://localhost:3000`

---

## 📦 Scripts disponibles

| Commande | Description | Utilité |
|----------|-------------|---------|
| `npm run dev` | Lance le serveur de développement sur le port 3000 avec hot-reload | Développement local |
| `npm run build` | Crée une build optimisée de production | Déploiement en production |
| `npm run preview` | Prévisualise localement la build de production | Tester avant de déployer |
| `npm run lint` | Vérifie la qualité du code TypeScript | Valider la syntaxe |
| `npm run clean` | Nettoie les artefacts de build (dist/, server.js) | Repartir de zéro |

---

## 🛠️ Stack Technique

### Frontend
- **React** 19 - Framework UI moderne pour les interfaces interactives
- **Vite** 6.2 - Bundler ultra-rapide avec hot module replacement
- **TypeScript** 5.8 - Typage statique pour éviter les erreurs
- **Tailwind CSS** 4.1 - Design system utility-first pour un styling rapide
- **Motion** 12.23 - Animations fluides et performantes
- **Lucide React** - Bibliothèque d'icônes minimalistes et modulaires

### Backend
- **Express** 4.21 - Serveur API léger et flexible
- **Node.js** 22 - Runtime JavaScript côté serveur
- **@google/genai** 2.4 - Client officiel pour l'API Gemini (classification, enrichissement IA)

### Outils de Développement
- **TSX** 4.21 - Exécution TypeScript directe sans compilation préalable
- **esbuild** 0.25 - Compilateur JavaScript ultra-rapide
- **Autoprefixer** 10.4 - Ajout automatique des préfixes CSS pour compatibilité navigateur
- **dotenv** 17.2 - Gestion des variables d'environnement

### Infrastructure
- **Vite Config** - Configuration personnalisée pour React + TypeScript
- **AI Studio** - Déploiement et gestion d'app IA via Google Cloud

---

## 📁 Structure du Projet

```
.
├── src/                    # Code source (à organiser)
│   ├── components/         # Composants React réutilisables
│   ├── pages/              # Pages principales
│   ├── services/           # Services API et Gemini
│   ├── utils/              # Fonctions utilitaires
│   └── types/              # Définitions TypeScript
├── public/                 # Fichiers statiques (images, fonts)
├── index.html              # Point d'entrée HTML principal
├── metadata.json           # Métadonnées de l'application (AI Studio)
├── package.json            # Dépendances et scripts npm
├── package-lock.json       # Versions exactes des dépendances (auto-généré)
├── tsconfig.json           # Configuration TypeScript
├── vite.config.ts          # Configuration Vite
├── .env.example            # Exemple de fichier .env (à copier en .env.local)
├── .gitignore              # Fichiers à ignorer par Git
└── README.md               # Ce fichier
```

---

## 🔐 Variables d'Environnement

| Variable | Description | Format | Exemple | Obligatoire |
|----------|-------------|--------|---------|------------|
| `GEMINI_API_KEY` | Clé API Google Gemini pour les appels IA | String | `AIzaSy...` | ✅ Oui |
| `APP_URL` | URL de l'application déployée (callbacks OAuth, liens self-referential) | URL | `https://app.example.com` | ✅ Oui |

**Notes importantes :**
- En production sur AI Studio, ces variables sont injectées automatiquement via les Secrets
- En développement local, utiliser `.env.local` (jamais commiter cette version)
- Les variables d'environnement ne sont jamais exposées au frontend - elles restent côté serveur

---

## 💡 Cas d'Usage Prioritaires

### CU1 - Extraction & Qualification de la Base NAF

**Problème actuel :**  
Yann a identifié ~90 000 entreprises (code NAF 9602B sur DataGouv) mais les données brutes sont inutilisables directement (pas de contact, pas de qualification).

**Solution proposée :**
- Scraping SIRET/DataGouv automatisé
- Enrichissement par signaux métier (présence web, Instagram, Google Business)
- Scoring IA pondéré par persona (esthéticienne 70%, tatoueur 20%, perceur 10%)

**ROI attendu :**  
Transformer une liste brute en base qualifiée de 200-300 prospects actionnables en 3 mois

**Implémentation :**
```typescript
// Pseudo-code : enrichissement automatique de la base NAF
const enrichProspect = async (siret: string) => {
  const companyData = await fetchDataGouv(siret);
  const webSignals = await analyzeWebPresence(companyData.website);
  const instagramSignals = await searchInstagram(companyData.name);
  const googleRating = await fetchGoogleBusiness(companyData.gmb_id);
  
  const enrichedScore = await geminiClient.scoreProspect({
    company: companyData,
    webSignals,
    instagramSignals,
    googleRating
  });
  
  return enrichedScore;
};
```

---

### CU2 - Scoring IA & Priorisation par Persona

**Problème actuel :**  
Aucun scoring ni segmentation opérationnelle. Les Meta Ads touchent une audience large non différenciée.

**Contrainte :** Sessions petites (4-6 places) → besoin de précision sur le volume

**Solution proposée :**
- Modèle de scoring pondéré par profil
- Signaux d'activité professionnelle récente
- Priorisation par zone géographique (Bordeaux/France)
- Tableau de bord de visualisation des leads

**ROI attendu :**  
Réduction du taux de déchets, ciblage chirurgical aligné sur la contrainte de jauge petite

---

### CU3 - Séquences Email Outreach par Persona

**Problème actuel :**  
100% dépendant des Meta Ads dont le CAC augmente structurellement.

**Solution proposée :**
- 3 séquences email automatisées différenciées (esthéticienne vs tatoueur vs perceur)
- 3 landing pages dédiées aux codes visuels de chaque niche
- Relance téléphonique sur les profils les plus engagés
- Conformité RGPD intégrale (opt-out, mentions légales, politique de conservation)

**ROI attendu :**  
Canal "always-on" complémentaire, message personnalisé, coût marginal décroissant

---

### CU4 - Tableau de Bord de Pilotage du Pipeline

**Problème actuel :**  
Aucun reporting de pipeline. Impossible de savoir si le pilote fonctionne.

**Solution proposée :**
- Dashboard simple (Notion/Google Sheets) du suivi des leads
- Metrics : volume, taux de qualification, CAC comparatif (Ads vs. data-driven)
- Leads par source, persona, session cible
- Reporting hebdomadaire automatisé

**ROI attendu :**  
Première visibilité data sur l'efficacité commerciale, argument pour industrialiser

---

### CU5 - Cadre RGPD Opérationnel Documenté

**Problème actuel :**  
Aucun cadre formalisé - sujet ouvert et non résolu. Risque CNIL réel.

**Solution proposée :**
- Template mentions légales emails
- Procédure opt-out automatisée
- Politique de conservation des données (UE)
- Hébergement conforme RGPD

**ROI attendu :**  
Sécurité opérationnelle, crédibilité renforcée de Dermacadémie comme OF sérieux

---

### CU6 - Activation du Marché Certibiocides (Phase 2)

**Contexte :**  
Formation obligatoire depuis 2025. Validation ministérielle en attente.

**Opportunité :**  
Fenêtre first-mover sur les mêmes 90 000 entités NAF

**Solution proposée :**
- Réutilisation de la base enrichie du pilote
- Segmentation spécifique certibiocides (non-conformes)
- Campagne dédiée dès validation ministérielle

**ROI attendu :**  
Rentabilisation accélérée de l'infrastructure data sur un 2e produit

---

## 📈 Architecture de l'Offre

### Module 0 - Cadrer (Prérequis, 1 semaine)

**Objectif :**  
Établir le périmètre exact du pilote et documenter le cadre RGPD opérationnel.

**Livrables :**
- Fiche de cadrage pilote (personas, zone géographique, critères de qualification)
- Template RGPD complet (mentions légales, procédure opt-out, politique de conservation)
- Confirmation de l'état de la base DataGouv

**Format :** Atelier remote 2h + livrable asynchrone  
**Charge Yann :** 2h de validation des critères de qualification

**Exemple de Fiche de Cadrage :**
```json
{
  "pilote": {
    "client_primary": "Dermacadémie",
    "sessions_target": ["sept-2026", "dec-2026"],
    "places_per_session": 4,
    "prix_per_stagiaire": 1500,
    "revenue_target": 12000
  },
  "personas": [
    {
      "name": "Esthéticienne Indépendante",
      "weight": 0.7,
      "geo_target": ["Bordeaux", "Nouvelle-Aquitaine"],
      "qualification_signals": ["instagram_actif", "google_business", "site_web"],
      "naf_codes": ["9602B", "9603Z"]
    },
    {
      "name": "Tatoueur Indépendant",
      "weight": 0.2,
      "geo_target": ["Bordeaux", "France"],
      "qualification_signals": ["instagram_actif", "portfolio_web"],
      "naf_codes": ["9602B"]
    }
  ],
  "rgpd": {
    "hosting_location": "EU",
    "data_retention": "3_months",
    "opt_out_url": "/unsubscribe",
    "legal_basis": "B2B_prospection_professionnelle"
  }
}
```

---

### Module 1 - Extraire & Enrichir (Semaines 2-3)

**Objectif :**  
Transformer la base NAF 9602B en liste enrichie, géolocalisée, avec signaux métier.

**Livrables :**
- Base de données enrichie (SIRET, nom, localisation, présence web, Instagram, Google Business)
- Signaux métier détectés par IA
- Hébergement UE conforme RGPD

**Format :** Sprint technique, livraison fichier structuré + dashboard  
**Charge Yann :** Validation de 20-30 profils pour calibrer la qualité

**Exemple de Données Enrichies :**
```json
{
  "siret": "12345678901234",
  "name": "Salon Beauté & Tatoo Bordeaux",
  "naf_code": "9602B",
  "location": {
    "city": "Bordeaux",
    "zipcode": "33000",
    "region": "Nouvelle-Aquitaine"
  },
  "signals": {
    "instagram": {
      "found": true,
      "followers": 2450,
      "posts_last_30d": 15,
      "keywords_found": ["dermopigmentation", "tatouage permanent", "sourire"]
    },
    "google_business": {
      "found": true,
      "rating": 4.8,
      "reviews_count": 127
    },
    "website": {
      "found": true,
      "mentions_formation": true,
      "contact_email": "contact@salon.fr"
    }
  },
  "gemini_score": {
    "estheticienne_score": 0.92,
    "tatoueur_score": 0.15,
    "perceur_score": 0.08,
    "primary_persona": "estheticienne",
    "qualified": true,
    "reasoning": "Salon avec forte présence Instagram mentionnant dermopigmentation, bonne notation Google, actif région Bordeaux"
  }
}
```

---

### Module 2 - Scorer & Prioriser (Semaine 3-4)

**Objectif :**  
Construire et appliquer le modèle de scoring IA pour prioriser par persona et urgence.

**Livrables :**
- Modèle de scoring documenté (critères, pondérations, seuils)
- Tableau de bord de priorisation (vue par persona/zone/score)
- Shortlist de 200-300 leads prioritaires

**Format :** Livraison asynchrone + session de revue 1h  
**Charge Yann :** 1h de revue du scoring pour validation métier

**Logique de Scoring :**
```
Score Final = (Signal Web × 0.3) + (Activité Récente × 0.35) + (Géo-Proximité × 0.2) + (Persona Match × 0.15)

Avec :
- Signal Web : présence Google Business, website, Instagram
- Activité Récente : posts/publications dans les 30 derniers jours
- Géo-Proximité : Bordeaux = 1.0, Aquitaine = 0.8, France = 0.5
- Persona Match : esthéticienne 70%, tatoueur 20%, perceur 10%

Seuil de Qualification : Score > 0.65
```

---

### Module 3 - Outiller & Lancer (Semaines 4-6)

**Objectif :**  
Déployer les séquences email différenciées par persona, conformes RGPD.

**Livrables :**
- 3 séquences email (esthéticienne, tatoueur, perceur) avec A/B test objet
- 3 landing pages dédiées aux codes visuels de chaque niche
- Intégration opt-out + premier envoi conforme RGPD

**Format :** Sprint technique + 1 session de validation du contenu  
**Charge Yann :** 1h de validation des messages + feedback premiers contacts

**Template Email - Esthéticienne :**
```html
Subject: [A/B Test] Formation Dermopigmentation : 8 places disponibles en septembre

Bonjour [NOM],

Vous explorez actuellement les formations en dermopigmentation avancée ?

Lab Académie & Dermacadémie proposent une formation intensive [DATE] à Bordeaux :
- 4 jours en présentiel
- Petit groupe (4-6 participants)
- 100% pratique sur modèles
- Certification reconnue
- Finançable FAFCEA (jusqu'à 3 200 €)

[CALL TO ACTION : Voir le programme]

---

Vous recevez cet email car vous êtes référencée comme professionnelle esthétique active en Aquitaine.
[Lien désinscription RGPD]
[Politique de confidentialité]
```

---

### Module 4 - Piloter & Qualifier (Semaines 6-12, Always-On)

**Objectif :**  
Suivre la performance du pipeline, qualifier les leads entrants, alimenter les sessions.

**Livrables :**
- Rapport hebdomadaire (volume, ouvertures, leads qualifiés, CAC estimé vs. Meta Ads)
- Relance téléphonique sur profils engagés
- Ajustements du scoring selon retours terrain

**Format :** Suivi asynchrone + point biweekly 30 min  
**Charge Yann :** 30 min/semaine de feedback sur la qualité des leads

**Tableau de Bord Hebdomadaire :**
```
Semaine du 1er juillet 2026

📊 Volume
├── Emails envoyés : 45
├── Taux d'ouverture : 28% (benchmark : 18-25%)
├── Clics landing : 12 (26% des ouvertures)
└── Formulaires remplis : 8

🎯 Leads Qualifiés
├── Esthéticiennes qualifiées : 6
├── Tatoueurs qualifiés : 1
├── Perceurs qualifiés : 1
└── Total : 8 leads (100% du volume clics)

💰 CAC & ROI
├── CAC Data-Driven estimé : 187 €/lead
├── CAC Meta Ads (référence) : 450 €/lead
├── Économie : 263 €/lead (58% réduction)
└── Projection sur 12 leads (2 sessions) : 3 156 € économisés

🔄 Conversion Pipeline
├── Leads en attente de relance tel : 5
├── Leads convertis session sept : 2
├── Leads convertis session déc : 1
└── Taux de conversion leads → inscription : 37%
```

---

### Module 5 - Répliquer (Post-Pilote, Conditionnel)

**Objectif :**  
Packager la méthode validée en offre revendable via Lab Digital.

**Livrables :**
- Playbook de la méthode (personas, critères, séquences, RGPD)
- Proposition de tarification pour clients Lab Digital
- Premiers cas d'usage identifiés

**Format :** Atelier de restitution + co-design de l'offre  
**Charge Yann :** Demi-journée de travail commun

---

## ✅ Critères de Succès

Le pilote sera considéré comme **réussi** si et seulement si :

- ✅ **Au moins 4 places remplies** sur la session de septembre Bordeaux (objectif minimum)
- ✅ **Sans augmentation du budget Meta Ads** (canal data-driven autonome)
- ✅ **Zéro action technique côté Yann** (livraison clé en main validée)
- ✅ **Cadre RGPD documenté et livré** avant le premier envoi (zéro risque juridique)
- ✅ **Scoring opérationnel** distinguant clairement les 3 personas
- ✅ **CAC data-driven mesurable** et comparé au CAC Meta Ads de référence
- ✅ **Base data enrichie réutilisable** sur certibiocides (actif durable)
- ✅ **Méthode documentée en 10 minutes** pour présentation prospect Lab Digital

---

## 🔄 Prochaines Étapes

### Action 1 - Quantifier le CAC Meta Ads de Référence 📊

**Responsable :** Yann PLANCHENAULT  
**Délai :** Avant le RDV de mise en place  
**Tâche :**
- Obtenir le coût par lead actuel (Meta Ads)
- Obtenir le taux de conversion lead → inscription
- Partager le fichier avec Stanislas

**Pourquoi c'est critique :**  
Sans ce chiffre, l'argument ROI du pilote reste générique. C'est la baseline de comparaison.

**Exemple de Données Attendues :**
```
Meta Ads - Juin 2026
├── Budget investi : 1 800 €
├── Leads générés : 4
├── CAC : 450 €/lead
├── Inscriptions : 1
└── Taux conversion lead→inscription : 25%
```

---

### Action 2 - Valider l'État de la Base DataGouv 📁

**Responsable :** Yann PLANCHENAULT  
**Délai :** Avant le RDV de mise en place  
**Tâche :**
- Vérifier si données brutes exploitables (fichier CSV, URL, export)
- Partager l'extraction complète avec Stanislas
- Confirmer le volume exact (~90 000 ou chiffre réel)

**Pourquoi c'est critique :**  
Détermine le délai de lancement du Module 1. Si donnees non préparées = délai +2 semaines.

---

### Action 3 - Tester un Premier Message sur 10 Contacts 📧

**Responsable :** Stanislas (avec validation Yann)  
**Délai :** Semaine 1 post-Module 0  
**Tâche :**
1. Co-rédiger 1 email test esthéticienne avec Yann (1h de travail commun)
2. Lancer sur 10 prospects zone Bordeaux
3. Mesurer : ouvertures, clics, premières réactions
4. Itérer sur le message avant la séquence complète

**Pourquoi c'est critique :**  
Test comportement réel vs. intention + première mise à l'épreuve du cadre RGPD en vrai.

---

### Action 4 - Calibrer la Définition d'un "Lead Qualifié" avec Estelle CARRASCO 🎯

**Responsable :** Stanislas + Yann + Estelle CARRASCO  
**Délai :** Avant le Module 2 (scoring)  
**Tâche :**
- Atelier de 1h à trois pour définir : quel profil apprend réellement et complète la formation ?
- Cas d'usage concrets : qu'est-ce qu'une esthéticienne qui va finir la formation ?
- Documenter les signaux de qualification basés sur l'expérience terrain d'Estelle

**Pourquoi c'est critique :**  
Estelle est la formatrice - elle sait ce qui marche. Le scoring doit être ancré dans la réalité terrain, pas théorique.

**Points à Couvrir :**
- Profil type qui réussit la formation (expérience, motivation, localisation)
- Signaux d'engagement à valider avant inscription
- Taille idéale du groupe (4 vs. 6 places)
- Critères d'abandon ou de non-complétion

---

### Action 5 - Lever la Contrainte FAFCEA 💰

**Responsable :** Yann PLANCHENAULT  
**Délai :** Avant la mise en ligne des landing pages  
**Tâche :**
- Vérifier l'éligibilité des formations Dermacadémie au financement FAFCEA
- Confirmer le montant max (jusqu'à 3 200 €)
- Valider le process administratif (devis, justificatif statut artisan, etc.)

**Pourquoi c'est critique :**  
Cet argument transforme radicalement le discours commercial. Tatoueurs/perceurs indépendants = artisans = FAFCEA possible = formation devenant quasi-gratuite pour eux = conversion massif.

**Impact sur le Message Commercial :**

❌ **Avant :** "Formation 1 500 € en septembre"  
✅ **Après :** "Formation 1 500 € - Financable par FAFCEA (jusqu'à 3 200 €) si vous êtes artisan indépendant"

---

## 🌐 Vue d'ensemble AI Studio

Cette application est hébergée sur **Google AI Studio** :
- **App Link :** https://ai.studio/apps/9bcc247c-f634-4d60-98d0-3bb505f83af0
- **Capacités :** API Gemini côté serveur pour l'enrichissement et le scoring IA

**Déploiement :**
- Infrastructure : Google Cloud Run
- Runtime : Node.js 22
- Secrets : GEMINI_API_KEY injecté automatiquement par AI Studio
- URL : Automatiquement liée au APP_URL du projet

---

## 📝 À propos du Projet

| Champ | Valeur |
|-------|--------|
| **Entreprise** | Noah Consultant |
| **Client** | Yann PLANCHENAULT / Dermacadémie |
| **Co-fondatrices Dermacadémie** | Noémie PLANCHENAULT, Estelle CARRASCO |
| **Localisation** | Bordeaux, Nouvelle-Aquitaine |
| **Secteur** | Formation professionnelle (esthétique, tatouage, piercing) |
| **Type de Projet** | Proposition commerciale - Pilote Lead-Gen Data-Driven |
| **Statut** | 🔄 Version Pilote - En Développement |
| **Date Démarrage** | Juin 2026 |
| **Horizon Pilote** | 3 mois (septembre-décembre 2026) |

**Cas d'usage :**  
Cette application démontre comment utiliser l'IA générative et les données publiques pour automatiser et optimiser l'acquisition de prospects dans le secteur de la formation professionnelle artisanale.

---

## 📚 Ressources Utiles

### Documentation Technique
- [Documentation Google Gemini API](https://ai.google.dev/docs)
- [Documentation Vite](https://vitejs.dev/)
- [Documentation React 19](https://react.dev)
- [Documentation Express](https://expressjs.com/)
- [Documentation TypeScript](https://www.typescriptlang.org/docs/)

### Cadre RGPD & Juridique
- [CNIL - Prospection commerciale](https://www.cnil.fr/fr/comment-structurer-votre-prospection-commerciale)
- [RGPD B2B - Cas pratiques](https://www.cnil.fr/fr/les-droits-des-individus)
- [Mentions légales - Modèles](https://www.cnil.fr/fr/comment-structurer-votre-prospection-commerciale)

### Données & Sectoriel
- [DataGouv - NAF Codes](https://data.gouv.fr/)
- [INSEE - NAF 9602B](https://www.insee.fr/fr/information/2406147)
- [Qualiopi - Critères](https://www.qualiopi.gouv.fr/)

### Outils & Services
- [Google Cloud Run - Déploiement](https://cloud.google.com/run/docs)
- [Tailwind CSS - Docs](https://tailwindcss.com/docs)
- [Motion - Animations](https://www.framer.com/motion/)

---

## 🤝 Contribution

Cette proposition commerciale est gérée par l'équipe Noah Consultant. Pour toute question ou retour :

- **Yann PLANCHENAULT** (Côté Client) : Contact principal pour validations métier
- **Stanislas BASQUIN** (Noah Consultant) : Implémentation technique et architecture
- **Estelle CARRASCO** (Formatrice) : Validation des critères de qualification

---

## 📄 Licence

À définir selon les conditions commerciales avec Dermacadémie.

---

## 🎯 Résumé Exécutif

### Le Problème
Yann PLANCHENAULT doit remplir 2 sessions de formation (sept. & déc. 2026) avec seulement 4-6 places chacune. Actuellement, il dépend 100% des Meta Ads avec un CAC qui augmente et aucun pipeline qualifié en amont. Il a identifié 90 000 prospects potentiels mais ne sait pas les transformer en leads.

### La Solution
Noah Consultant propose un pilote 3 mois de génération de leads data-driven :
1. **Extraction & enrichissement** d'une base de 90 000 professionnels avec signaux IA
2. **Scoring pondéré** par persona (esthéticienne/tatoueur/perceur)
3. **3 séquences email** différenciées + 3 landing pages
4. **Tableau de bord** de pilotage avec CAC transparent
5. **Cadre RGPD** complet documenté dès J1

### Le Résultat Attendu
- 🎯 **4+ places remplies** sur la session de septembre (objectif minimum)
- 💰 **CAC réduit de 50%** vs. Meta Ads (187 € vs. 450 €)
- 📊 **Visibilité complète** sur l'efficacité commerciale
- 🔄 **Actif réutilisable** pour certibiocides et Lab Digital

### Le Modèle Économique
- Frais de mise en place : à définir
- Rémunération au lead qualifié : à définir selon le CAC attendu
- **Alignement total des incitations** : Noah Consultant gagne si Yann a des leads

---

**Statut** : 🔄 Version Pilote - En Développement (Juin-Décembre 2026)
```
