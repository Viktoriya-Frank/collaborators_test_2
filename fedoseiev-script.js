function groupByParity(arr) { 
    const even = [];
    const odd = [];
    arr.forEach(element => {
        element % 2 === 0 ? even.push(element) : odd.push(element);
    });
    return {even, odd};
    }
    
   console.log(groupByParity([1, 2, 3, 4, 5, 6]));
    
    
