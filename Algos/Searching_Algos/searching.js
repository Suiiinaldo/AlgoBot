const linear = `function Linearsearch(arr,x){
    for(let i = 0;i<arr.length;i++)
        if(arr[i] == x)
            return i;
    return undefined;
}`

const binarySearch = `function Binarysearch(arr,x){
    let lo = 0,hi = arr.length - 1,mid;
    while(lo<=hi)
    {
        mid = lo + Math.floor((hi-lo)/2);
        if(arr[mid] == x)
            return mid;
        else if(arr[mid] > x)
            hi = mid - 1;
        else
            lo = mid + 1;
    }
    return undefined;
}`

module.exports = {
    linear,
    binarySearch
};