// import { useEffect } from "react";

// export const useOutsideClick = (ref, setShowMenu) => {
//     useEffect(() => {
//         console.log("Running UserEffect")
//         function handleClickOutside(event) {
//             console.log(ref.current);
//             if (ref.current.contains(event.target)) {
//                 setShowMenu(false);
//             }
//         }
//         document.addEventListener('mousedown', handleClickOutside);
//         return () => {
//             // Unbind the event listener on clean up
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     });

// };