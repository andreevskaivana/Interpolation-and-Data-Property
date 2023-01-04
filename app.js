//conecting vue to our html code->inserting into empty p tag
//first step is to always Vue.createApp-we can store it in a constant

app=Vue.createApp({
    data(){
        return{
            courseGoal:'Finish the course and Learn Vue'
        };
    }
});

//we need to let vue know which part of the html code to take control of->we use this with mount
//mount holds a string->we insert the selector of the tag we want to control

app.mount('#user-goal')
