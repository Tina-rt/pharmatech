<template>
    <div class="lg:max-w-[1454px] md:max-w-[1454px] xl:max-w-[1454px] w-full m-auto relative">
        <Navbar class="sticky top-0 z-50"/>
        <div>
            <slot />
        </div>
        <div class="footer-section">
            <SectionFooter />
        </div>
    </div>
</template>

<script lang="ts" setup></script>

<style></style>
