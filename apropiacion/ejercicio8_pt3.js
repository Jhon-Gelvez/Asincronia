const usuarios = [101, 102, 103, 104];

const delayBloqueante = (ms) => {
    const inicio = Date.now();
    while (Date.now() - inicio < ms) {}
};

export const consultarBloqueante = () => {
    console.log("\n--- Iniciando Versión Bloqueante ---");
    const inicioTotal = Date.now();

    usuarios.forEach((id) => {
        const inicio = Date.now();

        delayBloqueante(1200); 
        delayBloqueante(800);  
        delayBloqueante(2000); 
        delayBloqueante(600);  

        const resultado = {
            id: id,
            nombre: `Usuario ${id}`,
            seguridad: "OK",
            roles: ["admin", "ventas"],
            tiempoTotal: `${(Date.now() - inicio) / 1000} segundos`,
        };
        console.log(resultado);
    });

    const finTotal = Date.now();
    console.log(`>> Versión Bloqueante finalizada en: ${(finTotal - inicioTotal) / 1000} segundos`);
};

const consultarConPromesas = (id) => {
    const inicio = Date.now();

    return new Promise((resolve) => {
        setTimeout(() => {
            setTimeout(() => {
                setTimeout(() => {
                    setTimeout(() => {
                        const fin = Date.now();
                        const resultado = {
                            id: id,
                            nombre: `Usuario ${id}`,
                            seguridad: "OK",
                            roles: ["admin", "ventas"],
                            tiempoTotal: `${(fin - inicio) / 1000} segundos`,
                        };
                        console.log(resultado);
                        resolve();
                    }, 600);
                }, 2000);
            }, 800);
        }, 1200);
    });
};

export const ejecutarPromesasParalelo = () => {
    console.log("\n--- Iniciando Versión en Paralelo (Promesas) ---");
    const inicioGlobal = Date.now();
    
    const tareas = usuarios.map((id) => consultarConPromesas(id));

    Promise.all(tareas).then(() => {
        const finGlobal = Date.now();
        console.log(`>> Versión Promesas finalizada en: ${(finGlobal - inicioGlobal) / 1000} segundos`);
    });
};

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

async function procesarUsuario(id) {
    const inicio = Date.now();

    await delay(1200); 
    await delay(800);  
    await delay(2000); 
    await delay(600);  

    const fin = Date.now();

    return {
        id: id,
        nombre: `Usuario ${id}`,
        seguridad: "OK",
        roles: ["admin", "ventas"],
        tiempoTotal: `${(fin - inicio) / 1000} segundos`,
    };
}

export const simuladorAsync = async () => {
    console.log("\n--- Iniciando Consulta Asincrónica (Async/Await) ---");
    const inicioGlobal = Date.now();

    const promesas = usuarios.map((id) => procesarUsuario(id));
    const resultados = await Promise.all(promesas);

    console.log(resultados);

    const finGlobal = Date.now();
    console.log(`--- Reporte Final Async ---`);
    console.log(`Tiempo total del grupo: ${(finGlobal - inicioGlobal) / 1000} segundos`);
    console.log(`Usuarios consultados en paralelo: ${usuarios.length}`);
};

