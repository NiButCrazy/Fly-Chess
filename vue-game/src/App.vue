<template>
    <Game></Game>
    <Ui></Ui>
</template>

<style>

*{
    margin: 0;
    padding: 0;
}

</style>

<script>

import Game from "./components/GameContainer.vue";
import Ui from "./components/UiContainer.vue";

export default {
    name: 'App',
    components: {
        Ui,
        Game
    }
}


</script>
