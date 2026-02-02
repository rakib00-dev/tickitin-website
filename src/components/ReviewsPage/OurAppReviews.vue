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
      user: "Rightrrrraheb",
      rating: "5/5 Stars",
      title: "Easy and seamless with great features!",
      review:
        "Been using Tickitin for a while works great and easy to use highly recommend!",
      profileImage:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    },
    {
      user: "KennyC#123",
      rating: "5/5 Stars",
      title: "super app",
      review:
        "tickitin is the one stop shop for all eve nets in america. it's literally the first super app. No need for me to go anywhere else!!!",
      profileImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    },
    {
      user: "Peterclios",
      rating: "5/5 Stars",
      title: "Greatest app for event goers",
      review: "Literally is like the Tesla for events and experiences.",
      profileImage:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
    },
    {
      user: "Caprilesr",
      rating: "5/5 Stars",
      title: "the best app",
      review: "the best app to save money",
      profileImage:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
    },
    {
      user: "yoyo45667",
      rating: "5/5 stars",
      title: "My go to for ticket purchases",
      review:
        "I've been using Tickitin for purchasing tickets, and it's been a great experience! One of the best features is the price transparency-what you see is exactly what you pay, with no hidden fees or surprises.",
      profileImage:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    },
    {
      user: "$$moneycash",
      rating: "5/5 stars",
      title: "The greatest ticket platform",
      review: "10 out of 10. Every detail is thought out. Extremely unique.",
      profileImage:
        "https://images.unsplash.com/photo-1552058544-1271d757419b?auto=format&fit=crop&w=150&q=80",
    },
    {
      user: "Rightrrrraheb",
      rating: "5/5 stars",
      title: "Easy and seamless with great features!",
      review:
        "Been using Tickitin for a while works great and easy to use highly recommend!",
      profileImage:
        "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=150&q=80",
    },
  ];
</script>

<template>
  <section class="bg-gray-50">
    <div class="max-w-7xl mx-auto px-6 py-20 text-center">
      <h2 class="text-2xl font-bold">Our App Reviews</h2>
      <p class="text-gray-500 mb-8">See what our customer say on our mobile</p>

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
    </div>
  </section>
</template>
