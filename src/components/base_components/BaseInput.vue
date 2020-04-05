<template>
    <div>
        <input :type="type" :placeholder="placeholder">
    </div>
</template>

<script>
export default {
    props: {
        placeholder: String,
        type: String
    }
}
</script>

<style lang="scss" scoped>
input {
    margin: 0 0 16px 0;
    box-sizing: border-box;
    padding: 8px 16px 8px 16px;
    border: none;
    border-radius: 18px;
    background-color: #f0f0f0;
    height: 3em;
    width: 100%;
    &:hover{
        outline: none;
    }
    &:focus{
        outline: none;
        background-color: #dfdfdf;
    }
}
</style>