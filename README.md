# Accelatrix UX

> A set of must-have general abstractions needed in any Web UI project, including state management, input field validators, typed WebApi backend integration among many other goodies.
> v1.0.0 depends on Accelatrix and is compatible with ECMAScript 5, ES6, TypeScript, React, Angular and Vue.

Accelatrix is free. Detailed license at https://github.com/accelatrix/accelatrix-ux/blob/main/LICENSE.md


## Putting Accelatrix UX to use

You can host the minified file yourself or simply include the latest version hosted by the author:
```html
<script src="https://ferreira-family.org/accelatrix/accelatrix-ux.min.js"></script>
```

Or you can install this package as a Node module using:
```sh
npm install accelatrix/ux
```

Or add it to your .Net project using NuGet:
```sh
dotnet add package Accelatrix-UX
```

You can then import Accelatrix in your TS file:
```js
import Accelatrix from "accelatrix/ux";
```

The CommonJS syntax is also supported:
```js
const Accelatrix = require("accelatrix/ux");
```

If you are using Vite as your package manager, tell it not to attempt to rename symbols in your vite.config.js file, e.g.:
```js
import { defineConfig } from 'vite';
import angular from 'vite-plugin-angular';

export default defineConfig({
  plugins: [angular()],
  build: {
    minify: 'esbuild',
    esbuild: {
      legalComments: 'none',
      preserveSymbols: true,
    },
  },
});
```

If you are compiling to ES5, make sure to make the compiler aware of the ES6 library in your ts.config file, e.g.:
```json
{
    "compilerOptions":
    {
        "target": "es5",
        "module": "es6",
        "moduleResolution": "classic",
        "typeRoots": ["node_modules/@types"],
        "lib": ["es5", "es6", "dom"],
    },
    "exclude": ["node_modules", "typings/browser", "typings/browser.d.ts"],
}
```

If you are using Visual Studio and compiling to ES5, change your .csproj to include ES6 types, e.g.:
```xml
<PropertyGroup>
  <!-- compile target -->
  <TypeScriptTarget>ES5</TypeScriptTarget>

  <!-- comma-separated list of libs -->
  <TypeScriptLib>es5,es6,dom</TypeScriptLib>
</PropertyGroup>
```


## Augmented HTMLElement

If you rely on JQuery or similar to get your DOM work done, you can now achieve pretty much the same directly from HTMLElement and combine it with the functional enumeration features of Accelatrix, e.g.:

```js
HTMLElement.Create("span").AppendTo(myOtherNode);
HTMLElement.Find("div").Select(z => z.Text()).Where(z => !String.IsNullOrWhiteSpace(z)).Take(10);

myHtmlNode.AddClass("myClass").Find("option").GroupBy(z => z.getAttribute("value"))
myHtmlNode.Parents().TakeWhile(z => !z.Equals(myOtherNode))
```    

You can subscribe, and more importantly, unsubscribe to events in a conveninent way in order to prevent memory leaks:

```js
myElement.ListToEvent("click", "MyReference", evt =>
{
    var me = this; // "this" remains the original "this" so you never lose context
});

myElement.StopEventListening(); // all events are unsubscribed
myElement.StopEventListening(true); // all events are unsubscribed for all children 
myElement.StopEventListening("click"); // click events are unsubscribed
myElement.StopEventListening("click", "MyReference"); // click events with "MyReference" are unsubscribed
myElement.StopEventListening(null, "MyReference", true); // all events tagged as "MyReference" are unsubscribed for all children
```
