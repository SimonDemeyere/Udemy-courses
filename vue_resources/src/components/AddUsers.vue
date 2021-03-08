<template>
    <div>
        <h2>Add users</h2>

        <div class="form-group">
            <label>Name</label>
            <input class="form-control" type="text" v-model="user.name">
        </div>

        <div class="form-group">
            <label>Lastname</label>
            <input class="form-control" type="text" v-model="user.lastname">
        </div>

        <button class="btn btn-primary" @click="submit">Submit</button>

    </div>
</template>


<script>
     export default {
        data(){
            return{
                user:{ 
                    name:'',
                    lastname:''
                },
                resource: ''
            }
        },
        methods:{
            submit(){
               /* this.$http.post('users')
               .then( response => {
                   this.users = response.body
               }) */

               /* this.resource.save({id: 2})
               .then(response => {
                   this.users = [response.body];
               }) */

               this.resource.save({_limit: 3})
               .then(response => {
                   this.users = response.body;
               })
            }
        },
        created() {
            this.resource = this.$resource('users{/id}', {_limit: 3})
            this.fetchData();
        }
    }
</script>