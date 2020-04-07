<template>
    <div class="inputBox">
        <div class="icon">
            <font-awesome-icon :icon="icon" />
        </div>
        <input :type="type" :placeholder="placeholder" />
    </div>
</template>

<script>
export default {
    props: {
        placeholder: String,
        icon: String,
        type: String
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/global.scss';

.inputBox {
    align-items: center;
    background-color: map-get($colors, 'input');
    border-radius: 18px;
    box-sizing: border-box;
    display: flex;
    height: 3em;
    margin: 0 0 16px 0;
    &:hover {
        background-color: map-get($colors, 'active-input');
    }
    .icon {
        padding: 0px 0px 0px 16px;
        opacity: 30%;
    }
    input {
        background-color: inherit;
        border: none;
        padding: 0px 16px 0px 16px;
        width: 100%;
        &:focus {
            outline: none;
        }
    }
}
</style>