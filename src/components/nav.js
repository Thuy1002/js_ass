import { reRender } from "../utils/rerender";

const Nav = {
    render() {
        return /* html */`
     <!--   <nav class="flex items-center justify-between">
         <ul class="flex">
             <li><a href="/" class="block py-3 px-4 text-white hover:bg-blue-500">Home Page</a></li>
             <li><a href="/about" class="block py-3 px-4 text-white hover:bg-blue-500">About Page</a></li>
             <li><a href="/product" class="block py-3 px-4 text-white hover:bg-blue-500">Product Page</a></li>
         </ul>
       
        <div class="row align-items-center position-relative">
          <div class="site-logo">
            <a href="index.html" class="text-black"><span class="text-primary">Brand</a>
          </div>
          <div class="col-12">
            <nav class="site-navigation text-right ml-auto " role="navigation">
              <ul class="site-menu main-menu js-clone-nav ml-auto d-none d-lg-block">
                <li><a href="/" class="nav-link">Home</a></li>
                <li><a href="/about" class="nav-link">About</a></li>
                <li><a href="/product" class="nav-link">Product</a></li>
                <li><a href="/blog" class="nav-link">Blog</a></li>
                <li><a href="/support" class="nav-link">Support</a></li>
              </ul>
            </nav>
          </div>
          </div>  -->
          <header class="site-navbar js-sticky-header site-navbar-target" role="banner">
          <div class="container">
            <div class="row  align-items-center position-relative">
              <div class="site-logo">
            <!--<img class="mt-[23px]  h-[99px] w-[99px]" src="../image/logo.png" alt="" srcset="">-->
            <h3 class="font-extrabold text-cyan-400" >ORGANIC</h3>
              </div>
              <div class="col-12">
                <nav class="site-navigation text-right ml-auto " role="navigation">
                  <ul class="site-menu main-menu js-clone-nav ml-auto d-none d-lg-block">
                    <li class="" ><a href="/" class="   btn-outline-info   nav-link">Trang Chủ</a></li>
                    <li><a href="/about" class="  btn-outline-info  nav-link">Giới Thiệu</a></li>
                    <li><a href="/products" class="  btn-outline-info nav-link">Sản Phẩm</a></li>
                    <li><a href="/blog" class=" btn-outline-info  nav-link">Bài Viết</a></li>
                    <li><a href="/support" class=" btn-outline-info  nav-link">Hỗ Trợ</a>
                    <li> ${localStorage.getItem('user') ? `<ul class="flex">
                    <li class="flex items-center"><span class="block  py-3 px-4 text-black" id="name">datlt</span></li>
                    <li><a class="block py-3  btn btn-outline-info  px-4 text-black hover:bg-cyan-400" id="logout">Logout</a></li>
                  </ul>      
                  `: ""} </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
    
     
        </header>`;
    },
    afterRender(){
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
        
    }
};
export default Nav;