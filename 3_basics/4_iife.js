// Imediately Invoked Function Exxpressions (IIFE)

// named iife
(function chai() {
    console.log(`Database Connected`);
})(); // syntax. in this semicolon is neceesary to stop the iife function

// ()(); -> this is syntax

// simple iife
( (name) => {
    console.log(`Database Connected 2 ${name}`);
})("Isagi");