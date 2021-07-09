import { templateJitUrl } from "@angular/compiler";
import { Component } from "@angular/core";

@Component({
    selector: "calculadora-resultado",
    templateUrl: "./calcular.component.html",
    styleUrls: ["./calcular.component.css"]

})

export class CalcularComponent{
    peso!: number;
    altura!: number;
    imc!: number;
    quadril! : number;
    iac!: number;

    constructor(){
    }

    calcular(): number{

        let imc =0;
        let alt = this.altura;
        let pes = this.peso;
        let qua = this.quadril;

        this.imc = pes /(alt**2)
    
        return 2
    }
    calcular2(): number{

        let iac =0;
        let alt = this.altura;
        let pes = this.peso;
        let qua = this.quadril;

        this.iac = qua /(alt**2)-18
    
        return 3
    }
}