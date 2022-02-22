import axios from 'axios';
import { getAll } from '../../api/products';
import Header from '../../components/header';

const ProductsPage = {
    async render() {
        const { data } = await getAll();
        return /* html */`
        <div class="max-w-5xl mx-auto"> 
            <div id="header">
                ${Header.render()}
            </div>
            <div class="my-3">
                <img src="https://picsum.photos/1024/400" />
            </div>
            <div class="news">
                <h2 class="text-2xl font-semibold my-4">Sản phẩm</h2>
                <div class="grid grid-cols-3 gap-8">
                    ${data.map((post) => `
                        <div class="border p-4">
                            <a href="/products/${post.id}">
                                <img src="${post.img}" alt="" />
                            </a>
                            <h3 class="my-3"><a  href="/products/${post.id}"class="font-semibold text-lg text-orange-500">${post.name}</a></h3>
                            <p>${post.desc}</p>
                            <p>${post.price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</p>
                        </div>
                    `).join("")}
                </div>
            </div>
        </div>
        `;
    },
    afterRender(){
        Header.afterRender()
    }
};

export default ProductsPage;