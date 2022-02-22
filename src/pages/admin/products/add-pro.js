import axios from "axios";
import { add } from "../../../api/products";

const AddProductAdmin = {
    render() {
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
                        <a class="nav-link" href="dashboard.html">
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
               <h2 class="title">Thêm Sản Phẩm</h2>
            <form id="formAddPost" style="display: block;" class="row g-3 needs-validation" action="" method="post">
            <div>
                 <input class="validationCustom01 form-control " id="title" type="text" name="name"  placeholder="Tên Sản Phẩm" >
            </div>
            <div>
                 <input class="validationCustom01  " type="file" id="img" name="name"  placeholder="" >
            </div>
            <div>
                 <input class="validationCustom01  " type="number" id="price" name="name"  placeholder="Giá" >
            </div>
            <div>
            <textarea class="" name="" id="desc" class="border border-black" cols="30" rows="10"></textarea><br />
           </div>
            <div>
              <button style="margin-top: 32px; margin-left: 5px;font-weight:600;" class="btn btn-primary" type="submit">Tạo 
                </button>
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
    afterRender() {
        const formAddPro = document.querySelector('#formAddPost');
        const CLOUDINARY_PRESET_KEY = "jkbdphzy";
        const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/ecommercer2021/image/upload";

        formAddPro.addEventListener('submit', async function (e) {
            e.preventDefault();

            const file = document.querySelector('#img').files[0];
            
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

            // call api thêm bài viết
            add({
                
                name: document.querySelector('#title').value,
                price: +document.querySelector('#price').value,
                img: data.url,
                desc: document.querySelector('#desc').value,
            });
        })
    }
}
export default AddProductAdmin;