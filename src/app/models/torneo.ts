import { Partida } from './partida';
export class Torneo {
        public partida:Partida;

        constructor(public nombre:string, public tier:string, public fecha:string, public patrocinado:boolean){
                this.partida = new Partida("eArrows", "Team Comilona", "3", "2")
        }
        
}
