<template>
    <div
        class="flex flex-col justify-between lg:max-w-[1454px] md:max-w-[1454px] xl:max-w-[1454px] w-full m-auto relative lg:min-h-[100dvh] xl:lg:min-h-[100dvh] md:lg:min-h-[100dvh]"
    >
        <Navbar class="sticky top-0 z-50" />
        <div class="">
            <slot />
        </div>
        <div class="footer-section">
            <SectionFooter />
        </div>
    </div>
</template>

<script lang="ts" setup></script>

<style></style>
