<template>
  <div class="w-full" style="font-family: 'Prompt', sans-serif;">
    <main class="w-full px-10 pt-32 text-center">
      <h2 class="text-xl font-semibold mb-4 text-ink">ยินดีต้อนรับเข้าสู่ระบบประเมินบุคลากร</h2>
      <p class="text-ink/70">
        ระบบนี้ถูกออกแบบมาเพื่อให้ผู้บริหารและบุคลากรสามารถประเมินผลการปฏิบัติงานได้อย่างสะดวก
        สามารถกรอกแบบประเมิน ดูรายงาน และสรุปผลคะแนนได้ในที่เดียว
      </p>
      <button class="mt-6 bg-clay hover:bg-clay-dark text-white px-4 py-2 rounded-full font-semibold transition-colors duration-200">
        เริ่มต้นการประเมิน
      </button>
    </main>
  </div>
</template>


<script>
export default {
  name: "MainContent",
};
</script>