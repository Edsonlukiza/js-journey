
let row;
let column;
let board=" ";
let size=8;
for (row=0;  row<size; row++){
   for (let col=0; col<size; col++){
    if((row+col)%2===0) {
        board +=" ";
     } else {
        board +="#";
    }
   }
   board +="\n";
}
console.log(board)

