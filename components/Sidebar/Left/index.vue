<template>
    <div class="h-screen flex flex-col">
    <div class="p-2 my-2 rounded-full hover:bg-blue-50  w-min dark:hover:bg-white/20" 
    :class="transition">
        <NuxtLink to="/">
        <div class="w-8 h-8">
        <LogoTwitter/>
    </div>
    </NuxtLink>
    </div>
    <SidebarLeftTab>
        <template v-slot:icon>
            <HomeIcon />
        </template>
        <template v-slot:name>
            Home
        </template>
    </SidebarLeftTab>
    <SidebarLeftTab>
        <template v-slot:icon>
            <HashtagIcon />
        </template>
        <template v-slot:name>
            Explore
        </template>
    </SidebarLeftTab>
    <SidebarLeftTab>
        <template v-slot:icon>
            <BellIcon />
        </template>
        <template v-slot:name>
            Notifications
        </template>
    </SidebarLeftTab>
    <SidebarLeftTab>
        <template v-slot:icon>
            <InboxIcon />
        </template>
        <template v-slot:name>
            Messages
        </template>
    </SidebarLeftTab>
    <SidebarLeftTab>
        <template v-slot:icon>
            <BookmarkIcon />
        </template>
        <template v-slot:name>
            Bookmarks
        </template>
    </SidebarLeftTab>
    <SidebarLeftTab>
        <template v-slot:icon>
            <DocumentTextIcon />
        </template>
        <template v-slot:name>
            Lists
        </template>
    </SidebarLeftTab>
    <SidebarLeftTab>
        <template v-slot:icon>
            <DotsCircleHorizontalIcon />
        </template>
        <template v-slot:name>
            More
        </template>
    </SidebarLeftTab>
</div>
 
</template>

<script setup>
    const {defaultTransition} = useTailwindConfig();
    import {HomeIcon} from "@heroicons/vue/solid"
    import {HashtagIcon, BellIcon, InboxIcon, BookmarkIcon, DocumentTextIcon, UserIcon, DotsCircleHorizontalIcon } from "@heroicons/vue/outline"
</script>