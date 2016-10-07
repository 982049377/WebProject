// TypeScript file

var Row:number;//行数
function print(Row ):void
{
    var StarArray:string[][];//星星存储矩阵
    var TempColomn:number;//临时列数
    var TempRow:number;//临时行数
    var Colomn:number;//行数
    StarArray=[[]];
    Row=5;
    Colomn=2*Row-1;
    initialize()
    set();
    output();

    function initialize():void
    {
        StarArray.pop();
        for(TempRow=0;TempRow<Row;TempRow++)
        {
            var TempArray=[];
            for(TempColomn=0;TempColomn<Colomn;TempColomn++)
                TempArray.push(" "); 
            StarArray.push(TempArray);
        }
    }

    function set():void
    {
        for(TempColomn=0;TempColomn<Row;TempColomn++)
        {  
            StarArray[TempColomn][(Colomn-1)/2]="*";
            for(TempRow=0;TempRow<=TempColomn;TempRow++)
            {
                StarArray[TempColomn][(Colomn-1)/2-TempRow]="*";
                StarArray[TempColomn][(Colomn-1)/2+TempRow]="*";
            }
        }
                
    }

    function output():void
    {
        for(TempColomn=0;TempColomn<Row;TempColomn++)
        {
                console.log(StarArray[TempColomn]);
        }
    }
}