<template>
    <div class="container-fluid p-0">
        <div class="amn  ">
            <div class="container p-0 pt-3">
                <h1 class="display-2 text-white">Rea!</h1>
                <p class="lead text-white">Spara upp till 50%.</p>    
                <router-link to="/" class="btn my-btn">Läs mer</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'rea'
}
</script>

<style lang="scss" scoped>
.amn {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    background-image: url('../assets/images/hero.jpg');
    height: 40vh;
    .my-btn {
            background-color: #243541;
            color: white;
    }
    .btn:hover {
        filter: brightness(140%);
    }
}
@media (max-width: 600px) {
    .amn {
        .display-2 {
            font-size: 40px;
            margin-left: 1rem;
        }
        .lead {
            margin-left: 1rem;
        }
        .btn {
            margin-left: 1rem;
        }
    }
}
</style>