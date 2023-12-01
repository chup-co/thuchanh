const CalculateWinner = (board) => {
 
   const winConditions = [
     [0, 1, 2],
     [3, 4, 5],
     [6, 7, 8],
   ];
 
   for (let i = 0; i < winConditions.length; i++) {
     const [a, b, c] = winConditions[i];
     if (board[a] && board[a] === board[b] && board[a] === board[c]) {
       return board[a];
     }
   }
 
   return null;
 };
 
 export default CalculateWinner;
 