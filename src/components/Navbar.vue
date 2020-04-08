<template>
    <div>
        <nav>
            <div class="hamburger" @click="toggleNavbar">
                <font-awesome-icon :icon="icon" />
            </div>
            <div class="desktop-navbar" ref="desktop-navbar">
                <ul class="nav-links">
                    <li>
                        <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'accounts' }">Conti</router-link>
                    </li>
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
    data() {
        return {
            icon: 'bars'
        }
    },
    methods: {
        toggleNavbar() {
            const nav = this.$refs['desktop-navbar'].classList
            if (nav.contains('open')) {
                //chiusura
                clearTimeout()
                nav.remove('open')
                this.icon = 'bars'
                setTimeout(() => {
                    nav.add('closed')
                }, 400)
            } else {
                //apertura
                clearTimeout()
                this.icon = 'times'
                nav.remove('closed')
                setTimeout(() => {
                    nav.add('open')
                }, 100)
            }
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
            background: map-get($colors, 'navbar');
            opacity: 1;
            height: 0px;
            transition: height 0.4s linear;
            display: flex;
            flex-direction: column;
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
        .closed {
            display: none;
        }
        .open {
            opacity: 1;
            transition: height 0.4s linear;
            height: calc(100vh - 64px);
            background: map-get($colors, 'navbar');
            display: flex;
            flex-direction: column;
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