<script lang="ts">
    import Icon from '@iconify/svelte'
</script>

<div class="cabcon">
    <div class="content-wrapper">
        <div class="card bg-base-100">
            <div class="card-body">
                <h2 class="card-title">Lorem Store</h2>
                <p class="code">CABCONJAN2020</p>
                <div class="card-actions">
                    <button class="btn btn-lg">
                        <Icon icon="ic:twotone-camera" width="20" />
                        <span>Capture</span>
                    </button>
                    <button class="btn flex btn-lg">
                        <Icon icon="ph:scan-duotone" width="20" />
                        <span>Scan</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

<style lang="postcss">
    @reference 'tailwindcss';

    .cabcon {
        @apply w-full;
    }

    .card {
        @apply w-full rounded-xl bg-(--primary) text-white shadow-(--shadow-primary);
    }

    .code {
        @apply text-2xl font-bold;
    }

    .card-actions {
        @apply mt-4 gap-4;

        .btn {
            @apply w-30 rounded-lg border-none bg-white/25 text-white;
        }
    }
</style>
