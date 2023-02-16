<template>
    <div class="sign-in">
        <h2>sign in</h2>
        <form @submit.prevent="login">
            <Input label="User" default="test" v-on:filled="update($event)"/>
            <Input label="Password" default="test" v-on:filled="update($event)"/>
            <Input label="Password" default="test" v-on:filled="update($event)"/>
            <Submit :inputValue="this.name" />
        </form>
        <button @click="logout">Logout</button>
    </div>
</template>

<script>
export default {
    name: "SignIn",
    data () {
        return {
            name: "",
            username: "",
            password: "",
        }
    },
    methods: {
        // submit console log
        update(test) {
            this.name = test
            console.log( this.name )
        },

        // login method
        async login() {
            const { username, password } = this
            try {
                await this.$auth.loginWith('local', { data: { username, password } })
            } catch (error) {
                console.error(error)
            }
        },

        // logout method
        async logout() {
            try {
                await this.$auth.logout()
            } catch (error) {
                console.error(error)
            }
        },
    }
}
</script>


