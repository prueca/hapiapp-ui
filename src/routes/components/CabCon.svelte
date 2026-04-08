<script lang="ts">
    import Icon from '@iconify/svelte'
</script>

<div class="w-full">
    <div class="content-wrapper">
        <div class="card bg-base-100">
            <div class="card-body">
                <h2 class="card-title">Lorem Store</h2>
                <div class="cabcon">
                    <div class="cabcon-code">CABCONJAN2020</div>
                    <button class="copy-btn btn btn-circle btn-ghost btn-sm">
                        <Icon icon="si:copy-duotone" width="24" />
                    </button>
                </div>
                <div class="card-actions">
                    <button class="btn btn-lg">
                        <Icon icon="ph:camera-duotone" width="20" />
                        <span>Capture</span>
                    </button>
                    <button class="btn btn-lg">
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

    .card {
        @apply w-full rounded-xl bg-(--primary) text-(--accent);
    }

    .cabcon {
        @apply flex items-center gap-2;

        .cabcon-code {
            @apply text-2xl font-semibold;
        }

        .copy-btn {
            @apply border-0 bg-white/0 text-(--accent);
        }
    }

    .card-actions {
        @apply mt-4 gap-4;

        .btn {
            @apply w-31 rounded-lg border-none bg-(--secondary) text-base text-(--primary);
        }
    }
</style>
