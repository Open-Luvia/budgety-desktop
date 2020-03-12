<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-232A33" style="background-color: #232A33;">
    <a class="navbar-brand" href="#">
      <svg
        width="32"
        height="32"
        viewBox="0 0 128 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <rect width="128" height="128" rx="31" fill="white" />
        <circle cx="64" cy="64" r="52" fill="#00A29D" />
        <path
          d="M77.8692 47.86C74.2092 47.86 69.2292 49 65.5692 53.56C63.4092 50.02 59.6892 47.86 54.6492 47.86C51.5892 47.86 47.9892 48.58 44.7492 51.7V51.52C44.7492 49.84 43.3692 48.46 41.3292 48.46C39.4692 48.46 37.9692 49.84 37.9692 51.52V76C37.9692 78.04 39.5892 79 41.3292 79C43.0092 79 44.7492 78.04 44.7492 76V64.12C44.7492 57.1 50.5692 53.86 53.6292 53.86C58.6692 53.86 60.9492 57.28 60.9492 62.26V75.88C60.9492 77.74 62.3892 79 64.4292 79C66.5892 79 67.7892 77.74 67.7892 75.88V64.12C67.7892 57.58 73.0692 53.86 76.9092 53.86C81.9492 53.86 84.2292 57.28 84.2292 62.26V75.88C84.2292 77.74 85.6092 79 87.6492 79C89.8692 79 91.0692 77.74 91.0692 75.88V62.38C91.0692 53.8 86.2092 47.86 77.8692 47.86Z"
          fill="white"
        />
      </svg>
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="#">
            Dashboard
            <span class="sr-only">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Conti</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Report</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Budget</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style scoped></style>
