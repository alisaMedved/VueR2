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

        </div>
      </div>
    </div>
    <currencies-autocomplete
        type="component"
        :autocompleteOptions="autocompleteOptions"
        :alreadyChecked="alreadyChecked"
        :disabled="disabled"
    />
    <add-button
        @click="addFromInput"
        type="button"
        class="my-4"
        :disabled="disabled"
    />
  </section>
</template>

<script>
import {getAllСurrencies} from "@/api/baseApi";
import AddButton from '@/components/AddButton.vue';
import CurrenciesAutocomplete from '@/components/CurrenciesAutocomplete.vue';
export default {
  components: {
    AddButton,
    CurrenciesAutocomplete,
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
      required: false,
    },
    flagAdded: {
      type: String,
      default: '',
      required: false,
    },
  },
  emits: {
    "add-ticker": value => (typeof value === 'string'),
  },
  data() {
    return {
      ticker: "",
      allCurrencies: [],
    }
  },
  created() {
    this.fetchAllCurrencies();
  },
  computed: {
    autocompleteOptions: function() {
      if (this.allCurrencies.length && this.ticker) {
        return this.allCurrencies.filter(elm => elm.FullName.search(new RegExp(this.ticker, 'gi')) !== -1).splice(0, 4);
      } else {
        return [];
      }
    },
    alreadyChecked: {
      get: function() {
        return Boolean(this.flagAdded);
      },
      set: function(newValue) {
        this.alreadyChecked = newValue;
      }
    }
  },
  watch: {
    flagAdded() {
      if (this.flagAdded) {
        this.ticker = this.flagAdded;
      }
    }
  },
  methods: {
    addFromInput() {
    this.$emit('add-ticker', this.ticker);
    this.ticker = "";
    },
    async fetchAllCurrencies() {
      const res = await getAllСurrencies();
      this.allCurrencies = Object.entries(res).map(([key, valueField]) =>
          ({...valueField, shortName: key})
      );
    },
    changeFlag() {
      if (this.alreadyChecked) this.alreadyChecked = false;
    },
  }
}
</script>