
import axios from 'axios';
import Header from '../components/header';
import { getAll } from '../api/posts';

const AboutPage = {
    async render() {
        const { data } = await getAll();
        return /* html */`
        <div class="max-w-screen-2xl mx-auto"> 
            <div id="header">
                ${Header.render()}
            </div>
            <div class="my-3">
            <img class="max-w-screen-2xl" src="https://picsum.photos/1024/400" />
           </div>
            <div class="max-w-5xl mx-auto">
                <h1>About Page</h1>
            </div>
            <div class="row featurette">    
              <div class="grid grid-cols-1 gap-8">
                    ${data.map((post) => `
                        <div class="grid grid-cols-2 gap-8 border p-4">
                         <div>
                            <a href="/news/${post.id}">
                                <img src="${post.img}" alt="" />
                            </a>
                            </div>
                            <div>
                            <h3 class="my-3"><a  href="/news/${post.id}"class="font-semibold text-lg text-orange-500">${post.title}</a></h3>
                            <p>${post.desc}</p>
                            </div>
                        </div>
                    `).join("")}
                </div> 
            </div>
      
      
             <hr class="featurette-divider">
            </div>
        `;
    },
    afterRender(){
        Header.afterRender()
    }
};
export default AboutPage;