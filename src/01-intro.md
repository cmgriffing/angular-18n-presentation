# Angular i18n

---

## Terminology

i18n = Internationalization

l10n = Localization

The number in each is the amount of letters between the start and end.

<div class="notes">
It seems obvious now, but at first I had no idea why they were named this way.
</div>

## How i18n Generally works

- The dev codes the app using default text values.
- The translator receives an XLIFF file that contains the default values and translates them into the target language.
- The app then uses this file to replace the default values with the translated ones.

<div class="notes">
There are some tiny steps along the way that make this all possible and I will hopefully help you understand some of them better by the end of this.
</div>

## Angular Specifics

Multiple Options:

- Angular's Internal i18n - https://angular.io/guide/i18n

- ngx-translate - http://www.ngx-translate.com/

<div class="notes">
Angular has the ability to inject the values at AOT compile time when most other frameworks and solutions rely on run-time injection.

ngx-translate happens at run-time. This means two sets of translations could ship to the user.

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
