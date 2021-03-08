<template>
  <div>
    <compHeader></compHeader>
    <div>
      <compFeatured />
      <compMenu />
      <compCallUs />
      <compNewsletter />
    </div>
    <compFooter></compFooter>
  </div>
</template>

<script>
  import compHeader from './components/header-footer/Header';
  import compFooter from './components/header-footer/Footer';
  import compFeatured from './components/featured/index';
  import compMenu from './components/menu/index';
  import compCallUs from './components/callus/index';
  import compNewsletter from './components/newsletter/index'

  export default {
    components: {
      compHeader,
      compFooter,
      compFeatured,
      compMenu,
      compCallUs,
      compNewsletter
    }
  }
</script>

<style>
  @import './assets/style.css';
</style>