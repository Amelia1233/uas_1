fetch('https://makeup-api.herokuapp.com/api/v1/products.json')
.then((Response) => Response.json())
.then((res) => {
   const box = document.querySelector('.tam');
   const data = res;

   data.forEach(element => {
         const bx = document.createElement('a');
         bx.href = "Detail.html";
         bx.className = 'cart';

         const gbr = document.createElement('img');
         gbr.src = element.image_link;
         bx.appendChild(gbr);
         gbr.className = 'gg';
         gbr.alt = "Image Not Found";
         gbr.addEventListener('click', function () {
            localStorage.setItem('id_up', element.id);
         })

         const nama = document.createElement('p');
         nama.textContent = element.name;
         nama.className = 'title';
         bx.appendChild(nama);
         nama.addEventListener('click', function () {
            localStorage.setItem('id_up', element.id);
         })

         const price = document.createElement('p');
         price.textContent = "$" + element.price;
         bx.appendChild(price);
         price.className = 'price';
         price.addEventListener('click', function () {
            localStorage.setItem('id_up', element.id);
         })

      box.appendChild(bx);

   });
});