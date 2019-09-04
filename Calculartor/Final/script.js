let result = document.getElementById('result'),
    elTable = document.getElementById('table');

function display(e) {
    let obj = e.target;
    let check = obj.id;
    check = check.substring(0, 3);
    console.log(check);

    switch (check) {
        case 'res':                     // result
            let len = result.value.length;
            console.log(len);

            if(len > 1) {
                obj.textContent = '';
                for(let i=0; i<len-1; i++) {
                    obj.textContent += result.value[i];
                }
                result.value = obj.textContent;
            } else {
                result.value = '0';
            }
            break;
        
        case 'cle':                     // Clear
            result.value = '0';
            break;

        case 'equ':                     // equal
            result.value = eval(result.value);
            break;

        case 'per':                     // period
            result.value += obj.textContent;
            break;

        case 'lef':                     // leftP
            result.value = obj.textContent;
            break;

        case 'num':                     // number
            if(result.value === '0') {
                result.value = obj.textContent;
            } else {
                result.value += obj.textContent;
            }
            break;

        default:
            if(result.value !== '0') {
                result.value += obj.textContent;
            }
            break;
    }
}

elTable.addEventListener('click', display);