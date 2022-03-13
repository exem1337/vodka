<template>
<div class="panel">
    <p>Синяя панель</p>
    <div class="panel-controls">
        <button @click="onSpeedIncrease">Ускорить продажи</button>
        <button @click="onSpeedDecrease">Замедлить продажи</button>
        <button>Перезагрузить</button>
    </div>

    <div class="panel-info">
        <p class="info-element">Осталось бутылок: {{ $store.state.vodkaCount }}</p>
        <p class="info-element">Скорость продажи: {{ getSellingSpeed }}</p>
        <p class="info-element">Статус магазина: {{ $store.state.deficit ? 'Дефицит' : 'Профицит' }} </p>
    </div>
</div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
    setup() {
        const store = useStore()
        const getSellingSpeed = computed(() => {
            return store.state.sellingSpeed == 0 ? 'Низкая' : store.state.sellingSpeed == 1 ? 'Средняя' : 'Высокая'
        })

        const onSpeedIncrease = () => {
            if(store.state.sellingSpeed != 2) {
                store.state.sellingSpeed++;
            }
        }

        const onSpeedDecrease = () => {
            if(store.state.sellingSpeed != 0) {
                store.state.sellingSpeed--;
            }
        }

        return {
            getSellingSpeed,
            onSpeedDecrease,
            onSpeedIncrease
        }
    },
}
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
        }
    }
}
</style>