export const ordenes = [
    { id: 1, cliente: "Ana", monto: 120000 },
    { id: 2, cliente: "Luis", monto: 80000 },
    { id: 3, cliente: "María", monto: 150000 }
];

export const procesarConCallbacks = (orden, callbackFinal) => {
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

export const procesarConPromesas = (orden) => {
    const inicio = Date.now();

    return new Promise((resolve) => {
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

                        resolve();
                    }, 500);

                }, 1000);

            }, 2000);

        }, 1500);
    });
};

export const procesarConAsync = async () => {
    console.log("Procesando en paralelo...");

    const inicio = Date.now();

    const tareas = ordenes.map(orden => procesarConPromesas(orden));

    await Promise.all(tareas);

    const fin = Date.now();
    console.log(`Todas las órdenes finalizadas en ${fin - inicio} ms`);
};