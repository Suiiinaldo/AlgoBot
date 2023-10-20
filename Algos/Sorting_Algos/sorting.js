const bubble = `
function bubbleSort(arr) { 
  
    for (var i = 0; i < arr.length; i++) { 
  
        // Last i elements are already in place   
        for (var j = 0; j < (arr.length - i - 1); j++) { 
  
            // Checking if the item at present iteration  
            // is greater than the next iteration 
            if (arr[j] > arr[j + 1]) { 
  
                // If the condition is true 
                // then swap them 
                var temp = arr[j] 
                arr[j] = arr[j + 1] 
                arr[j + 1] = temp 
            } 
        } 
    } 
}
`
 
const selection = 
`
function swap(arr,xp, yp)
{
    var temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
}

function selectionSort(arr)
{
    let n = arr.length;
    var i, j, min_idx;
 
    // One by one move boundary of unsorted subarray
    for (i = 0; i < n-1; i++)
    {
        // Find the minimum element in unsorted array
        min_idx = i;
        for (j = i + 1; j < n; j++)
        if (arr[j] < arr[min_idx])
            min_idx = j;
 
        // Swap the found minimum element with the first element
        swap(arr,min_idx, i);
    }
}
`

const insertion = 
`
function insertionSort(arr, n)  
{  
    let i, key, j;  
    for (i = 1; i < n; i++) 
    {  
        key = arr[i];  
        j = i - 1;  
   
        /* Move elements of arr[0..i-1], that are  
        greater than key, to one position ahead  
        of their current position */
        while (j >= 0 && arr[j] > key) 
        {  
            arr[j + 1] = arr[j];  
            j = j - 1;  
        }  
        arr[j + 1] = key;  
    }  
}
`

const mergesort = 
`

function merge(arr, l, m, r)
{
    var n1 = m - l + 1;
    var n2 = r - m;
 
    var L = new Array(n1); 
    var R = new Array(n2);
 

    for (var i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (var j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];
 
    var i = 0;
 
    var j = 0;
 
    var k = l;
 
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
 
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
 
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}
 

function mergeSort(arr,l, r){
    if(l>=r){
        return;
    }
    var m =l+ parseInt((r-l)/2);
    mergeSort(arr,l,m);
    mergeSort(arr,m+1,r);
    merge(arr,l,m,r);
}
`

module.exports = {
    bubble,
    selection,
    insertion,
    mergesort
};
