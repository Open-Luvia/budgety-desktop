<template>
    <div>
        <nav>
            <div class="hamburger"></div>
            <div class="desktop-navbar">
                <ul class="nav-links">
                    <li>Dashboard</li>
                    <li>Conti</li>
                    <li>Report</li>
                    <li>Budget</li>
                </ul>
                <ul class="settings">
                    <font-awesome-icon icon="sliders-h" />
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import '../assets/global.scss';

nav {
    background: map-get($colors, 'navbar');
    box-sizing: border-box;
    color: white;
    font-size: 24px;
    font-weight: 700;
    height: 64px;
    list-style: none;
    padding: 0px 0px;
    text-decoration: none;
    width: 100vw;
    .desktop-navbar {
        display: flex;
        height: 100%;
        justify-content: space-between;
        padding: 0px 16px;
        .settings {
            align-items: center;
            display: flex;
            height: 100%;
            justify-content: flex-end;
            list-style: none;
            margin: 0px;
            padding: 0px 16px;
            text-decoration: none;
        }
        .nav-links {
            align-items: center;
            display: flex;
            height: 100%;
            justify-content: flex-start;
            list-style: none;
            margin: 0px;
            padding: 0px 0px;
            text-decoration: none;
            li {
                padding: 0px 16px;
            }
        }
    }
}
</style>