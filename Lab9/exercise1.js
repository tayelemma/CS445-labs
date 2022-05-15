window.onload = async function () {
    await displayUserInHtml();

    document.getElementById('refeshBtn').onclick = async function () {
        await displayUserInHtml();
    }

}

async function fetchSingleUser() {
    let responseBody = await fetch('https://randomuser.me/api/');
    let json = await responseBody.json();
    return json.results[0];
}

async function fetchUsers(len) {
    const users = [];
    for (let i = 0; i < len; i++) {
        users[i] = await fetchSingleUser();
    }
    return users;
}

async function displayUserInHtml() {
    const personArray = await fetchUsers(5);
    for (let i = 0; i < personArray.length; i++) {
        let person = personArray[i];
        document.getElementById('img' + i).src = person.picture.large;
        document.getElementById('name' + i).innerHTML = person.name.first + ' ' + person.name.last;
        document.getElementById('phone' + i).innerHTML = 'phone:' + person.phone;
        document.getElementById('email' + i).innerHTML = person.email;
    }

}

