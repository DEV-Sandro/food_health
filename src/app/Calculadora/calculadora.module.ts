import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CalcularComponent } from "./calculadoraIMC/calcular.component";

@NgModule({
    declarations : [CalcularComponent],
    exports:[CalcularComponent],
    imports:[FormsModule]
})

export class CalcularModule{
    
}