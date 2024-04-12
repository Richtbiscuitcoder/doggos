fetch('index.json')
.then((response) => {
    return response.json()
}) .then((data) => {
    data.data.forEach((dogs) => {
        document.querySelector('.output').innerHTML += `
        <div class="dogs">
            <h1>${dogs.name}<h1>
            <p>${dogs.life_span}</p>
            <p>${dogs.origin}<p>
            <p>${dogs.temperament}</p>
            <p>${dogs.weight.imperial}</p>
            <p>${dogs.weight.metric}</p>
            <p>${dogs.height.imperial}</p>
            <p>${dogs.height.metric}</p>
        </div>`
    })
    document.querySelector('#input-label').addEventListener('click', ()=>{
        if(!document.querySelector('#toggle').checked) {
            document.querySelector('.output').textContent = `${dogs.weight.metric}` 
        }
    })
})
