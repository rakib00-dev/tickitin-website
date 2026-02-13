<script>
  const sportsCards = [
    {
      src: "/images/sports_page/sports_card_baseball.webp",
      title: "Minnesota Twins vs Atlanta Braves",
      name: "Baseball",
    },
    {
      src: "/images/sports_page/sports_card_NBA.png",
      title: "Minnesota Twins vs Atlanta Braves",
      name: "Basketball",
    },
    {
      src: "/images/sports_page/sports_card_football.jpg",
      title: "Minnesota Twins vs Atlanta Braves",
      name: "Football",
    },
    {
      src: "/images/sports_page/sports_card_hockey.jpg",
      title: "Minnesota Twins vs Atlanta Braves",
      name: "Hockey",
    },
    {
      src: "/images/sports_page/sports_card_skating.jpg",
      title: "Minnesota Twins vs Atlanta Braves",
      name: "Skating",
    },
    {
      src: "/images/sports_page/sports_card_soccer.jpg",
      title: "Minnesota Twins vs Atlanta Braves",
      name: "Soccer",
    },
    {
      src: "/images/sports_page/sports_card_boxing.jpg",
      title: "Minnesota Twins vs Atlanta Braves",
      name: "Boxing",
    },
  ].reverse();
</script>

<template>
  <section class="">
    <div class="max-w-7xl mx-auto px-6 py-20 text-center">
      <div class="px-4flex justify-between items-center max-md:flex-col">
        <h2 class="text-2xl md:text-4xl font-bold">Football</h2>
        <p class="text-gray-500 mb-8">
          Discover the best tickets to Sports events.
        </p>
      </div>

      <Carousel v-bind="carouselConfig">
        <Slide
          v-for="sports in sportsCards"
          :key="`${sports.name}firstcardfromfour`"
        >
          <div class="p-4 w-full h-full">
            <FourSportsCard
              :src="sports.src"
              :name="sports.name"
              :title="sports.title"
            />
          </div>
        </Slide>

        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </div>
  </section>
</template>
