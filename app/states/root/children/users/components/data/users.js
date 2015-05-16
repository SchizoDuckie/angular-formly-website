/*
 INSTRUCTIONS
 1. Fork and clone the repo locally (https://help.github.com/articles/fork-a-repo/)
 2. Prepare your png logo (max width: 400px; max height: 400px) and use https://tinypng.com/
 3. Create a PR to this file. The key is what will appear in the URL for the example. Make it:
   1) easy to remember
   2) separated by dashes
   3) unique
 4. Wait patiently while it's evaluated :-)
 5. Cheer with us! Formly rocks! :-)
 */


export default [
  {
    name: 'Alianza Inc.',
    link: 'http://www.alianza.com/',
    slug: 'alianza',
    logo: require('./users-data/alianza/logo.png'),
    description: require('./users-data/alianza/description.md')
  },
  {
    name: 'Parakeet',
    link: 'http://goparakeet.com/',
    slug: 'parakeet',
    logo: require('./users-data/parakeet/logo.png'),
    description: require('./users-data/parakeet/description.md')
  },
  {
    name: 'DuckieDocs',
    slug: 'duckiedocs',
    logo: require('./users-data/duckiedocs/logo.png'),
    link: 'https://github.com/SchizoDuckie/DuckieDocs',
    description: require('./users-data/duckiedocs/description.md')
  },
  {
    name: 'DuckieTV',
    slug: 'duckietv',
    logo: require('./users-data/duckietv/logo.png'),
    link: 'http://duckie.tv/',
    description: require('./users-data/duckietv/description.md')
  },
  {
    name: 'Add Your Project!',
    slug: 'new',
    logo: require('./users-data/new/logo.png'),
    description: require('./users-data/new/description.md')
  }
];
