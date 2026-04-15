# task-journal-vuetify

Scaffolded with Vuetify CLI.

## how i ran it (bilal)

thats how i created it:
```
pnpm create vuetify --platform=nuxt
```


i followed the following flow for creating this application:

```bash
  `$$$$$$$$$ii$$$`  .;T$$$$$$$$$:`
    T$$$$$$i$$$$`  .$$$l$$$$$$$: 
     T$$$$ii$$$`  .$$$$ll$$$$$:  
      `$$$l$$F`  :$$$$$$i$$$$`   
        T$i$F   :$$$$$$$l$$F     
         `:F   :$$$$$$$$i$:      
          `   :$$$$$$$$l$`       
             :$$$$$$$$j$`        
             `$$$$$$$j$`         
               T$$$$l$`          
                `$$i$`           
                 `T:             

┌  Create Vuetify v3.1.6
│
◇  Project name:
│  task-journal-vuetify
│
◇  Which CSS framework?
│  None
│
◇  Select features to install: ↑/↓ to navigate, space to select, a to toggle all, enter to confirm
│  ESLint, MCP
│
◇  Enable Client Hints? (Requires SSR)
│  Yes
│
◇  Do you want to install dependencies?
│  Yes
│
◇  Which package manager would you like to use?
│  npm
│
◇  Do you want to save these settings as a preset?
│  No
│
◇  Template downloaded
│
◇  Configuration applied
│
◇  Dependencies installed!
│
└  task-journal-vuetify has been generated at task-journal-vuetify

┌─Next steps─----------
│  cd task-journal-vuetify                                                 
│  npm run dev                                                     

```

than ran the following commands to run the applicaiton in dev mode.

```bash
nuxt-apps %  cd task-journal-vuetify 
task-journal-vuetify % npm run dev
```

## ssr issue fix!
i disabled ssr so that the application works.

but if you enable it than the componant that cause the issue of ssr ,
you rap it with this <v-no-ssr></v-no-ssr> . sometimes you have to 
rap it with <ClientOnly></ClientOnly>


## 🧱 Stack

- Framework: Nuxt 4 
- node 24.13.1
- UI Library: Vuetify
- Language: TypeScript
- Package manager: npm

## 🧭 Start Here

- Main entry: `app/app.vue`
- Main app landing page '/': `app/pages/index.vue`
- Main app component: `app/components/HelloWorld.vue`
- Main styles: `app/assets/styles/`
- Plugin setup: `app/plugins/`

## 📁 Project Structure

- `app/pages/` — application routes
- `app/components/` — reusable Vue components
- `app/assets/` — styles and static assets used in app
- `app/plugins/` — Nuxt plugins
- `public/` — static public files

## ✨ Enabled Features

- ESLint
- Vuetify MCP
- Client Hints

## 💿 Install

Use your selected package manager (npm) to install dependencies:

```bash
npm install
```

## 🚀 Quick Start

```bash
npm install
npm run dev
```

## 🏗️ Build

```bash
npm run build
```

## 🧪 Available Scripts

- `npm run build`
- `npm run dev`
- `npm run generate`
- `npm run preview`
- `npm run postinstall`
- `npm run lint`
- `npm run lint:fix`
- `npm run mcp`
- `npm run mcp:revert`

## 💪 Support Vuetify Development

This project uses Vuetify - an MIT licensed Open Source project. We are glad to welcome contributors and any support for ongoing development:

- Contribute to Vuetify and ecosystem projects: https://github.com/vuetifyjs
- Request enterprise support: https://support.vuetifyjs.com/
- Sponsor on GitHub: https://github.com/sponsors/vuetifyjs
- Support on Open Collective: https://opencollective.com/vuetify
