# WebSite Studio — Vitrine

Site vitrine pour **WebSite Studio** : présentation des services, tarifs, productions, prise de rendez-vous (Calendly) et formulaire de contact avec envoi d’e-mails.

## Aperçu

- **Next.js 14** (App Router), **React 18**, **TypeScript**
- **Tailwind CSS** et **Framer Motion** pour le style et les animations
- Formulaire contact via **Resend** (route API `/api/contact`)
- Contenu et constantes centralisés dans `src/lib/` (ex. `site.ts`, `productions.ts`)

## Pages principales

| Route            | Contenu                                      |
|------------------|----------------------------------------------|
| `/`              | Accueil                                      |
| `/services`      | Offre de services                            |
| `/pricing`       | Tarifs                                       |
| `/productions`   | Réalisations (vidéos / cartes)               |
| `/a-propos`      | À propos                                     |
| `/rendez-vous`   | Lien Calendly                                |
| `/contact`       | Coordonnées + formulaire                     |

## Prérequis

- **Node.js** 18 ou supérieur  
- **npm** (ou pnpm / yarn)

## Installation

```bash
git clone https://github.com/felixmachenaud/F-lix-Machenaud-Showcase.git
cd F-lix-Machenaud-Showcase
npm install
```

## Variables d’environnement

Copiez `.env.example` vers `.env.local` et renseignez les valeurs nécessaires :

- **`RESEND_API_KEY`** — obligatoire pour l’envoi des messages du formulaire contact (compte [Resend](https://resend.com)).
- **`RESEND_FROM_EMAIL`** — expéditeur des e-mails (domaine vérifié chez Resend en production).
- **`NEXT_PUBLIC_CALENDLY_URL`** — optionnel si vous changez l’URL Calendly par défaut.

Ne commitez **jamais** `.env.local` (déjà ignoré par Git).

## Scripts

```bash
npm run dev      # serveur de développement — http://localhost:3000
npm run build    # build de production
npm run start    # lance le build (après npm run build)
npm run lint     # ESLint
```

## Déploiement

Le projet est adapté à **Vercel** (ou tout hébergeur Node supportant Next.js). Définissez les mêmes variables d’environnement que en local dans le tableau de bord du projet, notamment `RESEND_API_KEY`.

## Structure utile

```
src/
  app/              # pages et routes (App Router)
  components/       # composants React
  lib/              # constantes, données (site, productions, etc.)
public/             # assets statiques (images, vidéos)
```

## Licence

Le code source est publié sous la **licence MIT** — voir le fichier [`LICENSE`](LICENSE).

Les contenus du site (textes, images, vidéos, identité « WebSite Studio ») restent la propriété de leur auteur sauf mention contraire.
