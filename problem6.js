function average(ar){
    let size = ar.length;
    let sum = 0;
    for(let i = 0; i<size; i++){
        sum=sum+ar[i];
    }
    let avg = sum/size;

    return avg;
}

let numbers = [10,20,30,40,50,60,70,80,90,100];
let avg = average(numbers);
console.log("Average:",avg);