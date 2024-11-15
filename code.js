function convertToAdjList(adjMatrix) {
    adjMatrix = [];
    let list = [];
    for (let i= 0; i < adjMatrix.length; i++){
        adjmatrix[i] = [];
        for(let j = 0; j < adjMatrix[i].length; j++) {
                adjmatrix[i][j] = 0;
        }
        if(adjmatrix[i][j] === 1){
            list[i].push(adjmatrix[i][j];
        }
    }
    return list;
}
