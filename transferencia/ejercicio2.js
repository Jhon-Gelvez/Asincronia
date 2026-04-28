export const procesarEntregas = async (paquetes) => {
  const resultados = [];
  const ordenFinalizacion = [];

  const promesas = paquetes.map(paquete => {
    console.log(`📦 Paquete ${paquete.id} en camino...`);

    return new Promise((resolve) => {
      setTimeout(() => {
        const fallo = Math.random() < 0.2;

        if (fallo) {
          const error = `❌ Error en paquete ${paquete.id}`;
          resultados.push({ id: paquete.id, error });
          ordenFinalizacion.push(error);
          console.log(error);
          resolve();
        } else {
          const exito = `✅ Paquete ${paquete.id} entregado`;
          resultados.push({ id: paquete.id, estado: "entregado" });
          ordenFinalizacion.push(`Paquete ${paquete.id}`);
          console.log(exito);
          resolve();
        }
      }, paquete.tiempo);
    });
  });

  await Promise.all(promesas);

  return {
    resultados,
    ordenFinalizacion
  };
};