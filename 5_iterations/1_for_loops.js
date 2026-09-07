// for

/* for (let i = 0; i < 10; i++) {
    const element = i;
    console.log(element);
} */

for (let i = 0; i < 5; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 0; j < 5; j++) {
        console.log(i, j)
    }
}