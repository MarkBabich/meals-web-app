<script lang="ts">
import ProductCard from '../components/ProductCard.vue';
import { getRecipes } from '../utils/api/recipes';

export default {
  data() {
    return {
      recipes: [],
    };
  },
  components: {
    ProductCard,
  },
  mounted() {
    getRecipes().then(({ data }) => {
      this.recipes = data.meals;
    });
  },
};
</script>

<template>
  <div class="container">
    <div class="sort-block">Search & Sort</div>

    <div class="product-list">
      <h1 class="product-list__title">Search results</h1>

      <span class="product-list__quantity"> {{ recipes.length }} іtems </span>

      <div class="greed-container">
        <ProductCard
          v-for="recipe of recipes"
          :key="recipe"
          :recipe="recipe"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.container {
  display: flex;
  flex-direction: row;
  height: 100%;
}

.sort-block {
  background-color: gray;
  padding: 50px;
  width: 300px;
}

.product-list {
  flex-grow: 1;
  padding-top: 30px;
  padding-left: 24px;
  background-color: whitesmoke;

  &__title {
    display: inline-block;
    margin-right: 20px;
    margin-bottom: 24px;
  }

  &__quantity {
    font-size: 20px;
  }
}

.greed-container {
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 286px);
  column-gap: 26px;
  row-gap: 24px;
}
</style>
