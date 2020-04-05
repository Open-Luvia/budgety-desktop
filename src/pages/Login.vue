<template>
    <b-container class="h-100" fluid>
        <b-row align-v="center" align-h="center" class="h-100 bg-dark">
            <b-col>
                <div class="card">
                    <div class="header">
                        <span>Accedi</span>
                    </div>
                    <div class="body">
                        <BaseInput type="text" placeholder="Username"></BaseInput>
                        <BaseInput type="password" placeholder="Password"></BaseInput>
                        <BaseButton buttonClass="login">Accedi</BaseButton>
                    </div>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    data() {
        return {
            username: ''
        }
    }
}
</script>

<style lang="scss" scoped>
.card {
    .header {
        font-size: 24px;
        font-weight: 500;
        color: white;
        height: 2.5em;
        border-radius: 20px 20px 0px 0px;
        background-color: #31a09b;
        line-height: 2.5em;
        span {
            height: 100%;
            vertical-align: middle;
        }
    }
    .body {
        height: 100%;
        padding: 48px 30px 30px 30px;
        input {
            margin: 0 0 20px 0;
            box-sizing: border-box;
            border: none;
            border-radius: 20px;
            background-color: #ebebeb;
            height: 3em;
            width: 100%;
        }
        .button {
            border: none;
            background-color: #44D7B6;
            margin: 10px 0px 10px 0px;
            height: 3em;
            width: 200px;
        }
    }
    margin: 0px auto;
    border: none;
    height: 400px;
    width: 376px;
    justify-self: center;
    border-radius: 20px;
}
</style>
