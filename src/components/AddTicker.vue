<template>
  <section>
    <div class="flex">
      <div class="max-w-xs">
        <label for="wallet" class="block text-sm font-medium text-gray-700"
        >Тикер</label
        >
        <div class="mt-1 relative rounded-md shadow-md">
          <input
              v-model="ticker"
              @keydown.enter="addFromInput"
              @keydown="changeFlag"
              @click="changeFlag"
              type="text"
              name="wallet"
              id="wallet"
              class="block w-full pr-10 border-gray-300 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm rounded-md"
              placeholder="Например DOGE"
          />
<!--          <div v-if="flagAdded">Эта валюта уже добавлена!</div>-->
<!--          <button v-for="elm in autocompleteOptions"-->
<!--                  :key="elm.id"-->
<!--                  @click="addFromAutocomplete(elm)"-->
<!--                  class="my-4 inline-flex items-center py-2 px-4 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-gray-600 hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"-->
<!--          >-->
<!--            {{elm.FullName}}-->
<!--          </button>-->
        </div>
      </div>
    </div>
    <add-button
        @click="addFromInput"
        type="button"
        class="my-4"
        :disabled="disabled"
    />
  </section>
</template>
<script>
import AddButton from '@/components/AddButton.vue';
export default {
  components: {
    AddButton,
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  emits: {
    "add-ticker": value => (typeof value === 'boolean'),
  },
  data() {
    return {
      ticker: "",
    }
  },
  methods: {
    addFromInput() {
    this.$emit('add-ticker', this.ticker);
    this.ticker = "";
    },
  }
}
</script>