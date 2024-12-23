<script lang="ts">
	import { walletApi } from "$lib/common/api/near/client";
	import { Button } from "$lib/common/ui/components";

	const onClick = () => walletApi.signInModal();
</script>

<Button {onClick}>Sign In</Button>
