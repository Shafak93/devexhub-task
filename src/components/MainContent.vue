<template>
    <article class="userSection cursor-pointer">
        <UserContent />
    </article>
    <article class="viewSection cursor-pointer">
        <ViewContent />
    </article>
</template>


<script>
import UserContent from './UserContent.vue';
import ViewContent from './ViewContent.vue';
export default {
    components: { UserContent, ViewContent },
}
</script>

<style>

</style>