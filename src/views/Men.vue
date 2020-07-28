<template>
<div>
  <rea />
  <div class="container bg-light">
    <h4 class="pt-4">Man</h4>
    <div class="search-container my-5">
        <label class="mr-3 mt-2">Välj kategori</label>
          <select class="select-css mr-5" v-model="selectedCategory">
            <option value="All">Alla</option>
            <option value="Jackets">Jackor</option>
            <option value="Boots">Kängor</option>
            <option value="Hats">Mössor</option>
          </select>
          <label class="mr-3 mt-2">Välj varumärke</label>
          <select class="select-css mr-5" v-model="selectedBrand">
            <option value="All">Alla</option>
            <option value="Björn Borg">Björn Borg</option>
            <option value="Levis">Levis</option>
            <option value="Bugatti">Bugatti</option>
            <option value="Barker">Barker</option>
            <option value="Antony Morato">Antony Morato</option>
            <option value="Base London">Base London</option>
            <option value="Gant">Gant</option>
            <option value="American Eagle">American Eagle</option>
            <option value="Fjällräven">Fjällräven</option>
          </select>
    </div>
    <div class="card-columns">
      <div v-for="product in filteredClothes" v-bind:key="product.id">
        <div class="card text-center ">
          <img :src="require(`@/assets/images/men/${product.img_url}`)" class="card-img-top p-1" />
          <div class="card-body">
            <h5 class="card-title badge badge-pill badge-bg-color">{{product.price}} kr</h5>
            <h6 class="card-title lead">{{product.name}}</h6>
            <h6 class="card-title"><strong>{{product.brand}}</strong></h6>
          </div>
          <div class="card-footer justify-content-center">
            <button class="btn back-color-button" @click.stop="addItem(product)">Köpa</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import db from "@/components/firebaseInit";
import StarRating from 'vue-star-rating'
import rea from '@/components/rea'
import BackToTop from 'vue-backtotop'

export default {
  name: "men",
  methods: {
    addItem(item) {
      this.$store.dispatch('addItem', item);
      this.$store.dispatch('openCart');
    }
  },
  data() {
    return {
      products: [],
      selectedCategory: "All",
      selectedBrand: "All"
    };
  },
    components: {
      StarRating,
      rea,
      BackToTop
},
  created() {
    db.collection("men")
      .orderBy("brand")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const data = {
            id: doc.id,
            brand: doc.data().brand,
            category: doc.data().category,
            men_id: doc.data().men_id,
            description: doc.data().description,
            img_url: doc.data().img_url,
            instock: doc.data().instock,
            amount: doc.data().amount,
            name: doc.data().name,
            price: doc.data().price,
            size: doc.data().size,
            type: doc.data().type,
            rating: doc.data().rating
          };
          this.products.push(data);
        });
      });
  },
  computed: {
    filteredClothes() {
      let category = this.selectedCategory;
      let brand = this.selectedBrand;

        if (category === "All" & brand === "All") {
          return this.products
          } else if (category === "All" && brand !== "All") {
              return this.products.filter(product => {
          return product.brand === brand;
          })}
          else if (category !== "All" && brand === "All") {
              return this.products.filter(product => {
          return product.category === category;
          })}
          else if (category !== "All" && brand !== "All") {
              return this.products.filter(product => {
          return product.category === category;
          }).filter(product => {
          return product.brand === brand;
          })
          }
    }
  }
};
</script>

<style lang="scss" scoped>

*, *::before, *::after {
    box-sizing: border-box;
}
@import "./breakpoints.scss";
@import "./functions.scss";
@import "./variables.scss";

.card-columns {
    @include media-breakpoint-only(sm) {
        column-count: 1;
  }
    @include media-breakpoint-only(md) {
        column-count: 2;
  }
  @include media-breakpoint-only(lg) {
        column-count: 3;
  }
  @include media-breakpoint-only(xl) {
        column-count: 4;
  }
}

.search-container {
  display: flex;
  flex-direction: row;
    .select-css {
      display: block;
      font-size: 16px;
      font-family: sans-serif;
      font-weight: 700;
      color: #444;
      line-height: 1.3;
      padding: .6em 1.4em .5em .8em;
      width: 25%;
      max-width: 100%; 
      box-sizing: border-box;
      margin: 0;
      border: 1px solid #aaa;
      box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
      border-radius: .5em;
      -moz-appearance: none;
      -webkit-appearance: none;
      appearance: none;
      background-color: #fff;
      background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
      linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%);
      background-repeat: no-repeat, repeat;
      background-position: right .7em top 50%, 0 0;
      background-size: .65em auto, 100%;
    }
    .select-css::-ms-expand {
      display: none;
    }
    .select-css:hover {
      border-color: #888;
    }
    .select-css:focus {
      border-color: #aaa;
      box-shadow: 0 0 1px 1px rgba(59, 153, 252, .7);
      box-shadow: 0 0 0 3px -moz-mac-focusring;
      color: #222; 
      outline: none;
    }
    .select-css option {
      font-weight:normal;
    }
    input {
	    outline: none;
    }
    input[type=search] {
      -webkit-appearance: textfield;
      box-sizing: content-box;
      -webkit-box-sizing: content-box;
      font-family: inherit;
      font-size: 100%;
    }
    input::-webkit-search-decoration,
    input::-webkit-search-cancel-button {
      display: none; 
    }
    input[type=search] {
      background: #ededed url(https://static.tumblr.com/ftv85bp/MIXmud4tx/search-con.png) no-repeat 9px center;
      border: solid 1px #ccc;
      padding: 9px 10px 9px 32px;
      width: 200px;
      -webkit-border-radius: 10em;
      -moz-border-radius: 10em;
      border-radius: 10em;
      -webkit-transition: all .5s;
      -moz-transition: all .5s;
      transition: all .5s;
    }
    input[type=search]:focus {
    	width: 220px;
	    background-color: #fff;
	    border-color: lightblue;
      -webkit-box-shadow: 0 0 5px rgba(109,207,246,.5);
	    -moz-box-shadow: 0 0 5px rgba(109,207,246,.5);
    	box-shadow: 0 0 5px rgba(109,207,246,.5);
    }
    input:-moz-placeholder {
	    color: #999;
    }
    input::-webkit-input-placeholder {
	    color: #999;
    }
}

.card {
    .card-img-top {
        width: 100%;
        height: auto;
    }

    .card:hover {
        border: 1px solid lightblue;
    }
    .card-body {
        display: flex;
        flex-direction: column;
        h6 {
            font-size: .75em;
            padding: 5px;
        }
        h6:nth-child(3) {
          text-transform: uppercase;
        }
        .badge-bg-color {
          background-color: #243541;
          color: white;
        }
    }
    .card-footer {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
        input[type=number] {
            padding: 5px; 
            border: 1px solid lightblue; 
            -webkit-border-radius: 5px;
            border-radius: 5px;
            width: 40px;
            font-size: .75em;
        }
        img {
            width: 1.2em;
            height: 1.2em;
        }
        .back-color-button {
          background-color: #243541;
          color: white;
        }
        .back-color-button:hover {
          filter: brightness(120%)
        }
    }  
}

  @media (max-width: 600px) {
    .search-container {
      display: grid;
      grid-column: 1fr;
      grid-gap: 30px;
      .select-css {
        width: 100%;
      }
      input[type=search] {
        width: 200px;
      }
      input[type=search]:focus {
        width: 280px;
      }
    }
  }

.btn-to-top {
  width: 60px;
  height: 60px;
  padding: 10px 16px;
  border-radius: 50%;
  font-size: 22px;
  line-height: 22px;
  background: black;
}
</style>