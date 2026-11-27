<template>
  <div class="w-full text-center px-20 place item-center " style="font-family: 'Prompt', sans-serif;">
    <h2>ข้อมูลผู้ถูกประเมิน</h2>
    <p>ชื่อ-สกุล: {{ name }}</p>
    <p>ตำแหน่ง: {{ position }}</p>
    <p>แผนก: {{ department }}</p>
    <p>รอบการประเมิน: {{ period }}</p>
    <p>เบอร์โทรศัพท์: {{ phone }}</p>

    <h2>ผลการประเมิน</h2>
    <p>ความรับผิดชอบ: {{ responsibility }}</p>
    <p>การทำงานเป็นทีม: {{ teamwork }}</p>
    <p>การตรงต่อเวลา: {{ punctuality }}</p>
    <p><strong>คะแนนเฉลี่ย: {{ ((responsibility + teamwork + punctuality) / 3).toFixed(2) }}</strong></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'นายสุริยะ จงไกรจักร',
      position: 'นักศึกษา',
      department: 'เทคโนโลยีสารสนเทศ',
      period: 'รอบประเมินที่ 1/2569',
      phone: '062-346-5441',
      responsibility: 4,
      teamwork: 3.5,
      punctuality: 4.5
    }
  }
}
</script>