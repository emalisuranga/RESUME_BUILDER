<template>
  <div class="page__header">
    <header>
      <h1 class="header-title">Personal details</h1>
    </header>
  </div>
  <div class="center-container">
    <v-stepper v-model="step" :items="items" hide-actions alt-labels class="custom-sheet">
      <template v-slot:item.1>
        <v-sheet width="800" class="custom-sheet">
          <Info></Info>
        </v-sheet>

      </template>

      <template v-slot:item.2>
        <v-sheet width="800" class="custom-sheet">
          <v-radio-group v-model="shipping" label="Delivery Method">
            <v-radio label="Standard Shipping" value="5"></v-radio>
            <v-radio label="Priority Shipping" value="10"></v-radio>
            <v-radio label="Express Shipping" value="15"></v-radio>
          </v-radio-group>
        </v-sheet>


      </template>

      <template v-slot:item.3>
        <h3 class="text-h6">Confirm</h3>

        <br>

        <v-sheet border>
          <v-table>
            <thead>
              <tr>
                <th>Description</th>
                <th class="text-end">Quantity</th>
                <th class="text-end">Price</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="(product, index) in products" :key="index">
                <td v-text="product.name"></td>
                <td class="text-end" v-text="product.quantity"></td>
                <td class="text-end" v-text="product.quantity * product.price"></td>
              </tr>

              <tr>
                <td>Shipping</td>
                <td></td>
                <td class="text-end" v-text="shipping"></td>
              </tr>

              <tr>
                <th>Total</th>
                <th></th>
                <th class="text-end">
                  ${{ total }}
                </th>
              </tr>
            </tbody>
          </v-table>
        </v-sheet>
      </template>
      <v-stepper-items>
        <v-stepper-content>
          <div class="button-container">
            <v-btn text @click="validateAndBack" class="left-button">Back</v-btn>
            <v-btn color="primary" @click="validateAndNext" class="right-button">Continue</v-btn>
          </div>
        </v-stepper-content>
      </v-stepper-items>

    </v-stepper>

  </div>
</template>

<script setup>
import Info from '@/components/Info.vue'
</script>

<script>
export default {
  data: () => ({
    shipping: 0,
    step: 1,
    items: [
      'Personal details',
      'Education',
      'Work',
      'Skills',
      'Info',
    ],
  }),

  computed: {
    subtotal() {
      return this.products.reduce((acc, product) => acc + product.quantity * product.price, 0)
    },
    total() {
      return this.subtotal + Number(this.shipping ?? 0)
    },
    isPersonalFormValid() {
      return true;
      // return this.$refs.personalForm.validate();
    },
  },
  methods: {
    validateAndNext() {
      if (this.isPersonalFormValid) {
        this.step += 1;
      }
    },
    validateAndBack() {
      this.step -= 1;
    },
  },
}
</script>

<style>
.center-container {
  position: relative;
  /* Make it a relative container for absolute positioning */
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 10vh;
  background-color: transparent;
  z-index: 100 !important;
}

.button-container {
  clear: both;
}

.left-button {
  float: left;
  margin: 10px 10px
}

.right-button {
  float: right;
  margin: 10px 10px
}

.page__header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 12vh;
  position: relative;
  overflow: hidden;
  z-index: 100 !important;
  flex-direction: column;
  /* Stack elements vertically */
}

.page__header h1 {
  text-align: center;
  font-size: 40px;
  margin: 0;
  padding: 0;
  color: #fff;
}

.custom-sheet {
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07) !important;
}
</style>

