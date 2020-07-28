<template>
  <div class="pt-3">
    <div class="d-none d-lg-block">
      <div class="bgImageChild">
        <div class="container">
          <div class="row text-white">
            <div class="col-4 about-bottom text-left">
              <h5 class="font-weight-bold mx-auto text-uppercase mt-3">Om oss</h5>
              <p
                class="mx-auto smollAbout"
              >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta blanditiis tempora earum non officiis quas maiores unde consectetur, error vel.</p>
            </div>
            <hr class="clearfix w-100 d-md-none" />
            <div class="col-7">
              <div class="d-flex justify-content-end links-bottom">
                <div class="text-right">
                  <h5 class="font-weight-bold text-uppercase mt-3 mb-2">kontakta oss</h5>
                  <p>
                   +46 73 89 41 234
                  </p>
                  <p>
                    info@amn.se
                  </p>
                  <p>
                   Pilgatan 1 ,72227 , Västerås
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End -->
    <div class="container d-none d-lg-block bottomFooter">
      <div class="row">
        <div class="col py-1">
          <div class="d-flex justify-content-start footer-copyright py-3">
            © 2021 Copyright:
            <a class="amn" href="#">AMN</a>
          </div>
        </div>

        <div class="col py-1 text-center">
          <router-link to="/" class="navbar-brand">
            <img src="@/assets/images/logo.png" class="logoBottom" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
    };
  }
};
</script>

<style scoped>

.bgImageChild {
  background: rgba(0, 0, 0, 0.788);
  height: 100%;
}

.logoBottom {
  width: 100px;
  height: 40px;
}


.smollAbout {
  color: rgb(190, 190, 190);
}

a {
  text-decoration: none;
  color: #7295ad;
}


.amn {
  color: black;
  font-weight: bold;
}


</style>