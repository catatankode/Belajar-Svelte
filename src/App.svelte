<script>
  import Navbar from "./Navbar.svelte";
  import Player from "./Player.svelte";
  import AddPlayer from "./AddPlayer.svelte";

  let players = [
    {
      name: "Rendi",
      points: 53
    },
    {
      name: "Wijiatmoko",
      points: 45
    },
    {
      name: "Momo",
      points: 34
    }
  ];

  const addPlayer = e => {
    const newPlayer = e.detail;
    players = [...players, newPlayer];
  };

  const removePlayer = e => {
    players = players.filter(player => player.name !== e.detail);
  };
</script>

<main>
  <Navbar />
  <div class="container">
    <AddPlayer on:addplayer={addPlayer} />
    {#if players.length === 0}
      <p>No Players</p>
    {:else}
      {#each players as player}
        <Player
          name={player.name}
          points={player.points}
          on:removeplayer={removePlayer} />
      {/each}
    {/if}
  </div>
</main>

<style>
main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
