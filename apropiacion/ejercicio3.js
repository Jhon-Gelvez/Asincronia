export const procesarPedido = (callback) => {
    console.log("Inicio del pedido");

    setTimeout(() => {
        console.log("Preparando comida...");
        
        callback();
    }, 3000);

    console.log("Pedido en proceso...");
};