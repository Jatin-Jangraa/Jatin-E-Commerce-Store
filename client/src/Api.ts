import axios from 'axios'


export const productapi =  axios.create({
    baseURL : ` ${"http://localhost:5000"}/api/v1/product`
})