export const integrarServicios = async (idUsuario, tiempos, fallos = {}) => {
    const flujo = [];
    const resultados = {};
    const tiemposServicios = {};
    const inicioGlobal = Date.now();

    const simularServicio = (nombre, tiempo, debeFallar = false) => {
        const inicio = Date.now();

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const fin = Date.now();
                tiemposServicios[nombre] = fin - inicio;

                if (debeFallar) {
                    flujo.push(`${nombre} error`);
                    reject(`${nombre} falló`);
                } else {
                    const resultado = `${nombre} ok`;
                    flujo.push(resultado);
                    resolve(resultado);
                }
            }, tiempo);
        });
    };

    try {
        // Servicios en paralelo (A, B, C)
        const servicioAPromise = simularServicio("A", tiempos.A, fallos.A);
        const servicioBPromise = simularServicio("B", tiempos.B, fallos.B);
        const servicioCPromise = simularServicio("C", tiempos.C, fallos.C);

        // Esperar B y C para ejecutar D
        const [resB, resC] = await Promise.all([servicioBPromise, servicioCPromise]);

        resultados.B = resB;
        resultados.C = resC;

        // Servicio D depende de B y C
        const resD = await simularServicio("D", tiempos.D, fallos.D);
        resultados.D = resD;

        // A puede terminar en cualquier momento
        resultados.A = await servicioAPromise;

        const finGlobal = Date.now();

        return {
            idUsuario,
            resultados,
            flujo,
            tiempos: tiemposServicios,
            tiempoTotal: finGlobal - inicioGlobal,
            estado: "Integración exitosa"
        };

    } catch (error) {
        const finGlobal = Date.now();

        return {
            idUsuario,
            resultados,
            flujo,
            tiempos: tiemposServicios,
            tiempoTotal: finGlobal - inicioGlobal,
            estado: "Error en integración",
            error
        };
    }
};