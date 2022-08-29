const getData = () => {
    fetch('https://randomuser.me/api/?results=100')
        .then(res => res.json())
        .then(data => {
            let obj = randomObj(data.results);
            changeData(obj);
            console.log(obj);
        })
}

const randomObj = ary => {
    let item = Math.floor(Math.random() * ary.length);
    return ary[item]
}

const changeData = obj => {
    document.getElementById('full-name').innerText = `${obj.name.first} ${obj.name.last}`
    document.getElementById('pic').setAttribute('src', `${obj.picture.large}`)
    document.getElementById('user-name').innerText = `${obj.login.username}`
    document.getElementById('email').innerText = `${obj.email}`
}

getData()