const tomarDatos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("1. Tomando datos...");
            resolve();
        }, 2000);
    });
};

const procesarDatos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("2. Procesando datos...");
            resolve();
        }, 2000);
    });
};

const mostrarResultado = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("3. Mostrando resultado...");
            resolve();
        }, 2000);
    });
};

export const procesosConPromesas = () => {
    console.log("Inicio del proceso");

    tomarDatos()
        .then(() => procesarDatos())
        .then(() => mostrarResultado())
        .then(() => console.log("Proceso finalizado"));
};