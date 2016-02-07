# StaticGallery

StaticGallery is a standalone SCSS mixin to create a gallery with fixed-width columns.

The API is tries to be stupid simple while remaining unopinionated. Peep it:


```
@include staticGallery( <columnWidth>
                      , <gutterVertical>
                      , <gutterHorizontal>
                      , <galleryPadding>
                      , [galleryMaxWidth: 1200px]
                      , [class: "__gallery-item"] );
```

Because the gallery is static, `@media` breakpoints are automatically generated based on the values you provide. If you're targeting specific breakpoints, you must work them into your column and gutter dimensions. (Think about it—it wouldn't work any other way.) 

##Explanation of parameters

###Parameters: 

  **$columnWidth**
    The width that each column (and thereby each gallery item) should be.

  **$gutterVertical**
    The margin between columns.

  **$gutterHorizontal**  
  The margin between rows.

  **$galleryPadding:**
    The amount of padding on each side of the gallery. Top and bottom
    padding are unimportant to this calculation and should be set outside
    this API.

  **$galleryMaxWidth:**
    The maximum width that you wish the gallery to support. Any viewport size
    beyond this width will be ignored. Defaults to `1200px`.

  **$class**
    The class you have set your gallery items to. Defaults to `.gallery-item`

##Example use

```scss
.gallery {
  @include staticGallery(225px, 24px, 50px, 14px, $galleryMaxWidth: 1000px, $class: ".item");
  .item {
    background: #222;
    min-height: 100px; // Heights are NOT set by the mixin
    overflow: hidden;
  }
}
```
