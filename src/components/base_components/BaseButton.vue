<template>
    <div>
        <button :class="buttonClass">
            <slot></slot>
        </button>
    </div>
</template>

<script>
export default {
    props: {
        buttonClass: String
    }
}
</script>

<style lang="scss" scoped>
button {
    font-size: 17px;
    font-weight: 600;
    color: white;

    height: 2.5em;
    border: none;
    border-radius: 18px;
    transition: box-shadow .4s;
    &:hover {
        outline: none;
        -webkit-box-shadow: 0px 0px 44px -16px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 0px 44px -16px rgba(0, 0, 0, 0.75);
        box-shadow: 0px 0px 34px -16px rgba(0, 0, 0, 0.50);
    }
    &:focus {
        outline: none;
    }
}
.login {
    background: #44d7b6;
    margin: 10px 0px 10px 0px;
    width: 140px;
}
.primary {
    background: #0091FF;
    margin: 10px 0px 10px 0px;
    width: 140px;
}
</style>