import command from '../../fetch.json' assert {type: 'json'};

const createFetch = () : string[] => {
    const fetch : string[] = [];
    fetch.push("<br>")
    command.mobile.forEach((ele) => {
      let fetchString = "";
      //this is for the ascii art
      for (let i = 0; i < ele.length; i++) {
        if (ele[i] === " ") {
          fetchString += "&nbsp;";
        } else {
          fetchString += ele[i];
        }
      }
      
      let eleToPush = `<pre>${fetchString}</pre>`;
      fetch.push(eleToPush);
      fetch.push("<br>");
    });      
    return fetch;
  }
  
  export const NFETCH = createFetch();
  
  