<template>
    <div data-theme="light">
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<script lang="ts" setup>
useHead({
    title: "Pharma Tech",
    meta: [
        {
            name: "description",
            content: "A pharmaceutical technology website",
        },
    ],
    link: [
        {
            rel: "preconnect",
            href: "https://fonts.googleapis.com",
        },
        {
            rel: "preconnect",
            href: "https://fonts.gstatic.com",
            crossorigin: "anonymous",
        },
        {
            rel: "stylesheet",
            href: 'https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap',
        },
    ],
});
</script>
