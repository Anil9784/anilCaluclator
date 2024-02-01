let inpEl = document.getElementById("input");

let idsArr = ['btnClear', 'btnPercent', 'btnRemove', 'btnDivision', 'btn1', 'btn2', 'btn3', 'btnProduct', 'btn4', 'btn5', 'btn6', 'btnMinus', 'btn7', 'btn8', 'btn9', 'btnPlus', 'btnZeros', 'btnZero', 'btnDot', 'btnEqual'];

for (let echId of idsArr) {
    let btn = document.getElementById(echId);

    btn.addEventListener('click', () => {
        let inpVal = inpEl.value;
        inpEl.value = inpVal.replace('=', '')

        switch (btn.id) {

            case 'btnClear':
                inpEl.value = '';
                break;

            case 'btnRemove':
                inpEl.value = inpVal.slice(0, inpVal.length - 1);
                break;

            case 'btnEqual':

                inpVal = inpVal.replace(/x/g, '*');
                inpVal = inpVal.replace(/Ã·/g, '/');
                inpVal = inpVal.replace(/âˆ’/g, '-');

                let errEl = document.getElementById('error');
                try {

                    if (inpVal === '') {
                        raise();
                    }
                    inpEl.value = "= " + eval(inpVal);
                    errEl.textContent = '';


                } catch (e) {
                    errEl.textContent = 'Please Enter The Valid Expression';

                }

                break;

            default:
                inpEl.value += btn.textContent;
                break;

        }

    });
}