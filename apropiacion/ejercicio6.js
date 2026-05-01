export const manejoErroresPromesas = async () => {
    const proceso = new Promise((resolve, reject) => {
        const exito = Math.random() > 0.5;

        if (exito) {
            resolve("¡Proceso completado con éxito!");
        } else {
            reject("Error: El proceso ha fallado.");
        }
    });

    proceso
        .then((mensaje) => {
            console.log(mensaje);
        })
        .catch((error) => {
            console.error(error);
        });
};
