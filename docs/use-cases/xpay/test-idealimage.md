import Image from '@theme/IdealImage';
import thumbnail from './iOS_IAV_01_scan_card_number.png';

# Test rendering plugin docusaurus IdealImage

D'après le code recommandé ici `https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-ideal-image`

## thumbnail

Test OK, c'est bien le thumbnail qui est affiché:

<Image img={thumbnail} />

## image full-size

Test KO car affiche le thumbnail plutôt que image full size

<Image img={require('./iOS_IAV_01_scan_card_number.png')} />

## image standard markdown

Test OK mais pas idéal, car taille trop grande

![alt text](iOS_IAV_01_scan_card_number.png)
