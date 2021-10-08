const chunkArray = (array, len) => {
    //init chunk array
    const chunkedArr = []

    //Loop through the array
    array.forEach(val => {
        //get the last element
        const last = chunkedArr[chunkedArr.length - 1]

        //check if last and if last length is equal to the chunk len
        if (!last || last.length === len) {
            chunkedArr.push([val])
        } else {
            last.push(val)
        }
    });

    return chunkedArr;
}

module.exports = chunkArray