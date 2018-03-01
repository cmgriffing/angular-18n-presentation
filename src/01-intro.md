# Angular i18n

---

## Terminology

i18n = Internationalization

l10n = Localization

The number in each is the amount of letters between the start and end.

<div class="notes">
It seems obvious now, but at first I had no idea why they were named this way.
</div>

## Why i18n

Whats the point when we have Google Translate?

![](./assets/google-translate.jpg)

<div class="notes">
Chrome can even identify pages in other languages and translate them for you using Google translate under the hood.
</div>

## However

![](./assets/google-translate-no.jpg)

<div class="notes">
The results tend to range from being poorly worded to being complete gibberish.

You can "get by" with it many times. But that isn't a great UX.
</div>

## How i18n Generally works

- The dev codes the app using default text values.

- The translator receives a file that contains the default values and translates them into the target language.

- The app then uses this edited version of the file to replace the default values with the translated ones.

<div class="notes">
There are some tiny steps along the way that make this all possible and I will hopefully help you understand some of them better by the end of this.
</div>

## Angular Specifics

Multiple Options:

- Angular's Internal i18n - https://angular.io/guide/i18n

- ngx-translate - http://www.ngx-translate.com/

<div class="notes">
There are a few other smaller libs but these are the big two options.

Angular has the ability to inject the values at AOT compile time when most other frameworks and solutions rely on run-time injection.

ngx-translate happens at run-time. This means two sets of translations could ship to the user as it swaps out the default.

Important: Ask about audience familiarity with AOT/JIT.
</div>

## AOT vs JIT

JIT: Just In Time (templates and dependencies are evaluated at run time)

AOT: Ahead Of Time (optimized at compile time when you run a production build)

Why AOT:

- Smaller bundle size
- Faster startup time
- More type and error safety

<div class="notes">
For the best end-user experience you want to utilize AOT compilation.
</div>

---
