const n = 4;
const e = 10;
const a1 = [[1, 1], [2, 1], [3, 1], [4, -2]]
const a2 = [[1, -3], [3, 2], [4, 3], [6, -5]]
function area(a) {
    let x = 0;
    let y = 0;
    let area = 0;
    for (let i = 0; i < a.length; i++) {
        area += (a[i][0] - x) * Math.abs(y);
        x = a[i][0]
        y += a[i][1]
    }
    area += (e - x) * Math.abs(y)
    return area
}
console.log(area(a1))
console.log(area(a2))