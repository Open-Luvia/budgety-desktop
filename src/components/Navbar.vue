<template>
    <div>
        <nav>
            <div class="hamburger" @click="toggleNavbar">
                <font-awesome-icon icon="bars" />
            </div>
            <div class="desktop-navbar" ref="desktop-navbar">
                <ul class="nav-links">
                    <li><router-link :to="{ name: 'dashboard' }">Dashboard</router-link></li>
                    <li><router-link :to="{ name: 'accounts' }">Conti</router-link></li>
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
    methods: {
        toggleNavbar() {
            const nav = this.$refs['desktop-navbar'].classList
            nav.contains('open') ? nav.remove('open') : nav.add('open')
        }
    }
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
    .hamburger {
        display: none;
    }
    .desktop-navbar {
        display: flex;
        height: 100%;
        justify-content: space-between;
        padding: 0px 16px;
        color: inherit;
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
            color: inherit;
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

@media (max-width: 600px) {
    nav {
        .hamburger {
            height: 100%;
            padding: 0px 24px;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            cursor: pointer;
        }
        .desktop-navbar {
            height: 0;
            display: none;
        }
        .open {
            transition: height .4s linear;
            height: calc(100vh - 64px);
            background: map-get($colors, 'navbar');
            display: flex;
            flex-direction: column;
            opacity: 1;
            .nav-links {
                flex-direction: column;
                li {
                    padding: 32px 0px;
                }
            }
            .settings {
                padding: 32px 0px;
                flex-direction: column;
            }
        }
    }
}
</style>