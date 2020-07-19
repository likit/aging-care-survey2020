<template>
  <section class="section">
    <div class="container">
        <div class="columns">
            <div class="column">
              <b-message
                      title="วัตถุประสงค์การวิจัย (ปีที่ 1)"
                      type="is-info">
              <ol>
                  <li>
                      เพื่อศึกษาต้นทุน ประสิทธิภาพของการดูแลผู้สูงอายุสมองเสื่อมที่มีข้อจำกัดในการดำเนินกิจวัตรประจำวันที่ได้รับการดูแลกลางวันแบบไปกลับและการดูแลสุขภาพที่บ้าน ระยะหลังการดูแล 1 เดือนและ 3 เดือน
                  </li>
                  <li>
                      เพื่อศึกษาต้นทุนกิจกรรมการดูแลผู้สูงอายุสมองเสื่อมที่มีข้อจำกัดในการดำเนินกิจวัตรประจำวันที่ได้รับการดูแลกลางวันแบบไปกลับและการดูแลสุขภาพที่บ้าน จำแนกระยะการดูแล
                  </li>
              </ol>
              </b-message>
            </div>
        </div>
        <div class="columns">
            <div class="column is-4 is-offset-4 box">
                <b-field label="วันที่บันทึกข้อมูล">
                    <b-datepicker
                            size="is-medium"
                            :show-week-number=true
                            placeholder="Click to select..."
                            icon="calendar-today"
                            trap-focus>
                    </b-datepicker>
                </b-field>
                <b-field label="ผู้ให้ข้อมูล">
                    <b-select required
                              v-model="userIs"
                              expanded
                              size="is-medium">
                        <option value="ผู้ป่วย">ผู้ป่วย</option>
                        <option value="ญาติ">ญาติ</option>
                        <option value="ผู้ดูแลที่พัก">ผู้ดูแลที่พัก</option>
                    </b-select>
                </b-field>
                <b-field label="มีความสัมพันธ์กับผู้ป่วยโดยเป็น" v-if="userIs=='ญาติ'">
                    <b-input v-model="userRelationship" size="is-medium"></b-input>
                </b-field>
                <b-field label="ระยะเวลาในการดูแลผู้ป่วย" v-if="userIs=='ผู้ดูแลที่พัก'">
                    <b-input v-model="careDuration" size="is-medium"></b-input>
                </b-field>
                <b-field>
                    <p class="control has-text-centered">
                        <a href="/health-record" class="button is-medium is-primary">ต่อไป</a>
                    </p>
                </b-field>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
    data() {
      return {
          userIs: null,
          userRelationship: null,
          careDuration: null
      }
    }
}
</script>
