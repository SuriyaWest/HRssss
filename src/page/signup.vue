<template>
  <div
    class="max-w-sm mx-auto my-10 p-6 bg-white rounded-xl shadow border border-slate-200 text-center"
    style="font-family: 'Prompt', sans-serif;"
  >
    <h2 class="text-xl font-bold mb-4 text-slate-800">สมัครสมาชิก</h2>

    <form @submit.prevent="submitForm" class="flex flex-col gap-3">
      <input
        v-model="username"
        placeholder="Username"
        required
        class="px-3 py-2 border border-slate-300 rounded-lg"
      />
      <input
        v-model="email"
        type="email"
        placeholder="Email"
        required
        class="px-3 py-2 border border-slate-300 rounded-lg"
      />
      <input
        v-model="password"
        type="password"
        placeholder="Password"
        required
        class="px-3 py-2 border border-slate-300 rounded-lg"
      />
      <button
        type="submit"
        class="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white rounded-lg font-semibold transition-colors duration-200"
      >
        Sign Up
      </button>
    </form>

    <p v-if="message" class="mt-4 text-sm text-slate-600">{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'Signup',
  data() {
    return {
      username: '',
      email: '',
      password: '',
      message: ''
    };
  },
  methods: {
    async submitForm() {
      try {
        // เรียก backend (server/server.js) ที่รันอยู่พอร์ต 3000
        const response = await fetch('http://localhost:3000/signup', {
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

        if (response.ok) {
          this.username = '';
          this.email = '';
          this.password = '';
        }
      } catch (error) {
        console.error('Error:', error);
        this.message = 'เชื่อมต่อเซิร์ฟเวอร์ไม่ได้ (ตรวจสอบว่ารัน server แล้ว)';
      }
    }
  }
};
</script>
