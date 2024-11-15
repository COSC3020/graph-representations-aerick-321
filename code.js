function convertToAdjList(adjMatrix) {
    let list = [];
    for (let i= 0; i < adjMatrix.length; i++){
        list[i] = [];
        for(let j = 0; j < adjMatrix[i].length; j++) {
            if(adjMatrix[i][j] === 1){
                list[i].push(j);
            }
        }
    }
    return list;
}
