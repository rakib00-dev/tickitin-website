<script setup>
  import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
  import "vue3-carousel/dist/carousel.css";
  import ReviewsCard from "./ReviewsCard.vue";

  const carouselConfig = {
    itemsToShow: 1,
    snapAlign: "center",
    wrapAround: true,
    gap: 20,
    breakpoints: {
      768: {
        itemsToShow: 2,
      },
      1024: {
        itemsToShow: 3,
      },
    },
  };

  const customerAppReviews = [
    {
      user: `Marcus Thorne`,
      rating: `5/5`,
      title: `Better than Venmo`,
      review: `I got tickets for my friends and I in under 2 minutes and split the payment instantly. It honestly felt easier than Venmo’ing everyone after.`,
      profileImage: `https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=256&q=80`,
    },
    {
      user: `Elena Rodriguez`,
      rating: `5/5`,
      title: `Social Experience`,
      review: `Tickitin is the first ticket app that doesn’t feel transactional. I found an event, brought my friends into the plan, and everything stayed organized in one place.`,
      profileImage: `https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=256&q=80`,
    },
    {
      user: `David Chen`,
      rating: `5/5`,
      title: `Seamless Date Night`,
      review: `We used Tickitin for a date night and it was way smoother than bouncing between apps. Tickets, planning, and sharing details felt effortless.`,
      profileImage: `https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=256&q=80`,
    },
    {
      user: `Sophie Miller`,
      rating: `5/5`,
      title: `No More Chaos`,
      review: `Planning events with a group usually turns into chaos. With Tickitin, it felt like the plan just came together without chasing people down.`,
      profileImage: `https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80`,
    },
    {
      user: `Julian Banks`,
      rating: `5/5`,
      title: `Fast Coordination`,
      review: `I don’t have time to coordinate details across group chats. Tickitin helped us lock in tickets fast, and everyone stayed on the same page.`,
      profileImage: `https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=256&q=80`,
    },
    {
      user: `Amara Okoro`,
      rating: `5/5`,
      title: `The Organizer's Dream`,
      review: `I’m usually the one who ends up organizing everything. Tickitin made it simple to plan something fun without all the back-and-forth.`,
      profileImage: `https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=256&q=80`,
    },
    {
      user: `Linda Thompson`,
      rating: `5/5`,
      title: `Super Easy Tech`,
      review: `I’m not the most tech-savvy, but Tickitin was super easy. I bought tickets, shared them, and didn’t have to stress about anything.`,
      profileImage: `https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=256&q=80`,
    },
    {
      user: `Kevin Vanhook`,
      rating: `5/5`,
      title: `Modern & Smooth`,
      review: `Tickitin feels like the social version of ticketing. We planned a full night out and everyone was in instantly.`,
      profileImage: `https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=256&q=80`,
    },
  ];
</script>

<template>
  <section class="max-w-7xl mx-auto px-6 py-20 text-center">
    <h2 class="text-2xl font-bold">What Our Customers are saying</h2>
    <p class="text-gray-500 mb-8">see our website reviews</p>

    <Carousel v-bind="carouselConfig">
      <Slide v-for="appReview in customerAppReviews" :key="i">
        <div class="p-4 w-full h-full">
          <ReviewsCard
            :src="appReview.profileImage"
            :name="appReview.user"
            :p="appReview.review"
            :title="appReview.title"
            fiveStar
          />
        </div>
      </Slide>

      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </section>
</template>

<style>
  .carousel__next,
  .carousel__prev {
    background: #59bbd4;
    color: white;
    border-radius: 100%;
    height: 40px;
    width: 40px;
  }

  .carousel__pagination {
    padding-top: 10px;
    margin-top: 0;
    position: relative;
  }
</style>
