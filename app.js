import { asincroniaBasica, codigoBloqueante, consultaUsuarioCallback, consultaUsuarioPromesas, consultaUsuarioAsync, procesarPedido, procesosEncadenados, procesosConPromesas, procesarOrdenCallback, procesarOrdenPromesas, procesarOrdenAsync } from "./apropiacion/index.js";
import { procesoSolicitudes } from "./transferencia/index.js";
// Apropiacon

// ejercicio 1
asincroniaBasica();
// ejercicio 2
codigoBloqueante();
// ejercicio 3
procesarPedido();
// ejercicio 4
procesosEncadenados();
// ejercicio 5
procesosConPromesas();

// ejercicio 8 parte 1
consultaUsuarioCallback();
consultaUsuarioPromesas();
consultaUsuarioAsync();
// ejercicio 8 parte 2
procesarConCallbacks({ id: 1, cliente: "Ana", monto: 120000 });
procesarConPromesas({ id: 2, cliente: "Luis", monto: 80000 });
procesarConAsync({ id: 3, cliente: "María", monto: 150000 });
// transferencia

// ejercicio 1
procesoSolicitudes();
