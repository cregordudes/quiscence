import React, { useEffect, useState } from "react";

const ProgressBar = ({ color, word, percent }) => {
   const [style, setStyle] = useState(null);
   useEffect(() => {
      if (percent) {
         setStyle({
            width: `${percent}`,
            backgroundColor: `${color}`,
         });
      }
   }, [percent]);

   return (
      <>
         <h3>{word}</h3>
         <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div class={`h-2.5 rounded-full`} style={style}></div>
         </div>
      </>
   );
};

export default ProgressBar;
