<template>
  <div v-if="alreadyChecked">Эта валюта уже добавлена!</div>
  <button v-for="elm in autocompleteOptions"
          type="button"
          :key="elm.id"
          :disabled="disabled"
          @click="selectAutocompleteOption(elm)"
          class="my-4 inline-flex items-center py-2 px-4 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-gray-600 hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          :class="{'opacity-50': disabled}"
  >
    {{elm.FullName}}
  </button>
</template>

<script>
export default {
  name: 'currencies-autocomplete',
  props: {
    autocompleteOptions: {
      type: Array,
      required: false,
      default: function() {
        return [];
      },
    },
    alreadyChecked: {
      type: Boolean,
      default: false,
      required: false,
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  emits: {
    "add-ticker-autocomplete": value => (typeof value === "object"),
  },
  methods: {
    selectAutocompleteOption(selectedOption) {
      console.log(this.alreadyChecked);
      console.log('selectedOption внизу ', selectedOption);
      this.$emit('add-ticker-autocomplete', selectedOption)
    }
  },
}
</script>