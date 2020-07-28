<template>
  <div id="app" class="bg-light">
    <div id="nav">
      <TopNav class="d-none d-lg-block"/>
      <NavBar />
      <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Skapa ett nytt konto</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view />
    <div id="footer">
      <Footer />
    </div>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer.vue'
export default {
  name: 'app',
  components: {
    NavBar,
    Footer,
  }
}
</script>
<style>
  @import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');

body {
        font-family: 'Raleway', sans-serif;
}

</style>
