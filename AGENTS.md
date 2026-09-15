# Directives pour les Agents IA — Portfolio John Doe
Ce document définit les standards d'architecture, de style, de sécurité et d'accessibilité que tout agent IA doit STRICTEMENT respecter.

## 1. Architecture & Frameworks
- Astro v4.x (SSG pur, Zero-JS par défaut). Tout composant est un .astro statique.
- Tailwind CSS v3.4 (palette zinc et indigo).

## 2. Structure
- src/components/ (.astro), src/data/ (sources de vérité), src/types/ (TypeScript).

## 3. Conventions
- PascalCase.astro, UPPER_SNAKE_CASE pour les constantes de données.
- Séparation stricte : INTERDICTION d'écrire des données en dur dans les composants.

## 4. Éléments Intouchables
- astro.config.mjs, src/layouts/Layout.astro, tailwind.config.js, .github/workflows/deploy.yml.
