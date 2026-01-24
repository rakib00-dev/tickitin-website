<template>
  <section class="bg-[var(--primary-light-color)] py-25 mt-20 md:my-10">
    <div class="baseContainer grid gap-[50px] max-sm:!px-12 max-md:!px-12">
      <h1
        class="text-center text-[28px] lg:text-[2.625rem] font-semibold text-[var(--primary-color)] leading-[100%] md:leading-[120%] max-md:px-4"
      >
        Built for Dev Teams Who Hate Bottlenecks
      </h1>

      <div
        class="flex max-md:flex-col justify-start md:justify-center md:items-center gap-20 md:gap-14"
      >
        <div class="flex flex-col gap-4">
          <h4 class="font-bold text-2xl">Feature</h4>
          <div class="text-sm hidden md:flex flex-col max-md:gap-6">
            <span
              class="flex items-center gap-1 text-sm lg:text-lg text-[#262E35] font-[300]"
            >
              <span class="text-xl text-[#262E35] font-[300]">•</span>AI-Powered
              QA & Release Automation</span
            >

            <span
              class="flex items-center gap-1 text-sm lg:text-lg text-[#262E35] font-[300]"
            >
              <span class="text-xl text-[#262E35] font-[300]">•</span>Multi-Repo
              Sync & Dependency Management</span
            >

            <span
              class="flex items-center gap-1 text-sm lg:text-lg text-[#262E35] font-[300]"
            >
              <span class="text-xl text-[#262E35] font-[300]">•</span>CLI +
              Dashboard Flexibility</span
            >

            <span
              class="flex items-center gap-1 text-sm lg:text-lg text-[#262E35] font-[300]"
            >
              <span class="text-xl text-[#262E35] font-[300]">•</span>Coverage +
              Test-First Release Logic</span
            >

            <span
              class="flex items-center gap-1 text-sm lg:text-lg text-[#262E35] font-[300]"
            >
              <span class="text-xl text-[#262E35] font-[300]">•</span>Docs,
              Changelogs, Tags Auto-Generated</span
            >

            <span
              class="flex items-center gap-1 text-sm lg:text-lg text-[#262E35] font-[300]"
            >
              <span class="text-xl text-[#262E35] font-[300]">•</span>OAuth +
              Git Integration</span
            >
          </div>
          <div class="text-sm md:hidden flex flex-col max-md:gap-6">
            <span
              class="flex items-center gap-1 text-sm lg:text-lg text-[#262E35] font-[300]"
            >
              <span class="text-xl text-[#262E35] font-[300]">•</span>AI-powered
              PR Automation</span
            >

            <span
              class="flex items-center gap-1 text-sm lg:text-lg text-[#262E35] font-[300]"
            >
              <span class="text-xl text-[#262E35] font-[300]">•</span>Multi-repo
              Dependency Management</span
            >

            <span
              class="flex items-center gap-1 text-sm lg:text-lg text-[#262E35] font-[300]"
            >
              <span class="text-xl text-[#262E35] font-[300]">•</span>Smart
              Release Workflows</span
            >

            <span
              class="flex items-center gap-1 text-sm lg:text-lg text-[#262E35] font-[300]"
            >
              <span class="text-xl text-[#262E35] font-[300]">•</span>Seamless
              Tool Integrations</span
            >

            <span
              class="flex items-center gap-1 text-sm lg:text-lg text-[#262E35] font-[300]"
            >
              <span class="text-xl text-[#262E35] font-[300]">•</span>Quality &
              Compliance Checks</span
            >
          </div>
        </div>

        <div class="flex flex-col gap-4">
          <h4 class="font-bold text-2xl">Benefits</h4>
          <div class="text-sm hidden md:flex flex-col max-md:gap-5">
            <span
              class="flex items-center gap-1 text-sm lg:text-lg text-[#262E35] font-[300]"
            >
              <span class="text-xl text-[#262E35] font-[300]">•</span>Save dev
              hours, eliminate manual work</span
            >

            <span
              class="flex items-center gap-1 text-sm lg:text-lg text-[#262E35] font-[300]"
            >
              <span class="text-xl text-[#262E35] font-[300]">•</span>Avoid
              version mismatches and update chaos</span
            >

            <span
              class="flex items-center gap-1 text-sm lg:text-lg text-[#262E35] font-[300]"
            >
              <span class="text-xl text-[#262E35] font-[300]">•</span>Use it
              your way — terminal or web UI</span
            >

            <span
              class="flex items-center gap-1 text-sm lg:text-lg text-[#262E35] font-[300]"
            >
              <span class="text-xl text-[#262E35] font-[300]">•</span>Stop
              broken code before it ships</span
            >

            <span
              class="flex items-center gap-1 text-sm lg:text-lg text-[#262E35] font-[300]"
            >
              <span class="text-xl text-[#262E35] font-[300]">•</span>Never miss
              a release note or a Git tag again</span
            >

            <span
              class="flex items-center gap-1 text-sm lg:text-lg text-[#262E35] font-[300]"
            >
              <span class="text-xl text-[#262E35] font-[300]">•</span>Plug in
              GitHub, GitLab, or Bitbucket in seconds</span
            >
          </div>
          <div class="text-sm md:hidden flex flex-col max-md:gap-5">
            <span
              class="flex items-center gap-1 text-sm lg:text-lg text-[#262E35] font-[300]"
            >
              <span class="text-xl text-[#262E35] font-[300]">•</span>Save hours
              weekly and reduce human error</span
            >

            <span
              class="flex items-center gap-1 text-sm lg:text-lg text-[#262E35] font-[300]"
            >
              <span class="text-xl text-[#262E35] font-[300]">•</span>Maintain
              consistency across all services</span
            >

            <span
              class="flex items-center gap-1 text-sm lg:text-lg text-[#262E35] font-[300]"
            >
              <span class="text-xl text-[#262E35] font-[300]">•</span>Get to
              production faster, with fewer blockers</span
            >

            <span
              class="flex items-center gap-1 text-sm lg:text-lg text-[#262E35] font-[300]"
            >
              <span class="text-xl text-[#262E35] font-[300]">•</span>Works with
              your current CI/CD & VCS stack</span
            >

            <span
              class="flex items-center gap-1 text-sm lg:text-lg text-[#262E35] font-[300]"
            >
              <span class="text-xl text-[#262E35] font-[300]">•</span>Detect
              issues early and stay audit-ready</span
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
