function getEle(id) {
    return document.getElementById(id);
}

getEle("btnKhoi1").addEventListener("click", () => {
    let toan = getEle("inpToan").value * 1;
    let ly = getEle("inpLy").value * 1;
    let hoa = getEle("inpHoa").value * 1;
    let diemTbKhoi1 = tinhDiemTb(toan, ly, hoa);
    getEle("tbKhoi1").innerHTML = `${diemTbKhoi1}`;
})
getEle("btnKhoi2").addEventListener("click", () => {
    let van = getEle("inpVan").value * 1;
    let su = getEle("inpSu").value * 1;
    let dia = getEle("inpDia").value * 1;
    let english = getEle("inpEnglish").value * 1;
    let diemTbKhoi2 = tinhDiemTb(van, su, dia, english);
    getEle("tbKhoi2").innerHTML = `${diemTbKhoi2}`;
})
tinhDiemTb = (...diemTb) => {
    let tongDiem = 0;
    diemTb.forEach(function (diem) {
        return tongDiem += diem;
    });
    return tongDiem / diemTb.length
}