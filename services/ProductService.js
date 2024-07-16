import { post,get,getUSer } from "../app/apiManager";

class ProductService{

    static async getAllProducts(){
        const result = await get({
            path:"/products"
        });

        const allProducts = await result.json();
        return allProducts;
    }

    static async getProductById(id){
        const result = await get({
            path:"/products/"+id
        });

        const allProducts = await result.json();
        return allProducts;
    }
}

export default ProductService;