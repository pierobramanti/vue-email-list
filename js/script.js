const { createApp } = Vue

createApp({
    data() {
        return {
            emails: []
        }
    },
    methods: {
        generateEmails() {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((resp) => {
                console.log(resp)
                for(let i = 0; i<10; i++) {
                    this.emails.push(resp.data.response)
                }
                console.log(resp.data.response)
            })
        }
    }
}).mount("#app")