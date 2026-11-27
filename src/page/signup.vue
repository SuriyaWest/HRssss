<template>
  <form @submit.prevent="submitForm">
    <input v-model="username" placeholder="Username" /><br />
    <input v-model="email" placeholder="Email" /><br />
    <input v-model="password" type="password" placeholder="Password" /><br />
    <button type="submit">Sign Up</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      email: '',
      password: ''
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await fetch(
            'http://localhost:5173/signup' ,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                username: this.username,
                email: this.email,
                password: this.password
              })
            });

            const result = await response.json();
            this.message = result.message;
        } catch (error) {
            console.error('Error:', error);
            }
    }
    }
};
</script>
          
