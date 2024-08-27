<script>
    import { onMount } from 'svelte'
    import { invalidateAll } from '$app/navigation'

    export let data

    onMount(
        () => {
            setInterval(
                () => {
                    invalidateAll()
                },
                5000
            )

            return () => {
                clearInterval()
            }
        }
    )

</script>

<svelte:head>
    <title>Cetta Environment Data</title>
    <meta name="description" content="" />
</svelte:head>

{#each Object.keys(data.environment_data) as unit}
<div class="mb-3 mt-5">
    <h4 class="text-lg font-bold"># {unit}</h4>
</div>
<div class="flex flex-wrap gap-3 mb-3">
{#each data.environment_data[unit] as data}
    <div class="w-fit border rounded shadow-lg mb-2 me-2 px-2">
        <h3 class="font-medium">{data.place}</h3>
        <p>{data.value}</p>
    </div>
{/each}
</div>
<hr />
{/each}
