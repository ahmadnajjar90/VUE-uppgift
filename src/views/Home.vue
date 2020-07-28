<template>
  <div class="home">
    <amn />
    <Cards class="d-none d-lg-block "/>
  </div>
</template>

<script>
import amn from '../components/amn'
import Cards from '../components/Cards'

export default {
  name: "home",
  components: {
    amn,
    Cards
  }
};
</script>
