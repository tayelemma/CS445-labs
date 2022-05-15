
//I tried some of the assignment but I got this assignmet solution form CS445-Profesor Tina Xing.

const { from } = rxjs;
const { map, filter } = rxjs.operators;

window.onload = function () {
    document.getElementById('empBtn').onclick = function () {
        fetchEmployees(document.getElementById('numEmp').value);
    }
}

async function fetchEmployees(number) {
    let res = await fetch('https://randomuser.me/api/?results=' + number);
    let empsList = await res.json();
    renderEmployees(empsList.results);
}

function renderEmployees(emps) {
    const empDiv = document.getElementById('employees');
    empDiv.innerHTML = '';

    from(emps)
        .pipe(
            filter(emp => emp.gender === 'female'),
            map(emp => {
                emp.myname = emp.name.first + " " + emp.name.last;
                emp.mylocation = {};
                emp.mylocation.firstline = emp.location.street.number + ' ' + emp.location.street.name;
                emp.mylocation.secondline = emp.location.city + ' ' + emp.location.state + ' ' + emp.location.country + ' ' + emp.location.postcode;
                return emp;
            })
        )
        .subscribe(emp => {
            let template = `
            <div class="col">
            ${emp.myname}
            </div>
            <div class="col">
                <p class="fw-bold">Location</p>
                <p>${emp.mylocation.firstline} </p>
                <p>${emp.mylocation.secondline}</p>
            </div>
            <hr>
            `
            let div = document.createElement('div'); //<div></div>
            div.innerHTML = template; //<div>template</div>
            div.classList = 'row'; //<div class="row">template</div>
            empDiv.appendChild(div);
        });
}