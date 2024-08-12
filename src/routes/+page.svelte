<script lang="ts">
	import { Label, Input, Card, Button } from 'flowbite-svelte';
	import { diacritical, diacriticalArray, iter } from '$lib';

	let input = '';

	function buttonClick(char: number) {
		return () => {
			input += String.fromCharCode(char);
		};
	}

	function deleteInput() {
		input = input.slice(0, input.length - 1);
	}

	function copy() {
		navigator.clipboard.writeText(input);
	}
</script>

<div class="w-full sm:w-96 lg:w-1/3 mx-auto p-4">
	<Label for="input" class="block mb-2">元の文字列</Label>
	<Input bind:value={input} id="input" placeholder="絵文字でもなんでも" />
</div>

<div class="w-full sm:w-96 lg:w-1/3 mx-auto p-4">
	<Card>
		<div class="flex gap-1 mx-auto">
			<Button size="xs" color="red" class="w-fit" on:click={deleteInput}>１字削除</Button>
			<Button size="xs" class="w-fit" on:click={copy}>コピー</Button>
			<Button
				size="xs"
				class="w-fit"
				color="yellow"
				on:click={() => {
					input = '';
				}}>クリア</Button
			>
		</div>
	</Card>
</div>

<div class="w-full sm:w-96 lg:w-1/3 mx-auto p-4">
	{#each diacriticalArray as type}
		{#if diacritical[type] !== undefined}
			<h1 class="text-3xl">{type}</h1>
			<div class="grid grid-cols-auto-fill-16 gap-1">
				{#each diacritical[type] as d}
					{#if d.isRange === true}
						{#each iter(d.begin, d.end) as char}
							<Button size="xl" color="alternative" on:click={buttonClick(char)}
								><p class="font-extrabold text-4xl">{String.fromCharCode(char)}</p></Button
							>
						{/each}
					{/if}
				{/each}
			</div>
		{/if}
	{/each}
</div>
