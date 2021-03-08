<template>
  <div class="user_profile">
    <h2>User friends:</h2>
    <ul>
      <li v-for="(friend, index) in friends" :key="index">{{ friend }}</li>
    </ul>
  </div>
</template>

<script>
  import { bus } from "../../main";

  export default {
      data() {
          return {
              friends: ['Cis', 'Michiel', 'Henri-Tom', 'Emiel']
          }
      },
      created() {
          bus.$on('addFriend', (value) => {
              this.friends.push(value);
          })
      }
  }
</script>
