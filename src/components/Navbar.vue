<template>
  <nav class="navbar">
    <h1 class="navbar__title">Система учета консультаций</h1>
    <ul class="navbar__links">
      <li>Главная</li>
      <li>Консультации</li>
      <li>Пациенты</li>
      <li>Выход</li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped lang="scss">
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  padding: 15px 20px;
  background: rgba(204, 204, 204, 0.5);
  color: rgba(0, 0, 0, .8);
  border-bottom: darkgray;
  box-shadow: 0 0 5px #000;
  &__title {
    flex: 2;
  }
  &__links {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    li {
      margin-right: 20px;
      font-weight: 700;
      padding: 10px;
      color: rgba(0, 0, 0, .6);
      &:hover {
        color: rgba(0, 0, 0, .8);
        box-shadow: 0 0 5px rgba(0, 0, 0, .7);
        background: #ccc;
        border-radius: 15px;
        cursor: pointer;
      }
    }
  }
}
</style>
