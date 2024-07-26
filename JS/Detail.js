let storage = localStorage.id_up;
        fetch("https://makeup-api.herokuapp.com/api/v1/products/" +storage+ ".json")
            .then((Response) => Response.json())
            .then((res) => {
                console.log(res)
                const box = document.querySelector('.tam');
                const data = res;

                const bx = document.createElement('div');
                bx.className = 'cart';

                const brand = document.createElement('p');
                brand.textContent = data.brand;
                brand.className = 'title';
                bx.appendChild(brand);

                const gbr = document.createElement('img');
                gbr.src = data.image_link;
                gbr.className = 'gg';
                gbr.alt = "Image Not Found";
                bx.appendChild(gbr);


                const nama = document.createElement('p');
                nama.textContent = data.name;
                nama.className = 'nama';
                bx.appendChild(nama);

                const des = document.createElement('p');
                des.textContent = data.description;
                des.className = 'des';
                bx.appendChild(des);

                box.appendChild(bx);
            });