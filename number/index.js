/*
```
1 is odd number.
2 is even number.
3 is odd number.
……
19 is odd number.
20 is even number.
```
*/
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(`${i} is even number.`)
    } else {
        console.log(`${i} is odd number.`)
    }
}