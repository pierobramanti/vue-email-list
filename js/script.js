const { createApp } = Vue

createApp({
    data() {
        return {
            emails: []
        }
    },
    methods: {
        getEmails() {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((resp) => {

            })
        }
    }
}).mount("#app")