function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price } = data;

    const picture = `Sample Photos/Photographers ID Photos/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const h5 = document.createElement( 'h5' );
        h5.textContent = city + ',' + ' ' + country;
        const p = document.createElement( 'p' );
        p.textContent = tagline;
        const div = document.createElement('div')
        const p2 = document.createElement( 'p' );
        p2.textContent = price + '€/jour';
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h5);
        article.appendChild(p);
        article.appendChild(div)
        div.appendChild(p2);
        return (article);
    }
    return { name, picture,city, country, tagline, price, getUserCardDOM }
}