import { asincroniaBasica, codigoBloqueante, consultaUsuarioCallback, consultaUsuarioPromesas, consultaUsuarioAsync } from "./apropiacion/index.js";
import { procesoSolicitudes } from "./transferencia/index.js";
// Apropiacon

// ejercicio 1
asincroniaBasica();
// ejercicio 2
codigoBloqueante();

// ejercicio 8 parte 1
consultaUsuarioCallback();
consultaUsuarioPromesas();
consultaUsuarioAsync();

// transferencia

// ejercicio 1
procesoSolicitudes();
