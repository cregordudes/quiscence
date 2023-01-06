import React from "react";

const ProgressBar = ({ color, word, percent }) => {
   const width = 0;
   switch (true) {
      case percent == 10:
         width = 100;
         break;
      case percent == 9:
         width = 95;
         break;
      case percent == 8:
         width = 90;
         break;
      case percent == 7:
         width = 85;
         break;
      case percent == 6:
         width = 80;
         break;
      case percent == 5:
         width = 75;
         break;
      case percent == 4:
         width = 70;
         break;
      case percent == 3:
         width = 65;
         break;
      case percent == 2:
         width = 60;
         break;
      case percent == 1:
         width = 55;
         break;
      case percent == 0:
         width = 50;
         break;
      case percent == -1:
         width = 45;
         break;
      case percent == -2:
         width = 40;
         break;
      case percent == -3:
         width = 35;
         break;
      case percent == -4:
         width = 30;
         break;
      case percent == -5:
         width = 25;
         break;
      case percent == -6:
         width = 20;
         break;
      case percent == -7:
         width = 15;
         break;
      case percent == -8:
         width = 10;
         break;
      case percent == -9:
         width = 5;
         break;
      case percent == -10:
         width = 0;
         break;
      default:
         width = 50;
         break;
   }
   return (
      <>
         <h3>{word}</h3>
         <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
               class={`h-2.5 rounded-full`}
               style={{ width: `${width}%`, backgroundColor: `${color}` }}
            ></div>
         </div>
      </>
   );
};

export default ProgressBar;
