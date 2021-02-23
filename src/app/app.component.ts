import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {

  name = "Angular " + VERSION.major;
  baris = 0;
  kolom = 0;
  kambing = 0;
  jumlah = 0;
  tvalue = 0;

  tulisanOPEN:String;
  no1 = "*";
  no2 = "*";
  no3 = "*";
  no4 = "*";
  no5 = "*";

  no6 = "*";
  no7 = "*";
  no8 = "*";
  no9 = "*";
  no10 = "*";

  no11 = "*";
  no12 = "*";
  no13 = "*";
  no14 = "*";
  no15 = "*";

  no16 = "*";
  no17 = "*";
  no18 = "*";
  no19 = "*";
  no20 = "*";

  no21 = "*";
  no22 = "*";
  no23 = "*";
  no24 = "*";
  no25 = "*";

 inputs2(){
    
    

    if (this.baris == 1) {
      this.kambing = 0;
    }
    if (this.baris == 2) {
      this.kambing = 5;
    }
    if (this.baris == 3) {
      this.kambing = 10;
    }
    if (this.baris == 4) {
      this.kambing = 15;
    }
    if (this.baris == 5) {
      this.kambing = 20;
    }
    if(this.baris>5||this.baris<=0||this.kolom>5||this.kolom<=0){
      alert("angka Kelebihan / Kekurangan");
    }

    this.jumlah = (this.kambing*1) + (this.kolom*1);
   if(this.jumlah==1){
     this.no1="B";
   }
   if(this.jumlah==2){
     this.no2="B";
   }
   if(this.jumlah==3){
     this.no3="B";
   }
   if(this.jumlah==4){
     this.no4="B";
   }
   if(this.jumlah==5){
     this.no5="B";
   }
   if(this.jumlah==6){
     this.no6="B";
   }
   if(this.jumlah==7){
     this.no7="B";
   }
   if(this.jumlah==8){
     this.no8="B";
   }
   if(this.jumlah==9){
     this.no9="B";
   }
   if(this.jumlah==10){
     this.no10="B";
   }
   if(this.jumlah==11){
     this.no11="B";
   }
   if(this.jumlah==12){
     this.no12="B";
   }
   if(this.jumlah==13){
     this.no13="B";
   }
   if(this.jumlah==14){
     this.no14="B";
   }
   if(this.jumlah==15){
     this.no15="B";
   }
   if(this.jumlah==16){
     this.no16="B";
   }
   if(this.jumlah==17){
     this.no17="B";
   }
   if(this.jumlah==18){
     this.no18="B";
   }
   if(this.jumlah==19){
     this.no19="B";
   }
   if(this.jumlah==20){
     this.no20="B";
   }
   if(this.jumlah==21){
     this.no21="B";
   }
   if(this.jumlah==22){
     this.no22="B";
   }
   if(this.jumlah==23){
     this.no23="B";
   }
   if(this.jumlah==24){
     this.no24="B";
   }
   if(this.jumlah==25){
     this.no25="B";
   }
  
  

  }



  inputs(){
    
    

    if (this.baris == 1) {
      this.kambing = 0;
    }
    if (this.baris == 2) {
      this.kambing = 5;
    }
    if (this.baris == 3) {
      this.kambing = 10;
    }
    if (this.baris == 4) {
      this.kambing = 15;
    }
    if (this.baris == 5) {
      this.kambing = 20;
    }
    if(this.baris>5||this.baris<=0||this.kolom>5||this.kolom<=0){
      alert("angka Kelebihan / Kekurangan");
    }

    this.jumlah = (this.kambing*1) + (this.kolom*1);
   if(this.jumlah==1){
     this.no1="A";
   }
   if(this.jumlah==2){
     this.no2="A";
   }
   if(this.jumlah==3){
     this.no3="A";
   }
   if(this.jumlah==4){
     this.no4="A";
   }
   if(this.jumlah==5){
     this.no5="A";
   }
   if(this.jumlah==6){
     this.no6="A";
   }
   if(this.jumlah==7){
     this.no7="A";
   }
   if(this.jumlah==8){
     this.no8="A";
   }
   if(this.jumlah==9){
     this.no9="A";
   }
   if(this.jumlah==10){
     this.no10="A";
   }
   if(this.jumlah==11){
     this.no11="A";
   }
   if(this.jumlah==12){
     this.no12="A";
   }
   if(this.jumlah==13){
     this.no13="A";
   }
   if(this.jumlah==14){
     this.no14="A";
   }
   if(this.jumlah==15){
     this.no15="A";
   }
   if(this.jumlah==16){
     this.no16="A";
   }
   if(this.jumlah==17){
     this.no17="A";
   }
   if(this.jumlah==18){
     this.no18="A";
   }
   if(this.jumlah==19){
     this.no19="A";
   }
   if(this.jumlah==20){
     this.no20="A";
   }
   if(this.jumlah==21){
     this.no21="A";
   }
   if(this.jumlah==22){
     this.no22="A";
   }
   if(this.jumlah==23){
     this.no23="A";
   }
   if(this.jumlah==24){
     this.no24="A";
   }
   if(this.jumlah==25){
     this.no25="A";
   }
    

  }
    totalh1(){
    if(this.no1=="A"){
      this.tvalue+=1;
    }
    if(this.no2=="A"){
      this.tvalue+=1;
    }
    if(this.no3=="A"){
      this.tvalue+=1;
    }
    if(this.no4=="A"){
      this.tvalue+=1;
    }
    if(this.no5=="A"){
      this.tvalue+=1;
    }else{
      this.tvalue=-1;
    }
    if(this.tvalue==4){

    }
    this.tvalue=0;
  }
  totalh2(){
    if(this.no6=="A"){
      this.tvalue+=1;
    }
    if(this.no7=="A"){
      this.tvalue+=1;
    }
    if(this.no8=="A"){
      this.tvalue+=1;
    }
    if(this.no9=="A"){
      this.tvalue+=1;
    }
    if(this.no10=="A"){
      this.tvalue+=1;
    }
    if(this.tvalue==4){

    }else{
      this.tvalue=-1;
    }
    this.tvalue=0;
  }

  totalh3(){
    if(this.no11=="A"){
      this.tvalue+=1;
    }
    if(this.no12=="A"){
      this.tvalue+=1;
    }
    if(this.no13=="A"){
      this.tvalue+=1;
    }
    if(this.no14=="A"){
      this.tvalue+=1;
    }
    if(this.no15=="A"){
      this.tvalue+=1;
    }else{
      this.tvalue=-1;
    }
    if(this.tvalue==4){

    }
    this.tvalue=0;
  }
  totalh4(){
    if(this.no16=="A"){
      this.tvalue+=1;
    }
    if(this.no17=="A"){
      this.tvalue+=1;
    }
    if(this.no18=="A"){
      this.tvalue+=1;
    }
    if(this.no19=="A"){
      this.tvalue+=1;
    }
    if(this.no20=="A"){
      this.tvalue+=1;
    }else{
      this.tvalue=-1;
    }
    if(this.tvalue==4){

    }
  }
  totalh5(){
    if(this.no21=="A"){
      this.tvalue+=1;
    }
    if(this.no22=="A"){
      this.tvalue+=1;
    }
    if(this.no23=="A"){
      this.tvalue+=1;
    }
    if(this.no24=="A"){
      this.tvalue+=1;
    }
    if(this.no25=="A"){
      this.tvalue+=1;
    }
    if(this.tvalue==4){

    }else{
      this.tvalue=-1;
    }
    this.tvalue=0;
  }

  totalv1(){
    if(this.no1=="A"){
      this.tvalue+=1;
    }
    if(this.no6=="A"){
      this.tvalue+=1;
    }
    if(this.no11=="A"){
      this.tvalue+=1;
    }
    if(this.no16=="A"){
      this.tvalue+=1;
    }
    if(this.no21=="A"){
      this.tvalue+=1;
    }else{
      this.tvalue=-1;
    }
    if(this.tvalue==4){

    }
    this.tvalue=0;
  }
  totalv2(){
    if(this.no2=="A"){
      this.tvalue+=1;
    }
    if(this.no7=="A"){
      this.tvalue+=1;
    }
    if(this.no12=="A"){
      this.tvalue+=1;
    }
    if(this.no17=="A"){
      this.tvalue+=1;
    }
    if(this.no22=="A"){
      this.tvalue+=1;
    }else{
      this.tvalue=-1;
    }
    if(this.tvalue==4){

    }
    this.tvalue=0;
  }
  totalv3(){
    if(this.no3=="A"){
      this.tvalue+=1;
    }
    if(this.no8=="A"){
      this.tvalue+=1;
    }
    if(this.no13=="A"){
      this.tvalue+=1;
    }
    if(this.no18=="A"){
      this.tvalue+=1;
    }
    if(this.no23=="A"){
      this.tvalue+=1;
    }else{
      this.tvalue=-1;
    }
    if(this.tvalue==4){

    }
    this.tvalue=0;
  }
  totalv4(){
    if(this.no4=="A"){
      this.tvalue+=1;
    }
    if(this.no9=="A"){
      this.tvalue+=1;
    }
    if(this.no14=="A"){
      this.tvalue+=1;
    }
    if(this.no19=="A"){
      this.tvalue+=1;
    }
    if(this.no24=="A"){
      this.tvalue+=1;
    }
    else{
      this.tvalue=-1;
    }
    if(this.tvalue==4){

    }

    this.tvalue=0;
  }
   totalv5(){
    if(this.no5=="A"){
      this.tvalue+=1;
    }
    if(this.no10=="A"){
      this.tvalue+=1;
    }
    if(this.no15=="A"){
      this.tvalue+=1;
    }
    if(this.no20=="A"){
      this.tvalue+=1;
    }
    if(this.no25=="A"){
      this.tvalue+=1;
    }else{
      this.tvalue=-1;
    }
    if(this.tvalue==4){

    }
    this.tvalue=0;
  }
  total(){
    this.totalh1();
    this.totalh2();
    this.totalh3();
    this.totalh4();
    this.totalh5();
    this.totalv1();
    this.totalv2();
    this.totalv3();
    this.totalv4();
    this.totalv5();
  }
}
