<template>
  <div class="container-fluid">
    <header id="amn">
      <div class="container h-100">
        <div class="d-flex h-100 text-center align-items-center">
          <div class="w-100 text-white">  
              <div class="row">
                <div class="col-12 col-md-6">
                  <div class="card-transparent white darken text-left">
                    <div class="card-content">
                      <span class="card-title text-uppercase display-1 font-weight-bolder">NEW 2021</span>
                      <p class="font-weight-bold">Ny kollektionen för 2021 är nu här!</p>
                    </div>
                  <div class="card-action">
                    <router-link to="/" class="btn my-btn">Läs mer</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>

export default {
  name: "amn",
  data () {
    return {
    }
  }
};
</script>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');

.container-fluid {
  padding: 0;
      header {
        position: relative;
        background-image: url('../assets/images/hero.jpg');
        height: 40vh;
        min-height: 25rem;
        width: 100%;
        overflow: hidden;
          
          .container {
            position: relative;
            z-index: 2;
              .card-transparent {
                font-family: 'Raleway', sans-serif;
                max-width: 600px;
                .my-btn {
                  background-color: #243541;
                  color: white;
                }
                .my-btn:hover,
                .my-btn:focus,
                .my-btn:active,
                .my-btn.active
                .card-title {
                  text-shadow: 2px 2px black;
                }
                p {
                  text-shadow: 1px 1px black;
                }
              }
          }
  }
}
</style>