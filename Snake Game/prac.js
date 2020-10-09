arr = [1, 2, 3, 4];
arr.unshift(0);
for (const key in arr) {
    console.log(key);
}

console.log(arr[2]);