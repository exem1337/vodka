<template>
  <div class="panel shadow">
    <p>Синяя панель</p>
    <div class="panel-controls">
      <input type="range" min="1" max="300" v-model="selSpeed" />
      <button class="shadow" @click="onSellsReset">Перезагрузить</button>
    </div>

    <div class="panel-info">
      <p class="info-element">Осталось бутылок: {{ store.state.vodkaCount }}</p>
      <p class="info-element">
        Скорость продажи:
        {{ store.state.sellingSpeed }}
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
    const selSpeed = ref(1);

    watch(selSpeed, (currentValue) => {
      store.state.sellingSpeed = currentValue;
      onSellsReset();
    });

    const onSellsReset = () => {
      store.state.sellingSpeed = selSpeed.value;
      store.commit("reset");
      emit("onReset");
    };

    return {
      onSellsReset,
      store,
      selSpeed,
    };
  },
};
</script>

<style lang="scss" scoped>
.panel {
  width: 300px;
  height: 450px;
  background-color: lighten(#67c6f2, 20%);
  border-radius: 15px;

  margin: 50px;
  padding: 15px;

  .panel-info {
    margin-top: 15px;

    .info-element {
      margin-top: 15px;
    }
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
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    button {
      background-color: #005baa;
      color: white;
      font-size: 1.25em;
      padding: 15px;
      margin-top: 25px;
      width: 80%;
      border: none;
      transition: 0.3s ease;

      &:hover {
        background-color: lighten(#005baa, 10%);
      }
    }
  }
}
</style>
