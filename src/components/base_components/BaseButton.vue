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
@import '../../assets/global.scss';

button {


    border-radius: 18px;
    border: none;
    color: white;
    font-size: 17px;
    font-weight: 600;
    height: 2.5em;
    margin: 10px 0px 10px 0px;
    transition: box-shadow .4s;
    width: 140px;
    &:hover {
        -moz-box-shadow: 0px 0px 44px -16px rgba(0, 0, 0, 0.75);
        -webkit-box-shadow: 0px 0px 44px -16px rgba(0, 0, 0, 0.75);
        box-shadow: 0px 0px 34px -16px rgba(0, 0, 0, 0.50);
        outline: none;
    }
    &:focus {
        outline: none;
    }
}
.secondary {
    background: map-get($colors, "secondary");
}
.tertiary {
    background: map-get($colors, "tertiary");
}
.cancel {
    background: map-get($colors, "cancel");
}
</style>