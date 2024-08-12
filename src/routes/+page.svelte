<script lang="ts">
    import {Label, Input, Card, Button} from "flowbite-svelte";
</script>

<div class="m-5">
    <Label for="input" class="block mb-2">元の文字列</Label>
    <Input id="input" placeholder="絵文字でもなんでも"/>
</div>

<div class="m-5">
    <Label for="output" class="block mb-2">完成品</Label>
    <Card id="output">
        <h1 class="text-3xl">文字</h1>
        <Button size="xs" class="w-fit mt-2">Copy</Button>
    </Card>
</div>
