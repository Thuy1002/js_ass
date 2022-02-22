import axios from 'axios';
import Header from '../components/header';
import { getAll } from '../api/products';
import Footer from '../components/footer';
const HomePage = {
    async render() {
        const { data } = await getAll();
        return /* html */`
        <div class="max-w-screen-2xl mx-auto">
        <div id="header">
            ${Header.render()}
        </div>
        <div class="my-3">
            <img class=" w-[1476px] h-[500px] " src="../image/banner1.jpg" />
        </div>
        <div class="news container marketing">
            <div class="flex grid grid-cols-3 gap-3">
                <div class=" text-center">
                    <div> <img class="mx-auto" style="width:78.83px" src="../image/icon11.png" alt=""> </div>
                    <h2>Giao hàng miễn phí</h2>
                    <p class="btn btn-secondary">Miễn phí giao hàng cho đơn hàng trên 200.000đ</p>
                </div><!-- /.col-lg-4 -->
    
                <div class="text-center">
                    <div> <img class="mx-auto" style="width:78.83px" src="../image/iconn.jpg" alt=""> </div>
                    <h2>Hỗ trợ 24/7</h2>
                    <p class="btn btn-secondary">Hỗ trợ chăm sóc bán hàng liên tục 24/7/365
                    </p>
                </div><!-- /.col-lg-4 -->
                <div class=" text-center">
                    <div> <img class="mx-auto" style="width:78.83px" src="../image/iocn3.png" alt=""></div>
                    <h2>Thanh toán an toàn</h2>
                    <p class="mt-[-4px] btn btn-secondary">Đảm bảo thanh toán an toàn với Paypal, Visa, …</p>
                </div><!-- /.col-lg-4 -->
    
            </div><!-- /.row -->
            <h2 class="text-2xl text-green-600 font-semibold my-4">Sản Phẩm Mới</h2>
            <div class="container marketing">
    
                <!-- NỘI DUNG -->
                <div class="row">
                    <div class="grid grid-cols-3 gap-8">
                        ${data.map((post) => `
                        <div class="border p-4">
                            <a href="/products/${post.id}">
                                <img class=" overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none" style="width:295px;height:295px;" src="${post.img}" alt="" />
                            </a>
                            <h3 class="my-3 text-center"><a href="/products/${post.id}"
                                    class=" btn btn-outline-info font-semibold text-lg text-orange-500">${post.name}</a></h3>
                            <!-- <p>${post.desc}</p> -->
                            <p class="text-center text-sky-500 ">${post.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND'
                                })} VNĐ</p>
                        </div>
                        <!--  <p>Some representative placeholder content for the three columns of text below the carousel. This is the first
                  column.</p>
                <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>/.col-lg-4 -->
                        `).join("")}
                        
                    </div>
    
                </div>
    
                <!-- START THE FEATURETTES -->
                <h2 class="text-2xl text-green-600 font-semibold my-4">MẸO HAY MỖI NGÀY</h2>
                <div class=" my-4 row featurette">
                    <div class="col-md-7">
                        <h2 class="featurette-heading">Phân loại rau,củ,quả.
                        </h2>
                        <p class="lead text-black">Vẻ bề ngoài rau sạch thường không bóng bẩy láng mướt như loại
                            vẫn được phun thuốc kích thích. Lá và thân hơi cứng, ít có vẻ mơn mởn. Điều này không chỉ đún
                            g với các loại rau muống, ngót, cải mà còn thấy cả ở cải bắp, lớp vỏ ngoài có vẻ khô cứng hơn,
                            ít
                            độ bóng. Củ quả sạch thường không được ngâm thuốc để bảo quản trong thời gian dài nên phần cuống
                            vẫn còn tươi, trong khi những loại khác có thể quả vẫn đẹp nhưng phần cuống không còn hoặc quá
                            "cũ kỹ". Các loại rau cải thường vẫn có những cái lỗ do sâu gây ra.
                            <a href="#">....</a>
                        </p>
                    </div>
                    <div class="col-md-5">
                        <img style="  width: 500px; height: 400px" class="img-thumbnail" src="../image/blog1.jpg" alt="">
                    </div>
                </div>
    
                <hr class="featurette-divider">
    
                <div class="row featurette">
                    <div class="col-md-7 order-md-2">
                        <h2 class="featurette-heading">Rau muống có nhiều vitamin như thế nào?</h2>
                        <p class="lead text-black">Rau muống là một trong những món ăn mà nhiều người và gia đình lựa chọn cho bữa ăn
                            của mình. Vì rau muống rất dễ chế biến, khi ăn lại có vị mát, đặc biệt vào mùa hè nước rau muống
                            luộc được rất nhiều người ưa chuộng như một loại canh giải khát.
                            Nhưng trên thực tế rau muống lại được các nhà báo chí và nhiều người tiêu dùng cho rằng rau
                            muống là loại rau chứa nhiều chất kích thích, chất bảo vệ thực vật và lai có bẩn nữa. Vì vậy bạn
                            có thể tham khảo cách lựa chọn rau muống tốt và an toàn cho bữa cơm gia đình mình.
                            Rau muống khi được bón quá nhiều đạm (chất kích thích tăng trưởng) thì thân rau to, rau giòn, là
                            xanh đen. Nếu bạn luộc lên rồi khi quan sát lúc còn nóng sẽ thấy trong nước có màu xanh nhạt
                            nhưng khi nguội màu xanh đen, có vân kết tủa. Đặc biệt khi ăn còn thấy có vị hơi chát chát. </p>
                    </div>
                    <div class="col-md-5 order-md-1">
                        <img style="  width: 500px; height: 400px" class="img-thumbnail" src="../image/blog2.jpg" alt="">
                    </div>
                </div>
    
                <hr class="featurette-divider">
                <div class=" my-4 row featurette">
                    <div class="col-md-7">
                        <h2 class="featurette-heading">Phân loại rau,củ,quả.
                        </h2>
                        <p class="lead text-black">Vẻ bề ngoài rau sạch thường không bóng bẩy láng mướt như loại
                            vẫn được phun thuốc kích thích. Lá và thân hơi cứng, ít có vẻ mơn mởn. Điều này không chỉ đún
                            g với các loại rau muống, ngót, cải mà còn thấy cả ở cải bắp, lớp vỏ ngoài có vẻ khô cứng hơn,
                            ít
                            độ bóng. Củ quả sạch thường không được ngâm thuốc để bảo quản trong thời gian dài nên phần cuống
                            vẫn còn tươi, trong khi những loại khác có thể quả vẫn đẹp nhưng phần cuống không còn hoặc quá
                            "cũ kỹ". Các loại rau cải thường vẫn có những cái lỗ do sâu gây ra.
                            <a href="#">....</a>
                        </p>
                    </div>
                    <div class="col-md-5">
                        <img style="  width: 500px; height: 400px" class="img-thumbnail" src="../image/blog1.jpg" alt="">
                    </div>
                </div>
            </div>
            <hr class="featurette-divider">
            <!-- /END THE FEATURETTES -->
        </div>
    </div>
    </div>
    <div id="footer">
    ${Footer.render()}
</div>
        `;
    },
    afterRender() {
        Header.afterRender()
    }
};

export default HomePage;