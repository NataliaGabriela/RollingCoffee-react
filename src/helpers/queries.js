const URI_PRODUCTOS= import.meta.env.VITE_API_PRODUCTOS;

export const leerProductosAPI = async() =>{
    try{
        const respuesta = await fetch(URI_PRODUCTOS);
        const listaProductos = await respuesta.json();
        return listaProductos;
    }catch(error){
        console.log(error)
    }
}
//POST
export const crearProductoAPI = async(productoNuevo)=>{
    try{
        const respuesta = await fetch(URI_PRODUCTOS,{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(productoNuevo)
        })
        return respuesta;//devuelve una promesa
    }catch(error){
        console.log(error)
    }
}
//DELETE
export const borrarProductoAPI = async(id)=>{
    try {
        const respuesta = await fetch(`${URI_PRODUCTOS}/${id}`, {
            method: "DELETE"
        })
        console.log(respuesta);
        return respuesta
    } catch (error) {
        console.log(error)
    }
}