new Vue({
  el: "#app",
  data: () => ({
    result: undefined,
    money:undefined,
    rate:undefined,
    chance:undefined,
    tasksList: [
      
    ],
    /*
    tasksList2:[ 

    ],*/
  }),
  computed: {
    taskClass() {
      return {
        'task': true,
        'border-task': this.tasksList.length > 1
      }
    },
  },
  methods: {
    onSubmitForm() {
      if (this.money) {
        var money=parseFloat(this.money)
        var rate=parseFloat(this.rate)
        var chance=parseFloat(this.chance)

        var pr=money/this.ds(100,100)
       // this.tasksList.push({ name: pr })

        var invr=this.rtor(rate,pr)

        var ex1=this.rtper(rate)
        var ex2=this.ds(ex1,100); 
        var s=parseFloat(0);
        var res=parseFloat(0);
        var temp2=parseFloat(0);
        var  m=invr;
        for(i=1;i<=chance;i++){
          s=s+m;
          m=(s+pr)/ex2;
          res=s.toFixed(2)
          this.tasksList.push({ name: i +" Time =" +res})
          

          temp2=temp2+s;
          

          if(i==chance){
            var  z=temp2.toFixed(2);
            this.tasksList.push({ name:"সর্বমোট টাকার দরকার="+z })
          }

        }

       /*
        var  z=temp2.toFixed(2);
            this.tasksList2.push({ name: z})
      */
        //this.money = ''
      }
    },
    login(){
      if(this.pass==1)
      {
       return true
      }
      else
      false
    },

//devide smaller number through bigger number-percent  (percent maker)       
/*static double ds(double a, double b)
{ 
  double i, j;
  i=a*100000;
  j=(i/b)/100000;
  return j;
}
*/
    ds(x,y){ 
      i1=parseFloat(x*100000)
        j1=parseFloat((i1/y)/100000)
      
        
        return j1
      

    },
//rate to real investment in the first match
/*
static double rtor(double a, double b)
{ 
  double i, j,k,r;
  i=a*1000;
  j=i-1000;
  k=1000/j;
  r=k*b;
  return r;
}
*/
rtor(x,y){
  i=parseFloat(x*1000);
  j=parseFloat(i-1000);
  k=parseFloat(1000/j);
  r=parseFloat(k*y);
  return r;
},


/* static double rtper(double a)
 { 
   double c, d, e, rtp;
   c=a*10;
   d=c-10;
   e=d*10;
   rtp=e;
   return rtp;
 } */

 rtper(a){
   c=parseFloat(a*10);
   d=parseFloat(c-10);
   e=parseFloat(d*10);
   rtp=e;
   return rtp;

 },



    onRemoveTask(indexTask) {
      this.tasksList.splice(indexTask, 1)
    },
    
  }
});
