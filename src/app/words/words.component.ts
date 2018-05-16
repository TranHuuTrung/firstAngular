import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {

  constructor() { }
  
  arrWords = [
    { id: 1, en: 'action', vn: 'hành động', memorized: true },
    { id: 2, en: 'actor', vn: 'diễn viên', memorized: false },
    { id: 3, en: 'activity', vn: 'hoạt động', memorized: true },
    { id: 4, en: 'active', vn: 'chủ động', memorized: true },
    { id: 5, en: 'bath', vn: 'tắm', memorized: false },
    { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true }
  ];
  imageUrl = "http://adong.com.vn/assets/library/images/giuongngugo.jpg";

  ngOnInit() {
  }

  toggleStatus(idReceive){
      for(let i=0; i< this.arrWords.length; i++){
        if(this.arrWords[i].id === idReceive){
          this.arrWords[i].memorized = !this.arrWords[i].memorized;
        }
      }
      
  }
}
