<template>
  <div class="avatar-dropdown relative">
    <div class="avatar" @click="toggleDropdown">
      <div class="w-10 rounded-full">
        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
      </div>
    </div>
    
    <ul v-if="isDropdownOpen" class="dropdown-menu">
      <li><a href="#">Profile</a></li>
      <li><NuxtLink to="/order">Commande</NuxtLink></li>
      <li><a href="#">Logout</a></li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const isDropdownOpen = ref(false);

function toggleDropdown() {
  console.log('toggleDropdown');
  isDropdownOpen.value = !isDropdownOpen.value;
}


function handleClickOutside(event: any) {
  if (!event.target.closest('.avatar-dropdown')) {
    isDropdownOpen.value = false;
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});

</script>

<style lang="scss" scoped>
.avatar-dropdown {
  position: relative;
}

.avatar {
  cursor: pointer;
}

.dropdown-menu {
  position: absolute;
  min-width: 130px;
  top: 3rem;
  right: 0;
  padding: 0;
  margin: 0;
  list-style: none;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.dropdown-menu li {
  padding: 10px;
  width: 100%;
}

.dropdown-menu li a {
  display: block;
  color: #333;
  text-decoration: none;
}

.dropdown-menu li:hover {
  background-color: #f5f5f5;
}

.dropdown-menu.show {
  display: block;
}
</style>

<script lang="ts" setup></script>

<style></style>
