import { signup } from "../api/user";
import { $ } from "../utils/selector";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const Signup = {
    render(){
        return /* html */`
     
  <div class="max-w-md w-full mx-auto space-y-8">
  <div>
  <img class="mx-auto h-[100px] w-[100px] mt-[20px]" src="./image/logo.png" alt="Workflow">
    <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">ORGANIC</h2>
    <p class="mt-2 text-center text-sm text-gray-600">
  
      <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> VÌ MỘT CUỘC SỐNG TỐT ĐẸP HƠN </a>
    </p>
  </div>
  <form id="formSignup" class="mt-8 space-y-6" action="#" method="POST">
    <input type="hidden" name="remember" value="true">
    <div class="my-[50px]">
      <label for="email-address" class="sr-only">Email address</label>
      <input id="email" name="email" type="email" autocomplete="email" required
        class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        placeholder="Email address">
    </div>
    <div class="my-[22px]">
      <label for="password" class="sr-only">Password</label>
      <input id="password" name="password" type="password" autocomplete="current-password" required
        class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        placeholder="Password">
    </div>
    <div class="my-[22px]">
    <label for="name" class="sr-only">Name</label>
    <input id="name" name="password" type="text" autocomplete="current-password" required
      class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
      placeholder="Name">
  </div>
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <input id="remember-me" name="remember-me" type="checkbox"
          class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
        <label for="remember-me" class="ml-2 block text-sm text-gray-900"> Remember me </label>
      </div>

      <div class="text-sm">
        <a href="signin" class="font-medium text-indigo-600 hover:text-indigo-500"> SIGN IN </a>
      </div>
    </div>

    <div>
      <button type="submit"
        class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        <span class="absolute left-0 inset-y-0 flex items-center pl-3">
          <!-- Heroicon name: solid/lock-closed -->
          <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd"
              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
              clip-rule="evenodd" />
          </svg>
        </span>
        SIGN UP
      </button>
    </div>
  </form>
</div>
</div>
        `
    },
    afterRender(){
        $('#formSignup').addEventListener('submit', async function(e){
            e.preventDefault();
            try {
                const { data } = await signup({
                  name: $('#name').value,
                    email: $('#email').value,
                    password: $('#password').value,
                });
                toastr.success("Đăng ký thành công")
                if(data){
                    setTimeout(function(){
                        document.location.href="/signin"
                    },2000);
                }
                
            } catch (error) {
                toastr.error(error.response.data)
                $('#formSignup').reset()
            }
           

        })
    }
}
export default Signup;