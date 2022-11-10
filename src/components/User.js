import React from "react";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const User = ({ name, index, show, text, img }) => {
  console.log(text, name);
  return (
    show === name && (
      <motion.div
        key={index}
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-[97%] lg:w-6/12 mx-auto flex gap-1"
      >
        <div className=" w-[40px] h-[40px] self-end ">
          <LazyLoadImage
            src={img}
            className=" w-full h-full rounded-[50%] "
            alt="profile"
            effect="blur"
            width="40px"
            height="40px"
          />
        </div>
        <div className="w-[86%]  bg-[#eaecee] flex  justify-center flex-col px-3    pt-1 pb-2 gap-1 rounded-t-xl rounded-br-xl rounded-bl-sm ">
          <h1 className="text-base capitalize text-[#424949]">{name}</h1>
          <div dir="rtl" className="text-sm font-sahel line">
            {text}
          </div>
        </div>
      </motion.div>
    )
  );
};

export default User;

// (
//   show === name && (
//     <motion.div
//       key={index}
//       initial={{ x: 200, opacity: 0 }}
//       animate={{ x: 0, opacity: 1 }}
//       exit={{ x: -200, opacity: 0 }}
//       transition={{ duration: 1 }}
//       className="w-7/12    grid grid-cols-2 gap-5"
//     >
//       <div className="bg-white rounded-xl h-[200px] w-7/12 col-start-1 col-end-3">
//         {name}
//       </div>
//       <div className="bg-white rounded-xl h-[200px] w-7/12 col-start-1 col-end-3 place-self-end row-start-2 row-end-3">
//         {name}
//       </div>
//     </motion.div>
//   )
// );
