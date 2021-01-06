fetch('https://reqres.in/api/users')
    .then(response => response.json())
    .then(json => {
        console.log(json.data);
        const markup = json.data.map(el => {
            return `
                        
            <div class="card-container"> 
                    <div class="image-container">
                        <img class="round" src="${el.avatar}">
                    </div>

                    <div class="name-container">
                        <span class="first-name">${el.first_name}</span>
                        <span class="last-name">${el.last_name}</span>
                    </div>
                    <p class="email">${el.email}</p> 
                </div>
            `
        });
        console.log(markup);
        document.querySelector('.list-container').innerHTML = markup.join('');


    })