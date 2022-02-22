import axios from "axios";
import { add } from "../../../api/posts";
import $ from 'jquery';
import validate from 'jquery-validation';

const AddPost = {
    render() {
        return /*html*/`
        <div class="wrapper">
        <div class="sidebar" data-image="../assets/img/sidebar-5.jpg">
       
            <div class="sidebar-wrapper">
                <div class="logo">
                    <a href="javascript:;" class="simple-text">
                      Your Logo
                    </a>
                </div>
                <ul class="nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="/admin/news">
                            <i class="nc-icon nc-icon nc-paper-2"></i>
                            <p>Bài Viết</p>
                        </a>
                    </li>
                    <li>
                        <a class="nav-link" href="./user.html">
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
                                <a class="nav-link" href="#pablo">
                                    <span class="no-icon">Account</span>
                                </a>
                            </li>
                            <li class="nav-item dropdown">
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#pablo">
                                    <span class="no-icon">Log out</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        
            <div class="content">
               <h2 class="title">Thêm  Bài Viết</h2>
            <form id="formAddPost" style="display: block;" class="row g-3 needs-validation" action="" method="post">
            <div>
                 <input class="validationCustom01 form-control " id="title-post" type="text" name="name"  placeholder="Title" >
            </div>
            <div>
                 <input class="validationCustom01  " type="file" id="img-post" name="name"  placeholder="Title" >
            </div>
            <div>
            <textarea class="" name="" id="desc-post" class="border border-black" cols="30" rows="10"></textarea><br />
           </div>
            <div>
              <button style="margin-top: 32px; margin-left: 5px;font-weight:600;" class="btn btn-primary" type="submit">Tạo bài
                viết</button>
            </div>
          </form>
            </div>

            </div>
        </div>
                </div>
            </div>
            <footer class="footer">
                        <p class="copyright text-center">
                            ©
                            <script>
                                document.write(new Date().getFullYear())
                            </script>
                            <a href="http://www.creative-tim.com">Creative Tim</a>, made with love for a better web
                        </p>
                    </nav>
                </div>
            </footer>
        </div>
    </div>
          
        `
    },
    afterRender(){
        const formAddPost = $('#formAddPost');
        const CLOUDINARY_PRESET_KEY = "jkbdphzy";
        const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/ecommercer2021/image/upload";
        const imgPost = document.querySelector('#img-post');
        const imgPreview = document.querySelector('#img-preview')

        let imgLink = "";


        imgPost.addEventListener('change', function(e){
            imgPreview.src = URL.createObjectURL(e.target.files[0]);
        });
        formAddPost.validate({
            rules: {
                "title-post": {
                    required: true,
                    minlength: 5
                }
            },
            messages: {
                "title-post": {
                    required: "Bắt buộc phải nhập trường này!",
                    minlength: "Nhập ít nhất 5 ký tự"
                }
            },
            submitHandler: function() {
                async function addPost(){
                    const file = imgPost.files[0];
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
                        imgLink = data;
                    }
                    // call api thêm bài viết
                    add({
                        title: document.querySelector('#title-post').value,
                        img: imgLink ? imgLink : "",
                        desc: document.querySelector('#desc-post').value,
                    });
                }
                addPost();
            }
        });
    }
}
export default AddPost;