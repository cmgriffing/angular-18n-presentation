## What didn't I cover?

- Per-route bundles and how that impacts the compilation process?

- ngx-translate

- Continuous translation workflows

- Date/time, number, and currency formatting - Angular pipes can help you with those: [https://angular.io/guide/i18n#i18n-pipes](https://angular.io/guide/i18n#i18n-pipes)

<div class="notes">

Per route bundling could just work or it could have some quirks. I haven't gotten that far with it yet.

ngx-translate is very solid. The only gripe is that it sends the entire translation file. Per-route bundling would mean that you are getting translations for pages you aren't viewing. And the intended translations have to wait for the whole file to download.

I don't have any real world experience with translating an app, then adding features or content and dealing with merging the already translated xlf files with the base one that contains new fields. Maybe it just works depending on the translators editing software, I just don't know.

</div>

## Citations

- https://angular.io/guide/i18n

- https://github.com/angular/angular-cli/wiki/stories-internationalization

- https://github.com/cmgriffing/angular-i18n-presentation/demo

- https://github.com/cmgriffing/conference-call-bingo

<style class="styling-overrides">
  code {
    background: white;
  }

  .reveal section img {
    max-height: 400px;
  }
</style>