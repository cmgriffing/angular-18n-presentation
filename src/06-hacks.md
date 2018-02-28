## Hacks

## Nesting

Instead of:

```html
<div i18n>Follow this <a href="#">link</a>.</div>
```

Try:

```html
<div><span i18n>Follow this<span> <a href="#" i18n>link</a>.</div>
```

## ICU Formatting in attributes

```html
<div hidden>
  <!-- ICU selection message marked for translation -->
  <span #altValue i18n>{role, select, tinker {Tinker} tailor {Tailor} soldier {Soldier} spy {Spy}} Profile Image
</div>
<img [alt]="removeHtmlComments(altValue.innerHTML)" />
```

## Why removeHtmlComments()?

```html
<span _ngcontent-c4=""><!--bindings={
  "ng-reflect-ng-switch": "tinker"
}--><!--bindings={
  "ng-reflect-ng-switch-case": "tinker"
}-->Tinker<!--bindings={
  "ng-reflect-ng-switch-case": "tailor"
}--><!--bindings={
  "ng-reflect-ng-switch-case": "soldier"
}--><!--bindings={
  "ng-reflect-ng-switch-case": "spy"
}--> Profile Image</span>
```

```html
removeHtmlComments(html) {
  return html.replace(/<!--[\s\S]*?-->/g, '');
}
```

## Dynamically Created Components

---
