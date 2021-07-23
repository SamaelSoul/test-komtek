<template>
  <div class="auth-page">
    <validation-observer v-slot="{ handleSubmit }">
      <form class="form" @submit.prevent="handleSubmit(onSubmit)">
        <h2>Форма авторизации</h2>

        <validation-provider name="Email" rules="required|email" v-slot="{ errors }">
          <div class="form-control">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="formData.email"/>
            <small>{{ errors[0] }}</small>
          </div>
        </validation-provider>
        <validation-provider name="Password" rules="required|max:15|min:6" v-slot="{ errors }">
          <div class="form-control">
            <label for="password">Пароль</label>
            <input type="password" id="password" v-model="formData.password"/>
            <small>{{ errors[0] }}</small>
          </div>
        </validation-provider>

        <button class="btn" type="submit">Войти</button>
      </form>
    </validation-observer>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Auth',
  data() {
    return {
      formData: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions('auth', ['login']),
    async onSubmit() {
      console.log(this.formData)
      await this.login(this.formData)
    }
  }
}
</script>

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
      height: 100px;
      input {
        border: 1px solid rgb(204, 204, 204);
        background: rgba(255, 255, 255, 0.5);
        text-align: center;
        padding: 10px;
        margin: 5px 0;
        border-radius: 50px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
        font-size: 16px;
        outline: none ;
        &:hover,
        &:focus {
          background: rgba(255, 255, 255, 0.8);
        }
      }
      small {
        color: red;
      }
    }
    .btn {
      background: rgba(255, 255, 255, 0.5);
      border: 1px solid rgba(204, 204, 204, 0.7);
      border-radius: 30px;
      padding: 20px 40px;
      width: fit-content;
      margin: 0 auto;
      font-size: 20px;
      font-weight: 700;
      &:hover {
        background: rgba(255, 255, 255, 0.8);
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
      }
      &:active {
        background: rgb(204, 204, 204);
      }
    }
  }
}
</style>
