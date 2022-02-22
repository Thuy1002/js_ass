import axios from 'axios';
import Header from '../components/header';
import { get } from "../api/posts";


const NewsDetail = {
    async render(id) {
    const { data } = await get(id);
    return `<div class="max-w-screen-2xl mx-auto">
      <div id="header">
        ${Header.render()}
      </div>
      <div class="my-3">
        <img class="max-w-screen-2xl" src="https://picsum.photos/1024/400" />
      </div>
  
      <h1>${data.title}</h1>
      <img src="${data.img}" />
      <p>${data.desc}</p>
    </div>`;
    },
    };
    export default NewsDetail;