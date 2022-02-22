import axios from "axios";
import { add, get, update } from "../../../api/products";

const EditProductAdmin = {
    async render(id) {
        const { data } = await get(id);
        return /*html*/`
        <div class="wrapper">
        <div class="sidebar" data-image="../assets/img/sidebar-5.jpg">
       
            <div class="sidebar-wrapper">
                <div class="logo">
                <li> ${localStorage.getItem('user') ? `<ul class="flex">
                <li class="flex items-center"><span style=" text-transform: uppercase; color: currentColor;font-weight: 600; margin-left: 30px; }" class="block  py-3 px-4 text-black" id="name">datlt</span></li>
              </ul>      
              `: ""} </li>
                </div>
                <ul class="nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="/admin/news">
                            <i class="nc-icon nc-icon nc-paper-2"></i>
                            <p>Bài Viết</p>
                        </a>
                    </li>
                    <li>
                        <a class="nav-link" href="/admin/products">
                            <i class="nc-icon nc-bell-55"></i>
                            <p>Sản Phẩm</p>
                        </a>
                    </li>

                    <li class="nav-item active active-pro">
                        <a class="nav-link active" href="javascript:;">
                            <i class="nc-icon nc-alien-33"></i>
                            <p>Upgrade plan</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="main-panel">
            <!-- Navbar -->
            <nav class="navbar navbar-expand-lg " color-on-scroll="500">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#pablo">Template</a>
                   
                    <div class="collapse navbar-collapse justify-content-end" id="navigation">
                        <ul class="nav navbar-nav mr-auto">
                           
                            <li class="nav-item">
                                <a href="#" class="nav-link">
                                    <i class="nc-icon nc-zoom-split"></i>
                                    <span class="d-lg-block">&nbsp;Search</span>
                                </a>
                            </li>
                        </ul>
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                             
                            </li>
                            <li class="nav-item dropdown">
                            </li>
                            <li class="nav-item">
                            <a class="nav-link">
                            <li><a  href="/signin"  class="block py-3  btn btn-outline-info  px-4 text-black hover:bg-cyan-400" id="logout">Logout</a></li>
                            </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        
            <div class="content">
                <h1 class="text-4xl mb-4">Cập nhật sản phẩm</h1>
                <form id="formEditPost">
                    <input type="text" id="title-post" class="border border-black" placeholder="Title" value="${data.name}"/><br />
                    <img src="${data.img}" id="img-preview"/>
                    <input type="file" id="img" class="border border-black" placeholder="Title" /><br />
                    <textarea name="" id="desc" class="border border-black" cols="30" rows="10">${data.desc}</textarea><br />
                    <button class="btn" >Lưu</button>
                </form>
                </div>
        
                </div>
            </div>
                    </div>
                </div>
                <footer class="footer">
                            <p class="copyright text-center">
                                ©
                            </p>
                </footer>
            </div>
        </div>
        `
    },
    afterRender(id) {
        const formEditPost = document.querySelector('#formEditPost');
        const CLOUDINARY_PRESET_KEY = "jkbdphzy";
        const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/ecommercer2021/image/upload";
        const imgPreview = document.querySelector('#img-preview');
        const imgPost = document.querySelector('#img-post');

        let imgLink = "";


        imgPost.addEventListener('change', function (e) {
            imgPreview.src = URL.createObjectURL(e.target.files[0]);
        });

        formEditPost.addEventListener('submit', async function (e) {
            e.preventDefault();

            const file = document.querySelector('#img-post').files[0];
            if (file) {
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
                id: +id,
                title: document.querySelector('#title').value,
                img: imgLink ? imgLink : imgPreview.src,
                desc: document.querySelector('#desc').value,
            },+id);
        })
    }
}
export default EditProductAdmin;