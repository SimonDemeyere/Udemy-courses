<template>
  <div>
    <compHeader></compHeader>
    {{ name }} {{ lastname }}
    <div class="container">
      <compUserProfile
        :userName="name"
        :userLastname="lastname"
        :userAge="age"
        :userParents="parents"
        @updateName="name = $event"
        :updateLastname="updateLastname"
      />
      <compFriends/>
      <compHabilities>
        <ul slot="main_hab">
          <li v-for="(hab, index) in habilities" :key="index">{{ hab }}</li>
        </ul>
        <div slot="notes">
          <p>The user also knows PHP</p>
        </div>
        <div>
          <a href="#">See more about this user</a>
        </div>
        <div :slot="slotName">
          Other content
        </div>
      </compHabilities>
    </div>
    <compFooter></compFooter>
  </div>
</template>

<script>
  import compFooter from './components/header_footer/Footer';
  import compUserProfile from './components/User/Profile';
  import compFriends from './components/User/Friends';
  import compHabilities from './components/User/Habilities';

  export default {
      data() {
          return {
              name: 'Simon',
              lastname: 'Demeyere',
              age: 23,
              parents: {
                  mother: 'Martha',
                  father: 'Mario',
              },
              habilities: ['JS', 'CSS', 'HTML'],
              slotName: '',
          }
      },
      methods: {
          updateLastname(value) {
              this.lastname = value;
          }
      },
      components: {
          compFooter,
          compUserProfile,
          compFriends,
          compHabilities,
      },
      created() {
          setTimeout(() => {
              this.slotName = 'other'
          }, 3000)
      }
  }
</script>

<style>
  body {
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
  .container {
    min-height: 84vh;
    box-sizing: border-box;
    padding: 20px;
  }
</style>
