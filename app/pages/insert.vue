<template>
        
    <div class="flex flex-col h-full gap-4 border border-blue-500 rounded-lg p-4 m-10">
        <Table/>
        <div class="flex flex-row  gap-4 p-4 m-10">    
            <NuxtLink to="/import" class=" p-2 "><Buttons label="submit" color="bg-blue-500 hover:bg-blue-600"></Buttons></NuxtLink>
            <NuxtLink to="/export" class=" p-2 "><Buttons label="home" color="bg-green-500 hover:bg-green-600"></Buttons></NuxtLink>
        </div>
    </div>
</template>