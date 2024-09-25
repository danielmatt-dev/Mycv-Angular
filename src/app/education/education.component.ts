import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {

  educationList: Array<any> = []

  ngOnInit(): void {

    let education1 = {
      fecha: "08/2022 - 06/2026",
      titulo: "Ingeniería de software",
      institucion: "Universidad Veracruzana"
    }

    let education2 = {
      fecha: "08/2026 - 06/2028",
      titulo: "Técnico en programación",
      institucion: "Cbtis 107"
    }

    this.educationList.push(education1)
    this.educationList.push(education2)

  }

}
