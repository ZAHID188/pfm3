new Vue({
    el: "#app23",
    data: () => ({
        pass:null,
    }),
    methods:{
        checkForm: function (e) {
            if (this.pass == 555) {
              return true;
            }
            else{
                console.log("error")
            }
           
            

            e.preventDefault();

    }
}

});
   