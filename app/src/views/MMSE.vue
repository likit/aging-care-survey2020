<template>
    <section class="section">
        <div class="container">
            <b-steps
                    v-model="activeStep"
                    :has-navigation="false"
            >
                <b-step-item step="1" label="ประวัติสุขภาพ"></b-step-item>
                <b-step-item step="2" label="ข้อมูลด้านต้นทุนผู้ป่วย"></b-step-item>
                <b-step-item step="3" label="แบบสอบถาม EQ-5D-5L"></b-step-item>
                <b-step-item step="4" label="แบบประเมินคุณภาพชีวิต VAS"></b-step-item>
                <b-step-item step="5" label="MMSE-Thai 2002"></b-step-item>
            </b-steps>
            <h1 class="title">แบบทดสอบสมรรถภาพเบื้องต้นฉบับภาษาไทย MMSE-Thai 2002</h1>
            <h1 class="subtitle">Mini-Mental State Examination-Thai 2002</h1>
            <b-message title="1. Orientation for time: ทดสอบความรู้เกี่ยวกับเวลาปัจจุบัน (5 คะแนน)" type="is-primary" :closable="false">
                <b-field grouped>
                    <b-input placeholder="1.1 วันนี้ วันที่เท่าไหร่" v-model="form.mmse.timeOrientation.q1_1.answer" expanded></b-input>
                    <b-checkbox size="is-medium" v-model="form.mmse.timeOrientation.q1_1.correct">ถูกต้อง</b-checkbox>
                </b-field>
                <b-field grouped>
                    <b-input placeholder="1.2 วันนี้ วันอะไร" v-model="form.mmse.timeOrientation.q1_2.answer" expanded></b-input>
                    <b-checkbox size="is-medium" v-model="form.mmse.timeOrientation.q1_2.correct">ถูกต้อง</b-checkbox>
                </b-field>
                <b-field grouped>
                    <b-input placeholder="1.3 เดือนนี้ เดือนอะไร" expanded v-model="form.mmse.timeOrientation.q1_3.answer"></b-input>
                    <b-checkbox size="is-medium" v-model="form.mmse.timeOrientation.q1_3.correct">ถูกต้อง</b-checkbox>
                </b-field>
                <b-field grouped>
                    <b-input placeholder="1.4 ปีนี้ ปีอะไร" expanded v-model="form.mmse.timeOrientation.q1_4.answer"></b-input>
                    <b-checkbox size="is-medium" v-model="form.mmse.timeOrientation.q1_4.correct">ถูกต้อง</b-checkbox>
                </b-field>
                <b-field grouped>
                    <b-input placeholder="1.5 ฤดูนี้ ฤดูอะไร" expanded v-model="form.mmse.timeOrientation.q1_5.answer"></b-input>
                    <b-checkbox size="is-medium" v-model="form.mmse.timeOrientation.q1_5.correct">ถูกต้อง</b-checkbox>
                </b-field>
            </b-message>
            <b-message title="2. Orientation for place: ทดสอบความรู้เกี่ยวกับที่อยู่ในปัจจุบัน (5 คะแนน)" type="is-primary" :closable="false">
                <b-field grouped>
                    <b-radio v-model="form.mmse.placeOrientation.location" native-value="hospital">กรณีอยู่สถานพยาบาล</b-radio>
                    <b-radio v-model="form.mmse.placeOrientation.location" native-value="home">กรณีอยู่บ้านของผู้ถูกทดสอบ</b-radio>
                </b-field>
                <div v-if="form.mmse.placeOrientation.location==='hospital'">
                    <b-field grouped>
                        <b-input placeholder="2.1.1 สถานที่ตรงนี้เรียกว่าอะไร และชื่อว่าอะไร" expanded
                                 v-model="form.mmse.placeOrientation.q2_1_1.answer"></b-input>
                        <b-checkbox size="is-medium" v-model="form.mmse.placeOrientation.q2_1_1.correct">ถูกต้อง</b-checkbox>
                    </b-field>
                    <b-field grouped>
                        <b-input placeholder="2.1.2 ขณะนี้อยู่ชั้นที่เท่าไหร่ของตัวอาคาร" expanded
                          v-model="form.mmse.placeOrientation.q2_1_2.answer"></b-input>
                        <b-checkbox size="is-medium" v-model="form.mmse.placeOrientation.q2_1_2.correct">ถูกต้อง</b-checkbox>
                    </b-field>
                    <b-field grouped>
                        <b-input placeholder="2.1.3 ที่นี่อยู่ในอำเภออะไร" expanded
                          v-model="form.mmse.placeOrientation.q2_1_3.answer"></b-input>
                        <b-checkbox size="is-medium" v-model="form.mmse.placeOrientation.q2_1_3.correct">ถูกต้อง</b-checkbox>
                    </b-field>
                    <b-field grouped>
                        <b-input placeholder="2.1.4 ที่นี่จังหวัดอะไร" expanded
                          v-model="form.mmse.placeOrientation.q2_1_4.answer"></b-input>
                        <b-checkbox size="is-medium" v-model="form.mmse.placeOrientation.q2_1_4.correct">ถูกต้อง</b-checkbox>
                    </b-field>
                    <b-field grouped>
                        <b-input placeholder="2.1.5 ที่นี่ภาคอะไร" expanded
                          v-model="form.mmse.placeOrientation.q2_1_5.answer"></b-input>
                        <b-checkbox size="is-medium" v-model="form.mmse.placeOrientation.q2_1_5.correct">ถูกต้อง</b-checkbox>
                    </b-field>
                </div>
                <div v-else>
                    <b-field grouped>
                        <b-input placeholder="2.2.1 สถานที่ตรงนี้เรียกว่าอะไร และเลขที่เท่าไหร่" expanded
                          v-model="form.mmse.placeOrientation.q2_2_1.answer"></b-input>
                        <b-checkbox size="is-medium" v-model="form.mmse.placeOrientation.q2_2_1.correct">ถูกต้อง</b-checkbox>
                    </b-field>
                    <b-field grouped>
                        <b-input placeholder="2.2.2 ที่นี่หมู่บ้าน (หรือละแวก คุ้ม ย่าน ถนนอะไร)" expanded
                          v-model="form.mmse.placeOrientation.q2_2_2.answer"></b-input>
                        <b-checkbox size="is-medium"
                          v-model="form.mmse.placeOrientation.q2_2_2.correct">ถูกต้อง</b-checkbox>
                    </b-field>
                    <b-field grouped>
                        <b-input placeholder="2.2.3 ที่นี่อยู่ในอำเภอ หรือเขตอะไร" expanded
                          v-model="form.mmse.placeOrientation.q2_2_3.answer"></b-input>
                        <b-checkbox size="is-medium"
                          v-model="form.mmse.placeOrientation.q2_2_3.correct">ถูกต้อง</b-checkbox>
                    </b-field>
                    <b-field grouped>
                        <b-input placeholder="2.2.4 ที่นี่จังหวัดอะไร" expanded
                          v-model="form.mmse.placeOrientation.q2_2_4.answer"></b-input>
                        <b-checkbox size="is-medium" v-model="form.mmse.placeOrientation.q2_2_4.correct">ถูกต้อง</b-checkbox>
                    </b-field>
                    <b-field grouped>
                        <b-input placeholder="2.2.5 ที่นี่ภาคอะไร" expanded
                          v-model="form.mmse.placeOrientation.q2_2_5.answer"></b-input>
                        <b-checkbox size="is-medium" v-model="form.mmse.placeOrientation.q2_2_5.correct">ถูกต้อง</b-checkbox>
                    </b-field>
                </div>
            </b-message>
            <b-message title="3. Registration" :closable="false" type="is-primary">
                <p>
                    ทดสอบการบันทึกความจำโดยให้จำชื่อของ 3 อย่าง (3 คะแนน) ต่อไปนี้จะเป็นการทดสอบความจำโดยจะบอกชื่อของ 3 อย่าง ให้คุณ (ตา, ยาย...) ฟังดีๆ นะคะ/ครับ
                    จะบอกเพียงครั้งเดียว เมื่อพูดจบแล้วให้คุณ (ตา,ยาย...) พูดทวนตามที่ได้ยินทั้ง 3 ชื่อ แล้วจำไว้ให้ดีนะคะ/ครับ เดี๋ยวจะถามซ้ำ
                </p>
                <b-field label="ทดสอบครั้งแรกหรือห่างจากครั้งก่อนมากกว่า 2 เดือน">
                    <b-field grouped>
                        <b-checkbox size="is-medium" v-model="form.mmse.registration.present.item1">ดอกไม้</b-checkbox>
                        <b-checkbox size="is-medium" v-model="form.mmse.registration.present.item2">แม่น้ำ</b-checkbox>
                        <b-checkbox size="is-medium" v-model="form.mmse.registration.present.item3">รถไฟ</b-checkbox>
                        <b-checkbox size="is-medium" v-model="form.mmse.registration.present.correct">ทำได้</b-checkbox>
                    </b-field>
                </b-field>
                <b-field label="ทดสอบซ้ำภายใน 2 เดือน ให้ใช้คำว่า">
                    <b-field grouped>
                        <b-checkbox size="is-medium" v-model="form.mmse.registration.recent.item1">ต้นไม้</b-checkbox>
                        <b-checkbox size="is-medium" v-model="form.mmse.registration.recent.item2">ทะเล</b-checkbox>
                        <b-checkbox size="is-medium" v-model="form.mmse.registration.recent.item3">รถยนต์</b-checkbox>
                        <b-checkbox size="is-medium" v-model="form.mmse.registration.recent.correct">ทำได้</b-checkbox>
                    </b-field>
                </b-field>
            </b-message>
            <b-message type="is-primary" title="4. Attention or Calculation ทดสอบสมาธิโดยคิดเลขในใจ (5 คะแนน)">
                <b-field label="ผู้ถูกทดสอบสามารถคิดเลขในใจได้หรือไม่">
                    <div class="block">
                        <b-radio v-model="form.mmse.attentionAndCalculation.calculatable" native-value="yes" size="is-medium">ได้</b-radio>
                        <b-radio v-model="form.mmse.attentionAndCalculation.calculatable" native-value="no" size="is-medium">ไม่ได้</b-radio>
                    </div>
                </b-field>
                <b-field label="ข้อนี้คิดเลขในใจโดยเอา 100 ตั้ง ลบออกทีละ 7 ไปเรื่อยๆ ได้ผลลัพธ์เท่าไหร่บอกมา" v-if="form.mmse.attentionAndCalculation.calculatable==='yes'">
                    <div class="block">
                        <b-field>
                            <b-input v-model="form.mmse.calculation.answer1" placeholder="93"></b-input>
                        </b-field>
                        <b-field>
                            <b-input v-model="form.mmse.calculation.answer2" placeholder="86"></b-input>
                        </b-field>
                        <b-field>
                            <b-input v-model="form.mmse.calculation.answer3" placeholder="79"></b-input>
                        </b-field>
                        <b-field>
                            <b-input v-model="form.mmse.calculation.answer4" placeholder="72"></b-input>
                        </b-field>
                        <b-field>
                            <b-input v-model="form.mmse.calculation.answer5" placeholder="65"></b-input>
                        </b-field>
                    </div>
                </b-field>
                <b-field label="เดี๋ยวผม/ดิฉัน จะสะกดคำว่ามะนาวให้คุณ ตา/ยาย ฟังแล้วให้คุณตา/ยาย สะกดถอยหลังจากพยัญชนะตัวหลังไปตัวแรก คำว่ามะนาวสะกดว่า มอม้า-สระอะ-นอหนู-สระอา-วอแหวน คุณตา/ยาย สะกดถอยหลังให้ฟังสิครับ/ค่ะ" v-else>
                    <div class="block">
                        <b-field>
                            <b-input v-model="form.mmse.attention.answer1" placeholder="ว"></b-input>
                        </b-field>
                        <b-field>
                            <b-input v-model="form.mmse.attention.answer2" placeholder="า"></b-input>
                        </b-field>
                        <b-field>
                            <b-input v-model="form.mmse.attention.answer3" placeholder="น"></b-input>
                        </b-field>
                        <b-field>
                            <b-input v-model="form.mmse.attention.answer4" placeholder="ะ"></b-input>
                        </b-field>
                        <b-field>
                            <b-input v-model="form.mmse.attention.answer5" placeholder="ม"></b-input>
                        </b-field>
                    </div>
                </b-field>
                <b-checkbox v-model="form.mmse.attentionAndCalculation.correct" size="is-medium">ทำได้</b-checkbox>
            </b-message>
            <b-message title="5. Recall" :closable="false" type="is-primary">
                <p>
                    ทดสอบความจำระยะสั้นของชื่อสิ่งของ 3 อย่างที่ให้จำไว้แล้ว (3 คะแนน)
                </p>
                <p>เมื่อสักครู่ที่ให้จำของ 3 อย่าง จำได้ไหม มีอะไรบ้าง</p>
                <b-field label="ทดสอบครั้งแรกหรือห่างจากครั้งก่อนมากกว่า 2 เดือน">
                    <b-field>
                        <b-field>
                        <b-checkbox v-model="form.mmse.recall.present.item1" size="is-medium">ดอกไม้</b-checkbox>
                        <b-checkbox v-model="form.mmse.recall.present.item2" size="is-medium">แม่น้ำ</b-checkbox>
                        <b-checkbox v-model="form.mmse.recall.present.item3" size="is-medium">รถไฟ</b-checkbox>
                        <b-checkbox v-model="form.mmse.recall.present.correct" size="is-medium">ทำได้</b-checkbox>
                        </b-field>
                    </b-field>
                </b-field>
                <b-field label="ทดสอบซ้ำภายใน 2 เดือน ให้ใช้คำว่า">
                    <b-field>
                        <b-field>
                        <b-checkbox v-model="form.mmse.recall.recent.item1" size="is-medium">ต้นไม้</b-checkbox>
                        <b-checkbox v-model="form.mmse.recall.recent.item2" size="is-medium">ทะเล</b-checkbox>
                        <b-checkbox v-model="form.mmse.recall.recent.item3" size="is-medium">รถยนต์</b-checkbox>
                        <b-checkbox v-model="form.mmse.recall.recent.correct" size="is-medium">ทำได้</b-checkbox>
                        </b-field>
                    </b-field>
                </b-field>
            </b-message>
            <b-message type="is-primary" title="6. Naming: ทดสอบการบอกชื่อของที่ได้เห็น (2 คะแนน)">
                <b-field label="6.1 ยื่นดินสอให้ผู้ถูกทดสอบดูแล้วถามว่า ของสิ่งนี้เรียกว่าอะไร">
                    <b-input placeholder="ดินสอ" v-model="form.mmse.naming.q6_1.answer"></b-input>
                </b-field>
                <b-checkbox size="is-medium" v-model="form.mmse.naming.q6_1.correct">ทำได้</b-checkbox>
                <b-field label="6.2 ชี้ที่นาฬิกาข้อมือให้ผู้ถูกทดสอบดูแล้วถามว่า ของสิ่งนี้เรียกว่าอะไร">
                    <b-input placeholder="นาฬิกาข้อมือ" v-model="form.mmse.naming.q6_2.answer"></b-input>
                </b-field>
                <b-checkbox size="is-medium" v-model="form.mmse.naming.q6_2.correct">ทำได้</b-checkbox>
            </b-message>
            <b-message title="7. Repetition ทดสอบการพูดซ้ำคำที่ได้ยิน" :closable="false" type="is-primary">
              <p>
                ตั้งใจฟังผม/ดิฉันให้ดีนะ เมื่อผม/ดิฉันพูดข้อความนี้แล้วให้คุณตา/ยาย พูดตามผม/ดิฉันจะบอกเพียงครั้งเดียว <strong>ใครใคร่ขายใข่ไก่</strong>
              </p>
              <b-field>
                <b-input placeholder="คำตอบ" v-model="form.mmse.repetition.answer"></b-input>
              </b-field>
              <b-checkbox size="is-medium" v-model="form.mmse.repetition.correct">ทำได้</b-checkbox>
            </b-message>
          <b-message title="8. Verbal command ทดสอบการเข้าใจความหมายและทำตามคำสั่ง (3 คะแนน)" :closable="false" type="is-primary">
            <p>
              ข้อนี้ให้ทำตามที่บอก ตั้งใจฟังดีๆ นะเดี๋ยวผม/ดิฉัน จะส่งกระดาษให้แล้วคุณตา/ยาย รับด้วยมือขวา พับครึ่งด้วยมือทั้งสองข้าง เสร็จแล้ววางไว้ที่ พื้น/โต๊ะ/เตียง
            </p>
            <b-checkbox size="is-medium" v-model="form.mmse.verbal.item1">รับด้วยมือขวา</b-checkbox>
            <b-checkbox size="is-medium" v-model="form.mmse.verbal.item2">พับครึ่งด้วยมือ 2 ข้าง</b-checkbox>
            <b-checkbox size="is-medium" v-model="form.mmse.verbal.item3">วางไว้ที่ (พื้น,โต๊ะ,เตียง)</b-checkbox>
            <b-checkbox size="is-medium" v-model="form.mmse.verbal.correct">ทำได้</b-checkbox>
          </b-message>
          <b-message title="9. Written command ทดสอบการอ่าน การเข้าใจความหมาย สามารถทำตามได้ (1 คะแนน)" :closable="false" type="is-primary">
            <p>
              ให้คุณตา/ยาย อ่านแล้วทำตาม จะอ่านออกเสียงหรืออ่านในใจก็ได้ ผู้ทดสอบแสดงกระดาษที่เขียนว่าหลับตา
            </p>
            <h1 class="title is-size-1">หลับตา</h1>
            <b-checkbox size="is-medium" v-model="form.mmse.written.correct">ทำได้</b-checkbox>
          </b-message>
          <b-message title="10. Writing ทดสอบการเขียนภาษาอย่างมีความหมาย (1 คะแนน)" :closable="false" type="is-primary">
            <p>
              ให้คุณตา/ยาย เขียนข้อความอะไรก็ได้ที่อ่านแล้วรู้เรื่องหรือมีความหมาย 1 ประโยค
            </p>
            <b-field>
              <b-input placeholder="ประโยคที่เขียน" v-model="form.mmse.writing.sentence"></b-input>
            </b-field>
            <b-checkbox size="is-medium" v-model="form.mmse.writing.meaningful">ประโยคมีความหมาย</b-checkbox>
          </b-message>
          <b-message title="11. Visuoconstruction ทดสอบความสัมพันธ์ระหว่างตากับมือ (1 คะแนน)" :closable="false" type="is-primary">
            <p>
              ให้คุณตา/ยาย วาดภาพให้เหมือนกับในตัวอย่าง
            </p>
            <img src="../assets/visio.png">
            <b-field>
              <b-checkbox size="is-medium" v-model="form.mmse.visuo.correct">ทำได้</b-checkbox>
            </b-field>
          </b-message>
          <div class="buttons is-centered">
            <router-link class="button is-medium is-light" :to="{name: 'VAS'}">
              ย้อนกลับ
            </router-link>
            <a class="button is-medium is-success" @click="save">
              <b-icon pack="far" icon="save"></b-icon>
              <span>บันทึก</span>
            </a>
            <button class="button is-medium is-primary" @click="saveAndClose">
              บันทึกและปิดการลงข้อมูล
            </button>
          </div>
        </div>
    </section>
</template>

<script>
  import { mapState } from 'vuex'
    export default {
        name: "MMSE",
        data() {
            return {
                activeStep: 4,
            }
        },
      computed: {
          ...mapState(['form'])
      },
      methods: {
        save() {
          let self = this
          this.$store.dispatch('saveForm').then(()=>{
            this.$store.commit('SET_LAST_UPDATE')
            self.$buefy.dialog.alert({
              title: 'Login Successful',
              message: 'บันทึกข้อมูลเรียบร้อยแล้ว',
              type: 'is-success',
              hasIcon: true,
              icon: 'check-circle',
              iconPack: 'fa',
              ariaRole: 'alertdialog',
              ariaModal: true,
            })
          }).catch(()=>{
            self.$buefy.dialog.alert({
              title: 'Error!',
              message: 'โปรแกรมไม่สามารถบันทึกข้อมูลได้ โปรดลองใหม่อีกครั้ง',
              type: 'is-danger',
              hasIcon: true,
              icon: 'times-circle',
              iconPack: 'fa',
              ariaRole: 'alertdialog',
              ariaModal: true
            })
          })
        },
          saveAndClose() {
            this.save()
            this.$router.push({name: 'Records'})
          }
      }
    }
</script>

<style scoped>

</style>