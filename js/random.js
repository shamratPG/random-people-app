const showRandomUser = () => {
    fetch('https://randomuser.me/api/?results=10')
        .then(res => res.json())
        .then(data => {
            showData(data.results);
            console.log(data.results);
        })
}

const showData = (data) => {
    const container = document.getElementById('users');
    for (item of data) {
        const createNew = document.createElement('div');
        createNew.classList.add('user-item')
        createNew.innerHTML = `
        <h3>${item.name.title} ${item.name.first} ${item.name.last}</h3>
        <img src="${item.picture.thumbnail}" alt="">
        <h5>${item.login.username}</h5>
        <p>${item.email}</p>
        `;
        container.appendChild(createNew);
        // <h5>${userName}</h5>
        // <p>${email}</p>
    }
}


showRandomUser()