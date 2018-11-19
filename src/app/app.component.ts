import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


export class Item {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public created_at: string
  ) { }
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.scss'],

})
export class AppComponent {

  public searchD = '';
  public searchT = '';
  public myDate = new Date();
  selectedItem: Item;

  Items: Item[] = [{
    id: 1,
    title: 'Admin',
    description: 'Some descriptio',
    created_at: '12/25/2018',
  },
    {
      id: 2,
      title: 'Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text',
      description: 'Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнять важные задания по разработке дальнейших направлений развития. Таким образом постоянное информационно-пропагандистское обеспечение нашей деятельности в значительной степени обуславливает создание систем массового участия. Повседневная практика показывает, что рамки и место обучения кадров играет важную роль в формировании существенных финансовых и административных условий.',
      created_at: '11/09/2017',
    },
    {
      id: 3,
      title: 'Qwert',
      description: 'Some descriptio',
      created_at: '12/09/2017',
    },
    {
      id: 4,
      title: 'Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text',
      description: 'Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнять важные задания по разработке дальнейших направлений развития. Таким образом постоянное информационно-пропагандистское обеспечение нашей деятельности в значительной степени обуславливает создание систем массового участия. Повседневная практика показывает, что рамки и место обучения кадров играет важную роль в формировании существенных финансовых и административных условий.',
      created_at: '02/12/2017',
    },
    {
      id: 5,
      title: 'Valera Ivanov',
      description: 'Some descriptio',
      created_at: '01/01/2017',
    },
    {
      id: 6,
      title: 'Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text',
      description: 'Some descriptio',
      created_at: '10/09/2017',
    },
    {
      id: 7,
      title: 'Dikobraz',
      description: 'Some descriptio',
      created_at: '11/08/2017',
    },
    {
      id: 8,
      title: 'Ivanov Ivan',
      description: 'Повседневная практика показывает, обучения кадров играет важную роль в формировании существенных финансовых и административных условий.',
      created_at: '05/09/2017',
    },
    {
      id: 9,
      title: 'Some text',
      description: 'Some descriptio',
      created_at: '07/09/2017',
    },
    {
      id: 2,
      title: 'Kolokol',
      description: 'Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнять важные задания по разработке дальнейших направлений развития. Таким образом постоянное информационно-пропагандистское обеспечение нашей деятельности в значительной степени обуславливает создание систем массового участия. Повседневная практика показывает, что рамки и место обучения кадров играет важную роль в формировании существенных финансовых и административных условий.',
      created_at: '06/09/2017',
    },
  ];


  onSelect(item: Item) {
    this.selectedItem = item;

  }

  addItem(id: number, title: string, description: string, created_at: string, myDate: string) {
    if(created_at == null){
      this.Items.push(new Item(id, title, description, myDate));
    } else {
      this.Items.push(new Item(id, title, description, created_at));
    }
  }

  deleteItem(index: number) {
    this.Items.splice(index, 1);
  }





}
