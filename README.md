<<<<<<< HEAD
# Project Zeppelin / GDG DevFest 2014 site template

### About
Project Zeppelin allows you to setup awesome GDG DevFest site in 5 minutes.

Project is built on top of [Jekyll](http://jekyllrb.com/) - simple, blog-aware, static site generator. Jekyll also happens to be the engine behind GitHub Pages, which means you can use Jekyll to host your website from GitHub’s servers for free. [Learn more about Jekyll](http://jekyllrb.com/).

Template is brought by [GDG Lviv](http://lviv.gdg.org.ua/) team.

### Live demo http://gdg-x.github.io/zeppelin/

#### Automated version with Grunt <https://github.com/gdg-x/zeppelin-grunt>

### Features
* Easy to setup
* Simple and responsive design
* Integrated speakers and sessions management
* SVG icons
* SEO friendly


### Quick-start guide
1. [Fork](https://github.com/gdg-x/zeppelin/fork) this repo
2. Clone locally
3. Update ```_config.yml```
4. Select what content blocks do you need
5. Push changes to ```gh-pages``` branch
6. Enjoy your awesome DevFest site at ```http://[your github name].github.io/zeppelin/```

Or watch project presentation from [GDG[x] Townhall meeting](http://www.youtube.com/watch?v=xYmhheoLjcI). Slides available [here](https://docs.google.com/presentation/d/19aM7yNl_orDaCNND5LpCY3fShb6PyMltnzYfKvV8R_8/edit?usp=sharing)


## Local development

Check if you have [all requirements for local environment](http://jekyllrb.com/docs/installation/).
To install all development dependencies install [Bundler](http://bundler.io/).
```bash
    gem install bundler
```
and run next command from root folder:

```bash
  bundle install
```  

To start Jekyll run:
```bash
    jekyll serve -w
```
Site will be available at http://127.0.0.1:4000/zeppelin/ or http://localhost:4000/zeppelin/ (on Windows)

**NOTE:** in this mode all changes to html and data files will be automatically regenerated, but after changing ```_config.yml``` you have to restart server.

### Sass(Compass) support
**Note:** You need to install [Node.js](http://nodejs.org/download/)

To watch changes of `.sass` files and compile it to the `.css` on a fly change property `safe: true` to `safe: false` in `_config.yml`.
**Note: It works only on local machine, because GitHub runs Jekyll in `--save` [mode](https://help.github.com/articles/using-jekyll-with-pages/#configuration-overrides)**

Learn more about Sass development from [documentation](https://github.com/gdg-x/zeppelin/wiki/Sass-development).


### Resource optimizations (optional)

You can optimize images and minify css and javascript automatically (for now only on Windows).
But for Mac OS users available amazing tool - [imageoptim](https://imageoptim.com/). Thanks [@raphaelsavina](https://github.com/raphaelsavina) for link.
Optimize all images by running this script from `/automation/images/` folder:
```bash
    all_image_optimization.bat -d -jtran -pout -pquant -optip -gsicle -svgo
```

To minify CSS and JS run `minify_js.bat` (for Windows) and `minify_js.sh` (for Linux and MacOS) from `/automation/minifying/` folder:
```bash
    minify_js.bat
```

Learn more about available optimization options from [documentation](https://github.com/gdg-x/zeppelin/wiki/Resources-optimizations).

### Documentation
Quick-start guide is not enough? Checkout [full documentation](https://github.com/gdg-x/zeppelin/wiki).

### Used libraries
* [Bootstrap](https://github.com/twbs/bootstrap)
* [Animate.css](https://github.com/daneden/animate.css)
* [Waves](https://github.com/publicis-indonesia/Waves)
* [jquery.appear](https://github.com/bas2k/jquery.appear)
* [jQuery countTo Plugin](https://github.com/mhuggins/jquery-countTo)
* [Typed.js](https://github.com/mattboldt/typed.js)
* [Sticky-kit](https://github.com/leafo/sticky-kit)

### Who is using template?
Going to use template? Go on! The only thing we ask - let us know at [*lviv@gdg.org.ua*](mailto:lviv@gdg.org.ua) so we can include you to this list, or make a pull request.

| | | |
|------|------|------|
| [GDG DevFest Ukraine 2014](http://devfest.gdg.org.ua/) | [GDG DevFest Istanbul 2014](http://2014.devfesttr.com/) | [GDG Bangalore Site](http://gdgbangalore.github.io/) |
| [GDG DevFest Omsk 2014](http://gdg-devfest-omsk.org/) | [2014 南阳 GDG Devfest 大会](http://devfest.gdgny.org) | [DevFest Nordeste 2014](http://2014.devfestne.com.br/) |
| [GDG DevFest The Netherlands](http://www.devfest.nl/) | [DevFest Centro-Oeste 2014](http://www.devfestcentrooeste.com.br/) | [Android DevFest Space Coast](http://gdg-space-coast.github.io/zeppelin/) |
| [DevFest SP 2014](http://sp.devfest.com.br/) | [DevFest in Baroda](http://devfest.gdgbaroda.com/) | [GDG Hi Pic (France)](http://maximemularz.github.io/zeppelin/) |
| [GDG DevFest Córdoba 2014](http://gdgcordoba.github.io/zeppelin/) | [GDG DevFest Düsseldorf 2014](http://www.gdg-dus.de/DevFest2014/) | [GDG Makerere DevFest 2014](http://gdgmakerere.github.io/) |
| [GDG Dublin DevFest 2014](http://gdg-dublin.appspot.com/) | [GDG Busitema DevFest 2014](http://gdgbusitema.github.io/) | [DevFest Vienna 2014](http://www.devfest.at/) |
| [Android Wear DevFest](http://devfest.gdgnorthjersey.com/wear2014/) | [GDG SLAU DevFest 2014](http://gdgslau.github.io/) | [Lima DevFest](http://limadevfest.com/) |
| [GDG Korea DevFair 2014](http://devfair2014.gdg.kr/) | [GDG DevFest Kota Kinabalu 2014](http://devfest.gdgkk.info/) | [GDG DevFest Belgium](http://gdg-brussels.org/DevFest2014/) |
| [DevFest Praha 2014](http://devfest.cz/) | [GDG DevFest Kosice](http://devfest.sk/) | [GDG DevFest Cagayan de Oro](http://devfest.gdgcdo.org/) |
| [DevFest Birgunj](http://gdgbirgunj.github.io/DevFest2014/) | [GDG DevFest Poland](http://devfest.pl/) | [GDG DevFest Silicon Valley](http://devfest2014.gdgsv.com/) |
| [DevFest Chennai 2014](http://devfest.gdgchennai.com/) | [GDG DevFest Bari](http://gdgbari.github.io/zeppelin/) | [GDG DevFest Ahmedabad](http://devfest.gdgahmedabad.com/) |
| [GDG DevFest Sri Lanka](http://www.devfestlk.org/) | [GDG DevFest Tunis](http://devfest.gdgtunis.org/) | [GDG DevFest Kozhikode](http://devfest.gdgkozhikode.org/) |
| [GDG DevFest Argentina](http://devfest.gdg.com.ar/) | [GDG DevFest Bhubaneswar](http://devfest2014.gdgbbsr.com/) | [GDG DevFest Miage Gi](http://gdgmiagegilab.github.io/) |
| [GDG DevFest NORTE](http://norte.devfest.com.br/) | [GDG Devfest Nyeri 2014](http://devfest.gdgkimathiuniversity.com/) | [GDG DevFest Paris](http://devfest.gdgparis.com/) |
| [GDG Akure](http://gdgakure.github.io/)|[MENAT GDG Summit 2014](http://summit.gdg-menat.com/)|[Women Techmakers Istanbul 2015](http://2015.wtmistanbul.com) |
| [GDG DevFest Mallorca](http://devfest.gdgmallorca.com/)| [Michigan GDG DevFest 2015](http://michigandevfest.com/) | [International Women's Day](http://iwd.gdgnorthjersey.com/womeninnovation/) |
| [Women Techmakers Tbilisi 2015](http://womentechmakers.ge/) | [Android Xtended](http://www.androidxtended.com/) |[GDG Bingham University](http://binghamuni.edu.ng/gdg)|
| [JSday Maceio 2015](http://jsday.com.br) | [DevFest Nordeste 2015](http://2015.devfestne.com.br) | [GDG DevFest Vijayawada 2015](http://devfest.gdg-vijayawada.org) |
| [Geek Night Recife](http://geeknightrecife.github.io/) | [IO Extended 2016 Madrid ](http://io.gdg.es/) | [AngularCamp](http://angularcamp.org/) |
| [Mobile Era 2016](http://mobileera.rocks/) | [GDG Francisco Beltrão](http://gdg-fb.github.io) | [Women Techmakers Istanbul 2016](http://2016.wtmistanbul.com) |
| [Droidcon Paris 2015](http://droidcon.fr) | [Android Makers Paris 2017](http://androidmakers.fr) | [Heidelberger Symposium 2017](https://heidelberger-symposium.de/) |
| [DevFest Foumban website](http://devfestfoumban.org) | [NorthSec 2018](https://nsec.io/) | [SwiftFest 2018](http://swiftfest.io) |


### Contributors
* Design and web development: [Oleh Zasadnyy](https://github.com/ozasadnyy)
* Idea: [Vitaliy Zasadnyy](https://github.com/zasadnyy)

See [list of contributors](https://github.com/gdg-x/zepplin/graphs/contributors)

Maintainers: [@tasomaniac](https://github.com/tasomaniac) and [@ozasadnyy](https://github.com/ozasadnyy).

### License
Project is published under the [MIT license](https://github.com/gdg-x/zeppelin/blob/master/LICENSE.txt). Feel free to clone and modify repo as you want, but don't forget to add reference to authors :)
=======
<p align="center">
<img width="800px" src="https://user-images.githubusercontent.com/2954281/42683571-55ba6be6-8696-11e8-8ff7-e9acd0db63e8.png">
</p>
<p align="center">
<a href="https://hoverboard-master.firebaseapp.com" align="center">:zap: Live demo</a>&nbsp;&nbsp;|&nbsp;&nbsp;
<a href="#getting-started">:rocket: Get Started</a>
</p>

[![Build Status](https://travis-ci.org/gdg-x/hoverboard.svg?branch=master)](https://travis-ci.org/gdg-x/hoverboard) [![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fgdg-x%2Fhoverboard.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fgdg-x%2Fhoverboard?ref=badge_shield)[![Codacy Badge](https://api.codacy.com/project/badge/Grade/7973ac656dc94e42858ce640bb02de58)](https://www.codacy.com/app/pamuditha/hoverboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=pamuditha/hoverboard&amp;utm_campaign=Badge_Grade)

## Overview
Project Hoverboard is the conference website template that helps you to set up mobile first conference website with blog, speakers and schedule management in a few minutes.

The template is created based on 7 years of [GDG Lviv](https://www.meetup.com/GDG-Lviv/) team experience of running conferences and feedback from more than 500 event organizers from all around the world who were using previous Hoverboard versions.

Our goal is to allow event organizers to set up professional conference website with minimum resources. To get started you need only basic knowledge of web technologies and a free Firebase account.

## Features
| Feature | Description |
|---|---|
| **Fast and optimized** | 91/100 PWA on [Lighthouse](https://www.webpagetest.org/lighthouse.php?test=180111_1P_027a041bc5102982f074014807320a86&run=3) |
| **Works offline** | shitty WiFi on the venue is not a problem anymore |
| **Mobile first** | layouts optimized for small screens, Hoverboard can be installed as a native app on your phone |
| **Push notifications** | remind about sessions in My schedule, session feedback or target users with a custom message |
| **SEO optimized** | index all content and get to the top in search results |
| **Speakers and schedule management** | keep and update all information in the  Firebase |
| **My schedule** | let attendees save sessions they want to visit |
| **Customizable theme** | change colors to match your style |
| **Blog** | post announcements, updates and useful information |

## Getting Started
1. [Fork repository](https://github.com/gdg-x/hoverboard/fork) and clone your fork locally
1. Install [Node.js (v10+)](https://nodejs.org/en/download/)
1. Install project dependencies: `npm install` or `yarn`
1. Create [Firebase account](https://console.firebase.google.com) and login into [Firebase CLI](https://firebase.google.com/docs/cli/): `npx firebase login`
1. Update [Hoverboard config](/config) and [Resources](/data)
1. Import initial data to the Firebase Database
    * Generate `serviceAccount.json` file
      - Go to [console.firebase.google.com](https://console.firebase.google.com) -> Project settings -> Service accounts
      - Ensure that **Node.js** is selected and press **Generate new private key**
      - Read the warning and press **Generate key**
      - Save the file as `serviceAccount.json` and to the root of your hoverboard directory (❗Do NOT commit this file to the public repository)
    * Enable Firestore in web console at [console.firebase.google.com](https://console.firebase.google.com) -> Database -> Cloud Firestore -> Create database. Select **locked mode** and press **Enable**
    * [Optional] You can edit `docs/default-firebase-data.json)` file using your own data
	  * Select your Firebase project `npx firebase use <YOUR_PROJECT_ID>`
    * Run `npm run firestore:init` or `yarn firestore:init`
1. Run locally
   * `npm start` or `yarn start`
1. Build and deploy
   * `npm run build` or `yarn build`
   * `npm run deploy` or `yarn deploy`

*NOTE:* By default command using configurations from `/configs/development.json`.
To serve locally or deploy the production app use `yarn start:prod` and `yarn deploy:prod` respectively.

:book: Read the [Full Setup Guide](/docs/).

### Docker-based development environment

If you don't want to bother with the dependencies, you can use the docker container for development.

:book: Read more in [docker docs](/docs/tutorials/05-docker.md).

## Updating
Here is a git workflow for updating your fork (or downloaded copy) to the latest version:

```console
git remote add upstream https://github.com/gdg-x/hoverboard.git
git fetch upstream
git merge upstream/master
# resolve the merge conflicts in your editor
git add . -u
git commit -m 'Updated to the latest version'
```

## Documentation

The [Getting Started guide](#getting-started) is probably a good first point of call! <br>
:book: [Full documentation](/docs/).

## Compatibility

:white_check_mark: Compatible with **latest two** version of Chrome, Chrome for Android, Firefox, Opera, Safari, Edge.<br>
:x: IE and Opera Mini aren't supported.

## Technology Stack

* Polymer 2
* Redux
* Firebase
* Service Worker
* CSS Grid

## Contributing

Awesome! Contributions of all kinds are greatly appreciated. To help smoothen the process we have a few non-exhaustive guidelines to follow which should get you going in no time.

### Good First Issue

Issues labeled [`good first issue`](https://github.com/gdg-x/hoverboard/labels/good%20first%20issue) are a great way to ease into development on this project.

### Help Wanted Label

Any other issue labeled [`help wanted`](https://github.com/gdg-x/hoverboard/labels/help%20wanted) is ready for a PR.

### Using GitHub Issues

* Feel free to use GitHub issues for questions, bug reports, and feature requests
* Use the search feature to check for an existing issue
* Include as much information as possible and provide any relevant resources (Eg. screenshots)
* For bug reports ensure you have a reproducible test case
   * A pull request with a breaking test would be super preferable here but isn't required

### Submitting a Pull Request

* Squash commits
* Lint your code with eslint (config provided)
* Include relevant test updates/additions

## Code of Conduct

Read the full version [Code of Conduct](/CODE_OF_CONDUCT.md).

## Contributors
__Maintainer:__ [Abraham Williams](https://github.com/abraham)  
__Authors:__ [Oleh Zasadnyy](https://github.com/ozasadnyy) and [Sophie Huts](https://github.com/sophieH29).

This project exists thanks to all the [people who contribute](https://github.com/gdg-x/hoverboard/graphs/contributors). [[Contribute](CONTRIBUTING.md)].

<a href="https://github.com/gdg-x/hoverboard/graphs/contributors"><img src="https://opencollective.com/hoverboard/contributors.svg?width=890" /></a>

## Sponsoring
Most of the core team members, hoverboard contributors and contributors in the ecosystem do this open source work in their free time. If you like this project and it makes your life easier, please donate.
<a href="https://opencollective.com/hoverboard#backers" target="_blank"><img src="https://opencollective.com/hoverboard/backers.svg?width=890"></a>

## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fgdg-x%2Fhoverboard.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fgdg-x%2Fhoverboard?ref=badge_large)

Project is published under the [MIT license](/LICENSE.md).
Feel free to clone and modify repo as you want, but don't forget to add reference to authors :)

_GDG[x] are not endorsed and/or supported by Google, the corporation._
>>>>>>> b58434722b5a98b9128c9d12f19c74a75c144afa
