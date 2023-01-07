//conecting vue to our html code->inserting into empty p tag
//first step is to always Vue.createApp-we can store it in a constant

app=Vue.createApp({
    data(){
        return{
            courseGoalA:'Finish the course and Learn Vue',
            courseGoalB:'Master Vue and build amazing apps',
            vueLink:'https://vuejs.org/' //we want to bimd this link in html
        };
    },
    methods:{
        outputGoal(){
            const randomNumber=Math.random();
            if(randomNumber<0.5){
            return this.courseGoalA;}
            else {return this.courseGoalB};
        }
    }
});

//we need to let vue know which part of the html code to take control of->we use this with mount
//mount holds a string->we insert the selector of the tag we want to control

app.mount('#user-goal')


// the syntax {{}} is only available between opening and closing HTML tags-anywhere where we would output actual content
//if we weant to pass a dynamic value to an attribute-href dynamically is passed
//we use a different syntax->vue directive
//the directive for links is v bind:href 
//we insert the link in the data in vue not in the html file, we just reference the data object in the html file where we have the link stored
//we reference links WITHOUT {{}}

//methods option allows u to define functions which should execute when something happens
//data-function methods-takes an object that is full with functions
//methods is a reserved object
//everything inside methods needs to be a function so it could be called

//methods:functions defined in a on object


//all the data is merged and stored in a global instance-THIS