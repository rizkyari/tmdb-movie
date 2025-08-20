<template>
    <div>
        <form
        @submit.prevent="onSubmit"
        role="search"
        aria-label="Search"
        class="flex flex-col gap-2 mb-3 sm:flex-row"
        >
            <input
            :value="modelValue"
            @input="onInput"
            @keyup.enter="onSubmit"
            type="search"
            :placeholder="placeholder"
            aria-label="Search query"
            class="w-full sm:flex-1 min-w-0 rounded-lg border border-neutral-700 bg-neutral-900 text-neutral-100 placeholder-neutral-500 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-500"
            :disabled="disabled"
            />
            
            <button
            type="submit"
            :disabled="disabled"
            class="rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-2 text-neutral-100 hover:bg-neutral-700 disabled:opacity-50"
            >
                {{ buttonText }}
            </button>

            <button
            v-if="showClear"
            type="button"
            @click="onClear"
            class="rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-2 text-neutral-100 hover:bg-neutral-700"
            >
                Clear
            </button>
        </form>
    </div>
</template>

<script setup lang="ts">
const {
    modelValue,
    placeholder = "Search…",
    disabled = false,
    buttonText = "Search",
    showClear = true,
} = defineProps<{
    modelValue: string
    placeholder?: string
    disabled?: boolean
    buttonText?: string
    showClear?: boolean
}>();

const emit = defineEmits<{
    (e: 'update:modelValue', v: string): void
    (e: 'search'): void
    (e: 'clear'): void
}>();

function onInput(e: Event) {
    emit('update:modelValue', (e.target as HTMLInputElement).value);
}

function onSubmit() {
    emit('search');
}

function onClear() {
    emit('update:modelValue', '');
    emit('clear');
}
</script>
