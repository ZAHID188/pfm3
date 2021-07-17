
const app = Vue.createApp({
    data() {
      return {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@gmail.com',
        gender: 'male',
        picture: 'https://randomuser.me/api/portraits/men/10.jpg',
      }
    },
    methods: {
       async getUser() {
           const res =await fetch('https://randomuser.me/api')
           const {results} =await res.json()

           console.log(results)
        
  
        this.firstName = results[0].name.first,
        this.lastName = results[0].name.last,
        this.email = results[0].email,
        this.gender = results[0].gender,
        this.picture = results[0].picture.medium  // VERY VERY VERY IMPORTANT I CAN NOT PUT COMMA HERE
      },
    },
  })
  
  app.mount('#app')


  /*
const app= Vue.createApp({
   // template:'<h1>hello {{firstName}}</h1>',
    data(){
        return{
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@gmail.com',
        gender: 'male',
        picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    },
    methods:{
        getUser(){
           // console.log(this.firstName)
          
            this.firstName= 'Sam',
            this.lastName= 'Smith',
            this.email= 'Smith@gmail.com',
            this.gender= 'female',
            this.picture= 'https://randomuser.me/api/portraits/women/10.jpg', // for this there will be an error
        
        },
    },
})
app.mount('#app')

















/*const app = Vue.createApp({
    data() {
      return {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@gmail.com',
        gender: 'male',
        picture: 'https://randomuser.me/api/portraits/men/10.jpg',
      }
    },
    methods: {
      async getUser() {
        const res = await fetch('https://randomuser.me/api')
        const { results } = await res.json()
  
        // console.log(results)
  
        this.firstName = results[0].name.first
        this.lastName = results[0].name.last
        this.email = results[0].email
        this.gender = results[0].gender
        this.picture = results[0].picture.large
      },
    },
  })
  
  app.mount('#app')
  */