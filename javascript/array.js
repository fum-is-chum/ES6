/**
 * TODO:
 * Buatlah sebuah variabel dengan nama evenNumber yang merupakan sebuah array dengan ketentuan:
 *   - Array tersebut menampung bilangan genap dari 1 hingga 100
 *
 * Catatan:
 *   - Agar lebih mudah, gunakanlah for loop dan logika if untuk mengisi bilangan genap pada array.
 */

// TODO


/**
 * Hiraukan kode di bawah ini
 */
const evenNumber = [];
for(var i = 1; i<=100;i++){
    if(i%2==0){
        evenNumber.push(i);
    }
}

 module.exports = evenNumber;