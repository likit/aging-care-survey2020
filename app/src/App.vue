<template>
  <div id="app">
    <NavBar/>
    <router-view/>
    <footer class="footer">
      <div class="container has-text-centered">
        <p class="notification">
          <strong>
            ระบบบันทึกข้อมูลออนไลน์
          </strong>
          <br>
          โครงการวิจัย เรื่องการวิเคราะห์ต้นทุนประสิทธิผลของรูปแบบการจัดบริการดูแลกลางวันแบบไปกลับและรูปแบบการดูแลสุขภาพที่บ้านสำหรับผู้สูงอายุที่มีข้อจำกัดในการดำเนินชีวิตประจำวัน
        </p>
        <p>
          <br>
          หากพบปัญหาการใช้งานกรุณาติดต่อ <strong>likit.pre@mahidol.edu</strong>
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  components: {
    NavBar,
  }
}
</script>