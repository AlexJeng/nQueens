// N-Queens with single array
// by Alex Jeng 

window.getSolutions = function(n, isQueen, callback) {

    var solutionCount = 0;
    var board = [];

    for(var i = 0; i < n; i++){
      board.push(i);
    }

    var recurse = function(board, nCount, solutionSoFar){
      for(var i = 0; i < solutionSoFar.length; i++){
        if(solutionSoFar.indexOf(solutionSoFar[i]) !== i){
          return;
        }
        if (isQueen) {
          var checkVariable = Math.abs(solutionSoFar[solutionSoFar.length-1] - solutionSoFar[i]);
          if(checkVariable !== 0){
            var checkIndex = solutionSoFar.length-1-i;
            if (checkVariable === checkIndex) {
              return;
            }
          }
        }
      }

      if(nCount === 0){
        solutionCount++;
        return;
      }

      for(var i = 0; i < board.length; i++){
        var currentSolution = board[i];
        recurse(board, nCount-1, solutionSoFar.concat(currentSolution));
      }
    }

    recurse(board, n, []);
    return solutionCount;
};

window.countNRooksSolutions = function(n) {
    return getSolutions(n, false);
};

window.countNQueensSolutions = function(n) {

   return getSolutions(n, true);
};
