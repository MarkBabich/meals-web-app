<script lang="ts">
import { HeartOutlined } from '@ant-design/icons-vue';

export default {
  props: ['recipe'],
};
</script>

<template>
  <div class="product-card">
    <div class="product-card__title">
      <div class="product-card__title-text">
        {{ recipe['strMeal'] }}
      </div>

      <HeartOutlined class="product-card__title-like" />
    </div>

    <img
      :src="recipe['strMealThumb']"
      class="product-card__img"
    />

    <div class="product-card__category">
      Category:&nbsp;
      <a-tag color="green">{{ recipe['strCategory'] }}</a-tag>
    </div>

    <div class="product-card__area">
      Area:&nbsp;
      <a-tag color="green">{{ recipe['strArea'] }}</a-tag>
    </div>

    <div class="product-card__tags">
      <a-tag
        class="product-card__tags-item"
        color="orange"
      >
        {{ recipe['strIngredient1'] }}
      </a-tag>

      <a-tag
        class="product-card__tags-item"
        color="orange"
      >
        {{ recipe['strIngredient2'] }}
      </a-tag>

      <a-tag
        class="product-card__tags-item"
        color="orange"
      >
        {{ recipe['strIngredient3'] }}
      </a-tag>

      <a-tag
        class="product-card__tags-item"
        color="orange"
      >
        {{ recipe['strIngredient4'] }}
      </a-tag>
    </div>

    <a-button
      class="product-card__details-button"
      type="primary"
      ghost
    >
      Details
    </a-button>
  </div>
</template>

<style lang="scss">
.product-card {
  display: flex;
  flex-direction: column;
  justify-items: center;
  width: 286px;
  padding: 24px;
  border: #000 2px solid;
  border-radius: 16px;

  &__title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 20px;
    margin-bottom: 24px;

    &-text {
      font-weight: 700;
      line-height: 24px;
    }
  }

  &__img {
    height: 236px;
    width: 236px;
    border-radius: 16px;
    margin-bottom: 24px;
  }

  &__category {
    display: flex;
    margin-bottom: 10px;

    &-text {
      color: #eb7bc0;
    }
  }

  &__tags {
    margin-bottom: 15px;
    height: 54px;

    &-item {
      margin-bottom: 5px;
    }
  }

  &__area {
    margin-bottom: 20px;
  }
}
</style>
