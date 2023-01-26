

function getCharacters(done){
    const results = fetch('https://inshorts.deta.dev/news?category=all');

    results
    .then(response => response.json())
    .then(data =>{
        done(data)


    });
}



getCharacters(data => {
    //console.log(data);
    data.data.forEach(personaje => {
        const article = document.createRange().createContextualFragment(/*html*/`
        <article class="flexbox_dinamico_container">
            <div class="flexbox_dinamico_image_container">
                <img src="${personaje.imageUrl}" alt="">
            </div>
            <div class="flexbox_dinamico_texto">
            <span>${personaje.content}</span>
            </div>
    
        </article>
        `);

        const main = document.querySelector('section')

        main.append(article);

    })
});