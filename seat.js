seats = [
    {
        row: "A",
        col: 8
    },
    {
        row: "B",
        col: 10
    }
]

const reserved = ["A1", "A2", "A3", "B1", "B10"];

seats.forEach(seat => {
    for (let i = 1; i <= seat.col; i++) {

        if (reserved.includes(`${seat.row}${i}`)) {
            console.log(`${seat.row}${i}: Reserved`);
        } else {
            console.log(`${seat.row}${i}: Available`);
        }
    }
});
