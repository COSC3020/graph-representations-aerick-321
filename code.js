function convertToAdjList(adjMatrix) {
    let matrix = [];
    let edge;
    let list = [];
    for (let i= 0; i < adjMatrix.length -1; i++){
        matrix[i] = [];
        for(let j = 0; j <= max; j++) {
                matrix[i][j] = 0;
        }
        if(matrix[i][j] == 1){
            list[i].push(matrix[i][j];
        }
    }
    return list;
}
