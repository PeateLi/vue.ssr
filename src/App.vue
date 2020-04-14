<template>
	<div id="app">
		<header>
			<header-component></header-component>
		</header>
		<main>
			<router-view></router-view>
		</main>
		<footer>
			<footer-component></footer-component>
		</footer>
	</div>
</template>

<script>
export default {
  name: 'App',
   components:{
        HeaderComponent:() => import('./layout/Header'),
        FooterComponent:() => import('./layout/Footer'),
    },
}
	// 
</script>

<style lang="sass">
@import '../scss/style.scss'
</style>
