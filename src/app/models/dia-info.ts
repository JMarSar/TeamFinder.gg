import { Conexiones } from "./conexiones";

export class DiaInfo {
    constructor(
        public diaSemana: string,
        public date: Date,
        public partido: boolean,
        public equipoContriante: Conexiones|null,
    ){}
}