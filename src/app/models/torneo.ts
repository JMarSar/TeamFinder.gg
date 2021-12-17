import { Partida } from './partida';
export class Torneo {
        public partida:Partida;
        public partidas:Partida[];

        constructor(public nombre:string, public tier:string, public fecha:string, public patrocinado:boolean){
                this.partida = new Partida("eArrows", "--NOMADS--", "3", "2")
                // this.partidas = [
                //         new Partida ("nombre de prueba","prueba2","0","9"),
                //         new Partida ("nombre de prueba","prueba2","0","9"),
                //         new Partida ("nombre de prueba","prueba2","0","9"),
                //         new Partida ("nombre de prueba","prueba2","0","9"),
                // ]
        }
        
}
