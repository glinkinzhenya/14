array = [1, 2, 3, 4, 5, 6, 7];
arreyTwo = ["q", "w", "j", "k", "o", "m"]

function removeElement(arr, item) {

    for (i = 0; i < 7; i++) {
        if (item === arr[i])
            arr.splice(i, 1);
    }
    console.log(arr);

}

removeElement(array, 6);
removeElement(arreyTwo, "k");
