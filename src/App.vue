<template>
  <div>
    <Toolbar/>
    <Header/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Toolbar from '@/components/Toolbar'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Toolbar
  },
  mounted(){
      this.$store.dispatch('getCategoryList')
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
