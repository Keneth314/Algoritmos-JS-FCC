/*
    Diseña una función checkCashRegister() que acepte el precio de compra como primer argumento (price), la cantidad pagada como segundo argumento (cash), y el dinero en efectivo que tiene la caja (cid) como tercer argumento.

    cid es un arreglo 2D que enumera las monedas disponibles.

    La función checkCashRegister() siempre debe devolver un objeto con una clave status y una clave change.

    Devuelve {status: "INSUFFICIENT_FUNDS", change: []} si el efectivo en caja es menor que el cambio necesario, o si no puedes devolver el cambio exacto.

    Devuelve {status: "CLOSED", change: [...]} si el efectivo en caja como valor de la clave change es igual al cambio que se debe entregar.

    En cualquier otro caso, devuelve {status: "OPEN", change: [...]}, con el cambio a entregar en monedas y billetes, ordenados de mayor a menor, como valor de la clave change.

    Unidad Monetaria	    Importe
    Penny	                $0.01 (PENNY)
    Nickel	                $0.05 (NICKEL)
    Dime	                $0.1 (DIME)
    Quarter	                $0.25 (QUARTER)
    Dollar	                $1 (ONE)
    Five Dollars	        $5 (FIVE)
    Ten Dollars	            $10 (TEN)
    Twenty Dollars	        $20 (TWENTY)
    One-hundred Dollars	    $100 (ONE HUNDRED)
*/

function checkCashRegister(price, cash, cid) {

    let rest = cash - price
    let change = [], result = {}, mod = 1, division = 0
    let monetaryUnit = [["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.1], ["QUARTER", 0.25], ["ONE", 1], ["FIVE", 5], ["TEN", 10], ["TWENTY", 20], ["ONE HUNDRED", 100]]

    // console.log(division, mod, change, rest)

    // Calculando el monto toal de caja
    let moneyCid = 0
    for (let i = 0; i < cid.length; i++) { moneyCid += cid[i][1] }

    // console.log(moneyCid) 

    // Si no tengo el vuelto suficiente
    if (moneyCid < rest) {
        result.status = "INSUFFICIENT_FUNDS"
        result.change = []
    }

    // Tengo el vuelto exacto
    if (moneyCid == rest) {
        result.status = "CLOSED"
        result.change = cid
    }

    // Tengo para darle cambio
    if (moneyCid > rest) {

        result.status = "OPEN"

        for (let i = 8; mod != 0 && i >= 0; i--) {

            // console.log(i, division, mod, change, rest, monetaryUnit[i][1], cid[i][1])

            if (cid[i][1] == 0) { continue } // Si no tengo monedas de ese tipo paso al siguiente


            // Si puedo darle de ese tipo de moneda le doy y lo agrego al array change 
            if (rest > cid[i][1]) {

                division = Math.trunc((rest / cid[i][1]).toFixed(5))
                mod = parseFloat((rest % cid[i][1]).toFixed(5))

                if (rest != mod && division <= (cid[i][1] / monetaryUnit[i][1])) {
                    change.push([cid[i][0], parseFloat((rest - mod).toFixed(5))])
                }
                rest = mod

                // console.log("IF:", i, division, mod, change, rest, monetaryUnit[i][1], cid[i][1], cid[i][1] / monetaryUnit[i][1])
            }
            else {

                division = Math.trunc((rest / monetaryUnit[i][1]).toFixed(5))
                mod = parseFloat((rest % monetaryUnit[i][1]).toFixed(5))

                if (rest != mod && division <= (cid[i][1] / monetaryUnit[i][1])) {
                    change.push([cid[i][0], parseFloat((rest - mod).toFixed(5))])
                }
                rest = mod

                // console.log("ELSE:", i, division, mod, change, rest, monetaryUnit[i][1], cid[i][1])
            }
        }

        // Tengo para darle cambio, pero no tengo las monedas necesarias
        if (rest != 0) { result.status = "INSUFFICIENT_FUNDS" }
        
        result.change = change
    }

    // console.log(rest)
    console.log(result)
    // return result

}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
// {
//     status: 'OPEN',
//     change: [
//       [ 'TWENTY', 60 ],
//       [ 'TEN', 20 ],
//       [ 'FIVE', 15 ],
//       [ 'ONE', 1 ],
//       [ 'QUARTER', 0.5 ],
//       [ 'DIME', 0.2 ],
//       [ 'PENNY', 0.04 ]
//     ]
//   }



checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
// {
//     status: 'CLOSED',
//     change: [
//       [ 'PENNY', 0.5 ],
//       [ 'NICKEL', 0 ],
//       [ 'DIME', 0 ],
//       [ 'QUARTER', 0 ],
//       [ 'ONE', 0 ],
//       [ 'FIVE', 0 ],
//       [ 'TEN', 0 ],
//       [ 'TWENTY', 0 ],
//       [ 'ONE HUNDRED', 0 ]
//     ]
//   }

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
// { status: 'INSUFFICIENT_FUNDS', change: [] }