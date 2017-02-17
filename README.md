# cycle2-autoheight-carousel
Calculating height for different carousel slides

Just add `autoHeightCarousel: true` for start

```javascript
$('.cycle2-carousel').cycle({
    fx: 'carousel',
    ...
    autoHeightCarousel: true, // Just one parameter and it will work
    autoHeightCarouselSpeed: 250, // Extra Parameter. Time of the smooth change height 
    autoHeightCarouselEasing: null, // Extra Parameter. Adding easing for animation
    log: false
  });
```
