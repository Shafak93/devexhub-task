<template>
    <div class="w-64 bg-gray-1 min-h-screen shadow-lg border rounded-tr-3xl relative -top-14">
        <div class="menu  left-20 flex justify-around items-center">
            <span class="menuicon">
                <font-awesome-icon icon="fa-solid fa-house-chimney " class="fabIcon text-white-1  " />
            </span>
            <a class="text-white-1" href="">Home</a>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style>
.menu {
    background-color: #393E46;
    height: 50px;
    left: 100px;
    padding-right: 20px;
    position: absolute;
    top: 199px;
}

.menuicon {
    position: absolute;
    left: -30px;
    width: 50px;
    height: 50px;
    background-color: #9B0000;
    border-radius: 50%;

}

.fabIcon {
    width: 30px;
    height: 26px;
    padding: 12px 10px;
}

a {
    font-size: 25px;
    padding-left: 50px;
    padding-right: 50px;

}
</style>