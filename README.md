# Xpollens API docs

Repo Git du site comprenant le framework Docusaurus dans son ensemble et tous les fichiers pour la contribution de contenu.

## Accès

- [Prod (Netlify alias)](https://s-money-documentation-site.netlify.app/)
- [Staging (Netlify alias)](https://develop--s-money-documentation-site.netlify.app/)
- Prod (xpollens.com/docs ?)

## Configuration générale

Les options générales de configuration se gèrent depuis [docusaurus.config.js](docusaurus.config.js). Voici une liste d'options pouvant concerner directement les contributeurs :

- Titre du site (balise title SEO) : `title`
- Items de header : `themeConfig.navbar.items`
- Domaine de récupération des APIs : `themeConfig.baseAPIUrl`
- Footer : liste de liens (par colonne) : `themeConfig.footer.links`
- Footer : réseaux sociaux : `themeConfig.footerCustom.socialIcons`
- Footer : branding sociaux : `themeConfig.footerCustom.tagline`

## Sidebars

Les accès aux documents depuis les sidebars des sections /docs et /api se gèrent depuis [sidebars.js](sidebars.js).

Les items sont référencés de 2 façons :

- Directement en niveau 1 (string simple)
- En niveau 2 en référencant un array de strings au sein d'un objet

## Homepage

Les contenus se gèrent depuis [home.md](docs/docs/home.md).

## Process d'édition

Le repo est calé par défaut sur la branche de staging `develop` le temps du développement. Les documents doivent être édités sous cette branche durant cette phase.

### Images

## Documentation fonctionnelle

## Documentation technique
