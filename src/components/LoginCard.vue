<template>
    <div class="card">
        <div class="header">
            <span v-if="type == 'login'">Accedi</span>
            <span v-if="type == 'signup'">Registrati</span>
        </div>
        <div class="body">
            <BaseInput v-if="type == 'signup'" placeholder="Name"></BaseInput>
            <BaseInput type="text" placeholder="Username"></BaseInput>
            <BaseInput type="password" placeholder="Password"></BaseInput>
            <BaseButton v-if="type == 'login'" buttonClass="secondary">Accedi</BaseButton>
            <BaseButton v-if="type == 'signup'" buttonClass="secondary">Registrati</BaseButton>
            <div v-if="type == 'login'">
                Non hai un account?
                <router-link :to="{ name: 'signup' }">Registrati</router-link>
            </div>
            <div v-if="type == 'signup'">
                Hai già un account?
                <router-link :to="{ name: 'login' }">Accedi</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        type: String
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/global.scss';

.card {
    margin: 0px auto;
    border: none;
    height: 440px;
    width: 440px;
    border-radius: 20px;
    .header {
        font-size: 24px;
        font-weight: 500;
        color: white;
        height: 2.5em;
        border-radius: 20px 20px 0px 0px;
        background-color: map-get($colors, 'primary');
        line-height: 2.5em;
    }
    span {
        height: 100%;
        vertical-align: middle;
    }
    .body {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        padding: 48px 40px 40px 40px;
    }
}
</style>