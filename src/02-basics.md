## Getting Started

We will go over:

- Tagging elements for translation
- Extracting those translations into an XLIFF file
- Editing an XLIFF file for a new target language
- Compiling that xliff file into your AOT build

<div class="notes">
After an overview of each step, I will attempt to go through the process live.
</div>

## Tagging elements

```html
<a href="google.com" i18n>Go To Google</a>
```

## Attributes

```html
<a href="#" title="Something" i18n-title>Go To Google</a>
```

## Tagging elements (ICU formatting)

```html
<span i18n>Updated {minutes, plural, =0 {just now} =1 {one minute ago} other {{{minutes}} minutes ago}}</span>
```

```html
<span i18n>Watch out for {animalType, select, wolf {wolves} cat {kitties} other {animals}}</span>
```

<div class="notes">
'other' is a catch-all. I tend to think of it as the final default case of a switch statement.

You are even able to nest ICU syntax. The angular docs show an example of this, but its a pretty narrow use case so I won't cover it more today.
</div>

## Extraction

```shell-session
ng xi18n
```

<div class="notes">
You can add paramaters to change things such as where the messages.xlf file is output to.

By default it will just create it in the src directory.

You can also change the format. (`xmb` or `xlf`)

xlf or XLIFF seems most common.
</div>

## Editing the XLIFF (Before)

![](./assets/messages_base_xliff.jpg)

## Editing the XLIFF (After)

![](./assets/messages_gibberish_xliff.jpg)

## Tools for Editing XLIFF files

Online Tools:

- POEditor [https://poeditor.com/](https://poeditor.com/)
- Matecat [https://www.matecat.com/](https://www.matecat.com/)
- SmartCAT [https://www.smartcat.ai/](https://www.smartcat.ai/)

Applications:

- Swordfish [https://maxprograms.com/products/swordfish.html](https://maxprograms.com/products/swordfish.html)
- OmegaT [http://omegat.org/](http://omegat.org/)
- Transit NXT [Transit NXT](Transit NXT)
- Wordfast [http://www.wordfast.com/](http://www.wordfast.com/)

Mostly found via:
[https://en.wikipedia.org/wiki/XLIFF#Related_tools](https://en.wikipedia.org/wiki/XLIFF#Related_tools)

<div class="notes">
CAT = Computer Aided Translation
</div>

## Compilation

Build:

```shell-session
ng build --aot --locale fr --i18n-format xlf --i18n-file src/locale/messages.fr.xlf --missing-translation error
```

```shell-session
--output-path dist/fr
```

What if your app is served like this `https://myapp.com/fr/`?

```shell-session
--base-href /fr/
```

<div class="notes">
When looking at the first command, you can also use similar paramaters for ng serve.

That could prove to be slow and I have had "out of memory" errors before when running ng serve with aot. Your mileage may vary.

Improving aot enough for use during serve is a priority of the angular and angular-cli teams, so I expect we will be hearing about improvements sometime soon. (maybe at ngConf?)
</div>

## End result (language selection)

Issue: You have a compilation for every language you support. How do you decide which to serve to your user?

Browser's have some functionality but in the end, let the user choose as easily as possible. (drop-down in header, splash page, etc)

---
