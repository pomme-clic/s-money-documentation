# Xpollens API docs

Repo Git du site comprenant le framework Docusaurus dans son ensemble et tous les fichiers pour la contribution de contenu.

## Accès aux différentes prods

- [Prod (Netlify alias)](https://s-money-documentation-site.netlify.app/)
- [Staging (Netlify alias)](https://develop--s-money-documentation-site.netlify.app/)
- Prod (xpollens.com/docs ?)

---

## Configuration générale

Les options générales de configuration se gèrent depuis [docusaurus.config.js](docusaurus.config.js). Voici une liste d'options pouvant concerner directement les contributeurs :

- Titre du site (balise title SEO) : `title`
- Items de header : `themeConfig.navbar.items`
- Domaine de récupération des APIs : `themeConfig.baseAPIUrl`
- Footer : liste de liens (par colonne) : `themeConfig.footer.links`
- Footer : réseaux sociaux : `themeConfig.footerCustom.socialIcons`
- Footer : branding sociaux : `themeConfig.footerCustom.tagline`

---

## Sidebars

Les accès aux documents depuis les sidebars des sections /docs et /api se gèrent depuis [sidebars.js](sidebars.js).

Les items sont référencés de 2 façons :

- Directement en niveau 1 (string simple)
- En niveau 2 en référencant un array de strings au sein d'un objet

---

## Homepage

Les contenus se gèrent depuis [home.md](docs/docs/home.md).

---

## Process d'édition des fichiers

### Branches Github

Le repo est calé par défaut sur la branche de staging `develop` le temps du développement. Les documents doivent être édités sous cette branche durant cette phase.

La version du site qui est actuellement sur l'url de prod est basée sur la branche `maintenance`.

Par la suite, la branche de base sera `main`.

### Workflow de publication

1. Un contributeur édite un fichier (le plus souvent sous le dossier [docs](/docs)) via l'icone d'édition.
2. Une fois la modification faîte, 2 choix:

- Commit direct sur la branche `develop` : une build Netlify se lance et le rendu est mis à jour en général sous les 1mn, accessible via [l'url de staging](https://develop--s-money-documentation-site.netlify.app/)

- Création d'une nouvelle branche de commit : l'écran invite ensuite à créer une "pull request". Une build Netlify se lance après avoir passé les tests d'intégration (environ 2mn). Une fois les tests passés, une url de prévisualisation s'affiche permettant de prévisualiser les changements. Si ces changements sont satisfaisants, on peut "merger" la pull request ce qui entraine une nouvelle génération de la [version de staging](https://develop--s-money-documentation-site.netlify.app/) (environ 30s).

De manière générale avec ce flow, il vaut mieux faire une série de changements puis de vérifier tout sur des branches de déploiement, ce qui permet de vérifier en live les tests avant la publication finale.

---

### Documentation fonctionnelle (Docs)

Toutes les pages de la documentation fonctionnelle sont des fichiers .md mimant l'arborescence de la sidebar sous [/docs/docs](/docs/docs).

Des options additionnelles peuvent être configurées dans en intégrant une section de type frontmatter (ex: déclarer un label de sidebar différent du 1er niveau de titre du document). Toutes les options sont détaillées dans le [plugin Docusaurus](https://docusaurus.io/docs/2.0.0-beta.3/api/plugins/@docusaurus/plugin-content-docs) dédié au traitement des markdowns.

---

#### Règles d'édition dans les documents markdown

Chaque élément (paragraphe, composant, titre..) doit obligatoirement être espacé d'une ligne vierge, auquel cas, le bon formattage pourra être compromis.

---

### Liens vers l'API Reference

Vous pouvez utiliser le composant dédié pour illustrer un use case en invoquant la méthode suivante : 

`markdown`
`import Endpoint from "@theme/Endpoint"`

`<Endpoint apiUrl="/v1.0/migrationProxy" path="/api​/v1.0​/users​/{userid}​/kyc​/identitycontrol" method="post"/>`

La liste des apiUrl est disponible [ici](/docs/api/0EndpointNames.txt)
Le path est ensuite le endpoint spécifique que vous souhaitez montrer.

---
#### Docs markdown d'exemples

- [syntaxe de base](docs/docs/examples/basics.md)
- [composants custom](docs/docs/examples/custom-components.md)

---

#### Images

Les images (ex: use-cases) se gèrent en utilisant un plugin d'optimisation Docusaurus ([idealImage](https://docusaurus.io/docs/2.0.0-beta.3/api/plugins/@docusaurus/plugin-ideal-image)).

Pour l'utiliser :

1. Importer la dépendance en début de fichier `import Image from '@theme/Image';`
2. Utiliser le composant en renseignant les props `<Image src="docs/<nom de l'image>" alt="usecase 1"/>`
3. La props "source" est déjà basée sur le répertoire dédié à l'ajout des images de contenu [static/img/content/](static/img/content).

---

### Documentation technique (API references)

Toutes les pages de la documentation technique sont des fichiers .md mimant l'arborescence de la sidebar sous [/docs/api](/docs/api).

Il faut reprendre les propriétés frontmatter mises en place afin de restituer le bon layout (pas de table des matières Docusaurus ni d'affichage du titre du document par défaut)

Chaque fichier d'API utilise un composant enveloppant la solution Rapidoc. Il faut renseigner la prop "apiUrl" contenant le dernier segment appelant le swagger correspondant, celui-ci étant déjà préfixé dans la configuration générale.

---

## Problèmes rencontrés

Les différents problèmes liés à la contribution peuvent être remontés dans la section [Issues](https://github.com/pomme-clic/s-money-documentation/issues) du repo, permettant d'avoir des threads organisés, plutôt que des échanges mail mais cela reste une suggestion.


# Mise en production
La mise en production se fait bia un publish de la dernière develop via netlify.
Maxime NOININ a les accès pour le faire.

Avant de publier, checklist des choses à vérifier : 
- La branche develop à publier est stable et a compilé sans erreur
- Les secrets d'authentification ont été changé de "Swagman" à "Demo"
