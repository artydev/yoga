import van from "./van.js";
import { style } from "typestyle";
const { div, h1, img, p, pre, br } = van.tags;

 /**
   * Ecrit un message manuscrit.
   * @param  {String} msg    Message   100px
   * @param  {String} left   Offest Left  20px
   * @param  {String} bottom Offest Bottom 22px
   */
function HandWritenMessage (msg, left="100px", bottom="20px", fontSize="32px") {
    const styleHandWrite = style({
      position:"relative", 
      left,
      color: "#F05907",
      fontFamily: 'Allura, cursive',
      fontSize,
      position: "relative",
      bottom
    })
    return   div({class:styleHandWrite}, msg)
  }
  

  export { HandWritenMessage }