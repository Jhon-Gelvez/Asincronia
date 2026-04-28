export const validarFormulario = async (usuario, tiempos) => {
  const inicio = Date.now();

  const resultados = {
    correo: null,
    documento: null,
    usuario: null
  };

  const validaciones = [
    new Promise((resolve) => {
      setTimeout(() => {
        try {
          const valido = usuario.correo.includes("@");
          if (!valido) throw "Correo inválido";

          resultados.correo = "✅ válido";
          resolve();
        } catch (error) {
          resultados.correo = `❌ ${error}`;
          resolve();
        }
      }, tiempos.correo);
    }),

    new Promise((resolve) => {
      setTimeout(() => {
        try {
          const valido = usuario.documento.length >= 6;
          if (!valido) throw "Documento inválido";

          resultados.documento = "✅ válido";
          resolve();
        } catch (error) {
          resultados.documento = `❌ ${error}`;
          resolve();
        }
      }, tiempos.documento);
    }),

    new Promise((resolve) => {
      setTimeout(() => {
        try {
          const disponible = usuario.nombre !== "admin";
          if (!disponible) throw "Usuario no disponible";

          resultados.usuario = "✅ disponible";
          resolve();
        } catch (error) {
          resultados.usuario = `❌ ${error}`;
          resolve();
        }
      }, tiempos.usuario);
    })
  ];

  await Promise.all(validaciones);

  const exito =
    resultados.correo.includes("✅") &&
    resultados.documento.includes("✅") &&
    resultados.usuario.includes("✅");

  const fin = Date.now();

  return {
    resultados,
    estadoFinal: exito ? "Formulario validado" : "Validación fallida",
    tiempoTotal: `${fin - inicio} ms`
  };
};