export const procesarPedido = async (idPedido, tiempos) => {
    const flujo = [];

    const simularProceso = (nombre, tiempo, debeFallar = false) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (debeFallar) {
                    reject(`${nombre} falló`);
                } else {
                    resolve(`${nombre} completado`);
                }
            }, tiempo);
        });
    };

    try {
        
        const recomendacionesPromise = simularProceso(
            "recomendaciones",
            tiempos.recomendaciones
        ).then(res => {
            flujo.push(res);
            return res;
        });

    
        const stock = await simularProceso("stock", tiempos.stock);
        flujo.push(stock);

        
        const costos = await simularProceso("costos", tiempos.costos);
        flujo.push(costos);

    
        const factura = await simularProceso("factura", tiempos.factura);
        flujo.push(factura);

        
        const recomendaciones = await recomendacionesPromise;

        return {
            idPedido,
            resultados: { stock, costos, recomendaciones, factura },
            flujo
        };

    } catch (error) {
        return {
            idPedido,
            error,
            flujo
        };
    }
};