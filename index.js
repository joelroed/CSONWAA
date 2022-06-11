const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -20];

document.querySelector('#main__output').innerHTML = arr1.reduce(sumArr);


function sumArr(num, total) {
    return num + total;
}