module.exports = function solveSudoku(matrix) {

  let matrixClone = matrix.slice();
  let arr_of_numb=[1, 2, 3, 4, 5, 6, 7, 8, 9];

  function var_numbers(matrixClone) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (matrixClone[i][j] === 0) {
          matrixClone[i][j] = arr_of_numb;
        }
      }
    }
  }
  //вычленяем строку и кидаем значения в массив, что бы потом сравнить
  function numb_row(matrixClone, y){
    let Arr_numb_row = [];
    for (let x = 0; x < 9; x++) {
      Arr_numb_row.push(matrixClone[y][x]);
    }
    return Arr_numd_row;
  }
  //то же самое для столбца
  function numb_column(matrixClone, x) {
    let Arr_numb_column = [];
    for (let y = 0; y < 9; y++) {
      Arr_numb_column.push(matrixClone[y][x]);
    }
    return Arr_numb_column;
  }

/*  function delete_in_row(matr) {
    for (let i = 0; i < 9; i++) {
      let row_numbers = collectNumbersFromBigStroke(matr, i)
      deletingNumbersInProbalitiesOnThisStroke(matr, row_numbers, i);
    }
  }

  function collectNumbersFromBigStroke(arr, y) {
    let resultArr = [];
    for (let x = 0; x < 9; x++) {
      if (!Array.isArray(arr[y][x])) {
        resultArr.push(arr[y][x]);
      }
    }
    return resultArr
  }

  function deletingNumbersInProbalitiesOnThisStroke(arr, strokeNumbers, y) {
    strokeNumbers.forEach(number => {
      for (let x = 0; x < 9; x++) {
        if (Array.isArray(arr[y][x])) {
          if (arr[y][x].indexOf(number) !== -1) {
            arr[y][x].splice(arr[y][x].indexOf(number), 1);
          }
        }
      }
    });
  }

  function collectNumbersFromBigColumn(arr, x) {
    let resultArr = [];
    for (let y = 0; y < 9; y++) {
      if (!Array.isArray(arr[y][x])) {
        resultArr.push(arr[y][x]);
      }
    }
    return resultArr
  }

  function deleteImpossProbalitiesByColumns(matr) {
    for (let x = 0; x < 9; x++) {
      let columnNumbers = collectNumbersFromBigColumn(matr, x)
      deletingNumbersInProbalitiesOnThisColumn(matr, columnNumbers, x);
    }
  }

  function deletingNumbersInProbalitiesOnThisColumn(arr, columnNumbers, x) {
    columnNumbers.forEach(number => {
      for (let y = 0; y < 9; y++) {
        if (Array.isArray(arr[y][x])) {
          if (arr[y][x].indexOf(number) !== -1) {
            arr[y][x].splice(arr[y][x].indexOf(number), 1);

          }
        }
      }
    });
  }

  function changeSoloArrProbToNumb(arr) {
    for (let y = 0; y < 9; y++) {
      for (let x = 0; x < 9; x++) {
        if (Array.isArray(arr[y][x]) && arr[y][x].length === 1) {
          arr[y][x] = arr[y][x][0];
        }
      }
    }
  }

/*  console.log(matrixClone);
  console.log("AFTER STROKES CLEANING #################################");*/
  var_numbers(matrixClone)
  delete_in_row(matrixClone);
  changeSoloArrProbToNumb(matrixClone)
/*  console.log(matrixClone);
  console.log("AFTER COLUMNS CLEANING #################################");*/
  deleteImpossProbalitiesByColumns(matrixClone);
  changeSoloArrProbToNumb(matrixClone)
  /*console.log(matrixClone);*/

  return matrixClone;
}
