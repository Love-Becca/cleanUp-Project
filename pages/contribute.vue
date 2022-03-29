<template>
    <div id="add">
        <LazyAuthBottlesubmit />
    </div>
</template>

<script>
export default {
   middleware: ["auth"],
}
</script>