let print = ''
for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= i; j++) {
        let val = `${i}*${j}=${i*j}`

        if (j < i) {
            val += ' '
        } else {
            val += "\n"
        }
        print += val
    }
}
console.log(print)