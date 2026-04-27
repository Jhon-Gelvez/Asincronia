export const procesosEncadenados = () => {
    console.log("Inicio del proceso");

    setTimeout(() => {
        console.log("1. Tomando datos...");

        setTimeout(() => {
            console.log("2. Procesando datos...");

            setTimeout(() => {
                console.log("3. Mostrando resultado...");
                console.log("Proceso finalizado");
            }, 2000);

        }, 2000);

    }, 2000);
};