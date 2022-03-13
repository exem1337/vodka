<template>
<div class="vodka">
  <header class="shadow">
    <div class="logo">
      <span class="blue">Синее/</span>
      <span class="light-blue">Синее</span>
    </div>
  </header>

  <control-panel />

  <selling-logs :logInfo="logInfo"/>
</div>
</template>

<script>
import { onMounted, ref } from '@vue/runtime-core';

import ControlPanel from './components/control-panel.vue';
import SellingLogs from './components/selling-logs.vue';
export default {
  name: "App",
  components: {
    ControlPanel,
    SellingLogs
  },
  setup() {
    const logInfo = ref(['awdawd'])

    const initSells = () => {

    }

    const log = (value) => {
      logInfo.value.push(value)
    }

    onMounted(() => {
      initSells();
      log('awwewewewe')
    })

    return {
      logInfo
    }
  }
};
</script>

<style lang="scss">
*,*::before,*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Fredoka', sans-serif;
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
