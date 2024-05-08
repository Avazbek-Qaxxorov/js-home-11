function getAverage(marks){
    let sum = 0;
    marks.forEach(point => {
        sum += point
    });
    return Math.floor(sum / marks.length)
}

getAverage([2,2,2,2]);

document.write(getAverage([2,2,2,2]))