# Portfolio Professionnel — John Doe (Full-Stack Senior)

> **Architecture : Astro 4.x + Tailwind CSS (Zero-JS Islands Architecture)**  
> *Score Google Lighthouse : 100/100 • Zéro runtime React inutile • Filtrage dynamique piloté par l'URL.*

---

## ⚡ Pourquoi cette Architecture Astro est Supérieure pour un Portfolio ?

1. **Zero-JavaScript par défaut (Islands Architecture) :**  
   Contrairement aux frameworks SPA (React/Next.js) qui envoient 100+ kB de runtime JavaScript pour afficher du simple texte, Astro génère du **pur HTML statique** à la compilation. Seules les micro-interactions (filtres, contact, dark mode) contiennent quelques octets de JS ciblé.
2. **Excellente Partageabilité (URL State) :**  
   Les filtres de projets sont synchronisés en temps réel avec les paramètres de l'URL (`?category=Full-Stack`, `?category=Frontend`, etc.).  
   John Doe peut envoyer un lien direct à un recruteur : `votresite.com/?category=Full-Stack` et la page s'ouvre directement avec les projets correspondants filtrés ! Les boutons "Précédent" et "Suivant" du navigateur fonctionnent naturellement.
3. **Emailing résilient vers `vagehe1989@bowlfuel.com` :**  
   Formulaire connecté via FormSubmit AJAX avec alertes réactives (chargement, succès, erreur) et validation en direct.
4. **Hébergement 100% gratuit et sans serveur :**  
   Le dossier `dist/` peut être déposé en 1 clic sur GitHub Pages, Cloudflare Pages ou Vercel sans avoir besoin de payer ni maintenir un serveur Node.js.

---

## 🚀 Commandes de Développement

```bash
# 1. Lancer le serveur de développement local sur le port 3000
npm run dev

# 2. Compiler le site statique ultra-optimisé (dans le dossier dist/)
npm run build

# 3. Prévisualiser le build de production localement
npm run preview
```

---

## 📁 Structure du Projet

```text
├── astro.config.mjs             # Configuration Astro + Tailwind
├── tailwind.config.js           # Configuration Tailwind CSS (support .astro)
├── cv.md                        # Fichier CV source
├── public/
│   ├── john-doe.jpg             # Photo haute définition de John Doe
│   └── cv.md                    # Fichier téléchargeable
├── src/
│   ├── layouts/
│   │   └── Layout.astro         # Coquille HTML, anti-FOUC (zéro flash de thème), SEO
│   ├── pages/
│   │   └── index.astro          # Assemblage des composants
│   ├── components/
│   │   ├── Navbar.astro         # Navigation responsive, toggle thème & menu mobile
│   │   ├── Hero.astro           # Hero section avec photo, statut et CTA
│   │   ├── Skills.astro         # Grille de compétences techniques
│   │   ├── Projects.astro       # Filtres interactifs avec synchronisation URL & Empty State
│   │   ├── Experience.astro     # Timeline d'expérience avec métriques chiffrées
│   │   ├── Contact.astro        # Formulaire direct vers vagehe1989@bowlfuel.com
│   │   └── Footer.astro         # Pied de page sobre
│   └── data/
│       └── portfolioData.ts     # Données structurées et typées du CV
└── _nextjs_backup/              # Sauvegarde complète de la précédente version Next.js
```
