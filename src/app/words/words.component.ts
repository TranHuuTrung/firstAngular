import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {

  constructor() { }
  filterStatus = 'XEM_TAT_CA';
  newEn = '';
  newVn = '';
  isShowForm = false;
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

  addNewWord(){
    this.arrWords.unshift({
      id: this.arrWords.length + 1,
      en: this.newEn,
      vn: this.newVn,
      memorized: false
    });
    this.newEn = '';
    this.newVn = '';
    this.isShowForm = false;
  }

  deleteWord(idDelete){
    // for(let i=0; i< this.arrWords.length; i++){
    //   if(this.arrWords[i].id === idDelete){
    //     this.arrWords.splice(i,1);
    //   }
    // } 
    // Cách 2 dùng hàm findIndex() của JS
    const index = this.arrWords.findIndex(word => word.id === idDelete);
    this.arrWords.splice(index, 1);

  }
  filters(memorized: boolean){
    const xemTatCa = this.filterStatus === 'XEM_TAT_CA';
    const xemDaNho = this.filterStatus === 'XEM_TU_DA_NHO' && memorized;
    const xemChuaNho = this.filterStatus === 'XEM_TU_CHUA_NHO' && !memorized;
    return xemTatCa || xemDaNho || xemChuaNho;
  }
 
}
