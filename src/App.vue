<script setup lang="ts">
import './App.scss';
import { HeartOutlined, PlusOutlined } from '@ant-design/icons-vue';
</script>

<template>
  <header class="header">
    <div class="header__logo">
      <img
        src="./assets/Icons/logo.png"
        class="header__logo-img"
      />
    </div>

    <div class="header__nav">
      <div
        class="header__nav-item"
        @click="$router.push('/catalog')"
      >
        <HeartOutlined class="header__nav-item-icon" />
        My list
      </div>

      <div
        class="header__nav-item"
        @click="$router.push('/new')"
      >
        <PlusOutlined class="header__nav-item-icon" />
        Add new
      </div>

      <div class="header__nav-item">
        <a-button
          class="header__nav-item-button"
          ghost
        >
          Log out
        </a-button>
      </div>
    </div>
  </header>

  <RouterView></RouterView>

  <footer>Footer</footer>
</template>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #a3cef1;
  padding: 0 50px;

  &__logo {
    display: flex;
  }

  &__logo-img {
    height: 35px;
    margin: 10px 0px;
  }

  &__nav {
    display: flex;
    align-items: center;
  }

  &__nav-item {
    line-height: 55px;
    padding: 0 10px;

    &:not(:last-child) {
      margin-right: 30px;
      border-bottom: transparent 1px solid;
    }

    &:hover:not(:last-child) {
      cursor: pointer;
      background-color: #90b5d4;
      border-color: #000;
    }
  }

  &__nav-item-icon {
    font-size: 16px;
  }

  &__nav-item-button {
    display: flex;
    align-items: center;
    color: #000 !important;
    font-family: inherit;
    font-size: inherit;
    padding: 5px;
    border-color: #000 !important;
  }
}
</style>
