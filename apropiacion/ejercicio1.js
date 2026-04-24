export const asincroniaBasica = () => {
    console.log("inicio");
    setTimeout(() => {
        console.log("operacion asincrona");
    }, 2000);
    console.log("fin");
};
