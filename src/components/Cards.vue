<template>
  <div class="container text-center my-3">
    <div id="recipeCarousel" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner" role="listbox">
        <div class="carousel-item row no-gutters active">
          <div class="col-md-4 float-left">
            <img class="imageAsset" src="../assets/images/men/men_2.jpg" alt="Men_1" height="200" />
            <div class="card-body" id="cardBody">
              <h4>Man</h4>
              <a href="#" class="card-link">Man kläder</a>
              <p>999:-</p>
            </div>
          </div>
          <div class="col-md-4 float-left">
            <img src="../assets/images/woman/woman_1.jpg" class="imageAsset" alt="Woman_1" height="200" />
            <div class="card-body" id="cardBody">
              <h4>Kvinna</h4>
              <a href="#" class="card-link">Kvinna kläder</a>
              <p>666-</p>
            </div>
          </div>
          <div class="col-md-4 float-left">
            <img
              src="../assets/images/children/children_2.jpg"
              class="imageAsset"
              alt="Children_1"
              height="200"
            />
            <div class="card-body" id="cardBody">
              <h4>Barn</h4>
              <a href="#" class="card-link">Barn kläder </a>
              <p>444:-</p>
            </div>
          </div>
        </div>
        <div class="carousel-item row no-gutters">
          <div class="col-md-4 float-left">
            <img src="../assets/images/men/men_6.jpg" class="imageAsset" alt="Men_2" height="200" />
            <div class="card-body" id="cardBody">
              <h4>Man</h4>
              <a href="#" class="card-link">Man kläder</a>
              <p>888:-</p>
            </div>
          </div>
          <div class="col-md-4 float-left">
            <img src="../assets/images/woman/woman_4.jpg" class="imageAsset" alt="Woman_2" height="200" />
            <div class="card-body" id="cardBody">
              <h4>Kvinna</h4>
              <a href="#" class="card-link">Kvinna kläder</a>
              <p>1999:-</p>
            </div>
          </div>
          <div class="col-md-4 float-left">
            <img
              src="../assets/images/children/children_6.jpg"
              class="imageAsset"
              alt="Children_2"
              height="200"
            />
            <div class="card-body" id="cardBody">
              <h4>Barn</h4>
              <a href="#" class="card-link">Barn kläder</a>
              <p>555:-</p>
            </div>
          </div>
        </div>
        <div class="carousel-item row no-gutters">
          <div class="col-md-4 float-left">
            <img src="../assets/images/men/men_8.jpg" class="imageAsset" alt="Men_3" height="200" />
            <div class="card-body" id="cardBody">
              <h4>Man</h4>
              <a href="#" class="card-link">Man kläder</a>
              <p>299:-</p>
            </div>
          </div>
          <div class="col-md-4 float-left">
            <img src="../assets/images/woman/woman_9.jpg" class="imageAsset" alt="Woman_3" height="200" />
            <div class="card-body" id="cardBody">
              <h4>Kvinna</h4>
              <a href="#" class="card-link">Kvinna kläder</a>
              <p>299:-</p>
            </div>
          </div>
          <div class=" col-md-4 float-left">
            <img
              src="../assets/images/children/children_7.jpg"
              class="imageAsset"
              alt="Children_3"
              height="200"
            />
            <div class="card-body" id="cardBody">
              <h4>Barn</h4>
              <a href="#" class="card-link">Mössa</a>
              <p>199:-</p>
            </div>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#recipeCarousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#recipeCarousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {};
$(document).ready(function() {
  $(".carousel").carousel({
    interval: 5000,
    pause: 'hover'
  });
});
</script>

<style>
a{
  color:#1c2d38;
}

.carousel-control-next-icon {
  height: 100px;
  width: 100px;
  outline: black;
  background-size: 100%, 100%;
  background-image: none;
  margin-left: 200px;
  
}

.carousel-control-prev-icon {
  height: 100px;
  width: 100px;
  outline: black;
  background-size: 100%, 100%;
  background-image: none;
  margin-right: 200px;
  
}

.carousel-control-next-icon:after
{
  content: '>';
  font-size: 55px;
  color: #243541;
}

.carousel-control-prev-icon:after {
  content: '<';
  font-size: 55px;
  color: #243541;
}

.imageAsset {
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 30px;  
  padding: 5px;
}
</style>