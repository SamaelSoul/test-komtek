<template>
  <div class="auth-page">
    <form class="form" @submit.prevent="">
      <h2>Форма авторизации</h2>
      <div class="form-control">
        <label for="email">Email</label>
        <input type="email" id="email"/>
      </div>
      <div class="form-control">
        <label for="password">Пароль</label>
        <input type="password" id="password"/>
      </div>
      <button class="btn" type="submit">Авторизоваться</button>
    </form>
  </div>
</template>

<script></script>

<style scoped lang="scss">
.auth-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .form {
    display: flex;
    flex-direction: column;
    width: 400px;
    padding: 20px;
    border-radius: 15px;
    background: rgba(204, 204, 204, 0.7);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
    h2 {
      text-align: center;
      margin-bottom: 20px;
    }
    &-control {
      display: flex;
      flex-direction: column;
      text-align: center;
      margin-bottom: 30px;
      input {
        border: 1px solid rgb(204, 204, 204);
        background: rgba(255, 255, 255, 0.5);
        text-align: center;
        padding: 10px;
        margin-top: 5px;
        border-radius: 50px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
        font-size: 16px;
        outline: none ;
        &:hover,
        &:focus {
          background: rgba(255, 255, 255, 0.8);
        }
      }
    }
    .btn {
      background: rgba(255, 255, 255, 0.4);
      border: 1px solid rgba(204, 204, 204, 0.7);
      border-radius: 30px;
      padding: 20px;
      width: fit-content;
      margin: 0 auto;
      font-size: 16px;
      font-weight: 700;
      &:hover {
        background: rgba(204, 204, 204, 0.7);
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
      }
      &:active {
        background: rgb(204, 204, 204);
      }
    }
  }
}
</style>
