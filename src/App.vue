<template>
  <div class="vodka">
    <header class="shadow">
      <div class="logo">
        <span class="blue">Синее/</span>
        <span class="light-blue">Синее</span>
      </div>
    </header>

    <control-panel @onReset="onReset" />

    <selling-logs :logInfo="logInfo" />

    <div class="vodka-van" :class="store.state.vodkaIsComing ? 'green' : 'red'">
      <i class="material-icons">local_shipping</i>
      <p>{{ store.state.vodkaIsComing ? "Водка едет" : "Водка не едет" }}</p>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "@vue/runtime-core";

import ControlPanel from "./components/control-panel.vue";
import SellingLogs from "./components/selling-logs.vue";
import { useStore } from "vuex";
export default {
  name: "App",
  components: {
    ControlPanel,
    SellingLogs,
  },
  setup() {
    const store = useStore();
    const logInfo = ref([]);

    const generateAmount = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };

    const initSells = () => {
      store.commit("reset");

      store.state.interval = setInterval(() => {
        sellBottles();

        if (store.state.vodkaCount < 50 && !store.state.vodkaIsComing) {
          store.state.vodkaIsComing = true;
          setTimeout(() => {
            store.commit("orderVodka");
          }, 18000);
        }
      }, 5000 * store.state.sellingSpeed);
    };

    const log = (value) => {
      logInfo.value.push(value);
    };

    const getTime = () => {
      const today = new Date();
      return (
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
      );
    };

    const sellBottles = () => {
      const amount = generateAmount(1, 4);
      store.commit("procedureSell", amount);
      log(getTime() + " | Продано бутылок: " + amount);
    };

    onMounted(() => {
      initSells();
    });

    const onReset = () => {
      logInfo.value = [];
    };

    return {
      logInfo,
      onReset,
      store,
    };
  },
};
</script>

<style lang="scss">
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Fredoka", sans-serif;
}

.red {
  color: red;
}

.green {
  color: green;
}

.vodka-van {
  display: flex;
  width: 150px;
  justify-content: space-around;
  align-items: center;

  position: absolute;
  top: 580px;
  left: 100px;
}

.shadow {
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
}

.vodka {
  width: 100%;
  height: 100%;
  position: relative;
}

header {
  width: 100%;
  height: 50px;
  background-color: #67c6f2;
  position: relative;
}

.blue {
  color: #11345c;
}

.light-blue {
  color: #005baa;
}

.logo {
  position: absolute;
  top: 5px;
  left: 25px;
}

span {
  font-size: 2em;
  font-weight: 600;
}
</style>
