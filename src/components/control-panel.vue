<template>
  <div class="panel shadow">
    <p>Синяя панель</p>
    <div class="panel-controls">
      <button class="shadow" @click="onSpeedIncrease">Ускорить продажи</button>
      <button class="shadow" @click="onSpeedDecrease">Замедлить продажи</button>
      <button class="shadow" @click="onSellsReset">Перезагрузить</button>
    </div>

    <div class="panel-info">
      <p class="info-element">
        Осталось бутылок: {{ $store.state.vodkaCount }}
      </p>
      <p class="info-element">Скорость продажи: {{ getSellingSpeed }}</p>
      <p class="info-element">
        Статус магазина: {{ $store.state.deficit ? "Дефицит" : "Профицит" }}
      </p>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup(props, { emit }) {
    const store = useStore();

    const getSellingSpeed = computed(() => {
      return store.state.sellingSpeed == 1.5
        ? "Низкая"
        : store.state.sellingSpeed == 1
        ? "Средняя"
        : "Высокая";
    });

    const onSpeedIncrease = () => {
      if (store.state.sellingSpeed != 0.5) {
        store.state.sellingSpeed -= 0.5;
      }
      store.commit("reset");
    };

    const onSpeedDecrease = () => {
      if (store.state.sellingSpeed != 1.5) {
        store.state.sellingSpeed += 0.5;
      }
      store.commit("reset");
    };

    const onSellsReset = () => {
      store.commit("reset");
      emit("onReset");
    };

    return {
      getSellingSpeed,
      onSpeedDecrease,
      onSpeedIncrease,
      onSellsReset,
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
