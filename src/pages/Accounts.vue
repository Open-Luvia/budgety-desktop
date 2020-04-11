<template>
    <div>
        <Navbar />
        <div class="body">
            <div class="sidebar">
                <div
                    style="color: white;"
                    v-for="account in accounts"
                    :key="account.id">
                    {{ account.name }}
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import { mapState } from 'vuex'

export default {
    components: {
        Navbar
    },
    computed: {
        ...mapState('accounts',['accounts'])
    }
}
</script>

<style lang="sass" scoped>

@import '@/assets/global.scss'
.body 
    height: calc(100vh - #{$navbarHeight})
    display: flex

</style>