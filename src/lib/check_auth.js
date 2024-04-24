import Cookies from "js-cookie";

export function CheckAuth(router) {
    if (!Cookies.get('token') && JSON.parse(localStorage.getItem('userdata'))?.id) {
        return router.push('/dashboard');
    }
}