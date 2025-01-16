const display = document.querySelector(".number")
let d = ''
let c = ''
let ct = 0
let o = ''
let e = 0
let oc = 1
function wa(x) {
    if (x == '1' || x == '2' || x == '3' || x == '4' || x == '5' || x == '6' || x == '7' || x == '8' || x == '9' || x == '0' || x == '.') {
        e = 0
        if (ct == 0) {
            c += x
        }
        else {
            d += x
        }
        display.textContent = c + o + d;
    }
    else if (x === '+' || x === '-' || x === '*' || x === '/' || x === '%' || x === '^') {
        if (oc == 1) {
            display.textContent += x;
            e = 1
            ct = 1
            o = x;
            oc = 2;
        }
        else {
            e = 0
            if (o === '+') {
                display.textContent = (parseFloat(c) + parseFloat(d))
                c = parseFloat(c) + parseFloat(d)
            }
            else if (o === '-') {
                display.textContent = (parseFloat(c) - parseFloat(d))
                c = parseFloat(c) - parseFloat(d)
            }
            else if (o === '/') {
                display.textContent = (parseFloat(c) / parseFloat(d))
                c = parseFloat(c) / parseFloat(d)
            }
            else if (o === '*') {
                display.textContent = (parseFloat(c) * parseFloat(d))
                c = parseFloat(c) * parseFloat(d)
            }
            else if (o === '%') {
                display.textContent = (parseFloat(c) % parseFloat(d))
                c = parseFloat(c) % parseFloat(d)
            }
            else if (o === '^') {
                display.textContent = (parseFloat(c) ** parseFloat(d))
                c = parseFloat(c) ** parseFloat(d)
            }
            display.textContent += x;
            e = 1
            ct = 1
            o = x;
            d = ''
        }
    }
    else if (x === '=') {
        e = 0
        if (o === '+') {
            display.textContent = (parseFloat(c) + parseFloat(d))
            c = parseFloat(c) + parseFloat(d)
            c = c.toString()
        }
        else if (o === '-') {
            display.textContent = (parseFloat(c) - parseFloat(d))
            c = (parseFloat(c) - parseFloat(d))
            c = c.toString()
        }
        else if (o === '/') {
            display.textContent = (parseFloat(c) / parseFloat(d))
            c = (parseFloat(c) / parseFloat(d))
            c = c.toString()
        }
        else if (o === '*') {
            display.textContent = (parseFloat(c) * parseFloat(d))
            c = (parseFloat(c) * parseFloat(d))
            c = c.toString()
        }
        else if (o === '%') {
            display.textContent = (parseFloat(c) % parseFloat(d))
            c = (parseFloat(c) % parseFloat(d))
            c = c.toString()
        }
        else if (o === '^') {
            display.textContent = (parseFloat(c) ** parseFloat(d))
            c = (parseFloat(c) ** parseFloat(d))
            c = c.toString()
        }
        d = ''
        o = ''
        ct = 0
        oc = 1
    }
    else if (x === 'C') {
        display.textContent = '0'
        ct = 0
        c = ''
        d = ''
        o = ''
        e = 0
        oc = 1
    }
    else {
        if (d !== "") {
            d = d.slice(0, -1);
        } else if (o !== "") {
            o = "";
            ct = 0;
            oc = 1;
        } else if (c !== "") {
            c = c.toString().slice(0, -1);
        }
        if (c === "" && d === "" && o === "") {
            display.textContent = "0";
        } else {
            display.textContent = c + o + d;
        }
    }

}
const btn = document.querySelectorAll(".btn button")
btn.forEach(item => {
    item.addEventListener("click", () => {
        let a = ''
        a += item.textContent;
        wa(a)
    })
});