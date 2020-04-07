<template>
    <div class="card">
        <div class="header">
            <span v-if="type == 'login'">Accedi</span>
            <span v-if="type == 'signup'">Registrati</span>
        </div>
        <div class="body">
            <BaseInputWithIcon v-if="type == 'signup'" placeholder="Name" icon="user-circle"></BaseInputWithIcon>
            <BaseInputWithIcon type="text" placeholder="Email" icon="envelope"></BaseInputWithIcon>
            <BaseInputWithIcon type="password" placeholder="Password" icon="lock"></BaseInputWithIcon>
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
    border-radius: 20px;
    border: none;
    height: 440px;
    margin: 0px auto;
    width: 440px;
    .header {
        background-color: map-get($colors, 'primary');
        border-radius: 20px 20px 0px 0px;
        color: white;
        font-size: 24px;
        font-weight: 500;
        height: 2.5em;
        line-height: 2.5em;
    }
    span {
        height: 100%;
        vertical-align: middle;
    }
    .body {
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: center;
        padding: 48px 40px 40px 40px;
    }
}
</style>