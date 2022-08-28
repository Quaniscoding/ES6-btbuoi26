const string = document.getElementById("heading").innerHTML;
let chars = [...string];


let content = ``;
content += `
<span>${chars[0]}</span>
<span>${chars[1]}</span>
<span>${chars[2]}</span>
<span>${chars[3]}</span>
<span>${chars[4]}</span>
<span>${chars[6]}</span>
<span>${chars[7]}</span>
<span>${chars[8]}</span>
`
document.getElementById("heading").innerHTML = content;