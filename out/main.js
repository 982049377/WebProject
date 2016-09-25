// TypeScript file
var Row; //行数
var StarArray; //星星存储矩阵
var TempColomn; //临时列数
var TempRow; //临时行数
var Colomn; //行数
StarArray = [[]];
Row = 5;
Colomn = 2 * Row - 1;
initialize();
set();
output();
function initialize() {
    StarArray.pop();
    for (TempRow = 0; TempRow < Row; TempRow++) {
        var TempArray = [];
        for (TempColomn = 0; TempColomn < Colomn; TempColomn++)
            TempArray.push(" ");
        StarArray.push(TempArray);
    }
}
function set() {
    for (TempColomn = 0; TempColomn < Row; TempColomn++) {
        StarArray[TempColomn][(Colomn - 1) / 2] = "*";
        for (TempRow = 0; TempRow <= TempColomn; TempRow++) {
            StarArray[TempColomn][(Colomn - 1) / 2 - TempRow] = "*";
            StarArray[TempColomn][(Colomn - 1) / 2 + TempRow] = "*";
        }
    }
}
function output() {
    for (TempColomn = 0; TempColomn < Row; TempColomn++) {
        console.log(StarArray[TempColomn]);
    }
}
//# sourceMappingURL=main.js.map