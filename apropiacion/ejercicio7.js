const esperarPromesa = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Proceso asincrono");
        }, 2000);
    });
};

export async function asyncAwait() {
    console.log("Inicio del proceso...");

    const resultado = await esperarPromesa();

    console.log(resultado);
    console.log("Fin del proceso.");
}
