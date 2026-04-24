export const consultaUsuarioCallback = () => {
    console.log("buscando usuario...");
    const buscar = (callback) => {
        setTimeout(() => {
            console.log("usuario encontrado");
            console.log("consultando permisos");
            callback();
        }, 1000);
    };

    const consultarPermisos = (callback) => {
        setTimeout(() => {
            console.log("permisos: usuario");
            console.log("generando reporte");
            callback();
        }, 2000);
    };

    const generarReporte = () => {
        console.log("reporte: usuario: Jhon, permisos: usuario");
    };

    buscar(() => {
        consultarPermisos(() => {
            generarReporte();
        });
    });
};

export const consultaUsuarioPromesas = async () => {
    console.log("buscando usuario...");

    return new Promise((resolve) => setTimeout(resolve, 1000))
        .then(() => {
            console.log("usuario encontrado");
            console.log("consultando permisos");
            return new Promise((resolve) => setTimeout(resolve, 2000));
        })
        .then(() => {
            console.log("permisos: usuario");
            console.log("generando reporte");
            return new Promise((resolve) => setTimeout(resolve, 1000));
        })
        .then(() => {
            console.log("reporte: usuario: Jhon, permisos: usuario");
        });
};

export const consultaUsuarioAsync = async () => {
    console.log("buscando usuario...");

    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("usuario encontrado");
    console.log("consultando permisos");

    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("permisos: usuario");
    console.log("generando reporte");

    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("reporte: usuario: Jhon, permisos: usuario");
};
