import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Momo',
		addr: 'Borneo'
	}
});

export default app;