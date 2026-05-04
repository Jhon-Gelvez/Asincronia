import { asincroniaBasica, codigoBloqueante, consultaUsuarioCallback, consultaUsuarioPromesas, consultaUsuarioAsync, procesarPedido, procesosEncadenados, procesosConPromesas, manejoErroresPromesas, asyncAwait, procesarConCallbacks, procesarConPromesas, procesarConAsync, consultarBloqueante, ejecutarPromesasParalelo, simuladorAsync } from "./apropiacion/index.js";
import { procesarEntregas, procesoSolicitudes, validarFormulario } from "./transferencia/index.js";
// Apropiacon

// ejercicio 1
asincroniaBasica();
// ejercicio 2
codigoBloqueante();
// ejercicio 3
procesarPedido(() => {
  console.log("Pedido completado");
});
// ejercicio 4
procesosEncadenados();
// ejercicio 5
procesosConPromesas();
// ejercicio 6
manejoErroresPromesas();
// ejercicio 7
asyncAwait();

// ejercicio 8 parte 1
consultaUsuarioCallback();
consultaUsuarioPromesas();
consultaUsuarioAsync();
// ejercicio 8 parte 2
procesarConCallbacks({ id: 1, cliente: "Ana", monto: 120000 });
procesarConPromesas({ id: 2, cliente: "Luis", monto: 80000 });
procesarConAsync({ id: 3, cliente: "María", monto: 150000 });
// ejercicio 8 parte 3
consultarBloqueante();
ejecutarPromesasParalelo();
simuladorAsync();

// transferencia
// ejercicio 1
procesoSolicitudes();
// ejercicio 2
procesarEntregas([
    { id: 1, destino: "Bogotá" },
    { id: 2, destino: "Medellín" },
    { id: 3, destino: "Cali" },
]);
// ejercicio 3
validarFormulario(
  { correo: "usuario@example.com", documento: "12345678", nombre: "Juan" },
  { correo: 1000, documento: 2000, usuario: 1500 }
);
// ejercicio 4 
procesarPedido(
  1,
  { stock: 1000, costos: 2000, recomendaciones: 1500, factura: 1000 }
);
// ejercicio 5
integrarServicios(
  1,
  { A: 1000, B: 2000, C: 1500, D: 1000 },
  { A: false, B: false, C: false, D: false }
);