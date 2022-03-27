<template>
  <div class="panel shadow">
    <div class="panel-controls">
      <div class="radio-wrapper">
        <input type="checkbox" v-model="isFastSells" id="speed">
        <label for="#speed">Скорость</label>
      </div>
      <button class="shadow" @click="onSellsReset">Перезагрузить</button>
    </div>

    <div class="panel-info">
      <p class="info-element">Осталось бутылок: {{ store.state.vodkaCount }}</p>
      <p class="info-element">
        Скорость продажи:
        {{ isFastSells ? "Быстро" : "Медленно" }}
      </p>
      <p class="info-element">
        Статус магазина:
        {{
          store.state.vodkaCount > 100
            ? "Продажи идут"
            : store.state.deficit
            ? "Дефицит"
            : "Профицит"
        }}
      </p>
      <p class="info-element">Прибыль: {{ actualMoneyGained }}</p>
    </div>
  </div>
</template>

<script>
import { watch, ref } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  props: ["actualMoneyGained"],
  setup(props, { emit }) {
    const store = useStore();
    const isFastSells = ref(false);

    watch(isFastSells, (currentValue) => {
      currentValue ? store.state.sellingSpeed = 300 : store.state.sellingSpeed = 1;
      onSellsReset();
    });

    const onSellsReset = () => {
      store.commit("reset");
      emit("onReset");
    };

    return {
      onSellsReset,
      store,
      isFastSells,
    };
  },
};
</script>

<style lang="scss" scoped>
.panel {
  width: 1300px;
  height: 150px;
  background-color: lighten(green, 80%);
  border-radius: 15px;
  display: flex;
  margin: 50px;
  padding: 15px;
  align-items: center;
  justify-content: space-between;
  .panel-info {
    margin-top: 15px;
    display: flex;

    .info-element {
      margin-top: 15px;
      margin-left: 15px;
      border-left: 1px solid black;
      height: fit-content;
      padding-left: 15px;

      &:first-child {
        border: none;
      }
    }
  }

  button {
    margin-left: 15px;
  }

  input {
    margin-top: 25px;
  }

  p {
    font-size: 1.25em;
    text-align: center;
    cursor: default;
  }

  .panel-controls {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    button {
      background-color: green;
      color: white;
      font-size: 1.25em;
      padding: 15px;
      margin-top: 25px;
      width: 80%;
      border: none;
      transition: 0.3s ease;

      &:hover {
        background-color: lighten(green, 10%);
      }
    }
  }
}
</style>
