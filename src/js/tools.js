import van from "./van.js";
import { style } from "typestyle";
const { div } = van.tags;

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
  
 function csvToJson (csv) {
    var lines = csv.split("\n");
    var result = [];
    var headers = lines[0].split(",");
    for (var i = 1; i < lines.length; i++) {
      var obj = {};
      var currentline = lines[i].split(",");
      for (var j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentline[j];
      }
      result.push(obj);
    }
    return result;
  }


  export { HandWritenMessage, csvToJson }