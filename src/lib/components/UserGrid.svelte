<script lang="ts">
    import type { Result } from "$lib/types/result";
    import type { ApiError } from "$lib/types/api-error";
    import type { User } from "$lib/domain/user";
    import UserCard from "./UserCard.svelte";

    export let users: Result<User[], ApiError>
</script>


{#if users.kind === 'idle'}
  <p>Ready to load users</p>

{:else if users.kind === 'loading'}
  <p>Loading...</p>

{:else if users.kind === 'error'}
  <p>Failed to load</p>

{:else if users.kind === 'success'}
  <div class="grid">
    {#each users.data as user}
      <UserCard {user} />
    {/each}
  </div>
{/if}