import Nav from "./nav";

const Header = {
    render() {
        return /* html */`
        <header class="max-w-screen-2xlmx-auto">
            <div class="" id="main-menu">
                ${Nav.render()}
            </div>
        </header>`;
    },
    afterRender(){
      Nav.afterRender();
    }
};
export default Header;