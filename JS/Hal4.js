const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '00dd35f21cmshafe7a748871a626p1bdee7jsn37b8335d4209',
        'X-RapidAPI-Host': 'free-news.p.rapidapi.com'
    }
};

fetch('https://free-news.p.rapidapi.com/v1/search?q=Cosmetic&lang=en', options)
    .then((Response) => Response.json())
    .then((res) => {

        const data = res;
        console.log(res);
        const box = document.querySelector('.tam');

        for (let x = 0; x < 25; x++) {
            const bx = document.createElement("div");
            const hrf = document.createElement("h2");
            const g = document.createElement('img');
            const s = document.createElement("h5");
            const l = document.createElement("a");
            const p = document.createElement("p");

            const d = new String(data.articles[x].published_date_precelementon);
            const dp = new String(data.articles[x].published_date);

            p.textContent = "Published by : " + d + " on " + dp;
            hrf.textContent = data.articles[x].title;
            g.src = data.articles[x].media;
            g.alt = "Sorry, Image not Found";
            s.textContent = data.articles[x].summary;
            l.href = data.articles[x].link;
            l.textContent = "Learn More..";

            hrf.className = "p";
            g.className = "gg";
            p.className = "l"
            bx.className = 'cart';

            bx.appendChild(hrf);
            bx.appendChild(g);
            bx.appendChild(p);
            bx.appendChild(s);
            bx.appendChild(l);

            box.appendChild(bx);

        }
    });