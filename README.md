# StaticGallery

StaticGallery is a standalone SCSS mixin to create a gallery with fixed-width columns. These are my favorite galleries from an aesthetic and UX perspective, but doing the calculations for one isn't fun. So I automated it.

The API tries to be stupid simple while remaining unopinionated. Peep it:


```
@include staticGallery( <columnWidth>
                      , <gutterVertical>
                      , <gutterHorizontal>
                      , <galleryPadding>
                      , [galleryMaxWidth: 1200px]
                      , [class: ".gallery__gallery-item"] );
```

Because the gallery is static, `@media` breakpoints are automatically generated based on the values you provide. If you're targeting specific breakpoints, you must work them into your column and gutter dimensions. (Think about it—it wouldn't work any other way.) 

## What StaticGallery is *not*

StaticGallery is not a grid system. It shares some *ideas* with grid systems, but it does not itself export any grid features. Its scope is extremely specific: a responsive, drop-in, statically-dimensioned gallery.

##Explanation of parameters

  **$columnWidth**  
    The width that each column (and thereby each gallery item) should be.

  **$gutterVertical**  
    The margin between columns.  

  **$gutterHorizontal**   
  The margin between rows.

  **$galleryPadding**  
    The amount of padding on each side of the gallery. Top and bottom
    padding are unimportant to this calculation and should be set outside
    this API.

  **$galleryMaxWidth**  
    The maximum width that you wish the gallery to support. Any viewport size
    beyond this width will be ignored. Defaults to `1200px`.

  **$class**  
    The class you have set your gallery items to. Defaults to `&__gallery-item`.

##Example use

```scss
.gallery {
  @include staticGallery(225px, 24px, 50px, 14px, $galleryMaxWidth: 1000px, $class: ".item");
  .item {
    min-height: 100px; // Heights are NOT set by the mixin
    background: #222;
  }
}
```

## Caveats

* The default margin on `body` will *totally donk up everything* if it's left in place. Similarly, if StaticGallery is wrapped in another element with margins, expect more donking. This is currently unavoidable: it happens because you're constraining the StaticGallery to a different size than the elements you're passing in. StaticGallery could probably be redesigned to be nested arbitrarily, but right now the focus is on providing for the vast majority of use cases while maintaining a simple API.
