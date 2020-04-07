<template>
    <div>
        <input :type="type" :placeholder="placeholder" />
    </div>
</template>

<script>
export default {
    props: {
        placeholder: String,
        type: String
    },
}
</script>

<style lang="scss" scoped>
@import '../../assets/global.scss';

input {
    background-color: map-get($colors, 'input');
    border-radius: 18px;
    border: none;
    box-sizing: border-box;
    height: 3em;
    margin: 0 0 16px 0;
    padding: 8px 16px 8px 16px;
    width: 100%;
    &:hover {
        outline: none;
    }
    &:focus {
        background-color: map-get($colors, 'active-input');
        outline: none;
    }
}
</style>