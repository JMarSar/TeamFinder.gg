export class Torneos {
    // public juego_id:number 
    public nombre_torneo:string
    public fecha_inicio:string
    public fecha_fin:string
    public numero_equipos:number
    public tier:string
    public reglas:string
    public clave_torneo:any
    public patrocinado:number

            
            constructor(nombre_torneo:string,fecha_inicio:string,fecha_fin:string,numero_equipos:number,
                        tier:string, reglas:string, clave_torneo:string, patrocinado:number) {

                    // this.juego_id = juego_id
                    this.nombre_torneo = nombre_torneo
                    this.fecha_inicio = fecha_inicio
                    this.fecha_fin = fecha_fin
                    this.numero_equipos = numero_equipos
                    this.tier = tier
                    this.reglas = reglas
                    this.clave_torneo = clave_torneo
                    this.patrocinado   = patrocinado             
            }
}
