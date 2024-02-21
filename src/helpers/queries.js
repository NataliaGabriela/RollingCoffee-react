const URI_PRODUCTOS= import.meta.env.VITE_API_PRODUCTOS;

export const leerProductosAPI = async() =>{
    try{
        const respuesta = await fetch(URI_PRODUCTOS);
        const listaProductos = await respuesta.jason();
        return listaProductos;
    }catch(error){
        console.log(error)
    }
}