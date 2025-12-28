<script lang="ts">
    import { getUsers, loadUsers } from "$lib/state/user.svelte";
    import UserGrid from "$lib/components/UserGrid.svelte";

    $effect(() => {
        loadUsers()
    })

    const users = $derived(getUsers());

</script>

<h1>Users</h1>

<UserGrid {users}/>