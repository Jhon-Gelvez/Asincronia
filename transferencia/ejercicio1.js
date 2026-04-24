export const procesoSolicitudes = async () => {
    const inicioProceso = performance.now();
    const resultados = [];

    const realizarSolicitud = async (usuario, solicitud = null) => {
        let tiempoEspera;
        switch (solicitud) {
            case "consulta": tiempoEspera = 2000; break;
            case "actualizacion": tiempoEspera = 3000; break;
            case "eliminacion": tiempoEspera = 4000; break;
            case "creacion": tiempoEspera = 5000; break;
            default: tiempoEspera = 1000; break;
        }

        const inicioTarea = performance.now();
        console.log(`Iniciando atención para: ${usuario}...`);

        await new Promise((resolve) => {
            setTimeout(() => {
                console.log(`-> Solicitud de ${solicitud} para ${usuario} completada.`);
                resolve();
            }, tiempoEspera);
        });

        const finTarea = performance.now();
        const duracionIndividual = (finTarea - inicioTarea) / 1000; // Segundos
        return { usuario, solicitud, duracionIndividual };
    };

    const usuarios = [
        { nombre: "Jhon", solicitud: "consulta" },
        { nombre: "Maria", solicitud: "actualizacion" },
        { nombre: "Carlos", solicitud: "eliminacion" },
        { nombre: "Ana", solicitud: "creacion" },
    ];

    // USAR FOR...OF para garantizar ejecución SECUENCIAL
    for (const u of usuarios) {
        const resultado = await realizarSolicitud(u.nombre, u.solicitud);
        resultados.push(resultado);
    }

    const finProceso = performance.now();
    const duracionTotal = (finProceso - inicioProceso) / 1000;

    // DATOS DE SALIDA
    console.log("\n--- RESUMEN DE ATENCIÓN ---");
    resultados.forEach((res, index) => {
        console.log(`${index + 1}. Usuario: ${res.usuario} | Tiempo: ${res.duracionIndividual.toFixed(2)}s`);
    });
    console.log(`\nTiempo total del proceso: ${duracionTotal.toFixed(2)} segundos.`);
};
