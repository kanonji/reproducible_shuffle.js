# Reproducible shuffle

A JavaScript method to shuffle array reproducible based on seed.

```javascript
reproducible_shuffle([1,2,3,4,5], 1); //[5,2,3,4,1]
reproducible_shuffle([1,2,3,4,5], 2); //[3,1,5,4,2]
reproducible_shuffle([1,2,3,4,5], 1); //[5,2,3,4,1]

reproducible_shuffle([1,2,3,4,5], 3) == reproducible_shuffle([1,2,3,4,5], 3); //true
```
