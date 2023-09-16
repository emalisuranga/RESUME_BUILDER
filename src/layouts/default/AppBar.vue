<template>
    <header class="custom-header">
      <div class="logo">
        <span class="logo-text">Jack Pod</span>
      </div>
    </header>
</template>

<style>
.custom-header {
  background-color: #2dc46a;
  color: white;
  padding: 30px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
}

.logo img {
  width: 40px;
  /* Adjust the width as needed */
  height: auto;
  /* Maintain aspect ratio */
  margin-right: 10px;
}

.logo-text {
  font-size: 24px;
  /* Default font size for larger screens */
  font-weight: bold;
}

/* Media query for smaller screens (e.g., mobile devices) */
@media (max-width: 768px) {
  .logo-text {
    font-size: 18px;
    /* Adjust font size for smaller screens */
    padding-left: 0;
    /* Remove left padding on smaller screens */
  }
}
</style>