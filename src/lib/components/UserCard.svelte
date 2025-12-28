<script lang="ts">
    import type { User } from "$lib/domain/user";
    import { goto } from "$app/navigation";

    export let user: User

</script>


<div class="card">
    <h3>{user.username}</h3>
    <p>{user.email}</p>
</div>