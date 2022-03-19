<template>
    <div class="dashboard-comp">
        <div class="bar1">
            <DashboardDarkmodesidebar />
            <DashboardDarkmodeoverveiw />
            <DashboardDarkmodenotification />
        </div>
    </div>
</template>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.bar1{
display: flex;
flex-direction: row;
}
</style>