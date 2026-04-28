export const ordenes = [
    { id: 1, cliente: "Ana", monto: 120000 },
    { id: 2, cliente: "Luis", monto: 80000 },
    { id: 3, cliente: "María", monto: 150000 }
];

export const procesarOrdenCallback = (orden, callbackFinal) => {
    const inicio = Date.now();
    console.log(`Orden ${orden.id} - Inicio`);

    setTimeout(() => {
        console.log(`Orden ${orden.id} - Verificación`);

        setTimeout(() => {
            console.log(`Orden ${orden.id} - Procesamiento`);

            setTimeout(() => {
                console.log(`Orden ${orden.id} - Registro`);

                setTimeout(() => {
                    console.log(`Orden ${orden.id} - Notificación`);

                    const fin = Date.now();
                    console.log(`Orden ${orden.id} - Finalizada en ${fin - inicio} ms`);

                    callbackFinal && callbackFinal();
                }, 500);

            }, 1000);

        }, 2000);

    }, 1500);
};

export const verificacion = (orden) => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Orden ${orden.id} - Verificación`);
            resolve(orden);
        }, 1500);
    });
};

export const procesamiento = (orden) => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Orden ${orden.id} - Procesamiento`);
            resolve(orden);
        }, 2000);
    });
};

export const registro = (orden) => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Orden ${orden.id} - Registro`);
            resolve(orden);
        }, 1000);
    });
};

export const notificacion = (orden) => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Orden ${orden.id} - Notificación`);
            resolve(orden);
        }, 500);
    });
};

export const procesarOrdenPromesas = (orden) => {
    const inicio = Date.now();

    return verificacion(orden)
        .then(procesamiento)
        .then(registro)
        .then(notificacion)
        .then(() => {
            const fin = Date.now();
            console.log(`Orden ${orden.id} - Finalizada en ${fin - inicio} ms`);
        });
};

export const procesarOrdenAsync = async (orden) => {
    const inicio = Date.now();

    await verificacion(orden);
    await procesamiento(orden);
    await registro(orden);
    await notificacion(orden);

    const fin = Date.now();
    console.log(`Orden ${orden.id} - Finalizada en ${fin - inicio} ms`);
};

export const procesarEnSerie = async () => {
    console.log("Procesando en serie...");

    for (let orden of ordenes) {
        await procesarOrdenAsync(orden);
    }

    console.log("Todas las órdenes en serie finalizadas");
};

export const procesarEnParalelo = async () => {
    console.log("Procesando en paralelo...");

    const promesas = ordenes.map(orden => procesarOrdenAsync(orden));

    await Promise.all(promesas);

    console.log("Todas las órdenes en paralelo finalizadas");
};