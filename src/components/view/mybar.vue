<template>
  <div class="w-full bg-slate-50" style="font-family: 'Prompt', sans-serif;">
    <!-- Navbar (แถบเมนูสีเทาเข้ม ชาโคล) -->
    <nav class="bg-slate-800 text-white shadow-xl fixed top-0 left-0 w-full z-50 border-b border-slate-700">
      <div class="w-full flex justify-between items-center px-10 py-4">
        
        <!-- โลโก้และชื่อระบบ (ฝั่งซ้าย) -->
        <a href="#" class="flex items-center space-x-3">
          <img src="@/assets/icon.png" alt="Logo" class="h-10 w-10 object-contain rounded-lg border border-slate-600 shadow-sm" />
          <span class="text-2xl font-bold text-white tracking-wide">ระบบประเมินบุคลากร</span>
        </a>


        <!-- เมนูนำทาง (ตรงกลาง) -->
        <ul class="hidden md:flex space-x-6 text-slate-200 font-medium">
          <li><a href="#" class="px-4 py-2 hover:bg-slate-700 rounded-lg transition-colors duration-200">หน้าแรก</a></li>
          <li><a href="#" class="px-4 py-2 hover:bg-slate-700 rounded-lg transition-colors duration-200">แบบประเมิน</a></li>
          <li><a href="#" class="px-4 py-2 hover:bg-slate-700 rounded-lg transition-colors duration-200">รายงานผล</a></li>
          <li><a href="#" class="px-4 py-2 hover:bg-slate-700 rounded-lg transition-colors duration-200">ผู้ใช้</a></li>
        </ul>


        <!-- ปุ่ม Sign In / Sign Up (ฝั่งขวาสุด) -->
        <div class="hidden md:flex space-x-3">
          <a href="#" class="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-100 rounded-lg font-semibold transition-colors duration-200">
            Sign In
          </a>
          <a href="#" class="px-4 py-2 bg-slate-900 hover:bg-black text-white rounded-lg font-semibold transition-colors duration-200 shadow-md border border-slate-700">
            Sign Up
          </a>
        </div>


      </div>
    </nav>


    <!-- ส่วนเนื้อหาหลักตรงกลาง -->
    <main class="w-full px-10 py-10 bg-slate-50 pt-28 text-center">
      <h2 class="text-xl font-bold mb-4 text-slate-800">
        ยินดีต้อนรับสู่ระบบประเมินบุคลากร
      </h2>


      <p class="text-slate-600 max-w-2xl mx-auto font-medium">
        ระบบนี้ถูกออกแบบมาเพื่อให้ผู้บริหารและบุคลากรสามารถประเมินผลการปฏิบัติงานได้อย่างสะดวก
        สามารถกรอกแบบประเมิน ดูรายงาน และสรุปผลคะแนนได้ในที่เดียว
      </p>


      <div class="mt-6">
        <button class="bg-white hover:bg-slate-100 text-slate-800 px-6 py-2.5 rounded-lg font-semibold transition-colors duration-200 border border-slate-300 shadow-sm">
          เริ่มต้นการประเมิน
        </button>
      </div>
    </main>
  </div>
</template>


<script>
import logo from  '@/assets/icon.png'

export default {
  name: 'MyBar',
  data() {
    return {
      logo
    }
  }
}

</script>


<style scoped>
</style>