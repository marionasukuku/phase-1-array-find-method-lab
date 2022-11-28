// code your solution here
const superbowlWin =(record)=>{
    const item = record.find((el)=> el.result === "W" );
    if (item) return item.year;
    return undefined
}