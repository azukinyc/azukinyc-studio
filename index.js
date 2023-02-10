const func = (month, quarter = 7) => {
    console.log(1%3)
    console.log(2%3)
    console.log(3%3)
    console.log(4%3)
    console.log(4%3)
    quarter = Math.floor(month/3) + (month % 3) > 0 ? 1 : 0
    // quarter = Math.ceil (month/ 3)
    switch (month) {
        case 1:
            monthString = 'january'
            break;
        case 2:
            monthString = 'february'
            break;
    }
    return quarter
}
func(5)
// console.log(func(5))