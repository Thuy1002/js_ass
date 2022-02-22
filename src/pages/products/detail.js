import { get } from "../../api/products";
import Header from "../../components/header";
import { addToCart } from "../../utils/cart";
import Footer from "../../components/footer";
import { $ } from "../../utils/selector";
const ProductDetailPage = {
    async render(id) {
        const { data } = await get(id);
        return /*html */ `
        <div class="max-w-screen-2xl mx-auto">
              <div id="header">
                  ${Header.render()}
              </div>
           <div>
             <!-- <h1>${data.name}</h1>
              <img src="${data.img}" />
              <p>${data.desc}</p>
              <p>${data.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</p>
              <p>
                <input type="number" id="inputValue" />
                <button id="btnAddToCart" class="inline-block px-4 py-3 bg-indigo-500 text-white">
                    Add To cart
                </button>
                 </p>-->
            
<div class="row">
<div class="col-sm-6">
    <div class="product-images">
        <div class="product-main-img">
          <img src="${data.img}" />
        </div>
    </div>
</div>

<div class="col-sm-6">
    <div class="product-inner">
        <h2 class="product-name">${data.name}</h2>
        <div class="product-inner-price">
        <p>${data.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</p> <del>$100.00</del>
        </div>
        <form action="" class="cart">
        <input type="number" id="inputValue" />
                <button id="btnAddToCart" class="inline-block px-4 py-3 bg-indigo-500 text-white">
                    Add To cart
                </button>
        </form>

        <div role="tabpanel">
            <div class="tab-content">
                <div >
                    <h2 style="color:black;" class="product-name" >${data.name}</h2>
                    <p class="text-black" >${data.desc}</p>
                </div> 
            </div>
        </div>
    </div>
</div>
</div>
            </div>
</div>
            </div>
               <div id="footer">
                   ${Footer.render()}
                </div>
         </div>
        `;
    },

    afterRender(id){
        $("#btnAddToCart").addEventListener('click', async function(){
            const { data } = await get(id);
            console.log(data);
            addToCart({...data, quantity: $("#inputValue").value ? $("#inputValue").value : 1})
        })
    }
};
export default ProductDetailPage;


