import axios from "axios";
import { add, get, update } from "../../../api/posts";

const EditPostPage = {
    async render(id){
        const { data } = await get(id);
        return /*html*/`
            <div class="container mx-auto py-5">
                <h1 class="text-4xl mb-4">Cập nhật sản phẩm</h1>
                <form id="formEditPost">
                    <input type="text" id="title-post" class="border border-black" placeholder="Title" value="${data.title}"/><br />
                    <img src="${data.img}" id="img-preview"/>
                    <input type="file" id="img-post" class="border border-black" placeholder="Title" /><br />
                    <textarea name="" id="desc-post" class="border border-black" cols="30" rows="10">${data.desc}</textarea><br />
                    <button>Cập nhật bài viết</button>
                </form>
            </div>
        `
    },
    afterRender(id){
        const formEditPost = document.querySelector('#formEditPost');
        const CLOUDINARY_PRESET_KEY = "jkbdphzy";
        const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/ecommercer2021/image/upload";
        const imgPreview = document.querySelector('#img-preview');
        const imgPost = document.querySelector('#img-post');

        let imgLink = "";


        imgPost.addEventListener('change', function(e){
            imgPreview.src = URL.createObjectURL(e.target.files[0]);
        });

        formEditPost.addEventListener('submit', async function(e){
            e.preventDefault();

            const file = document.querySelector('#img-post').files[0];
            if(file){
                // lấy giá trị của file và gán vào object formData
                const formData = new FormData();
                formData.append('file', file);
                formData.append('upload_preset', CLOUDINARY_PRESET_KEY);

                // call API cloudinary để đẩy ảnh lên
                const { data } = await axios.post(CLOUDINARY_API_URL, formData, {
                    headers: {
                        "Content-Type": "application/form-data"
                    }
                })
                imgLink = data.url;
            }
            // call api thêm bài viết
            update({
                id: id,
                title: document.querySelector('#title-post').value,
                img: imgLink ? imgLink : imgPreview.src,
                desc: document.querySelector('#desc-post').value,
            });
        })
    }
}
export default EditPostPage;