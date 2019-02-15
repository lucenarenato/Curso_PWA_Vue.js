# check-list

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
- https://developer.mozilla.org/pt-BR/docs/Mozilla/Add-ons/WebExtensions/manifest.json

### o que é pwa?

Progressive Web App é um termo usado para denotar uma nova metodologia de desenvolvimento de software. Ao contrário dos tradicionais aplicativos, um Progressive Web App pode ser visto como uma evolução híbrida entre as páginas da web regulares e um aplicativo móvel.

### GCM

- Google Cloud Messaging
O Google Cloud Messaging é um serviço de notificação móvel desenvolvido pelo Google que permite que desenvolvedores de aplicativos de terceiros enviem dados de notificação ou informações de servidores

### Firebase bindings for Vue.js
- https://github.com/vuejs/vuefire
- https://console.firebase.google.com/
npm install vue firebase vuefire --save
npm install --save vuefire firebase

- https://firebase.google.com/docs/?hl=pt-br
Firebase por plataforma
O Firebase fornece as ferramentas para desenvolver aplicativos de alta qualidade, ampliar a base de usuários e lucrar mais. Nós cuidamos do básico para você poder gerar receita nos negócios e se dedicar aos usuários.

<p align="center"><img src="vuefire.png"></p>


### Postman
- https://fcm.googleapis.com/fcm/send
{
	"to":"",
	"notification":{
		"title": "Teste de notificação",
		"body": "Esta é uma notificaçao via push",
		"click_action": "http://localhost:8080",
		"icon": "http://localhost:8080/static/img/icons/android-chrome-512x512.png"
	}
}

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


Esse código foi utilizado para a criação do curso [PWA com Vue.js](https://www.schoolofnet.com/curso/frontend/vuejs/pwa-com-vuejs/) da School of Net.

A School of Net é uma escola online que ensina as mais diversas tecnologias no mundo da programação, desenvolvimento web, games, design e infraestrutura.

School of Net - [https://www.schoolofnet.com](https://www.schoolofnet.com)

Blog da School of Net - [https://blog.schoolofnet.com](https://blog.schoolofnet.com)

SONCast - Podcast da School of Net - [https://podcast.schoolofnet.com](https://podcast.schoolofnet.com)

Canal da School of Net no Youtube: [http://www.youtube.com/c/SchoolofNetCursos](http://www.youtube.com/c/SchoolofNetCursos)

## Renato Lucena - 15/02/2019.
- renatolucena.net