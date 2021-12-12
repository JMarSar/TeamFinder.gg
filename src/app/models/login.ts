export class Login {
        public nombre:string
        public password:string
        public idioma:string
        public imagen:string
        public id_jugador_riot: string
        public manager: boolean
        public lfm :boolean
        public juego_fav: number
        public id_equipo: number
        public estado_equipo: string
        public id_data_user_jg: number
        public nick: string
        public servidor: string
        public posicion: string
        public rk_server: number
        public rk_global: number
        public kda:number
        public wr:number

        constructor(nombre:string,pass:string){
                this.nombre = nombre
                this.password = pass
        }
}
