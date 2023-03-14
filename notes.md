- npm install tailwindcss autoprefixer postcss postcss-cli

Prettier Plugin
- npm install -D prettier prettier-plugin-tailwindcss

for emmet/pug
- enable tailwiond CSS with emmet completions
- https://github.com/tailwindlabs/tailwindcss-intellisense/issues/56

For html:
"tailwindCSS.emmetCompletions": true,
"editor.inlineSuggest.enabled": true,
"editor.quickSuggestions": {
   "strings": true
},
"css.validate": false,

// "build": "postcss public/styles/tailwind.css -o public/styles/styles.css"
