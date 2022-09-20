<template>
    <h2 class="text-center py-2 text-white-1 text-xl relative">View
        <font-awesome-icon v-on:click="showView= !showView" icon="fa-solid fa-caret-down" class="absolute right-12" />
    </h2>

    <transition>
        <div v-if="showView" class="viewContent">
            <p class="viewTitle">View Content</p>
            <h1>View</h1>
            <div class="px-3 ">
                <p class="mt-10 font-bold">What is Lorem ipsum</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id quae accusamus, eaque repellat quis
                    minus vitae officia sequi! Fugit deserunt eius eos exercitationem, tenetur explicabo porro iure
                    laborum ut ipsa possimus distinctio obcaecati delectus natus maiores unde itaque eligendi quae
                    ratione odit aliquam, quo modi quaerat accusantium! Aut, iusto nisi.</p>
                <p class="mt-10 font-bold">How does it works? </p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, sit? Quos velit earum beatae
                    soluta
                    repellendus magni esse, officiis tempora quisquam quod laborum, itaque at eligendi expedita
                    dolorem
                    accusantium a ab voluptate? Rerum explicabo similique impedit unde, illum voluptate ipsam
                    aliquam
                    ullam, minima itaque architecto quis eius ipsa. Numquam, nihil.</p>
                <p class="mt-10 font-bold">How does it works? </p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, sit? Quos velit earum beatae
                    soluta
                    repellendus magni esse, officiis tempora quisquam quod laborum, itaque at eligendi expedita
                    dolorem
                    accusantium a ab voluptate? Rerum explicabo similique impedit unde, illum voluptate ipsam
                    aliquam
                    ullam, minima itaque architecto quis eius ipsa. Numquam, nihil.</p>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    data() {
        return {
            showView: false
        };
    },
}
</script>


<style scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.75s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

article h2 {
    width: 924px;
    height: 45px;
    background-color: #9B0000;
    margin: 0 auto;
    margin-top: 20px;
    border-radius: 20px 20px 20px 20px;
}

.viewTitle {
    width: 924px;
    height: 40px;
    margin: 0 auto;
    font-size: 18px;
    padding: 5px;
    background-color: #FFD9BF;
    color: #434343;
    font-weight: bold;
}

.viewContent {
    background-color: white;
    width: 924px;
    margin: 0 auto;
    position: relative;
    top: -12px;
}

.viewContent h1 {
    color: #434343;
    font-weight: bold;
    text-align: center;
    margin-top: 20px;
    font-size: 50px;
}

.viewContent p {
    font-size: 18px;
}
</style>