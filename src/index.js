module.exports = function solveSudoku(matrix) {
  let Clone = [[],[], [], [], [], [], [], [], []];
 let arr_of_numb=[1, 2, 3, 4, 5, 6, 7, 8, 9];

 for (let i = 0; i < 9; i++) {
   for (let j = 0; j < 9; j++) {
     if (matrix[i][j] === 0) {
       Clone[i].push(arr_of_numb.slice());
       for (let k = 0; k < 9; k++) {
         if (matrix[i][k] !== 0) {
           let position = Clone[i][j].indexOf(matrix[i][k]);
           if (position >= 0){
             Clone[i][j].splice(position, 1);
           }
         }
       }
       for (let k = 0; k < 9; k++) {
         if (matrix[k][j] !== 0) {
           let position = Clone[i][j].indexOf(matrix[k][j]);
           if (position >= 0){
             Clone[i][j].splice(position, 1);
           }
         }
       }
       for (let k = Math.floor(i/3)*3; k < Math.floor(i/3)*3+3; k++) {
         for (let l = Math.floor(j/3)*3; l < Math.floor(j/3)*3+3; l++) {
           if (matrix[k][l] !== 0) {
             let position = Clone[i][j].indexOf(matrix[k][l]);
             if (position >= 0){
               Clone[i][j].splice(position, 1);
             }
           }
         }
       }
     }
     else{
       Clone[i].push([]);

     }
   }
 }
 let has_undefined_position = true;
 let defined_some_position = true;
 while (has_undefined_position && defined_some_position){
   has_undefined_position = false;
   defined_some_position = false;
   for (let i = 0; i < 9; i++) {
     for (let j = 0; j < 9; j++) {
       let Clone_len = Clone[i][j].length;
       if (Clone_len > 0) {
         has_undefined_position = true;
         if (Clone_len === 1){
           defined_some_position = true;
           matrix[i][j] = Clone[i][j][0];
           for (let k = 0; k < 9; k++){
             let position = Clone[i][k].indexOf(Clone[i][j][0]);
             if (position >= 0){
               Clone[i][k].splice(position, 1);
             }
           }

           for (let k = 0; k < 9; k++){
             let position = Clone[k][j].indexOf(Clone[i][j][0]);
             if (position >= 0){
               Clone[k][j].splice(position, 1);
             }
           }

           for (let k = Math.floor(i/3)*3; k < Math.floor(i/3)*3+3; k++) {
             for (let l = Math.floor(j/3)*3; l < Math.floor(j/3)*3+3; l++) {
               let position = Clone[k][l].indexOf(Clone[i][j][0]);
               if (position >= 0){
                 Clone[k][l].splice(position, 1);
               }
             }
           }
           Clone[i][j].splice(0, 1);
         }
       }
     }
   }
 }

 return(matrix);
}
