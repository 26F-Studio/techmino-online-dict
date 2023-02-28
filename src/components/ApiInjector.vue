<script setup lang="ts">
import api from "@/core/api";

api.$message = useMessage();
api.$dialog = useDialog();
api.$notification = useNotification();
api.$loadingBar = useLoadingBar();
</script>

<template/>