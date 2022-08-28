document.getElementById("btnKhoi1").onclick = function () {
    let toan = document.getElementById("inpToan").value * 1;
    let ly = document.getElementById("inpLy").value * 1;
    let hoa = document.getElementById("inpHoa").value * 1;
    let avg = 0
    avg = (toan + ly + hoa) / 3;
    document.getElementById("tbKhoi1").innerHTML = avg;
};
document.getElementById("btnKhoi2").onclick = function () {
    let van = document.getElementById("inpVan").value * 1;
    let su = document.getElementById("inpSu").value * 1;
    let dia = document.getElementById("inpDia").value * 1;
    let english = document.getElementById("inpEnglish").value * 1;
    let avg = 0
    avg = (van + su + dia + english) / 4;
    document.getElementById("tbKhoi2").innerHTML = avg;
}
