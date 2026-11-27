<script setup>
import MyBar from './components/view/mybar.vue'
import MainContent from './components/view/main.vue'
import evaluationfrom from './components/view/evaluationfrom.vue'
import signup from './pages/signup.vue'
</script>

<template>
  <header>
    <MyBar />
  </header>
  <main>
    <signup />
  </main>
  <evaluationfrom />
  <footer>
    <div class="bg-gray-900 text-gray-400 py-4 text-center text-sm border-t border-gray-800 mt-auto">
      <p>© 2026 @สุริยะ จงไกรจักร</p>
    </div>
  </footer>
</template>