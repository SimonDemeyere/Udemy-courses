<template>
  <div>
    <div class="user_profile">
      <h3>User information:</h3>
      <ul>
        <li><span>Name:</span> {{ userName }}</li>
        <li><span>Lastname:</span> {{ userLastname }}</li>
        <li><span>Age:</span> {{ userAge }}</li>
      </ul>
      <h3>Parents</h3>
      <ul>
        <li v-for="(key, value, index) in userParents" :key="index">
          <span>{{ key }}:</span> {{ value }}
        </li>
      </ul>
    </div>
    <button @click="updateName">Update name</button>
    <button @click="updateLastname('Demeyere updated')">Update lastname</button>
    <div>
      <input type="text" v-model="friendInput">
      <button @click="addFriend">Add friend</button>
    </div>
  </div>
</template>

<script>
  import { bus } from '../../main'

  export default {
      data() {
          return {
              friendInput: '',
          }
      },
      props: {
          userName: String,
          userLastname: String,
          userAge: Number,
          userParents: Object,
          updateLastname: Function
      },
      methods: {
          updateName() {
              this.$emit('updateName', 'Simon updated')
          },
          addFriend() {
              bus.$emit('addFriend', this.friendInput)
          }
      }
  }
</script>

<style>
  span {
    font-weight: 800
  }
  .user_profile {
    border: 1px solid #2196f3;
    padding: 10px 20px;
  }
</style>
