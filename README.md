# WebSite Studio — felixtech.space

Refonte complète du site de Félix Machenaud : Next.js 16 (App Router), TypeScript, Tailwind CSS 4, Motion et Lenis.

## Lancer le site en local

```bash
npm install
npm run dev
```

Le site s'ouvre sur http://localhost:3000.

## Formulaire de contact

Le formulaire envoie les messages via [Resend](https://resend.com), comme l'ancien site.

1. Copier `.env.example` en `.env.local`.
2. Renseigner `RESEND_API_KEY` (et éventuellement `CONTACT_TO_EMAIL` / `CONTACT_FROM_EMAIL`).

Sans clé, le formulaire affiche un message invitant à écrire directement par e-mail.

## Mettre en ligne (Vercel)

1. Pousser ce dossier sur un dépôt GitHub.
2. Sur Vercel : « Add New Project », importer le dépôt.
3. Ajouter les variables d'environnement de `.env.example` dans les réglages du projet.
4. Relier le domaine `felixtech.space`.

## Où modifier le contenu

| Contenu | Fichier |
|---|---|
| Projets, avis, tarifs, coordonnées, liens | `src/lib/data.ts` |
| Pages légales (confidentialité, CGV, cookies) | `src/lib/legal.ts` |
| Captures des projets | `public/images/projets/` |
| Couleurs et styles | `src/app/globals.css`, `src/app/pages.css` |

Dans les textes de `data.ts`, les mots entre `[[ ]]` s'affichent en serif italique violet (titres) ou en gras (avis).

## Pages

| URL | Page |
|---|---|
| `/` | Accueil : animation ∞, anneau de cartes au scroll, avis |
| `/a-propos` | À propos |
| `/productions/vitrines-web`, `/productions/application` | Réalisations (CardStack) |
| `/pricing` | Tarifs (690 €, 1190 €, sur devis) |
| `/contact` | Contact + formulaire |
| `/rendez-vous` | Prise de rendez-vous (Calendly) |
| `/pourquoi-refaire-site-web` | Article « Pourquoi refaire votre site web ? » |
| `/confidentialite`, `/conditions-generales-vente`, `/politique-cookies` | Pages légales |

Les URL sont les mêmes que sur l'ancien site, le référencement existant est donc conservé.
