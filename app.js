import { asincroniaBasica, codigoBloqueante, consultaUsuarioCallback, consultaUsuarioPromesas, consultaUsuarioAsync, procesarPedido, procesosEncadenados, tomarDatos, procesarOrdenCallback, procesarOrdenPromesas, procesarOrdenAsync } from "./apropiacion/index.js";
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
tomarDatos();

// ejercicio 8 parte 1
consultaUsuarioCallback();
consultaUsuarioPromesas();
consultaUsuarioAsync();
// ejercicio 8 parte 2
procesarOrdenCallback();
procesarOrdenPromesas();
procesarOrdenAsync();
// transferencia

// ejercicio 1
procesoSolicitudes();
