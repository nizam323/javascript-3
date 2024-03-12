function even() {
    let user = prompt("(1)even (2)odd")
    if (user == 1) {
        let lim = prompt("range")
        for (let i = 1; i <= lim; i++) {
            if (i % 2 == 0) {
                document.write(`<center>${i}</center>`)
            }
        }
    }
    else if (user == 2) {
        let lim = prompt("range")
        for (let i = 1; i <= lim; i++) {
            if (i % 2 != 0) { document.write(`<center>${i}</center>`) }
        }
    }
    else { alert("invalid request") }
};

function forin(){
    let p1 = prompt("enter 1st number ");
    let p2 = prompt("enter 2nd number ");

    let p3 = p1/p2;

    p3==Infinity ? window.alert("division is not possible due to infinite value") : window.alert(p3) ;
    


}