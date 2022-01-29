import axios from 'axios';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';
import Swal from 'sweetalert2';


export const clientUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:3002' : 'http://localhost:3002';

const axiosInstance = axios.create({baseURL: clientUrl});

const loggedInUserData = Cookies.get('userData');

console.log(loggedInUserData);

if(loggedInUserData){
    let decodedToken = jwt_decode(loggedInUserData.token);
    console.log(decodedToken);
}

axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${typeof loggedInUserData === 'undefined' || typeof loggedInUserData === undefined || loggedInUserData === null ? '' : loggedInUserData.token}`;
axiosInstance.defaults.headers.common['Access-Control-Allow-Origin'] = `*`;
axiosInstance.defaults.headers.common['Access-Control-Allow-Methods'] = `GET, POST, OPTIONS, PUT, PATCH, DELETE`;
axiosInstance.defaults.headers.common['Cache-Control'] = `no-store`;

axiosInstance.interceptors.request.use(async (request) => {
    let isConnected = navigator.onLine;

    if(isConnected){
        return request;
    }else{
        Swal.fire("Not Online", "Please check your network connectivity", "error");
    }
}, error => {
    return Promise.reject(error);
});

export default axiosInstance;