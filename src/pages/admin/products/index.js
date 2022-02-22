import axios from 'axios';
import { reRender } from '../../../utils/rerender';
import { getAll, remove } from '../../../api/products';

const ProductAdmin = {
    async render() {
        const { data } = await getAll();

        return /* html */`
            <div class="wrapper">
                <div class="sidebar" data-image="./assets/img/sidebar-5.jpg">
               
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
                                        <a class="nav-link" href="#pablo">
                                        <li><a  href="/signin"  class="block py-3  btn btn-outline-info  px-4 text-black hover:bg-cyan-400" id="logout">Logout</a></li>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                
                    <div class="content">
                        <div class="card">
                        <div class="content table-responsive ">
                        <h2 class="title">Quản lý tin tức</h2>
                            <table class="table table-hover table-striped">
                                <thead>
                                    <th>STT</th>
                                    <th>Tên Sản Phẩm</th>
                                    <th>Ảnh</th>
                                    <th>Hành Độnh</th>
                                    <th>  <a  href="http://localhost:3000/admin/products/add"> Thêm Bài Viết</a> </th>
                                </thead>
                                <tbody>
                                ${data.map((product, index) => `
                                <tr>
                                    <td>${index + 1}</td>
                                    <td>${product.name}</td>
                                    <td><img class="w-[150px] h-[150px]" src="${product.img}" alt=""></td>
                                   <td> <a href="/#/admin/news/${product.id}/edit">Edit </a>
                                    <button data-id="${product.id}" class="btn">Remove</button>   </td>
                                </tr>
                            `).join("")}    
                                </tbody>
                            </table>

                        </div>
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
        `;
    },
    afterRender() {
        const name = document.querySelector('#name');
        
        const logout = document.querySelector('#logout');
        if(name){
          name.innerHTML = JSON.parse(localStorage.getItem('user')).name;
        }
        if(logout){
            logout.addEventListener('click', function(){
                localStorage.removeItem('user');
                reRender(Nav, "#main-menu");
            });
        }

        const btns = document.querySelectorAll('.btn');
        btns.forEach(btn => {
            const id = btn.dataset.id;
            btn.addEventListener('click', async function () {
                const confirm = window.confirm("Bạn có chắc chắn không??");
                if (confirm) {
                    remove(id).then(() => {
                        reRender(ProductAdmin, '#content');
                    })
                }
            })
        });
    }
};

export default ProductAdmin;
