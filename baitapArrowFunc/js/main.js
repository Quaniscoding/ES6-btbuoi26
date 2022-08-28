function changeColor() {
    let content = '';
    content += `
<button id="pallet" class="span-color pallet color-button active"></button>
<button id="viridian" class="span-color viridian color-button"></button>
<button id="pewter" class="span-color pewter color-button"></button>
<button id="cerulean" class="span-color cerulean color-button"></button>
<button id="vermillion" class="span-color vermillion color-button"></button>
<button id="lavender" class="span-color lavender color-button"></button>
<button id="celadon" class="span-color celadon color-button"></button>
<button id="saffron" class="span-color saffron color-button"></button>
<button id="fuschia" class="span-color fuschia color-button"></button>
<button id="cinnabar" class="span-color cinnabar color-button"></button>
`
    document.getElementById("colorContainer").innerHTML = content;
}
changeColor();
let arrSpan = document.querySelectorAll('.span-color');
for (let index = 0; index < arrSpan.length; index++) {
    arrSpan[index].onclick = () => {
        document.getElementById('house').classList = "house " + (arrSpan[index].id);
        document.getElementById((arrSpan[index].id)).classList.add("active");
    }
}