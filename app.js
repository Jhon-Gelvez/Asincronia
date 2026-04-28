import { asincroniaBasica, codigoBloqueante, consultaUsuarioCallback, consultaUsuarioPromesas, consultaUsuarioAsync, procesarPedido, procesosEncadenados, procesosConPromesas } from "./apropiacion/index.js";
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

// transferencia

// ejercicio 1
procesoSolicitudes();
